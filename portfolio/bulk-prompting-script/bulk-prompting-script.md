---
layout: default
title: Bulk Prompting Script
parent: "Portfolio"
nav_order: 3
---

# Bulk Prompting for Command Line Interfaces

<div style="background: #f5f5f5; padding: 20px; margin-bottom: 30px; border-left: 4px solid #0066cc;">
  <strong>Project Overview</strong><br>
  <strong>Role:</strong> Sole UX Designer<br>
  <strong>Company:</strong> Red Hat<br>
  <strong>Timeline:</strong> ~3 months (1 quarter)<br>
  <strong>Platform:</strong> Interactive CLI (Red Hat OpenShift Service on AWS)<br>
  <strong>Status:</strong> Proof of concept with stakeholder buy-in and engineering prioritization
</div>

## The Problem

Red Hat OpenShift Service on AWS (ROSA) enables customers to deploy fully-managed OpenShift clusters on AWS infrastructure. However, creating a ROSA Classic Cluster via CLI required users to navigate **30+ sequential prompts**—even when using default and recommended settings.

![GIF of Bulk Prompting Script](/portfolio/bulk-prompting-script/assets/july31-readme-gif.gif)
*Traditional CLI flow: sequential prompts create friction and cognitive overhead*

**The pain points:**
- **Cognitive overhead:** Users must hold configuration state in their heads across 30+ sequential questions
- **No visibility:** Can't see all required inputs upfront or understand the full scope
- **Error-prone:** Making a mistake deep in the flow requires restarting from scratch
- **Time-consuming:** Even experienced users spend significant time stepping through prompts
- **No review step:** No way to verify configuration before execution

**User impact:** DevOps engineers, SREs, and platform engineers creating clusters repeatedly found the sequential prompt flow inefficient and frustrating.

---

## The Solution

I designed and prototyped a **bulk prompting interface** for the ROSA CLI that allows users to see and configure all required inputs at once, rather than sequentially.

**Core insight:** Let users work like they think—viewing the full configuration space, jumping between fields, and reviewing before execution.

**Key features:**
- **Single interactive interface:** All configuration options visible at once
- **Non-linear navigation:** Users can move backward/forward freely to adjust any input
- **Dynamic configuration:** Loop-based selection for related settings
- **Summary review:** Complete configuration preview before execution
- **Visual feedback:** Color-coded states and symbols for better clarity
- **Smart defaults:** Pre-configured recommended settings to reduce decision fatigue

**Result:** Reduced configuration steps from **30+ sequential prompts → 12-15 bulk inputs** with full visibility and control.

---

## Impact & Outcomes

**Stakeholder reception:** Presentations to stakeholders received enthusiastic support. Engineering leadership prioritized implementation as a key CLI improvement.

**Efficiency gain:** 60% reduction in configuration steps (30+ → 12-15) with added review and correction capabilities.

**Design validation:** User testing confirmed improved confidence and reduced errors compared to sequential flow.

**Status:** Delivered as proof of concept with engineering roadmap prioritization (I no longer have access to verify production status).

---

## Design Process

### 1. Research & Discovery

**Learning the domain:**
- Interviewed engineers and developers using ROSA CLI regularly
- Read ROSA documentation to understand cluster creation requirements
- Observed users stepping through the 30+ prompt flow to identify friction points

**Key insight from users:** "I wish I could see everything upfront and just fill in what I need to change from defaults."

### 2. Exploring the Solution Space

**Constraints:**
- Must work within CLI environment (no GUI)
- Must support both novice and experienced users
- Must integrate with existing ROSA CLI codebase
- Must maintain backward compatibility

**Design approach:** Interactive TUI (Text User Interface) that mimics form-based input patterns familiar from web UIs, adapted for terminal environments.

### 3. Prototyping & Iteration

**Process:** Rapid prototyping using AI-assisted development (ChatGPT collaboration for CLI scripting)—before "vibe coding" was a term.

