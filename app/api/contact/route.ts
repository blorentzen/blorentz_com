import { NextResponse } from "next/server";

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
const MAX_PROBLEM_LENGTH = 5000;

const validServiceTypes = ["project", "audit", "office-hours", "not-sure"];

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
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }

  const { name, email, company, website, serviceType, problem, referral, turnstileToken } = body;

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

  if (!name || !email || !company || !serviceType || !problem) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof company !== "string" ||
    typeof serviceType !== "string" ||
    typeof problem !== "string"
  ) {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }

  if (
    name.length > MAX_FIELD_LENGTH ||
    email.length > MAX_FIELD_LENGTH ||
    company.length > MAX_FIELD_LENGTH ||
    problem.length > MAX_PROBLEM_LENGTH ||
    (website && typeof website === "string" && website.length > MAX_FIELD_LENGTH) ||
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

  if (!validServiceTypes.includes(serviceType)) {
    return NextResponse.json(
      { error: "Invalid service type." },
      { status: 400 }
    );
  }

  const serviceLabels: Record<string, string> = {
    project: "Starting a Project",
    audit: "Website and Marketing Audit",
    "office-hours": "Office Hours",
    "not-sure": "Not Sure Yet",
  };

  const emailBody = [
    `Name: ${sanitize(name)}`,
    `Email: ${sanitize(email)}`,
    `Company: ${sanitize(company)}`,
    website ? `Website: ${sanitize(String(website))}` : null,
    `Service Type: ${serviceLabels[serviceType] || sanitize(serviceType)}`,
    `\nProblem:\n${sanitize(problem)}`,
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
        from: {
          email: "noreply@empac.co",
          name: "blorentz.com",
        },
        to: [
          {
            email: "Britton@empac.co",
            name: "Britton Lorentzen",
          },
        ],
        reply_to: {
          email: sanitize(email),
          name: sanitize(name),
        },
        subject: `Work With Me: ${sanitize(name)} — ${sanitize(company)}`,
        text: emailBody,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      console.error("Mailersend error:", res.status, errorData);
      return NextResponse.json(
        { error: "Failed to send. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send. Please try again." },
      { status: 500 }
    );
  }
}
