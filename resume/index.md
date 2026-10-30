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

Product designer for developer tools, AI platform operations, and multi-step systems. I turn opaque runtime failures (logs, events, bad configs) into interfaces engineers can scan and act on. I build coded prototypes and ship personal products with React, TypeScript, Flutter, and AI-assisted workflows (Cursor). I also built a production LiveKit voice product using rooms, JWT grants, and connection preflight.

## Technologies & platforms {#tech-platforms}

<p class="resume-tech-keywords"><strong>Design &amp; UX:</strong> Interaction design, developer experience, design systems, data visualization, prototyping, Figma, PatternFly, Miro<br>
<strong>Development &amp; AI:</strong> React, TypeScript, Flutter, Dart, Cursor, Gemini Notebooks, GitHub, PR workflows, API integration<br>
<strong>Platforms &amp; domains:</strong> LiveKit (rooms, JWT grants, connection preflight), WebRTC / real-time audio, AI/ML platforms, model serving &amp; LLM deployment, developer portals, CLI/SDK tooling, observability &amp; logging UX, Kubernetes event/log debugging, OpenShift / OpenShift AI, container registries (Quay), multi-tenant RBAC, distributed systems</p>

## Professional experience {#professional-experience}

### Red Hat, Inc.  
*September 2021 – Present*

#### Senior Product Designer

*(Title evolved Associate UX Designer → Interaction Designer → Senior Product Designer as the role expanded across OpenShift, Quay, and OpenShift AI.)*

- Own UX for OpenShift AI surfaces that platform engineers and data teams use: model serving, deployment flows, and package catalogs shaped by real backend constraints.
- Assumed design ownership of OpenShift AI Model Serving after the previous Principal left; mapped multi-step deployment dependencies and backend capability gaps into staged flows and decision UX so Engineering and PM could align UI options with what the platform can actually support.
- Designed deployment recovery UX so failures show real backend reasons instead of generic “Starting” or “Ready” states, with clean stop, edit, and retry paths (prioritized for a 2027 release).
- Designed a clearer deployments table for monitoring active instances, hardware use, and endpoint availability (prioritized for a 2027 release).
- Designed a diagnostic side-drawer that turns Kubernetes event timelines and container logs (e.g. OOMKilled) into recovery steps people can follow.
- Prototyped a unified Trusted Libraries and AI Components catalog in React/TypeScript on PatternFly 6 in one week (faceted metadata including SLSA, license, Python version, release stage, hardware variant); not yet in production.
- Created a code-based design feedback tool (contextual pins, GitHub Issues integration, AI-assisted summaries); subsequently adopted and maintained by PatternFly and used in OpenShift AI prototypes.
- Led vLLM CLI help redesign for 200+ options; ran the RFC and merged upstream with maintainers.
- Cut ROSA-style CLI flows from 30+ sequential prompts to about 12 core paths; contributed CLI UX guidelines adopted in PatternFly.
- Use Cursor and Gemini Notebooks in day-to-day design (adapting components in code, pulling specs and transcripts into one place) and share those workflows with teammates.

#### Interaction Designer / Associate User Experience Designer

- Reworked InstructLab SDK and CLI onboarding for API-driven model training; standardized ROSA CLI patterns across cloud-managed OpenShift services.
- Led Quay.io redesign: vulnerability dashboards, API-integrated workflows, and RBAC across multi-org teams; reduced design debt through PatternFly adoption.

### Independent product work: Tō3 (refOpenMic)  
*Founder & Product Designer | 2023 – Present*

- Designed and launched a real-time voice app on LiveKit so sports officials and event crews can talk over phones and Bluetooth headsets with low-latency full-duplex audio.
- Integrated LiveKit rooms and role-based access with server-issued JWTs (publish vs. subscribe), plus a connection-test room so hosts can validate devices before going live.
- Designed live-room UI for connection health, speaking activity, and mute/admin controls that stay readable under field pressure.
- Diagnosed WebRTC, audio-session, and platform-specific failures (including iOS stack limits) through iterative field and device testing.
- Built and maintain the app with Cursor, AI-assisted workflows, and GitHub.

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
