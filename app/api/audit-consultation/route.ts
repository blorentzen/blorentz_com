import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });
  const data = await res.json();
  return data.success === true;
}

function sanitize(str: string): string {
  return str
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/&(?!amp;|lt;|gt;)/g, "&amp;");
}

const recentSubmissions = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 1000;
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (recentSubmissions.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW);
  if (recent.length >= RATE_LIMIT_MAX) {
    recentSubmissions.set(ip, recent);
    return true;
  }
  recent.push(now);
  recentSubmissions.set(ip, recent);
  return false;
}

const MAX_FIELD_LENGTH = 500;
const MAX_TEXT_LENGTH = 5000;

// Allowed multi-select values — must match the options in ConsultationForm.tsx
const scopeLabels: Record<string, string> = {
  website: "Website (design, UX, performance, build quality)",
  marketing: "Marketing (positioning, messaging, conversion funnel)",
  seo: "SEO (search visibility, content structure)",
  brand: "Brand and voice (tone, consistency, copy)",
  other: "Other",
};

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again in a minute." },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, company, websiteUrl, auditScope, details, referral, turnstileToken } =
    body;

  if (process.env.TURNSTILE_SECRET_KEY) {
    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Please complete the verification." },
        { status: 400 }
      );
    }
    if (!(await verifyTurnstile(turnstileToken))) {
      return NextResponse.json(
        { error: "Verification failed. Please try again." },
        { status: 403 }
      );
    }
  }

  // Required fields
  if (!name || !email || !company || !websiteUrl || !details) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  // Types
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof company !== "string" ||
    typeof websiteUrl !== "string" ||
    typeof details !== "string"
  ) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Audit scope: non-empty array of allowed values
  if (!Array.isArray(auditScope) || auditScope.length === 0) {
    return NextResponse.json(
      { error: "Please select at least one thing to audit." },
      { status: 400 }
    );
  }
  if (!auditScope.every((s) => typeof s === "string" && scopeLabels[s])) {
    return NextResponse.json({ error: "Invalid selection." }, { status: 400 });
  }

  // Lengths
  if (
    name.length > MAX_FIELD_LENGTH ||
    email.length > MAX_FIELD_LENGTH ||
    company.length > MAX_FIELD_LENGTH ||
    websiteUrl.length > MAX_FIELD_LENGTH ||
    details.length > MAX_TEXT_LENGTH ||
    (referral && typeof referral === "string" && referral.length > MAX_FIELD_LENGTH)
  ) {
    return NextResponse.json(
      { error: "One or more fields exceed the maximum length." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // 1. Persist — source of truth.
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.error("Supabase env vars missing — cannot store consultation.");
    return NextResponse.json(
      { error: "Submission is temporarily unavailable. Please email Britton@empac.co." },
      { status: 503 }
    );
  }

  const { error: insertError } = await supabase.rpc("submit_audit_consultation", {
    p_name: name,
    p_email: email,
    p_company: company,
    p_website_url: websiteUrl,
    p_audit_scope: auditScope,
    p_details: details,
    p_referral: referral || null,
    p_ip_address: ip,
    p_user_agent: request.headers.get("user-agent") || null,
  });

  if (insertError) {
    console.error("Supabase RPC error:", insertError);
    return NextResponse.json(
      { error: "Failed to submit. Please try again." },
      { status: 500 }
    );
  }

  // 2. Notify Britton (best-effort — the lead is already saved).
  const scopeText = auditScope.map((s) => scopeLabels[s]).join("\n  - ");
  const emailBody = [
    `Name: ${sanitize(name)}`,
    `Email: ${sanitize(email)}`,
    `Company: ${sanitize(company)}`,
    `Website / Product URL: ${sanitize(websiteUrl)}`,
    `\nWants audited:\n  - ${scopeText}`,
    `\nDetails:\n${sanitize(details)}`,
    referral ? `\nReferral: ${sanitize(String(referral))}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const res = await fetch("https://api.mailersend.com/v1/email", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.MAILERSEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: { email: "noreply@empac.co", name: "blorentz.com" },
        to: [{ email: "Britton@empac.co", name: "Britton Lorentzen" }],
        reply_to: { email: sanitize(email), name: sanitize(name) },
        subject: `New Website + Marketing Audit consultation request from ${sanitize(name)}`,
        text: emailBody,
      }),
    });
    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      console.error("Mailersend error (lead was saved):", res.status, errorData);
    }
  } catch (err) {
    console.error("Mailersend request failed (lead was saved):", err);
  }

  return NextResponse.json({ success: true });
}
