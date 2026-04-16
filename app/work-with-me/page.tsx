import type { Metadata } from "next";
import Link from "next/link";
import { getCaseStudiesByCategory } from "@/content/case-studies";
import { CaseStudyCard } from "@/components/CaseStudyCard/CaseStudyCard";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Reveal } from "@/components/Reveal/Reveal";
import { Section } from "@/components/Section/Section";
import { StaggerGrid } from "@/components/StaggerGrid/StaggerGrid";
import { WorkWithMeForm } from "./WorkWithMeForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "I build custom interactive tools, websites, and applications for established businesses with complex problems. Consulting engagements through blorentz.com.",
};

const services = [
  {
    title: "Custom Interactive Tools",
    description:
      "Calculators, estimators, quizzes, booking systems, and custom web applications. These are the tools that sit inside your sales and business processes and do the work your team is currently doing manually or not doing at all. I design and build them from scratch, from user research through shipping to production.",
    signal:
      'If your customers are calling you to ask "how much does this cost?" or "which option is right for me?" that\'s usually where a custom tool pays for itself.',
  },
  {
    title: "Website Builds and Redesigns",
    description:
      "Not a template, and definitely not a commodity redesign. I build websites centered around a strategy, with clear goals, proper analytics, and content that actually drives people toward a decision. I work in Webflow for CMS-driven sites and custom code for anything that needs more flexibility.",
    signal:
      "If you've outgrown your current site and you know it, but you need someone who understands both the business goals and the technical execution, this is the service for you.",
  },
  {
    title: "Ongoing Optimization",
    description:
      "The work isn't done once a project goes lives. I offer retainer engagements for continuous improvements including performance optimization, SEO, content updates, analytics reviews, and strategic recommendations. I rotate focus areas monthly based on what's actually driving sales and conversions for your business.",
    signal:
      "This isn't a maintenance plan... it's an ongoing partnership where I'm actively working to make your web and digital investments perform better over time.",
  },
];

const goodFit = [
  "You're bringing in decent revenue, but would like to find ways to increase revenue through web and digital channels",
  "Your sales or business processes are complex enough that customers struggle to self-serve, or employees are having a hard time doing their job",
  "You've outgrown template solutions and need something customized and scalable",
  "You're the decision-maker or you have direct access to them",
  "A $10k-25k starting price for a project doesn't scare you because you understand the ROI",
];

const notFit = [
  "You're pre-revenue and need a cheap landing page",
  "You're shopping for the lowest price",
  "You need something done yesterday with no discovery process",
  "You want to manage the project through a committee",
  "You want someone that will only execute on your vision, no questions asked"
];

const process = [
  {
    label: "Discovery",
    description:
      "We will always start with the problem. I need to understand your business, your customers, and where the friction lives before I design or build anything. This usually takes 1-2 weeks depending on complexity.",
  },
  {
    label: "Design & Prototype",
    description:
      "Everything gets designed in Figma before code is written. You'll see wireframes, high-fidelity mockups, and interactive prototypes. You'll know exactly what you're getting before development starts.",
  },
  {
    label: "Build",
    description:
      "I write the code. Front-end, back-end, integrations, analytics... and whatever the project needs. I use AI-assisted development tools to move faster without cutting corners on quality. Everything I build is maintainable, accessible, and built to last.",
  },
  {
    label: "Launch & Optimize",
    description:
      "Projects include 30 days of post-launch support. After that, most clients move into a retainer for ongoing optimization. My goal is to build something that'll drive value for your business long-term, and the best way to deliver is to continue the partnership afterwards.",
  },
];

const testimonials = [
  {
    quote:
      "Finding Empac and deciding to move forward with their team for my website design and maintenance was the best decision. They built an amazing website and I continuously get great feedback from my colleagues and patients! The referrals have been coming in and that is a testament to what they have built for me. Their team is always available and receptive to updates and changes needed!! If you need a website or need your site updated, Empac is the way to go. No regrets.",
    author: "Dr. Tarak Patel",
    role: "Double Board-Certified Plastic Surgeon",
  },
  {
    quote:
      "They created a beautiful, modern website that truly reflects our vision and the level of care we provide to patients. We've received so many compliments on how professional and polished the website looks. I would highly recommend Empac to any medical practice looking for someone that is creative, responsive, and genuinely invested in delivering exceptional results.",
    author: "Raj & Sneha Iyengar",
    role: "Iyengar Plastic Surgery",
  },
  {
    quote:
      "Our company, Consiglieri, hired Empac Design to restructure and redesign our website to add a more professional, modern feel to the content. The Empac team was collaborative in the early design process, efficient with their reviews, and delivered a final product at an incredibly high standard. They continued to support us even after the new site launched to ensure our complete satisfaction. We'd highly recommend Empac for design!",
    author: "Chris Noble",
    role: "Founder & Head of Operations, Consiglieri",
  },
];

