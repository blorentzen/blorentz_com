# blorentz.com

Personal brand hub for Britton Lorentzen — connecting Fortune 500 career, boutique consultancy (Empac), and builder identity.

Built with [Next.js](https://nextjs.org), styled with [CascadeDS](https://empac.co), deployed on [Vercel](https://vercel.com).

## Architecture

### Tech Stack

| Layer         | Tool                                                               |
| ------------- | ------------------------------------------------------------------ |
| Framework     | Next.js 14+ (App Router)                                           |
| Design System | CascadeDS (`@empac/cascadeds`) with site-specific token extensions |
| Styling       | CSS Modules + CDS design tokens (no Tailwind)                      |
| Animation     | Framer Motion                                                      |
| Content       | MDX (thoughts) + structured TypeScript (case studies)              |
| Scheduling    | Cal.com (`@calcom/embed-react`)                                    |
| Fonts         | General Sans · Space Grotesk · JetBrains Mono · Inter              |
| Analytics     | Plausible                                                          |
| Deployment    | Vercel (free tier)                                                 |
| Domain        | Namecheap → Vercel DNS                                             |

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
│   ├── layout.tsx                Root layout (nav, footer, theme provider)
│   ├── page.tsx                  Homepage
│   ├── page.module.css           Homepage styles
│   ├── work/
│   │   ├── page.tsx              Work index (case study listing)
│   │   └── [slug]/
│   │       └── page.tsx          Individual case study
│   ├── about/
│   │   └── page.tsx              Personal story & background
│   ├── empac/
│   │   └── page.tsx              Consultancy bridge page (Cal.com embed)
│   ├── thoughts/
│   │   ├── page.tsx              Articles index (Phase 2)
│   │   └── [slug]/
│   │       └── page.tsx          Individual article (Phase 2)
│   └── colophon/
│       └── page.tsx              Site credits & tech stack
├── components/
│   ├── Nav.tsx                   Site navigation
│   ├── Nav.module.css
│   ├── Footer.tsx                Site footer
│   ├── Footer.module.css
│   ├── ThemeToggle.tsx           Dark/light mode toggle
│   ├── CaseStudyCard.tsx         Case study preview card
│   ├── CaseStudyCard.module.css
│   ├── CalEmbed.tsx              Cal.com scheduling wrapper
│   └── ...
├── content/
│   ├── case-studies/             Structured case study data (.ts files)
│   │   ├── index.ts              Case study registry & types
│   │   ├── tmobile-savings-calculator.ts
│   │   ├── olympic-energy-calculator.ts
│   │   ├── dr-patel-redesign.ts
│   │   ├── tmobile-super-bowl.ts
│   │   ├── cascadeds.ts
│   │   └── sidecar.ts
│   └── thoughts/                 MDX articles (Phase 2)
├── styles/
│   ├── tokens.css                blorentz.com token overrides (extends CDS)
│   └── globals.css               Global styles, CDS imports, font declarations
├── lib/
│   ├── content.ts                Content loading & parsing utilities
│   ├── fonts.ts                  next/font configuration
│   └── utils.ts                  Shared utilities
├── public/
│   └── images/
│       ├── work/                 Case study screenshots & visuals
│       ├── about/                Personal photos (headshot, racing, etc.)
│       └── og/                   Open Graph images
├── .env.local                    Environment variables (Cal.com, Plausible, etc.)
├── .gitignore
├── .nvmrc
├── CLAUDE.md                     Claude Code project context
├── next.config.js
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 20+ (see `.nvmrc`)
- npm 10+
- Git

### Installation

```bash
# Clone the repo
git clone git@github.com:blorentzen/blorentz.com.git
cd blorentz.com

# Use correct Node version
nvm use

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

See `.env.example` for required variables.

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

### Content Model

**Case studies** are structured TypeScript objects in `content/case-studies/`. Each file exports a typed object following the `CaseStudy` interface defined in `content/case-studies/index.ts`.

**Thoughts** (Phase 2) will be MDX files in `content/thoughts/` with frontmatter for metadata.

### Adding a Case Study

1. Create a new `.ts` file in `content/case-studies/`
2. Export a `CaseStudy` object following the interface
3. Register it in `content/case-studies/index.ts`
4. Add images to `public/images/work/[slug]/`

## Deployment

The site deploys automatically to Vercel on push to `main`.

- **Production:** blorentz.com (via Namecheap DNS → Vercel)
- **Preview:** Auto-generated for PRs and branches

## Design System

This site is built on [CascadeDS](https://empac.co) — Empac's design token and component system. blorentz.com extends CDS with site-specific token overrides for typography and a new `--font-family-technical` token. The color palette, spacing scale, component primitives, and dark/light theme infrastructure are all inherited from CDS.

This site itself serves as a case study for CascadeDS.

## License

Source code is publicly visible for portfolio and educational purposes. Please don't clone this site and present it as your own work. The design, content, and case studies are © Britton Lorentzen.
