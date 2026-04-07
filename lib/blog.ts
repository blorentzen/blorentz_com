import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type BlogCategory = "perspective" | "building" | "career" | "process" | "off-the-clock";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  readTime: string;
  heroImage: string;
  heroAlt: string;
  published: boolean;
  category: BlogCategory;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  readTime: string;
  heroImage: string;
  heroAlt: string;
  category: BlogCategory;
}

interface PostFrontmatter {
  title: string;
  slug: string;
  date: string;
  publishTime?: string;
  description: string;
  readTime: string;
  heroImage: string;
  heroAlt: string;
  category: BlogCategory;
  published: boolean;
}

function isPublished(data: PostFrontmatter): boolean {
  if (!data.published || !data.date) return false;

  const timeStr = data.publishTime || "00:00";
  const publishPacific = new Date(
    new Date(`${data.date}T${timeStr}:00`).toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    })
  );
  const nowPacific = new Date(
    new Date().toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    })
  );

  return nowPacific >= publishPacific;
}

function getPostFiles(): string[] {
  return fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));
}

export function getAllPosts(): BlogPostMeta[] {
  return getPostFiles()
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      if (!isPublished(data as PostFrontmatter)) return null;

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        readTime: data.readTime,
        heroImage: data.heroImage,
        heroAlt: data.heroAlt,
        category: data.category,
      };
    })
    .filter((post): post is BlogPostMeta => post !== null)
    .sort((a, b) => {
      if (a.date !== b.date) return a.date > b.date ? -1 : 1;
      return a.slug > b.slug ? -1 : 1;
    });
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content: rawContent } = matter(fileContents);

  if (!isPublished(data as PostFrontmatter)) return null;

  const processed = await remark().use(html, { sanitize: false }).process(rawContent);
  const content = processed.toString();

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    readTime: data.readTime,
    heroImage: data.heroImage,
    heroAlt: data.heroAlt,
    published: data.published,
    category: data.category,
    content,
  };
}

export function getPostSlugs(): string[] {
  return getPostFiles().map((f) => f.replace(/\.md$/, ""));
}

export function getAdjacentPosts(
  currentSlug: string
): { prev: BlogPostMeta | null; next: BlogPostMeta | null } {
  const posts = getAllPosts();
  const index = posts.findIndex((p) => p.slug === currentSlug);

  return {
    prev: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  };
}
