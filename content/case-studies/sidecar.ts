import type { CaseStudy } from "./index";

export const sidecar: CaseStudy = {
  slug: "sidecar",
  title: "Sidecar",
  client: "Empac",
  voice: "build",
  year: "2025 – Present",
  role: "Creator & Sole Developer",
  order: 5,
  headline: "A retainer management platform (in progress)",
  heroImage: "https://cdn.empac.co/portfolio/images/sidecar-example-thumb.jpg",
  videoUrl: "https://cdn.empac.co/portfolio/video/sidecar-demo.mp4",
  status: "in-progress",
  techStack: ["React", "Node.js", "Supabase", "CascadeDS", "Stripe"],
  timeline: "2025 – Present (active development, pre-launch)",
  teamSize: "Solo",
  problem:
    "There are countless dashboards in the marketplace, and they all look the same — likely because they've been A/B tested to death until every dashboard converges on the same design. Meanwhile, retainer-based consulting is a fundamentally different operating model than project work, and most tools don't account for it. You're not tracking tasks toward a deadline. You're managing ongoing hour allocations across rotating focus areas, communicating with clients about what's happening this cycle, tracking utilization, and making sure nothing falls through the cracks month over month.\n\nThe tools that exist — Asana, Monday, Basecamp — are built for project teams. They're either too heavy (enterprise features nobody asked for) or too light (glorified to-do lists). None of them are designed for solo operators or small teams managing multiple client retainers simultaneously.\n\nSidecar is an active project to create a simple, stylish, and functional dashboard for companies that operate on rotating retainers and service packages — one that challenges the assumption that every dashboard has to look and work the same way.",
  approach:
    "Sidecar is a full-stack application designed for the complete retainer management lifecycle.\n\nCore features include creating and managing services, packages, and rotating retainers. Creating and managing clients and additional users (for both client and vendor sides). Stripe integration for payments, tracking, and billing visibility for both parties. Real-time chat and notifications between vendor/client and within individual environments. Custom project management with a Kanban board (with Gantt chart under consideration for software-related tasks). Hour assignment, work monitoring, and workload balancing across contributors. Data and analytics at a glance — vendor performance, workload distribution, and more. Meeting and schedule management between vendor and client. A two-way file system for easy management of documents, files, and assets between vendor and client. Secure credential storage for managing sensitive information like login credentials.\n\nTo get an MVP running, we started with MongoDB as a proof of concept. Given the relational nature of all the data — clients, services, hours, billing, communications — and the security and privacy requirements, we migrated everything to Supabase (PostgreSQL with Row Level Security and built-in auth). This ensured proper data isolation between clients and met the security protocols required for handling sensitive business information.\n\nThe frontend is React, consuming CascadeDS for all UI components and tokens. Sidecar is the largest consumer of CascadeDS and serves as the proving ground for the design system — if something doesn't work in Sidecar, it gets fixed in CDS before it causes problems downstream.\n\nWork is naturally social. Sidecar bakes in real-time communication alongside the work itself — chat, notifications, and collaboration features — so teams can switch between \"I'm working right now\" and \"I need to reach out to someone\" without jumping to Slack or Teams.\n\nThis is also the biggest venture into properly configuring a complete application — from authentication to data modeling, real-time features, payment integration, and file management. Building the best possible experience means learning in public and testing assumptions before launch.",
  result:
    "Before this project goes live, it needs to go through proper usability testing and a study to validate whether this is something others would want to use. The immediate goal is getting Sidecar to a state where it fully manages Empac's retainer operations. Once it's stable and battle-tested on real work, the longer play is exploring whether other solo operators and small consultancies would benefit from the same tool.",
  challenges: [
    "Designing a multi-tenant data model with strict client data isolation via Row Level Security",
    "Challenging the assumption that dashboards all need to look the same — finding a more elegant approach without sacrificing usability",
    "Building real-time features (chat, notifications, live updates) alongside traditional CRUD operations",
    "Balancing feature scope against shipping an MVP — the feature list is deep but the priority is getting the core loop working first",
    "Designing a two-way file system and secure credential storage that meets real security requirements",
  ],
};