**Iteration focus:**
- Visual hierarchy in terminal constraints
- Navigation patterns (arrow keys, tabs, shortcuts)
- Error states and validation feedback
- Summary/review screen design
- Color scheme for accessibility in different terminal themes

**Testing approach:** Tested prototypes with engineers and developers, gathered feedback on usability and mental model alignment, iterated on navigation and visual feedback.

### 4. Key Design Decisions

**Bulk input vs. sequential prompts**

Instead of asking questions one at a time, present all configuration options in a single scrollable interface.

**UX impact:** Users can scan the full scope, prioritize what to configure, and jump between fields—matching how they mentally plan cluster configurations.

**Dynamic summary review**

Before execution, show a complete summary of all selected/configured options with the ability to go back and modify.

**UX impact:** Catches errors before execution, builds user confidence, reduces failed cluster creations.

**Visual feedback via color and symbols**

Use terminal colors and symbols (✓, ✗, ⚠) to indicate status, validation, and required vs. optional fields.

**UX impact:** Improves scannability in text-only environment; reduces cognitive load by encoding information visually.

---

## Technical Implementation

**Interactive CLI framework:** Built using AI-assisted development (ChatGPT collaboration) to prototype and refine the TUI interaction patterns.

**Architecture:**
- Interactive prompt library for terminal-based forms
- State management for configuration options
- Validation layer for input checking
- Summary generator for review screen
- Integration hooks for ROSA CLI execution

**Design extensibility:** Script structure allows easy addition of new configuration options as ROSA evolves.

**Progressive enhancement:** Defaults handle common use cases; advanced users can override everything.

---

## Key Learnings

**1. CLI UX is still UX**

Terminal interfaces suffer from the same usability problems as GUIs. Applying form design principles (visibility, feedback, error prevention) improved CLI experience dramatically.

**2. AI-assisted prototyping enables rapid UX exploration**

Using ChatGPT for CLI scripting allowed me to test interaction patterns quickly without deep CLI framework expertise. The speed of iteration improved design quality.

**3. Visibility reduces cognitive load**

Showing all options upfront gave users confidence and control. The mental model shift from "answer questions" to "fill out a form" reduced errors and increased efficiency.

**4. Review steps build trust**

The summary screen became the most valued feature in testing—users appreciated seeing their full configuration before execution.

**5. Stakeholder demos matter**

Showing working prototypes (even POCs) to stakeholders builds momentum. The interactive demo was more convincing than slides explaining the concept.

---

## Relevant for UX Engineering / AI Product Roles

- **CLI/terminal UX:** Demonstrated ability to design for constrained, text-based interfaces—relevant for developer tools, infrastructure platforms, and data science workflows
- **AI-assisted development:** Used LLMs for rapid prototyping before it was mainstream—shows comfort with modern development workflows
- **Cross-functional collaboration:** Worked directly with engineers and developers to understand needs and validate designs
- **Enterprise platform design:** Designed for technical users (DevOps, SREs) managing complex infrastructure
- **Prototyping to production:** Delivered POC that influenced engineering roadmap and prioritization

---

## Advantages Over Sequential Prompts

- **Interactive bulk input collection:** Configure multiple settings in one interface
- **Enhanced visibility:** See all required and optional inputs upfront
- **Easy adjustments:** Navigate backward to change previous inputs without restarting
- **Dynamic configuration:** Loop-based selection for related settings
- **Summary review:** Verify configuration before execution
- **Visual feedback:** Color-coded states and symbols improve clarity
- **Extensible:** Easy to add new configuration options
- **User-friendly:** Serves both novice and experienced users

---

## Repository

To explore the prototype:

```bash
git clone https://github.com/JustinXHale/bulkprompting.git
cd bulkprompting
# Follow setup instructions in the repository
```

**Note:** This is a proof-of-concept prototype demonstrating the bulk prompting pattern. Production implementation would integrate directly into the ROSA CLI.
