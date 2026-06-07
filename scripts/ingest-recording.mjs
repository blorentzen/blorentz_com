/**
 * Ingest a private R2 recording into Cloudflare Stream.
 *
 * Usage:
 *   node --env-file=.env.local scripts/ingest-recording.mjs <r2-object-key> [display-name]
 *
 * Example:
 *   node --env-file=.env.local scripts/ingest-recording.mjs audits/acme-test/recording.mp4 "Acme Corp audit"
 *
 * What it does:
 *   1. Generates a short-lived SIGNED GET URL for the private R2 object
 *   2. Hands that URL to Stream's "Copy from URL" API (Stream fetches it once)
 *   3. Polls until the video is transcoded and ready
 *   4. Prints the Stream UID to store in audits.recording_video_id
 *
 * The signed URL is generated and consumed internally — it is never printed,
 * so the recording is never exposed publicly.
 */
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const key = process.argv[2];
const name = process.argv[3] ?? key;

if (!key) {
  console.error(
    "Usage: node --env-file=.env.local scripts/ingest-recording.mjs <r2-object-key> [display-name]"
  );
  process.exit(1);
}

const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
const bucket = process.env.R2_AUDITS_BUCKET;
const token = process.env.CLOUDFLARE_STREAM_API_TOKEN;

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

// 1) Sign a 1-hour GET URL for the private object (only Cloudflare's ingestor uses it)
const signedUrl = await getSignedUrl(
  s3,
  new GetObjectCommand({ Bucket: bucket, Key: key }),
  { expiresIn: 3600 }
);

// 2) Trigger Stream "Copy from URL" with requireSignedURLs ON, so the recording
//    is only playable via a minted token (the portal mints one per session).
const copyRes = await fetch(
  `https://api.cloudflare.com/client/v4/accounts/${accountId}/stream/copy`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: signedUrl, meta: { name }, requireSignedURLs: true }),
  }
);
const copyData = await copyRes.json();
if (!copyData.success) {
  console.error("Stream copy failed:", JSON.stringify(copyData.errors, null, 2));
  process.exit(2);
}

const uid = copyData.result.uid;
console.log(`Stream copy started for "${name}". UID: ${uid}`);

// 3) Poll until ready
for (let i = 0; i < 80; i++) {
  await new Promise((r) => setTimeout(r, 3000));
  const st = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/stream/${uid}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  const sd = await st.json();
  const state = sd.result?.status?.state;
  const pct = sd.result?.status?.pctComplete;
  console.log(`  status: ${state}${pct ? ` (${pct}%)` : ""}`);
  if (state === "ready") {
    console.log(`\n✅ READY. recording_video_id = ${uid}`);
    process.exit(0);
  }
  if (state === "error") {
    console.error("Ingestion error:", JSON.stringify(sd.result?.status, null, 2));
    process.exit(3);
  }
}
console.error("Timed out waiting for Stream to finish. Check the dashboard.");
process.exit(4);
