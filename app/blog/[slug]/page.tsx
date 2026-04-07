import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPost, getPostSlugs, getAdjacentPosts } from "@/lib/blog";
import { EmailSubscribe } from "@/components/EmailSubscribe/EmailSubscribe";

export const revalidate = 3600;
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./page.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      images: [{ url: post.heroImage, width: 1200, height: 675 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.heroImage],
    },
  };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const { prev, next } = getAdjacentPosts(slug);

  return (
    <div className={styles.page}>
      <Reveal>
        <div className={styles.heroImage}>
          <Image
            src={post.heroImage}
            alt={post.heroAlt}
            width={1200}
            height={675}
            className={styles.heroImg}
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
        </div>
      </Reveal>

      <Reveal>
        <header className={styles.header}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.meta}>
            <time className={styles.date}>{formatDate(post.date)}</time>
            <span className={styles.dot}>·</span>
            <span className={styles.readTime}>{post.readTime}</span>
          </div>
        </header>
      </Reveal>

      <Reveal>
        <article
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Reveal>

      <EmailSubscribe variant="inline" />

      <nav className={styles.postNav}>
        {prev ? (
          <Link href={`/blog/${prev.slug}`} className={styles.navLink}>
            <span className={styles.navDirection}>← Previous</span>
            <span className={styles.navTitle}>{prev.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/blog/${next.slug}`}
            className={`${styles.navLink} ${styles.navLinkNext}`}
          >
            <span className={styles.navDirection}>Next →</span>
            <span className={styles.navTitle}>{next.title}</span>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
}
