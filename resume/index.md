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

I design developer tools and AI platforms, often in areas where the product direction and technical constraints are still taking shape. My day-to-day work involves learning how the system works, collaborating with engineers and product managers, and building prototypes that help the team make decisions. I turn that work into clear product direction and reusable interaction patterns for CLIs, notebooks, and model-serving experiences. Outside Red Hat, I build and launch my own products for sports officials, including real-time voice, scheduling, travel, and post-match review tools.

## Technologies & platforms {#tech-platforms}

<p class="resume-tech-keywords"><strong>Design &amp; UX:</strong> Interaction design, developer experience, accessibility, design systems, data visualization, prototyping, Figma, PatternFly, Miro<br>
<strong>Development &amp; AI:</strong> React, TypeScript, Flutter, Dart, Cursor, Gemini Notebooks, GitHub, PR workflows, API integration<br>
<strong>Platforms &amp; domains:</strong> AI/ML platforms, model serving, developer tooling, observability UX, CLI/SDK, Kubernetes, OpenShift, Quay, multi-tenant platforms, RBAC, WebRTC / real-time audio, distributed systems</p>

## Professional experience {#professional-experience}

### Red Hat, Inc.  
*September 2021 – Present*

#### Senior Product Designer

*(Title evolved Associate UX Designer → Interaction Designer → Senior Product Designer as the role expanded across OpenShift, Quay, and OpenShift AI.)*

- Took ownership of OpenShift AI Model Serving after a Principal Designer transitioned off the domain, quickly building the technical context and cross-functional trust needed to keep roadmap work moving.
- Mapped backend API dependencies and multi-step deployment logic to define future Model Serving workflows, including opinionated catalog deployments and guided “Help Me Decide” paths.
- Designed deployment recovery UX so failures show real backend reasons instead of generic “Starting” or “Ready” states, with clean stop, edit, and retry paths (prioritized for a 2027 release).
- Prototyped a unified Trusted Libraries and AI Components catalog in React/TypeScript on PatternFly 6 in one week (faceted metadata including SLSA, license, Python version, release stage, hardware variant); not yet in production.
- Created a code-based design feedback tool (contextual pins, GitHub Issues integration, AI-assisted summaries); subsequently adopted and maintained by PatternFly and used in OpenShift AI prototypes.
- Led CLI work from hands-on research through upstream contribution: created a golden-path GuideLLM mock and specification, then redesigned vLLM help for 200+ options and merged the changes with maintainers.

#### Interaction Designer / Associate User Experience Designer

- Cut ROSA-style CLI flows from 30+ sequential prompts to about 12 core paths; authored CLI UX guidelines (including accessibility and state patterns) adopted in PatternFly.
- Reworked InstructLab SDK and CLI onboarding for API-driven model training; standardized ROSA CLI patterns across cloud-managed OpenShift services.
- Led Quay.io redesign for a multi-tenant container registry: vulnerability dashboards, API-integrated workflows, and RBAC across multi-organization teams; reduced design debt through PatternFly adoption.

### Independent product work  
*Founder & Product Designer | 2023 – Present*

Independently design and ship a suite of live products for sports officials (App Store, Play Store, and PWAs), spanning schedule → travel prep → live voice → post-match review.

**Tō3:** Real-time voice for event crews on LiveKit (Flutter); server-issued JWTs for publish vs. subscribe; connection-test rooms; WebRTC and audio-session debugging in the field.

**MatchReadyTX + Match Calendar (live PWAs):** One-way assignment sync from org scheduling into a personal schedule/travel app, with merge rules that preserve user-owned fields; AeroDataBox flight import into match timelines.

**RefLog:** Cross-platform match logging with multi-role workflows and analytics dashboards; field usability testing under time pressure (~70% faster post-match review vs prior workflows).

**RefereeIQ:** RAG-based AI coaching with semantic retrieval and cited answers; manual prompt and response-quality testing against rugby law references.

## Earlier experience

**Integral Care:** Digital Media Specialist (2019–2021): research-backed email and digital campaign UX.

**Community Advancement Network:** Communications Specialist (2017–2019): accessible deliverables; campaigns that drove +13% traffic and 16k+ new visitors over two years.

## Education {#education}

- Associate of Applied Science, Austin Community College, User Experience Design
- Bachelor of Science, Texas A&M University, Sports Management; minors in Business and Communication

<p class="resume-print-footer">Case studies and deeper project write-ups: <a href="{{ '/portfolio/' | relative_url }}">justinxhale.github.io/portfolio</a></p>

</div>
