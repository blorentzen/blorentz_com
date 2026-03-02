import type { CaseStudy } from "./index";

export const tmobileSavingsCalculator: CaseStudy = {
  slug: "tmobile-savings-calculator",
  title: "Savings Calculator",
  client: "T-Mobile",
  voice: "product",
  year: "2022 – Present",
  role: "Lead Designer, Lead Developer, Product Owner",
  order: 1,
  headline: "50% lift in shop-to-cart rate. Featured in national TV spots.",
  heroImage: "https://cdn.empac.co/portfolio/images/savings-calc-example-thumb.jpg",
  liveUrl: "https://www.t-mobile.com/cell-phone-plans",
  videoUrl: "https://cdn.empac.co/portfolio/video/tmo-savings-calc-example.mp4",
  stats: [
    { stat: "50%", label: "Lift in shop-to-cart rate" },
    { stat: "28%", label: "Lift in shop-to-order rate" },
    { stat: "National TV", label: "Featured in broadcast spots" },
  ],
  techStack: ["HTML", "CSS", "Vanilla JavaScript"],
  timeline: "Late 2022 (initial chart) → mid-2023 (calculator evolution) → 2024-2025 (full product)",
  teamSize: "Primary owner with design team collaboration",
  problem:
    "In late 2022, T-Mobile had a simple comparison chart showing pricing differences between carriers. It did the job, but it was static — a snapshot that couldn't adapt to the constantly shifting landscape of plan pricing, promotions, and competitive positioning. When a new value campaign launched in mid-2023, the business saw an opportunity to turn this static chart into something more powerful: an interactive tool that could position T-Mobile as the pricing and value leader in the marketplace.\n\nThe challenge wasn't just building a calculator. It was building a tool that could evolve — from a basic line selector, to a benefits comparison engine, to a full savings calculator that computed pricing, savings percentages, and value breakdowns — all while remaining accurate, legally compliant, and simple enough for any customer to use.",
  approach:
    "This tool didn't start with a grand plan. It started in market and evolved through real-world insights. Each iteration was informed by data from the previous version — what customers clicked, where they dropped off, what questions they still had after using it.\n\nThe tool went through multiple phases: first a line selector and basic comparison view, then a benefits comparison showing what's included at T-Mobile versus what you pay extra for at Verizon and AT&T, and eventually a full calculator that computes actual savings percentages and dollar amounts based on a prospect's current plan.\n\nSince the calculator displays competitor data, all pricing and plan information lives in a JavaScript object maintained on the front end — a deliberate architectural decision driven by the regulatory requirement to control exactly what's displayed and update it quickly when plans change or legal flags something.\n\nOne of the biggest ongoing challenges was satisfying regulators and legal. Displaying competitor pricing comparisons required careful sourcing, constant updates, and multiple rounds of review. The calculator had to be accurate not just for marketing — it had to hold up under regulatory scrutiny.\n\nDue to the limitations of T-Mobile's CMS platform (Adobe Experience Manager) and the access constraints the team operates under, the entire tool was built with HTML, CSS, and Vanilla JavaScript — no frameworks. Everything was handwritten.\n\nOver time, the calculator grew beyond a single-use module. It became a dynamic placement that showcases the total value — benefits, perks, and pricing — that customers get when they sign up for a particular plan. The module now lives on the How to Switch page, the Plans page, and is deployed across multiple savings and value campaigns in constant advertising rotation. It's one of the only web modules in T-Mobile's history to be featured in a nationally broadcast TV commercial — including spots with the cast of Suits and Snoop Dogg.\n\nI served as lead designer, lead developer, and effectively became the product owner of this tool — attending meetings with senior leadership to build and maintain the product roadmap.",
  result:
    "The metrics that turned the calculator into the centerpiece of T-Mobile's current advertising strategy:\n\n50% lift quarter-over-quarter in shop traffic to cart start rate (28.94% → 43.42%). 28% lift quarter-over-quarter in shop traffic to order rate (1.07% → 1.37%). Both metrics attributed to prospects who used the calculator before continuing down the funnel. Featured in nationally broadcast TV commercial spots (Suits cast, Snoop Dogg). Deployed across multiple pages and advertising campaigns in constant rotation. One of the only web modules to ever appear in a T-Mobile broadcast commercial.",
  challenges: [
    "Regulatory and legal compliance for displaying competitor pricing data — required constant updates and review cycles",
    "Building within AEM's constraints with limited CMS access — everything handwritten in HTML/CSS/JS",
    "Evolving the tool through multiple iterations while keeping it live and accurate in market",
    "Managing the transition from simple comparison chart to full interactive product with its own roadmap and senior leadership stakeholder meetings",
  ],
};
