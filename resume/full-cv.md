---
layout: default
title: Full CV
parent: Resumes
nav_order: 2
permalink: /resume/full-cv/
resume_page: true
full_cv_page: true
---

<div class="resume-page" markdown="1">

# Justin X. Hale

<div class="resume-meta" markdown="1">
Senior UX / Product Designer  
(979) 703-0804 | [JustinXHale@gmail.com](mailto:JustinXHale@gmail.com)  
[linkedin.com/in/justinxhale](https://www.linkedin.com/in/justinxhale) | [justinxhale.github.io](https://justinxhale.github.io)
</div>

Full CV - extended narrative and project depth. For a concise version for applications, see the [resume]({{ '/resume/' | relative_url }}).

<nav class="full-cv-jump" aria-label="Jump to section">
  <span class="full-cv-jump-label">Jump to:</span>
  <a href="#professional-summary">Summary</a>
  <a href="#tech-platforms">Tech</a>
  <a href="#professional-experience">Experience</a>
  <a href="#independent-projects">Projects</a>
  <a href="#education">Education</a>
</nav>

## Professional summary {#professional-summary}

My primary work is enterprise SaaS and developer-facing platforms: multi-tenant systems, high-stakes operational workflows, and surfaces where platform engineers, security, and data teams live (multi-cluster contexts, developer portals, CLI and SDK paths, AI/ML operational UIs). I ship in production when that is the fastest way to align with engineering. I also care about trustworthy AI-assisted UX (grounding, citations, recoverability, clarity over novelty). Outside Red Hat I own independent mobile and AI-forward products end to end (rugby officiating apps), including field testing and measurable outcomes. Patterns from those operational, connectivity-constrained contexts carry over to logistics-style journeys when that is the role I am discussing.

This document expands on the [resume]({{ '/resume/' | relative_url }}) with case-level detail, independent projects, and earlier roles so recruiters and hiring managers can go deep on scope and impact.

## Technologies & platforms {#tech-platforms}

<p class="resume-tech-keywords">Enterprise SaaS • Multi-tenant systems • RBAC • Authentication • OAuth • API design • Developer portals • CLI tooling • SDK onboarding • AI/ML platforms • RAG workflows • Distributed systems • Multi-cluster environments • Cloud infrastructure • DevOps workflows • OpenShift • Kubernetes • Container registries • React • TypeScript • PatternFly • Flutter • OpenAI API • Google Cloud Functions • Firestore • Jupyter Notebooks • GitHub • VS Code • Figma • Miro • Jira</p>

## Professional experience {#professional-experience}

### Red Hat - Senior Product/UX Designer
*September 2021 - Present*

AI/ML operational surfaces + enterprise SaaS

- Own UX for enterprise SaaS and platform experiences spanning multi-cluster contexts, developer portals, AI/ML operational surfaces, and CLI tooling used by platform engineers and data teams, often designing side-by-side with engineering for scalable UIs where front-end constraints matter.

Recent shipping work: Red Hat Packages catalog (production code)

- Unified Trusted Libraries and AI Components into one discoverable, faceted catalog; designed and shipped reusable catalog, filters, and card patterns in React/TypeScript on PatternFly 6 with accessibility and dark mode in one week from UX audit to production deployment; IA driven by user tasks to support trust and provenance signals (SLSA, license, Python compatibility). [Case study]({{ '/portfolio/ui-packages-redhat/ui-packages-redhat/' | relative_url }})
- Transformed information architecture from two separate ecosystems into one unified catalog with seven or more metadata dimensions for advanced filtering (SLSA provenance, Python version, license, release stage, hardware variant).

Open source UX contribution: vLLM CLI

- Drove vLLM CLI help redesign (progressive disclosure, keyword and group-based navigation for 200+ config options); built consensus through RFC process with open source maintainers; merged upstream serving thousands of developers deploying LLMs in production (example of iterating with technical communities toward adoption). [Case study]({{ '/portfolio/vllm-cli-ux/vllm-cli-ux/' | relative_url }})

CLI workflows and platform UX

- Embedded in CLI workflows to reduce architectural friction, for example bulk prompting and ROSA-style flows: fewer sequential steps, clearer review and recovery ([Bulk prompting](https://github.com/JustinXHale/bulkprompting)).
- Influenced command structure, naming, and interaction sequencing so mental models match backend state and constraints.
- Partnered with engineering to reduce unnecessary branching, clarify error propagation, and lower cognitive load on multi-step configuration in cluster-style environments.
- CLI UX guidance: Contributed to PatternFly-aligned CLI standards and broader [CLI guidelines](https://www.uxd-hub.com/entries/design/cli-guidelines) for enterprise products.
- Aligned roadmap conversations on AI/ML and platform initiatives with deployment models, RBAC, auth, multi-tenant governance, and environment-based configuration lifecycles.

AI enablement and design operations

- Built UXD Yearbook: AI enablement training program that onboards entire Red Hat UX team (100+ designers) to AI-assisted prototyping with Cursor, PatternFly MCP, and GitLab workflows, moving the team from "Foundational to Proficient" through guided, hands-on exercises.
- Created automated design documentation system (Cursor rules + skills) that captures design decisions, auto-creates feature folders, and integrates design history into context panels, reducing manual documentation overhead and preserving design rationale for AI-assisted iteration.
- Own merge request management for UX team repo; maintain team processes and AI-enabled workflows at scale.

---

## Independent projects - Mobile + AI-native UX {#independent-projects}

### RefLog - Mobile match logging (rugby referees)

Context: Rugby referees needed faster, more reliable match event logging for post-game review and assessment. Existing workflows involved hours of manual video review and paper notes with frequent errors and delays.

What I shipped:

- Designed and shipped Flutter app (iOS and Android): offline-first, progressive tap-based event logging, time controls aligned to real match review workflows. Multi-role workflows (Referee and Coach modes), OAuth-based sign-in (Google/GitHub), and role-based access patterns.
- Impact: Roughly 70% reduction in review time versus prior workflow (hours to minutes); improved accuracy and consistency for referee assessments.
- Solo design and implementation; field testing with referees during live matches informed iterative improvements in high-stakes operational context with connectivity constraints and cascading impacts (patterns applicable to field operations, inspections, supply chain checkpoints); Firestore for config and feature flags to enable rapid deployment of UX refinements. [Case study]({{ '/portfolio/reflog/reflog/' | relative_url }})

---

### RefereeIQ - AI-assisted law coaching

Context: Rugby referees needed mentor-like assistance navigating complex, frequently updated laws and official clarifications. Existing resources were fragmented (PDFs, videos, forums) with no trustworthy Q&A system.

What I shipped:

- Designed and shipped AI-native mobile app with trust-forward conversational UX: multi-turn dialogue with targeted retrieval of official World Rugby clarifications, explicit citations to source documents, and graceful uncertainty handling (for example, "I don't have an official clarification on this" instead of hallucinated answers). Patterns directly applicable to high-stakes operational contexts where trustworthiness and traceability matter.
- Flutter client; Cloud Functions, OpenAI API; configurable prompt system via Firestore for rapid iteration on conversational patterns (parallel to design ops for AI behavior).
- User feedback: Referees described it as "having a mentor in your pocket." Trust-forward patterns for high-stakes decisions apply to logistics operators, dispatchers, and supply chain roles that need AI transparency and recoverability. [Case study]({{ '/portfolio/refereeiq/refereeiq/' | relative_url }})

---

### Legacy Ecowear - Apparel (founder / owner)

- Founder and owner of a performance apparel brand. Led sales, account relationships, and day-to-day operations, including DTC and team or bulk orders.
- Hands-on with e-commerce, catalog and checkout, brand presence, and vendor coordination. This was an owner-operator business (sales and operations leadership), not a dedicated in-house product design role.

---

### Red Hat - Interaction Designer (earlier roles)

InstructLab: AI/ML SDK and CLI onboarding

- Reimagined SDK and CLI onboarding for API-driven model-training workflows and developer configuration paths, focused on reducing setup friction and aligning mental models with backend training pipeline constraints ([InstructLab interactive mode](https://github.com/JustinXHale/instructlab-interactivemode)).

ROSA / OpenShift services: CLI standardization

- Helped standardize CLI patterns across cloud-managed OpenShift experiences; championed accessibility and documentation in developer tooling; contributed reusable patterns and docs toward PatternFly cohesion.

---

### Red Hat - Associate User Experience Designer

Quay.io: Enterprise container registry

- Led Quay.io redesign: enterprise container registry and security platform across repository management, vulnerability surfaces, API-integrated workflows, and role-based flows across organizations.
- Reduced design debt through structured PatternFly adoption across DevOps workflows.

---

### Integral Care - Digital Media Specialist
*September 2019 - August 2021*

- Applied design thinking and testing to email and digital journeys; improved clarity and engagement through user-centered iteration.
- Supported state-wide campaign and digital experience direction with measurable performance tracking.

---

### Community Advancement Network - Communications Specialist
*November 2017 - September 2019*

- Digital and physical deliverables with accessibility and user-centered practices in mind.
- Email and social performance tracking; campaigns that measurably increased traffic and reach.

---

## Education {#education}

- Associate of Applied Science - User Experience Design - Austin Community College  
- Bachelor of Science - Sports Management; minors in Business and Communication - Texas A&M University

---

*References available on request.*

</div>
