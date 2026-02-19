import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { Placeholder } from "@/components/Placeholder/Placeholder";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Strategic front-end engineering leader with Fortune 500 experience at T-Mobile and Apple, now running Empac.",
};

const timeline = [
  {
    company: "Empac",
    role: "Founder & Principal Consultant",
    period: "2022 – Present",
    description:
      "Founded a boutique consultancy delivering Fortune 500-quality engineering to businesses that need it most. Built CascadeDS, shipped client projects across healthcare, energy, and SaaS.",
  },
  {
    company: "Apple",
    role: "Senior Front-End Engineer",
    period: "2021 – 2022",
    description:
      "Worked on internal tools and platforms at Apple, applying deep front-end expertise to mission-critical applications used across the organization.",
  },
  {
    company: "T-Mobile",
    role: "Lead Front-End Engineer",
    period: "2018 – 2021",
    description:
      "Led front-end engineering for high-traffic consumer-facing products. Built the Savings Calculator (2M+ calculations/quarter) and the Super Bowl landing page (50M+ pageviews).",
  },
];

const values = [
  {
    title: "Ship, then polish",
    description:
      "Working software beats perfect plans. I get things live fast, then iterate based on real usage and feedback.",
  },
  {
    title: "Own the outcome",
    description:
      "I don't just write code — I own the result. That means caring about performance, accessibility, conversions, and everything downstream of the deploy.",
  },
  {
    title: "Build for the team",
    description:
      "Every system I build is meant to outlast me. Clean code, clear documentation, and patterns that other engineers can pick up and run with.",
  },
  {
    title: "Stay technical",
    description:
      "Leadership doesn't mean leaving the code behind. I lead by staying in the work — reviewing, architecting, and shipping alongside the team.",
  },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <PageHeader title="About" />

      <section className={styles.intro}>
        <div className={styles.introText}>
          <p className={styles.lead}>
            I&apos;m a front-end engineering leader who&apos;s spent a career
            building things that matter at companies like T-Mobile and Apple.
          </p>
          <p className={styles.body}>
            Now I run Empac, a boutique consultancy where I bring that same
            Fortune 500 rigor — the architecture, the performance standards,
            the attention to detail — to businesses that can&apos;t hire a team
            of 50 but need one person who thinks like they have one.
          </p>
          <p className={styles.body}>
            I believe great engineering is invisible. Users shouldn&apos;t
            notice the technology — they should just notice that things work
            well, load fast, and feel right.
          </p>
        </div>
        <div className={styles.introImage}>
          <Placeholder aspectRatio="3 / 4" label="Portrait photo" />
        </div>
      </section>

      <Section heading="Career">
        <div className={styles.timeline}>
          {timeline.map((item) => (
            <div key={item.company} className={styles.timelineItem}>
              <div className={styles.timelineMeta}>
                <span className={styles.timelineCompany}>{item.company}</span>
                <span className={styles.timelinePeriod}>{item.period}</span>
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineRole}>{item.role}</h3>
                <p className={styles.body}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section heading="How I Work">
        <div className={styles.values}>
          {values.map((value) => (
            <div key={value.title} className={styles.valueCard}>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className={styles.cta}>
        <h2 className={styles.ctaHeading}>Want to work together?</h2>
        <p className={styles.body}>
          I take on a limited number of engagements at a time. If you&apos;re
          building something that needs senior-level front-end expertise,
          let&apos;s talk.
        </p>
        <Link href="/work" className={styles.ctaLink}>
          See my work
        </Link>
      </section>
    </div>
  );
}
