---
layout: default
title: Resume
parent: "Justin X. Hale"
nav_order: 2
permalink: /resume/
resume_page: true
---

<div class="resume-page" markdown="1">

<div class="resume-only-screen" markdown="1">
**Web + PDF:** This page is the living source for your online resume and job applications. **Print → Save as PDF** (Chrome) for a clean export; site chrome is hidden in print. Optionally mirror exports to `assets/resume/justin-x-hale-resume.pdf` for portals that require an upload.
</div>

# Justin X. Hale

<div class="resume-meta" markdown="1">
**Senior UX / Product Designer**
(979) 703-0894 · [JustinXHale@gmail.com](mailto:JustinXHale@gmail.com) · [LinkedIn](https://www.linkedin.com/in/justinxhale) · [GitHub](https://github.com/justinxhale) · [Portfolio]({{ '/' | relative_url }})
*Open to Sr / Staff UX roles owning **AI-native, multi-surface journeys** — mobile and desktop — with measurable adoption and trust-forward patterns.*
</div>

## Professional summary

Product designer specializing in **AI-native, multi-surface experiences** and **complex, high-stakes operational workflows**. I **design and ship end-to-end journeys** across **mobile** (Flutter, iOS/Android) and **desktop** (responsive web, enterprise SaaS), working **directly in production codebases** when it accelerates alignment with engineering (**React / TypeScript**, **PatternFly**, **Flutter**). I care about **trustworthy AI-assisted UX**—grounding, explicit citations, recoverability, and clarity over novelty—and iterate with users through **field testing**, **prototypes**, and **community engagement** toward **measurable outcomes**. I design for **high-stakes, operations-adjacent users** (platform engineers managing multi-cluster systems, security teams, data/ML practitioners) where errors have cascading impacts—patterns directly transferable to **supply chain and logistics operations**.

## Technologies & platforms

**Mobile:** Flutter (iOS & Android shipped apps) · Offline-first architecture · Mobile-first operational workflows
**AI/ML product UX:** Conversational patterns · Targeted retrieval & citations · Trust-forward design · Grounding & uncertainty handling · OpenAI API · Cloud Functions · Configurable prompt systems
**Enterprise web:** React / TypeScript (production code) · PatternFly design system · Responsive design · Accessibility & dark mode
**Platform/operations context:** Multi-tenant SaaS · RBAC · Authentication flows · API-shaped workflows · Developer portals · CLI tooling · SDK onboarding · OpenShift · Kubernetes · Container registries
**Design & collaboration:** Figma & prototyping · Miro · GitHub (RFCs, open source contribution) · Jira · Usability testing · Design systems

## Professional experience

### Red Hat — **Senior Product/UX Designer**
*September 2021 – Present*

**AI/ML operational surfaces + enterprise SaaS**

- Own UX for **enterprise SaaS and platform** experiences spanning **multi-cluster** contexts, **developer portals**, **AI/ML operational surfaces**, and **CLI tooling** used by platform engineers and data teams — **designing side-by-side with engineering** for **scalable**, **performant** UIs where front-end constraints matter.

**Recent shipping work: Red Hat Packages catalog (production code)**

- Unified **Trusted Libraries** and **AI Components** into one discoverable, **faceted catalog**; designed and shipped **reusable catalog/filters/card patterns** in **React/TypeScript** on **PatternFly 6** with **accessibility** and dark mode in **1 week** from UX audit to production deployment; IA driven by user tasks to support **trust** and provenance signals (**SLSA**, license, Python compatibility). [Case study]({{ '/portfolio/ui-packages-redhat/ui-packages-redhat/' | relative_url }})
- Transformed information architecture from 2 separate ecosystems → 1 unified catalog with 7+ metadata dimensions for advanced filtering (SLSA provenance, Python version, license, release stage, hardware variant).

**Open source UX contribution: vLLM CLI**

- Drove **vLLM** CLI help redesign (**progressive disclosure**, keyword and group-based navigation for 200+ config options); built consensus through **RFC process** with open source maintainers; merged **upstream** serving thousands of developers deploying LLMs in production — example of **iterating with technical communities** toward **adoption**. [Case study]({{ '/portfolio/vllm-cli-ux/vllm-cli-ux/' | relative_url }})

**CLI workflows & platform UX**

- Embedded in **CLI workflows** to reduce architectural friction — e.g. **bulk prompting / ROSA**-style flows: fewer sequential steps, clearer review and recovery ([Bulk prompting](https://github.com/JustinXHale/bulkprompting)).
- Influenced **command structure**, naming, and **interaction sequencing** so mental models match **backend state** and constraints.
- Partnered with engineering to **reduce unnecessary branching**, clarify **error propagation**, and lower cognitive load on **multi-step configuration** in cluster-style environments.
- **CLI UX guidance:** Contributed to **PatternFly**-aligned CLI standards and broader [CLI guidelines](https://www.uxd-hub.com/entries/design/cli-guidelines) for enterprise products.
- Aligned roadmap conversations on **AI/ML** and platform initiatives with **deployment models**, **RBAC**, **auth**, **multi-tenant governance**, and **environment-based** configuration lifecycles.

**AI enablement & design operations**

- Built **UXD Yearbook**: AI enablement training program that onboards entire Red Hat UX team (100+ designers) to **AI-assisted prototyping** with Cursor, PatternFly MCP, and GitLab workflows — moves team from "Foundational to Proficient" through guided, hands-on exercises.
- Created **automated design documentation system** (Cursor rules + skills) that captures design decisions, auto-creates feature folders, and integrates design history into context panels — reduces manual documentation overhead and ensures design rationale is preserved for AI-assisted iteration.
- Own **merge request management** for UX team repo; maintain team processes and AI-enabled workflows at scale.

---

## Independent projects — Mobile + AI-native UX

### RefLog — Mobile match logging (rugby referees)

**Context:** Rugby referees needed faster, more reliable match event logging for post-game review and assessment — existing workflows involved hours of manual video review and paper notes with frequent errors and delays.

**What I shipped:**

- Designed and shipped **Flutter** app (**iOS & Android**): **offline-first**, progressive **tap-based** event logging, time controls aligned to real match review workflows.
- **Impact:** **~70% reduction** in review time vs. prior workflow (hours → minutes); improved accuracy and consistency for referee assessments.
- Solo **design and implementation**; **field testing** with referees during live matches informed iterative improvements in high-stakes operational context with connectivity constraints and cascading impacts (patterns applicable to field operations, inspections, supply chain checkpoints); **Firestore** for config / feature flags to enable rapid deployment of UX refinements.
- [Case study]({{ '/portfolio/reflog/reflog/' | relative_url }})

---

### RefereeIQ — AI-assisted law coaching

**Context:** Rugby referees needed mentor-like assistance navigating complex, frequently updated laws and official clarifications — existing resources were fragmented (PDFs, videos, forums) with no trustworthy Q&A system.

**What I shipped:**

- Designed and shipped **AI-native mobile app** with **trust-forward conversational UX**: multi-turn dialogue with **targeted retrieval** of official **World Rugby** clarifications, **explicit citations** to source documents, and **graceful uncertainty handling** (e.g., "I don't have an official clarification on this" vs. hallucinated answers) — patterns directly applicable to high-stakes operational contexts where trustworthiness and traceability matter.
- **Flutter** client; **Cloud Functions**, **OpenAI API**; **configurable prompt system** via **Firestore** for rapid iteration on conversational patterns (parallel to **design ops** for AI behavior).
- **User feedback:** Referees described it as "having a mentor in your pocket"—trust-forward patterns for high-stakes decisions applicable to logistics operators, dispatchers, and supply chain roles requiring AI transparency and recoverability.
- [Case study]({{ '/portfolio/refereeiq/refereeiq/' | relative_url }})

---

### Red Hat — **Interaction Designer** (earlier roles)

**InstructLab: AI/ML SDK & CLI onboarding**

- Reimagined **SDK and CLI onboarding** for API-driven model-training workflows and developer configuration paths — focused on reducing setup friction and aligning mental models with backend training pipeline constraints ([InstructLab interactive mode](https://github.com/JustinXHale/instructlab-interactivemode)).

**ROSA / OpenShift services: CLI standardization**

- Helped **standardize CLI patterns** across cloud-managed OpenShift experiences; championed **accessibility** and **documentation** in developer tooling; contributed **reusable patterns** and docs toward **PatternFly** cohesion.

---

### Red Hat — **Associate User Experience Designer**

**Quay.io: Enterprise container registry**

- Led **Quay.io** redesign: enterprise **container registry** and security platform — repository management, vulnerability surfaces, **API-integrated** workflows, **role-based** flows across organizations.
- Reduced design debt through structured **PatternFly** adoption across **DevOps** workflows.

---

### Integral Care — **Digital Media Specialist**
*September 2019 – August 2021*

- Applied **design thinking** and testing to **email and digital journeys**; improved clarity and engagement through user-centered iteration.
- Supported **state-wide** campaign and digital experience direction with measurable performance tracking.

---

### Community Advancement Network — **Communications Specialist**
*November 2017 – September 2019*

- Digital and physical deliverables with **accessibility** and user-centered practices in mind.
- **Email and social** performance tracking; campaigns that measurably increased traffic and reach.

---

## Education

- **Associate of Applied Science** — User Experience Design — Austin Community College  
- **Bachelor of Science** — Sports Management; minors in Business and Communication — Texas A&M University

---

*References available on request.*

</div>
