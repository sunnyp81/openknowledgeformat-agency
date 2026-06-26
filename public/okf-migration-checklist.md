# OKF Migration Checklist

A practical, step-by-step checklist for assessing and converting your operational
knowledge into a conformant Open Knowledge Format (OKF) bundle.

Provided by openknowledgeformat.agency, an independent OKF implementation agency.
Not affiliated with, endorsed by, or partnered with Google. OKF is an open
specification (v0.1) published by Google Cloud on 12 June 2026.
Spec: https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md

--------------------------------------------------------------------------------

## 1. Inventory your knowledge sources
- [ ] List every system holding operational knowledge (wikis, docs, support KB,
      data catalog, shared drives, runbooks, code comments, spreadsheets).
- [ ] For each source: note volume, owner, last-updated date, and access method.
- [ ] Flag where AI agents currently read knowledge from (RAG, pasted context, none).

## 2. Assess quality and freshness
- [ ] Identify duplicate and conflicting answers.
- [ ] Mark stale, superseded, or unowned content.
- [ ] Note tacit knowledge that is not written down anywhere yet.

## 3. Decide what to convert (and what to prune)
- [ ] Prioritise by agent value vs conformance effort.
- [ ] Choose the first domain to formalise.
- [ ] Decide explicitly what will be left behind.

## 4. Design the bundle
- [ ] Define a `type` taxonomy for your concepts (e.g. table, metric, runbook, api, policy).
- [ ] Plan the directory structure.
- [ ] Outline the reserved `index.md` (progressive disclosure entry point).
- [ ] Plan `log.md` (change history).

## 5. Convert to OKF
- [ ] Extract clean UTF-8 Markdown from each source.
- [ ] Add YAML frontmatter to every concept file:
      - [ ] `type` (REQUIRED, non-empty)
      - [ ] `title`, `description`, `resource`, `tags`, `timestamp` (recommended)
- [ ] One concept per file.
- [ ] Deduplicate and pick canonical versions.

## 6. Validate conformance (OKF v0.1)
- [ ] Every non-reserved .md file has parseable YAML frontmatter.
- [ ] Every frontmatter block has a non-empty `type`.
- [ ] `index.md` and `log.md` follow their reserved structures.
- [ ] Consumers tolerate broken links, missing optional fields, unknown types.

## 7. Deliver and maintain
- [ ] Store the bundle in version control (git).
- [ ] Write a maintenance playbook (how to add, update, retire concepts).
- [ ] Decide integration: direct context load and/or feed a RAG pipeline.
- [ ] Schedule periodic accuracy reviews; keep `log.md` current.

--------------------------------------------------------------------------------

Need help running this? Book a fixed-fee OKF Readiness Audit:
https://openknowledgeformat.agency/okf-readiness-audit/
