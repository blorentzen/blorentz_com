import styles from "./Timeline.module.css";

interface TimelineEntry {
  company: string;
  role: string;
  period: string;
  description: string;
}

interface TimelineProps {
  entries: TimelineEntry[];
}

export function Timeline({ entries }: TimelineProps) {
  return (
    <div className={styles.timeline}>
      {entries.map((item) => (
        <div
          key={`${item.company}-${item.period}`}
          className={styles.item}
        >
          <div className={styles.meta}>
            <span className={styles.company}>{item.company}</span>
            <span className={styles.period}>{item.period}</span>
          </div>
          <div className={styles.content}>
            <h3 className={styles.role}>{item.role}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
