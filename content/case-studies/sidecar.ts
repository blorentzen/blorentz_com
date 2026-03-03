import type { CaseStudy } from "./index";

export const sidecar: CaseStudy = {
  slug: "sidecar",
  title: "Sidecar",
  client: "Empac",
  voice: "build",
  year: "2025 – Present",
  role: "Creator & Sole Developer",
  order: 5,
  headline: "A retainer management platform (in progress).",
  heroImage: "https://cdn.empac.co/portfolio/images/sidecar-example-thumb.jpg",
  videoUrl: "https://cdn.empac.co/portfolio/video/sidecar-demo.mp4",
  status: "in-progress",
  techStack: ["React", "Node.js", "Supabase", "CascadeDS", "Stripe"],
  timeline: "2025 – Present (active development, pre-launch)",
  teamSize: "Solo",
  problem:
    "Every dashboard looks the same. They've all been A/B tested into the same design. Meanwhile, retainer-based consulting is a completely different operating model than project work, and nothing out there accounts for it. You're not tracking tasks toward a deadline. You're managing ongoing hour allocations across rotating focus areas, communicating with clients about what's happening this cycle, tracking utilization, and making sure nothing falls through the cracks month over month.\n\nThe tools that exist (Asana, Monday, Basecamp) are built for project teams. They're either too heavy (enterprise features nobody asked for) or too light (glorified to-do lists). None of them are built around retainer-specific workflows: rotating focus areas, monthly hour allocations, utilization tracking across multiple concurrent clients, and billing cycles tied to retainers instead of projects.\n\nSidecar is what I'm building to fix it. A dashboard for companies that run on rotating retainers, built to challenge the assumption that every dashboard has to look and work the same.",
  approach:
    "Sidecar is a full-stack application built to handle everything a retainer-based consultancy needs to run.\n\nThe feature set: service and retainer management, client/user management for both sides, Stripe for payments and billing, real-time chat and notifications, Kanban boards for project tracking, hour logging and workload balancing, analytics dashboards, meeting scheduling, a two-way file system between vendor and client, and secure credential storage.\n\nStarted with MongoDB for the proof of concept, but the data is deeply relational: clients, services, hours, billing, communications all reference each other. Migrated to Supabase (Postgres with Row Level Security and built-in auth) for proper data isolation and security.\n\nThe frontend is React, consuming CascadeDS for all UI components and tokens. Sidecar is the largest consumer of CascadeDS and serves as the proving ground for the design system. If something doesn't work in Sidecar, it gets fixed in CDS before it causes problems downstream.\n\nWork is social. Sidecar has real-time chat and notifications built in so there's no jumping to Slack or Teams when you need to reach someone.\n\nThis is also the deepest I've gone into building a complete application: auth, data modeling, real-time features, payments, file management... honestly, I'm learning a lot of it as I go, and it's been an incredibly rewarding experience.",
  result:
    "Not live yet. The plan is to get Sidecar managing Empac's own retainer operations first, then run usability testing before opening it up. If it works for me, the question is whether other solo operators and small consultancies would want it too.",
  challenges: [
    "Designing a multi-tenant data model with strict client data isolation via Row Level Security.",
    "Challenging the assumption that dashboards all need to look the same, finding a more elegant approach without sacrificing usability.",
    "Building real-time features (chat, notifications, live updates) alongside traditional CRUD operations.",
    "Balancing feature scope against shipping an MVP. The feature list is deep but the priority is getting the core loop working first.",
    "Designing a two-way file system and secure credential storage that meets real security requirements.",
  ],
};
