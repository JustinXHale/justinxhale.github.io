---
layout: default
title: "RefLog"
parent: Portfolio
nav_order: 1
---

# RefLog — Designing for Speed, Focus, and Flow

<div style="background: #f5f5f5; padding: 20px; margin-bottom: 30px; border-left: 4px solid #0066cc;">
  <strong>Project Overview</strong><br>
  <strong>Role:</strong> Solo Product Designer & Developer<br>
  <strong>Timeline:</strong> 4 weeks (idea to App Store launch)<br>
  <strong>Platform:</strong> Flutter (iOS & Android), Firebase, Offline-first<br>
  <strong>Impact:</strong> Reduced match review time from 5+ hours to 90 minutes. Shipped to iOS App Store and Google Play Store.
</div>

## The Problem

As a rugby referee, I spend hours after games rewatching film, coding events, and analyzing decisions. The traditional process was cumbersome:

**Old workflow:**
- Download match footage
- Compress video files
- Upload to web platform
- Code the full 80-minute game using desktop software
- **Total time: 5+ hours** (including setup, upload, and coding)

**The pain point:** Existing tools assumed reflection happens later—at a desk, with full footage uploaded. But referees need to review quickly, often on mobile, and frequently without reliable internet.

> *What if I could code a match in 90 minutes instead of 5 hours—on the device already in my hand?*

---

## The Solution

RefLog is a lightweight, mobile-first app that works alongside your existing streaming or playback device. No downloads, no uploads, no setup—everything happens on the device already in your hand.

<figure style="float: right; margin-left: 20px; max-width: 300px;">
  <img src="/portfolio/reflog/assets/reflog-original-match-screen.png" style="width: 100%;" alt="RefLog match screen">
  <figcaption>Early iteration showing the progressive selector in action</figcaption>
</figure>

**Core insight:** Match the way referees actually think during a game—**phase → team → infraction → sanction**. This mental model became the foundation of the interaction design.

**Key features:**
- Progressive tap-based selector (faster than scrolling lists or forms)
- ±10s time controls for quick timestamp adjustments
- Auto-timestamp assist (steps back a few seconds automatically)
- Offline-first architecture (stadiums, buses, hotels)
- Local storage with instant export
- Dark mode for low-light review sessions

---

## Impact & Outcomes

**Shipped:** Live on iOS App Store and Google Play Store after 4 weeks of development.

**Time savings:** Reduced total review time from **5+ hours → 90 minutes** (70% reduction).

**Adoption:** Early users described it as *"a clean, fast way to log and review"* with secondary use cases emerging organically (coaches using it for performance reviews, not just match coding).

