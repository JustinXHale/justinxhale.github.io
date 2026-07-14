---
layout: default
title: "design-comments"
parent: Red Hat & Enterprise
grand_parent: Portfolio
nav_order: 1
---

# design-comments: In-Context Feedback for Coded Prototypes

<div style="background: #f5f5f5; padding: 20px; margin-bottom: 30px; border-left: 4px solid #0066cc;">
  <strong>Project Overview</strong><br>
  <strong>Role:</strong> Originator &amp; architect (Red Hat UXD)<br>
  <strong>Product:</strong> <a href="https://github.com/JustinXHale/design-comments">design-comments</a> npm package<br>
  <strong>Maintenance:</strong> PatternFly team now maintains the package; I originated the architecture and shipped the first integrated version<br>
  <strong>Impact:</strong> Reusable commenting overlay adopted across UXD prototypes; integrated into OpenShift AI prototype (RHOAI 3.4)
</div>

## The problem

As design moved from Figma to AI-assisted coded prototypes, UXD lost what Figma had made routine: in-context commenting, async critique, and traceable feedback tied to specific UI. Engineers, PMs, and designers reviewed running apps in scattered links and Slack threads. There was no way to pin feedback to components or sync discussion state.

## The insight

Stakeholders do not need another static file. They need feedback on running UI with enough structure that designers can act on it without losing context.

## What I designed

**design-comments** is a floating comment overlay for React apps. I architected it end to end:

- **In-context pins:** Option+click placement, hover preview, pins anchor to elements and follow scroll/resize
- **Component detection:** React component names, types, props, and tree paths captured with each thread
- **GitHub Issues as backend:** Threads sync to GitHub Issues with component metadata; lifecycle mirrors issue open/close
- **Jira linking:** Optional ticket links per page or section
- **AI summarize:** Collapsible summaries for all threads, current page, or a single thread (cached to avoid repeat API calls)
- **Designer-friendly setup:** `npx design-comments init` for PatternFly React Seed projects; OAuth setup modal for fork deployments

<figure style="width: 100%; margin: 20px 0;">
  <img src="https://raw.githubusercontent.com/JustinXHale/design-comments/main/screenshots/defaultWidget.png" alt="design-comments default widget overlay" style="width: 100%; max-width: 800px; border: 1px solid #ddd;">
  <figcaption>Floating comment widget with thread list and in-context pins</figcaption>
</figure>

<figure style="width: 100%; margin: 20px 0;">
  <img src="https://raw.githubusercontent.com/JustinXHale/design-comments/main/screenshots/DesignDetails1.png" alt="Component details captured with a comment" style="width: 100%; max-width: 800px; border: 1px solid #ddd;">
  <figcaption>Component metadata captured automatically with each pin</figcaption>
</figure>

## How it fits together

This was not a one-off screen. I identified an org-wide tooling gap (commenting on coded prototypes) and shipped a reusable product:

1. **Publish work:** Designers host prototypes on a single URL ([Prototyping Hub]({{ '/portfolio/prototyping-hub/prototyping-hub/' | relative_url }}))
2. **Collect feedback:** Stakeholders pin comments on live UI via design-comments
3. **Track resolution:** GitHub Issues carry state from discussion to close to sync

The PatternFly team now maintains **design-comments**; the package integrates with PatternFly React Seed via `npm install design-comments`.

## OpenShift AI integration (RHOAI 3.4)

I integrated the commenting system into the OpenShift AI UXD prototype as a **Discussions** tab in the context panel:

- Two-level panel: **Feature context** vs **Discussions** (prototype-wide threads)
- GitLab issue lifecycle alignment (close/reopen/delete mirrors issue state)
- Summarize with collapsible inline cards; designer OAuth onboarding for fork deployments
- Sign-in from thread detail when unauthenticated

This deployment is one consumer of the architecture, not the product itself.

## Outcomes

- **Reusable npm package** published and documented on [GitHub](https://github.com/JustinXHale/design-comments)
- **PatternFly adoption:** maintained by the PatternFly team for UXD prototype workflows
- **OpenShift AI prototype:** integrated Discussions for stakeholder review on coded UI
- **Reduced friction:** designers no longer rely on Figma-only critique for AI-assisted builds

## Related work

- [Prototyping Hub]({{ '/portfolio/prototyping-hub/prototyping-hub/' | relative_url }}): single URL where designers publish coded prototypes for review
- [OpenShift AI deploy wizard]({{ '/portfolio/openshift-ai-deploy-wizard/openshift-ai-deploy-wizard/' | relative_url }}): another surface in the same prototype ecosystem
