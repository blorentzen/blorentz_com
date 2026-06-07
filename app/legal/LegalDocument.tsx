import { Reveal } from "@/components/Reveal/Reveal";
import type { LegalDoc } from "@/lib/legal";
import styles from "./legal.module.css";

export function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <div className={styles.page}>
      <Reveal>
        <header className={styles.header}>
          <h1 className={styles.title}>{doc.title}</h1>
          {doc.status === "draft" && (
            <p className={styles.draftBanner}>
              This is a working draft and not yet in effect.
            </p>
          )}
          <div className={styles.meta}>
            <span className={styles.metaItem}>
              Effective date: {doc.effectiveDate}
            </span>
            <span className={styles.metaItem}>
              Last updated: {doc.lastUpdated}
            </span>
          </div>
        </header>
      </Reveal>
      <Reveal>
        <article
          className={styles.prose}
          dangerouslySetInnerHTML={{ __html: doc.contentHtml }}
        />
      </Reveal>
    </div>
  );
}
