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
    "Britton Lorentzen: Builder, strategist, racing kid turned Fortune 500 leader. Sr. Creative Development Manager at T‑Mobile. Founder of Empac.",
};

const timeline = [
  {
    company: "T‑Mobile",
    role: "Sr. Creative Development Manager",
    period: "2017 – Present",
    description:
      "I started as a design intern. Served four different roles in eight years... I essentially went from designing device launch pages to leading creative development for high-priority experiences including the savings calculator, Super Bowl landing pages, FN5GL, and the T‑Mobile.com redesign.",
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
      "Tacoma retail. Helped everyone from students buying their first laptop to businesses outfitting entire teams.",
  },
  {
    company: "L2R Snowboards",
    role: "Visual Designer & Marketing Coordinator",
    period: "2011 – 2015",
    description:
      "Built the digital presence for a Pacific Northwest snowboard company. Coordinated co-branding campaigns, managed distributor relationships, and helped earn the brand a spot at the SIA trade show.",
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
      "The right answer isn't always custom code... sometimes it's configuring what you have. Sometimes it's migrating to a better platform. The value is knowing which one before anyone writes a line of code.",
  },
  {
    title: "Own the outcome",
    description:
      "I care about whether the thing works, not just whether the code is clean. Performance, accessibility, conversions, and business results are top of mind for me.",
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
            I build things that solve problems, from T‑Mobile&apos;s
            customer-facing tools to custom applications for businesses
            through Empac.
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
                At T‑Mobile, I lead creative development for some of the
                most visible pages on T‑Mobile.com. Through Empac, I build
                custom websites and tools for businesses that have outgrown
                what off-the-shelf tools can do for them.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.body}>
                Before any of that, I was a racing kid who taught himself how to
                design and code so I could create my own website and brand for
                the racing team.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.body}>
                I started racing go-karts at 12. When I was 15, I won the karting
                grand nationals and was one of the youngest drivers to be invited
                to the Red Bull Driver Search. By 17, I was behind the wheel of a
                360 sprint car... a 700-horsepower open-wheel machine with no
                traction control, no power steering, and no room for error.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.body}>
                Racing didn&apos;t become a career, but it shaped how I work:
                You learn to commit before you can see where it goes, and you
                learn that preparation beats talent almost every time.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.body}>
                When I wasn&apos;t racing, I started building things. At 18, I
                started Emerald Pacific Outfitters: a scrappy brand that made
                apparel and short videos to help action sports athletes in the
                Pacific Northwest get noticed by sponsors. Some of those videos
                even helped out a local BMX team, Ride and Glide, earn a feature
                on King 5 with Paul Silvi. Once I was done with action sports,
                Emerald Pacific became Empac: a consultancy that builds custom
                solutions and guided small businesses with their marketing needs.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.body}>
                To fund it, I worked at the Apple Store in Tacoma. I kept submitting
                work samples to Apple&apos;s corporate teams until one of them
                invited me to Cupertino for a project. I spent five months designing
                internal tools, building product guides, and supporting the UX team
                on usability research. When that wrapped up, T‑Mobile brought me in.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.body}>
                I started at T‑Mobile as a design intern. Four roles and eight
                years later, I lead creative development for the savings
                calculator, Super Bowl landing pages, Friday Night 5G Lights,
                campaign deal hubs, and the T‑Mobile.com redesign. All the work
                at T‑Mobile ships to tens of millions of people, and moves
                incredibly fast.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.body}>
                Meanwhile, Empac has been running the whole time in the background.
                What started as a one-person action sports brand has evolved into a
                consultancy that helps established businesses figure out the right
                technology approach for their business. Sometimes that means
                configuring what they already have, sometimes it means finding them
                the right platform. Or, we might need to build something custom
                from scratch. The main challenge is identifying which direction to
                go and what will be the right call for my clients.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.body}>
                I started as a computer science major at UW. Two years in, I
                went to Apple in California... and all the program managers I
                worked with mentioned that having a business degree with a CS
                background would be more valuable than being a pure CS major.
                So when I came back to Seattle, I switched to business and
                marketing. Business strategy and technical execution is the
                the thread that ties everything I do together.
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
              Eloise. She was born in November 2024, and everything about how I
              prioritize my time changed after that.
            </p>
            <p className={styles.body}>
              I still follow motorsports, and also keep tabs on the folks
              I&apos;ve personally raced with. I DJ and produce music as a way
              to decompress from a hard day of work, and I love to travel with
              the family when we have a moment to get away (we&apos;re already
              planning a trip once my little girl is old enough to experience
              Bippity Boppity Boutique at Disney!)
            </p>
          </Section>
        </div>
      </Reveal>

      <Reveal>
        <section className={styles.cta}>
        <h2 className={styles.ctaHeading}>Want to see the work?</h2>
        <p className={styles.body}>
          I take on a limited number of engagements at a time through Empac. If
          you&apos;re curious about what that looks like, start with the work
          or head to Empac to learn more.
        </p>
        <div className={styles.ctaLinks}>
          <Link href="/work" className={styles.ctaLinkPrimary}>
            See my work
          </Link>
          <a href="https://empac.co" target="_blank" rel="noopener noreferrer" className={styles.ctaLinkSecondary}>
            Learn about Empac
          </a>
        </div>
      </section>
      </Reveal>
    </div>
  );
}
