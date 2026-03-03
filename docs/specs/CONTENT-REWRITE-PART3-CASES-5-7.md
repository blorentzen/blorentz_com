# blorentz.com — Content Rewrite (Part 3: Case Studies 5–7 + Summary)

---

## SUPER BOWL (`tmobile-super-bowl.ts`)

### 9.1 — Problem

**CURRENT:**
```
There's two reasons people watch the Super Bowl: the game, or the commercials. T-Mobile typically shows up with a major commercial every year, but the digital presence usually takes a back seat. In 2022, the business wanted to change that with a parody campaign to "save the phones" featuring Miley Cyrus and Dolly Parton. The digital experience needed to match the energy and visibility of the broadcast campaign.\n\nThe challenge was building a landing page that could handle multiple live updates throughout the game. T-Mobile was running multiple ad spots during the broadcast, and each time one aired, the landing page needed to surface that new video alongside the previous spots — in real time, while tens of millions of people were watching.
```

**PROPOSED:**
```
Two reasons people watch the Super Bowl: the game, or the commercials. T-Mobile shows up with a major spot every year, but the digital side usually takes a back seat. In 2022, that changed — the "Save the Phones" campaign with Miley Cyrus and Dolly Parton needed a digital experience that matched the broadcast.\n\nThe catch: T-Mobile was running multiple spots throughout the game. Every time one aired, the landing page needed to surface that new video alongside the previous ones — live, while tens of millions of people were watching.
```

**Why:** "the business wanted to change that" → "that changed" (less corporate). "The challenge was building a landing page that could handle" → "The catch:" (gets to it faster).

### 9.2 — Approach, Opening

**CURRENT:**
```
The core design challenge was building for live updates during the game. With multiple ads scheduled throughout the broadcast, the wireframe had to ensure the page could handle bringing new videos into a playlist component without a full page rebuild. Each time a new spot aired, the video needed to slot into the experience seamlessly.
```

**PROPOSED:**
```
The whole design was built around live updates. Multiple ads were scheduled throughout the broadcast, and each time one aired, that video needed to slot into a playlist component on the page — no rebuild, no deploy.
```

**Why:** "The core design challenge was building for" → "The whole design was built around" (active voice). Third sentence restates the second — cut it.

### 9.3 — Approach, My Role

**CURRENT:**
```
I collaborated with the design team on new components and interactions, then built a high-fidelity prototype to get approval from leadership. Once signed off, I wrote all the code — components, interactions, and the overall page — prepared and shipped it to production, and worked with web operations partners on analytics tagging, code validation, accessibility compliance, and SEO requirements.
```

**PROPOSED:**
```
I worked with the design team on new components and interactions, then built a high-fidelity prototype for leadership sign-off. After that, I wrote all the code — every component, interaction, and the page itself — shipped it to production, and coordinated with web ops on analytics, accessibility, and SEO.
```

**Why:** "I collaborated with" → "I worked with" (simpler). "code validation, accessibility compliance, and SEO requirements" — the audience knows what web ops covers.

### 9.4 — Result

**CURRENT:**
```
Custom landing page built and shipped for one of T-Mobile's highest-visibility moments of the year. Page handled live updates throughout the broadcast with zero issues. New video playlist component, device and switching components, and custom animations all shipped on deadline. Coordination across design, development, web ops, analytics, and accessibility teams.
```

**PROPOSED:**
```
Shipped on time for T-Mobile's highest-visibility digital moment of the year. Live updates ran throughout the broadcast with zero issues. Video playlist, device components, switching flows, and custom animations — all delivered on deadline across design, dev, web ops, analytics, and accessibility teams.
```

**Why:** "Custom landing page built and shipped for" is passive. "Shipped on time" is direct. Last sentence was a list — grouping it makes it feel like a coordinated effort.

---

## OLYMPIC ENERGY (`olympic-energy-calculator.ts`)

### 10.1 — Problem, Opening

**CURRENT:**
```
Olympic Energy is a heating oil company in the Pacific Northwest. Their staff was consistently bombarded with calls from customers trying to figure out how much oil was left in their tank.
```

**PROPOSED:**
```
Olympic Energy is a heating oil company in the Pacific Northwest. They were getting buried in calls from customers trying to figure out how much oil was left in their tank.
```

**Why:** "consistently bombarded" → "getting buried in" — less formal, same meaning.

### 10.2 — Problem, Second Half

**CURRENT:**
```
Customers didn't have an easy way to calculate their remaining supply, and some were running out of heating oil entirely because they couldn't gauge when to reorder. Every call took staff time, and the friction was pushing some customers to competitors who made ordering easier.\n\nAn employee of the company worked with the owner and me to identify the core problem: customers needed a simple way to measure their tank, calculate what was left, and make an ordering decision — without picking up the phone.
```

