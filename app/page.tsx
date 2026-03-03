import Link from "next/link";
import { getFeaturedCaseStudies } from "@/content/case-studies";
import { CaseStudyCard } from "@/components/CaseStudyCard/CaseStudyCard";
import { Section } from "@/components/Section/Section";
import { Reveal } from "@/components/Reveal/Reveal";
import { StaggerGrid } from "@/components/StaggerGrid/StaggerGrid";
import { Aurora } from "@/components/Aurora/Aurora";
import styles from "./page.module.css";

export default function Home() {
  const featured = getFeaturedCaseStudies();

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Aurora />
        <Reveal>
          <h1 className={styles.heroTitle}>Britton Lorentzen</h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className={styles.heroTagline}>
            I lead front-end development at T-Mobile and run Empac, a
            consultancy I started when I was 18. I love to build things that
            drive results for businesses... whether they&apos;re interactive
            tools, design systems, or custom websites and applications.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className={styles.heroCtas}>
            <Link href="/work" className={styles.ctaPrimary}>
              See my work
            </Link>
            <Link href="/about" className={styles.ctaSecondary}>
              About me
            </Link>
          </div>
        </Reveal>
      </section>

      <Reveal delay={0.5}>
        <Section heading="Featured Work">
          <StaggerGrid className={styles.grid} delay={0.15}>
            {featured.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </StaggerGrid>
          <Reveal delay={0.8}>
            <div className={styles.viewAll}>
              <Link href="/work" className={styles.viewAllLink}>
                View all projects
              </Link>
            </div>
          </Reveal>
        </Section>
      </Reveal>

    </div>
  );
}
