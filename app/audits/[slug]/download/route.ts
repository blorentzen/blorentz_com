import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getAuditForViewer, logAuditAccess } from "@/lib/audits";
import { r2SignedDownloadUrl } from "@/lib/r2";

/**
 * Archive download. Auth + authorization gated (same SECURITY DEFINER gate as
 * the portal page), logs the event, then redirects to a 60-second R2 signed URL.
 * The R2 object is never served directly — only via this short-lived signature.
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const origin = new URL(request.url).origin;

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const email = user?.email;
  if (!email) {
    const loginUrl = new URL("/audits/login", origin);
    loginUrl.searchParams.set("next", `/audits/${slug}`);
    return NextResponse.redirect(loginUrl);
  }

  const audit = await getAuditForViewer(slug, email);
  if (!audit || !audit.archive_r2_path) {
    return NextResponse.json(
      { error: "No archive is available for this audit." },
      { status: 404 }
    );
  }

  const ip =
    (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  await logAuditAccess(audit.id, email, "download", ip);

  const signedUrl = await r2SignedDownloadUrl(audit.archive_r2_path, 60);
  return NextResponse.redirect(signedUrl);
}
