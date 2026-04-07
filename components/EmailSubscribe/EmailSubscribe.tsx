"use client";

import { useState } from "react";
import styles from "./EmailSubscribe.module.css";

export function EmailSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Try again?");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Try again?");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.wrapper}>
        <p className={styles.successMsg}>
          You&apos;re in. I&apos;ll let you know when the next post drops.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.copy}>Get notified when I publish something new.</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
          disabled={status === "loading"}
        />
        <button
          type="submit"
          className={styles.button}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <p className={styles.errorMsg}>{errorMsg}</p>
      )}
    </div>
  );
}
