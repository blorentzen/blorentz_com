"use client";

import { useState, useRef } from "react";
// @ts-expect-error CDS type declarations reference CSS files not present in dist/types
import { Input, Textarea, Button, Checkbox } from "@empac/cascadeds";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { trackEvent } from "@/lib/analytics";
import styles from "./page.module.css";

const scopeOptions = [
  { value: "website", label: "Website (design, UX, performance, build quality)" },
  { value: "marketing", label: "Marketing (positioning, messaging, conversion funnel)" },
  { value: "seo", label: "SEO (search visibility, content structure)" },
  { value: "brand", label: "Brand and voice (tone, consistency, copy)" },
  { value: "other", label: "Other (tell me about it in the next field)" },
];

export function ConsultationForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [auditScope, setAuditScope] = useState<string[]>([]);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  function toggleScope(value: string) {
    setAuditScope((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!turnstileToken) {
      setStatus("error");
      return;
    }
    if (auditScope.length === 0) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/audit-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          websiteUrl: data.get("websiteUrl"),
          auditScope,
          details: data.get("details"),
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
      trackEvent("Audit Consultation");
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
          business days to set up a short consultation call. If we&apos;re a good
          fit, we&apos;ll talk through what the audit would look like for your
          specific situation.
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
          <label className={styles.formLabel}>Website or Product URL *</label>
          <Input
            name="websiteUrl"
            type="url"
            required
            size="medium"
            fullWidth
            placeholder="https://"
          />
        </div>
      </div>

      <div className={styles.formField}>
        <label className={styles.formLabel}>What would you like me to audit? *</label>
        <div className={styles.checkboxGroup}>
          {scopeOptions.map((opt) => (
            <Checkbox
              key={opt.value}
              label={opt.label}
              size="medium"
              checked={auditScope.includes(opt.value)}
              onChange={() => toggleScope(opt.value)}
            />
          ))}
        </div>
      </div>

      <div className={styles.formField}>
        <label className={styles.formLabel}>
          Tell me about your build and what you&apos;d like me to look at *
        </label>
        <Textarea
          name="details"
          required
          rows={5}
          fullWidth
          placeholder="What's costing you customers, time, or revenue right now? What do you want me to take a closer look at?"
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
          options={{ theme: "light", size: "compact" }}
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
        Request a Consultation
      </Button>
    </form>
  );
}
