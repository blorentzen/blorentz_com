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
  const timestamps = recentSubmissions.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);
  recentSubmissions.set(ip, recent);
  if (recent.length >= RATE_LIMIT_MAX) return true;
  recent.push(now);
  recentSubmissions.set(ip, recent);
  return false;
}

const MAX_FIELD_LENGTH = 500;
const MAX_TEXT_LENGTH = 5000;

// Allowed select values — must match the option values in AuditApplicationForm.tsx
const builtWithLabels: Record<string, string> = {
  lovable: "Lovable",
  bolt: "Bolt",
  cursor: "Cursor",
  "claude-code": "Claude Code",
  v0: "v0",
  replit: "Replit",
  multiple: "Multiple tools",
  other: "Other",
};

const stackLabels: Record<string, string> = {
  "next-react": "Next.js / React",
  "supabase-firebase": "Supabase / Firebase",
  other: "Other",
};

const situationLabels: Record<string, string> = {
  "active-development": "In active development",
  "about-to-launch": "About to launch",
  launched: "Launched",
  "not-sure": "I'm not sure",
  other: "Other",
};

const tierLabels: Record<string, string> = {
  audit: "Audit ($1,500)",
  roadmap: "Roadmap ($3,000)",
  "not-sure": "Not sure yet",
};

function getSupabaseAdmin() {
  // SUPABASE_SECRET_KEY is the modern server-side key (sb_secret_…) that
  // replaces the legacy service_role key. It bypasses RLS, so it must stay
  // server-only and never be exposed to the browser.
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

  const {
    name,
    email,
    company,
    productUrl,
    builtWith,
    stack,
    situation,
    priority,
    tier,
    context,
    referral,
    turnstileToken,
  } = body;

  if (process.env.TURNSTILE_SECRET_KEY) {
    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Please complete the verification." },
        { status: 400 }
      );
    }

    const turnstileValid = await verifyTurnstile(turnstileToken);
    if (!turnstileValid) {
      return NextResponse.json(
        { error: "Verification failed. Please try again." },
        { status: 403 }
      );
    }
  }

  // Required fields
  if (
    !name ||
    !email ||
    !company ||
    !productUrl ||
    !builtWith ||
    !stack ||
    !situation ||
    !priority ||
    !tier
  ) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  // Types
  const stringFields = {
    name,
    email,
    company,
    productUrl,
    builtWith,
    stack,
    situation,
    priority,
    tier,
  };
  for (const value of Object.values(stringFields)) {
    if (typeof value !== "string") {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }
  }
  if (
    (context && typeof context !== "string") ||
    (referral && typeof referral !== "string")
  ) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Lengths
  if (
    name.length > MAX_FIELD_LENGTH ||
    email.length > MAX_FIELD_LENGTH ||
    company.length > MAX_FIELD_LENGTH ||
    productUrl.length > MAX_FIELD_LENGTH ||
    priority.length > MAX_TEXT_LENGTH ||
    (context && context.length > MAX_TEXT_LENGTH) ||
    (referral && referral.length > MAX_FIELD_LENGTH)
  ) {
    return NextResponse.json(
      { error: "One or more fields exceed the maximum length." },
      { status: 400 }
    );
  }

  // Email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // Enum validation for select fields
  if (
    !builtWithLabels[builtWith] ||
    !stackLabels[stack] ||
    !situationLabels[situation] ||
    !tierLabels[tier]
  ) {
    return NextResponse.json(
      { error: "Invalid selection." },
      { status: 400 }
    );
  }

  // 1. Persist to Supabase — source of truth. Lead is captured even if email fails.
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.error("Supabase env vars missing — cannot store application.");
    return NextResponse.json(
      { error: "Submission is temporarily unavailable. Please email Britton@empac.co." },
      { status: 503 }
    );
  }

  // The blorentz schema is intentionally NOT exposed to the API. Writes go
  // through a SECURITY DEFINER function in the public schema that only the
  // secret key's role may execute, so the PII table never touches the API surface.
  const { error: insertError } = await supabase.rpc("submit_audit_application", {
    p_name: name,
    p_email: email,
    p_company: company,
    p_product_url: productUrl,
    p_built_with: builtWith,
    p_stack: stack,
    p_situation: situation,
    p_priority: priority,
    p_tier: tier,
    p_context: context || null,
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

  // 2. Notify Britton. Best-effort — the lead is already saved, so an email
  //    outage should not fail the applicant's submission.
  const emailBody = [
    `Name: ${sanitize(name)}`,
    `Email: ${sanitize(email)}`,
    `Company / Product: ${sanitize(company)}`,
    `Product URL: ${sanitize(productUrl)}`,
    `Built With: ${builtWithLabels[builtWith]}`,
    `Stack: ${stackLabels[stack]}`,
    `Situation: ${situationLabels[situation]}`,
    `Tier Interest: ${tierLabels[tier]}`,
    `\nMost important thing to look at:\n${sanitize(priority)}`,
    context ? `\nAdditional context:\n${sanitize(String(context))}` : null,
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
        subject: `Website and Marketing Audit application: ${sanitize(name)} from ${sanitize(company)}`,
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
