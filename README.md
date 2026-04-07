# blorentz.com

Personal brand hub for Britton Lorentzen — connecting Fortune 500 career, boutique consultancy (Empac), and builder identity.

Built with [Next.js](https://nextjs.org), styled with [CascadeDS](https://empac.co), deployed on [Vercel](https://vercel.com).

## Architecture

### Tech Stack

| Layer         | Tool                                                               |
| ------------- | ------------------------------------------------------------------ |
| Framework     | Next.js 14+ (App Router, TypeScript)                               |
| Design System | CascadeDS (`@empac/cascadeds`) with site-specific token extensions |
| Styling       | CSS Modules + CDS design tokens (no Tailwind)                      |
| Animation     | Framer Motion                                                      |
| Content       | Structured TypeScript (case studies), Markdown (blog)              |
| Email         | Mailerlite (subscribe) + Cloudflare Turnstile (spam prevention)    |
| Fonts         | General Sans · Space Grotesk · JetBrains Mono · Inter              |
| Deployment    | Vercel                                                             |

### Typography System

This site uses a three-voice type architecture where each typeface represents a distinct role:

| Voice              | Font           | When It Appears                                                            |
| ------------------ | -------------- | -------------------------------------------------------------------------- |
| **The Strategist** | General Sans   | Page titles, section headings, narrative content — the leader's voice      |
| **The Builder**    | Space Grotesk  | Technical details, tech stack labels, metadata, colophon — the craft layer |
| **The Code**       | JetBrains Mono | Code snippets, terminal references, technical annotations                  |
| **Body**           | Inter          | All paragraph text (inherited from CascadeDS)                              |

**Rule of thumb:** "What and why" → General Sans. "How and with what" → Space Grotesk. The thing itself → JetBrains Mono.

### Project Structure

```
blorentz.com/
├── app/
│   ├── layout.tsx                Root layout (nav, footer, theme, fonts)
│   ├── page.tsx                  Homepage
│   ├── sitemap.ts                Dynamic sitemap generation
│   ├── robots.ts                 Robots.txt configuration
│   ├── work/
│   │   ├── page.tsx              Work index (case study listing)
│   │   └── [slug]/
│   │       └── page.tsx          Individual case study
│   ├── api/
│   │   └── subscribe/
│   │       └── route.ts          Mailerlite subscribe endpoint
│   ├── blog/
│   │   ├── page.tsx              Blog index (hero post + card grid)
│   │   ├── rss.xml/
│   │   │   └── route.ts          RSS feed
│   │   └── [slug]/
│   │       └── page.tsx          Individual blog post
│   ├── about/
│   │   └── page.tsx              Personal story & background
│   └── colophon/
│       └── page.tsx              Site credits & tech stack
├── components/
│   ├── SiteNav/                  Navigation with contact dropdown
│   ├── SiteFooter/               Footer with social links + connect section
│   ├── EmailSubscribe/           Blog email subscribe (Mailerlite + Turnstile)
│   ├── Aurora/                   Animated gradient background
│   ├── CaseStudyCard/            Case study preview card
│   ├── CountUpStat/              Animated stat counter
│   ├── LayoutShell.tsx           Page transition wrapper (AnimatePresence)
│   ├── PageHeader/               Reusable page header
│   ├── ParallaxImage/            Scroll-driven parallax image
│   ├── PhotoCollage/             Staggered photo grid
│   ├── Reveal/                   Scroll-triggered entrance animation
│   ├── Section/                  Reusable content section
│   ├── StaggerGrid/              Staggered grid entrance animation
│   ├── StatCards/                Stat card grid
│   ├── ThemeToggle/              Dark/light mode toggle
│   ├── Timeline/                 Career timeline
│   ├── ValueCard/                Values display card
│   └── VideoPlayer/              Video player with poster
├── content/
│   ├── blog/                     Blog posts (Markdown with frontmatter)
│   └── case-studies/             Structured case study data (.ts files)
│       ├── index.ts              Case study registry & types
│       ├── tmobile-savings-calculator.ts
│       ├── fn5gl.ts
│       ├── dr-patel-redesign.ts
│       ├── cascadeds.ts
│       ├── sidecar.ts
│       ├── tmobile-super-bowl.ts
│       └── olympic-energy-calculator.ts
├── styles/
│   ├── tokens.css                blorentz.com token overrides (extends CDS)
│   └── globals.css               Global styles, CDS imports, font declarations
├── lib/
│   ├── blog.ts                   Blog content loader (gray-matter + remark)
│   ├── fonts.ts                  next/font configuration
│   └── utils.ts                  Shared utilities
├── CLAUDE.md                     Claude Code project context
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Getting Started

```bash
# Clone the repo
git clone git@github.com:blorentzen/blorentz_com.git
cd blorentz_com

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Development

### Commands

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start development server (port 3000) |
| `npm run build` | Production build                     |
| `npm run start` | Start production server              |
| `npm run lint`  | Run ESLint                           |

### Styling Conventions

- **No Tailwind.** All styling uses CascadeDS tokens + CSS Modules.
- CSS Modules are co-located with their components: `Component.tsx` + `Component.module.css`
- Use CDS token variables (`var(--spacing-16)`, `var(--text-primary)`, etc.) — never hardcode values
- The `--font-family-technical` token is custom to this project (not in CDS base)
- See `styles/tokens.css` for all site-specific overrides

### Adding a Blog Post

1. Create a new `.md` file in `content/blog/` named with the post slug
2. Add frontmatter: `title`, `slug`, `date`, `description`, `readTime`, `heroImage`, `heroAlt`, `published`
3. Write post body in Markdown (supports HTML for figures, comparison blocks)
4. Hero images are hosted on `cdn.empac.co/portfolio/images/blog/`
5. The latest post (by date, then slug) automatically becomes the hero on `/blog`

### Adding a Case Study

1. Create a new `.ts` file in `content/case-studies/`
2. Export a `CaseStudy` object following the interface in `index.ts`
3. Register it in `content/case-studies/index.ts`
4. Add hero image to CDN and set `heroImage` field

## Deployment

The site deploys automatically to Vercel on push to `main`.

- **Production:** blorentz.com
- **Preview:** Auto-generated for PRs and branches

## Design System

This site is built on [CascadeDS](https://empac.co) — Empac's design token and component system. blorentz.com extends CDS with site-specific token overrides for typography and a new `--font-family-technical` token. The color palette, spacing scale, component primitives, and dark/light theme infrastructure are all inherited from CDS.

## License

Source code is publicly visible for portfolio and educational purposes. Please don't clone this site and present it as your own work. The design, content, and case studies are © Britton Lorentzen.
