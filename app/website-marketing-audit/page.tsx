import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal/Reveal";
import { Section } from "@/components/Section/Section";
import { Aurora } from "@/components/Aurora/Aurora";
import { StatCards } from "@/components/StatCards/StatCards";
import { QuestionRotator } from "@/components/QuestionRotator/QuestionRotator";
// @ts-expect-error CDS type declarations reference CSS files not present in dist/types
import { Carousel, CarouselItem, Accordion, Avatar, Icon } from "@empac/cascadeds";
import { ConsultationForm } from "./ConsultationForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Website and Marketing Audit",
  description:
    "A senior read on whether your website and marketing are actually doing commercial work, and what to change if they aren't. Fixed scope, starting at $1,500.",
  alternates: { canonical: "https://blorentz.com/website-marketing-audit" },
};

const lenses = [
  {
    icon: "target",
    label: "Marketability",
    title: "Does your website and marketing easily sell to customers?",
    body: "I walk through your website or app the way a real customer would. I’ll take a look at where visitors are landing, where there might be confusion, and what’s causing prospective customers to bounce. I’ll find anywhere the funnel is leaking and tell you what needs to change.",
  },
  {
    icon: "stack-2",
    label: "Scalability",
    title: "Will this website, app, or marketing strategy hold up over time?",
    body: "Whether you built this yourself, with an agency, or with an AI tool, I’ll be looking at the whole foundation you’re working with. Then, I’ll report back what’s working and what’s working against you in layman’s terms. For AI-built apps specifically, there are patterns I’ll be looking out for so it doesn’t compromise your business later on.",
  },
  {
    icon: "message-circle",
    label: "Tone & Voice",
    title: "Does your website and marketing actually sound like you?",
    body: "Generic copy is everywhere right now, especially in AI-built sites. The landing page looks polished but says nothing, the error messages sound like a robot talking to you, and the empty states feel like abandonment. I’ll find where your voice breaks down and tell you how to put it back together.",
  },
];

const auditQuestions = [
  "Is it obvious what you want me to do next?",
  "Can I tell what I’m actually buying here?",
  "Where’s this funnel quietly leaking customers?",
  "What breaks the first time real traffic shows up?",
  "What gets expensive to change six months from now?",
  "Does this sound like you, or like every other AI-built site?",
  "Is the copy saying something, or just filling space?",
];

const whatYouGet = [
  {
    icon: "video",
    title: "A focused live session",
    body: "A recorded session, up to 60 minutes, where I'll walk through your build. You'll watch me find things in real time, and the recording is yours to keep.",
  },
  {
    icon: "file-description",
    title: "The written assessment",
    body: "A clear, prioritized report typically delivered within 5–7 days of the session, depending on my bandwidth. Executive summary up top with the top things to fix this week and the top things to stop doing, followed by detailed sections for each part of the audit.",
  },
  {
    icon: "message-circle",
    title: "The walkthrough call",
    body: "A 30-minute video call after the report lands. We’ll go through the findings together, and I’ll answer any questions you have. The call runs longer if there’s more to cover. We’ll also talk through whether implementation makes sense for me to handle or whether you've got it from here.",
  },
  {
    icon: "layout-dashboard",
    title: "Your client portal",
    body: "A dedicated portal at blorentz.com/audits/your-link with the recording embedded, the report readily available on the page, and a downloadable archive of everything. We keep everything hosted for 12 months.",
  },
  {
    icon: "mail",
    title: "Email follow-up",
    body: "After the walkthrough, we keep email open for clarifying questions on the audit. If the conversation evolves into ongoing advisory, we'll talk about whether Office Hours is the right fit for you.",
  },
  {
    icon: "arrow-right",
    title: "The option to keep going",
    body: "If the audit surfaces work you want me to actually do, like a redesign, a brand new build, or ongoing optimization of your materials, that’s a separate conversation we can have on the walkthrough call or after. The audit fee credits 100% toward future custom work within 90 days, so you're never paying twice for the same diagnostic work.",
  },
];

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
    name: "Audit",
    price: "$1,500",
    pitch:
      "Purely a diagnostic view into your business. I’ll look at what you've built, tell you what you got right, what you got wrong, and give you a focused list of next steps. This is best for builders who want senior eyes on what they've built and plan to handle implementation on their own.",
    includesLabel: "Includes:",
    includes: [
      "Focused recorded session (up to 60 min)",
      "Written assessment (typically delivered 5–7 days after session)",
      "30-minute walkthrough call",
      "12-month client portal hosting",
      "Downloadable archive of report + recording",
      "Email follow-up for clarifying questions",
    ],
  },
  {
    name: "Roadmap",
    price: "$3,000",
    pitch:
      "Everything in the audit, plus a detailed roadmap of specific apps, services, and tools to use for the improvements. This is the tier for clients who want to know not just what to fix but how, including which platform to use, which integration to include, and which workflows should be run. You walk away with a clear “use this, not that” implementation plan.",
    includesLabel: "Includes everything in Audit, plus:",
    includes: [
      "Prioritized roadmap with specific tool, service, and platform recommendations",
      "“Use this, not that” guidance on apps and integrations",
      "Risk-ranked sequence that establishes what to tackle first, second, third, and afterwards",
    ],
  },
  {
    name: "The Works",
    price: "Starting at $10,000",
    pitch:
      "The full meal deal. You get the audit, roadmap, and full implementation done by me. Best for clients who want the audit findings turned into a finished result without going back into the market to find someone to execute. Scope and pricing depend on what the audit surfaces, and we’ll lock both in writing before any project work begins.",
    includesLabel: "Includes everything in Roadmap, plus:",
    includes: [
      "Custom-scoped implementation of audit recommendations",
      "All design, development, and integration work",
      "Direct project management by me, with no handoffs or account managers involved",
    ],
    note: "If you've already booked an Audit or Roadmap with me, that fee credits 100% towards this tier (within 90 days of audit delivery).",
  },
];

