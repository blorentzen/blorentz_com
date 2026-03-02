import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section/Section";
import { PhotoCollage } from "@/components/PhotoCollage/PhotoCollage";
import { Timeline } from "@/components/Timeline/Timeline";
import { ValueCard } from "@/components/ValueCard/ValueCard";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./page.module.css";

const collagePhotos = [
  {
    src: "https://cdn.empac.co/portfolio/images/britton-kelly-eloise-in-hawaii.jpg",
    alt: "Britton, Kelly, and Eloise in Hawaii",
  },
  {
    src: "https://cdn.empac.co/portfolio/images/britton-kelly-at-husky-game.jpg",
    alt: "Britton and Kelly at a Husky game",
  },
  {
    src: "https://cdn.empac.co/portfolio/images/britton-djing-live-on-twitch.jpg",
    alt: "Britton DJing live on Twitch",
  },
  {
    src: "https://cdn.empac.co/portfolio/images/britton-competing-at-hyperx-arena.jpg",
    alt: "Britton competing at HyperX Arena",
  },
];

export const metadata: Metadata = {
  title: "About",
  description:
    "Britton Lorentzen — builder, strategist, racing kid turned Fortune 500 leader. Sr. Creative Development Manager at T-Mobile. Founder of Empac.",
};

const timeline = [
  {
    company: "T-Mobile",
    role: "Sr. Creative Development Manager",
    period: "2017 – Present",
    description:
      "Started as a design intern. Four roles in eight years — from designing device launch pages to leading creative development for high-priority experiences including the savings calculator, Super Bowl landing pages, FN5GL, and the T-Mobile.com redesign.",
  },
  {
    company: "Empac",
    role: "Founder & Principal Consultant",
    period: "2010 – Present",
    description:
      "Founded as Emerald Pacific Outfitters, evolved into a technology consultancy for established businesses. Built CascadeDS (a design system powering multiple applications), Sidecar (a retainer management platform), and shipped work across healthcare, energy, and SaaS.",
  },
  {
    company: "Apple",
    role: "Designer & Front-End Developer",
    period: "2016",
    description:
      "Designed and built internal tools, product guides, and communications assets at Apple's Cupertino campus. Supported the UX team on usability testing for an internal website redesign.",
  },
  {
    company: "Apple",
    role: "Specialist",
    period: "2012 – 2016",
    description:
      "Tacoma retail. Connected customers with technology solutions — from students buying their first laptop to businesses outfitting entire teams.",
  },
  {
    company: "L2R Snowboards",
    role: "Visual Designer & Marketing Coordinator",
    period: "2011 – 2015",
    description:
      "Built the digital presence for a Pacific Northwest snowboard company. Coordinated co-branding campaigns, managed distributor relationships, and helped earn the brand a spot at the SIA trade show. Traveled to Denver to sell it.",
  },
];

