---
layout: default
title: "InstructLab Interactive Mode"
parent: Red Hat & Enterprise
grand_parent: Portfolio
nav_order: 4
---

# InstructLab: CLI Onboarding for Model Training

<div style="background: #f5f5f5; padding: 20px; margin-bottom: 30px; border-left: 4px solid #0066cc;">
  <strong>Project Overview</strong><br>
  <strong>Role:</strong> Interaction Designer (Red Hat)<br>
  <strong>Focus:</strong> SDK and CLI onboarding for API-driven model-training workflows<br>
  <strong>Artifact:</strong> <a href="https://github.com/JustinXHale/instructlab-interactivemode">InstructLab interactive mode</a><br>
  <strong>Impact:</strong> Reduced setup friction for novice users; step-by-step guided installation
</div>

## The problem

InstructLab’s CLI exposed a powerful but intimidating setup path for developers new to model training. Users faced prerequisite checks, configuration steps, and backend pipeline concepts without a guided mental model. That led to abandoned installs and support requests.

## The solution

I reimagined SDK and CLI onboarding as a **structured interactive mode**: a step-by-step guide through installation and configuration, aligned with how the training pipeline actually works.

**Key design moves:**

- Progressive steps for prerequisites, install, and configuration
- Language and sequencing matched to backend constraints (not generic wizard filler)
- Documented flows in Miro for stakeholder and engineer alignment
- Open-source artifact others can run locally ([interactive mode repo](https://github.com/JustinXHale/instructlab-interactivemode))

## Outcomes

- **Reduced onboarding friction** for novice InstructLab users
- **Peer recognition:** colleagues cited the work for troubleshooting and team onboarding
- **Open source contribution:** reusable pattern for CLI-guided setup in AI/ML tooling

## Related work

- [vLLM CLI UX]({{ '/portfolio/vllm-cli-ux/vllm-cli-ux/' | relative_url }}): another open-source CLI UX contribution
- [CLI guidelines](https://www.uxd-hub.com/entries/design/cli-guidelines): org-wide standards I contributed to