const iyengarStats = [
  { stat: "26%", label: "User growth" },
  { stat: "29%", label: "Search traffic increase" },
  { stat: "40+", label: "Reviews (up from 10)" },
  { stat: "4.8%", label: "Engagement rate" },
];

const faqs = [
  {
    q: "Is this a security audit?",
    a: "No, and I want to be explicit about that. I'm not a security professional. The audit looks at conversion, scalability, and brand integrity. I'll flag security patterns that look concerning and point you toward specialists who do that work, but I won't certify your build is secure, and you shouldn't treat the audit as a substitute for a real security review. If your product handles sensitive data, payments, or personal information, engage a qualified security professional in addition to this audit.",
  },
  {
    q: "Do you only audit AI-built sites?",
    a: "No. The audit applies to websites and apps built any way: custom development, agency work, AI tools like Lovable or Bolt, or some combination. AI-built work gets called out specifically because those builds have predictable patterns I can identify quickly, but the audit is fundamentally about whether your website and marketing are doing commercial work. That applies to anyone with a site they care about.",
  },
  {
    q: "Do I need to be technical to get value from this?",
    a: "Not at all. Most of my audit clients run a business, not a codebase. I take what I find and turn it into plain language: what's broken, what to fix first, and why it matters to your revenue. If you're technical, the depth is there too, but it's written for the person making the call.",
  },
  {
    q: "Does it matter how my site was built?",
    a: "No. I audit sites built every way: by an agency, a freelancer, a template like Squarespace or WordPress, or AI tools like Lovable and Bolt. What I'm looking at is whether your site and marketing are winning you business, not the tech under the hood. If your setup is unusual, I'll tell you before you pay.",
  },
  {
    q: "What if my site is large or complicated?",
    a: "The standard audit covers a focused site or app. If yours is especially big or complex, we might need to expand the scope. We'd sort that out on the consultation call and price it upfront, so there are no surprises.",
  },
  {
    q: "Will you implement the changes for me?",
    a: "The Audit and Roadmap tiers are diagnosis, not treatment. If you want me to execute on the fixes, The Works tier covers that, scoped to what we find and priced based on the actual work involved. The audit fee credits 100% toward The Works within 90 days, so you don't pay twice for the same diagnostic work. The walkthrough call after the report is where those conversations happen naturally.",
  },
  {
    q: "How fast do I get the audit?",
    a: "The written assessment is typically delivered 5–7 days after our session, depending on bandwidth. The session itself is usually scheduled within one to two weeks of payment, depending on calendar availability.",
  },
  {
    q: "Can I share the audit with my team or investors?",
    a: "Yes. The audit is your asset. The recording, the report, the portal: all yours, all permanent (the portal stays live for 12 months, and you can download the full archive anytime). Only ask: the recording is for internal use only and shouldn't be republished publicly without my consent.",
  },
  {
    q: "Will you sign an NDA?",
    a: "Yes, mutual NDA available on request before the consultation call. Standard practice.",
  },
  {
    q: "What if I'm not happy with the audit?",
    a: "There's no money-back guarantee, and I'm being direct about that. The quality of the work speaks for itself, and refund policies tend to attract clients who aren't a good fit. That said, if I take your money and don't deliver on what I committed to, we'll figure it out. I'd rather we both walk away from a bad fit than get into that situation.",
  },
  {
    q: "Can I work with you ongoing after the audit?",
    a: "Yes, but it's not assumed. The audit ends with paths: do it yourself with the roadmap, bring me on for The Works to execute the fixes, or move into Office Hours for ongoing monthly advisory. You pick. The walkthrough call is where we talk through which path makes sense.",
  },
];

