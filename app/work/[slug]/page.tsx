import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  getCaseStudies,
  getCaseStudy,
  getCaseStudySlugs,
} from "@/content/case-studies";
import { CaseStudyCard } from "@/components/CaseStudyCard/CaseStudyCard";
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

  const meta: Metadata = {
    title: study.title,
    description: study.headline,
    openGraph: {
      title: `${study.title} — ${study.client}`,
      description: study.headline,
    },
  };

  if (study.heroImage?.startsWith("https://")) {
    meta.openGraph!.images = [{ url: study.heroImage, width: 1200, height: 675 }];
  }

  return meta;
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function renderParagraphs(text: string, className: string) {
  return text.split("\n\n").map((paragraph, i) => {
    if (paragraph.startsWith("### ")) {
      return (
        <h4 key={i} className={styles.contentSubhead}>
          {renderInline(paragraph.slice(4))}
        </h4>
      );
    }
    if (paragraph.startsWith("## ")) {
      return (
        <h3 key={i} className={styles.contentSubhead}>
          {renderInline(paragraph.slice(3))}
        </h3>
      );
    }
    return (
      <p key={i} className={className}>
        {renderInline(paragraph)}
      </p>
    );
  });
}

function getSuggestedStudies(currentSlug: string) {
  const all = getCaseStudies();
  const currentIndex = all.findIndex((cs) => cs.slug === currentSlug);
  const others = [...all.slice(currentIndex + 1), ...all.slice(0, currentIndex)];
  return others.slice(0, 3);
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const suggested = getSuggestedStudies(slug);
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
                poster={study.videoPoster || (hasHeroImage ? study.heroImage : undefined)}
                aspect={(study.videoAspect as "16/9" | "16/10" | "4/3" | "1/1" | "21/9") || "16/9"}
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

      {/* 7. More Work */}
      <Reveal>
        <section className={styles.moreWork}>
          <h2 className={styles.moreWorkHeading}>More Work</h2>
          <div className={styles.moreWorkGrid}>
            {suggested.map((s) => (
              <CaseStudyCard key={s.slug} study={s} />
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
