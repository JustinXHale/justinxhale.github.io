---
layout: default
title: "RefLog"
parent: Portfolio
nav_order: 1
---

# RefLog — Designing for Speed, Focus, and Flow

When I first started building RefLog, I wasn’t thinking about publishing to the App Store. I was thinking about time.

<figure style="float: right; margin-left: 20px;">
  <img src="/portfolio/reflog/assets/reflog-original-match-screen.png" width="200px" alt="Placeholder Image">
  <figcaption>First iteration of RefLog</figcaption>
</figure>

As a rugby referee, I spend hours after games rewatching film, coding events, and trying to understand my own decisions. Every second of play matters, but so does every second of review. The existing tools for referees assumed that reflection would always happen later—at a desk, with full match footage uploaded somewhere. But I wanted to code faster. I wanted to code in real time.

RefLog started as an experiment to answer one question:

> *What if I could code a match faster?*
---

## The Spark

The existing tools for referees assumed that reflection would always happen later—at a desk, with full match footage uploaded somewhere. The traditional process was heavy: downloading match footage, compressing it, uploading to a web platform, and then coding the full 80-minute game — often taking **three or more hours just for the coding itself**, before setup or upload time even began. The total effort varied by computer type, but a typical user could spend more than fives hours through prep and coding. 

RefLog changed that. As a lightweight, mobile companion that works alongside your existing streaming or playback device, it reduced the total review time to around **90–100 minutes**, with **no setup required**. Everything happens on the device already in your hand.

The earliest prototypes weren’t beautiful, and they weren’t even usable for a full game. But they helped me test one simple idea: could I design a flow that matched the way referees actually think during a match?

That meant moving away from generic form fields and toward something more structured and contextual. I started mapping the way referees make calls: **phase >  team >  infraction > sanction**. That mental model became the foundation of the app.

I didn’t draw wireframes. I built quick tap‑based prototypes in Flutter to see what felt right. I measured friction in seconds, how long it took me to record an event. Every change was judged against that number.

---

## Exploration

Early on, I tried three interaction models:

1. **Scrolling lists:** too slow, required too much reading.
2. **Color‑coded grids:** fast, but too chaotic visually.
3. **Progressive selector (phase → team > infraction → sanction):** intuitive, minimal, and aligned with real referee thinking.

That last one became the core. It required fewer taps, less thought, and mirrored the natural decision flow during a game.

Around this point, I started thinking about how to reduce the small frictions that slow users down—the moments when attention shifts from match to interface. That led to two major UX patterns:

- **±10s time controls:** so users could quickly adjust timestamps, inspired by video scrub habits.
- **Auto‑timestamp assist:** when logging a new event, the app would automatically step back a few seconds to try and proactively anticipate the start of the users clipping moment. 

Every micro‑interaction was tested by asking: does this remove a decision, or add one? Is this faster? Is this accurate. 

---

## Building with LLMs

<figure style="float: left; margin-right: 20px;">
  <img src="/portfolio/reflog/assets/add-event-error.png" width="200" alt="Error handling">
  <figcaption>Error handling</figcaption>
</figure>

I built RefLog solo, but not alone. Throughout development, I used large language models as a coding copilot, debugging Flutter issues, refactoring components, and even reasoning about architecture.

At first, it was out of necessity; I’m a designer by background. But over time, the collaboration became a process in itself: prompting, refining, and testing ideas in fast cycles. It blurred the line between design and development. The models helped me think through data structure decisions in Firestore, identify edge cases I’d missed, and reason about state management trade‑offs.

Using LLMs didn’t replace my design process, it amplified it. I could hold more of the problem in my head, and that made it easier to iterate on interaction flow and performance together.

---

## Designing Within Constraints

I gave myself one month to take RefLog from idea to store‑ready proof of concept. That constraint forced clarity.

- **Offline‑first:** Referees work in stadiums, buses, and hotels. RefLog had to function fully without internet.
- **No login:** I avoided authentication in v1 to reduce friction and App Store overhead.
- **Local storage:** Every match, every log is stored locally and exportable instantly.
- **Dark mode early:** Because many referees review in low‑light conditions, dark mode was a necessity, not a theme. The feature came about through my first user testing after users informed me they couldn't see on their phones default dark mode. 

I didn’t build a roadmap; I built what the next match told me to build. Each day, I’d use RefLog live, note what broke my focus, and fix that first.

<figure style="width: 100%; text-align: center; margin-top: 20px;">
  <img src="/portfolio/reflog/assets/featureflags.png" alt="Feature Flags">
  <figcaption>Firestore Feature Flags</figcaption>
</figure>

---

## Testing, Feedback, and Adaptation

Once RefLog stabilized, I started sharing it with a few other referees and coaches. Their feedback shifted my perspective again.

One coach mentioned they were using the app not to code matches, but to take notes on referees’ performance during reviews. That feedback sparked an exploration into **Coach Mode**, a dedicated way to review and annotate without the full match‑coding flow.

These insights didn’t just inform new features, they reinforced an idea I’ve carried into all my design work: when you design for speed and clarity, secondary use cases emerge naturally.

---

## The Outcome

RefLog launched on both iOS and Android after about four weeks of building.

<figure style="margin-top: 20px;">
  <img src="/portfolio/reflog/assets/denied-on-apple.png" width="100%" alt="Denied on Apple">
  <figcaption>Denied on Apple for saying Android in the What's New update.</figcaption>
</figure>

**Core features:**

- Fast, tap‑based event logging for referees.
- Decision‑tree taxonomy (phase > team > infraction > sanction).
- ±10s time controls and auto‑timestamp assist.
- Local‑first storage and offline capability.
- Light/dark mode.

Within the first few days, early users described it as *“a clean, fast way to log and review.”* That small validation mattered, it meant the core idea worked.

---

## Reflection

Building RefLog taught me that speed and usability are not opposites. Designing for rapid input requires empathy for *how people think under pressure*—whether that’s a referee making a split‑second call or a data scientist iterating through model runs.

It also deepened my respect for LLMs as creative partners. I used them not just to code, but to reason, to question assumptions, explore alternatives, and refine solutions faster.

RefLog was a design experiment disguised as a product: a way to test how far intuition, iteration, and tooling could take one idea.

---

## What’s Next

- Expanding **Coach Mode** for performance reviews.
- Introducing **remote templates** for referees societies.
- Exploring **syncing and analytics** once clear user value is defined.

---

RefLog reminded me that good design isn’t about adding, it’s about removing everything that gets in the way of flow.

**Deliverables:** 
- [Play Store App (pending global approval)](https://play.google.com/apps/testing/com.jxhale.reflog)
- [iOS App (globally approved)](https://apps.apple.com/us/app/reflog/id6753010016)
- [RefLog Site](https://justinxhale.github.io/reflog-site)

<figure style="width: 100%; text-align: center;">
  <img src="/portfolio/reflog/assets/playStore.png" alt="Play Store">
  <figcaption>Play Store</figcaption>
</figure>

<figure style="width: 100%; text-align: center; margin-top: 20px;">
  <img src="/portfolio/reflog/assets/appStore.png" alt="App Store">
  <figcaption>App Store</figcaption>
</figure>