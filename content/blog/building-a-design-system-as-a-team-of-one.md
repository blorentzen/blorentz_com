---
title: "Building a Design System as a Team of One"
slug: "building-a-design-system-as-a-team-of-one"
date: "2026-04-04"
description: "Everything built with AI is starting to look the same. I built my own design system from scratch so Claude Code pulls from my decisions, not everyone else's defaults."
readTime: "8 min read"
heroImage: "https://cdn.empac.co/portfolio/images/blog/intro-post/8-bit-britton-looking-out-at-thriving-world.jpg"
heroAlt: "16-bit pixel art of a small figure overlooking a vast thriving world with modern architecture and lush vegetation"
category: "building"
published: true
---

There are two things that come to my mind when it comes to using AI in building designs and systems: "This is amazing! I can design and build new ideas so quickly now." and "Damn, everyone has the same looking designs and systems now." Makes sense… since Claude Code, Codex, and other platforms tend to default to React, Next.js, Tailwind, and all the latest and greatest frameworks and platforms from the last decade or so. Ideally, we should be leveraging the latest innovations to build out solid, and secure, websites and applications, but I'm also aware (and most likely you, the reader, as well) that everything looks so similar, and sterile, at this point.

Visit 10 portfolio sites or apps that were built with AI in the last year, and anyone would bet good money that 8 of them are visually interchangeable. They employ the same spacing rules, component patterns, and overall look and feel. Either everyone has gotten so good at design that we're all group thinking it together, stealing it from Apple, or have so much work on their plate they just need things done and shipped quickly. Sure, they're technically well built… but they're also emotionally empty. The design and content are both "correct," but nothing about them feels like a person made it.

There's an obvious reason for it, it's because AI defaults to the best practices… but best practices at scale are practically guaranteed to produce homogeneity. If every project pulls from the same Tailwind defaults, the same shadcn components, and the same rounded-corner-card-with-a-drop-shadow formula, everything ends up looking like everything else. If I wanted to see well-polished and homogeneous things, I'd just walk into a typical Marriott hotel at this point. If I was feeling crazy, I'd take a trip to Vegas and walk through The Cosmopolitan… but even the Cosmo has more personality to it than another AI baked application.

I refuse to let anything I build look the same as everyone else, which is why I built my own design system from scratch.

CascadeDS exists so that when Claude Code builds something for me, it builds something that looks and feels like mine. It pulls from MY tokens, MY component decisions, MY opinions about spacing and typography and color. The system carries my point of view into every project even when AI is doing most of the execution.

And honestly, I think we're getting to a place where we need to start challenging design principles and norms… stretching creativity and building things that feel more human, even to the point of purposefully breaking the rules. A design system should make that easier to achieve in today's internet of everything.

### One system, two very different worlds.

Here's a challenge I've identified in today's viewpoint on design systems: product systems and marketing systems serve very different purposes, and they don't typically play nice together.

Product (functional) design systems are all about consistency and predictability… every button looks the same across 50 screens, and that's the point so the user can clearly identify patterns. Think Salesforce Lightning, Material Design, Shopify Polaris... All these systems enforce sameness because users need to know exactly what to expect when they're trying to buy things, interact with your apps, and so on.

Marketing (experiential) design systems are the polar opposite. Every campaign page begs to be expressive, flexible, visually impactful, and all typically look completely different from the other one. The design system might provide guardrails, but the whole point is that things can breathe and be unique from one another.

Most teams solve this by having two separate systems, or by forcing one system to handle both and watching it buckle under the weight. As a challenge to myself, I wanted to see if I could bridge the two together.

I'm building across five applications right now: Sidecar (a product app), empac.co (a marketing site), blorentz.com (a portfolio), TowHub (a marketplace), and various client projects. Each one has different needs and purposes. Ideally, a product dashboard button and a marketing landing page button should feel related… but they don't need to be identical. A video embed component should work in a case study and in an app onboarding flow, while being mindful of its placement to direct how it looks and feels.

