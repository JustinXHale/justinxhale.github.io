---
layout: default
title: LiveKit resume
nav_exclude: true
search_exclude: true
permalink: /resume/livekit/
resume_page: true
has_toc: false
---

<div class="resume-page" markdown="1">

# Justin X. Hale

<div class="resume-meta" markdown="1">
Senior Product Designer  
(979) 703-0894 | [JustinXHale@gmail.com](mailto:JustinXHale@gmail.com) | [justinxhale.github.io](https://justinxhale.github.io)
</div>

<p class="resume-print-hint">Application version for LiveKit (Senior Product Designer, Developer Platform). Not linked from site navigation. Print: ⌘P / Ctrl+P → Save as PDF.</p>

## Professional summary

Product designer for developer tools, AI platform operations, and dense technical systems. I turn opaque runtime failures (logs, events, bad configs) into interfaces engineers can scan and act on. I build coded prototypes and ship personal products with React, TypeScript, Flutter, and AI-assisted development workflows (Cursor, Codex, Claude Code). I also built a production LiveKit voice product using rooms, JWT grants, and connection preflight.

## Closest matches for this role

1. **OpenShift AI Model Serving** — deployment recovery, multi-tenant constraints, honest failure states for platform engineers  
2. **Tō3 (LiveKit)** — production realtime voice: JWT roles, device validation, WebRTC debugging  
3. **Quay multi-tenant registry** — dense data, RBAC, vulnerability / ops dashboards for DevOps users  

## LiveKit experience

- Built and launched **Tō3**, a production voice collaboration app on LiveKit for sports officials and event crews.
- Implemented JWT-based role and permissions architecture (server-issued grants for publish vs. subscribe by role).
- Designed participant onboarding, device validation, and connection-test vs. live-room workflows so hosts can verify audio before going live.
- Debugged WebRTC and audio-session failures across mobile environments (including iOS stack limits).
- Conducted field testing of real-time voice under production conditions.

## Technologies & platforms

**Design & UX:** Interaction design, developer experience, accessibility, design systems, data visualization, prototyping, Figma, PatternFly, Miro  

**Development & AI:** React, TypeScript, Flutter, Dart, Cursor, Gemini Notebooks, GitHub, PR workflows, API integration  

**Platforms & domains:** LiveKit, WebRTC, AI/ML platforms, model serving, developer tooling, observability UX, Kubernetes, OpenShift, Quay, multi-tenant platforms, RBAC, distributed systems

## Professional experience

### Red Hat, Inc.  
*September 2021 – Present*

#### Senior Product Designer

*(Title evolved Associate UX Designer → Interaction Designer → Senior Product Designer as the role expanded across OpenShift, Quay, and OpenShift AI.)*

- Assumed design ownership of OpenShift AI Model Serving, translating deployment dependencies, multi-tenant constraints, and backend capabilities into actionable workflows aligned with Engineering and Product Management.
- Designed deployment recovery UX so failures show real backend reasons instead of generic “Starting” or “Ready” states, with clean stop, edit, and retry paths (prioritized for a 2027 release).
- Prototyped a unified Trusted Libraries and AI Components catalog in React/TypeScript on PatternFly 6 in one week (faceted metadata including SLSA, license, Python version, release stage, hardware variant); not yet in production.
- Created a code-based design feedback tool (contextual pins, GitHub Issues integration, AI-assisted summaries); subsequently adopted and maintained by PatternFly and used in OpenShift AI prototypes.
- Led vLLM CLI help redesign for 200+ options; ran the RFC and merged upstream with maintainers.

#### Interaction Designer / Associate User Experience Designer

- Cut ROSA-style CLI flows from 30+ sequential prompts to about 12 core paths; authored CLI UX guidelines (including accessibility and state patterns) adopted in PatternFly.
- Reworked InstructLab SDK and CLI onboarding for API-driven model training; standardized ROSA CLI patterns across cloud-managed OpenShift services.
- Led Quay.io redesign for a multi-tenant container registry: vulnerability dashboards, API-integrated workflows, and RBAC across multi-organization teams; reduced design debt through PatternFly adoption.

## Selected independent projects

Independently design and ship a suite of live products for sports officials (App Store, Play Store, and PWAs), spanning schedule → travel prep → live voice → post-match review:

**MatchReadyTX + Match Calendar (live PWAs):** One-way assignment sync from MatchReadyTX into Match Calendar, with stable external IDs and merge rules that preserve user-owned fields; AeroDataBox flight import into match timelines.  
**RefLog:** Cross-platform match logging with multi-role workflows and analytics dashboards; field usability testing under time pressure (~70% faster post-match review vs prior workflows).  
**RefereeIQ:** RAG-based AI coaching with semantic retrieval and cited answers; manual prompt and response-quality testing against rugby law references.

## Earlier experience

**Integral Care:** Digital Media Specialist (2019–2021): research-backed email and digital campaign UX.  
**Community Advancement Network:** Communications Specialist (2017–2019): accessible deliverables; campaigns that drove +13% traffic and 16k+ new visitors over two years.

## Education

- Associate of Applied Science, Austin Community College, User Experience Design  
- Bachelor of Science, Texas A&M University, Sports Management; minors in Business and Communication

<p class="resume-print-footer">Portfolio: <a href="{{ '/portfolio/' | relative_url }}">justinxhale.github.io/portfolio</a> · Tō3: <a href="{{ '/portfolio/to3/to3/' | relative_url }}">case study</a></p>

</div>