export default function WorkWithMePage() {
  const clientWork = getCaseStudiesByCategory("client-work");

  return (
    <div className={styles.page}>
      {/* Hero */}
      <Reveal>
        <header className={styles.hero}>
          <h1 className={styles.heroTitle}>
            I build things that solve expensive problems.
          </h1>
          <p className={styles.heroSubhead}>
            I offer custom interactive tool builds, website builds and redesigns, and ongoing
            optimization for established businesses around the Puget Sound. I work directly with
            founders and decision-makers who need someone that can think through
            the strategy AND build the thing.
          </p>
          <a href="#contact" className={styles.heroCta}>
            Start a Conversation
          </a>
        </header>
      </Reveal>

      {/* What I Do */}
      <Reveal>
        <Section heading="What I Do">
          <p className={styles.sectionIntro}>
            There's three ways we can work together. Each one starts with understanding
            what&apos;s actually costing you money, then building the thing that
            will solve your challenges.
          </p>
          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <div key={service.title} className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
                <p className={styles.serviceSignal}>{service.signal}</p>
              </div>
            ))}
          </div>
        </Section>
      </Reveal>

      {/* Who This Is For */}
      <Reveal>
        <Section heading="Who This Is For">
          <p className={styles.sectionIntro}>
            I work best with established businesses that already have revenue coming in and has a
            complex problem to solve. Here&apos;s what a good fit usually looks
            like:
          </p>
          <div className={styles.fitGrid}>
            <div className={styles.fitColumn}>
              <h3 className={styles.fitLabel}>Good fit</h3>
              <ul className={styles.fitList}>
                {goodFit.map((item) => (
                  <li key={item} className={styles.fitItem}>
                    {item}
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className={styles.fitNote}>
            I keep my client roster small on purpose. I&apos;m a Senior Creative
            Development Manager at T&#8209;Mobile during the day, and I take on
            select consulting engagements because I enjoy the work and I&apos;m
            good at it. That means I&apos;m selective about what I take on, but
            the people I work with get my full attention and expertise.
          </p>
        </Section>
      </Reveal>

      {/* How I Work */}
      <Reveal>
        <Section heading="How I Work">
          <p className={styles.sectionIntro}>
            Every engagement follows the same core process.
          </p>
          <div className={styles.processGrid}>
            {process.map((step, i) => (
              <div key={step.label} className={styles.processStep}>
                <span className={styles.processNumber}>{i + 1}</span>
                <div>
                  <h3 className={styles.processLabel}>{step.label}</h3>
                  <p className={styles.processDescription}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </Reveal>

      {/* Proof */}
      <Reveal>
        <Section heading="Proof">
          <p className={styles.sectionIntro}>
            Here&apos;s what this looks like in practice.
          </p>
          <StaggerGrid className={styles.proofGrid}>
            {clientWork.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </StaggerGrid>
          <div className={styles.proofCta}>
            <Link href="/work" className={styles.proofLink}>
              See all work &rarr;
            </Link>
          </div>
        </Section>
      </Reveal>

      {/* What Clients Say */}
      <Reveal>
        <Section heading="What Clients Say">
          <div className={styles.testimonialGrid}>
            {testimonials.map((t) => (
              <blockquote key={t.author} className={styles.testimonial}>
                <p className={styles.testimonialQuote}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className={styles.testimonialAttribution}>
                  <span className={styles.testimonialAuthor}>{t.author}</span>
                  <span className={styles.testimonialRole}>{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </Section>
      </Reveal>

      {/* Billing Note */}
      <Reveal>
        <div className={styles.billingNote}>
          <p className={styles.billingText}>
            All consulting engagements are billed through Empac, my registered
            business. Empac handles the contracts, invoicing, and technical
            infrastructure for every project.
          </p>
          <p className={styles.billingText}>
            You&apos;re hiring me, and Empac is how the work gets delivered. There's no
            account managers, continual handoffs, &ldquo;let me check with my
            team.&rdquo; with my projects.
          </p>
        </div>
      </Reveal>

      {/* Start a Conversation */}
      <Reveal>
        <section id="contact" className={styles.contactSection}>
          <h2 className={styles.contactHeading}>Let's Start a Conversation</h2>
          <p className={styles.sectionIntro}>
            If any of this sounds like what you&apos;re dealing with, or something you feel your business could benefit from, let&apos;s
            talk.
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
  );
}
