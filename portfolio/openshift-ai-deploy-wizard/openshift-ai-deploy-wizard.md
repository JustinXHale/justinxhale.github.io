---
layout: default
title: "OpenShift AI Deploy Wizard"
parent: Red Hat & Enterprise
grand_parent: Portfolio
nav_order: 8
---

# OpenShift AI: Models &amp; Deploy Wizard

<div style="background: #f5f5f5; padding: 20px; margin-bottom: 30px; border-left: 4px solid #0066cc;">
  <strong>Project Overview</strong><br>
  <strong>Role:</strong> UX Designer on the OpenShift AI UXD team<br>
  <strong>Scope:</strong> <strong>Models → Deployments</strong> surfaces and <strong>Deploy model wizard</strong> within a team prototype (not the full OpenShift AI platform)<br>
  <strong>Artifact:</strong> Design prototype for stakeholder review and iteration<br>
  <strong>Focus:</strong> MaaS vs AI asset endpoint availability, deployment table UX, wizard constraint explanations
</div>

> UX Designer on the OpenShift AI UXD team. I owned design for **Models → Deployments** and the **Deploy model wizard** within a team prototype. I did not own evaluations, prompt registry, playground, or observability surfaces (other designers did).

## The problem

Platform engineers and data teams deploying models needed to understand how a deployment would be published: as an AI asset endpoint, as MaaS, both, or neither. They had to do that without misconfiguring gateway or authentication settings. The deployments table and deploy wizard had to reflect backend constraints honestly while staying scannable under operational pressure.

## What I designed

### Unified deployments table

- Single table for internal and external models when the external-models flag is on
- **Availability** labels: **AI asset endpoint** and/or **MaaS** (orange PatternFly labels)
- Status column aligned to KServe guidelines (Ready, Failed, Starting, Stopping, etc.)
- Column order matched production **LLMInferenceService** expectations
- **Manage availability** kebab action updates labels on existing rows

### Deploy model wizard

- **Summary step** previews availability labels before deploy
- Wizard completion adds a row to Deployments with labels matching **Publish as AI asset endpoint** and **Publish as MaaS** selections from Advanced settings
- **MaaS lock explanations** (RHOAIUX-2317): when MaaS is selected, Gateway selection and Token authentication stay visible but disabled, with **FormGroupLabelHelp** popovers and disabled-tooltip pattern explaining why
- **Register external model** modal parity with wizard (disabled Project and Model availability checkboxes matching deploy flow)

### Design process

Decisions are documented in structured design-history artifacts (e.g. RHOAIUX-2309, RHOAIUX-2317): availability inline next to deployment name, mock data covering both/AAE-only/MaaS-only/neither states, and progressive disclosure in Advanced settings.

## Outcomes

- **Clearer mental model** for availability types before and after deploy
- **Constraint-forward UX:** users see why controls lock instead of silent disabled fields
- **Stakeholder alignment:** prototype used for review with PM and engineering on deployment flows
- **Scoped ownership:** table and wizard patterns ready for engineering handoff within my surface area

## Related work

- [design-comments]({{ '/portfolio/design-comments/design-comments/' | relative_url }}): stakeholder feedback on the same prototype ecosystem
- [Red Hat Packages catalog]({{ '/portfolio/ui-packages-redhat/ui-packages-redhat/' | relative_url }}): another production-adjacent catalog surface I shipped to production
