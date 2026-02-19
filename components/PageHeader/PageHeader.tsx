import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  font?: "display" | "technical";
}

export function PageHeader({
  title,
  subtitle,
  font = "display",
}: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={`${styles.title} ${styles[font]}`}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  );
}
