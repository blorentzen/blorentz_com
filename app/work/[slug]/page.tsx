import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllCaseStudies,
  getCaseStudyBySlug,
} from "@/content/case-studies";
import { Placeholder } from "@/components/Placeholder/Placeholder";
import { Section } from "@/components/Section/Section";
import styles from "./page.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCaseStudies().map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.subtitle,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.client}>{study.client}</p>
        <h1 className={styles.title}>{study.title}</h1>
        <p className={styles.subtitle}>{study.subtitle}</p>
        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <span className={styles.metaLabel}>Role</span>
            {study.role}
          </span>
          <span className={styles.metaItem}>
            <span className={styles.metaLabel}>Year</span>
            {study.year}
          </span>
          <span className={styles.metaItem}>
            <span className={styles.metaLabel}>Timeline</span>
            {study.timeline}
          </span>
        </div>
      </header>

      <div className={styles.heroImage}>
        <Placeholder aspectRatio="21 / 9" label={`${study.title} hero`} />
      </div>

      {study.metrics && study.metrics.length > 0 && (
        <div className={styles.metrics}>
          {study.metrics.map((metric) => (
            <div key={metric.label} className={styles.metric}>
              <span className={styles.metricValue}>{metric.value}</span>
              <span className={styles.metricLabel}>{metric.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className={styles.narrative}>
        <Section heading="The Problem">
          <p className={styles.body}>{study.problem}</p>
        </Section>

        <Section heading="The Approach">
          <p className={styles.body}>{study.approach}</p>
        </Section>

        <Section heading="The Result">
          <p className={styles.body}>{study.result}</p>
        </Section>
      </div>

      <Section heading="Details">
        <ul className={styles.details}>
          {study.details.map((detail) => (
            <li key={detail} className={styles.detailItem}>
              {detail}
            </li>
          ))}
        </ul>
      </Section>

      <Section heading="Tech Stack" font="technical">
        <div className={styles.techStack}>
          {study.techStack.map((tech) => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
      </Section>
    </div>
  );
}
