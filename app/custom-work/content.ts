// Interactive rate card content for /custom-work.
// Source of truth: docs/custom-work-page.md
//
// OPEN ITEMS (needs Britton sign-off before this is fully client-ready):
//   1. Design prices ($1,500 / $4,000) are Britton's working numbers, still being finalized.
//   2. Marketing plan deliverables (per-plan checklists) are drafted to standard SEO-retainer
//      practice, not yet confirmed.
//   3. Content Creation per-type starting prices are drafts, not confirmed.

export interface Offer {
  name: string;
  price: string;
  priceNote?: string;
  desc: string;
  tagline?: string;
  includes?: string[];
  bestFor?: string;
  note?: string;
  rangeAnchors?: { low: string; high: string };
  financing?: string;
}

export interface PriceGroup {
  title?: string;
  offers: Offer[];
  note?: string;
}

export interface ListBlock {
  label: string;
  items: string[];
}

export interface IconCard {
  icon?: string;
  title: string;
  desc: string;
  note?: string;
}

export interface CardGroup {
  label?: string;
  cards: IconCard[];
  threeUp?: boolean;
}

// A scoped, editorial example (Photo & Video projects, Custom Package engagements).
export interface Scenario {
  title: string;
  subtitle?: string;
  base?: string;
  deliverables?: string[];
  why?: string;
  summary?: string;
}

export interface ScenarioGroup {
  label?: string;
  intro?: string;
  scenarios: Scenario[];
  threeUp?: boolean;
}

export interface BuildingBlockTable {
  label?: string;
  intro?: string;
  columns: [string, string, string];
  rows: Array<[string, string, string]>;
}

export interface StepGroup {
  label?: string;
  steps: Array<{ title: string; desc: string }>;
  threeUp?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  initials: string;
  image: string;
}

export interface RateTab {
  id: string;
  label: string;
  lead: string;
  empac?: boolean;
  empacLabel?: string;
  priceGroups?: PriceGroup[];
  buildingBlocks?: BuildingBlockTable;
  cardGroups?: CardGroup[];
  scenarioGroups?: ScenarioGroup[];
  stepGroup?: StepGroup;
  lists?: ListBlock[];
  note?: string;
}

// Shared client testimonials (same source as the Office Hours / Work With Me pages).
const testimonials: Record<string, Testimonial> = {
  patel: {
    quote:
      "They built an amazing website and I continuously get great feedback from my colleagues and patients. The referrals have been coming in, and that's a testament to what they built for me. If you need a website or need your site updated, this is the way to go.",
    author: "Dr. Tarak Patel",
    role: "Double Board-Certified Plastic Surgeon",
    initials: "TP",
    image:
      "https://cdn.empac.co/main/assets/images/work-samples/dr-patel/dr-patel-headshot.avif",
  },
  iyengar: {
    quote:
      "They created a beautiful, modern website that truly reflects our vision and the level of care we provide to patients. We've received so many compliments on how professional and polished it looks. I'd highly recommend them to any practice looking for creative, responsive, results-driven work.",
    author: "Raj & Sneha Iyengar",
    role: "Iyengar Plastic Surgery",
    initials: "RS",
    image:
      "https://cdn.empac.co/main/assets/images/work-samples/dr-iyengar/raj-and-sneha-iyengar.jpg",
  },
  consiglieri: {
    quote:
      "They restructured and redesigned our website to a more professional, modern feel. Collaborative in the design process, efficient with reviews, and they delivered a final product at an incredibly high standard.",
    author: "Chris Noble",
    role: "Founder & Head of Operations, Consiglieri",
    initials: "CN",
    image:
      "https://cdn.empac.co/main/assets/images/work-samples/consiglieri/chris-noble.avif",
  },
};

// Shown in the shared "Previous projects" section below the tabs.
export const proofTestimonials: Testimonial[] = [
  testimonials.patel,
  testimonials.iyengar,
  testimonials.consiglieri,
];

