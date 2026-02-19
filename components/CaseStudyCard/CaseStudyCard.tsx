import Link from "next/link";
import { Placeholder } from "@/components/Placeholder/Placeholder";
import type { CaseStudy } from "@/content/case-studies";
import styles from "./CaseStudyCard.module.css";

interface CaseStudyCardProps {
  study: CaseStudy;
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Link href={`/work/${study.slug}`} className={styles.card}>
      <div className={styles.thumbnail}>
        <Placeholder aspectRatio="16 / 9" label={study.title} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{study.title}</h3>
        <p className={styles.subtitle}>{study.subtitle}</p>
        <div className={styles.tags}>
          {study.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
