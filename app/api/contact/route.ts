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

export async function POST(request: Request) {
  const { name, email, company, website, serviceType, problem, referral, turnstileToken } =
    await request.json();

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

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const serviceLabels: Record<string, string> = {
    "custom-tool": "Custom Interactive Tool",
    website: "Website Project",
    optimization: "Ongoing Optimization",
    "not-sure": "Not Sure Yet",
  };

  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    website ? `Website: ${website}` : null,
    `Service Type: ${serviceLabels[serviceType] || serviceType}`,
    `\nProblem:\n${problem}`,
    referral ? `\nReferral: ${referral}` : null,
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
          email,
          name,
        },
        subject: `Work With Me: ${name} — ${company}`,
        text: body,
      }),
    });

    if (!res.ok) {
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
