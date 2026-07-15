// @ts-expect-error CDS type declarations reference CSS files not present in dist/types
import { Avatar } from "@empac/cascadeds";
import { getCaseStudy } from "@/content/case-studies";
import { CaseStudyCard } from "@/components/CaseStudyCard/CaseStudyCard";
import { Section } from "@/components/Section/Section";
import { StaggerGrid } from "@/components/StaggerGrid/StaggerGrid";
import { IyengarStory } from "./IyengarStory";
import { proofTestimonials } from "./content";
import styles from "./page.module.css";

// Client websites and tools plus the products I'm building at Empac.
const PROJECT_SLUGS = [
  "dr-patel-redesign",
  "consiglieri",
  "olympic-energy-calculator",
  "cascadeds",
  "sidecar",
  "gameshuffle",
];

export function PreviousProjects() {
  const studies = PROJECT_SLUGS.map((slug) => getCaseStudy(slug)).filter(
    Boolean
  );

  return (
    <div className={styles.previousProjects}>
      <IyengarStory />

      <Section heading="Here's more of what I've built.">
        <StaggerGrid className={styles.caseStudyGrid}>
          {studies.map(
            (study) => study && <CaseStudyCard key={study.slug} study={study} />
          )}
        </StaggerGrid>
      </Section>

      <Section heading="Here's what my clients have to say.">
        <div className={styles.testimonialGrid}>
          {proofTestimonials.map((t) => (
            <figure key={t.author} className={styles.testimonial}>
              <Avatar
                src={t.image}
                initials={t.initials}
                alt={t.author}
                size="xlarge"
                shape="circle"
                color="primary"
              />
              <blockquote className={styles.testimonialQuote}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className={styles.testimonialAttribution}>
                <span className={styles.testimonialAuthor}>{t.author}</span>
                <span className={styles.testimonialRole}>{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </div>
  );
}
