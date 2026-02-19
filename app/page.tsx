import Link from "next/link";
import { getFeaturedCaseStudies } from "@/content/case-studies";
import { CaseStudyCard } from "@/components/CaseStudyCard/CaseStudyCard";
import { Section } from "@/components/Section/Section";
import styles from "./page.module.css";

export default function Home() {
  const featured = getFeaturedCaseStudies();

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Britton Lorentzen</h1>
        <p className={styles.heroTagline}>
          Strategic front-end engineering leader. Fortune 500 experience,
          boutique consultancy execution.
        </p>
        <div className={styles.heroCtas}>
          <Link href="/work" className={styles.ctaPrimary}>
            See my work
          </Link>
          <Link href="/about" className={styles.ctaSecondary}>
            About me
          </Link>
        </div>
      </section>

      <Section heading="Featured Work">
        <div className={styles.grid}>
          {featured.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
        <div className={styles.viewAll}>
          <Link href="/work" className={styles.viewAllLink}>
            View all projects
          </Link>
        </div>
      </Section>

      <section className={styles.aboutTeaser}>
        <div className={styles.aboutTeaserContent}>
          <h2 className={styles.aboutTeaserHeading}>
            I build things that work.
          </h2>
          <p className={styles.aboutTeaserText}>
            I&apos;ve led front-end engineering at T-Mobile and Apple, and now I
            run Empac — a boutique consultancy where I bring that same
            Fortune 500 rigor to businesses that need it most.
          </p>
          <Link href="/about" className={styles.ctaSecondary}>
            More about me
          </Link>
        </div>
      </section>
    </div>
  );
}
