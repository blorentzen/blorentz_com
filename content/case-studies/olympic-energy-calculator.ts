import type { CaseStudy } from "./index";

export const olympicEnergyCalculator: CaseStudy = {
  slug: "olympic-energy-calculator",
  title: "Oil Tank Calculator",
  client: "Olympic Energy",
  voice: "product",
  year: "Late 2024",
  role: "Sole Designer & Developer",
  order: 7,
  headline: "15% bounce rate reduction, 2nd most visited page on the site.",
  heroImage: "https://cdn.empac.co/portfolio/images/oe-tank-calc-example-thumb.jpg",
  liveUrl: "https://www.olympicenergy.net/heating-oil-tank-calculator",
  videoUrl: "https://cdn.empac.co/portfolio/video/oe-oil-tank-calculator-example.mp4",
  stats: [
    { stat: "15%", label: "Bounce rate reduction" },
    { stat: "#2", label: "Most visited page on the site" },
    { stat: "3x", label: "Engagement rate increase" },
  ],
  techStack: ["HTML", "CSS", "Vanilla JavaScript"],
  timeline: "Built and launched late 2024.",
  teamSize: "Solo.",
  problem:
    "Olympic Energy is a heating oil company in the Pacific Northwest. They were getting buried in calls from customers trying to figure out how much oil was left in their tank. Customers had no easy way to check their remaining supply. Some were running out entirely because they couldn't tell when to reorder. Every call ate staff time, and the friction was pushing people to competitors.\n\nAn employee flagged it to the owner, the owner brought me in, and we zeroed in on the problem: customers needed a way to measure their tank and figure out what's left without needing to call a rep.",
  approach:
    "The calculator is a two-step process. The first step uses a modal that walks homeowners through how to physically measure their tank: where to look, how to read the gauge, and what measurements to take. The second step takes those inputs and calculates the remaining oil volume.\n\nMobile-first, because most people are checking from their phone while standing next to the tank trying to read the gauge. Had to be dead simple: No account and no extra steps.\n\nBuilt with HTML, CSS, and Vanilla JS. Needed to be lightweight and easy to embed without adding dependencies that a small business would have to maintain.",
  result:
    "15% drop in bounce rate after launch. The calculator became the 2nd most visited page on the site, beating out every other static page besides the home page. Over half the traffic comes from Google, driving organic search the site never had before. Site-wide engagement went from 5-10% up to 15-20%.",
  challenges: [
    "Designing a measurement flow that works for homeowners who have never looked at their oil tank gauge before",
    "Building a mobile-first experience for a use case that literally happens while standing next to the tank",
    "Keeping the tool lightweight and dependency-free for a small business website",
  ],
};
