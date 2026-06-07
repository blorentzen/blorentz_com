import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal/Reveal";
import { Section } from "@/components/Section/Section";
import { Aurora } from "@/components/Aurora/Aurora";
import { StaggerGrid } from "@/components/StaggerGrid/StaggerGrid";
import { CaseStudyCard } from "@/components/CaseStudyCard/CaseStudyCard";
import { getCaseStudy } from "@/content/case-studies";
// @ts-expect-error CDS type declarations reference CSS files not present in dist/types
import { Accordion, Carousel, CarouselItem, Icon, Avatar } from "@empac/cascadeds";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Office Hours",
  description:
    "Monthly advisory for founders and small business owners. One hour with me, one written recap, and get the answers you need to make informed website and marketing decisions. Starting at $200 per session.",
};

const canBring = [
  {
    icon: "code",
    title: "Code review",
    body: "Bring any and all code you're working on. I'll tell you if the approach holds up, where it might bite you later, and whether it'll scale when there's an increase in traffic.",
  },
  {
    icon: "palette",
    title: "Design & copy feedback",
    body: "Send the pages, mockups, and drafts you're working on. I'll tell you what's working, what might be confusing for users, and actionable feedback to improve the overall user experience.",
  },
  {
    icon: "stack-2",
    title: "Stack & tool decisions",
    body: "Anything regarding hosting, frameworks, CMS platforms, and more. I'll help you pick what fits where you're headed so you have a future-proof system.",
  },
  {
    icon: "sparkles",
    title: "AI tool tradeoffs",
    body: "Whether you're using Lovable, Bolt, Cursor, or something else, I'll guide you on the best way to work with AI to get the ideal results for your website, application, or project.",
  },
  {
    icon: "users",
    title: "Hiring decisions",
    body: "This includes when to hire, who to look for, and what a good candidate looks like. I've had to make these calls before, and I've seen my fair share of candidates that either worked out or fizzled out.",
  },
  {
    icon: "building",
    title: "Architecture tradeoffs",
    body: "Should you be rebuilding or patching something up? We'll weigh the pros and cons of different solutions, what each costs you, and find the ideal solution for your business, web, and marketing decisions.",
  },
  {
    icon: "currency-dollar",
    title: "Pricing questions",
    body: "Are you undercharging or overcharging? It can be tricky figuring out pricing, so we'll take a look at what you're worth and what the market is willing to pay.",
  },
  {
    icon: "target",
    title: "Pressure-testing",
    body: "Have big decisions queued up that need a second opinion? Bring it to Office Hours before you commit to get an objective point of view before you make any commitments.",
  },
];

const featured = {
  client: "Olympic Energy",
  href: "/work/olympic-energy-calculator",
  image:
    "https://cdn.empac.co/portfolio/images/olympic-energy-trucks-with-olympic-mountains.webp",
  story:
    "Olympic Energy is the best example of what this turns into. We've been talking through their business for a long time now, and it's the kind of ongoing back-and-forth that's basically Office Hours. Those conversations are where the oil tank calculator came from, plus the optimized landing pages for their Google Ads campaigns. The thinking happened in the conversations, then we scoped out a build to make it happen.",
};

const testimonials = [
  {
    quote:
      "Finding Empac and deciding to move forward with their team for my website design and maintenance was the best decision. They built an amazing website and I continuously get great feedback from my colleagues and patients! The referrals have been coming in and that is a testament to what they have built for me.",
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
      "Our company, Consiglieri, hired Empac Design to restructure and redesign our website to add a more professional, modern feel to the content. The Empac team was collaborative in the early design process, efficient with their reviews, and delivered a final product at an incredibly high standard.",
    author: "Chris Noble",
    role: "Founder & Head of Operations, Consiglieri",
    initials: "CN",
    image:
      "https://cdn.empac.co/main/assets/images/work-samples/consiglieri/chris-noble.avif",
  },
];

