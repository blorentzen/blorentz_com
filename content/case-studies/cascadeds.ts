import type { CaseStudy } from "./index";

export const cascadeds: CaseStudy = {
  slug: "cascadeds",
  title: "CascadeDS",
  client: "Empac",
  voice: "build",
  year: "2025 – Present",
  role: "Creator & Sole Developer",
  order: 4,
  headline: "A design system that powers everything I build",
  heroImage: "https://cdn.empac.co/portfolio/images/cascadeds-example-thumb.jpg",
  liveUrl: "https://ds.empac.co",
  videoUrl: "https://cdn.empac.co/portfolio/video/cds-demo.mp4",
  stats: [
    { stat: "64", label: "Components" },
    { stat: "5+", label: "Projects powered" },
    { stat: "200+", label: "Design tokens" },
  ],
  techStack: ["React", "CSS Custom Properties", "npm", "Figma"],
  timeline: "2025 – Present (active development)",
  teamSize: "Solo",
  problem:
    "When you're building across multiple projects — client websites, internal tools, side products — every new project starts with the same decisions: spacing, color tokens, typography, component patterns. Without a system, you rebuild from scratch every time or copy-paste from the last project and accumulate drift.\n\nMost design systems assume you have a team — dedicated design ops, a component library maintainer, consumers who submit requests through a backlog. That model doesn't work for a solo practitioner or a small team shipping fast.\n\nBut the problem I was really trying to solve was bigger than consistency. There wasn't a good design system out there that could support both applications and marketing pages. Most systems are optimized for one or the other — component libraries for apps, or template kits for marketing sites. I wanted something that could easily be applied for building apps while extending to work for marketing pages and campaigns.\n\nCascadeDS is the evolution of EmpacJS, my earlier framework, rebuilt from the ground up to solve this problem.",
  approach:
    "CascadeDS is a token-based design system with React components, distributed as a private npm package (@empac/cascadeds). It provides the foundational layer that every project built under Empac shares: spacing, color, typography, radii, shadows, transitions, and a growing component library.\n\nTokens first, components second. The token layer (CSS custom properties) is the foundation. Components consume tokens, but any project can use tokens without components. A Webflow site can reference the same spacing scale as a React application.\n\nPrivate npm package. Published as @empac/cascadeds, consumed via standard npm install. Each project extends or overrides tokens without forking.\n\nSeparate repos, not a monorepo. At current scale, separate repositories with package distribution is simpler than monorepo tooling. Architecture supports migration to a monorepo when team growth warrants it.\n\nDark and light themes built in. Theme switching at the token level with semantic color tokens that resolve differently per theme.\n\nWork and social, combined. A core element of CascadeDS is the ability to support both work and communication contexts. Work is naturally a social activity, so the system includes patterns for switching between focused work and quick collaboration — without jumping to Slack, Teams, or elsewhere.\n\nWhen publicly released, the plan is to build CLI functionality that lets users install specific page templates and styles for easy scaffolding — then take their project wherever from there.\n\nThe documentation site (ds.empac.co) is itself a CascadeDS consumer — built with the system it documents.\n\nWhy build your own? The systems that exist weren't built for how I work. Tailwind creates class soup at scale and doesn't enforce design decisions. Material UI and Chakra impose opinions that don't match my aesthetic or my clients' brands. None of them give me a single source of truth that spans both my design tool and my code, and none of them bridge applications and marketing pages.\n\nCascadeDS embodies a philosophy I apply to client work: own the things that define your quality. When a client hires Empac, they get a system-driven approach — not a one-off design that falls apart when someone adds a page.\n\nThe biggest practical benefit is building things faster so products ship to market quicker. Every new project starts with a working foundation instead of blank-file decisions. That's the difference between spending a week on setup versus spending it on the actual problem.\n\nWhen Empac grows, CascadeDS provides the rails. A new contributor installs the package, references the tokens, and the system enforces consistency automatically.",
  result:
    "Powers blorentz.com, Sidecar, TowHub, empac.co, and client projects. Documentation live at ds.empac.co. Actively maintained and extended as new projects consume it. Evolution of EmpacJS — years of real-world usage informing the architecture.\n\nThe meta proof: you're looking at CascadeDS right now. This site — blorentz.com — runs on it. The typography, spacing, color tokens, dark mode — all CascadeDS.",
  challenges: [
    "Designing a token architecture flexible enough to support both applications and marketing pages — two fundamentally different use cases",
    "Building a component library incrementally — shipping what's needed now without over-engineering for hypothetical future needs",
    "Creating a system that bridges work and social interaction patterns without becoming bloated",
  ],
};