export const rateTabs: RateTab[] = [
  {
    id: "design",
    label: "Design",
    lead: "Interface and brand work based on CascadeDS, my own design system. You're paying for a system that stays consistent as your product grows, and is always updated with the latest and greatest features.",
    priceGroups: [
      {
        offers: [
          {
            name: "Design Sprint",
            price: "$1,500",
            priceNote: "starting",
            desc: "A focused engagement to design a specific flow, page, or feature. Wireframes through polished UI, delivered in Figma and ready to build.",
          },
          {
            name: "Design System",
            price: "$3,000",
            priceNote: "starting",
            desc: "A token-based system for your product: components, typography, color, and the documentation your team needs to use it. Built to scale, and built to last.",
          },
        ],
      },
    ],
    cardGroups: [
      {
        label: "Example project types",
        cards: [
          {
            icon: "device-desktop",
            title: "Booking & checkout flows",
            desc: "Wireframes through polished UI, delivered as a clickable Figma prototype.",
          },
          {
            icon: "stack-2",
            title: "Component libraries",
            desc: "A reusable UI kit so every new page your team ships looks like it belongs.",
          },
          {
            icon: "palette",
            title: "Brand & interface refresh",
            desc: "Dragging a dated site into something modern that earns trust.",
          },
          {
            icon: "layout-grid",
            title: "Marketing & landing pages",
            desc: "High-converting landing and campaign pages, designed to earn the click.",
          },
          {
            icon: "layout-dashboard",
            title: "Product & app UI",
            desc: "Data-dense product interfaces that stay usable as the feature list grows.",
          },
          {
            icon: "search",
            title: "Design & UX audit",
            desc: "A structured teardown of an existing product, with prioritized fixes to ship.",
          },
          {
            icon: "photo",
            title: "Digital ad & social creative",
            desc: "Display ads, social graphics, and web banners, designed for screens and export-ready.",
          },
        ],
      },
    ],
    note: "Quick note: Design is most often folded into a Custom Development or Custom Website project, where it's scoped as part of the whole solution. This is purely for standalone design work if you already have a developer lined up.",
  },
  {
    id: "custom-development",
    label: "Custom Development",
    lead: "Full-stack builds for any type of business. Whether we're building with a CMS like Wordpress or Webflow, or there's a need for React, Next.js, and something with a little more power. This service is for building applications and websites that require more than your usual template.",
    priceGroups: [
      {
        offers: [
          {
            name: "Component Builds",
            price: "$1,000",
            priceNote: "starting",
            desc: "A focused, single-purpose build: a calculator, a booking widget, a portal module, or something to support your business and marketing objectives.",
          },
          {
            name: "Custom Website",
            price: "$5,000",
            priceNote: "starting",
            desc: "A custom marketing site built to solve your business and marketing problems. The work centers around your sales and marketing objectives so your website earns its keep.",
          },
          {
            name: "Custom Application",
            price: "$10k",
            priceNote: "starting",
            desc: "A full application with multiple features, auth, dashboards, and data. This service is for businesses that are ready to bring their digital operations in-house and break free from pesky SaaS subscriptions.",
          },
          {
            name: "Infrastructure Management",
            price: "$50–150",
            priceNote: "/mo starting",
            desc: "Hosting, monitoring, and upkeep for what I build. All billed at the actual usage on a monthly basis.",
          },
        ]
      },
    ],
    cardGroups: [
      {
        label: "Example project types",
        cards: [
          {
            icon: "calculator",
            title: "Quote calculators",
            desc: "Tools that turn estimates into booked jobs, like the oil tank calculator that became a lead engine.",
          },
          {
            icon: "user-check",
            title: "Self-serve pricing tools",
            desc: "Interactive calculators that let customers qualify themselves before they ever reach sales.",
          },
          {
            icon: "users",
            title: "Two-sided marketplaces",
            desc: "Platforms with dashboards, auth, and real-time chat between both sides.",
          },
          {
            icon: "lock",
            title: "Operations platforms",
            desc: "Retainer and workflow tools with role-based access and encrypted credential storage.",
          },
          {
            icon: "login",
            title: "Customer portals",
            desc: "A login where clients see their account, documents, and status instead of emailing you.",
          },
          {
            icon: "layout-dashboard",
            title: "Internal admin tools",
            desc: "Custom dashboards that retire the spreadsheet-and-manual process your team has outgrown.",
          },
          {
            icon: "bolt",
            title: "High-traffic campaigns",
            desc: "Launch sites and sweepstakes engineered to stay up the moment the spot airs.",
          },
          {
            icon: "calendar",
            title: "Booking & scheduling",
            desc: "Calendar-based booking wired to payments, reminders, and your real availability.",
          },
          {
            icon: "credit-card",
            title: "Membership & subscriptions",
            desc: "Gated content, member accounts, and recurring billing through Stripe.",
          },
          {
            icon: "chart-bar",
            title: "Data dashboards & reporting",
            desc: "Your own business data turned into dashboards and reports the team actually checks.",
          },
          {
            icon: "sparkles",
            title: "AI-powered tools",
            desc: "Chatbots, content tools, and assistants built on your data, not a generic wrapper.",
          },
        ],
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing & Optimization",
    lead: "Recurring engagements meant to compound results. SEO and analytics are included in every plan. On top of that, we rotate through different marketing focus areas for what your business needs every quarter.",
    priceGroups: [
      {
        title: "Optimization Plans",
        offers: [
          {
            name: "Maintenance",
            price: "$500",
            priceNote: "/mo",
            desc: "Keep the lights on.",
            note: "This plan keeps an existing site healthy and running... it doesn't produce content. For content on a monthly cadence, see the Content Creation tab.",
            includes: [
              "Uptime, security, and performance monitoring",
              "Analytics and conversion tracking (GA4 and Plausible)",
              "Software and plugin updates",
              "Broken-link and error checks",
              "Monthly health summary",
            ],
          },
          {
            name: "Essentials",
            price: "$1,000",
            priceNote: "/mo",
            desc: "Baseline plus steady groundwork.",
            includes: [
              "Everything in Maintenance, plus:",
              "Technical SEO upkeep: schema, sitemaps, on-page fixes",
              "Keyword rank tracking",
              "Monthly optimization of existing pages",
              "Google Business Profile monitoring",
            ],
          },
          {
            name: "Optimize",
            price: "$2,000",
            priceNote: "/mo",
            desc: "Full SEO, plus one area we actively push.",
            includes: [
              "Everything in Essentials, plus:",
              "Full SEO program: technical, on-page, and content strategy",
              "Monthly keyword and content plan",
              "Competitor monitoring",
              "Monthly reporting call",
              "1 rotating focus area",
            ],
          },
          {
            name: "Growth",
            price: "$4,000",
            priceNote: "/mo",
            desc: "Two fronts moving at once.",
            includes: [
              "Everything in Optimize, plus:",
              "2 rotating focus areas",
              "Biweekly check-ins",
              "Expanded reporting and attribution",
            ],
          },
          {
            name: "Partner",
            price: "$6,000",
            priceNote: "/mo",
            desc: "Full-funnel, all in.",
            includes: [
              "Everything in Growth, plus:",
              "3 rotating focus areas",
              "Priority turnaround",
              "Quarterly strategy and roadmap session",
            ],
          },
        ],
      },
    ],
    cardGroups: [
      {
        label: "Focus areas we rotate through",
        cards: [
          {
            icon: "pencil",
            title: "Content Marketing",
            desc: "A content strategy for your business: what to write, which topics will actually rank, and what should be running across each of your touchpoints to bring in qualified traffic.",
            note: "This is primarily the strategy and direction. If you want me to write and produce the content for you too, that lives on the Content Creation and Photo & Video tabs.",
          },
          {
            icon: "map-pin",
            title: "Local SEO",
            desc: "Google Business Profile, the map pack, and citations, so you show up where you operate.",
          },
          {
            icon: "currency-dollar",
            title: "Paid Ads",
            desc: "Google and Meta campaigns, built and managed. Ad spend billed separately.",
          },
          {
            icon: "share",
            title: "Social Media",
            desc: "Organic content and presence on the channels your audience actually uses.",
          },
          {
            icon: "mail",
            title: "Email Marketing",
            desc: "Newsletters, automations, and lifecycle campaigns that bring people back.",
          },
          {
            icon: "git-branch",
            title: "Marketing Automation & CRM",
            desc: "Lead-nurture workflows and CRM integrations that follow up so you don't have to.",
          },
          {
            icon: "filter",
            title: "Conversion Rate Optimization",
            desc: "Using the analytics we already track to A/B test and rework landing pages, turning more of your existing traffic into customers.",
          },
        ],
      },
    ],
    note: "The lower tiers keep things healthy and running. The real momentum starts at Optimize and up, where we're actively pushing on something specific every month instead of just maintaining. SEO and analytics run under every plan; the focus areas are where we go deep, rotating to match what your business needs that quarter.",
  },
  {
    id: "content-creation",
    label: "Content Creation",
    lead: "Focused content, produced on a quarterly rhythm. Each quarter concentrates on one priority, whether that's a channel, a campaign, or a story you're trying to tell. Pick the plan that matches how much ground you want to cover.",
    priceGroups: [
      {
        title: "Monthly plans",
        offers: [
          {
            name: "Single",
            price: "$500",
            priceNote: "/mo",
            desc: "One content stream, one quarterly focus.",
            includes: [
              "2 blog posts or articles per month",
              "Light social repurposing (up to 4 posts)",
              "Quarterly focus planning",
              "2 revision rounds per piece",
            ],
            bestFor:
              "A business that wants to show up consistently in one place and do it well, rather than spread thin.",
          },
          {
            name: "Duo",
            price: "$1,000",
            priceNote: "/mo",
            desc: "Two coordinated streams working together.",
            includes: [
              "4 blog posts or articles per month",
              "Social content across 2 channels (8–10 posts)",
              "1 email campaign per month",
              "Quarterly focus planning + content calendar",
              "2 revision rounds per piece",
            ],
            bestFor:
              "Most established businesses. It's usually enough to build momentum across the channels that matter most to your business, and all coordinated around one quarterly goal.",
          },
          {
            name: "Studio",
            price: "$1,500",
            priceNote: "/mo",
            desc: "A full content engine pointed in one direction.",
            includes: [
              "6 articles per month",
              "Multi-channel social (up to 16 posts)",
              "2 email campaigns per month",
              "Ongoing copy support (landing sections, CTAs, headlines)",
              "Quarterly strategy + content calendar",
              "2 revision rounds per piece",
            ],
            bestFor:
              "A business ready to treat content as a growth channel and wants a steady, strategic engine behind it.",
          },
        ],
        note: "Every plan is month-to-month, with two revision rounds on every piece. Original photography and video run through Visual Empac and are scoped separately when a plan calls for them. See the Photo & Video tab for more details.",
      },
    ],
    cardGroups: [
      {
        label: "How the quarterly focus works",
        cards: [
          {
            icon: "target",
            title: "We set the priority",
            desc: "At the start of each quarter, we pick one thing together: the channel, campaign, or story that gets the attention.",
          },
          {
            icon: "filter",
            title: "Everything points there",
            desc: "Every piece that quarter pulls in that direction, so three months of work builds one clear story instead of a scattered feed.",
          },
          {
            icon: "refresh",
            title: "Then we move",
            desc: "Next quarter, we point it somewhere new if it's time to move on to the next goal.",
          },
        ],
      },
    ],
    note: "Content Creation builds the words and the cadence, while Marketing & Optimization distributes and ranks them. Many businesses run with both services since they're complementary to one another. See the Custom Package tab for how they come together.",
  },
  {
    id: "photo-video",
    label: "Photo & Video",
    lead: "Original photography and video, produced for the way your business will use it, whether it's to sell a product, explain a service, or build brand recognition.",
    scenarioGroups: [
      {
        label: "What realistic projects look like",
        intro: "Every project starts with a production base, which is the shoot itself. This includes planning, setup, shooting time, visual direction, and editing. From there, we add channel deliverables which include the specific cuts, formats, and edits each place you publish will need.",
        scenarios: [
          {
            title: "Launching a product line?",
            subtitle:
              "A retailer or maker introducing a product that needs to look its best everywhere at once.",
            base: "Studio product shoot. It's a clean, consistent way to capture everything we need to.",
            deliverables: [
              "E-commerce set: white-background stills, multiple angles per SKU",
              "Lifestyle set: products in context, for the homepage and category pages",
              "Social cutdowns: vertical crops and detail shots for the feed",
              "One short hero video: the line in motion for the landing page",
            ],
            why: "One shoot day feeds the store, the site, and social.",
          },
          {
            title: "Trying to surface the work you've already done?",
            subtitle:
              "An established firm whose best marketing is proof of completed projects. The credibility is there, but it's invisible to the outside world.",
            base: "On-site shoot at a finished project or active job. Let's make the world learn about what you do.",
            deliverables: [
              "Project photo set: the finished work, shot to look as good as it is",
              "Case-study video: a 60–90 second story of the project, for the website",
              "Social clips: short vertical cuts pulled from the same footage",
              "Stills for a written case study: anchoring the story on the page",
            ],
            why: "The work already happened, which already makes it discoverable. One visit turns a completed job into a photo set, a video, and a feed's worth of proof.",
          },
          {
            title: "Trying to put a face to your business?",
            subtitle:
              "A business that competes on trust and wants to look like the real, capable operation it is.",
            base: "Half-day on-location shoot with the team, the space, and the day-to-day lowdown.",
            deliverables: [
              "Team portraits: keep it consistent and professional (with maybe a little fun)",
              "Environmental brand photos: the space and the work in progress",
              "A short brand video: who you are, for the homepage or About page",
              "Social-ready stills: a bank of images to draw from for months",
            ],
            why: "Trust-based businesses live or die on looking legitimate. A half day builds a reusable library, so the next quarter of content isn't starting from stock photos.",
          },
          {
            title: "Need a steady stream of fresh assets?",
            subtitle:
              "A business that publishes constantly and can't run a new shoot every time.",
            base: "An ongoing production arrangement with a recurring, monthly shooting cadence.",
            deliverables: [
              "Original photo and video flowing on a regular schedule",
              "Feeds your website, social, and campaigns without renegotiating scope each time",
              "Sized to how fast you publish",
            ],
            why: "Ideal when a content subscription is producing steadily and needs original visuals to match the pace.",
          },
        ],
      },
    ],
    note: "Pricing is scoped per project. The examples above show realistic shapes for how the work will get done. When these assets feed an ongoing content effort, they pair directly with a Content Creation plan so the visuals and the words ship together. See the Custom Package tab for how production and content assemble into one engagement.",
  },
  {
    id: "custom-package",
    label: "Custom Package",
    lead: "Most businesses don't need one service, they need a few working together to create an amazing marketing system. The Custom Package is how everything I offer comes together, scoped to what you're actually trying to do.",
    buildingBlocks: {
      label: "The building blocks",
      intro: "Everything I offer (through Empac) is modular. You assemble the pieces you need:",
      columns: ["Building block", "What it delivers", "Where it's priced"],
      rows: [
        [
          "Content Creation",
          "Ongoing written content including articles, social, email, and copy on a quarterly focus",
          "Subscription, from $500/mo",
        ],
        [
          "Photo & Video",
          "Original production whether it's for products, specific projects, branding, and ongoing shoots",
          "Scoped per project, via Visual Empac",
        ],
        [
          "Design",
          "Interface, brand, and digital design, from a single screen to a full design system",
          "Project, from $1,500",
        ],
        [
          "Custom Website",
          "Complete site builds and rebuilds designed to support your sales and marketing goals",
          "Project, from $5,000",
        ],
        [
          "Custom Development",
          "Custom tooling, calculators, and systems",
          "Project, from $1,000",
        ],
        [
          "Marketing & Optimization",
          "SEO, performance, and conversion complete with distribution and ranking",
          "Subscription, from $500/mo",
        ],
      ],
    },
    cardGroups: [
      {
        label: "How the pieces work together",
        threeUp: true,
        cards: [
          {
            title: "Photo & Video → Content Creation",
            desc: "Great content needs something real to show. A project shoot becomes a case study, product photos anchor a campaign, and a brand video carries your launch.",
          },
          {
            title: "Content Creation → Marketing & Optimization",
            desc: "Content creates the material; optimization gets people to it. One tells your story, the other puts it in front of the right people and turns readers into leads.",
          },
          {
            title: "Websites & Development → everything",
            desc: "Your site or app is the foundation everything else lives on. And a custom tool, like a calculator, pulls double duty as both content and a way to turn visitors into customers.",
          },
        ],
      },
    ],
    scenarioGroups: [
      {
        label: "What a combined engagement can look like",
        intro: "Illustrative shapes — every real engagement is scoped to the specific business.",
        threeUp: true,
        scenarios: [
          {
            title: "The credibility engine",
            subtitle: "For an established business whose best work is invisible.",
            deliverables: [
              "Photo & Video: shoots that surface completed projects and finished work",
              "Content Creation (a mid or full plan — Duo or Studio): case studies and articles built around that work",
              "Marketing & Optimization: making the case studies discoverable in search",
            ],
            summary:
              "Production creates the proof, content tells the story, optimization makes it findable.",
          },
          {
            title: "The launch",
            subtitle: "For a business introducing a product, service, or location.",
            deliverables: [
              "Custom Website: a foundation built to convert",
              "Photo & Video: the assets that make the launch look the part",
              "Content Creation: a quarter of content focused entirely on the launch",
            ],
            summary:
              "Everything points at one moment, then the content engine keeps momentum after launch day.",
          },
          {
            title: "The steady operator",
            subtitle: "For an established business that wants consistent presence without managing it.",
            deliverables: [
              "Content Creation (Duo): reliable monthly content on a quarterly rhythm",
              "Photo & Video (ongoing): a steady cadence of fresh visuals to match",
              "Marketing & Optimization (Maintenance or Essentials): keeping the site healthy and ranking",
            ],
            summary:
              "A quiet, compounding presence — the business shows up consistently and looks the part, month after month.",
          },
        ],
      },
    ],
    stepGroup: {
      label: "How we scope it",
      threeUp: true,
      steps: [
        {
          title: "Start with the goal",
          desc: "What are you trying to move: more recognition, a big launch, steady growth? Your goal decides which pieces we bring in.",
        },
        {
          title: "Assemble the blocks",
          desc: "We only bring in what actually serves that goal. Nothing padded on just to make the number bigger.",
        },
        {
          title: "Scope the engagement",
          desc: "One clear proposal, one relationship, and one point of contact across every piece of the work.",
        },
      ],
    },
    note: "You get the whole picture in one place, priced as a single engagement, instead of juggling separate vendors for content, production, and your website.",
  },
];