const tiers = [
  {
    name: "Monthly",
    price: "$200",
    cadence: "/mo",
    detail: "One session a month. The default, and the right starting point for most.",
    recommended: true,
  },
  {
    name: "Biweekly",
    price: "$400",
    cadence: "/mo",
    detail: "Two sessions a month when you're moving fast and the decisions are stacking up.",
    recommended: false,
  },
  {
    name: "Weekly",
    price: "$800",
    cadence: "/mo",
    detail: "Four sessions a month. A close, steady cadence through an intense stretch.",
    recommended: false,
  },
];

const faqs = [
  {
    q: "What if I need more than one session a month?",
    a: "Per-session pricing scales: biweekly is $400/mo, weekly is $800/mo. We'll land on the right cadence on the discovery call.",
  },
  {
    q: "What if I need implementation help?",
    a: "Office Hours is for direction. Once we know what to build, I can quote it separately or refer it out.",
  },
  {
    q: "How is this different from the Website and Marketing Audit?",
    a: "The audit is a one-time diagnostic: fixed scope, recorded session, written report. Office Hours is ongoing. A lot of founders do the audit first to surface what needs work, then move into Office Hours for the follow-through.",
    auditLink: true,
  },
  {
    q: "What if it isn't working?",
    a: "Month-to-month. Cancel anytime. No hard feelings.",
  },
  {
    q: "Can I expense this through my business?",
    a: "Yes. You'll get a clean monthly invoice through Stripe.",
  },
];

