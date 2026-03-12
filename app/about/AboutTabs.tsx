"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
// @ts-expect-error CDS Tabs type declaration references a CSS file not present in dist/types
import { Tabs } from "@empac/cascadeds";
import { Section } from "@/components/Section/Section";
import { Timeline } from "@/components/Timeline/Timeline";
import { ValueCard } from "@/components/ValueCard/ValueCard";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./page.module.css";

const timeline = [
  {
    company: "T\u2011Mobile",
    role: "Sr. Creative Development Manager",
    period: "2017 – Present",
    description:
      "I started as a design intern. Served four different roles in eight years... I essentially went from designing device launch pages to leading creative development for high-priority experiences including the savings calculator, Super Bowl landing pages, FN5GL, and the T\u2011Mobile.com redesign.",
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

const TAB_IDS = ["story", "career", "offclock"] as const;

function getTabFromHash(hash: string): string {
  const id = hash.replace("#", "");
  return TAB_IDS.includes(id as (typeof TAB_IDS)[number]) ? id : "story";
}

/* ───── Tab Content Components ───── */

function FullStoryTab() {
  return (
    <>
      <div className={styles.contentSection}>
        <div className={styles.narrative}>
          <Reveal>
            <p className={styles.body}>
              At T&#x2011;Mobile, I lead creative development for some of the
              most visible pages on T&#x2011;Mobile.com. Through Empac, I build
              custom websites and tools for businesses that have outgrown what
              off-the-shelf tools can do for them.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.body}>
              Before any of that, I was a racing kid who taught himself how to
              design and code so I could create my own website and brand for the
              racing team.
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
              Racing didn&apos;t become a career, but it shaped how I work: You
              learn to commit before you can see where it goes, and you learn
              that preparation beats talent almost every time.
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
              solutions and guides established businesses with their marketing
              needs.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.body}>
              To fund it, I worked at the Apple Store in Tacoma. I kept
              submitting work samples to Apple&apos;s corporate teams until one
              of them invited me to Cupertino for a project. I spent five months
              designing internal tools, building product guides, and supporting
              the UX team on usability research. When that wrapped up,
              T&#x2011;Mobile brought me in.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.body}>
              I started at T&#x2011;Mobile as a design intern. Four roles and
              eight years later, I lead creative development for the savings
              calculator, Super Bowl landing pages, Friday Night 5G Lights,
              campaign deal hubs, and the T&#x2011;Mobile.com redesign. All the
              work at T&#x2011;Mobile ships to tens of millions of people, and
              moves incredibly fast.
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
              I started as a computer science major at UW. Two years in, I went
              to Apple in California... and all the program managers I worked
              with mentioned that having a business degree with a CS background
              would be more valuable than being a pure CS major. So when I came
              back to Seattle, I switched to business and marketing. Business
              strategy and technical execution is the thread that ties everything
              I do together.
            </p>
          </Reveal>
        </div>
      </div>

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
          <p className={styles.body}>
            I live in the Pacific Northwest with my wife Kelly and our daughter
            Eloise. She was born in November 2024, and everything about how I
            prioritize my time changed after that. We&apos;re already planning
            a trip for when Eloise is old enough to experience Bibbidi Bobbidi
            Boutique at Disney.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <section className={styles.cta}>
          <h2 className={styles.ctaHeading}>Want to see the work?</h2>
          <p className={styles.body}>
            I&apos;ve worked on quite a few high profile projects over the
            years. On the side, I also take on a limited number of engagements
            through Empac. Whether you&apos;re here for the corporate work or
            for a look into Empac, there&apos;s sure to be something here for
            you.
          </p>
          <div className={styles.ctaLinks}>
            <Link href="/work" className={styles.ctaLinkPrimary}>
              See my work
            </Link>
            <a
              href="https://empac.co"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaLinkSecondary}
            >
              Learn about Empac
            </a>
          </div>
        </section>
      </Reveal>
    </>
  );
}

function CareerTab() {
  return (
    <Reveal>
      <Timeline entries={timeline} />
    </Reveal>
  );
}

