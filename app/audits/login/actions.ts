"use server";

import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getOrigin, safeAuditNext } from "@/lib/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type MagicLinkState = {
  status: "idle" | "sent" | "error";
  message?: string;
};

/**
 * Send a magic link. Returns a state object (consumed by useActionState) so the
 * form can show inline feedback. Intentionally generic on success: we always
 * report "sent" regardless of whether the email is authorized for any audit, so
 * the form never reveals which emails or slugs are valid.
 */
export async function requestMagicLink(
  _prev: MagicLinkState,
  formData: FormData
): Promise<MagicLinkState> {
  const email = String(formData.get("email") ?? "").trim();
  const next = safeAuditNext(String(formData.get("next") ?? ""));

  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const supabase = await createSupabaseServerClient();
  const origin = await getOrigin();

  try {
    await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${origin}/audits/auth/callback?next=${encodeURIComponent(next)}`,
        shouldCreateUser: true,
      },
    });
  } catch (err) {
    console.error("signInWithOtp error:", err);
  }

  return { status: "sent" };
}

/** Sign the viewer out of the portal and return to the login page. */
export async function signOut() {
  const supabase = await createSupabaseServerClient();
  try {
    await supabase.auth.signOut();
  } catch (err) {
    console.error("signOut error:", err);
  }
  redirect("/audits/login");
}
