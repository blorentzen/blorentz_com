import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-side admin client using the Supabase secret key (sb_secret_…).
 * Bypasses RLS, so it must NEVER be imported into a client component.
 *
 * The `blorentz` schema is not exposed to the API, so this client can only
 * reach blorentz data through the SECURITY DEFINER functions in the public
 * schema (submit_audit_application, get_audit_for_viewer, log_audit_access).
 */

let cached: SupabaseClient | null = null;

export function supabaseAdmin(): SupabaseClient {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) {
    throw new Error("Supabase admin environment variables are not configured.");
  }
  if (!cached) {
    cached = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return cached;
}