My approach: build tokens and primitives that are universal, then let component-level decisions flex based on context. The spacing scale, color palette, and typography stay consistent (with some outliers on the marketing side… such as HUGE text that can shout loud enough to make an impression). How a hero component might use the tokens will differ from how a form input uses them… but the goal is to create a living, breathing system that builds rules that are meant to be broken in the right circumstances.

<figure>
<img src="https://cdn.empac.co/portfolio/images/blog/cds-post/cds-example-product-vs-marketing-type.png" alt="CascadeDS example showing the difference between product and marketing typography treatments" />
<figcaption>Same type scale, different applications. Product typography (left) prioritizes readability and consistency. Marketing typography (right) is designed to demand attention.</figcaption>
</figure>

### Starting in Figma: primitives, semantics, then components.

The recommended starting point will always be Figma (at least for now). I'll get to why I said "recommended" in a minute.

CascadeDS uses a three-tier variable architecture:

**Primitives** are the raw values. Specific hex colors, spacing units in pixels, font sizes. These are the atoms of the system. They have no opinion about what they're used for.

<figure>
<img src="https://cdn.empac.co/portfolio/images/blog/cds-post/cds-example-color-palette.png" alt="CascadeDS color palette showing primitive color tokens" />
<figcaption>CascadeDS primitive color tokens. These raw values feed into semantic and component layers.</figcaption>
</figure>

**Semantic tokens** are where decisions live. `background-primary`, `text-body`, `spacing-section`. These define what the values mean in context. Dark mode is a semantic swap… you change which primitives the semantic tokens point to, and the entire system updates without touching a single component.

**Component tokens** are scoped to specific elements. `button-padding`, `card-border-radius`. These let you fine-tune individual components without affecting the global system.

Always start with your primitives. If your spacing and color foundation is solid, components practically build themselves. If your tokens are messy, no amount of component polishing will save you later.

<figure>
<img src="https://cdn.empac.co/portfolio/images/blog/cds-post/cds-example-type-scale.png" alt="CascadeDS type scale showing font size and line height tokens" />
<figcaption>The type scale. Get this right and the rest of the system has a foundation to build on.</figcaption>
</figure>

From there, I built components. Button, Badge, and Chip came first, chosen deliberately because they appear everywhere and force you to solve sizing, color, and state patterns early on. Whatever decisions you make on those first few components have a tendency to set the precedent for everything that follows them... get them right and the rest of the system has a clear path.

However, each component had to work in both functional and experiential contexts... that meant thinking through how the same Button component behaves in a product dashboard versus on a marketing landing page. The two can be influenced by one another, but that never means they'll always be the same everywhere. In a dashboard, the user is typically looking for things to engage and click on… while on the marketing landing page we're trying to demand attention for why that user should buy from us.

### Full transparency, I actually started with AI first…

It's kind of embarrassing, because when I started working on my system I was so excited about what AI could do that I just went right into VS Code to get started. I was feeding my design system specs into Claude Code and purposefully forcing it to come up with an original system instead of defaulting to Tailwind and other well-known frameworks.

It worked, sort of. Claude Code did a great job building the components. They functioned well. But without the Figma foundation in place first, design decisions were being made in code rather than in design… and that's completely backwards… and I knew that. Code should implement design decisions, not make them with me on the fly.

Looking back, I needed to start in Figma… and the fact that I let the latest and greatest innovations in AI hop over crucial parts of the design process is something that made me retrace most of my steps during the design system build. I needed to better define the tokens, build the components visually, get the system right in Figma, then move into building everything. Another thing that could have made things better would be hooking up the Figma MCP connection to VS Code and Claude beforehand so I could design and build in lockstep. That way the context could be established early on between Figma and Claude, and it would have made the whole design process easier.

