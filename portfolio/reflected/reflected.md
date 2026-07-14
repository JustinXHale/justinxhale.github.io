---
layout: default
title: "ReflectED"
parent: Personal Projects
grand_parent: Portfolio
nav_order: 3
---

# ReflectED: AI Reflection Coach for Educators and Coaches

<div style="background: #f5f5f5; padding: 20px; margin-bottom: 30px; border-left: 4px solid #0066cc;">
  <strong>Project Overview</strong><br>
  <strong>Role:</strong> Product designer &amp; developer (solo)<br>
  <strong>Platform:</strong> PWA / Next.js<br>
  <strong>Tagline:</strong> Teach. Reflect. Grow.<br>
  <strong>Impact:</strong> Framework-aligned coaching reports from session transcripts; daily feedback without surveillance
</div>

## The problem

Teachers, coaches, and trainers rarely get frequent observation feedback. Evaluations are often subjective, delayed, and limited to a few sessions per year. Practitioners need evidence-based coaching at scale, not another generic chatbot.

## The solution

**ReflectED** reads a session transcript, compares what happened to what was planned (when a plan exists), and returns a supportive, evidence-based coaching report. It is like having a master coach review every session.

**Subcategories (MVP):**

| Vertical | User | Framework |
|----------|------|-----------|
| Education | Classroom teacher | Danielson or Marzano |
| Sport | Club or school coach | ISCF or USOPC QCF |

## Primary flow (transcript-first)

1. Record in native Voice Memos (or similar) during the session
2. Transcribe after the session
3. Open ReflectED; set event date, subcategory, session plan, goal chips
4. Upload transcript (`.txt`); hour-long sessions are too large to paste reliably
5. **Reflect:** AI generates framework-aligned report saved to history

**Education:** Lesson plan required before analyze (learning objective, timed segments, focus areas).

**Sport:** Session plan required unless opted out via **No session plan**.

## Design decisions

- **Snapshot vs full report:** Coaching report opens on Snapshot tab (score, identity profile, headline growth focus); full rubric detail on Coaching report tab
- **Draft workflow:** Multiple session drafts in localStorage; Continue draft / Start new session on `/session`
- **Evidence from transcript:** “From your session” quotes for bright spots and growth signals
- **ReflectED voice:** Supportive coaching tone regardless of framework (Danielson, Marzano, sport QCF)

## Outcomes

- **Practitioner workflow UX:** plan required before analyze mirrors clinical and operational “chart before action” patterns
- **Structured AI output:** rubric scores, identity profile, actionable next steps (not unstructured chat)
- **Real iteration:** design-history driven feature evolution (drafts, filters, delete flows)

## Part of the suite

ReflectED is one app in my [published product suite]({{ '/portfolio/product-suite/product-suite/' | relative_url }}), alongside [Tō3]({{ '/portfolio/to3/to3/' | relative_url }}), [RefLog]({{ '/portfolio/reflog/reflog/' | relative_url }}), and [RefereeIQ]({{ '/portfolio/refereeiq/refereeiq/' | relative_url }}).
