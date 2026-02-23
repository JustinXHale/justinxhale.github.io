---
layout: default
title: "RefereeIQ-Sofía Chatbot"
parent: Portfolio
nav_order: 1
---

# RefereeIQ — A Conversational AI Coach for Rugby Referees

<div style="background: #f5f5f5; padding: 20px; margin-bottom: 30px; border-left: 4px solid #0066cc;">
  <strong>Project Overview</strong><br>
  <strong>Role:</strong> Product Designer & Developer (end-to-end)<br>
  <strong>Timeline:</strong> Personal project, iterative development<br>
  <strong>Platform:</strong> Flutter (Android), Firebase Cloud Functions, OpenAI API<br>
  <strong>Impact:</strong> Shipped cross-platform AI coaching tool used by rugby referees for scenario-based learning
</div>

## The Challenge

<figure style="float: right; margin-left: 20px; max-width: 300px;">
  <img src="/portfolio/refereeiq/assets/welcome.png" alt="Welcome Screen" style="width: 100%;">
  <figcaption>Sofia's welcome screen sets the coaching tone</figcaption>
</figure>

Rugby referees manage hundreds of laws, frequent clarifications, and nuanced edge cases. Current learning methods are fragmented—PDFs, forums, mentor advice—making it difficult to develop consistent judgment quickly.

**The opportunity:** Create a conversational AI that feels like a mentor, handles multi-turn reasoning, and builds trust through citations and transparency—not just another generic chatbot.

## Solution: Sofia, the AI Referee Coach

I designed and built **RefereeIQ**, a conversational assistant that helps rugby referees reason through the *Laws of the Game* using natural dialogue. Instead of paging through PDFs, referees ask questions and get **grounded answers** with relevant clarifications and official law links, delivered by "**Sofia**."

**Core design principle:** Reasoning-centric UX—blending open-ended conversation with grounding, citations, and explicit fallbacks to earn trust in high-stakes decision contexts.

## Impact & Outcomes

**Shipped:** Cross-platform Android release with working chat experience and daily AI-generated challenges.

**Usage:** Referees and coaches actively used Sofia for scenario-based learning and law clarification.

### User Feedback

> "Seeing the exact clarification link is faster than hunting PDFs."

> "When it checks the clarification instead of guessing, I trust it more."

**Key success metric:** Trust through transparency—users valued explicit citations and uncertainty handling over confident but vague answers.


## Design Decisions: Building Trust Through Conversation

### 1. Multi-Turn Reasoning with Context

<figure style="float: right; margin-left: 20px; max-width: 300px;">
  <img src="/portfolio/refereeiq/assets/questionfollowup.jpg" alt="Multi-turn conversation" style="width: 100%;">
  <figcaption>Sofia maintains context across turns and asks clarifying questions</figcaption>
</figure>

Rather than treating each question in isolation, Sofia remembers recent conversation turns and can ask follow-up questions. This mirrors how a real coach would work—clarifying the scenario before jumping to an answer.

**Design choice:** Recent user + Sofia turns are preserved and sent server-side. The system prompt consistently enforces terminology and citation standards aligned with official law language.

**UX impact:** Referees can have natural back-and-forth dialogues without restarting context, leading to more nuanced answers.

### 2. Grounding with Citations (Not Just Confidence)

<figure style="float: right; margin-left: 20px; max-width: 300px;">
  <img src="/portfolio/refereeiq/assets/askSofia.png" alt="Sofia providing grounded answers" style="width: 100%;">
  <figcaption>Answers include direct links to official World Rugby clarifications</figcaption>
</figure>

When Sofia is uncertain or when official guidance exists, the system retrieves and cites **World Rugby Law Clarifications** directly. Instead of hallucinating confident answers, Sofia says "Let's check the latest clarification on this topic" and provides excerpts + links.

**Technical implementation:** Backend scrapes the official clarifications index, detects when a clarification is relevant, fetches and parses the page (title + sections), then injects excerpts into the model context for Sofia to cite.

**UX impact:** Users trust the answers because they can verify the source. This transparency builds confidence in the AI coach.

### 3. Tone: Patient Coach, Not Know-It-All

The system prompt frames Sofia as a **patient coach**—law-accurate, explicit when uncertain, and focused on helping referees learn judgment, not just memorize rules.

**Design choice:** Lower temperature for factual answers; slightly higher for conversational coaching. Moderation pass on user input for safety.

**UX impact:** Referees report the experience feels more like talking to a mentor than querying a database.

### 4. Daily Challenges for Active Learning