I'm telling you this because the temptation to skip design and jump straight into AI is incredibly strong. It's fast, feels productive, and ends up making foundational decisions in the wrong environment… which means spending more time later on fixing things that should have been right from the start. In this case, I essentially became the architect that let the contractor (Claude) start framing in the house before the plans were finalized. Things were still loose enough that Claude was making decisions on my behalf before I even had a chance to give it the direction to do so.

### Where the system became real.

Through this whole process, I've learned that a design system doesn't become real when projects start consuming it and things start breaking on me.

CascadeDS is published as a private npm package, primarily because it's not quite ready for prime time yet as a public package. Any project that installs it will get a full system: tokens, components, a curated icon set, and documentation that lives at [ds.empac.co](https://ds.empac.co).

<figure>
<img src="https://cdn.empac.co/portfolio/images/blog/cds-post/cds-example-of-icons.png" alt="CascadeDS curated icon set" />
<figcaption>A curated icon set included with every CDS install. Each icon earned its spot from a real project need.</figcaption>
</figure>

The fun part about building a design system though… getting the popular frameworks to play nicely with it. For example, Next.js handles CSS modules differently than Astro… there are different rules for how content and packages get brought into the pages… and these were just a few things I had to start chasing once the system was being brought into projects. Getting CDS to work cleanly across everything required understanding each framework's approach and finding patterns that respected their nuances without compromising the system. One fun thing I learned, some third-party plugins and libraries didn't always respect my tokens either. Some frameworks override your variables, some inject their own resets, and managing these boundaries will always be ongoing work that never truly ends.

Then, for the fun part, starting to actively build projects after the system launched. The portfolio build exposed type export bugs… Tabs, VideoEmbed, and StatCard all worked at runtime but were invisible to TypeScript because they were missing from the package's public type declarations. Token naming mismatches surfaced only when a fresh project consumed the system for the first time. None of these things would have been caught by building the system in isolation.

Every issue I uncovered became a fix that improved every project I had in development. As updates were pushed, the system became stronger, more well-rounded, and the results, time efficiencies, and features started compounding over time. Each new project is now an additional stress test that continues making the system stronger for every project that follows.

<figure>
<img src="https://cdn.empac.co/portfolio/images/blog/example-of-cds-website.jpg" alt="Screenshot of the CascadeDS documentation website at ds.empac.co" />
<figcaption>CascadeDS documentation at ds.empac.co. The system that powers this site and numerous other applications.</figcaption>
</figure>

### What I'd tell other solo builders.

If you're using AI to build anything right now, you absolutely need a design system. Not because it's best practice, but because AI without a system defaults to whatever it was trained on… and that's going to look like everything else on the internet.

You don't need a team for this per se, but you do need a clear architecture, consistent naming, and the discipline to use your own system even when it's faster to hack something together.

Start in Figma. I know the code is tempting... and trust me, I started there too. Go back to design first. You'll thank yourself later.

Document as you build. [ds.empac.co](https://ds.empac.co) exists because future-me is my most important consumer of this system. The moment I can't remember why I made a decision, the system starts to slowly erode.

Build what you actually need. CascadeDS has 60+ components because each one was built when a real project required it, not because a roadmap told me to ship 100 components within the next quarter.

And challenge the norms. If your design system only produces "correct" output, it's going to produce boring output. Leave room for personality and intentional rule-breaking. The whole point of a system isn't to remove creative decisions… it's to remove the ones that don't matter so you can spend your energy on the ones that do.

### What's next for CDS.

Code Connect is the next milestone: linking Figma components directly to their code counterparts so the bridge between design and development gets even tighter. Tier 1 components (Button, Input, Select, Badge) are in active development with full variant coverage.

The system will naturally grow as the projects grow. Every new application that consumes CDS makes it better, and every fix flows back to everything that came before it. That's what I believe is the beauty of building a system like this… the investment pays compound interest over time.

Next post will shift gears a bit. Claude and Claude Code aren't the only AI tools in my workflow, and I think you'll appreciate how I've been using other platforms to push creative boundaries in ways that have nothing to do with writing code. I'll be seeing you in that one soon.
