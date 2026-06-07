import type { Metadata } from "next";
import Link from "next/link";
import { getCaseStudiesByCategory } from "@/content/case-studies";
import { CaseStudyCard } from "@/components/CaseStudyCard/CaseStudyCard";
import { Reveal } from "@/components/Reveal/Reveal";
import { Section } from "@/components/Section/Section";
import { StaggerGrid } from "@/components/StaggerGrid/StaggerGrid";
import { Aurora } from "@/components/Aurora/Aurora";
// @ts-expect-error CDS type declarations reference CSS files not present in dist/types
import { Avatar, Icon } from "@empac/cascadeds";
import { WorkWithMeForm } from "./WorkWithMeForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "I build custom tools, websites, and applications for established businesses with expensive problems to solve. Start with an audit, monthly advisory, or a full project.",
};

const goodFit = [
  "You're bringing in real revenue and want to grow it through your web and digital channels",
  "Your sales or business processes are complex enough that customers struggle to self-serve, or your team is stuck doing work software should handle",
  "You've outgrown template solutions and need something custom and built to scale",
  "You're the decision-maker, or you have direct access to them",
  "A project starting at $10k doesn't scare you, because you understand the ROI",
];

const notFit = [
  "You're pre-revenue and need a cheap landing page",
  "You're shopping for the lowest price",
  "You need something done yesterday with no discovery process",
  "You want to run the project through a committee",
  "You want someone who'll only execute your vision, no questions asked",
];

const testimonials = [
  {
    quote:
      "Finding Empac and deciding to move forward with their team for my website design and maintenance was the best decision. They built an amazing website and I continuously get great feedback from my colleagues and patients! The referrals have been coming in and that is a testament to what they have built for me. Their team is always available and receptive to updates and changes needed!! If you need a website or need your site updated, Empac is the way to go. No regrets.",
    author: "Dr. Tarak Patel",
    role: "Double Board-Certified Plastic Surgeon",
    initials: "TP",
    image:
      "https://cdn.empac.co/main/assets/images/work-samples/dr-patel/dr-patel-headshot.avif",
  },
  {
    quote:
      "They created a beautiful, modern website that truly reflects our vision and the level of care we provide to patients. We've received so many compliments on how professional and polished the website looks. I would highly recommend Empac to any medical practice looking for someone that is creative, responsive, and genuinely invested in delivering exceptional results.",
    author: "Raj & Sneha Iyengar",
    role: "Iyengar Plastic Surgery",
    initials: "RS",
    image:
      "https://cdn.empac.co/main/assets/images/work-samples/dr-iyengar/raj-and-sneha-iyengar.jpg",
  },
  {
    quote:
      "Our company, Consiglieri, hired Empac Design to restructure and redesign our website to add a more professional, modern feel to the content. The Empac team was collaborative in the early design process, efficient with their reviews, and delivered a final product at an incredibly high standard. They continued to support us even after the new site launched to ensure our complete satisfaction. We'd highly recommend Empac for design!",
    author: "Chris Noble",
    role: "Founder & Head of Operations, Consiglieri",
    initials: "CN",
    image:
      "https://cdn.empac.co/main/assets/images/work-samples/consiglieri/chris-noble.avif",
  },
];

