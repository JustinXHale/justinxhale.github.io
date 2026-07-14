---
layout: default
title: "Red Hat Packages Catalog Redesign"
parent: Red Hat & Enterprise
grand_parent: Portfolio
nav_order: 2
---

# Red Hat Packages Catalog Redesign

<div style="background: #f5f5f5; padding: 20px; margin-bottom: 30px; border-left: 4px solid #0066cc;">
  <strong>Project Overview</strong><br>
  <strong>Role:</strong> UX Designer<br>
  <strong>Timeline:</strong> 1 week (March 2026)<br>
  <strong>Organization:</strong> Red Hat<br>
  <strong>Stakeholders:</strong> PM, engineering leads, senior product managers<br>
  <strong>Outcome:</strong> Combined Trusted Libraries and Red Hat AI Components into one catalog view with faceted filtering, migrated the UI to PatternFly 6 semantic tokens, and shipped to production. I designed and implemented the experience (implementation supported by Claude/Cursor).
</div>

## The situation

Red Hat’s package site had two separate entry points: **Trusted Libraries** (SLSA Level 3 secure packages) and **Red Hat AI Components** (hardware-accelerated ML packages). To see what was in each, you had to leave one experience and open the other. There was no way to filter by Python version, license, release stage, or build variant, metadata that developers actually use to choose packages. Data scientists and ML engineers couldn’t easily see the full landscape or compare across both sources.

I started with a UX audit focused on flow, feel, and alignment: what is the user trying to accomplish, and what path do they have to take to get there? The audit board below helped me map the current experience and where it broke down.

<figure style="width: 100%; margin: 20px 0;">
  <img src="/portfolio/ui-packages-redhat/assets/packages.redhat (UX-Audit) - UX Audit.svg" alt="UX audit board mapping flow, feel, and user paths" style="width: 100%; max-width: 1200px; border: 1px solid #ddd;">
  <figcaption>UX audit board: mapping user goals and paths to identify gaps in flow and alignment</figcaption>
</figure>

<figure style="width: 100%; margin: 20px 0;">
  <img src="/portfolio/ui-packages-redhat/assets/before-home.png" alt="Original design with separated package sources" style="width: 100%; max-width: 1200px; border: 1px solid #ddd;">
  <figcaption>Before: Trusted Libraries and AI Components were separate, disconnected experiences</figcaption>
</figure>

---

## What I did

The core shift was to organize the catalog around how people search, by capabilities, constraints, and trust, instead of how the backend is split (Trusted vs. AI). I moved to a single catalog with a source toggle and faceted filters so users could explore both ecosystems from one place.

**Unified catalog.** One view with a left sidebar for filters and a main area for the package gallery. Filters are grouped by context: AI Components get build variant and product version; Trusted Libraries get Python version, SLSA Level 3, license, release stage, and category. That way it’s clear which filters apply to which packages. Search (“Find by name”) works across both sources.

<figure style="width: 100%; margin: 20px 0;">
  <img src="/portfolio/ui-packages-redhat/assets/after-home-catalog.png" alt="Unified catalog with sidebar filters and package gallery" style="width: 100%; max-width: 1200px; border: 1px solid #ddd;">
  <figcaption>Unified catalog: faceted filters, source toggle, and card-based gallery</figcaption>
</figure>

**Source-aware cards.** Cards don’t show the same fields for every package. Trusted Libraries cards emphasize author, license, and SLSA badge; AI Components cards emphasize build variant, product version, Python version, and hardware (CPU/GPU). Different users care about different things, provenance vs. compatibility, so the card content follows that.

**Same pattern on repo and detail pages.** When you drill into a repository index (e.g. `main`), the same catalog layout and filters apply. On package details I added an Index card in the sidebar so source, build variant, and product version are visible without digging through tabs.

