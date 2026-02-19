export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  role: string;
  year: string;
  timeline: string;
  techStack: string[];
  heroImage: string;
  thumbnailImage: string;
  problem: string;
  approach: string;
  result: string;
  details: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  featured: boolean;
  order: number;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "tmobile-savings-calculator",
    title: "T-Mobile Savings Calculator",
    subtitle: "Interactive tool helping customers quantify carrier savings at Fortune 500 scale",
    client: "T-Mobile",
    role: "Lead Front-End Engineer",
    year: "2023",
    timeline: "4 months",
    techStack: ["React", "TypeScript", "Next.js", "D3.js", "REST APIs", "Adobe Analytics"],
    heroImage: "/images/work/tmobile-savings-calculator/hero.jpg",
    thumbnailImage: "/images/work/tmobile-savings-calculator/thumb.jpg",
    problem:
      "T-Mobile needed a way to show potential customers exactly how much they'd save by switching carriers. The existing comparison tools were static, outdated, and buried in fine print. Customers were bouncing before they ever saw the value proposition.",
    approach:
      "Built a dynamic, step-by-step calculator that pulls real-time plan data and generates personalized savings estimates. Focused on progressive disclosure — each step builds confidence without overwhelming. Integrated with T-Mobile's plan APIs and analytics pipeline to track conversion at every stage.",
    result:
      "The calculator became one of T-Mobile's highest-converting acquisition tools. Over 2 million calculations per quarter, with measurable lift in plan sign-ups directly attributed to the tool.",
    details: [
      "Real-time plan comparison against AT&T, Verizon, and other carriers",
      "Accessible to WCAG 2.1 AA standards across all device sizes",
      "A/B tested multiple flows to optimize completion rates",
      "Built component library consumed by three other T-Mobile teams",
      "Performance budget of <2s LCP on 3G connections",
    ],
    metrics: [
      { label: "Calculations / Quarter", value: "2M+" },
      { label: "Load Time (LCP)", value: "<2s" },
      { label: "Completion Rate", value: "68%" },
      { label: "Accessibility", value: "WCAG AA" },
    ],
    featured: true,
    order: 1,
  },
  {
    slug: "olympic-energy-oil-calculator",
    title: "Olympic Energy Oil Tank Calculator",
    subtitle: "Custom estimator tool for a regional heating oil service company",
    client: "Olympic Energy (Empac)",
    role: "Full-Stack Developer & Consultant",
    year: "2024",
    timeline: "6 weeks",
    techStack: ["Next.js", "TypeScript", "React", "Vercel", "CSS Modules"],
    heroImage: "/images/work/olympic-energy-oil-calculator/hero.jpg",
    thumbnailImage: "/images/work/olympic-energy-oil-calculator/thumb.jpg",
    problem:
      "Olympic Energy's customers had no way to estimate how much oil they needed to order. Customer service fielded dozens of calls daily from people trying to figure out tank sizes, fill levels, and delivery timing. It was costing the business time and money.",
    approach:
      "Designed and built a visual tank fill estimator that walks customers through selecting their tank type, current level, and desired fill. The interface uses clear illustrations and plain language — no industry jargon. Deployed on Vercel with zero-config CI/CD.",
    result:
      "Customer service call volume for tank estimates dropped significantly within the first month. Customers now self-serve their calculations, and the tool drives direct orders through the site.",
    details: [
      "Visual tank selector with common residential and commercial sizes",
      "Calculates gallons needed based on current gauge reading",
      "Mobile-first design for customers checking tanks on-site",
      "Integrated with Olympic Energy's ordering flow",
      "Built and launched in under 6 weeks as an Empac engagement",
    ],
    metrics: [
      { label: "Build Time", value: "6 weeks" },
      { label: "Support Calls", value: "-40%" },
      { label: "Mobile Usage", value: "72%" },
    ],
    featured: true,
    order: 2,
  },
  {
    slug: "dr-tarak-patel",
    title: "Dr. Tarak Patel Website Redesign",
    subtitle: "Medical practice site redesign that drove over $500K in new patient revenue",
    client: "Dr. Tarak Patel (Empac)",
    role: "Lead Developer & Consultant",
    year: "2023",
    timeline: "8 weeks",
    techStack: ["Next.js", "TypeScript", "Contentful CMS", "Vercel", "Framer Motion"],
    heroImage: "/images/work/dr-tarak-patel/hero.jpg",
    thumbnailImage: "/images/work/dr-tarak-patel/thumb.jpg",
    problem:
      "Dr. Patel's existing website looked dated, loaded slowly, and wasn't converting visitors into patients. The site didn't communicate the quality of care his practice delivers. New patient acquisition through the web was essentially zero.",
    approach:
      "Rebuilt the site from scratch with a focus on trust signals, clear service descriptions, and frictionless appointment booking. Used Contentful for content management so the office staff can update without a developer. Performance was a priority — every page loads in under a second.",
    result:
      "Within 12 months of launch, the practice attributed over $500K in revenue to new patients who found them through the redesigned website. Organic search traffic increased 3x.",
    details: [
      "Conversion-optimized landing pages for each service line",
      "CMS-managed content with Contentful for non-technical staff",
      "Online appointment request form with validation",
      "SEO overhaul: structured data, meta optimization, sitemap",
      "Core Web Vitals all green within first week of launch",
    ],
    metrics: [
      { label: "Revenue Impact", value: "$500K+" },
      { label: "Organic Traffic", value: "3x" },
      { label: "Page Load", value: "<1s" },
      { label: "Core Web Vitals", value: "All Green" },
    ],
    featured: true,
    order: 3,
  },
  {
    slug: "tmobile-super-bowl",
    title: "T-Mobile Super Bowl Landing Page",
    subtitle: "High-stakes campaign page built for 50M+ pageviews on game day",
    client: "T-Mobile",
    role: "Senior Front-End Engineer",
    year: "2022",
    timeline: "3 weeks",
    techStack: ["React", "TypeScript", "AWS CloudFront", "Lambda@Edge", "Adobe Target"],
    heroImage: "/images/work/tmobile-super-bowl/hero.jpg",
    thumbnailImage: "/images/work/tmobile-super-bowl/thumb.jpg",
    problem:
      "T-Mobile's Super Bowl ad campaign needed a landing page that could handle massive traffic spikes during and after the game. Failure wasn't an option — the page had to be live, fast, and flawless when 50 million people saw the commercial.",
    approach:
      "Built a static-first landing page with edge caching via CloudFront, designed to handle traffic surges without degradation. Used progressive enhancement so core content rendered instantly. A/B testing via Adobe Target allowed real-time offer adjustments during the game.",
    result:
      "The page handled over 50 million pageviews on Super Bowl Sunday with zero downtime. Peak concurrent users exceeded projections by 2x, and the page maintained sub-second load times throughout.",
    details: [
      "Edge-cached static assets with CloudFront for global distribution",
      "Lambda@Edge for dynamic offer personalization without origin round-trips",
      "Load tested to 3x projected peak traffic",
      "Real-time A/B testing to optimize CTA during the broadcast",
      "War room deployment with rollback plan and monitoring dashboards",
    ],
    metrics: [
      { label: "Pageviews", value: "50M+" },
      { label: "Uptime", value: "100%" },
      { label: "Peak Load Time", value: "<1s" },
      { label: "Delivery", value: "3 weeks" },
    ],
    featured: false,
    order: 4,
  },
  {
    slug: "cascadeds",
    title: "CascadeDS",
    subtitle: "A design system built for real products, powering this very site",
    client: "Empac (Internal)",
    role: "Creator & Maintainer",
    year: "2024",
    timeline: "Ongoing",
    techStack: ["React", "TypeScript", "CSS Custom Properties", "Storybook", "npm"],
    heroImage: "/images/work/cascadeds/hero.jpg",
    thumbnailImage: "/images/work/cascadeds/thumb.jpg",
    problem:
      "Every Empac client project started from zero — new tokens, new components, new patterns. This wasted time, introduced inconsistency, and made maintenance painful. I needed a design system that was opinionated enough to be useful but flexible enough for different brands.",
    approach:
      "Built CascadeDS as a token-first system. Design tokens define the visual language (color, spacing, typography, shadows), and components consume those tokens. Any brand can override tokens without forking components. Shipped as an npm package with tree-shaking support.",
    result:
      "CascadeDS now powers every Empac project, including this site. New projects spin up in hours instead of days. The system includes 30+ components, full dark mode support, and comprehensive Storybook documentation.",
    details: [
      "Token-first architecture: override tokens, not components",
      "30+ production-ready React components",
      "Full dark/light theme support via CSS custom properties",
      "Published to npm with tree-shaking and TypeScript types",
      "Storybook documentation with interactive examples",
      "Used in production across 5+ client projects",
    ],
    metrics: [
      { label: "Components", value: "30+" },
      { label: "Projects Using", value: "5+" },
      { label: "Setup Time", value: "Hours" },
      { label: "Theme Support", value: "Dark + Light" },
    ],
    featured: true,
    order: 5,
  },
  {
    slug: "sidecar",
    title: "Sidecar",
    subtitle: "Full-stack retainer management platform for consultancies",
    client: "Empac (Internal)",
    role: "Founder & Full-Stack Developer",
    year: "2024",
    timeline: "Ongoing",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "NextAuth.js"],
    heroImage: "/images/work/sidecar/hero.jpg",
    thumbnailImage: "/images/work/sidecar/thumb.jpg",
    problem:
      "Managing retainer clients as a solo consultancy meant juggling spreadsheets, invoices, time tracking, and client communication across a half-dozen tools. Nothing was built for the way boutique consultancies actually work — small teams, recurring engagements, relationship-driven.",
    approach:
      "Designed and built Sidecar as an all-in-one retainer management platform. Clients get a portal to see hours used, deliverables completed, and upcoming work. Consultants get time tracking, invoicing via Stripe, and a single dashboard for all active engagements.",
    result:
      "Sidecar is in active development and used internally at Empac to manage client retainers. It's being built as a SaaS product for other boutique consultancies facing the same problems.",
    details: [
      "Client portal with real-time retainer usage visibility",
      "Time tracking with automatic retainer hour deduction",
      "Stripe integration for recurring invoicing and payments",
      "Role-based access: consultant, client, and admin views",
      "Built on Next.js App Router with server actions",
      "PostgreSQL with Prisma ORM for type-safe data access",
    ],
    metrics: [
      { label: "Status", value: "Active Dev" },
      { label: "Auth", value: "NextAuth.js" },
      { label: "Payments", value: "Stripe" },
      { label: "Database", value: "PostgreSQL" },
    ],
    featured: false,
    order: 6,
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies
    .filter((cs) => cs.featured)
    .sort((a, b) => a.order - b.order);
}

export function getAllCaseStudies(): CaseStudy[] {
  return [...caseStudies].sort((a, b) => a.order - b.order);
}
