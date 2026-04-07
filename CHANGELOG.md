# Changelog

## 2026-04-06

### Added
- **Contact dropdown** in navigation with "Book a time" (Cal.com link) and "Send an email" options
- **RSS feed** at `/blog/rss.xml` with `media:content` tags for hero images in email clients
  - Autodiscovery link in `<head>`
  - RSS badge on blog index page
- **Blog post scheduler** with timezone-aware publishing
  - `isPublished` filter checks date + optional `publishTime` (Pacific timezone)
  - Default publish time: 6:00am PST
  - ISR revalidation (1 hour) on blog index and post pages
  - Unpublished/future posts return 404 and are excluded from sitemap, RSS, and navigation
- **Email subscribe component** with Cloudflare Turnstile spam prevention
  - CDS Input and Button components
  - Server-side Mailerlite API integration (`/api/subscribe`)
  - Turnstile token verification on server
  - Placed on blog index and individual blog posts
- **Blog category system** (Phase 1 — data only, no UI filtering yet)
  - Five categories: perspective, building, career, process, off-the-clock
  - All posts tagged with category in frontmatter
- **Blog post 4:** "The Still Life and the Soul" (scheduled for April 10)
  - Image group layouts: 3-up rows, 2-up comparisons, with captions
  - 13 images across 5 groups with lazy loading
- **Footer updates:**
  - "Let's connect" section with GitHub, LinkedIn, Calendar, and Mail icons
  - Blog link added to footer navigation
  - Email address in copyright line
- **Sitemap** now includes published blog posts

### Changed
- Contact moved from dedicated page to nav dropdown (removed `/contact` route)
- Footer social links moved to custom section above CDS Footer for heading support

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
