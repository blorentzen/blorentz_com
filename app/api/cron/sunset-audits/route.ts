import { NextResponse } from "next/server";
import { getAuditsDueForSunset, markAuditSunset } from "@/lib/audits";
import { deleteStreamVideo } from "@/lib/stream";

/**
 * Scheduled sunset job (Vercel Cron, monthly). For each delivered audit past its
 * 12-month sunset_date: delete the Stream video (playback no longer needed), then
 * flip the row to 'sunset'. The R2 archive is left in place — it's retained for
 * the additional 12 months per the Terms.
 *
 * Protected by CRON_SECRET: Vercel Cron sends `Authorization: Bearer <secret>`.
 */
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = request.headers.get("authorization");
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  const due = await getAuditsDueForSunset();
  const results: Array<{ slug: string; status: string; error?: string }> = [];

  for (const audit of due) {
    try {
      if (audit.recording_video_id) {
        await deleteStreamVideo(audit.recording_video_id);
      }
      await markAuditSunset(audit.id);
      results.push({ slug: audit.slug, status: "sunset" });
    } catch (err) {
      // Leave it 'delivered' so next month's run retries.
      console.error(`Sunset failed for ${audit.slug}:`, err);
      results.push({ slug: audit.slug, status: "error", error: String(err) });
    }
  }

  return NextResponse.json({ processed: due.length, results });
}
