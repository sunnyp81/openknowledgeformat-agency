---
layout: ../layouts/MarkdownPageLayout.astro
title: "OKF Readiness Audit | OKF Agency"
h1: "OKF Readiness Audit: a fixed-fee assessment of how agent-ready your knowledge is"
description: A fixed-fee audit that scores your operational knowledge against Google’s Open Knowledge Format v0.1 and returns a costed implementation roadmap. Book today.
pubDate: 2026-06-26
service:
  name: OKF Readiness Audit
  description: A fixed-fee assessment that inventories your knowledge sources, scores them against Google’s Open Knowledge Format v0.1 specification, and delivers a prioritised, costed implementation roadmap.
  price: "1500"
faq:
  - q: >-
      How much does the readiness audit cost?
    a: >-
      It is a fixed fee agreed before we start, so there are no open-ended consulting hours. See the pricing page for current bands, or request a quote via contact. The fee is fully credited against implementation if you proceed within 90 days.
  - q: >-
      Do we need to have chosen a knowledge domain first?
    a: >-
      No. Part of the audit is helping you decide which domain to formalise first, based on agent value and conformance effort. You arrive with scattered sources, you leave with a prioritised order.
  - q: >-
      Are you affiliated with Google?
    a: >-
      No. We are an independent agency. OKF is an open specification published by Google Cloud on 12 June 2026, and we implement it. We are not affiliated with, partnered with, or endorsed by Google.
  - q: >-
      What happens after the audit?
    a: >-
      You own the report outright with no obligation to continue. If you do proceed, the audit feeds directly into implementation as the agreed build brief.
  - q: >-
      How long does it take?
    a: >-
      A typical audit runs 1 to 2 weeks from kickoff to report delivery, depending on the number of knowledge sources and stakeholder availability.
---

## Your knowledge is scattered, tool-locked, and hostile to agents

Most organisations hold their operational knowledge in a dozen disconnected places: a wiki nobody trusts, a data catalog only analysts open, support macros buried in a helpdesk, onboarding docs in shared drives, and tacit process knowledge that lives only in people's heads. Each store has its own format, its own access model, and its own decay rate.

That arrangement was tolerable when only humans read it. It is a liability now that AI agents are expected to act on it. An agent cannot reason over a permission-walled wiki, a proprietary catalog API, or a PDF export. It needs curated, portable, version-controlled, plain-text knowledge it can read directly. That is exactly what Google's Open Knowledge Format (OKF) standardises.

The OKF Readiness Audit is the low-risk first step. It is a fixed-fee engagement that tells you, honestly and concretely, how far your current knowledge is from being agent-ready, and what it would cost to close the gap.

## Who this is for

- Operations, data, and platform leaders who want their internal agents to give correct, current answers.
- Teams piloting AI assistants that keep hallucinating because the underlying knowledge is unstructured or stale.
- Knowledge and documentation managers asked to make their content "AI-ready" without a clear definition of what that means.
- Engineering leaders evaluating OKF as a standard before committing build resource.

## What the audit assesses

We work against the OKF v0.1 specification (open spec, Google Cloud, 12 June 2026). A conformant OKF bundle is a directory of UTF-8 Markdown files with YAML frontmatter, a required `type` field, recommended `title`, `description`, `resource`, `tags`, and `timestamp` fields, and reserved `index.md` and `log.md` files. We measure your current state against that target.

| Assessment area | What we examine |
|---|---|
| Knowledge source inventory | Every system holding operational knowledge: wikis, data catalogs, docs, support KBs, drives, code comments, runbooks |
| Current agent-context setup | How agents are fed today: RAG pipelines, pasted context, vector stores, prompt stuffing, or nothing |
| Content quality and freshness | Duplication, contradiction, staleness, ownership gaps, and tacit knowledge not yet written down |
| OKF conformance gaps | Distance from v0.1: file structure, frontmatter completeness, `type` usage, `index.md` and `log.md` readiness |
| Prioritised opportunity map | Which domains deliver the most agent value for the least conformance effort |

## What you receive

| Deliverable | Description |
|---|---|
| Written readiness report | A plain-language assessment of your knowledge estate and its agent-readiness, suitable for sharing with leadership |
| Scored gap analysis | Each candidate domain scored against OKF v0.1 conformance criteria, with the specific gaps named |
| Recommended bundle architecture | A proposed directory and `type` structure for your priority domain, with a progressive-disclosure `index.md` outline |
| Prioritised roadmap | A sequenced plan: which domain to formalise first, second, third, and why |
| Fixed-fee implementation quote | A firm price to build the first bundle, with no open-ended hours |

## The process and timeline

1. **Kickoff (day 1).** A 60-minute session to confirm scope, name your knowledge sources, and grant read access where needed.
2. **Inventory and review (days 2 to 6).** We catalogue your sources, sample content for quality and freshness, and document your current agent-context setup.
3. **Conformance scoring (days 6 to 9).** We score candidate domains against OKF v0.1 and draft the recommended bundle architecture.
4. **Report and walkthrough (days 9 to 12).** We deliver the written report and gap analysis, then walk you through the roadmap and fixed-fee quote on a call.

A typical engagement completes in 1 to 2 weeks.

## What we need from you

- A named point of contact and 2 to 3 hours of stakeholder time across the engagement.
- Read access to the knowledge sources in scope, or representative exports.
- A short brief on where agents will consume the knowledge: internal copilots, customer-facing assistants, or a RAG pipeline.

## The outcome

You finish with a clear, evidence-based picture of your knowledge estate, a defensible decision on what to formalise first, and a firm price to do it. No vague "digital transformation" narrative, just a scored gap analysis and a costed plan you can take to a budget holder.

## How it leads into implementation

The audit is deliberately the step-in-the-door offer. The roadmap and architecture become the build brief for [OKF implementation](/okf-implementation/), where we turn your chosen domain into a conformant, maintained OKF bundle. If you migrate an existing knowledge base rather than author fresh, the [migration sprint](/okf-knowledge-base-migration/) picks up from the same audit. The audit fee is credited against implementation if you proceed within 90 days.

> Independence note: we are an independent implementation agency. OKF is an open Google Cloud specification. We are not affiliated with or endorsed by Google.

Ready to find out how agent-ready your knowledge is? [Book a readiness audit](/contact/).