export default function OfficeHoursPage() {
  const proofStudies = [
    getCaseStudy("dr-patel-redesign"),
    getCaseStudy("iyengar-plastic-surgery"),
  ];

  return (
    <div className={styles.page}>
      {/* Hero:full-bleed dark band */}
      <Reveal>
        <header className={`${styles.heroBand} on-dark`}>
          <Aurora className={styles.heroAurora} />
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Office Hours</h1>
              <p className={styles.heroSubhead}>
                A senior web and marketing expert in your corner, every month.
              </p>
              <p className={styles.heroBody}>
                Monthly advisory for founders and small business owners. One hour with me, one written recap, and get the answers you need to make informed website and marketing decisions. Starting at $200 per session.
              </p>
              <a
                href="https://cal.com/blorentz/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.heroCta} plausible-event-name=Discovery+Call`}
              >
                Book a discovery call &rarr;
              </a>
            </div>
          </div>
        </header>
      </Reveal>

      <div className={styles.content}>

      {/* What you can bring */}
      <Reveal>
        <Section heading="What I can support you with.">
          <Carousel
            slidesToShow={{ mobile: 1, tablet: 2, desktop: 3 }}
            gap={24}
            showArrows
            showDots
            arrowPosition="bottom"
            className={styles.ohCarousel}
          >
            {canBring.map((item) => (
              <CarouselItem key={item.title}>
                <div className={styles.ohCard}>
                  <span className={styles.ohCardIcon}>
                    <Icon name={item.icon} size="24" />
                  </span>
                  <h3 className={styles.ohCardTitle}>{item.title}</h3>
                  <p className={styles.ohCardBody}>{item.body}</p>
                </div>
              </CarouselItem>
            ))}
          </Carousel>
          <p className={styles.bringNote}>
            If you&apos;re not sure something fits, ask on the discovery call.
          </p>
        </Section>
      </Reveal>

      {/* Real client work:featured Olympic + two-column */}
      <Reveal>
        <Section heading="What successful sessions look like.">
          <div className={styles.featuredModule}>
            <div className={styles.featuredCopy}>
              <span className={styles.featuredLabel}>
                Featured &middot; {featured.client}
              </span>
              <p className={styles.featuredStory}>{featured.story}</p>
              <Link href={featured.href} className={styles.featuredLink}>
                Read the case study &rarr;
              </Link>
            </div>
            <div className={styles.featuredImageWrap}>
              <Image
                src={featured.image}
                alt="Olympic Energy delivery trucks with the Olympic mountains behind them"
                fill
                className={styles.featuredBg}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <StaggerGrid className={styles.proofGrid}>
            {proofStudies.map(
              (study) =>
                study && <CaseStudyCard key={study.slug} study={study} />
            )}
          </StaggerGrid>
        </Section>
      </Reveal>

      {/* Testimonials */}
      <Reveal>
        <section id="testimonials">
          <Section heading="And our clients are pretty pleased with their results.">
            <p className={styles.testimonialNote}>
              You&apos;ll see &ldquo;Empac&rdquo; mentioned in a few of these.
              That&apos;s the freelance business I ran this client work under. The
              work itself, start to finish, was between myself and the client.
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
        </section>
      </Reveal>
      </div>

      {/* Pricing:dark band */}
      <Reveal>
        <section id="pricing" className={`${styles.pricingBand} on-dark`}>
          <div className={styles.pricingGlow} aria-hidden="true" />
          <div className={styles.pricingInner}>
            <h2 className={styles.pricingHeading}>Pricing that works with any budget.</h2>
            <p className={styles.prose}>
              Each session is priced at $200, and most people opt for a monthly
              cadence. Depending on the scope of your work, you might benefit from
              a weekly or biweekly meeting to get more movement going.
            </p>
            <div className={styles.pricingGrid}>
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`${styles.pricingCard} ${
                  tier.recommended ? styles.pricingRecommended : ""
                }`}
              >
                {tier.recommended && (
                  <span className={styles.pricingBadge}>Recommended</span>
                )}
                <h3 className={styles.pricingName}>{tier.name}</h3>
                <p className={styles.pricingPrice}>
                  {tier.price}
                  <span className={styles.pricingCadence}>{tier.cadence}</span>
                </p>
                <p className={styles.pricingDetail}>{tier.detail}</p>
              </div>
            ))}
          </div>
          </div>
        </section>
      </Reveal>

      <div className={styles.content}>
      {/* Book a discovery call */}
      <Reveal>
        <section id="book" className={styles.bookSection}>
          <div className={styles.bookCard}>
            <h2 className={styles.bookHeading}>Let&apos;s get you on the books.</h2>
            <p className={styles.bookText}>
              We&apos;ll take 30 minutes to uncover whether or not we&apos;ll be a
              good fit working together. We&apos;ll go over what you&apos;re working
              on, where you&apos;re stuck, and cover next steps for your website and
              marketing projects.
            </p>
            <a
              href="https://cal.com/blorentz/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.bookButton} plausible-event-name=Discovery+Call`}
            >
              Book a discovery call &rarr;
            </a>
          </div>
        </section>
      </Reveal>

      {/* FAQ */}
      <Reveal>
        <Section heading="FAQ">
          <Accordion
            variant="flush"
            items={faqs.map((faq, i) => ({
              id: `faq-${i}`,
              title: faq.q,
              content: faq.auditLink ? (
                <>
                  The{" "}
                  <Link href="/website-marketing-audit" className={styles.inlineLink}>
                    Website and Marketing Audit
                  </Link>{" "}
                  is a one-time diagnostic: fixed scope, recorded session, written
                  report. Office Hours is ongoing. A lot of founders do the Audit
                  first to surface what needs work, then move into Office Hours for
                  the follow-through.
                </>
              ) : (
                faq.a
              ),
            }))}
          />
        </Section>
      </Reveal>

      {/* Footer disclaimer:consolidated scope + billing */}
      <Reveal>
        <div className={styles.disclaimer}>
          <p className={styles.disclaimerText}>
            Office Hours is advisory, not execution. I don&apos;t build between
            sessions, field 2am emergencies, or take on one-time throwaway
            consulting. When something needs to get built, that&apos;s a separate
            engagement we&apos;ll scope together. Billing is month-to-month through
            Stripe, and you can cancel anytime.
          </p>
        </div>
      </Reveal>
      </div>
    </div>
  );
}
