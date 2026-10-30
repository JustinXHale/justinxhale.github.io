---
layout: default
title: Resumes
nav_order: 2
has_children: true
permalink: /resume/
resume_page: true
has_toc: false
---

<div class="resume-page" markdown="1">

# Justin X. Hale

<div class="resume-meta" markdown="1">
Senior Product Designer  
(979) 703-0894 | [JustinXHale@gmail.com](mailto:JustinXHale@gmail.com) | [justinxhale.github.io](https://justinxhale.github.io)
</div>

<p class="resume-print-hint">To save as PDF: use your browser’s <strong>Print</strong> command (⌘P / Ctrl+P) and choose “Save as PDF.” Sidebar and navigation are omitted from the printed page.</p>

## Professional summary {#professional-summary}

Product designer for developer tools, AI platform operations, and multi-step systems. I turn opaque runtime failures (logs, events, bad configs) into interfaces engineers can scan and act on. I build coded prototypes and ship personal products with React, TypeScript, Flutter, and AI-assisted development workflows (Cursor, Codex, Claude Code). I also built a production LiveKit voice product using rooms, JWT grants, and connection preflight.

## Technologies & platforms {#tech-platforms}

<p class="resume-tech-keywords"><strong>Design &amp; UX:</strong> Interaction design, developer experience, accessibility, design systems, data visualization, prototyping, Figma, PatternFly, Miro<br>
<strong>Development &amp; AI:</strong> React, TypeScript, Flutter, Dart, Cursor, Gemini Notebooks, GitHub, PR workflows, API integration<br>
<strong>Platforms &amp; domains:</strong> LiveKit, WebRTC, AI/ML platforms, model serving, developer tooling, observability UX, Kubernetes, OpenShift, Quay, multi-tenant platforms, RBAC, distributed systems</p>

## Professional experience {#professional-experience}

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

### Independent product work: Tō3 (refOpenMic)  
*Founder & Product Designer | 2023 – Present*

- Designed and launched a real-time voice app on LiveKit so sports officials and event crews can talk over phones and Bluetooth headsets with low-latency full-duplex audio.
- Integrated LiveKit rooms and role-based access with server-issued JWTs (publish vs. subscribe), plus a connection-test room so hosts can validate devices before going live.
- Diagnosed WebRTC, audio-session, and platform-specific failures (including iOS stack limits) through iterative field and device testing.

## Independent projects {#independent-projects}

Independently design and ship a suite of live products for sports officials (App Store, Play Store, and PWAs), spanning schedule → travel prep → live voice → post-match review:

**MatchReadyTX + Match Calendar (live PWAs):** Built a one-way assignment sync from MatchReadyTX (org scheduling) into Match Calendar (personal schedule/travel), with stable external IDs and merge rules that preserve user-owned fields. Added AeroDataBox flight lookup in Match Calendar so officials can import real flight segments into match timelines.

**RefLog:** Cross-platform match logging with multi-role workflows and analytics dashboards; usability tested in the field under time pressure.

**RefereeIQ:** RAG-based AI coaching with semantic retrieval and cited answers for officials.

## Earlier experience

**Integral Care:** Digital Media Specialist (2019–2021): research-backed email and digital campaign UX.

**Community Advancement Network:** Communications Specialist (2017–2019): accessible deliverables; campaigns that drove +13% traffic and 16k+ new visitors over two years.

## Education {#education}

- Associate of Applied Science, Austin Community College, User Experience Design
- Bachelor of Science, Texas A&M University, Sports Management; minors in Business and Communication

<p class="resume-print-footer">Case studies and deeper project write-ups: <a href="{{ '/portfolio/' | relative_url }}">justinxhale.github.io/portfolio</a></p>

</div>
