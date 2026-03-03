import type { Metadata } from "next";
import { getAllCaseStudies } from "@/content/case-studies";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { CaseStudyCard } from "@/components/CaseStudyCard/CaseStudyCard";
import { Reveal } from "@/components/Reveal/Reveal";
import { StaggerGrid } from "@/components/StaggerGrid/StaggerGrid";
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
      <Reveal>
        <PageHeader
          title="Work"
          subtitle="Corporate products, client work, and things I've built for myself. The same amount of thought and care goes into each product and experience I work on."
        />
      </Reveal>
      <StaggerGrid className={styles.grid}>
        {studies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </StaggerGrid>
    </div>
  );
}