**PROPOSED:**
```
Customers had no easy way to check their remaining supply. Some were running out entirely because they couldn't tell when to reorder. Every call ate staff time, and the friction was pushing people to competitors.\n\nAn employee flagged it to the owner, the owner brought me in, and we zeroed in on the problem: customers needed a way to measure their tank and figure out what's left — without calling.
```

**Why:** "An employee of the company worked with the owner and me to identify the core problem" is formal. The rewrite tells the same story with more natural pacing. "make an ordering decision" → "without calling."

### 10.3 — Approach

**CURRENT:**
```
The design was built mobile-first, because most customers are checking from their phone while standing next to their tank trying to read the gauge. The experience had to be dead simple — no account creation, no unnecessary steps, just the answer.\n\nLike the T-Mobile calculator, this was built with HTML, CSS, and Vanilla JavaScript — no frameworks. The tool needed to be lightweight, fast-loading, and easy to embed into the existing site without introducing dependencies that would complicate maintenance for a small business.
```

**PROPOSED:**
```
Mobile-first, because most people are checking from their phone while standing next to the tank trying to read the gauge. Had to be dead simple — no account, no extra steps, just the answer.\n\nBuilt with HTML, CSS, and Vanilla JS — no frameworks. Needed to be lightweight and easy to embed without adding dependencies that a small business would have to maintain.
```

**Why:** "The design was built mobile-first" → "Mobile-first" (fragment, more punchy). "Like the T-Mobile calculator" — cross-reference is unnecessary; each entry should stand on its own.

### 10.4 — Result

**CURRENT:**
```
15% reduction in bounce rate across the website after the calculator launched. 2nd most visited page on the site — an interactive tool outranking most static content pages. Over half of visits come from Google, meaning the calculator is driving organic search traffic the site never had before. Engagement rate boosted from 5-10% to 15-20% site-wide. Currently maintained via an ongoing monthly retainer.
```

**PROPOSED:**
```
15% drop in bounce rate after launch. The calculator became the 2nd most visited page on the site — beating out every static page. Over half the traffic comes from Google, driving organic search the site never had before. Site-wide engagement went from 5-10% up to 15-20%.
```

**Why:** Cut "Currently maintained via an ongoing monthly retainer" — business detail, not a result. "reduction in bounce rate across the website after the calculator launched" → "drop in bounce rate after launch."

---

## SIDECAR (`sidecar.ts`)

### 11.1 — Problem, Opening

**CURRENT:**
```
There are countless dashboards in the marketplace, and they all look the same — likely because they've been A/B tested to death until every dashboard converges on the same design. Meanwhile, retainer-based consulting is a fundamentally different operating model than project work, and most tools don't account for it.
```

**PROPOSED:**
```
Every dashboard looks the same. They've all been A/B tested into the same design. Meanwhile, retainer-based consulting is a completely different operating model than project work, and nothing out there accounts for it.
```

**Why:** "There are countless dashboards in the marketplace" → "Every dashboard looks the same" (gets to the point). "fundamentally" → "completely" — "fundamentally" is an AI tell.

### 11.2 — Problem, Second Paragraph

**CURRENT:** `The tools that exist — Asana, Monday, Basecamp...`
**PROPOSED:** Keep as-is. The parentheticals are good, the pacing is natural.

### 11.3 — Problem, Third Paragraph

**CURRENT:**
```
Sidecar is an active project to create a simple, stylish, and functional dashboard for companies that operate on rotating retainers and service packages — one that challenges the assumption that every dashboard has to look and work the same way.
```

**PROPOSED:**
```
Sidecar is what I'm building to fix it — a dashboard for companies that run on rotating retainers, built to challenge the assumption that every dashboard has to look and work the same.
```

**Why:** "an active project to create a simple, stylish, and functional dashboard" — too many adjectives. "what I'm building to fix it" connects to the problem.

### 11.4 — Approach, Feature List ⚠️ WORST OFFENDER ON THE SITE

**CURRENT:**
```
Core features include creating and managing services, packages, and rotating retainers. Creating and managing clients and additional users (for both client and vendor sides). Stripe integration for payments, tracking, and billing visibility for both parties. Real-time chat and notifications between vendor/client and within individual environments. Custom project management with a Kanban board (with Gantt chart under consideration for software-related tasks). Hour assignment, work monitoring, and workload balancing across contributors. Data and analytics at a glance — vendor performance, workload distribution, and more. Meeting and schedule management between vendor and client. A two-way file system for easy management of documents, files, and assets between vendor and client. Secure credential storage for managing sensitive information like login credentials.
```

