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

I design developer tools and AI platforms, often in areas where the product direction and technical constraints are still taking shape. My day-to-day work involves learning how the system works, collaborating with engineers and product managers, and building prototypes that help the team make decisions. I turn that work into clear product direction and reusable interaction patterns for CLIs, notebooks, and model-serving experiences. Outside Red Hat, I build and launch my own products, including Tō3, a LiveKit voice app for sports officials and event crews.

## Why my experience fits

1. **OpenShift AI Model Serving:** Took ownership of a complex domain and used architecture mapping and coded prototypes to shape future workflows and deployment recovery.
2. **Tō3:** Built and launched a real-time voice app with LiveKit, including role-based access, device checks, and connection diagnostics.
3. **Quay:** Designed data-heavy workflows, vulnerability dashboards, and role-based access for a multi-tenant container registry.

## LiveKit experience

- Built and launched **Tō3**, a LiveKit voice app for sports officials and event crews.
- Used server-issued access tokens to let hosts speak while keeping listeners in listen-only mode.
- Designed onboarding, device checks, and a test room where hosts can confirm their audio before going live.
- Diagnosed mobile connection and audio failures during field tests and live events.

## Technologies & platforms

**Design & UX:** Interaction design, developer experience, accessibility, design systems, data visualization, prototyping, Figma, PatternFly, Miro  

**Development & AI:** React, TypeScript, Flutter, Dart, Cursor, Gemini Notebooks, GitHub, PR workflows, API integration  

**Platforms & domains:** LiveKit, WebRTC, AI/ML platforms, model serving, developer tooling, observability UX, Kubernetes, OpenShift, Quay, multi-tenant platforms, RBAC, distributed systems

## Professional experience

<div class="resume-keep-together" markdown="1">

### Red Hat, Inc.  
*September 2021 – Present*

#### Senior Product Designer

*(Title evolved Associate UX Designer → Interaction Designer → Senior Product Designer across OpenShift, Quay, and OpenShift AI.)*

- Took ownership of OpenShift AI Model Serving after a Principal Designer transitioned off the domain, quickly building the technical context and cross-functional trust needed to keep roadmap work moving.
- Mapped backend API dependencies and multi-step deployment logic to define future Model Serving workflows, including opinionated catalog deployments and guided “Help Me Decide” paths.
- Designed recovery paths that show why a deployment failed instead of leaving users with generic “Starting” or “Ready” states. Users can then stop, edit, and retry the deployment (prioritized for a 2027 release).
- Built a working prototype for a unified Trusted Libraries and AI Components catalog in one week using React, TypeScript, and PatternFly 6. The catalog helps developers filter by SLSA level, license, Python version, release stage, and hardware.
- Created a code-based feedback tool that lets reviewers pin comments to a prototype, create GitHub issues, and summarize feedback with AI. PatternFly now maintains the tool, and OpenShift AI teams use it in their prototypes.
- Led CLI work from hands-on research through upstream contribution. I created a golden-path GuideLLM mock and specification, then redesigned vLLM help for more than 200 options and merged the changes with maintainers.

#### Interaction Designer / Associate User Experience Designer

- Redesigned ROSA-style CLI flows, replacing more than 30 sequential prompts with about 12 focused paths. I also wrote CLI accessibility and state guidelines that PatternFly adopted.
- Reworked the InstructLab SDK and CLI onboarding for API-driven model training, and standardized ROSA CLI patterns across cloud-managed OpenShift services.
- Led the Quay.io redesign for a multi-tenant container registry, including vulnerability dashboards, API workflows, and role-based access across organizations.

</div>

## Selected independent projects

I also design and ship a suite of mobile apps and PWAs for sports officials, covering the full match-day workflow from scheduling and travel to live voice and post-match review.

- **MatchReadyTX + Match Calendar:** Sync assignments into a personal schedule and travel app, with flight details added to each match timeline.
- **RefLog:** A match-logging app with analytics dashboards. Field testing under time pressure reduced post-match review time by about 70%.
- **RefereeIQ:** An AI coaching tool that retrieves relevant rugby laws and cites its sources. I manually test prompts and answer quality against the original law references.

## Earlier experience

**Integral Care** (2019–2021): Digital Media Specialist; research-backed email and campaign UX.  
**Community Advancement Network** (2017–2019): Communications Specialist; accessible deliverables; +13% traffic / 16k+ new visitors over two years.

## Education

- Associate of Applied Science, Austin Community College, User Experience Design  
- Bachelor of Science, Texas A&M University, Sports Management; minors in Business and Communication

</div>
