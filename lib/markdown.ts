import "server-only";
import { remark } from "remark";
import gfm from "remark-gfm";
import html from "remark-html";

/**
 * Render trusted (author-written) Markdown to an HTML string. GFM enabled for
 * tables; raw HTML passthrough allowed (sanitize: false) since the source is
 * authored by us, mirroring the blog/legal pipeline.
 */
export async function renderMarkdown(markdown: string): Promise<string> {
  const processed = await remark()
    .use(gfm)
    .use(html, { sanitize: false })
    .process(markdown);
  return processed.toString();
}
