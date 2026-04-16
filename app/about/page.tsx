import type { Metadata } from "next";
import { PhotoCollage } from "@/components/PhotoCollage/PhotoCollage";
import { Reveal } from "@/components/Reveal/Reveal";
import { AboutTabs } from "./AboutTabs";
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

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <Reveal>
        <header className={styles.hero}>
          <p className={styles.label}>About</p>
          <h1 className={styles.title}>Builder first, leader second.</h1>
          <p className={styles.headline}>
            I lead creative development at T&#x2011;Mobile, where my work ships
            to tens of millions of people. I also run Empac, an incubator for all the website and app ideas that comes to my head.
          </p>
        </header>
      </Reveal>

      <Reveal delay={0.15}>
        <PhotoCollage photos={collagePhotos} className={styles.photoRow} />
      </Reveal>

      <div className={styles.tabsWrapper}>
        <AboutTabs />
      </div>
    </div>
  );
}
