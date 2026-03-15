---
layout: default
title: "Red Hat Packages Catalog Redesign"
parent: Portfolio
nav_order: 2
---

# Red Hat Packages Catalog Redesign — Unifying Enterprise Package Discovery

<div style="background: #f5f5f5; padding: 20px; margin-bottom: 30px; border-left: 4px solid #0066cc;">
  <strong>Project Overview</strong><br>
  <strong>Role:</strong> UX Designer & Frontend Developer<br>
  <strong>Timeline:</strong> 3 weeks (March 2026)<br>
  <strong>Organization:</strong> Red Hat<br>
  <strong>Impact:</strong> Unified two separate package ecosystems into a single discoverable catalog, implemented advanced filtering with 7+ metadata facets, shipped with design version toggle for gradual rollout
</div>

## The Challenge

Red Hat's package distribution platform served two distinct ecosystems—**Trusted Libraries** (SLSA Level 3 secure packages) and **Red Hat AI Components** (hardware-accelerated ML packages)—through fragmented, separate interfaces. This created significant friction for developers who needed to understand the full package landscape.

<figure style="width: 100%; margin: 20px 0;">
  <img src="/portfolio/ui-packages-redhat/assets/before-home.png" alt="Original design with separated package sources" style="width: 100%; max-width: 1200px; border: 1px solid #ddd;">
  <figcaption>Original design: Trusted Libraries and AI Components presented as separate, disconnected experiences</figcaption>
</figure>

**Core issues identified:**

- **Fragmented discovery**: Users had to navigate between entirely separate pages to explore Trusted Libraries vs. AI Components
- **Limited filtering**: No way to filter by Python version, license, release stage, or development status
- **Poor information scent**: Package metadata (build variant, product version, SLSA level) buried or inconsistent across views
- **No unified search**: Search worked only within individual package sources, not across the full catalog
- **Accessibility gaps**: Legacy CSS tokens didn't adapt properly in dark mode; insufficient color contrast in catalog headers

**User impact:** Data scientists and ML engineers struggled to discover which packages were available across both sources, leading to missed opportunities to use enterprise-hardened libraries and confusion about package provenance.

---

## The Solution

I designed and implemented a **unified catalog experience** that combines Trusted Libraries and AI Components into a single, filterable view with progressive disclosure and metadata-driven navigation.

**Core insight:** Developers don't think in terms of "package sources"—they think in terms of **capabilities, constraints, and trust levels**. The catalog should reflect how users search ("I need PyTorch for CUDA 12 with SLSA provenance") rather than how the backend is organized.

### Before & After: The Transformation

<figure style="width: 100%; margin: 30px 0;">
  <img src="/portfolio/ui-packages-redhat/assets/after-home-catalog.png" alt="Unified catalog with sidebar filters and package gallery" style="width: 100%; max-width: 1200px; border: 1px solid #ddd;">
  <figcaption>Unified design: Catalog-style layout with faceted filters, source toggle, and card-based package gallery</figcaption>
</figure>

**Key features implemented:**

### 1. Catalog-Style Information Architecture

Replaced the fragmented two-page model with a **single catalog view** using PatternFly's split layout pattern:

- **Left sidebar**: Faceted filters organized by package source (AI Components: Build variant, Product version; Trusted Libraries: Python version, SLSA Level 3, License, Release stage, Category)
- **Main content area**: Unified package gallery with source-aware metadata cards
- **Top navigation**: Global "Find by name" search + design version toggle

**IA impact:** Users can now explore the full package landscape from a single entry point, applying cross-cutting filters (e.g., "Show me all Apache-2.0 licensed packages across both Trusted and AI sources").

### 2. Advanced Filtering with Metadata Facets

<figure style="float: right; margin-left: 20px; max-width: 300px;">
  <img src="/portfolio/ui-packages-redhat/assets/after-home-catalog.png" alt="Filter sidebar with searchable dropdowns" style="width: 100%;">
  <figcaption>Filter sidebar with 7+ metadata dimensions</figcaption>
</figure>

Built a comprehensive filtering system with 7+ metadata facets:

**AI Components filters:**
- Build variant (e.g., CPU, CUDA 12.1, ROCm)
- Product version (RHOAI 3.0, 3.2, etc.)

