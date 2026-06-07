"use client";

import { useActionState } from "react";
import { requestMagicLink, type MagicLinkState } from "./actions";
import styles from "./login.module.css";

const initialState: MagicLinkState = { status: "idle" };

export function LoginForm({
  next,
  linkError,
}: {
  next: string;
  linkError?: boolean;
}) {
  const [state, formAction, isPending] = useActionState(
    requestMagicLink,
    initialState
  );

  if (state.status === "sent") {
    return (
      <p className={styles.sentText}>
        If that email has access to an audit, a sign-in link is on its way. Check
        your inbox and click the link to open your portal. The link is good for
        one sign-in and expires in 60 minutes.
      </p>
    );
  }

  return (
    <>
      <p className={styles.intro}>
        Enter the email your audit was delivered to. We&apos;ll send you a secure
        sign-in link — no password required.
      </p>
      <form action={formAction} className={styles.form}>
        <input type="hidden" name="next" value={next} />
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={styles.input}
          placeholder="you@company.com"
        />
        {state.status === "error" && (
          <p className={styles.error}>{state.message}</p>
        )}
        {linkError && state.status === "idle" && (
          <p className={styles.error}>
            That sign-in link was invalid or expired. Request a new one below.
          </p>
        )}
        <button type="submit" className={styles.button} disabled={isPending}>
          {isPending ? "Sending…" : "Send sign-in link"}
        </button>
      </form>
    </>
  );
}