function OffTheClockTab() {
  return (
    <div className={styles.contentSection}>
      <p className={styles.offClockIntro}>
        The work is the work... but that wouldn&apos;t be fun if this website
        was all work and no play. Here&apos;s a little more about who I am
        when I&apos;m not at work.
      </p>

      {/* Racing */}
      <div className={styles.offClockSection}>
        <h3 className={styles.offClockHeading}>Racing</h3>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cdn.empac.co/portfolio/images/old-photo-of-britton-racing.jpg"
          alt="Britton racing"
          className={styles.offClockImage}
          loading="lazy"
        />
        <p className={styles.body}>
          I started karting when I was 12, and won the karting grand nationals
          by the time I was 15. I was also one of the youngest drivers invited
          to the Red Bull Driver Search. Before the 2008/2009 crash happened, I
          was racing 360 sprint cars on the asphalt and a stock car at South
          Sound Speedway.
        </p>
        <p className={styles.body}>
          Racing is essentially what started me down the design and front-end
          development path... it motivated me to start Emerald Pacific
          Outfitters, it taught me to stay calm in the midst of chaos, and it
          also showed me the importance of commitment in the face of failure.
        </p>
        <div className={styles.racingVideos}>
        <div className={styles.videoEmbedFull}>
          <iframe
            title="360 Sprint Car — Back to Front"
            src="https://www.youtube.com/embed/-pcsVj0w-dw"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <div className={styles.embedGrid}>
          <div className={styles.embedWrapper}>
            <div className={styles.videoEmbed}>
              <iframe
                title="Grand National Championship — Karts"
                src="https://www.youtube.com/embed/gNB4Y1Z9wD0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
          <div className={styles.embedWrapper}>
            <div className={styles.videoEmbed}>
              <iframe
                title="600 Mini-Sprint Heat Race Win"
                src="https://www.youtube.com/embed/gWl6MFP_4dU"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* DJing & Music */}
      <div className={styles.offClockSection}>
        <h3 className={styles.offClockHeading}>DJing &amp; Music</h3>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cdn.empac.co/portfolio/images/britton-on-dj-decks.jpg"
          alt="Britton on the DJ decks"
          className={styles.offClockImage}
          loading="lazy"
        />
        <p className={styles.body}>
          I DJ and produce music from time to time. It started as a way to
          decompress from work and turned into something people enjoyed
          listening to. I&apos;ve had everything from 5-10 viewers to almost
          200 viewers in a Twitch stream jamming out with me.
        </p>
        <p className={styles.body}>
          It&apos;s also taught me lessons about reading a room, making
          decisions on the fly, and keeping the energy moving without anyone
          noticing the transitions. It&apos;s kind of like my current
          job... but it doesn&apos;t have the cool ghost lights in the
          background.
        </p>
        <div className={styles.embedGrid}>
          <div className={styles.embedWrapper}>
            <iframe
              title="Orion — blorentz on hearthis.at"
              src="https://hearthis.at/blorentz/01-orion/embed/?hcolor=0e75c1&color=ffffff&style=2&block_size=2&block_space=1&background=1&waveform=0&cover=0&autoplay=0&css="
              width="100%"
              height="150"
              allow="autoplay"
              loading="lazy"
              className={styles.embed}
            />
            <p className={styles.embedCaption}>
              &ldquo;Orion&rdquo; &mdash; Hit #3 on the hearthis.at weekly
              charts
            </p>
          </div>
          <div className={styles.embedWrapper}>
            <iframe
              title="Perspective — blorentz on hearthis.at"
              src="https://hearthis.at/blorentz/perspective/embed/?hcolor=0e75c1&color=ffffff&style=2&block_size=2&block_space=1&background=1&waveform=0&cover=0&autoplay=0&css="
              width="100%"
              height="150"
              allow="autoplay"
              loading="lazy"
              className={styles.embed}
            />
            <p className={styles.embedCaption}>&ldquo;Perspective&rdquo;</p>
          </div>
        </div>
      </div>

      {/* Gaming */}
      <div className={styles.offClockSection}>
        <h3 className={styles.offClockHeading}>Gaming</h3>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cdn.empac.co/portfolio/images/britton-on-leaderboard-at-hyperx-arena.jpg"
          alt="Britton on the finalist leaderboard at HyperX Arena"
          className={styles.offClockImage}
          loading="lazy"
        />
        <p className={styles.body}>
          I&apos;ve been gaming competitively for years... more notably in
          Mario Kart. I competed at Allied Esports at the HyperX Arena and
          made the finals in my first go. It&apos;s not as fun as driving real
          race cars, but it&apos;s certainly something my wife appreciates
          more (and doesn&apos;t have to worry about the insanity that happens
          at a real track.)
        </p>
        <div className={styles.embedGrid}>
          <div className={styles.embedWrapper}>
            <div className={styles.videoEmbed}>
              <iframe
                title="Tournament Footage"
                src="https://www.youtube.com/embed/lJpgizkJl6o"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
          <div className={styles.embedWrapper}>
            <div className={styles.videoEmbed}>
              <iframe
                title="Gameshuffle — Mario Kart Randomizer"
                src="https://www.youtube.com/embed/FUPegC7pvSU"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p className={styles.embedCaption}>
              I built Gameshuffle, a Mario Kart randomizer, because no tool
              existed for what my friends and I needed.
            </p>
          </div>
        </div>
      </div>

      {/* On Creativity */}
      <div className={styles.offClockSection}>
        <h3 className={styles.offClockHeading}>On Creativity</h3>
        <div className={styles.videoEmbedFull}>
          <iframe
            title="Goodbye World Playthrough"
            src="https://www.youtube.com/embed/REuzRiD0ukU"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <p className={styles.body}>
          Goodbye World is a game about two indie developers trying to make
          something meaningful. I played it off-stream and ended up talking
          through a lot of what I think about when it comes to creative work,
          independence, and building things that matter. If you want to know how
          I think about the work beyond the portfolio, this is probably the most
          honest version of that.
        </p>
      </div>

    </div>
  );
}

/* ───── Main Tabs Component ───── */

export function AboutTabs() {
  const [activeTab, setActiveTab] = useState("story");

  useEffect(() => {
    setActiveTab(getTabFromHash(window.location.hash));

    function onHashChange() {
      setActiveTab(getTabFromHash(window.location.hash));
    }

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  function handleChange(tabId: string) {
    setActiveTab(tabId);
    window.history.replaceState(null, "", `#${tabId}`);
  }

  const tabs = [
    { id: "story", label: "The Full Story", content: <FullStoryTab /> },
    { id: "career", label: "Career", content: <CareerTab /> },
    { id: "offclock", label: "Off the Clock", content: <OffTheClockTab /> },
  ];

  return (
    <Tabs
      tabs={tabs}
      activeTab={activeTab}
      onChange={handleChange}
      variant="pills"
      size="large"
    />
  );
}
