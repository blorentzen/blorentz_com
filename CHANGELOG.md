# Changelog

## 2026-03-31

### Added
- **Blog section** (`/blog`) with hero post layout and standard post cards
  - Blog index with latest post as full-width hero (text over image with gradient overlay)
  - Older posts displayed as horizontal cards (thumbnail + text)
  - CTAs on all post cards ("Read post →")
- **Individual blog post pages** (`/blog/[slug]`) with full markdown rendering
  - 720px prose width, responsive typography
  - Support for `<figure>` with `<figcaption>` for captioned images
  - Comparison blocks (side-by-side on desktop, stacked on mobile) for AI Draft vs My Edit content
  - Previous/next post navigation
  - Full SEO metadata (Open Graph, Twitter cards)
- **Blog content system** (`lib/blog.ts`)
  - Markdown parsing with gray-matter + remark
  - HTML passthrough enabled for custom markup in posts
  - Sorted by date (newest first), stable sort by slug for same-date posts
- **Two launch posts:**
  - "How I Built My New Portfolio With AI" (hero post)
  - "Fresh Blog, Who This?" (intro post)
- "Blog" added to site navigation between Work and About

### Changed
- About page restructured into tabbed layout with pills navigation
  - Persistent hero (photo collage + tagline) above tabs
  - Three tabs: The Full Story, Career, Off the Clock
  - URL hash routing (`#story`, `#career`, `#offclock`)
  - Off the Clock includes racing, DJing, and gaming sections with media embeds
