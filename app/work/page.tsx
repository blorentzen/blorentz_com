import type { Metadata } from "next";
import { getAllCaseStudies } from "@/content/case-studies";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { CaseStudyCard } from "@/components/CaseStudyCard/CaseStudyCard";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from Fortune 500 companies and boutique engagements. Real projects, real results.",
};

export default function WorkPage() {
  const studies = getAllCaseStudies();

  return (
    <div className={styles.page}>
      <PageHeader
        title="Work"
        subtitle="Real projects, real results. From Fortune 500 platforms to boutique client engagements."
      />
      <div className={styles.grid}>
        {studies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </div>
  );
}
