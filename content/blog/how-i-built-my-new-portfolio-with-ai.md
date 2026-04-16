---
title: "How I built my new portfolio with AI."
slug: "how-i-built-my-new-portfolio-with-ai"
date: "2026-03-31"
description: "I rebuilt my portfolio from the ground up using Figma, Claude.ai, and Claude Code. Here's what the workflow actually looked like, where AI helped, and where it took liberties it shouldn't have."
readTime: "8 min read"
heroImage: "https://cdn.empac.co/portfolio/images/blog/intro-post/8-bit-britton-and_claude-looking-out-at-pacific-northwest-environment.jpg"
heroAlt: "16-bit pixel art of two small figures on a platform looking out at a vast Pacific Northwest landscape with a glowing beam of light"
category: "building"
published: true
---

AI is changing the way I work. The tools, the frameworks, the expectations from clients and stakeholders... all of it is shifting faster than most of us are comfortable admitting. With how quickly AI is becoming integrated into every company and corporation in the country, I needed my portfolio and workflow to reflect where I am today (and get rid of my really old site design). More importantly, I wanted to stop reading about AI-assisted development and start actually putting it to practice.

So, I rebuilt this site from the ground up using Figma, Claude.ai, and Claude Code as my primary tools. Here's a preview into what that looked like.

### Why rebuild it all?

My time is valuable. I have a full-time job at T-Mobile, a consultancy I run on the side, and a one-year-old at home… I can't afford to spend months hand-coding a portfolio site the traditional way. Also, I'm quickly learning that AI is forcing me to rethink how I design, build, and execute my work.

As much as it sucks to admit… the writing is on the wall for our industry. If I don't gain real experience working with AI-powered workflows now, I'll be behind when every team, client, and company starts asking me what my workflow looks like. It felt like a great idea to use this portfolio website as a solid stomping ground to start proving things out.

### The stack has changed so many times.

Just as fast as frameworks come and go, so do portfolio websites. As creatives, we have this funny knack of looking at our personal websites, debating whether or not to redo it all, then just decide to go with it. Of course, that depends on whether or not we have the time to do so.

<figure>
<img src="https://cdn.empac.co/portfolio/images/blog/example-of-old-portfolio.jpg" alt="Screenshot of Britton's original portfolio website built with static HTML and vanilla JavaScript" />
<figcaption>The original portfolio. Static HTML and vanilla JavaScript. Built before COVID.</figcaption>
</figure>

Version one was static HTML with vanilla JavaScript. I built it myself from scratch… it worked… but updating it meant touching raw markup every time something changed.

My next version moved to Webflow. At the time, I was learning the platform for client work at Empac… so it made sense to use it for my own site. Webflow is an incredible builder that made creating iterations super quick. Even though Wordpress still dominates the web, I wanted to work with a platform that felt future forward and was putting in the work to make it even better (Such as GSAP. Webflow made it super easy to work with animations and GSAP).

And now we're on this current version... Next.js, CascadeDS (my own design system), all deployed through Vercel with assets being served from Cloudflare. This wasn't change for the sake of tinkering with new toys…. as I started working with AI-assisted development tools, it became clear I needed a codebase I could fully control. Having the portfolio be a custom build gives me the flexibility to integrate AI tooling directly into my process in ways that a visual builder couldn't do easily.

Each version was right for its time… but this version is pretty awesome, and I'm proud of how it turned out.

### The human work always comes first.

Before any AI tool gets involved, there's a lot of thinking to do… such as, who is this site for? Most people would say hiring managers, recruiters, potential clients, and peers, each with their own expectations. Other important considerations… such as "What message needs to come across?" I'm a builder at the core, and trying to say "I'm a designer, developer, marketer, and swiss army knife of everything" is a little obnoxious… so I kept it simple: I'm a builder, and a leader in my field. That means everything I work on has strategy baked into it, I appreciate and cherish good taste and design thinking, and I also don't mind digging into the code to ensure everything is built as it should.

