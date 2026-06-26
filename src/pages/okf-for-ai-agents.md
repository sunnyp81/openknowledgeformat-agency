---
layout: ../layouts/MarkdownPageLayout.astro
title: "OKF for AI Agents | Curated Context Layer"
h1: "OKF for AI Agents: a Curated Knowledge Layer"
description: Give your AI agents a curated, typed, version-controlled knowledge layer in Open Knowledge Format. Cleaner RAG input, or direct context via progressive disclosure.
pubDate: 2026-06-26
service:
  name: OKF for AI Agents
  description: An agency service that delivers a curated, typed, version-controlled Open Knowledge Format bundle as a clean knowledge layer for AI agents, ready for RAG or direct context loading.
  price: "1200"
faq:
  - q: >-
      Does OKF replace our RAG pipeline?
    a: >-
      Not usually. OKF gives your pipeline clean, deduplicated, typed source material instead of scraped HTML. For smaller bundles you can also skip retrieval and load the content directly into context using index.md for progressive disclosure. The two approaches are complementary.
  - q: >-
      Is OKF just a folder of Markdown files?
    a: >-
      Yes, deliberately. A bundle is a directory of UTF-8 Markdown files with YAML frontmatter, a required type per file, and reserved index.md and log.md. There is no registry, runtime, or SDK to adopt. That simplicity is what makes it portable and durable.
  - q: >-
      How does OKF help with the context window?
    a: >-
      The reserved index.md supports progressive disclosure. An agent reads the index first, then pulls only the files it needs. When a bundle fits the window, it can be loaded directly; when it does not, the same structure feeds retrieval cleanly.
  - q: >-
      Are you affiliated with Google?
    a: >-
      No. OKF is an open spec published by Google Cloud on 12 June 2026. We are an independent agency that implements it. We are not affiliated with, endorsed by, or partnered with Google.
  - q: >-
      How do we know it improves agent answers?
    a: >-
      We support evaluation. We help you define a question set, baseline your current agent, and compare answer quality and provenance after the OKF bundle is in place.
---

An agent is only as good as the knowledge you give it. We are an independent agency that builds curated Open Knowledge Format (OKF) bundles to serve as that knowledge layer. OKF is an open specification published by Google Cloud on 12 June 2026; we are not affiliated with or endorsed by Google, we implement the open spec.

## The problem: agents inherit your context quality

Most AI agent projects do not fail on the model. They fail on the context.

- **Raw scraped docs produce noisy RAG.** When you embed HTML pages, navigation chrome, duplicates, and stale content, retrieval surfaces the wrong chunks. The agent answers confidently from bad source material.
- **Duplication poisons retrieval.** Four versions of the same answer mean the agent cannot tell which is canonical, and conflicting chunks degrade output.
- **Tool-locked context is not portable.** Knowledge trapped in a vendor platform cannot move with your agent stack, and you cannot diff or review it.
- **No provenance.** When an agent cites something, you often cannot trace where it came from or how fresh it is.

## How OKF helps

An OKF bundle is a curated knowledge layer, not a scrape. It is a directory of typed UTF-8 Markdown files with YAML frontmatter, version-controlled in git.

- **Typed and curated.** Each file declares a `type`, so the corpus is structured rather than a flat pile of pages.
- **Deduplicated.** One canonical source per answer. Retrieval stops fighting itself.
- **Version-controlled.** Every change is diffable and reviewable, so your knowledge layer has an audit trail.
- **Progressive disclosure.** The reserved `index.md` lets an agent read a map first, then pull only the files it needs, which is how you manage a finite context window.
- **Provenance built in.** The `resource` and `timestamp` frontmatter fields, plus `log.md`, tell you where each fact came from and when it was last touched.

A curated OKF bundle is high-quality source material for a RAG pipeline because it is clean, deduplicated, and typed. When a bundle is small enough, it can also be loaded directly into an agent's context via progressive disclosure. The same artefact serves both patterns.

## OKF plus RAG, or OKF alone

These are not competing choices. They are points on a spectrum, and the right one depends on bundle size and how often your knowledge changes.

| | OKF alone (direct context) | OKF feeding RAG |
|---|---|---|
| Best when | Bundle fits the context window | Bundle exceeds the window or grows fast |
| Mechanism | Load `index.md`, disclose files progressively | Embed clean OKF files as the source corpus |
| Strength | No retrieval errors, full provenance in context | Scales to large knowledge bases |
| Trade-off | Limited by window size | Adds retrieval infrastructure to maintain |
| Source quality | Curated and typed | Curated and typed |

The decision is not OKF versus RAG. It is whether you need retrieval on top of a clean OKF source, or whether the bundle is small enough to load directly. In both cases OKF removes the noise problem at the source.

## What we deliver for agent teams

- **An agent-ready bundle.** A conformant OKF bundle, typed and validated, with `index.md` and `log.md` in place.
- **Retrieval-friendly structure.** Files sized and typed for clean chunking and predictable retrieval, with frontmatter that supports filtering.
- **A maintenance workflow.** A git-based process so your team keeps the knowledge layer current without it decaying back into noise.
- **Evaluation support.** Help defining a question set, baselining your current agent, and comparing answer quality and provenance after the bundle is in place.

## Integration patterns

| Pattern | When to use it | How OKF fits |
|---|---|---|
| Direct context load | Small, stable bundle | Read `index.md`, disclose files into the prompt |
| Retrieval over OKF | Large or fast-changing knowledge | Embed OKF files as the clean source corpus |
| Hybrid | Mixed needs | Core facts in context, long tail via retrieval |
| Provenance-aware answers | Compliance or trust-sensitive use | Surface `resource` and `timestamp` with each answer |

Because a bundle is just typed Markdown with no registry, runtime, or SDK, it drops into whatever stack you already run. You are not adopting a platform; you are adopting a clean source format.

## Where to start

If you already have a knowledge base, the fastest route is the [OKF knowledge base migration](/okf-knowledge-base-migration/) sprint, which produces the bundle this page describes. If you are starting fresh, see [OKF implementation](/okf-implementation/). Not sure your content is ready? Begin with an [OKF readiness audit](/okf-readiness-audit/).

Talk to us about your agent stack via [contact](/contact/), or review [pricing](/pricing/) to scope the work.