**PROPOSED:**
```
The feature set: service and retainer management, client/user management for both sides, Stripe for payments and billing, real-time chat and notifications, Kanban boards for project tracking, hour logging and workload balancing, analytics dashboards, meeting scheduling, a two-way file system between vendor and client, and secure credential storage.
```

**Why:** The current version is 10 individual sentences pretending to be a paragraph. Most obviously AI-generated block on the site. One flowing list is more honest and more readable.

### 11.5 — Approach, Architecture

**CURRENT:**
```
To get an MVP running, we started with MongoDB as a proof of concept. Given the relational nature of all the data — clients, services, hours, billing, communications — and the security and privacy requirements, we migrated everything to Supabase (PostgreSQL with Row Level Security and built-in auth). This ensured proper data isolation between clients and met the security protocols required for handling sensitive business information.
```

**PROPOSED:**
```
Started with MongoDB for the proof of concept, but the data is deeply relational — clients, services, hours, billing, communications all reference each other. Migrated to Supabase (Postgres with Row Level Security and built-in auth) for proper data isolation and security.
```

**Why:** "To get an MVP running, we started with" → "Started with." "This ensured proper data isolation between clients and met the security protocols required for handling sensitive business information" → "for proper data isolation and security."

### 11.6 — Approach, Social + Learning

**CURRENT:**
```
Work is naturally social. Sidecar bakes in real-time communication alongside the work itself — chat, notifications, and collaboration features — so teams can switch between "I'm working right now" and "I need to reach out to someone" without jumping to Slack or Teams.\n\nThis is also the biggest venture into properly configuring a complete application — from authentication to data modeling, real-time features, payment integration, and file management. Building the best possible experience means learning in public and testing assumptions before launch.
```

**PROPOSED:**
```
Work is social. Sidecar has real-time chat and notifications built in — no jumping to Slack or Teams when you need to reach someone.\n\nThis is also the deepest I've gone into building a complete application: auth, data modeling, real-time features, payments, file management. I'm learning a lot of it as I go, which is the point.
```

**Why:** "Work is naturally social" → "Work is social." "Building the best possible experience means learning in public and testing assumptions before launch" → "I'm learning a lot of it as I go, which is the point" — more honest, more Britton.

### 11.7 — Result

**CURRENT:**
```
Before this project goes live, it needs to go through proper usability testing and a study to validate whether this is something others would want to use. The immediate goal is getting Sidecar to a state where it fully manages Empac's retainer operations. Once it's stable and battle-tested on real work, the longer play is exploring whether other solo operators and small consultancies would benefit from the same tool.
```

**PROPOSED:**
```
Not live yet. The plan is to get Sidecar managing Empac's own retainer operations first, then run usability testing before opening it up. If it works for me, the question is whether other solo operators and small consultancies would want it too.
```

**Why:** "Before this project goes live, it needs to go through proper usability testing and a study to validate" is a 30-word hedge. "Not live yet" does the job.

---
---

## SUMMARY

| File | # Changes | Priority |
|------|-----------|----------|
| Homepage | 1 (hero tagline) | HIGH — most visible text |
| About | 6 (mostly tightening) | MEDIUM — story is solid |
| Work Index | 1 (subtitle) | LOW |
| Colophon | 0 | Already clean |
| Savings Calculator | 7 | HIGH — longest, most AI patterns |
| FN5GL | 5 | MEDIUM |
| Dr. Patel | 4 | MEDIUM |
| CascadeDS | 5 | MEDIUM — architecture section is clean |
| Super Bowl | 4 | MEDIUM |
| Olympic Energy | 4 | LOW-MEDIUM |
| Sidecar | 7 | HIGH — feature list is worst offender |

**~44 text changes across 10 files. Colophon untouched.**

### PATTERNS FIXED ACROSS ALL FILES:
1. **AI tricolon killed** — "It taught me X. It taught me Y. And it taught me Z" → removed in 3 places
2. **"The challenge wasn't just X. It was Y" framing** → replaced with direct statements
3. **Resume voice** ("I served as," "My role was") → natural first person
4. **Corporate passive** ("the business wanted," "due to the limitations of") → active voice
5. **Run-on stat lists** → grouped into narrative arcs with breathing room
6. **Buzzword density reduced** — "Fortune 500 rigor," "distinct digital needs," "real-world insights"
7. **Sidecar feature list** — 10 sentences pretending to be prose → honest flowing list
