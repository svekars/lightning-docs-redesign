---
title: Lightning for startups
description: How Lightning fits startups at each stage. Idea, early stage, and growth.
---

# Lightning for startups

Lightning grows with your startup. From a solo founder validating an idea, to a Series A team running production inference, to a growth-stage company optimizing GPU spend. (Consolidates 3 previously separate pages plus a duplicate.)

## Idea phase

Your goal is to validate quickly without burning cash or time on infrastructure. Start in a Studio, prototype against real APIs and data, ship a demo to early users on a public port. Free tier covers most idea-phase work.

## Early stage

You have a working prototype and your first users. You need reliability, basic observability, and a path to production that doesn't require rewriting everything.

- Snapshot your Studio and deploy it as a standalone system.
- Add monitoring and persistent storage.
- Bring teammates into a shared Teamspace.

## Growth stage

You're supporting real traffic and growing the team. Your needs shift toward governance, cost control, and multi-node scale.

- Break services into a pipeline with auto-scaling nodes.
- Set per-team compute budgets.
- Bring your own cloud for negotiated GPU pricing.
- Use the model registry for version control on production weights.

---

## Get started

- New here? Start at [Get started](/docs/platform/getting-started).
- Need a managed team setup? See [Teamspaces](https://lightning.ai/docs/platform/team-management/teamspaces).
- Scaling to multi-node training? See [Multi-node training](https://lightning.ai/docs/platform/train/multi-node).
- Negotiated GPU pricing? See [Bring your own cloud](https://lightning.ai/docs/platform/gpu-cloud/bring-your-own-cloud).

> **Migration note:** Consolidates `setups/startups/idea-phase`, `early-stage`, `growth`. The page `setups/enterprise/startups` was an exact duplicate of `setups/startups` and was removed.
