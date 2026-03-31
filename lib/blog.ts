import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  readTime: string;
  heroImage: string;
  heroAlt: string;
  published: boolean;
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

      if (!data.published) return null;

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        readTime: data.readTime,
        heroImage: data.heroImage,
        heroAlt: data.heroAlt,
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

  if (!data.published) return null;

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
