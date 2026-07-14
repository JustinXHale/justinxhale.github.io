---
layout: default
title: "UXD Prototyping Hub"
parent: Red Hat & Enterprise
grand_parent: Portfolio
nav_order: 7
---

# UXD Prototyping Hub: One URL for Stakeholder Review

<div style="background: #f5f5f5; padding: 20px; margin-bottom: 30px; border-left: 4px solid #0066cc;">
  <strong>Project Overview</strong><br>
  <strong>Role:</strong> Creator &amp; maintainer (Red Hat UXD)<br>
  <strong>Stack:</strong> React, TypeScript, PatternFly, GitLab Pages<br>
  <strong>Users:</strong> Engineers, PMs, designers, and stakeholders reviewing coded prototypes<br>
  <strong>Outcome:</strong> Single public destination replacing scattered per-experiment repo links
</div>

## The problem

UXD was doing more AI-assisted prototyping. Each experiment tended to get its own repo and GitLab Pages URL. That created friction for everyone:

- **Designers** managed too many links and deploy pipelines
- **Stakeholders** did not know which URL was current
- **Engineers** lost track of which prototype matched which discussion

GitLab IT policy also limits multiple top-level URLs under one project, so spinning up a new repo per experiment did not scale.

## The solution

I built a **Prototyping Hub**: one GitLab repo, one Pages URL, many prototypes behind it.

**How it works:**

- **`/`:** Landing hub with cards (title, blurb, Open prototype button)
- **Routes:** Each prototype is a React route under the same app (`/yaml-standards`, `/git-self-help`, `/guidellm`, …)
- **Registry:** `registry.ts` drives the card catalog; add a row + route to ship a new prototype
- **Shared shell:** PatternFly masthead; brand link returns to the hub
- **Lifecycle:** When a prototype is ready for a product, it graduates to the upstream repo

## Example prototypes on the hub

| Prototype | Purpose |
|-----------|---------|
| **YAML standards** | OpenShift AI YAML phase standards (preview, escape hatch, synchronized editor) |
| **Git self-help** | UXD Git and Cursor cheatsheet for designers |
| **GuideLLM CLI onboarding** | `guidellm start` hub: smoke, quick start, guided flows |

## Pairing with design-comments

The hub answers **"Where is the work?"** [design-comments]({{ '/portfolio/design-comments/design-comments/' | relative_url }}) answers **"How do we give feedback on it?"**

Together they close a gap Figma used to cover: publish coded UI and collect structured critique without returning to static files.

## Outcomes

- **One bookmark** for stakeholders reviewing UXD coded work
- **Lower designer overhead:** one CI pipeline, one registry, one deploy pattern
- **Faster iteration:** new prototypes ship as routes, not new infrastructure
- **Org pattern:** other designers can fork the hub model for their own prototype catalogs

## Related work

- [design-comments]({{ '/portfolio/design-comments/design-comments/' | relative_url }}): in-context feedback on prototypes hosted here or elsewhere
- [OpenShift AI deploy wizard]({{ '/portfolio/openshift-ai-deploy-wizard/openshift-ai-deploy-wizard/' | relative_url }}): product-area work informed by hub-hosted explorations