export default function WorkWithMePage() {
  const clientWork = getCaseStudiesByCategory("client-work");

  return (
    <div className={styles.page}>
      {/* Hero — full-bleed dark band */}
      <Reveal>
        <header className={`${styles.heroBand} on-dark`}>
          <Aurora className={styles.heroAurora} />
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                I build things that solve expensive problems.
              </h1>
              <p className={styles.heroSubhead}>
                Custom tools, websites, and applications for established businesses
                around the Puget Sound. I work directly with founders and
                decision-makers who need someone who can think through the strategy
                and build the thing.
              </p>
              <a href="#start" className={styles.heroCta}>
                Start a Conversation
              </a>
            </div>
          </div>
        </header>
      </Reveal>

      <div className={styles.content}>
      {/* Three Ways to Start */}
      <Reveal>
        <section id="start">
          <Section heading="Three ways we can work together.">
            <p className={styles.sectionIntro}>
              Pick the door that fits where you are. You don&apos;t need to know
              exactly what you need right away... all you need to know is whether you want a read on
              what you&apos;ve got, a senior voice in your corner, or someone to
              build the thing.
            </p>

            {/* Anchor door — Start a Project */}
            <a href="#contact" className={styles.doorAnchor}>
              <div className={styles.doorAnchorMain}>
                <span className={styles.doorAnchorIcon}>
                  <Icon name="tool" size="32" />
                </span>
                <div className={styles.doorAnchorText}>
                  <span className={styles.doorLabel}>Custom work</span>
                <h3 className={styles.doorAnchorTitle}>Start a project together.</h3>
                <p className={styles.doorAnchorDescription}>
                  Custom tools, website builds and redesigns, and ongoing
                  optimization for businesses with a challenging business and marketing problems. This is
                  the core of what I do: developing web and marketing strategies, building custom apps and solutions, and it&apos;s all done by myself from start to
                  finish.
                  </p>
                </div>
              </div>
              <span className={styles.doorAnchorCta}>Let&apos;s get started</span>
            </a>

            {/* On-ramps — Audit + Office Hours */}
            <div className={styles.doorGrid}>
              <Link href="/website-marketing-audit" className={styles.door}>
                <span className={styles.doorIcon}>
                  <Icon name="search" size="24" />
                </span>
                <span className={styles.doorLabel}>Website and marketing audits</span>
                <h3 className={styles.doorTitle}>Let me audit what you&apos;ve built.</h3>
                <p className={styles.doorDescription}>
                  Have you built something with Lovable, Bolt, or Cursor? I&apos;ll provide you a read on
                  whether it&apos;ll actually drive business, and what&apos;s going to slow you
                  down when you try to scale your operation. It&apos;s all fixed scope, starting at $1,500.
                </p>
                <span className={styles.doorCta}>Explore the audit &rarr;</span>
              </Link>
              <Link href="/office-hours" className={styles.door}>
                <span className={styles.doorIcon}>
                  <Icon name="calendar" size="24" />
                </span>
                <span className={styles.doorLabel}>Monthly advisory</span>
                <h3 className={styles.doorTitle}>Join my Office Hours.</h3>
                <p className={styles.doorDescription}>
                  I&apos;ll be your senior voice in your corner on a monthly basis. Includes one hour of my time, written
                  recaps, and direct answers to what&apos;s slowing you down. There&apos;s no need for a retainer commitment, and it starts at $200/mo.
                </p>
                <span className={styles.doorCta}>Explore Office Hours &rarr;</span>
              </Link>
            </div>
          </Section>
        </section>
      </Reveal>

      {/* Proof — case studies */}
      <Reveal>
        <Section heading="Here's what this looks like in practice.">
          <StaggerGrid className={styles.proofGrid}>
            {clientWork.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </StaggerGrid>
          <div className={styles.proofCta}>
            <Link href="/work" className={styles.proofLink}>
              Check out all work &rarr;
            </Link>
          </div>
        </Section>
      </Reveal>

      {/* What Clients Say */}
      <Reveal>
        <Section heading="Here's what my clients have to say.">
          <p className={styles.testimonialNote}>
            You&apos;ll see &ldquo;Empac&rdquo; mentioned in a few of these. That&apos;s
            the freelance business I ran this client work under. The work itself, start to
            finish, was between myself and the client.
          </p>
          <div className={styles.testimonialGrid}>
            {testimonials.map((t) => (
              <figure key={t.author} className={styles.testimonialCard}>
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
      </Reveal>

      {/* Who This Is For — final gut-check before the ask */}
      <Reveal>
        <Section heading="Who these services are for.">
          <p className={styles.sectionIntro}>
            I work best with established businesses that already have revenue coming
            in and complex website and marketing problems to solve. Here&apos;s what a good fit usually
            looks like.
          </p>
          <div className={styles.fitGrid}>
            <div className={styles.fitColumn}>
              <h3 className={styles.fitLabel}>Good fit</h3>
              <ul className={styles.fitList}>
                {goodFit.map((item) => (
                  <li key={item} className={styles.fitItem}>
                    <span className={styles.fitIcon}>
                      <Icon name="circle-check" size="18" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.fitColumn}>
              <h3 className={`${styles.fitLabel} ${styles.fitLabelNot}`}>
                Not the right fit
              </h3>
              <ul className={styles.fitList}>
                {notFit.map((item) => (
                  <li key={item} className={styles.fitItem}>
                    <span className={`${styles.fitIcon} ${styles.fitIconNot}`}>
                      <Icon name="circle-x" size="18" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </Reveal>

      {/* Start a Conversation */}
      <Reveal>
        <section id="contact" className={styles.contactSection}>
          <h2 className={styles.contactHeading}>Let&apos;s set up a chat.</h2>
          <p className={styles.sectionIntro}>
            Would you like support with your website or marketing? Let&apos;s get a meeting on the books to talk shop.
          </p>
          <WorkWithMeForm />
          <p className={styles.contactFallback}>
            Prefer email? Reach me at{" "}
            <a href="mailto:Britton@empac.co" className={styles.emailLink}>
              Britton@empac.co
            </a>
          </p>
        </section>
      </Reveal>
      </div>
    </div>
  );
}
