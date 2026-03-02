import type { CaseStudy } from "./index";

export const drPatelRedesign: CaseStudy = {
  slug: "dr-patel-redesign",
  title: "Custom Website Build",
  client: "Dr. Tarak Patel",
  voice: "build",
  year: "2023 – 2024",
  role: "Sole Designer and Developer",
  order: 3,
  headline: "200+ consult inquiries, $500K+ revenue in Year 1",
  heroImage: "https://cdn.empac.co/portfolio/images/dr-patel-example-thumb.jpg",
  videoUrl: "https://cdn.empac.co/main/assets/video/tarakpatel-website-preview.mp4",
  stats: [
    { stat: "$500K+", label: "Additional revenue in Year 1" },
    { stat: "200+", label: "Consultation inquiries" },
    { stat: "4,200+", label: "Unique visitors" },
    { stat: "22.6%", label: "Engagement rate" },
  ],
  techStack: ["EmpacJS", "HTML", "CSS", "Vanilla JavaScript", "Plausible Analytics"],
  timeline: "Mid-to-late 2023 (launched) → late 2024 (handed off to new agency)",
  teamSize: "Solo",
  problem:
    "Dr. Tarak Patel is a double board-certified plastic surgeon in the Pacific Northwest. His problem was multi-faceted: people calling the practice he worked at were being routed to other plastic surgeons instead of him — even when their intention was to work with Dr. Patel directly. The practice's internal call routing wasn't funneling prospective patients to the right surgeon, so he was losing consultations he should have been getting. On top of that, he didn't have a website he could call his own. Without a personal digital presence, there was no way for prospects to bypass the practice's broken funnel and come to him directly.\n\nIn elective medical procedures, the website IS the first impression. Patients research extensively — looking at credentials, before-and-after galleries, reviews from other patients — before they'll even consider booking a consultation. Without a site that built confidence and showcased his work, Dr. Patel had no direct channel to the patients who were actively looking for what he offered. Every prospect had to go through the practice, where the routing problem was costing him business.",
  approach:
    "This was a ground-up custom build — creating an entirely new digital presence from scratch that gave Dr. Patel a direct channel to prospective patients, bypassing the practice's broken routing entirely.\n\nThe strategy centered on tracking and understanding how prospects actually behave when researching plastic surgery. To do this, I built the testimonial and gallery pages as interactive modules that tracked what users were filtering, which cases they were viewing, and how they navigated between procedures. This gave us real behavioral data to refine the experience over time.\n\nI also built a lightweight version of personalization using JavaScript web components and URL parameters. When a prospect visited a procedure page and then navigated to the gallery or testimonials, the results were pre-filtered to show relevant content for the procedure they'd been researching. This created a guided journey — the site anticipated what the prospect wanted to see next.\n\nThe entire build used EmpacJS, a predecessor to CascadeDS — all HTML, CSS, and Vanilla JavaScript. I configured Plausible analytics to track events, conversions, and the full user journey so we could continuously refine the experience based on real data.",
  result:
    "Within the first year of the website going live:\n\n4,200+ unique visitors, with 1,800+ coming from Google Search. 22.6% engagement rate from the custom interactive modules. 200+ consultation inquiries via phone call, email, and form submissions. $500K+ estimated revenue realized from the new digital presence. The website is still in use today, now maintained by another agency after Dr. Patel was recruited by a practice in Bellevue.",
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