**Trusted Libraries filters:**
- Python version (from `requires_python` metadata)
- SLSA Level 3 compliance (checkbox filter with provenance badge)
- License (Apache-2.0, MIT, GPL, etc.)
- Release stage (Alpha, Beta, Stable, Mature)
- Category (from PyPI Topic classifiers)

**Technical implementation:** Filters use PatternFly's searchable multi-select dropdowns with typeahead, enabling fast keyword-based facet selection. Client-side filtering for metadata facets (license, Python version, release stage) with batch metadata fetching for performance.

**DX impact:** Developers can quickly narrow down packages by technical constraints ("Python >=3.9, Apache-2.0 license, Stable release") without scrolling through hundreds of results.

### 3. Source-Aware Package Cards

Package cards dynamically show metadata based on source:

- **Trusted Libraries**: Display source badge, author, license, and pip install command
- **AI Components**: Add build variant, product version, Python version, and hardware badges (CPU/GPU indicators)

<figure style="width: 100%; margin: 20px 0;">
  <img src="/portfolio/ui-packages-redhat/assets/after-home-catalog.png" alt="Package cards showing source-specific metadata" style="width: 100%; max-width: 1000px;">
  <figcaption>Package cards adapt metadata display based on source: Trusted Libraries show license/author; AI Components show variant/product version</figcaption>
</figure>

**Design decision:** Metadata isn't one-size-fits-all. Trusted Libraries emphasize provenance and licensing; AI Components emphasize hardware compatibility and versioning. Cards reflect these priorities contextually.

### 4. Design Version Toggle for Gradual Rollout

<figure style="float: right; margin-left: 20px; max-width: 250px;">
  <img src="/portfolio/ui-packages-redhat/assets/after-home-catalog.png" alt="Design version selector in header" style="width: 100%;">
  <figcaption>Header toggle: Original vs. Unified design</figcaption>
</figure>

Shipped with a **design version selector** in the masthead, allowing users to switch between "Original design" (legacy layout) and "Unified design" (new catalog) without disrupting existing workflows.

**Product strategy:** This de-risked the launch—users could try the new experience without being forced into it, and we could gather feedback before deprecating the legacy UI.

**Technical approach:** Both designs coexist in the same codebase with conditional rendering based on design version context. Unified components reuse the same data APIs, just with different presentation logic.

---

## Repository View: Catalog Pattern Extended

<figure style="width: 100%; margin: 20px 0;">
  <img src="/portfolio/ui-packages-redhat/assets/before-repo-list.png" alt="Original repository package list" style="width: 100%; max-width: 1200px; border: 1px solid #ddd;">
  <figcaption>Before: Repository package list with minimal metadata and table-based layout</figcaption>
</figure>

<figure style="width: 100%; margin: 20px 0;">
  <img src="/portfolio/ui-packages-redhat/assets/after-repo-unified.png" alt="Unified repository view with catalog layout" style="width: 100%; max-width: 1200px; border: 1px solid #ddd;">
  <figcaption>After: Repository view applies the same catalog-style layout with filters and card gallery</figcaption>
</figure>

The unified design extends to **repository/index pages**—when a user drills into a specific package index (e.g., `main`), they see the same catalog layout with contextual filters.

**Consistency benefit:** Users learn the interaction patterns once (sidebar filters + card gallery) and apply them everywhere. No cognitive mode-switching between home and repo views.

---

## Package Details: Enhanced Metadata Sidebar

<figure style="width: 100%; margin: 20px 0;">
  <img src="/portfolio/ui-packages-redhat/assets/after-package-details.png" alt="Package details page with Index metadata card" style="width: 100%; max-width: 1200px; border: 1px solid #ddd;">
  <figcaption">Package details page: New "Index" card in sidebar shows source, build variant, and product version at a glance</figcaption>
</figure>

Added a new **Index card** to the package details sidebar, surfacing critical metadata that was previously hidden:

- **Source**: Red Hat AI Components or Trusted Libraries (with icon)
- **Build variant**: CPU, CUDA, ROCm version
- **Product version**: RHOAI release version

**UX impact:** Users landing on a package details page from external links (search engines, documentation) can immediately understand the package's provenance and compatibility without hunting through tabs.

---

## Design System & Accessibility

### PatternFly 6 Migration

Migrated the entire interface from legacy PatternFly components to **PatternFly 6** with semantic design tokens:

- **Color tokens**: Replaced hardcoded `--pf-v6-global--*` tokens (which didn't exist) with correct `--pf-t--global--text--color--regular`, `--pf-t--color--brand--*`, etc.
- **Spacing system**: Created `unifiedSpacing.ts` module exporting PatternFly spacer tokens (`SPACE_PAGE`, `SPACE_LG`, `SPACE_MD`, `SPACE_SM`, `SPACE_XS`) for consistent vertical rhythm
- **Dark mode support**: All text, backgrounds, and borders now adapt properly via semantic tokens instead of fixed colors

<figure style="width: 100%; margin: 20px 0;">
  <img src="/portfolio/ui-packages-redhat/assets/after-home-catalog.png" alt="Catalog with proper semantic tokens for dark mode" style="width: 100%; max-width: 1000px;">
  <figcaption>Semantic tokens ensure text contrast and readability in both light and dark modes</figcaption>
</figure>

**Accessibility wins:**
- Catalog icon (cube in red circle) now uses white fill instead of red-on-red (invisible)
- Headings use `--pf-t--global--text--color--regular` instead of brand blue (looked like links)
- Filter sidebar borders and toggle states adapt to dark mode properly

### Reusable Component Architecture

Built a set of reusable components with clear separation of concerns:

- `UnifiedFilterSidebar`: Faceted filter panel with category-based organization
- `FilterDropdown`: Searchable multi-select dropdown with typeahead (wraps PatternFly Select)
- `UnifiedPackageCard`: Source-aware metadata card with conditional fields
- `SourceBadge`: Reusable badge component with icon + label
- `PackageMetadataChips`: Filter chips with clear/remove actions

**Developer experience:** These components are framework-agnostic and follow PatternFly patterns, making them easy for other Red Hat teams to reuse in adjacent package management UIs.

---

## Impact & Outcomes

**Shipped:** Fully deployed to production with design version toggle. Users can opt into the unified catalog while legacy design remains accessible.

**Information architecture transformation:**
- Reduced navigation from **2 separate pages** (Trusted Libraries page + AI Components page) to **1 unified catalog** with source toggle
- Increased filterable metadata dimensions from **2** (search + sort) to **7+** (build variant, Python version, SLSA, license, release stage, category, product version)

**Developer experience improvements:**
- **Faster package discovery**: Users can explore full catalog without page transitions
- **Better metadata visibility**: Package cards surface build variants, SLSA badges, and compatibility info upfront
- **Search across sources**: Global "Find by name" search works across both Trusted and AI packages

**Design system alignment:**
- Migrated from legacy CSS to PatternFly 6 semantic tokens, improving maintainability and dark mode support
- Created reusable component library for future package management UIs at Red Hat

**Risk mitigation:**
- Design version toggle allowed gradual rollout without disrupting existing workflows
- Maintained feature parity with original design (all functionality preserved, layout improved)

---

## Design Process

### 1. Problem Discovery & Information Architecture Analysis

**Research approach:**
- Analyzed existing navigation patterns: Home → Select source → View packages in isolated contexts
- Mapped user mental models: "I need a package with X constraints" vs. "I need to choose between Trusted or AI first"
- Identified metadata gaps: Python version, license, release stage not surfaced anywhere
- Reviewed PatternFly catalog patterns and split-layout guidelines

**Key insight:** The current design forced users to **choose a package source before understanding what constraints matter**. Developers don't know if they need "Trusted" or "AI" until they understand build variants, Python compatibility, and licensing.

### 2. Catalog-Style IA Redesign

**Design principles:**
- **Faceted discovery over hierarchical navigation**: Let users filter across dimensions (source + metadata) rather than navigate down a tree
- **Progressive disclosure**: Start with all packages visible, let users narrow down via sidebar filters
- **Metadata-first cards**: Surface key decision factors (variant, license, SLSA level) upfront, not buried in detail pages

**Pattern reuse decision:** Adopted PatternFly's split layout (catalog sidebar + content area) instead of inventing custom navigation. This aligns with OpenShift Console, Quay, and other Red Hat products—reducing user learning curve.

### 3. Iterative Refinement via Design History

The design evolved through daily iterations captured in `.design/features/package-search-unified/design-history.md`:

**March 11-12:**
- Initial unified view combined package lists with catalog sidebar
- Added source toggle (Trusted Libraries / AI Components / All packages)
- Designed package card metadata by source (variant/product version for AI, license/author for Trusted)

**March 12-13:**
- Fixed dark mode issues: replaced legacy CSS tokens with PatternFly 6 semantic tokens
- Redesigned filter sidebar with searchable dropdowns and metadata facets (Python version, SLSA Level 3, license, release stage, category)
- Extended unified layout to repository/index pages (not just home page)

**Technical implementation:** Used React Context (`DesignVersionContext`) for design version state, conditional component rendering, and shared filter logic across catalog and repo views.

---

## Key Design Decisions

### 1. Unified Catalog Over Separate Pages

**Old approach:** Two entirely separate entry points (Trusted Libraries page, AI Components page).

**New approach:** Single catalog with source toggle and unified filtering.

**UX impact:** Users can now compare packages across sources and apply cross-cutting filters (e.g., "Show me all Stable, Apache-2.0 licensed packages"). Reduces navigation friction from 2-3 clicks to zero.

### 2. Source-Aware Metadata Display

Instead of showing the same fields on every package card, cards dynamically adapt based on source:

- **Trusted Libraries**: Emphasize provenance (author, license, SLSA badge)
- **AI Components**: Emphasize compatibility (build variant, product version, Python version, hardware badges)

**Design rationale:** Different package types have different decision factors. Trusted Libraries users care about supply chain security; AI Components users care about hardware compatibility. Metadata should reflect these priorities.

### 3. Filter Sidebar with Metadata Facets

<figure style="float: right; margin-left: 20px; max-width: 280px;">
  <img src="/portfolio/ui-packages-redhat/assets/after-home-catalog.png" alt="Filter sidebar organization" style="width: 100%;">
  <figcaption>Filters grouped by package source context</figcaption>
</figure>

Filters are grouped into **AI Components** (variant, product version) and **Trusted Libraries** (Python version, SLSA, license, release stage, category) sections.

**Why separate sections?** Some filters only apply to specific sources. Variant and product version are meaningless for Trusted Libraries; SLSA Level 3 is meaningless for AI Components. Grouping clarifies which filters apply to which packages.

**Search-first filter dropdowns:** Each filter uses typeahead search, enabling users to type "Apache" and jump directly to "Apache-2.0" license instead of scrolling through a long list.

### 4. Design Version Toggle for Safe Rollout

**Problem:** Redesigning a production package catalog carries risk—users may rely on specific workflows in the original design.

**Solution:** Ship both designs simultaneously with a header toggle. Users can opt into the new experience but fall back to the original if needed.

**Implementation:** React Context provides design version state; routes conditionally render `PythonList` (original) or `UnifiedPackageList` (new catalog) based on context.

**Product benefit:** De-risks launch, enables gradual user migration, and provides a rollback path if critical issues emerge.

### 5. PatternFly Semantic Tokens for Maintainability

**Old approach:** Hardcoded `--pf-v6-global--*` variables (which don't exist) and fixed hex colors.

**New approach:** PatternFly 6 semantic tokens (`--pf-t--global--text--color--regular`, `--pf-t--color--brand--*`, spacer tokens).

**Why it matters:**
- **Dark mode support**: Semantic tokens automatically adapt to light/dark themes
- **Future-proof**: When PatternFly updates design tokens, the UI adapts without code changes
- **Consistency**: Aligns with other Red Hat products (OpenShift, Quay, Konveyor)

---

## Technical Architecture

**Stack:** React, TypeScript, PatternFly 6, Vite

### Component Structure

```
client/src/app/pages/unified/
├── UnifiedRepoPackageList.tsx       # Catalog view for repo/index pages
├── components/
│   ├── FilterDropdown.tsx            # Searchable multi-select dropdown
│   ├── PackageSidebarFilters.tsx     # Sidebar filter panel (repo view)
│   ├── UnifiedFilterSidebar.tsx      # Sidebar filter panel (catalog view)
│   ├── UnifiedPackageCard.tsx        # Source-aware metadata card
│   ├── SourceBadge.tsx               # Reusable badge with icon
│   ├── SourceSwitcher.tsx            # Trusted/AI/All toggle group
│   └── PackageMetadataChips.tsx      # Active filter chips
└── hooks/
    └── useFilterParams.ts            # URL state management for filters
```

### Key Technical Decisions

**Client-side metadata filtering:** Filters like license, Python version, and release stage are applied client-side after batch-fetching metadata for the capped package list (100 packages). This avoids N+1 API calls while keeping filtering fast.

**Staggered card mounting:** Package cards use the same lazy metadata-loading pattern as the distribution list—copy controls mount gradually to avoid layout crashes when rendering 50+ cards at once.

**URL-driven filter state:** Filter selections (source, variant, Python version, etc.) are synced to URL query params via `useFilterParams` hook. Users can bookmark or share filtered catalog views.

**Unified spacing tokens:** Created `unifiedSpacing.ts` exporting PatternFly spacer tokens as named constants (`SPACE_PAGE`, `SPACE_LG`, etc.) to ensure consistent vertical rhythm across catalog, repo, and detail views.

---

## Key Learnings

**1. Catalog patterns scale beyond e-commerce**

Faceted filtering and split layouts (sidebar + gallery) aren't just for shopping—they work well for **technical package discovery** where users need to explore large inventories with complex metadata constraints.

**2. Metadata should drive IA, not backend structure**

The original design mirrored backend organization (Trusted Libraries API vs. AI Components API). The unified design reflects **user decision factors** (SLSA level, hardware variant, Python compatibility). This shift made the catalog far more useful.

**3. Progressive disclosure reduces cognitive load**

Instead of showing all packages in a 435-item list, the unified catalog starts with high-level filtering (source toggle) and lets users progressively narrow down by metadata facets. Users feel less overwhelmed and discover packages faster.

**4. Design version toggles are powerful product tools**

Shipping both designs simultaneously (with user opt-in) de-risked the launch and provided valuable feedback before deprecating the legacy UI. More products should consider this pattern for major redesigns.

**5. PatternFly semantic tokens are worth the migration effort**

Migrating from hardcoded colors to semantic tokens took time, but the payoff—automatic dark mode support, maintainability, cross-product consistency—justified the investment. Semantic design systems scale better than ad-hoc CSS.

**6. Reusable components accelerate future work**

Building `FilterDropdown`, `UnifiedPackageCard`, and `SourceBadge` as standalone components (not tightly coupled to the catalog) means other Red Hat teams can reuse them for adjacent package UIs without reinventing patterns.

---

## Relevant for Consulting & Design Leadership Roles

- **Enterprise design systems**: Demonstrated ability to apply and extend PatternFly 6 semantic tokens, ensuring accessibility, dark mode support, and cross-product consistency
- **Information architecture transformation**: Redesigned a fragmented multi-page navigation into a unified catalog with faceted filtering—improving discoverability without sacrificing functionality
- **Developer experience (DX)**: Improved package discovery for data scientists and ML engineers by surfacing metadata (SLSA provenance, hardware variants, Python compatibility) upfront
- **Design + engineering execution**: Full-stack ownership—designed IA, implemented React components, migrated to PatternFly 6, shipped with design version toggle for gradual rollout
- **Risk mitigation via product strategy**: Shipped both legacy and unified designs simultaneously, enabling user opt-in and feedback loops before deprecating old UI
- **Reusable component patterns**: Built modular, framework-agnostic components (`FilterDropdown`, `UnifiedPackageCard`) that other teams can adopt for package management UIs

---

## Deliverables & Links

**GitHub:**
- Repository: [ui-packages.redhat.com](https://github.com/RedHatProductSecurity/ui-packages.redhat.com) (private)
- Commit: [feat: unified design - catalog, filters, masthead search, package details](https://github.com/RedHatProductSecurity/ui-packages.redhat.com/commit/703eb7b)

**Design artifacts:**
- Design history: [`.design/features/package-search-unified/design-history.md`](https://github.com/RedHatProductSecurity/ui-packages.redhat.com/blob/main/.design/features/package-search-unified/design-history.md)
- Feature mapping: [`.design/feature-mapping.md`](https://github.com/RedHatProductSecurity/ui-packages.redhat.com/blob/main/.design/feature-mapping.md)
- Design guidelines: [`.design/README.md`](https://github.com/RedHatProductSecurity/ui-packages.redhat.com/blob/main/.design/README.md)

**Production:**
- Live site: [ui-packages.redhat.com](https://ui-packages.redhat.com) (Red Hat SSO required)

---

**This project demonstrates enterprise-grade UX thinking—transforming fragmented backend APIs into a unified, metadata-driven catalog that reflects how developers actually search for and evaluate packages, while maintaining design system consistency and mitigating rollout risk through product strategy.**
