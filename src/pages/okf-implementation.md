---
layout: ../layouts/MarkdownPageLayout.astro
title: "OKF Implementation | Build a Conformant OKF Bundle"
h1: "OKF Implementation: turning your knowledge domain into a conformant, agent-readable bundle"
description: "We turn a chosen knowledge domain into a conformant, maintained Open Knowledge Format bundle: architecture, authoring, v0.1 validation, and team handover."
pubDate: 2026-06-26
service:
  name: OKF Starter Implementation
  description: A build service that converts a chosen knowledge domain into a conformant, maintained Open Knowledge Format v0.1 bundle delivered as an owned git repository with documentation, validation, and team handover.
  price: "4000"
faq:
  - q: >-
      Do we own the resulting bundle?
    a: >-
      Yes, entirely. We deliver it as a git repository you own, in open UTF-8 Markdown with no proprietary lock-in, no runtime, and no SDK dependency. You can host, version, and extend it however you like.
  - q: >-
      Can you build from our existing documentation?
    a: >-
      Yes. Where good source material exists, we can enrich and restructure it into conformant concept documents rather than authoring from scratch. If migration is the main job, see the migration sprint.
  - q: >-
      How does the bundle actually reach our agents?
    a: >-
      A bundle is plain Markdown, so agents can read it directly, or you can index it into a RAG pipeline. We document both paths in the handover.
  - q: >-
      Is the content human-reviewed?
    a: >-
      Yes. Every concept document passes human subject-matter review before delivery. Any optional generation from existing docs is a drafting aid, never the final word.
  - q: >-
      Are you affiliated with Google?
    a: >-
      No. We are an independent agency implementing the open OKF specification published by Google Cloud. We are not affiliated with, partnered with, or endorsed by Google.
---

## From scattered knowledge to a bundle your agents can read

The OKF Readiness Audit tells you what to build. Implementation builds it. We take one chosen knowledge domain, your incident runbooks, your product catalog logic, your support resolutions, your onboarding process, and turn it into a conformant Open Knowledge Format bundle: curated, version-controlled, portable, and readable by agents without a runtime or an SDK.

OKF formalises the "LLM-wiki" pattern. Instead of stuffing context into prompts or hoping a vector store retrieves the right chunk, you maintain a directory of UTF-8 Markdown files with structured YAML frontmatter that both humans and agents can read, review, and trust.

## Who this is for

- Teams that completed a readiness audit and have an approved bundle architecture ready to build.
- Organisations running internal copilots or customer assistants that need a reliable, maintained knowledge source.
- Data and platform teams standardising on OKF who want the first reference bundle built correctly.

## What we build

- **Bundle architecture.** A directory structure mapped to your domain, with a clear `type` taxonomy for each kind of concept document.
- **Concept documents.** Each file carries correct YAML frontmatter: the required `type` field, plus recommended `title`, `description`, `resource`, `tags`, and `timestamp`, written for agent retrieval and human review.
- **Progressive-disclosure `index.md`.** The reserved entry point that lets an agent start broad and drill into detail, rather than loading everything at once.
- **History in `log.md`.** The reserved change log so the bundle's evolution is auditable and ownership is clear.
- **Optional enrichment.** Where solid source documentation exists, we restructure and enrich it into conformant concept documents rather than rewriting from zero.
- **Validation against v0.1.** A conformance pass confirming structure, frontmatter, and reserved files meet the OKF v0.1 specification.
- **Optional visualiser and handover.** A static HTML view of the bundle for non-technical stakeholders, modelled on Google's reference visualiser pattern.

## How we work

| Step | What happens | Human review |
|---|---|---|
| 1. Discovery | Confirm domain scope, source material, and the agents that will consume the bundle | Stakeholder sign-off on scope |
| 2. Architecture | Finalise directory structure, `type` taxonomy, and `index.md` outline | Architecture approved before authoring |
| 3. Authoring / generation | Write or enrich concept documents with correct frontmatter | Subject-matter expert reviews each document |
| 4. Validation | Conformance check against OKF v0.1: structure, frontmatter, reserved files | Validation report shared and signed off |
| 5. Handover | Deliver repo, docs, maintenance playbook, and train the owning team | Live handover session |

Human review is a gate at every step, not an afterthought. Generation, where used, accelerates drafting; it never replaces expert judgement.

## What is in a delivered bundle

| Component | Detail |
|---|---|
| `index.md` | Reserved entry point with progressive-disclosure structure |
| `log.md` | Reserved change history for auditability |
| Concept documents | UTF-8 Markdown files, one concept each, with valid YAML frontmatter |
| Frontmatter | Required `type`; recommended `title`, `description`, `resource`, `tags`, `timestamp` |
| Git repository | Version-controlled, owned by you, no proprietary runtime or SDK |
| Conformance report | Evidence the bundle meets OKF v0.1 |
| Maintenance playbook | How to add, update, and retire documents and keep `log.md` current |
| Optional visualiser | Static HTML view for non-technical readers |

## Integration notes

A bundle is plain Markdown by design, which keeps integration simple and portable:

- **Direct agent consumption.** Point an agent at the repository and let it read `index.md`, then drill into concept documents on demand. No runtime or SDK is required by the spec.
- **RAG pipeline.** Index the Markdown files into your existing retrieval stack. Because each document is one curated concept with clean frontmatter, chunking and metadata filtering are far more reliable than over raw exports.

See [OKF for AI agents](/okf-for-ai-agents/) for worked integration patterns.

## Timelines

A first bundle for a contained domain typically takes 2 to 4 weeks from approved architecture to handover, depending on document volume and review turnaround. Larger or multi-domain estates are phased, one conformant bundle at a time, so you see value early.

> Independence note: we are an independent implementation agency. OKF is an open Google Cloud specification published 12 June 2026. We are not affiliated with or endorsed by Google.

Have an approved architecture, or a domain in mind? [Request an implementation quote](/contact/), or start with the [OKF Readiness Audit](/okf-readiness-audit/).
