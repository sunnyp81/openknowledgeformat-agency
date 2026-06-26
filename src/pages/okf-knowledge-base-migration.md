---
layout: ../layouts/MarkdownPageLayout.astro
title: "OKF Knowledge Base Migration Sprint | OKF Agency"
h1: OKF Knowledge Base Migration Sprint
description: Migrate your support KB, Confluence, or Notion wiki into a conformant Open Knowledge Format bundle. A time-boxed migration sprint with editorial review.
pubDate: 2026-06-26
service:
  name: OKF Knowledge Base Migration Sprint
  description: A time-boxed service that migrates an existing knowledge base into a conformant, validated Open Knowledge Format bundle delivered in version control.
  price: "9000"
faq:
  - q: >-
      Which knowledge bases can you migrate?
    a: >-
      Support KBs (Zendesk, Intercom, Freshdesk), internal wikis (Confluence, Notion, SharePoint), static docs sites (Docusaurus, GitBook, MkDocs), and data catalogues. If your content exports to HTML, Markdown, or a structured API, we can map it.
  - q: >-
      Do you migrate everything?
    a: >-
      No. Part of the value is pruning. We migrate live, accurate, distinct content and deliberately leave behind duplicates, stale drafts, and superseded pages. You get a smaller, cleaner corpus, not a like-for-like copy.
  - q: >-
      Is the Open Knowledge Format a Google product, and are you affiliated with Google?
    a: >-
      OKF is an open specification published by Google Cloud on 12 June 2026. We are an independent agency. We are not affiliated with, endorsed by, or partnered with Google. We implement the open spec.
  - q: >-
      What do we get at the end?
    a: >-
      A validated OKF bundle delivered in a git repository: typed Markdown files with YAML frontmatter, a reserved index.md and log.md, plus a short maintenance guide so your team can keep it current.
  - q: >-
      How long does a sprint take?
    a: >-
      A typical sprint runs two to four weeks depending on source volume and how much editorial cleanup the content needs. We scope this precisely after a readiness audit.
---

We are an independent implementation agency for the Open Knowledge Format (OKF), the open specification Google Cloud published on 12 June 2026. We are not affiliated with or endorsed by Google. The migration sprint takes a knowledge base that is trapped inside a tool and turns it into a portable, agent-readable OKF bundle.

## Who this is for

This sprint is for teams whose institutional knowledge already exists but lives in the wrong shape. Typically that means:

- A support knowledge base that customers and agents read but machines cannot parse cleanly.
- An internal wiki in Confluence, Notion, or SharePoint that has grown sprawling and duplicated.
- A docs site that is good for humans but produces noisy results when fed to a retrieval pipeline.
- A data catalogue whose descriptions are scattered and inconsistent.

If you want that knowledge to be usable by AI agents, portable between tools, and version-controlled, this is the starting point. If you are not sure your content is ready, begin with an [OKF readiness audit](/okf-readiness-audit/).

## The problem with tool-locked knowledge bases

Most knowledge bases are hostages to the platform they were written in.

- **Not portable.** Export options are lossy. Your content is entangled with a vendor's database, macros, and proprietary blocks.
- **Not diffable.** You cannot see what changed, when, or why. There is no clean version history at the content level.
- **Agent-hostile.** HTML wrappers, navigation chrome, and inconsistent structure make raw pages poor source material for retrieval. Agents ingest noise.
- **Duplicated.** The same answer exists in four slightly different pages, and nobody knows which one is canonical.

An OKF bundle fixes the shape: a directory of UTF-8 Markdown files, each with YAML frontmatter and a required `type`, curated and stored in git. Portable, diffable, typed, and readable by both people and agents.

## The migration approach

We run the sprint in a fixed sequence so scope stays controlled and quality stays high.

1. **Source inventory.** We catalogue every source page, its traffic or usage, its last-updated date, and its owner. This is where pruning decisions begin.
2. **Concept-type mapping.** We map content to OKF concept types and assign each file a `type` in frontmatter. A how-to is not a reference page is not a policy. Typing the corpus is what makes it agent-readable.
3. **Automated extraction and frontmatter generation.** We extract clean Markdown from the source and generate recommended frontmatter: title, description, resource, tags, and timestamp.
4. **Dedupe and cleanup.** We merge near-duplicates, pick canonical versions, strip platform chrome, and normalise formatting.
5. **Human editorial review.** Automation does the heavy lifting; editors do the judgement. We check accuracy, merge decisions, and typing by hand.
6. **Conformance validation.** Every file is validated against the spec: required `type` present, frontmatter well-formed, UTF-8 throughout, reserved files in place.
7. **Index and log structure.** We build the reserved `index.md` for progressive disclosure and `log.md` to record provenance and change history.
8. **Delivery in version control.** The finished bundle ships as a git repository your team owns outright.

## What is migrated versus what is pruned

| Migrated | Pruned |
|---|---|
| Live, accurate pages still in use | Stale drafts and superseded versions |
| The canonical version of each answer | Near-duplicate copies of the same answer |
| Content that maps to a clear concept type | Orphaned pages with no owner or purpose |
| Reference data, how-tos, policies, FAQs | Navigation chrome, macros, platform artefacts |

The goal is a smaller, cleaner, typed corpus. A leaner bundle that an agent can actually use beats a complete archive of noise.

## Handling scale

For large knowledge bases we batch the work by source section and run extraction in passes, with validation gating each batch before it moves to editorial review. Inventory and usage data drive the order: high-value, high-traffic content first, long-tail and low-use content triaged for prune-or-keep. This keeps a 5,000-page wiki tractable without a like-for-like dump.

## Before and after

| Tool-locked KB | OKF bundle |
|---|---|
| Proprietary platform, lossy export | Plain UTF-8 Markdown, fully portable |
| No content-level version history | Git history, every change diffable |
| Untyped HTML pages | Typed files with required `type` frontmatter |
| Duplicated, conflicting answers | Deduplicated, canonical sources |
| Agent-hostile, noisy for retrieval | Clean, curated source for RAG or direct context |
| No provenance | `resource` and `timestamp` on every file, plus `log.md` |

## Deliverables

- A conformant, validated OKF bundle in a git repository you own.
- Typed Markdown files with complete YAML frontmatter.
- Reserved `index.md` (progressive disclosure) and `log.md` (provenance).
- A migration report: what was migrated, what was pruned, and why.
- A short maintenance guide so the bundle stays current.

## Typical sprint timeline

| Phase | Duration |
|---|---|
| Scoping and source inventory | 2 to 3 days |
| Concept-type mapping | 2 to 3 days |
| Automated extraction and frontmatter | 3 to 5 days |
| Dedupe, cleanup, editorial review | 4 to 7 days |
| Validation, index/log, delivery | 2 to 3 days |

Most sprints complete in two to four weeks. Exact timing depends on volume and content quality, which we confirm after the audit.

## Start the migration

A clean, agent-ready knowledge layer starts with knowing what you have. Book a scoping call via [contact](/contact/), review [pricing](/pricing/), or begin with an [OKF readiness audit](/okf-readiness-audit/). When the bundle is built, the next step is making it work for your agents: see [OKF for AI agents](/okf-for-ai-agents/).
