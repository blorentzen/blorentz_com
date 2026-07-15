import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal/Reveal";
import { Aurora } from "@/components/Aurora/Aurora";
import { RateCard } from "./RateCard";
import { PreviousProjects } from "./PreviousProjects";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Custom Work",
  description:
    "The kind of work you need, exactly what it looks like, and what it costs. Design, custom development, marketing, content, and photo & video — with rates, real project examples, and how each engagement is structured.",
  robots: { index: false, follow: false },
};

export default function CustomWorkPage() {
  return (
    <div className={styles.page}>
      <Reveal>
        <header className={`${styles.heroBand} on-dark`}>
          <Aurora className={styles.heroAurora} />
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Design, development, and digital solutions to solve pain points in your marketing and sales processes.
              </h1>
              <p className={styles.heroSubhead}>
                You know there are things that need improved with your operations, so these services are meant to do just that. 
                Pick a category to get a ballpark on rates and learn how each engagement is structured.
              </p>
            </div>
          </div>
        </header>
      </Reveal>

      <div className={styles.content}>
        <Reveal delay={0.1}>
          <RateCard />
        </Reveal>

        <Reveal>
          <PreviousProjects />
        </Reveal>

        <Reveal>
          <section className={styles.ctaModule}>
            <h2 className={styles.ctaHeading}>Let's get your marketing and sales processes on track.</h2>
            <p className={styles.ctaText}>
              I'm ready when you are, let's set up a call and see what we can do.
            </p>
            <a
              href="https://cal.com/blorentz/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.ctaButton} plausible-event-name=Discovery+Call`}
            >
              Book a time &rarr;
            </a>
          </section>
        </Reveal>

        <footer className={styles.terms}>
          <p className={styles.termsText}>
            <span className={styles.termsLabel}>Terms.</span> Invoices are due on
            receipt. A 1.5%/mo late fee applies after 15 days, and active work
            pauses until the account is current. Invoicing runs through Empac.
          </p>
        </footer>
      </div>
    </div>
  );
}
