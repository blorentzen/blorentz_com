/**
 * Build a downloadable audit archive (zip) and store it in R2.
 *
 * Usage:
 *   node --env-file=.env.local scripts/build-archive.mjs <slug>
 *
 * Example:
 *   node --env-file=.env.local scripts/build-archive.mjs acme-test
 *
 * What it does:
 *   1. Pulls the audit row (get_audit_admin RPC, service_role only)
 *   2. Writes README.txt containing the FULL feedback — executive summary +
 *      written assessment — so the client always has a hard copy of everything
 *   3. Streams the recording (and report PDF, if set) out of the private bucket
 *   4. Zips them with the README — fully streaming, so a large MP4 never lands
 *      in memory — and streams the zip back to R2 at archive_r2_path
 */
import { createClient } from "@supabase/supabase-js";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { PassThrough } from "node:stream";
import archiver from "archiver";

const slug = process.argv[2];
if (!slug) {
  console.error("Usage: node --env-file=.env.local scripts/build-archive.mjs <slug>");
  process.exit(1);
}

// --- 1. Fetch the audit row ---
const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET_KEY, {
  auth: { persistSession: false },
});
const { data, error } = await sb.rpc("get_audit_admin", { p_slug: slug });
if (error) {
  console.error("get_audit_admin error:", error.message);
  process.exit(2);
}
const audit = data?.[0];
if (!audit) {
  console.error(`No audit found for slug "${slug}".`);
  process.exit(3);
}

const bucket = process.env.R2_AUDITS_BUCKET;
const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

async function objectStream(key) {
  const res = await s3.send(new GetObjectCommand({ Bucket: bucket, Key: key }));
  return res.Body;
}

// --- 2. Build the README (the hard copy of all feedback) ---
function fmtDate(iso) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function mdToText(md) {
  return (md || "")
    .replace(/^#{1,6}\s+(.*)$/gm, (_, h) => `\n${h}\n${"-".repeat(h.length)}`)
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/(^|[^*])\*([^*\n]+?)\*/g, "$1$2")
    .replace(/`(.+?)`/g, "$1")
    .replace(/\[(.+?)\]\((.+?)\)/g, "$1 ($2)")
    .trim();
}

function buildReadme(a) {
  const out = [];
  out.push("=".repeat(64));
  out.push(`AI BUILD AUDIT — ${a.client_name}`);
  out.push(`Delivered ${fmtDate(a.delivery_date)}`);
  out.push(`Portal: https://blorentz.com/audits/${a.slug}  (live until ${fmtDate(a.sunset_date)})`);
  out.push("=".repeat(64));
  out.push("");
  out.push("This document contains the full written feedback from your audit, so");
  out.push("you always have a hard copy. The recorded session is included as");
  out.push("audit-recording.mp4" + (a.report_r2_path ? ", and the formatted report as audit-report.pdf." : "."));
  out.push("");

  const fixes = Array.isArray(a.summary_top_fixes) ? a.summary_top_fixes : [];
  const stops = Array.isArray(a.summary_top_stops) ? a.summary_top_stops : [];
  if (fixes.length || stops.length) {
    out.push("");
    out.push("EXECUTIVE SUMMARY");
    out.push("=================");
    if (fixes.length) {
      out.push("");
      out.push("Top three to fix this week:");
      fixes.forEach((f, i) => {
        out.push(`  ${i + 1}. ${f.problem}`);
        out.push(`     -> ${f.fix}`);
      });
    }
    if (stops.length) {
      out.push("");
      out.push("Top three to stop doing:");
      stops.forEach((s, i) => {
        out.push(`  ${i + 1}. ${s.pattern}`);
        out.push(`     -> ${s.why_stop}`);
      });
    }
  }

  if (a.report_markdown) {
    out.push("");
    out.push("");
    out.push("FULL WRITTEN ASSESSMENT");
    out.push("=======================");
    out.push("");
    out.push(mdToText(a.report_markdown));
  }

  out.push("");
  out.push("");
  out.push("Questions about anything here? Britton@empac.co");
  out.push("");
  return out.join("\n");
}

const readme = buildReadme(audit);

// --- 3 & 4. Assemble and upload the zip (streaming) ---
const archiveKey = audit.archive_r2_path || `audits/${slug}/audit-archive.zip`;

const passthrough = new PassThrough();
const archive = archiver("zip", { zlib: { level: 9 } });
archive.on("warning", (err) => console.warn("archiver warning:", err.message));
archive.on("error", (err) => {
  console.error("archiver error:", err);
  process.exit(4);
});
archive.pipe(passthrough);

const upload = new Upload({
  client: s3,
  params: {
    Bucket: bucket,
    Key: archiveKey,
    Body: passthrough,
    ContentType: "application/zip",
  },
});
const uploadPromise = upload.done();

if (audit.recording_r2_path) {
  console.log(`Adding recording: ${audit.recording_r2_path}`);
  archive.append(await objectStream(audit.recording_r2_path), {
    name: "audit-recording.mp4",
  });
} else {
  console.log("No recording_r2_path on the audit — skipping the MP4.");
}

if (audit.report_r2_path) {
  console.log(`Adding report PDF: ${audit.report_r2_path}`);
  archive.append(await objectStream(audit.report_r2_path), {
    name: "audit-report.pdf",
  });
}

archive.append(readme, { name: "README.txt" });

await archive.finalize();
await uploadPromise;

console.log(`\n✅ Archive uploaded to R2: ${archiveKey}`);
console.log("   README includes the executive summary + full written assessment.");
