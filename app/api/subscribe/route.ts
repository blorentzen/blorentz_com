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
  const { email, turnstileToken } = await request.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

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

  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_GROUP_ID;

  if (!apiKey || !groupId) {
    return NextResponse.json(
      { error: "Something went wrong. Try again?" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      "https://connect.mailerlite.com/api/subscribers",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          groups: [groupId],
        }),
      }
    );

    if (!response.ok) {
      const data = await response.json();
      if (response.status === 422) {
        return NextResponse.json(
          { error: "That email is already subscribed." },
          { status: 422 }
        );
      }
      return NextResponse.json(
        { error: data.message || "Something went wrong. Try again?" },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Try again?" },
      { status: 500 }
    );
  }
}
