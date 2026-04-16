import type { Metadata } from "next";
import { getCaseStudiesByCategory } from "@/content/case-studies";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { CaseStudyCard } from "@/components/CaseStudyCard/CaseStudyCard";
import { Reveal } from "@/components/Reveal/Reveal";
import { StaggerGrid } from "@/components/StaggerGrid/StaggerGrid";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Case studies and projects that span from Fortune 500 companies to boutique engagements and app moonshots.",
};

const sections = [
  {
    category: "tmobile" as const,
    label: "T-Mobile",
    description:
      "Eight years of designing and building interactive experiences that ship to tens of millions of people.",
  },
  {
    category: "empac-products" as const,
    label: "Empac Products",
    description:
      "Products I'm designing and building under Empac, from game night platforms to design systems.",
  },
  {
    category: "client-work" as const,
    label: "Client Work",
    description:
      "Select consulting engagements I've taken on that include custom tools, website redesigns and builds, and full rebrands.",
  },
];

export default function WorkPage() {
  return (
    <div className={styles.page}>
      <Reveal>
        <PageHeader
          title="Portfolio"
          subtitle="Corporate products, client work, and things I've built for myself."
        />
      </Reveal>

      {sections.map((section) => {
        const studies = getCaseStudiesByCategory(section.category);
        return (
          <section key={section.category} className={styles.section}>
            <Reveal>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionLabel}>{section.label}</h2>
                <p className={styles.sectionDescription}>
                  {section.description}
                </p>
              </div>
            </Reveal>
            <StaggerGrid className={styles.grid}>
              {studies.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </StaggerGrid>
          </section>
        );
      })}
    </div>
  );
}
