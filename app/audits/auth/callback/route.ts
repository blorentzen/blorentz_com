import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { safeAuditNext } from "@/lib/site";

/**
 * Magic-link callback. Supabase redirects here with a `code` after the user
 * clicks the email link; we exchange it for a session cookie and forward to the
 * originally requested audit portal.
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const next = safeAuditNext(url.searchParams.get("next"));

  if (code) {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(new URL(next, url.origin));
    }
  }

  const loginUrl = new URL("/audits/login", url.origin);
  loginUrl.searchParams.set("next", next);
  loginUrl.searchParams.set("error", "link");
  return NextResponse.redirect(loginUrl);
}
