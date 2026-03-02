import Link from "next/link";
import Image from "next/image";
import { Placeholder } from "@/components/Placeholder/Placeholder";
import type { CaseStudy } from "@/content/case-studies";
import styles from "./CaseStudyCard.module.css";

interface CaseStudyCardProps {
  study: CaseStudy;
}

function isExternalUrl(url: string): boolean {
  return url.startsWith("http://") || url.startsWith("https://");
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  const hasRealImage = study.heroImage && isExternalUrl(study.heroImage);

  return (
    <Link href={`/work/${study.slug}`} className={styles.card}>
      <div className={styles.thumbnail}>
        {hasRealImage ? (
          <Image
            src={study.heroImage!}
            alt={study.title}
            width={640}
            height={360}
            className={styles.thumbnailImage}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <Placeholder aspectRatio="16 / 9" label={study.title} />
        )}
      </div>
      <div className={styles.content}>
        <span className={styles.client}>{study.client}</span>
        <h3 className={styles.title}>{study.title}</h3>
        <p className={styles.headline}>{study.headline}</p>
      </div>
    </Link>
  );
}
