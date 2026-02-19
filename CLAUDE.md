# CLAUDE.md — Project Context for Claude Code

## What Is This Project?

blorentz.com is the personal brand hub for Britton Lorentzen. It connects his Fortune 500 career (T-Mobile, Apple), his boutique consultancy (Empac), and his identity as a builder and strategic thinker. The site serves two audiences equally: potential Empac clients and his professional network/recruiters.

## Tech Stack

- **Framework:** Next.js 14+ with App Router (TypeScript)
- **Design System:** CascadeDS (`@empac/cascadeds`) with site-specific token extensions
- **Styling:** CSS Modules + CDS design tokens. **NO TAILWIND.**
- **Animation:** Framer Motion
- **Content:** Structured TypeScript for case studies, MDX for thoughts/articles
- **Scheduling:** Cal.com (`@calcom/embed-react`)
- **Deployment:** Vercel
- **Analytics:** Plausible

## Critical Rules

### Styling

- **Never use Tailwind classes.** This project uses CascadeDS tokens and CSS Modules exclusively.
- Always use CDS token variables for values: `var(--spacing-16)`, `var(--text-primary)`, `var(--radius-8)`, etc.
- Never hardcode colors, spacing, font sizes, or other design values.
- CSS Modules are co-located with components: `Component.tsx` + `Component.module.css`
- Global styles and token overrides live in `styles/`

### Typography — Three-Voice System

This site uses a deliberate three-font system. Each font has specific usage rules that must be followed:

**General Sans** (`var(--font-family-display)`) — The Strategist

- ALL page titles (H1)
- Section headings throughout the site
- Homepage, /about, /empac, /thoughts headings
- Navigation and footer
- Any content framing strategy, narrative, or personal voice

**Space Grotesk** (`var(--font-family-technical)`) — The Builder

- Case study technical detail sections (headings and subheadings)
- Tech stack tags and labels
- Timeline and role metadata
- Colophon page headings
- Any content framing HOW something was built

**JetBrains Mono** (`var(--font-family-mono)`) — The Code

- Inline code references
- Code block snippets
- Terminal/CLI references
- Technical specifications

**Inter** (`var(--font-family-body)`) — Body Text

- All paragraph text everywhere
- Descriptions, long-form reading
- Does not change based on context

**The rule:** "What and why" → General Sans. "How and with what" → Space Grotesk. The thing itself → JetBrains Mono.

**Space Grotesk NEVER appears on:** page-level H1 titles, /about headings, /empac headings, /thoughts headings, the homepage hero, or any context where the voice is "Britton the leader."

### Color

- Accent color is Empac blue (`--primary-500: #0e75c1`), inherited from CDS
- Dark mode is the default theme
- Light mode available via toggle

### Components

- Prefer CascadeDS components over building from scratch
- When extending CDS components, use token overrides — don't fork the component
- New components specific to this site go in `components/`

### Content

- Case studies are structured TypeScript in `content/case-studies/`
- Each case study follows the narrative structure: Problem → Approach → Result → Details
- Case study images go in `public/images/work/[slug]/`
- Thoughts/articles are MDX in `content/thoughts/` (Phase 2)

## Project Structure

```
app/                     Next.js App Router pages
  layout.tsx             Root layout — nav, footer, theme, fonts
  page.tsx               Homepage
  work/                  Case studies
  about/                 Personal story
  empac/                 Consultancy bridge (Cal.com embed)
  thoughts/              Articles (Phase 2)
  colophon/              Site credits & tech stack
components/              Shared React components + CSS Modules
content/
  case-studies/          Structured TS data per project
  thoughts/              MDX posts (Phase 2)
styles/
  tokens.css             Site-specific token overrides (extends CDS)
  globals.css            Global styles, CDS imports, font faces
lib/
  fonts.ts               next/font config (General Sans, Space Grotesk, JetBrains Mono, Inter)
  content.ts             Content loading utilities
  utils.ts               Shared helpers
public/images/           Static assets organized by section
```

## CascadeDS Token Reference (Key Tokens)

These are the CDS tokens used most frequently. Always reference these rather than raw values:

**Spacing:** `--spacing-0` through `--spacing-64` (base-10 scale: 0, 2, 4, 8, 12, 16, 24, 32, 48, 64)

**Colors (semantic):**

- `--text-primary`, `--text-secondary`, `--text-tertiary`, `--text-inverse`
- `--background-default`, `--background-elevated`, `--background-sunken`
- `--border-default`, `--border-focus`
- `--primary-500` (Empac blue accent)

**Typography (from site overrides in tokens.css):**

- `--font-family-display` → General Sans
- `--font-family-technical` → Space Grotesk (CUSTOM — not in CDS base)
- `--font-family-body` → Inter
- `--font-family-mono` → JetBrains Mono
- `--font-size-10` through `--font-size-64`

**Layout:**

- `--radius-4`, `--radius-8`, `--radius-12`, `--radius-16`
- `--shadow-sm`, `--shadow-md`, `--shadow-lg`
- `--transition-fast`, `--transition-normal`

## Case Studies at Launch

1. T-Mobile Savings Calculator — Fortune 500 interactive tool at scale
2. Olympic Energy Oil Tank Calculator — Custom tool for service business (Empac proof)
3. Dr. Tarak Patel Website Redesign — $500K+ revenue impact
4. T-Mobile Super Bowl Landing Page — High-stakes execution
5. CascadeDS — Design system (this site runs on it)
6. Sidecar — Full-stack retainer management platform

## Build Phases

- **Phase 1 (current):** Core pages — homepage, /work (6 case studies), /about, /colophon
- **Phase 2:** /empac bridge page with Cal.com, /thoughts section, additional polish
- **Phase 3:** Interactive demos, RSS, /uses page, performance optimization

## Brand Voice

Confident expert with zero pretension. Direct, not flowery. Results-focused. First person "I" — this is a solo practitioner who owns it. No corporate buzzwords, no apologetic language, no overselling.

## Common Tasks

### Adding a new page

1. Create directory in `app/[page-name]/`
2. Add `page.tsx` and `page.module.css`
3. Add nav link in `components/Nav.tsx`

### Adding a case study

1. Create `content/case-studies/[slug].ts`
2. Follow `CaseStudy` interface from `content/case-studies/index.ts`
3. Add images to `public/images/work/[slug]/`
4. Register in case study index

### Working with fonts

- Font configuration lives in `lib/fonts.ts`
- General Sans is loaded via `next/font/local` (self-hosted from Fontshare)
- Space Grotesk, JetBrains Mono, Inter loaded via `next/font/google`
- Font CSS variables are applied on `<body>` in root layout
