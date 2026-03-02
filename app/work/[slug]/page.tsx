import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  getCaseStudies,
  getCaseStudy,
  getCaseStudySlugs,
} from "@/content/case-studies";
import { VideoPlayer } from "@/components/VideoPlayer/VideoPlayer";
import { StatCards } from "@/components/StatCards/StatCards";
import { Placeholder } from "@/components/Placeholder/Placeholder";
import { Section } from "@/components/Section/Section";
import { Reveal } from "@/components/Reveal/Reveal";
import { ParallaxImage } from "@/components/ParallaxImage/ParallaxImage";
import styles from "./page.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.headline,
  };
}

function renderParagraphs(text: string, className: string) {
  return text.split("\n\n").map((paragraph, i) => (
    <p key={i} className={className}>
      {paragraph}
    </p>
  ));
}

function getNextStudy(currentSlug: string) {
  const all = getCaseStudies();
  const currentIndex = all.findIndex((cs) => cs.slug === currentSlug);
  const nextIndex = (currentIndex + 1) % all.length;
  return all[nextIndex];
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const nextStudy = getNextStudy(slug);
  const hasHeroImage = study.heroImage?.startsWith("https://");

  return (
    <div className={styles.page} data-voice={study.voice}>
      {/* 1. Hero */}
      <Reveal>
        <header className={styles.hero}>
          <div className={styles.heroHeader}>
            <p className={styles.client}>{study.client}</p>
            {study.status === "in-progress" && (
              <span className={styles.statusBadge}>In Progress</span>
            )}
          </div>
          <h1 className={styles.title}>{study.title}</h1>
          <p className={styles.headline}>{study.headline}</p>
        </header>
      </Reveal>

      <Reveal delay={0.15}>
        {hasHeroImage ? (
          <ParallaxImage className={styles.heroImage}>
            <Image
              src={study.heroImage!}
              alt={`${study.title} hero`}
              width={1200}
              height={675}
              className={styles.heroImg}
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
          </ParallaxImage>
        ) : (
          <div className={styles.heroImage}>
            <Placeholder aspectRatio="16 / 9" label={`${study.title} hero`} />
          </div>
        )}
      </Reveal>

      {/* Stats */}
      {study.stats && study.stats.length > 0 && (
        <Reveal>
          <div className={styles.statsSection}>
            <StatCards stats={study.stats} />
          </div>
        </Reveal>
      )}

      {/* 2. The Problem */}
      <Reveal className={styles.narrativeSection}>
        <Section heading="The Problem">
          <div className={styles.narrative}>
            {renderParagraphs(study.problem, styles.body)}
          </div>
        </Section>
      </Reveal>

      {/* 3. The Approach */}
      <Reveal className={styles.narrativeSection}>
        <Section heading="The Approach">
          <div className={styles.narrative}>
            {renderParagraphs(study.approach, styles.body)}
          </div>
        </Section>
      </Reveal>

      {/* 4. The Result */}
      <Reveal className={styles.narrativeSection}>
        <Section heading="The Result">
          <div className={styles.narrative}>
            {renderParagraphs(study.result, styles.body)}
            {study.testimonial && (
              <blockquote className={styles.testimonial}>
                <p className={styles.testimonialQuote}>
                  &ldquo;{study.testimonial.quote}&rdquo;
                </p>
                <footer className={styles.testimonialAttribution}>
                  <span className={styles.testimonialAuthor}>
                    {study.testimonial.author}
                  </span>
                  <span className={styles.testimonialRole}>
                    {study.testimonial.role}
                  </span>
                </footer>
              </blockquote>
            )}
          </div>
        </Section>
      </Reveal>

      {/* 5. Video Demo */}
      {study.videoUrl && (
        <Reveal>
          <Section heading="Video Demo" font="technical">
            <div className={styles.videoContainer}>
              <VideoPlayer
                src={study.videoUrl}
                title={`${study.title} demo`}
                poster={hasHeroImage ? study.heroImage : undefined}
                aspect="16/9"
              />
            </div>
          </Section>
        </Reveal>
      )}

      {/* 6. The Details */}
      <Reveal>
        <Section heading="The Details" font="technical">
          <div className={styles.detailsGrid}>
            {study.techStack && study.techStack.length > 0 && (
              <div className={styles.detailsBlock}>
                <h3 className={styles.detailsLabel}>Tech Stack</h3>
                <div className={styles.techStack}>
                  {study.techStack.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.metadataGrid}>
              {study.timeline && (
                <div className={styles.metadataItem}>
                  <span className={styles.metadataLabel}>Timeline</span>
                  <span className={styles.metadataValue}>
                    {study.timeline}
                  </span>
                </div>
              )}
              <div className={styles.metadataItem}>
                <span className={styles.metadataLabel}>Role</span>
                <span className={styles.metadataValue}>{study.role}</span>
              </div>
              {study.teamSize && (
                <div className={styles.metadataItem}>
                  <span className={styles.metadataLabel}>Team</span>
                  <span className={styles.metadataValue}>
                    {study.teamSize}
                  </span>
                </div>
              )}
            </div>

            {study.challenges && study.challenges.length > 0 && (
              <div className={styles.detailsBlock}>
                <h3 className={styles.detailsLabel}>Key Challenges</h3>
                <ul className={styles.challengesList}>
                  {study.challenges.map((challenge) => (
                    <li key={challenge} className={styles.challengeItem}>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {study.liveUrl && (
              <div className={styles.detailsBlock}>
                <h3 className={styles.detailsLabel}>Live Project</h3>
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.liveLink}
                >
                  {study.liveUrl
                    .replace(/^https?:\/\//, "")
                    .replace(/\/$/, "")}
                  <span className={styles.liveLinkArrow}>&rarr;</span>
                </a>
              </div>
            )}
          </div>
        </Section>
      </Reveal>

      {/* 7. Next Project */}
      <Reveal>
        <nav className={styles.nextProject}>
          <span className={styles.nextLabel}>Next Project</span>
          <Link href={`/work/${nextStudy.slug}`} className={styles.nextLink}>
            <span className={styles.nextClient}>{nextStudy.client}</span>
            <span className={styles.nextTitle}>{nextStudy.title}</span>
          </Link>
        </nav>
      </Reveal>
    </div>
  );
}