export default function WebsiteMarketingAuditPage() {
  return (
    <div className={styles.page}>
      {/* Hero — full-bleed dark module */}
      <Reveal>
        <header className={`${styles.heroBand} on-dark`}>
          <Aurora className={styles.heroAurora} />
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.heroScan} aria-hidden="true" />
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Your website works, let&apos;s figure out why it isn&apos;t selling.
              </h1>
              <p className={styles.heroSubhead}>
                I audit websites, marketing, and AI-built apps for founders and small
                business owners who need a senior read on whether what they&apos;ve
                built is actually doing its job. I tell you what&apos;s working,
                what&apos;s holding you back, and what to do next. If you&apos;ve built
                something with Lovable, Bolt, or another AI tool, we&apos;ll dig into
                the weeds of what the tools did right, wrong, and course correct as
                needed.
              </p>
              <a href="#consultation" className={styles.heroCta}>
                Request a Consultation
              </a>
              <p className={styles.heroNote}>
                $1,500–$10,000+ depending on scope. Limited availability each month.
              </p>
            </div>
          </div>
        </header>
      </Reveal>

      <div className={styles.content}>
        {/* What the Audit Covers */}
      <Reveal>
        <section id="what-the-audit-covers">
          <Section heading="A few things I'll look at in your audit.">
            <div className={styles.lensGrid}>
              {lenses.map((lens) => (
                <div key={lens.title} className={styles.lensCard}>
                  <span className={styles.lensIcon}>
                    <Icon name={lens.icon} size="24" />
                  </span>
                  <span className={styles.lensLabel}>{lens.label}</span>
                  <h3 className={styles.lensTitle}>{lens.title}</h3>
                  <p className={styles.lensBody}>{lens.body}</p>
                </div>
              ))}
            </div>

            <QuestionRotator
              label="As I work through your build, I’m asking myself:"
              questions={auditQuestions}
            />

            <p className={styles.securityFootnote}>
              <span className={styles.securityFootnoteIcon}>
                <Icon name="shield" size="16" />
              </span>
              <span>
                <strong className={styles.securityFootnoteLead}>
                  Plus, security risk flags I might find along the way.
                </strong>{" "}
                I&apos;m not a security professional, and this isn&apos;t a security
                audit. But while I&apos;m in your build, I&apos;ll flag patterns that
                look concerning... missing access controls, unverified webhooks, auth
                shortcuts, and so on. Then I&apos;ll point you toward a specialist who
                can do a real review. If your product handles sensitive data, payments,
                or personal information, you should bring in a qualified security
                professional in addition to this audit.
              </span>
            </p>
          </Section>
        </section>
      </Reveal>

      {/* The Iyengar Story — proof */}
      <Reveal>
        <section id="iyengar-story">
          <Section>
            <div className={styles.storyModule}>
              <Image
                src="https://cdn.empac.co/main/assets/images/work-samples/dr-iyengar/iyengar-plastic-surgery-main.jpg"
                alt="Iyengar Plastic Surgery website"
                fill
                className={styles.storyModuleBg}
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className={styles.storyModuleContent}>
                <h2 className={styles.storyModuleHeading}>
                  What this looks like in practice.
                </h2>
                <p className={styles.storyText}>
                  Iyengar Plastic Surgery came to me wanting to refresh their existing
                  website. They had specific aspirational goals for SEO and patient
                  acquisition, and they wanted to keep their existing stack if
                  possible.
                </p>
                <p className={styles.storyText}>
                  The conversations surfaced what the original stack couldn&apos;t
                  support: the SEO foundation was non-existent, the patient-facing
                  experience they needed was sub-par, and the brand presence just
                  wasn&apos;t there for a doctor with impressive credentials. An
                  incremental redesign wasn&apos;t going to get them there, and the
                  audit revealed that the right move was to build a new website from
                  the ground up.
                </p>
              </div>
            </div>

            <div className={styles.statBand}>
              <StatCards stats={iyengarStats} />
            </div>

            <div className={styles.beforeAfter}>
              <figure className={styles.baFigure}>
                <span className={styles.baLabel}>Before</span>
                <div className={styles.baImageWrap}>
                  <Image
                    src="https://cdn.empac.co/main/assets/images/work-samples/dr-iyengar/iyengar-homepage-before.jpg"
                    alt="Iyengar Plastic Surgery homepage before the rebuild"
                    fill
                    className={styles.baImage}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </figure>
              <figure className={styles.baFigure}>
                <span className={`${styles.baLabel} ${styles.baLabelAfter}`}>
                  After
                </span>
                <div className={styles.baImageWrap}>
                  <Image
                    src="https://cdn.empac.co/main/assets/images/work-samples/dr-iyengar/iyengar-homepage-after.jpg"
                    alt="Iyengar Plastic Surgery homepage after the rebuild"
                    fill
                    className={styles.baImage}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </figure>
            </div>

            <Link href="/work/iyengar-plastic-surgery" className={styles.storyLink}>
              Read the full Iyengar case study &rarr;
            </Link>
          </Section>
        </section>
      </Reveal>

      {/* What You Get */}
      <Reveal>
        <section id="what-you-get">
          <Section heading="Here's what you can expect after your audit.">
            <Carousel
              slidesToShow={{ mobile: 1, tablet: 2, desktop: 3 }}
              gap={24}
              showArrows
              showDots
              arrowPosition="bottom"
              className={styles.getCarousel}
            >
              {whatYouGet.map((item) => (
                <CarouselItem key={item.title}>
                  <div className={styles.getCard}>
                    <span className={styles.getIcon}>
                      <Icon name={item.icon} size="24" />
                    </span>
                    <h3 className={styles.getTitle}>{item.title}</h3>
                    <p className={styles.getBody}>{item.body}</p>
                  </div>
                </CarouselItem>
              ))}
            </Carousel>
          </Section>
        </section>
      </Reveal>

      {/* Testimonials */}
      <Reveal>
        <section id="testimonials">
          <Section heading="Here's what my clients have to say.">
            <p className={styles.testimonialNote}>
              You&apos;ll see &ldquo;Empac&rdquo; mentioned in a few of these.
              That&apos;s the freelance business I ran this client work under. The work
              itself, start to finish, was between myself and the client.
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

      {/* Pricing — dark band, full-width child of .page so it aligns with .content */}
      <Reveal>
        <section id="pricing" className={`${styles.pricingBand} on-dark`}>
          <div className={styles.pricingGlow} aria-hidden="true" />
          <div className={styles.pricingInner}>
            <h2 className={styles.pricingHeading}>
              Three ways we can work together.
            </h2>
            <p className={styles.sectionIntro}>
              Pick the depth that fits where you are. Any Audit or Roadmap fee credits
              100% toward a custom project (The Works) within 90 days, so you&apos;re
              never paying twice for the same work.
            </p>
            <div className={styles.pricingGrid}>
              {tiers.map((tier) => (
                <div key={tier.name} className={styles.pricingCard}>
                  <div className={styles.pricingHeader}>
                    <h3 className={styles.pricingName}>{tier.name}</h3>
                    <span className={styles.pricingPrice}>{tier.price}</span>
                  </div>
                  <p className={styles.pricingPitch}>{tier.pitch}</p>
                  <p className={styles.pricingIncludesLabel}>{tier.includesLabel}</p>
                  <ul className={styles.pricingList}>
                    {tier.includes.map((item) => (
                      <li key={item} className={styles.pricingItem}>
                        <span className={styles.pricingCheck}>
                          <Icon name="circle-check" size="18" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {tier.note && <p className={styles.pricingNote}>{tier.note}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <div className={styles.content}>
      {/* Request a Consultation */}
      <Reveal>
        <section id="consultation" className={styles.contactSection}>
          <h2 className={styles.contactHeading}>But first, let&apos;s get a call on the books.</h2>
          <p className={styles.sectionIntro}>
            Before we start an audit, we&apos;ll have a short consultation to make sure
            it&apos;s the right fit. There&apos;s no charge for the conversation... I want
            to learn what you&apos;ve built, and we&apos;ll decide if I&apos;m the right
            person to look at it.
          </p>
          <ConsultationForm />
          <p className={styles.contactFallback}>
            Prefer email? Reach me at{" "}
            <a href="mailto:Britton@empac.co" className={styles.emailLink}>
              Britton@empac.co
            </a>
          </p>
        </section>
      </Reveal>

      {/* FAQ */}
      <Reveal>
        <section id="faq">
          <Section heading="FAQ">
            <Accordion
              variant="flush"
              items={faqs.map((faq, i) => ({
                id: `faq-${i}`,
                title: faq.q,
                content: faq.a,
              }))}
            />
          </Section>
        </section>
      </Reveal>

      {/* Footer Disclaimer */}
      <Reveal>
        <div className={styles.disclaimer}>
          <p className={styles.disclaimerText}>
            This audit is a conversion, scalability, and brand assessment. It is not a
            security audit, code certification, compliance review, or penetration test.
            Security risk flags identified in the audit are observations, not findings,
            and do not constitute a security audit. Britton Lorentzen and Empac are not
            security professionals and make no representations about the security
            posture of any audited product. Clients are responsible for engaging
            qualified security professionals for formal security assessments. See{" "}
            <Link href="/legal/terms" className={styles.disclaimerLink}>
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link href="/legal/privacy" className={styles.disclaimerLink}>
              Privacy Policy
            </Link>{" "}
            for full details.
          </p>
        </div>
      </Reveal>
      </div>
    </div>
  );
}
