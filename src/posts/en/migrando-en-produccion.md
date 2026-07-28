---
title: Migrating in production — Vue to SvelteKit, native to Flutter
date: 2026-07-28
description: Two production migrations, both run as a strangler fig instead of a rewrite, and what actually broke along the way
tags: [svelte, flutter, migration, architecture]
---

## Why migrate at all

Two different products, two different migrations, same underlying pressure: maintaining two
stacks in parallel was costing more than the migration itself. The Vue app had turned slow to
build features in and was pulling in more DX complaints from the team than it was worth. The
native apps meant hiring — and staffing — separate iOS and Android tracks for functionality that
didn't need to diverge platform by platform. Consolidating onto SvelteKit and Flutter respectively
was as much a hiring and maintenance decision as a technical one.

## The rule: no big-bang rewrite

Neither migration was a stop-the-world rewrite. Both ran as a strangler fig, over months:

- On the web side, new features were built as Svelte components living inside the existing Vue
  application, section by section, while the rest of the app kept running on Vue.
- On mobile, new screens were built in Flutter and embedded inside the existing native iOS/Android
  apps, while the rest of the app kept running natively.

The upside of this approach is that neither product ever went dark for a migration window — users
never saw a "rewrite in progress" state. The cost is that for months, two frameworks had to
genuinely coexist in the same running app, and that coexistence is where the real work was.

## What actually broke: the interop layer

The hard part in both cases wasn't porting components — it was getting the old and new frameworks
to share state without becoming two sources of truth. Vue's reactivity system and Svelte's don't
talk to each other natively, and neither do native platform state and Flutter's widget tree. In
both migrations, that meant building a dedicated bridging layer: something that could pass state
and events across the framework boundary reliably, in both directions, without either side
silently going stale.

Getting that bridge right was most of the real engineering. It's also the part that doesn't show
up in a "before/after" screenshot — the UI looked identical to a user throughout; the coexistence
mechanics underneath were what took the time.

## Platform-specific quirks

On top of the interop layer, each migration surfaced its own platform-specific friction — cases
where the "new" framework didn't behave quite the way its cross-platform promise implied, and
needed a platform-specific workaround before it could sit next to the existing native/Vue code
without visible seams.

## Where things landed

Both migrations ran to completion over several months rather than weeks, deliberately — the
strangler-fig pace is slower than a rewrite by design, in exchange for never having a broken
window. In hindsight, the interop/bridging work is the part I'd budget more time for up front next
time: it's easy to scope a migration by counting screens or components, and easy to underestimate
the layer that lets two frameworks share one running app.
