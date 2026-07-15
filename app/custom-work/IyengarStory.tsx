import Image from "next/image";
import Link from "next/link";
import { StatCards } from "@/components/StatCards/StatCards";
import styles from "./page.module.css";

const iyengarStats = [
  { stat: "26%", label: "User growth" },
  { stat: "29%", label: "Search traffic increase" },
  { stat: "40+", label: "Reviews (up from 10)" },
  { stat: "4.8%", label: "Engagement rate" },
];

export function IyengarStory() {
  return (
    <div className={styles.story}>
      <div className={styles.storyModule}>
        <Image
          src="https://cdn.empac.co/main/assets/images/work-samples/dr-iyengar/iyengar-plastic-surgery-main.jpg"
          alt="Iyengar Plastic Surgery website"
          fill
          className={styles.storyModuleBg}
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
        <div className={styles.storyModuleContent}>
          <h4 className={styles.storyModuleHeading}>
            A ground-up rebuild that put Iyengar&apos;s practice on the map.
          </h4>
          <p className={styles.storyText}>
            Iyengar Plastic Surgery came to me with real goals for SEO and
            patient acquisition, but the foundation to support them just
            wasn&apos;t there yet.
          </p>
          <p className={styles.storyText}>
            We rebuilt around search and growth from the ground up, and the
            results followed: more traffic, more reviews, and a brand presence
            that finally matched the caliber of the practice.
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
    </div>
  );
}
