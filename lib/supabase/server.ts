import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Cookie-bound Supabase client for the portal's magic-link auth. Uses the
 * publishable key and the user's session cookies — this is the `authenticated`
 * (or anon) role and is fully RLS-governed, so it can ONLY be used to manage the
 * Supabase Auth session (sign-in, get user). It cannot read blorentz data; that
 * goes through supabaseAdmin() + the SECURITY DEFINER functions.
 */
export async function createSupabaseServerClient() {
  const cookieStore = await cookies();
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) {
    throw new Error("Supabase server environment variables are not configured.");
  }

  return createServerClient(url, key, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // Called from a Server Component (no mutable response) — the session
          // refresh will be retried by middleware/route handlers. Safe to ignore.
        }
      },
    },
  });
}
