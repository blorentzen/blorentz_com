import styles from "./Section.module.css";

interface SectionProps {
  heading?: string;
  font?: "display" | "technical";
  children: React.ReactNode;
}

export function Section({
  heading,
  font = "display",
  children,
}: SectionProps) {
  return (
    <section className={styles.section}>
      {heading && (
        <h2 className={`${styles.heading} ${styles[font]}`}>{heading}</h2>
      )}
      {children}
    </section>
  );
}
