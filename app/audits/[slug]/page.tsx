import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getAuditForViewer, logAuditAccess, type Audit } from "@/lib/audits";
import { streamSignedIframeSrc } from "@/lib/stream";
import { renderMarkdown } from "@/lib/markdown";
import { signOut } from "../login/actions";
import styles from "./portal.module.css";

export const metadata: Metadata = {
  title: "Audit Portal",
  robots: { index: false, follow: false },
};

function formatDate(iso: string | null): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function SignedInBar({ email }: { email: string }) {
  return (
    <div className={styles.authBar}>
      <span className={styles.authEmail}>Signed in as {email}</span>
      <form action={signOut}>
        <button type="submit" className={styles.signOut}>
          Sign out
        </button>
      </form>
    </div>
  );
}

export default async function AuditPortalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const email = user?.email;
  if (!email) {
    redirect(`/audits/login?next=${encodeURIComponent(`/audits/${slug}`)}`);
  }

  const audit = await getAuditForViewer(slug, email);

  // Authenticated but not authorized (or no such audit). Generic — no leak of
  // whether the slug exists.
  if (!audit) {
    return (
      <div className={styles.page}>
        <SignedInBar email={email} />
        <div className={styles.card}>
          <h1 className={styles.title}>No audit here</h1>
          <p className={styles.bodyText}>
            This account doesn&apos;t have access to an audit at this address. If
            you believe that&apos;s a mistake, reach out and we&apos;ll sort it
            out.
          </p>
          <p className={styles.bodyText}>
            <a href="mailto:Britton@empac.co" className={styles.link}>
              Britton@empac.co
            </a>
          </p>
        </div>
      </div>
    );
  }

  // Best-effort access logging.
  const ip =
    (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  await logAuditAccess(audit.id, email, "view", ip);

  if (audit.status === "sunset") {
    return <SunsetView audit={audit} email={email} />;
  }

  const reportHtml = audit.report_markdown
    ? await renderMarkdown(audit.report_markdown)
    : null;

  let videoSrc: string | null = null;
  if (audit.recording_video_id) {
    try {
      videoSrc = await streamSignedIframeSrc(audit.recording_video_id);
    } catch (err) {
      console.error("Stream token mint failed:", err);
    }
  }

  return (
    <ActivePortal
      audit={audit}
      email={email}
      reportHtml={reportHtml}
      videoSrc={videoSrc}
    />
  );
}

function SunsetView({ audit, email }: { audit: Audit; email: string }) {
  return (
    <div className={styles.page}>
      <SignedInBar email={email} />
      <div className={styles.card}>
        <h1 className={styles.title}>This audit has been archived</h1>
        <p className={styles.bodyText}>
          {audit.client_name}&apos;s audit was delivered on{" "}
          {formatDate(audit.delivery_date)} and is no longer hosted online.
        </p>
        <p className={styles.bodyText}>
          If you need to re-access the recording or report, reach out — archives
          are kept privately for 24 months from delivery before permanent
          deletion.
        </p>
        <p className={styles.bodyText}>
          <a href="mailto:Britton@empac.co" className={styles.link}>
            Britton@empac.co
          </a>
        </p>
      </div>
    </div>
  );
}

function ActivePortal({
  audit,
  email,
  reportHtml,
  videoSrc,
}: {
  audit: Audit;
  email: string;
  reportHtml: string | null;
  videoSrc: string | null;
}) {
  return (
    <div className={styles.page}>
      <SignedInBar email={email} />

      {/* Header */}
      <header className={styles.header}>
        <p className={styles.auditType}>{audit.audit_type}</p>
        <h1 className={styles.title}>{audit.client_name}</h1>
        <p className={styles.deliveredOn}>
          Delivered {formatDate(audit.delivery_date)}
        </p>
      </header>

      {/* Executive summary */}
      <section className={styles.section}>
        <div className={styles.summaryGrid}>
          <div>
            <h2 className={styles.summaryHeading}>Top three to fix this week</h2>
            <ol className={styles.summaryList}>
              {audit.summary_top_fixes.map((item, i) => (
                <li key={i} className={styles.summaryItem}>
                  <span className={styles.summaryProblem}>{item.problem}</span>
                  <span className={styles.summaryDetail}>{item.fix}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className={styles.summaryHeading}>Top three to stop doing</h2>
            <ol className={styles.summaryList}>
              {audit.summary_top_stops.map((item, i) => (
                <li key={i} className={styles.summaryItem}>
                  <span className={styles.summaryProblem}>{item.pattern}</span>
                  <span className={styles.summaryDetail}>{item.why_stop}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Recording */}
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>
          90-minute audit session, {formatDate(audit.delivery_date)}
        </h2>
        <div className={styles.videoFrame}>
          {videoSrc ? (
            <iframe
              src={videoSrc}
              loading="lazy"
              className={styles.videoIframe}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowFullScreen
              title="Audit session recording"
            />
          ) : (
            <div className={styles.videoPlaceholder}>
              Recording is being processed and will appear here shortly.
            </div>
          )}
        </div>
        <p className={styles.caption}>
          Recorded for your reference. Internal use only.
        </p>
      </section>

      {/* Written assessment */}
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Full written assessment</h2>
        {reportHtml ? (
          <div
            className={styles.reportProse}
            dangerouslySetInnerHTML={{ __html: reportHtml }}
          />
        ) : (
          <div className={styles.reportPlaceholder}>
            The written assessment will appear here once it&apos;s delivered.
          </div>
        )}
        {audit.report_doc_url && (
          <a
            href={audit.report_doc_url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Open as Google Doc &rarr;
          </a>
        )}
      </section>

      {/* Next steps */}
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Where to go from here</h2>
        <div className={styles.nextSteps}>
          <div className={styles.nextCard}>
            <h3 className={styles.nextTitle}>Take it from here</h3>
            <p className={styles.nextBody}>
              Work through the recommendations yourself using the report as your
              roadmap.
            </p>
          </div>
          <div className={styles.nextCard}>
            <h3 className={styles.nextTitle}>Have me fix the priorities</h3>
            <p className={styles.nextBody}>
              Engage me to implement the highest-impact findings as a scoped
              project.{" "}
              <a href="/work-with-me" className={styles.link}>
                Work with me &rarr;
              </a>
            </p>
          </div>
          <div className={styles.nextCard}>
            <h3 className={styles.nextTitle}>Keep optimizing together</h3>
            <p className={styles.nextBody}>
              Move into an ongoing engagement to keep improving over time.{" "}
              <a href="/work-with-me" className={styles.link}>
                Explore options &rarr;
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Download bar */}
      <section className={styles.downloadBar}>
        <div>
          <p className={styles.downloadTitle}>Download full audit archive</p>
          <p className={styles.downloadSub}>
            Includes written assessment (PDF) and session recording (MP4). Yours
            to keep.
          </p>
        </div>
        {audit.archive_r2_path ? (
          <a href={`/audits/${audit.slug}/download`} className={styles.downloadButton}>
            Download archive
          </a>
        ) : (
          <span className={styles.downloadPending}>Preparing…</span>
        )}
      </section>

      {/* Sunset notice */}
      <p className={styles.sunsetNote}>
        This portal is available until {formatDate(audit.sunset_date)}. Download
        the archive anytime before then for your permanent records. Questions?{" "}
        <a href="mailto:Britton@empac.co" className={styles.link}>
          Britton@empac.co
        </a>
      </p>
    </div>
  );
}
