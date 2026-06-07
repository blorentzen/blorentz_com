import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { renderMarkdown } from "./markdown";

const legalDirectory = path.join(process.cwd(), "content/legal");

export interface LegalDoc {
  slug: string;
  title: string;
  effectiveDate: string;
  lastUpdated: string;
  status: string;
  contentHtml: string;
}

export async function getLegalDoc(slug: string): Promise<LegalDoc> {
  const fullPath = path.join(legalDirectory, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const contentHtml = await renderMarkdown(content);

  return {
    slug,
    title: data.title ?? "",
    effectiveDate: data.effectiveDate ?? "",
    lastUpdated: data.lastUpdated ?? "",
    status: data.status ?? "",
    contentHtml,
  };
}