<figure style="width: 100%; margin: 20px 0;">
  <img src="/portfolio/ui-packages-redhat/assets/before-repo-list.png" alt="Original repository package list" style="width: 100%; max-width: 1200px; border: 1px solid #ddd;">
  <figcaption>Before: repo list with minimal metadata and table layout</figcaption>
</figure>

<figure style="width: 100%; margin: 20px 0;">
  <img src="/portfolio/ui-packages-redhat/assets/after-repo-unified.png" alt="Unified repository view with catalog layout" style="width: 100%; max-width: 1200px; border: 1px solid #ddd;">
  <figcaption>After: repo view uses the same catalog layout and filters</figcaption>
</figure>

<figure style="width: 100%; margin: 20px 0;">
  <img src="/portfolio/ui-packages-redhat/assets/after-package-details.png" alt="Package details page with Index metadata card" style="width: 100%; max-width: 1200px; border: 1px solid #ddd;">
  <figcaption>Package details: Index card in sidebar shows source, build variant, and product version</figcaption>
</figure>

**Design system and accessibility.** The UI was on legacy PatternFly with hardcoded colors that didn’t work in dark mode. I migrated to PatternFly 6 semantic tokens for color, type, and spacing so the catalog respects light/dark theme and stays consistent with other Red Hat products. Fixes included the catalog icon (was red-on-red, now readable), heading colors (no longer link-like), and filter sidebar contrast.

**Hardest part.** Deciding what to show and what to cut. The goal was a clear primary path without hiding information that edge users need, e.g. release stage, category, SLSA, so I surfaced those in filters and on cards in a way that doesn’t overwhelm the main flow.

---

## How it was built

**Stack:** React, TypeScript, PatternFly 6, Vite.

Filters use PatternFly’s searchable multi-select dropdowns with typeahead (e.g. type “Apache” to find Apache-2.0). Metadata filters (license, Python version, release stage) run client-side after batch-fetching metadata for the list (capped at 100 packages) to keep things fast without extra API calls. Filter state lives in the URL so filtered views are shareable and bookmarkable.

Reusable pieces I designed and implemented: `UnifiedFilterSidebar`, `FilterDropdown`, `UnifiedPackageCard`, `SourceBadge`, `PackageMetadataChips`, plus a `useFilterParams` hook for URL sync. Spacing uses a small `unifiedSpacing.ts` module so catalog, repo, and detail views share the same vertical rhythm.

---

## What I’d do differently

**Metadata should drive the IA, not the backend.** The old UI mirrored two APIs. The new one is organized around what users need to decide: SLSA level, hardware variant, Python compatibility, license. That made the catalog actually useful for discovery.

**Prioritization is the job.** Figuring out what’s essential vs. nice-to-have, while still leaving room for edge-case info, was the main design challenge. I’d do that framing earlier next time, being explicit about “primary path” vs. “available but not dominant.”

**PatternFly semantic tokens were worth the migration.** Fixing legacy tokens and hex colors took time, but dark mode and maintainability improved a lot. Aligning with the rest of Red Hat’s design system also makes it easier for other teams to reuse these patterns.

---

## Deliverables & links

**GitHub:** [ui-packages.redhat.com](https://github.com/RedHatProductSecurity/ui-packages.redhat.com) (private): [feat: unified design - catalog, filters, masthead search, package details](https://github.com/RedHatProductSecurity/ui-packages.redhat.com/commit/703eb7b)

**Design artifacts:** [Design history](https://github.com/RedHatProductSecurity/ui-packages.redhat.com/blob/main/.design/features/package-search-unified/design-history.md) · [Feature mapping](https://github.com/RedHatProductSecurity/ui-packages.redhat.com/blob/main/.design/feature-mapping.md) · [Design guidelines](https://github.com/RedHatProductSecurity/ui-packages.redhat.com/blob/main/.design/README.md)

**Production:** [ui-packages.redhat.com](https://ui-packages.redhat.com) (Red Hat SSO required)