**Published links:**
- [iOS App Store](https://apps.apple.com/us/app/reflog/id6753010016) (globally approved)
- [Google Play Store](https://play.google.com/apps/testing/com.jxhale.reflog) (pending global approval)
- [RefLog Site](https://justinxhale.github.io/reflog-site)

<figure style="width: 100%; text-align: center; margin-top: 20px;">
  <img src="/portfolio/reflog/assets/appStore.png" alt="App Store listing" style="max-width: 600px;">
  <figcaption>RefLog on the iOS App Store</figcaption>
</figure>

<figure style="width: 100%; text-align: center; margin-top: 20px;">
  <img src="/portfolio/reflog/assets/playStore.png" alt="Play Store listing" style="max-width: 600px;">
  <figcaption>RefLog on Google Play Store</figcaption>
</figure>

---

## Design Process: From Idea to Shipped Product

### 1. Exploring Interaction Models

Early on, I tested three different approaches to event logging:

1. **Scrolling lists:** Too slow, required too much reading and searching
2. **Color-coded grids:** Fast tapping, but visually chaotic and hard to scan
3. **Progressive selector (phase → team → infraction → sanction):** Intuitive, minimal, aligned with referee thinking

**The winner:** Progressive selector. It required fewer taps, less cognitive load, and mirrored the natural decision flow during a game.

**Design validation method:** I measured friction in seconds—how long it took to record an event. Every design change was judged against that metric. If it didn't make logging faster or more accurate, it was cut.

### 2. Reducing Micro-Frictions

I focused on moments when attention shifts from the match to the interface. Two UX patterns emerged:

**±10s time controls**

<figure style="float: right; margin-left: 20px; max-width: 300px;">
  <img src="/portfolio/reflog/assets/add-event-error.png" style="width: 100%;" alt="Time controls interface">
  <figcaption>Simple ±10s controls for quick timestamp adjustments</figcaption>
</figure>

Users could quickly adjust timestamps without scrubbing through video. Inspired by common video playback habits (skip forward/back 10 seconds).

**UX impact:** Removed the need to pause, scrub, and find the exact moment—just tap to adjust.

**Auto-timestamp assist**

When logging a new event, the app automatically steps back a few seconds to anticipate the start of the clipping moment.

**UX impact:** Users don't have to manually rewind before logging—the app does it proactively.

**Design principle:** Does this remove a decision, or add one? Is this faster? Is this accurate?

### 3. Designing Within Constraints

I gave myself one month to take RefLog from idea to store-ready. That constraint forced clarity.

**Offline-first architecture**

Referees work in stadiums, buses, and hotels—often without reliable internet. RefLog had to function fully offline.

**Technical decision:** Local storage with Firestore for sync (when available).

**UX impact:** No "loading" states, no upload failures, no dependency on connectivity.

**No login/authentication**

I avoided authentication in v1 to reduce friction and App Store overhead.

**UX impact:** Open app → start logging immediately. Zero onboarding friction.

**Dark mode as default**

Many referees review in low-light conditions (locker rooms, buses, hotels). Dark mode wasn't a theme—it was a necessity.

**Design validation:** First user testing revealed users couldn't see the interface on their phones' default dark mode setting. I prioritized dark mode immediately.

<figure style="width: 100%; text-align: center; margin-top: 20px;">
  <img src="/portfolio/reflog/assets/featureflags.png" alt="Firestore feature flags" style="max-width: 600px;">
  <figcaption>Firestore-backed feature flags for rapid iteration without redeploys</figcaption>
</figure>

**Live configuration via Firestore**

Feature flags and configuration stored in Firestore allowed me to enable/disable features remotely without App Store resubmissions.

**UX impact:** Rapid iteration based on user feedback—I could test features with small groups before wider rollout.

### 4. Testing, Feedback, and Adaptation

Once RefLog stabilized, I shared it with referees and coaches. Their feedback revealed unexpected use cases.

**Coach Mode discovery:** One coach mentioned using the app not to code matches, but to take notes on referees' performance during reviews. This sparked an exploration into a dedicated "Coach Mode" for review and annotation without full match-coding flow.

**Design principle reinforced:** When you design for speed and clarity, secondary use cases emerge naturally.

---

## Rapid Prototyping with AI Tools

I built RefLog solo using Flutter, but I leveraged large language models as a coding copilot throughout development.

**How I used LLMs:**
- Debugging Flutter issues and refactoring components
- Reasoning about architecture and state management trade-offs
- Identifying edge cases I'd missed
- Thinking through Firestore data structure decisions

**Impact on process:** LLMs didn't replace my design process—they amplified it. I could hold more of the problem in my head and iterate on interaction flow and performance together. It blurred the line between design and development in a productive way.

**Speed benefit:** Rapid cycles of prompting, refining, and testing enabled me to ship in 4 weeks—a timeline that wouldn't have been possible without AI-assisted development.

---

## Technical Architecture

**Flutter app** (iOS & Android) → **Local storage** (offline-first) → **Firestore** (feature flags, remote config, optional sync)

### Key Technical Decisions

**Offline-first:** All match data stored locally; Firestore used only for configuration and optional backup.

**No authentication:** Reduced onboarding friction; added complexity deferred to v2 when clear user need emerges.

**Feature flags via Firestore:** Enabled remote feature toggling without App Store resubmission—critical for rapid iteration.

**Progressive disclosure UI:** Phase → team → infraction → sanction flow implemented as sequential selectors to minimize cognitive load.

---

## Key Learnings

**1. Speed and usability are not opposites**

Designing for rapid input requires empathy for how people think under pressure—whether that's a referee making a split-second call or a data scientist iterating through model runs.

**2. Measure friction in time, not clicks**

I optimized for seconds-to-log-event, not just number of taps. Sometimes an extra tap that saved cognitive load was worth it.

**3. Constraints force clarity**

The 4-week deadline meant I couldn't over-engineer. I built what the next match told me to build—each day, I'd use RefLog live, note what broke my focus, and fix that first.

**4. Secondary use cases validate core design**

When coaches started using RefLog for performance reviews (not match coding), it confirmed that the core UX—speed and clarity—was solving a broader problem.

**5. AI as a design accelerator**

LLMs enabled me to blur the line between design and development productively. I could prototype, test, and ship faster than traditional designer-developer handoff workflows.

**6. Live configuration is a superpower**

Firestore-backed feature flags meant I could iterate on features without App Store delays—essential for solo product development.

---

## Relevant for UX Engineering / AI Product Roles

- **Full-stack execution:** Owned design, development, and deployment end-to-end (Flutter, Firebase, App Store submission)
- **Speed-focused UX:** Optimized for high-pressure, time-sensitive workflows—applicable to data tools, analysis platforms, and operational dashboards
- **Offline-first design:** Critical for mobile/field tools and environments with unreliable connectivity
- **AI-assisted development:** Demonstrated ability to leverage LLMs for rapid prototyping and iteration
- **Live configuration patterns:** Firestore-backed flags enabled A/B testing and rapid iteration without redeploys—key for AI product experimentation

---

## What's Next

- Expanding **Coach Mode** for performance reviews and annotated feedback
- Introducing **remote templates** for referee societies to standardize event taxonomies
- Exploring **syncing and analytics** once clear user value is defined (avoiding premature complexity)

---

RefLog reminded me that good design isn't about adding—it's about removing everything that gets in the way of flow.

**Deliverables:**
- [iOS App Store](https://apps.apple.com/us/app/reflog/id6753010016) (globally approved)
- [Google Play Store](https://play.google.com/apps/testing/com.jxhale.reflog) (globally approved)
- [RefLog Site](https://justinxhale.github.io/reflog-site)
