import type { CaseStudy } from "./index";

export const olympicEnergyCalculator: CaseStudy = {
  slug: "olympic-energy-calculator",
  title: "Oil Tank Calculator",
  client: "Olympic Energy",
  voice: "product",
  year: "Late 2024",
  role: "Sole Designer & Developer",
  order: 7,
  headline: "15% bounce rate reduction, 2nd most visited page on the site",
  heroImage: "https://cdn.empac.co/portfolio/images/oe-tank-calc-example-thumb.jpg",
  liveUrl: "https://www.olympicenergy.net/heating-oil-tank-calculator",
  videoUrl: "https://cdn.empac.co/portfolio/video/oe-oil-tank-calculator-example.mp4",
  stats: [
    { stat: "15%", label: "Bounce rate reduction" },
    { stat: "#2", label: "Most visited page on the site" },
    { stat: "3x", label: "Engagement rate increase" },
  ],
  techStack: ["HTML", "CSS", "Vanilla JavaScript"],
  timeline: "Built and launched late 2024",
  teamSize: "Solo",
  problem:
    "Olympic Energy is a heating oil company in the Pacific Northwest. Their staff was consistently bombarded with calls from customers trying to figure out how much oil was left in their tank. Customers didn't have an easy way to calculate their remaining supply, and some were running out of heating oil entirely because they couldn't gauge when to reorder. Every call took staff time, and the friction was pushing some customers to competitors who made ordering easier.\n\nAn employee of the company worked with the owner and me to identify the core problem: customers needed a simple way to measure their tank, calculate what was left, and make an ordering decision — without picking up the phone.",
  approach:
    "The calculator is a two-step process. The first step uses a modal that walks homeowners through how to physically measure their tank — where to look, how to read the gauge, and what measurements to take. The second step takes those inputs and calculates the remaining oil volume.\n\nThe design was built mobile-first, because most customers are checking from their phone while standing next to their tank trying to read the gauge. The experience had to be dead simple — no account creation, no unnecessary steps, just the answer.\n\nLike the T-Mobile calculator, this was built with HTML, CSS, and Vanilla JavaScript — no frameworks. The tool needed to be lightweight, fast-loading, and easy to embed into the existing site without introducing dependencies that would complicate maintenance for a small business.",
  result:
    "15% reduction in bounce rate across the website after the calculator launched. 2nd most visited page on the site — an interactive tool outranking most static content pages. Over half of visits come from Google, meaning the calculator is driving organic search traffic the site never had before. Engagement rate boosted from 5-10% to 15-20% site-wide. Currently maintained via an ongoing monthly retainer.",
  challenges: [
    "Designing a measurement flow that works for homeowners who have never looked at their oil tank gauge before",
    "Building a mobile-first experience for a use case that literally happens while standing next to the tank",
    "Keeping the tool lightweight and dependency-free for a small business website",
  ],
};