The hardest question though: how do I retain my own personality so the website doesn't feel cold and manufactured? AI has an uncanny ability to make things feel cold and calculated, so there can't be a moment that feels out of place.

Only after those decisions are made do I start working with Claude. Together, we put together a spec based on my input… and we assess the frameworks and tooling. Are these actually the right tools to use? If not, what's the pivot and why? Ideally, the spec should not come from AI… it's fine for it to write up the spec, but there should always be a person in the middle concepting, verifying, and giving the final approvals. AI has effectively helped me build things faster, challenged my assumptions, and identified gaps I might have missed… funny enough, I've also helped my version of Claude get a better understanding of my expectations, how we need to work together, and treat the workflow as a collaboration instead of an order window.

The most important factor in this whole process is continuing to challenge the output. It's essential to continue peeling back layers until you've uncovered the core of your message and experience. Challenges should come from both directions: I challenge Claude's output and thinking, Claude sometimes challenges my thinking and asks clarifying questions, and that back-and-forth has significantly improved the quality of work.

### Never, ever one-shot your ideas.

People are doing this on a daily basis, and I've been guilty of it in the beginning. Whatever you do, NEVER one-shot your ideas at the wall of Claude, ChatGPT, or whatever AI you're working with.

Pages are meant to be built one at a time. I always provide creative and technical direction, and any necessary assets. When content is written, I always read through, make edits, suggest changes, and keep iterating until it feels authentic and sounds like it's coming from me. Never try to get AI to build everything at once… the moment you do, you potentially expose the whole system to bugs and issues that become incredibly hard to untangle the further along you go.

<figure>
<img src="https://cdn.empac.co/portfolio/images/blog/claude-code-example-of-context.jpg" alt="Screenshot of a Claude Code terminal session showing context and direction being provided" />
<figcaption>A typical Claude Code session. Context, direction, then execution.</figcaption>
</figure>

Think of it like building a house. AI is very good at putting up the basic structure… It can handle the framing, drywall, and roofing. Once that structure is in place, it's up to someone like me to start refining. "Cool, the kitchen is framed out... now what kind of cabinets do we want? How should someone navigate this space? What are the little details that make this feel intentional instead of cheap?" Just like in home building, it's easy to go the fast route without thinking about what that means 5, 10, 20 years from now. It's not just about how it works today, it's about how it holds up over time. That's something only experience teaches you over time.

### Where AI has helped me out.

Since I'd already built CascadeDS, my design system, AI was very good at pulling in components and making them work in the new site. It understood the token structure, the component API, and how things connected. We even uncovered gaps in the component library I hadn't caught before: type declaration issues where components worked at runtime but were invisible to TypeScript, and a background token naming mismatch between what CDS defined and what the site's patterns referenced. In a pretty neat way, AI became an accidental QA tool for both my project and my existing systems. It wasn't part of the plan, but it certainly was welcome feedback and input to continue improving my systems and tooling.

<figure>
<img src="https://cdn.empac.co/portfolio/images/blog/example-of-cds-website.jpg" alt="Screenshot of the CascadeDS documentation website at ds.empac.co" />
<figcaption>CascadeDS documentation at ds.empac.co. The system that powers this site.</figcaption>
</figure>

Working out anything repetitive was significantly faster with AI at the wheel. I had case study pages that follow the same structure, SEO meta tags across every route, sitemap generation, CDN migration and configuration… as long as I provided a clear, guided blueprint of the important things (framework, architecture, content, component library, etc.), Claude could execute much quicker than me doing it all manually. We easily saved a TON of hours across the build working in this way.

### Where AI took liberties it shouldn't have…

If you don't give AI enough context, or you give it too much freedom, it will absolutely take those liberties and run with them. I saw this multiple times… Claude not properly using CDS components when a perfectly good one already existed, making architecture or build decisions that hadn't been vetted by me, and choosing approaches that conflicted with patterns we'd already established.

AI is very good at building things quickly, whether that's building something great really fast or doing a fantastic job building up a shiny garbage pile… whatever the project might be, there always needs to be a human in the loop evaluating the output, giving direction, giving approval, and making sure things stay in the proper lanes.

