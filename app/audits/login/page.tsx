import type { Metadata } from "next";
import { LoginForm } from "./LoginForm";
import { safeAuditNext } from "@/lib/site";
import styles from "./login.module.css";

export const metadata: Metadata = {
  title: "Audit Portal Sign In",
  robots: { index: false, follow: false },
};

export default async function AuditLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const next = safeAuditNext(typeof sp.next === "string" ? sp.next : undefined);
  const linkError = sp.error === "link";

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Audit Portal</h1>
        <LoginForm next={next} linkError={linkError} />
        <p className={styles.help}>
          Trouble signing in? Email{" "}
          <a href="mailto:Britton@empac.co" className={styles.helpLink}>
            Britton@empac.co
          </a>
        </p>
      </div>
    </div>
  );
}
