---
layout: default
title: "Tō3"
parent: Personal Projects
grand_parent: Portfolio
nav_order: 2
---

# Tō3: Live Voice for Event Crews

<div style="background: #f5f5f5; padding: 20px; margin-bottom: 30px; border-left: 4px solid #0066cc;">
  <strong>Project Overview</strong><br>
  <strong>Role:</strong> Product designer &amp; developer (solo)<br>
  <strong>Platform:</strong> Flutter (iOS + Android)<br>
  <strong>Former name:</strong> RefOpenMic, renamed to Tō3 as the product matured<br>
  <strong>Tagline:</strong> Live. Clear. Simple.
</div>

## The problem

Event crews (referees, staff, volunteers) need live voice communication at the venue without desktop complexity or expensive radio infrastructure. Controls must work in bright sun, dark halls, and one-handed on a phone.

## The solution

**Tō3** provides free live voice for events: open a room, tap to join, stay with your crew.

**Core capabilities:**

- **Live audio:** Real-time voice with simple mute controls
- **Events & sessions:** Create events, add sessions, see hosts and listeners
- **Sign in:** Email or Google; same account across devices
- **Notifications:** Optional alerts when a followed session goes live
- **High contrast UI:** Black and white, readable in any lighting
- **Venue-first:** Run everything from your phone; no desktop required

<figure style="display: flex; flex-wrap: wrap; gap: 16px; margin: 24px 0;">
  <img src="/portfolio/to3/assets/sign-in.png" alt="Tō3 sign-in screen" style="max-width: 220px; border: 1px solid #ddd;">
  <img src="/portfolio/to3/assets/events-discover.png" alt="Discover events" style="max-width: 220px; border: 1px solid #ddd;">
  <img src="/portfolio/to3/assets/live-event-host-detail.png" alt="Live event host controls" style="max-width: 220px; border: 1px solid #ddd;">
</figure>

## Design principles

- **Mic when it matters:** Microphone for live rooms; mute when not talking
- **Simple hierarchy:** Events → sessions → live room; minimal steps to join
- **Free to host and join:** Low barrier for community and volunteer crews

## Outcomes

- Shipped Flutter app with store-ready marketing assets
- Extends my product work beyond rugby officiating into event operations
- Built with the same AI-assisted solo workflow as my other suite apps

## Part of the suite

Tō3 is one app in my [published product suite]({{ '/portfolio/product-suite/product-suite/' | relative_url }}). Previously marketed as RefOpenMic; **Tō3** is the current product name (`to3` in Flutter `pubspec.yaml`).
