---
layout: default
title: "Published Product Suite"
parent: Personal Projects
grand_parent: Portfolio
nav_order: 1
---

# Published Product Suite: Real Users, AI-Assisted Build

<div style="background: #f5f5f5; padding: 20px; margin-bottom: 30px; border-left: 4px solid #0066cc;">
  <strong>Overview</strong><br>
  <strong>Role:</strong> Solo designer-developer across all apps<br>
  <strong>Approach:</strong> AI-assisted design and implementation outside work (same workflow I use at Red Hat)<br>
  <strong>Proof:</strong> Multiple shipped PWAs and store apps with field testing and real users
</div>

Individual apps are useful; the suite is the story. I design, build, publish, and iterate on a family of products for sports officials and event crews: **schedule → travel prep → live voice → post-match review**.

## Why a suite matters

Each app solves a narrow problem. Together they show:

- **End-to-end ownership:** research → design → build → publish → field test
- **Connected systems:** org scheduling syncs into a personal calendar; live voice sits on LiveKit; review tools stay offline-first
- **Platform range:** Flutter native, PWAs, AI-native coaching apps
- **Real users:** rugby officials, coaches, educators, event crews
- **Trust patterns:** offline-first, citations, framework-aligned AI output

## The apps

| App | What it does | Platform | Case study |
|-----|--------------|----------|------------|
| **[Tō3]({{ '/portfolio/to3/to3/' | relative_url }})** | LiveKit-powered live voice for event crews | Flutter / app stores | [Deep dive]({{ '/portfolio/to3/to3/' | relative_url }}) |
| **MatchReadyTX** | Org match scheduling for assigners, officials, team admins (Sheet as schedule source of truth; fees/perks in-app) | Live PWA (`matchreadytx.web.app`) | Suite member |
| **Match Calendar** | Personal schedule/travel for officials; one-way sync from MatchReadyTX; AeroDataBox flight import into timelines | Live PWA (`matchcalendar.web.app`) | Suite member |
| **[RefLog]({{ '/portfolio/reflog/reflog/' | relative_url }})** | Offline match event logging for referees | iOS + Android | [Deep dive]({{ '/portfolio/reflog/reflog/' | relative_url }}) |
| **[RefereeIQ]({{ '/portfolio/refereeiq/refereeiq/' | relative_url }})** | Trust-forward AI law coach | Flutter / Android | [Deep dive]({{ '/portfolio/refereeiq/refereeiq/' | relative_url }}) |
| **[ReflectED]({{ '/portfolio/reflected/reflected/' | relative_url }})** | AI reflection coach for educators and coaches | PWA / Next.js | [Deep dive]({{ '/portfolio/reflected/reflected/' | relative_url }}) |
| **Sevens Manager** | Live match clock and stats updates during sevens games | PWA, local-first (IndexedDB) | Suite member |

## Cross-product integration (MatchReadyTX → Match Calendar)

Both are live PWAs I built and operate:

- **One-way sync:** Confirmed MatchReadyTX assignments import into Match Calendar via a Firebase callable (`syncMatchReadyAssignments`), with stable external IDs and merge rules that update source-owned match facts without duplicating rows.
- **Personal fields stay personal:** Flights, hotel, expenses, and notes remain Calendar-owned and are not overwritten by sync.
- **Flight import:** Match Calendar can look up real flight segments through AeroDataBox (Cloud Functions) and place them on the match timeline. Separate from MatchReadyTX’s “flight provided” perk flag on org matches.

## Shared patterns across the suite

- **Field-tested UX:** Built for use under time pressure (matches, classrooms, live events)
- **AI with guardrails:** Citations, explicit uncertainty, framework-aligned reports (not generic chat)
- **Configurable behavior:** Feature flags, remote config, prompt layers for rapid iteration
- **Publish for real:** App Store, Play Store, and installable PWAs (not mockups)

## Outcomes

- **~70% reduction** in post-match review time (RefLog vs prior workflows)
- **Trust-forward AI:** users value citations and “no answer” behavior over confident hallucination (RefereeIQ)
- **Practitioner workflows:** lesson/session plans required before analyze (ReflectED)
- **Live operational tools:** voice, scheduling sync, travel timelines, and stats during real events (Tō3, MatchReadyTX, Match Calendar, Sevens Manager)

## Related Red Hat work

The same instinct shows up at work: [design-comments]({{ '/portfolio/design-comments/design-comments/' | relative_url }}), [Prototyping Hub]({{ '/portfolio/prototyping-hub/prototyping-hub/' | relative_url }}), and [ui-packages]({{ '/portfolio/ui-packages-redhat/ui-packages-redhat/' | relative_url }}) (coded prototype).