<figure style="float: right; margin-left: 20px; max-width: 300px;">
  <img src="/portfolio/refereeiq/assets/llmgeneratedquestions.png" alt="Daily challenge questions" style="width: 100%;">
  <figcaption>AI-generated multiple-choice questions using official law wording</figcaption>
</figure>

Beyond chat, Sofia offers daily challenges—5 AI-generated multiple-choice questions (5 points each) with strict constraints: official law wording, one correct answer.

<figure style="float: right; margin-left: 20px; max-width: 300px;">
  <img src="/portfolio/refereeiq/assets/challengehistory.png" alt="Challenge history tracking" style="width: 100%;">
  <figcaption>Progress tracking motivates continued learning</figcaption>
</figure>

**Technical implementation:** Scheduled Cloud Function generates questions daily, stored in Firestore. The UI tracks history and scores.

**UX impact:** Gamification encourages regular engagement; referees use it for pre-match warm-up.

## What's Real vs. Exploratory

**Shipped & live:**
- Chat → Cloud Function → OpenAI with focused Sofia system prompt
- Grounding via targeted retrieval of official World Rugby clarifications (not full RAG/vector store)
- Configurable AI behavior via Firestore (model, temperature, prompts) for live tuning without redeploys
- Daily challenge generator with strict law-aligned constraints
- Flutter chat UI with markdown rendering and in-app link launching

**Future improvements:**
- Full RAG pipeline with embeddings-backed store for laws + clarifications + competition regulations
- Scoped sources by competition/region
- Evaluation harness for prompt regression testing
- Usage telemetry (when/why retrieval fires, uncertainty rates, citation patterns)

## Technical Architecture

**Flutter app** (chat UI, daily challenges, history tracking) → **Cloud Functions** (chat handler, moderation, clarification retrieval, scheduled content generation) → **OpenAI API** (Sofia responses) + **Firestore** (configuration overrides, challenge storage)

### Chat Flow
1. User message → moderation pass
2. Build Sofia system prompt + recent conversation context
3. Detect when official clarification would help
4. Fetch & parse World Rugby clarification pages (title + sections)
5. Assemble messages with excerpts/URLs for model context
6. OpenAI chat completion
7. Return grounded answer with citations

### Key Technical Decisions

**Live configurability:** Model, temperature, and system prompts stored in Firestore with code defaults—enabling rapid iteration without redeploys. Critical for tuning AI behavior based on user feedback.

**Selective retrieval:** Clarification lookup triggers only when needed (user request or model uncertainty) to minimize latency and parsing overhead while maintaining UX fluidity.

**Cost optimization:** Compact system prompts, tuned temperature per task (lower for factual Q&A, higher for conversational coaching), bounded max tokens for concise answers.

**Safety:** Server-side moderation pass on user input before model calls; guardrails in system prompt.

## Key Learnings

**1. Trust requires transparency, not just accuracy**

Users trusted Sofia more when she explicitly said "I'm checking the official clarification" rather than sounding confident. In AI UX, showing the reasoning path matters as much as the answer.

**2. Grounding architecture affects UX directly**

Targeted retrieval (fetch specific clarifications on-demand) kept conversations fluid with low latency. A full RAG system would have added complexity without proportional UX benefit for this use case.

**3. Live configurability is a superpower**

Storing prompts and model settings in Firestore meant I could tune Sofia's tone and behavior within minutes based on user feedback—no code deploys. This rapid iteration loop was essential for finding the right coaching tone.

**4. Fallbacks are features, not bugs**

Designing explicit "let me check" patterns made uncertainty feel helpful rather than broken. In high-stakes domains (laws, medical, legal), admitting uncertainty builds more trust than fake confidence.

**5. Generalizability to other domains**

This pattern—conversational AI with grounding, citations, and fallbacks—extends beyond rugby. Any domain with authoritative sources (legal docs, SOPs, policies, data dictionaries) could benefit from this UX approach.

## Relevant for AI/ML Product Roles

- **Reasoning-centric UX:** Shows *how* the AI reasons (citations, fallbacks), not just *what* it answers—applicable to analysis tools, forecasting agents, and data prep assistants
- **Grounding over confidence:** Verifiable references > vague confidence—maps to data science workflows where assumptions and data sources must be explicit
- **Rapid experimentation:** Firestore-backed config enabled A/B testing prompts and temperature without deploys—critical for AI product iteration
- **Cross-functional execution:** Owned full stack (UX, backend, AI integration, deployment)—demonstrates ability to ship AI products independently

