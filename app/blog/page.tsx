import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing about creative development, AI-assisted workflows, and building things for a living.",
  openGraph: {
    title: "Blog — Britton Lorentzen",
    description:
      "Writing about creative development, AI-assisted workflows, and building things for a living.",
  },
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();
  const [latestPost, ...olderPosts] = posts;

  return (
    <div className={styles.page}>
      <Reveal>
        <PageHeader title="Blog" />
      </Reveal>

      {latestPost && (
        <Reveal>
          <Link href={`/blog/${latestPost.slug}`} className={styles.heroCard}>
            <div className={styles.heroImage}>
              <Image
                src={latestPost.heroImage}
                alt={latestPost.heroAlt}
                width={1200}
                height={675}
                className={styles.heroImg}
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
              <div className={styles.heroOverlay} />
              <div className={styles.heroContent}>
                <div className={styles.heroMeta}>
                  <time className={styles.heroDate}>
                    {formatDate(latestPost.date)}
                  </time>
                  <span className={styles.heroDot}>·</span>
                  <span className={styles.heroReadTime}>
                    {latestPost.readTime}
                  </span>
                </div>
                <h2 className={styles.heroTitle}>{latestPost.title}</h2>
                <p className={styles.heroDescription}>
                  {latestPost.description}
                </p>
                <span className={styles.heroCta}>Read post →</span>
              </div>
            </div>
          </Link>
        </Reveal>
      )}

      {olderPosts.length > 0 && (
        <div className={styles.posts}>
          {olderPosts.map((post) => (
            <Reveal key={post.slug}>
              <Link href={`/blog/${post.slug}`} className={styles.postCard}>
                <div className={styles.postImage}>
                  <Image
                    src={post.heroImage}
                    alt={post.heroAlt}
                    width={720}
                    height={405}
                    className={styles.postImg}
                    sizes="(max-width: 768px) 100vw, 480px"
                  />
                </div>
                <div className={styles.postContent}>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <div className={styles.postMeta}>
                    <time className={styles.postDate}>
                      {formatDate(post.date)}
                    </time>
                    <span className={styles.postDot}>·</span>
                    <span className={styles.postReadTime}>
                      {post.readTime}
                    </span>
                  </div>
                  <p className={styles.postDescription}>{post.description}</p>
                  <span className={styles.postCta}>Read post →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