const values = [
  {
    title: "Ship, then polish",
    description:
      "Working software beats perfect plans. I'd rather put something real in front of users and iterate than spend months perfecting something nobody's tested.",
  },
  {
    title: "Diagnose before you build",
    description:
      "The right answer isn't always custom code. Sometimes it's configuring what you have. Sometimes it's migrating to a better platform. The value is knowing which one before anyone writes a line of code.",
  },
  {
    title: "Own the outcome",
    description:
      "I care about whether the thing works — not just whether the code is clean. Performance, accessibility, conversions, business results. The metric is impact, not effort.",
  },
  {
    title: "Stay in the work",
    description:
      "Leadership doesn't mean leaving the craft behind. I still design in Figma, build in VS Code, and review every line that ships. The best strategic decisions come from people who understand what they're deciding about.",
  },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <Reveal>
        <header className={styles.hero}>
          <p className={styles.label}>About</p>
          <h1 className={styles.title}>Builder first, leader second.</h1>
          <p className={styles.headline}>
            I build things that solve problems — from T-Mobile&apos;s
            customer-facing tools used by millions, to custom solutions for
            businesses through my consultancy, Empac.
          </p>
        </header>
      </Reveal>

      {/* Photo Collage */}
      <Reveal delay={0.15}>
        <PhotoCollage photos={collagePhotos} className={styles.photoRow} />
      </Reveal>

      {/* Story */}
      <Reveal>
        <div className={styles.contentSection}>
          <Section heading="The Full Story">
            <div className={styles.narrative}>
            <Reveal>
              <p className={styles.body}>
                I&apos;ve spent my career at the intersection of strategy and
                execution, and I like it there. At T-Mobile, I lead creative
                development for high-stakes digital experiences. Through Empac, I
                bring that same thinking to established businesses who&apos;ve
                outgrown what off-the-shelf tools can do for them.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.body}>
                Before any of that, I was a racing kid who taught himself to design
                because nobody was going to build his brand for him.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.body}>
                I started racing go-karts at 12. By 15, I was behind the wheel of a
                410 sprint car — a 900-horsepower open-wheel machine with no
                traction control, no power steering, and no room for hesitation. I
                won the karting grand nationals that year and got invited to the Red
                Bull Driver Search. I was the youngest person there.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.body}>
                Racing didn&apos;t become a career, but it shaped everything that
                came after. It taught me to commit to a line before you can see
                where it goes. It taught me that preparation matters more than
                talent. And it taught me that the gap between &ldquo;good
                enough&rdquo; and &ldquo;great&rdquo; is usually a decision someone
                was afraid to make.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.body}>
                When I wasn&apos;t racing, I was building things. At 16, I started
                Emerald Pacific Outfitters — a scrappy brand that made apparel and
                shot videos to help action sports athletes in the Pacific Northwest
                get noticed by sponsors. That eventually became Empac.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.body}>
                To fund it, I worked at the Apple Store in Tacoma. I kept submitting
                work samples to Apple&apos;s corporate teams until one of them
                invited me to Cupertino for a project. I spent five months designing
                internal tools, building product guides, and supporting the UX team
                on usability research. When that wrapped up, T-Mobile brought me in.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.body}>
                I started at T-Mobile as a design intern. Four roles and eight years
                later, I lead creative development for some of their
                highest-priority digital experiences — the savings calculator used
                by millions of customers, FN5GL, Super Bowl landing pages, campaign
                deal hubs, and the T-Mobile.com redesign. The work is fast,
                high-stakes, and built for an audience of tens of millions.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.body}>
                Empac has been running the whole time. What started as a one-person
                action sports brand has evolved into a consultancy that helps
                established businesses figure out the right technology approach for
                their business. Sometimes that means configuring what they already
                have. Sometimes it means finding them the right platform. Sometimes
                it means building something custom from scratch. The value is
                knowing which one.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.body}>
                I studied business at the University of Washington with a focus on
                marketing, then supplemented it with several years of computer
                science coursework. The combination of business strategy and
                technical execution is the thing I keep coming back to — it&apos;s
                what I do at T-Mobile, it&apos;s what I do at Empac, and it&apos;s
                what I look for in every project I take on.
              </p>
            </Reveal>
            </div>
          </Section>
        </div>
      </Reveal>

      <Reveal>
        <Section heading="Career">
          <Timeline entries={timeline} />
        </Section>
      </Reveal>

      <Reveal>
        <Section heading="How I Work">
          <div className={styles.values}>
            {values.map((value) => (
              <ValueCard
                key={value.title}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </Section>
      </Reveal>

      <Reveal>
        <div className={styles.contentSection}>
          <Section heading="When I'm not building things">
            <p className={styles.body}>
              I live in the Pacific Northwest with my wife Kelly and our daughter
              Eloise. She was born in March 2024, and she&apos;s the reason I
              think about time differently than I used to.
            </p>
            <p className={styles.body}>
              I still follow motorsports — the racing bug doesn&apos;t go away, it
              just changes shape. I&apos;m into music production and DJing when I
              find the time, and I&apos;ve traveled enough to know that the
              Pacific Northwest is where I want to be.
            </p>
          </Section>
        </div>
      </Reveal>

      <Reveal>
        <section className={styles.cta}>
        <h2 className={styles.ctaHeading}>Want to see the work?</h2>
        <p className={styles.body}>
          I take on a limited number of engagements at a time through Empac. If
          you&apos;re curious about what that looks like, start with the work —
          or head to Empac to learn more.
        </p>
        <div className={styles.ctaLinks}>
          <Link href="/work" className={styles.ctaLinkPrimary}>
            See my work
          </Link>
          <Link href="/empac" className={styles.ctaLinkSecondary}>
            Learn about Empac
          </Link>
        </div>
      </section>
      </Reveal>
    </div>
  );
}