### There's always going to be a writing problem.

This one deserves its own section because it's where most people get burned by AI.

I believe it's fine to use AI for writing content, as long as it's properly read, evaluated, edited, and modified through the process. One suggestion I always make, always follow the standard writing process: gather info, put together an outline, modify the outline, then start drafting. The mistake I see people make constantly is being too vague with their prompts... they give a general idea, let AI do whatever, and accept the output. That's 100% reckless. There should always be someone who can actually evaluate whether the output is correct, on-brand, and sounds like a real person wrote it.

Here's what that looked like on this site: We did 44 text changes across 10 files to scrub AI voice patterns. The only page that didn't need changes was the Colophon, because it was already written in a builder's voice instead of AI-generated prose. Here's what we were catching:

<div class="comparison">
<div class="comparison-block">
<span class="comparison-label">AI Draft</span>
<blockquote>"Strategic front-end engineering leader. I've led teams at T-Mobile and Apple, and now I run Empac — a boutique consultancy where I bring that same Fortune 500 rigor to businesses that need it most."</blockquote>
</div>
<div class="comparison-block">
<span class="comparison-label">My Edit</span>
<blockquote>"I lead front-end development at T&#8209;Mobile and run Empac, a consultancy I started when I was 18. I love to build things that drive results for businesses... whether they're interactive tools, design systems, or custom websites and applications."</blockquote>
</div>
</div>

<div class="comparison">
<div class="comparison-block">
<span class="comparison-label">AI Draft</span>
<blockquote>"Racing didn't become a career, but it shaped everything that came after. It taught me to commit to a line before you can see where it goes. It taught me that preparation matters more than talent. And it taught me that the gap between 'good enough' and 'great' is usually a decision someone was afraid to make."</blockquote>
</div>
<div class="comparison-block">
<span class="comparison-label">My Edit</span>
<blockquote>"Racing didn't become a career, but it shaped how I work: You learn to commit before you can see where it goes, and you learn that preparation beats talent almost every time."</blockquote>
</div>
</div>

See the pattern? AI loves to frame things. "It taught me... It taught me... And it taught me..." That tricolon structure is an AI tell all day every day… so is leading with a title nobody uses in actual conversation. And of course, our lovely em dashes that were everywhere (we cut 20+ of them down to about 3 across the entire site). Not that anything is wrong with em and en dashes, but usually someone reads it and thinks "Ugh." Also, couldn't forget these things as well: "fundamentally," "multi-faceted," "distinct," and "the challenge wasn't just X, it was Y."

The most telling moment for me was when I rewrote the Off the Clock section of the About page myself, and it was noticeably better than the AI draft. Not because I'm a better writer than Claude in every context, but because I'm better at writing for myself than Claude trying to make an attempt at impersonating me. Feel free to let AI write your posts… but always keep your voice as your own.

### Where my time is better spent.

This is the real value proposition of working with AI this way. When AI handles the grunt work quickly, someone like me can focus on the bigger picture. I can ensure quality meets my standards, evaluate whether we're headed in the right direction, QA the work for tone and technical accuracy, and verify we're properly using the tools and patterns I've established.

My time is better spent thinking about long-term goals and planning instead of literally being a code monkey. That's not laziness, it's me taking control of my time and allocating expertise where it matters more. The strategic decisions, the quality evaluation, the voice and brand consistency... that's where 15 years of experience earns its keep. The component scaffolding and meta tag generation? Claude can go off on that all it wants.

<figure>
<img src="https://cdn.empac.co/portfolio/images/blog/example-of-lighthouse-score.jpg" alt="Lighthouse performance scores for blorentz.com showing all green metrics" />
<figcaption>All green. AI-assisted shouldn't mean sloppy.</figcaption>
</figure>

### What's next?

This post covered the portfolio build… the next one will go deeper into CascadeDS, the design system that powers this site and multiple applications that are currently in development. I'll dive into how I built it alone, why token architecture matters even at a smaller scale, and how AI changed the component development process for me. I look forward to seeing you in the next post.
