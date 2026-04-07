import { getAllPosts } from "@/lib/blog";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function formatRFC822(dateStr: string): string {
  const date = new Date(dateStr + "T07:00:00-07:00");
  return date.toUTCString();
}

export async function GET() {
  const posts = getAllPosts();

  const items = posts
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>https://blorentz.com/blog/${post.slug}</link>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${formatRFC822(post.date)}</pubDate>
      <guid>https://blorentz.com/blog/${post.slug}</guid>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Britton Lorentzen's Blog</title>
    <link>https://blorentz.com/blog</link>
    <description>Thoughts on AI, design systems, creative development, and building things that matter.</description>
    <language>en-us</language>
    <atom:link href="https://blorentz.com/blog/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
