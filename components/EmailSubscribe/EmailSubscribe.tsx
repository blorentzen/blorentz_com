"use client";

import { useState, useRef } from "react";
// @ts-expect-error CDS Input/Button type declarations reference CSS files not present in dist/types
import { Input, Button } from "@empac/cascadeds";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import styles from "./EmailSubscribe.module.css";

interface EmailSubscribeProps {
  variant?: "default" | "inline";
}

export function EmailSubscribe({ variant = "default" }: EmailSubscribeProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!turnstileToken) {
      setStatus("error");
      setErrorMsg("Please complete the verification.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, turnstileToken }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Try again?");
        turnstileRef.current?.reset();
        setTurnstileToken(null);
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Try again?");
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    }
  }

  if (status === "success") {
    return (
      <div className={`${styles.wrapper} ${variant === "inline" ? styles.inline : ""}`}>
        <div className={styles.inner}>
          <p className={styles.successMsg}>
            You&apos;re in. I&apos;ll let you know when the next post drops.
          </p>
        </div>
      </div>
    );
  }

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  return (
    <div className={`${styles.wrapper} ${variant === "inline" ? styles.inline : ""}`}>
      <div className={styles.inner}>
      <p className={styles.copy}>Get notified when I publish something new.</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputRow}>
          <Input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
            size="medium"
            fullWidth
            variant={status === "error" ? "error" : "default"}
            disabled={status === "loading"}
          />
          <Button
            type="submit"
            variant="primary"
            size="medium"
            loading={status === "loading"}
            disabled={status === "loading" || (!!siteKey && !turnstileToken)}
          >
            Subscribe
          </Button>
        </div>
        {siteKey && (
          <div className={styles.turnstile}>
            <Turnstile
              ref={turnstileRef}
              siteKey={siteKey}
              onSuccess={setTurnstileToken}
              onExpire={() => setTurnstileToken(null)}
              options={{
                theme: "dark",
                size: "compact",
              }}
            />
          </div>
        )}
      </form>
      {status === "error" && (
        <p className={styles.errorMsg}>{errorMsg}</p>
      )}
      </div>
    </div>
  );
}
