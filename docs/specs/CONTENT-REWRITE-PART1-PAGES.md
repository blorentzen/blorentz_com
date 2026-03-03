# blorentz.com — Content Rewrite (Part 1: Pages)

**Purpose:** Remove AI voice patterns, replace with Britton's real voice.
**Format:** Current → Proposed, organized by file. Ready for Claude Code find-and-replace.

---

## WHAT MAKES IT SOUND AI-WRITTEN

- Uniform sentence cadence (every sentence 15-25 words, medium complexity)
- Buzzword density ("Fortune 500 rigor," "strategic front-end engineering leader")
- Over-framing ("The challenge wasn't just X. It was Y.")
- Result sections that are reformatted bullet lists disguised as prose
- AI tricolon: "It taught me X. It taught me Y. And it taught me Z."
- Qualifiers nobody uses in speech: "multi-faceted," "fundamentally different," "distinct"

## WHAT BRITTON SOUNDS LIKE (from raw input)

- Direct. Sometimes fragments.
- Gets specific fast — doesn't frame, just says what happened
- Casual confidence ("There's two reasons people watch the Super Bowl")
- Varies sentence length — short punches next to longer explanation
- Doesn't over-explain or oversell

---

## HOMEPAGE (`app/page.tsx`)

### 1.1 — Hero Tagline ⚠️ HIGH PRIORITY

**CURRENT:**
```
Strategic front-end engineering leader. I've led teams at T-Mobile and Apple, and now I run Empac — a boutique consultancy where I bring that same Fortune 500 rigor to businesses that need it most.
```

**PROPOSED:**
```
I lead front-end development at T-Mobile and run Empac, a consultancy I started when I was 16. I build things that work — interactive tools, design systems, and websites that drive real business results.
```

**Why:** "Strategic front-end engineering leader" is pure LinkedIn. "Fortune 500 rigor to businesses that need it most" is a prompt completion. The rewrite says the same things without the resume voice. "Started when I was 16" is true (Emerald Pacific Outfitters → Empac) and more interesting than "boutique consultancy."

---

## ABOUT PAGE (`app/about/page.tsx`)

### 2.1 — Hero Headline

**CURRENT:** `Builder first, leader second.`
**PROPOSED:** Keep as-is. Sharp. Sounds human.

### 2.2 — Hero Subhead

**CURRENT:**
```
I build things that solve problems — from T-Mobile's customer-facing tools used by millions, to custom solutions for businesses through my consultancy, Empac.
```

**PROPOSED:**
```
I build things that solve problems — from T-Mobile's customer-facing tools to custom applications for businesses through Empac, a consultancy I've been running since I was 16.
```

**Why:** "used by millions" and "custom solutions" are filler. Age detail is more interesting and true.

### 2.3 — Story Opening

**CURRENT:**
```
I've spent my career at the intersection of strategy and execution, and I like it there. At T-Mobile, I lead creative development for high-stakes digital experiences. Through Empac, I bring that same thinking to established businesses who've outgrown what off-the-shelf tools can do for them.
```

**PROPOSED:**
```
At T-Mobile, I lead creative development for some of the highest-stakes pages on T-Mobile.com. Through Empac, I do the same thing for businesses that have outgrown what off-the-shelf tools can do.
```

**Why:** "I've spent my career at the intersection of strategy and execution" is the single most AI-sounding sentence on the site. Kill it.

### 2.4 — Racing Lessons

**CURRENT:**
```
Racing didn't become a career, but it shaped everything that came after. It taught me to commit to a line before you can see where it goes. It taught me that preparation matters more than talent. And it taught me that the gap between "good enough" and "great" is usually a decision someone was afraid to make.
```

**PROPOSED:**
```
Racing didn't become a career, but it shaped how I think. Commit to a line before you can see where it goes. Preparation matters more than talent. And the gap between "good enough" and "great" is usually a decision someone was afraid to make.
```

**Why:** "It taught me... It taught me... And it taught me..." is a classic AI tricolon. Cutting the framing makes the lessons hit harder. Reader gets they came from racing.

### 2.5 — T-Mobile Paragraph

**CURRENT:**
```
I started at T-Mobile as a design intern. Four roles and eight years later, I lead creative development for some of their highest-priority digital experiences — the savings calculator used by millions of customers, FN5GL, Super Bowl landing pages, campaign deal hubs, and the T-Mobile.com redesign. The work is fast, high-stakes, and built for an audience of tens of millions.
```

**PROPOSED:**
```
I started at T-Mobile as a design intern. Four roles and eight years later, I lead creative development for the savings calculator, Super Bowl landing pages, Friday Night 5G Lights, campaign deal hubs, and the T-Mobile.com redesign. The work ships to tens of millions of people and moves fast.
```

**Why:** "some of their highest-priority digital experiences" is corporate filler. "The work is fast, high-stakes, and built for an audience of" — AI three-adjective pattern.

### 2.6 — Empac Paragraph

**CURRENT:** `Empac has been running the whole time...`
**PROPOSED:** Keep as-is. One of the best paragraphs on the site. "The value is knowing which one" is a great closer.

### 2.7 — Education Paragraph

**CURRENT:**
```
I studied business at the University of Washington with a focus on marketing, then supplemented it with several years of computer science coursework. The combination of business strategy and technical execution is the thing I keep coming back to — it's what I do at T-Mobile, it's what I do at Empac, and it's what I look for in every project I take on.
```

**PROPOSED:**
```
I studied business at the University of Washington with a focus on marketing, then picked up several years of computer science coursework alongside it. Business strategy plus technical execution — that's the thread through everything I do.
```

**Why:** "it's what I do at X, it's what I do at Y, and it's what I..." — AI tricolon again. One sentence.

### 2.8 — Personal Section

**CURRENT:**
```
I still follow motorsports — the racing bug doesn't go away, it just changes shape. I'm into music production and DJing when I find the time, and I've traveled enough to know that the Pacific Northwest is where I want to be.
```

**PROPOSED:**
```
I still follow motorsports — that doesn't go away. I DJ and produce music when I find the time, and I've traveled enough to know the Pacific Northwest is where I want to be.
```

**Why:** "the racing bug doesn't go away, it just changes shape" is a cliché. Simpler is better.

### 2.9 — CTA Section

Keep as-is. Clean and direct.

---

## WORK INDEX (`app/work/page.tsx`)

### 3.1 — Subtitle

**CURRENT:**
```
A mix of Fortune 500 digital products, client engagements, and things I've built for myself. Each one solved a real problem — the scale and context just varies.
```

**PROPOSED:**
```
Corporate products, client work, and things I built for myself. The scale varies — the approach doesn't.
```

**Why:** Shorter hits harder on a subtitle. "A mix of Fortune 500 digital products, client engagements" is overwritten.

---

## COLOPHON (`app/colophon/page.tsx`)

**No changes.** This page is in the builder voice and reads like decisions, not AI output. Leave it alone.
