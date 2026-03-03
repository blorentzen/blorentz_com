import type { CaseStudy } from "./index";

export const cascadeds: CaseStudy = {
  slug: "cascadeds",
  title: "CascadeDS",
  client: "Empac",
  voice: "build",
  year: "2025 – Present",
  role: "Creator & Sole Developer",
  order: 4,
  headline: "A design system that powers everything I build.",
  heroImage: "https://cdn.empac.co/portfolio/images/cascadeds-example-thumb.jpg",
  liveUrl: "https://ds.empac.co",
  videoUrl: "https://cdn.empac.co/portfolio/video/cds-demo.mp4",
  stats: [
    { stat: "60+", label: "Components" },
    { stat: "5+", label: "Projects powered" },
    { stat: "200+", label: "Design tokens" },
  ],
  techStack: ["React", "CSS Custom Properties", "npm", "Figma"],
  timeline: "2025 – Present (active development)",
  teamSize: "Solo",
  problem:
    "When you're building across multiple projects (client websites, internal tools, side products), every new project starts with the same decisions: spacing, color tokens, typography, component patterns. Without a system, you rebuild from scratch every time or copy-paste from the last project and accumulate drift.\n\nMost design systems assume you have a team: Design ops, a library maintainer, and consumers filing requests through a backlog. That doesn't work when you're one person shipping fast.\n\nBut the real problem was bigger than consistency. There wasn't a good design system out there that could support both applications and marketing pages. Most systems are optimized for one or the other: component libraries for apps, or template kits for marketing sites. I wanted something that could easily be applied for building apps while extending to work for marketing pages and campaigns.\n\nCascadeDS is the evolution of EmpacJS, my earlier framework, rebuilt from the ground up to solve this problem.",
  approach:
    "CascadeDS is a token-based design system with React components, distributed as a private npm package (@empac/cascadeds). It provides the foundational layer that every project built under Empac shares: spacing, color, typography, radii, shadows, transitions, and a growing component library.\n\nTokens first, components second. The token layer (CSS custom properties) is the foundation. Components consume tokens, but any project can use tokens without components. A Webflow site can reference the same spacing scale as a React application.\n\nPrivate npm package. Published as @empac/cascadeds, consumed via standard npm install. Each project extends or overrides tokens without forking.\n\nSeparate repos, not a monorepo. At current scale, separate repositories with package distribution is simpler than monorepo tooling. Architecture supports migration to a monorepo when team growth warrants it.\n\nDark and light themes built in. Theme switching at the token level with semantic color tokens that resolve differently per theme.\n\nCascadeDS also includes patterns for collaboration contexts: chat interfaces, notification components, and real-time status indicators. These exist because Sidecar needs them, and building them into the system means they're reusable across future projects.\n\nWhen publicly released, the plan is to build CLI functionality that lets users install specific page templates and styles for easy scaffolding, then take their project wherever from there.\n\nThe documentation site (ds.empac.co) is itself a CascadeDS consumer, built with the system it documents.\n\nWhy build your own? Tailwind creates class soup at scale. Material UI and Chakra impose their opinions on your brand. And while any of them can technically work across apps and marketing pages, none of them give me full control over both Figma and code from a single source of truth.\n\nIt comes down to a principle I apply to client work too: own the things that define your quality. Hire Empac and you get a system, not a one-off design that falls apart when someone adds a page.\n\nThe practical upside: speed. Every new project starts with a working foundation instead of a blank file. That's a week spent on the actual problem instead of setup.\n\nWhen Empac grows, CascadeDS is the rails. New contributor installs the package, references the tokens, consistency happens automatically.",
  result:
    "Currently powering Sidecar, TowHub, empac.co, and client projects. The docs can be found at ds.empac.co. It's evolved from my primary framework called EmpacJS, with years of real-world usage baked into the architecture.\n\nIn fact, you're looking at it right now. This site currently runs on CascadeDS... the typography, spacing, color tokens, dark mode... All of it.",
  challenges: [
    "Designing a token architecture flexible enough to support both applications and marketing pages, two very different use cases.",
    "Building a component library incrementally, shipping what's needed now without over-engineering for hypothetical future needs.",
    "Creating a system that bridges work and social interaction patterns without becoming bloated.",
  ],
};
