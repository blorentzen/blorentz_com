"use client";

import { useState, useRef } from "react";
// @ts-expect-error CDS type declarations reference CSS files not present in dist/types
import { Input, Select, Textarea, Button } from "@empac/cascadeds";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { trackEvent } from "@/lib/analytics";
import styles from "./page.module.css";

export function WorkWithMeForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serviceType, setServiceType] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!turnstileToken) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          website: data.get("website"),
          serviceType,
          problem: data.get("problem"),
          referral: data.get("referral"),
          turnstileToken,
        }),
      });

      if (!res.ok) {
        setStatus("error");
        turnstileRef.current?.reset();
        setTurnstileToken(null);
        return;
      }

      trackEvent("Contact Form");
      setStatus("success");
    } catch {
      setStatus("error");
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    }
  }

  if (status === "success") {
    return (
      <div className={styles.formSuccess}>
        <p className={styles.formSuccessText}>
          Got it. I&apos;ll review your request and get back to you within 2
          business days. If it&apos;s a good fit, we&apos;ll set up a quick
          intro call.
        </p>
      </div>
    );
  }

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label className={styles.formLabel}>Name *</label>
          <Input name="name" required size="medium" fullWidth />
        </div>
        <div className={styles.formField}>
          <label className={styles.formLabel}>Email *</label>
          <Input name="email" type="email" required size="medium" fullWidth />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label className={styles.formLabel}>Company / Business Name *</label>
          <Input name="company" required size="medium" fullWidth />
        </div>
        <div className={styles.formField}>
          <label className={styles.formLabel}>Website URL</label>
          <Input name="website" type="url" size="medium" fullWidth placeholder="https://" />
        </div>
      </div>
      <div className={styles.formField} suppressHydrationWarning>
        <label className={styles.formLabel}>What are you interested in? *</label>
        <Select
          name="serviceType"
          size="medium"
          fullWidth
          placeholder="Select one..."
          value={serviceType}
          options={[
            { value: "project", label: "Starting a Project" },
            { value: "audit", label: "Website/Marketing Audit" },
            { value: "office-hours", label: "Office Hours" },
            { value: "not-sure", label: "Not Sure Yet" },
          ]}
          onChange={(val: string | string[]) => setServiceType(typeof val === "string" ? val : val[0])}
        />
      </div>
      <div className={styles.formField}>
        <label className={styles.formLabel}>
          Tell me about the problem you&apos;re trying to solve *
        </label>
        <Textarea
          name="problem"
          required
          rows={5}
          fullWidth
          placeholder="What's costing you money, time, or customers right now?"
        />
      </div>
      <div className={styles.formField}>
        <label className={styles.formLabel}>How did you find me?</label>
        <Input name="referral" size="medium" fullWidth />
      </div>
      {siteKey && (
        <Turnstile
          ref={turnstileRef}
          siteKey={siteKey}
          onSuccess={setTurnstileToken}
          onExpire={() => setTurnstileToken(null)}
          options={{
            theme: "light",
            size: "compact",
          }}
        />
      )}
      {status === "error" && (
        <p className={styles.formError}>
          Something went wrong. Please try again or email Britton@empac.co directly.
        </p>
      )}
      <Button
        type="submit"
        variant="primary"
        size="large"
        loading={status === "loading"}
        disabled={status === "loading" || (!!siteKey && !turnstileToken)}
      >
        Send Request
      </Button>
    </form>
  );
}
