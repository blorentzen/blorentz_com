import type { CaseStudy } from "./index";

export const drPatelRedesign: CaseStudy = {
  slug: "dr-patel-redesign",
  title: "Custom Website Build",
  client: "Dr. Tarak Patel",
  voice: "build",
  year: "2023 – 2024",
  role: "Sole Designer and Developer",
  order: 3,
  headline: "200+ consult inquiries, $500K+ revenue in Year 1.",
  heroImage: "https://cdn.empac.co/portfolio/images/dr-patel-example-thumb.jpg",
  videoUrl: "https://cdn.empac.co/main/assets/video/tarakpatel-website-preview.mp4",
  stats: [
    { stat: "$500K+", label: "Additional revenue in Year 1" },
    { stat: "200+", label: "Consultation inquiries" },
    { stat: "4,200+", label: "Unique visitors" },
    { stat: "22.6%", label: "Engagement rate" },
  ],
  techStack: ["EmpacJS", "HTML", "CSS", "Vanilla JavaScript", "Plausible Analytics"],
  timeline: "Mid-to-late 2023 (launched) → late 2024 (handed off to new agency).",
  teamSize: "Solo.",
  problem:
    "Dr. Tarak Patel is a double board-certified plastic surgeon in the Pacific Northwest. His problem was multi-faceted: people calling the practice he worked at were being routed to other plastic surgeons instead of him — even when their intention was to work with Dr. Patel directly. The practice's internal call routing wasn't funneling prospective patients to the right surgeon, so he was losing consultations he should have been getting. On top of that, he didn't have a website he could call his own. Without a personal digital presence, there was no way for prospects to bypass the practice's broken funnel and come to him directly.\n\nIn elective procedures, the website is essentially the first consultation. Patients look at credentials, before-and-afters, and reviews before they'll even pick up the phone. Without his own site, every prospect went through the practice... where the routing problem kept costing him business.",
  approach:
    "Ground-up custom build. The whole point was giving Dr. Patel a direct channel to patients that bypassed the practice's broken routing.\n\nThe core idea was tracking how prospects actually behave when they're researching plastic surgery. To do this, I built the testimonial and gallery pages as interactive modules that tracked what users were filtering, which cases they were viewing, and how they navigated between procedures. This gave us real behavioral data to refine the experience over time.\n\nI also built lightweight personalization using JS web components and URL parameters. Once the user visits a procedure page, they'll find themselves on the gallery with pre-filtered results. The fact the site remembered what they were looking at helped drive an increase in conversions.\n\nThe entire build used EmpacJS, a predecessor to CascadeDS — all HTML, CSS, and Vanilla JavaScript. I configured Plausible analytics to track events, conversions, and the full user journey so we could continuously refine the experience based on real data.",
  result:
    "First year after launch:\n\n4,200+ unique visitors (1,800+ from Google). 22.6% engagement rate on the interactive modules. 200+ consultation inquiries across phone, email, and forms. An estimated $500K+ in revenue from the new site.\n\nDr. Patel was eventually recruited by a practice in Bellevue... where the site got handed to their agency of record, and they're still using it to this day.",
  testimonial: {
    quote:
      "Finding Empac and deciding to move forward with their team for my website design and maintenance was the best decision. They built an amazing website and I continuously get great feedback from my colleagues and patients! The referrals have been coming in and that is a testament to what they have built for me. Their team is always available and receptive to updates and changes needed!! If you need a website or need your site updated, Empac is the way to go. No regrets.",
    author: "Dr. Tarak Patel",
    role: "Double Board-Certified Plastic Surgeon",
  },
  challenges: [
    "Building personalization without a server-side framework — using client-side JS web components and URL parameters to create a guided prospect journey",
    "Designing interactive gallery and testimonial modules that generated trackable behavioral data while feeling natural to patients",
    "Creating a digital presence credible enough for a double board-certified surgeon — every detail had to communicate expertise and trust",
  ],
};
