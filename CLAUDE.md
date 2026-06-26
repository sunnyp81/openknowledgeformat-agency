# openknowledgeformat.agency — repo brain

Commercial B2B sibling of [[openknowledgeformat-academy]]. Independent OKF **implementation agency**: converts companies' operational knowledge (docs, support KBs, data catalogs, wikis, agent context) into Google OKF bundles. Astro 5 + Tailwind 4 static. Goal: lead-gen for OKF implementation services (audit -> implement -> migrate -> retain).

## State (2026-06-26) — BUILT, committed local `master`, NOT pushed, NOT deployed
- 10 pages: `/` (home), `/services/`, `/okf-readiness-audit/` (entry offer), `/okf-implementation/`, `/okf-knowledge-base-migration/`, `/okf-for-ai-agents/`, `/case-study-template/`, `/pricing/`, `/contact/` (lead form), `/about/`.
- `npm run build` green (10 pages + sitemap). JSON-LD valid: ProfessionalService (sitewide), Service+Offer (4 service pages), FAQPage, Article, BreadcrumbList. No broken links. No em/en dashes. OG PNG from svg via sharp.
- Content by 4 parallel subagents, grounded in verified OKF spec (same facts as academy brain). Reuses academy infra (BaseLayout/MarkdownPageLayout/Header/Footer/JsonLd) with B2B slate+blue palette, header CTA button, Service-schema support.

## Packages + INDICATIVE pricing (Sunny: confirm before launch)
Readiness Audit £1,500 fixed (entry/"show me the money") · Starter Implementation £4,000 · Migration Sprint £9,000 · Retainer £1,200/mo. All marked indicative on-site.

## NEXT (launch steps for Sunny)
1. GitHub repo `sunnyp81/openknowledgeformat-agency` (public) + push.
2. CF Pages: connect repo, build `npm run build`, output `dist`, NODE_VERSION=22. Needs `.agency` domain + zone in CF.
3. Wire contact form + home/template lead magnets (placeholder `formspree.io/f/your-form-id`; mailto `hello@openknowledgeformat.agency`) to real backend.
4. Confirm/adjust the 4 indicative prices. Replace About founder placeholder with real details.
5. Cross-link with academy (already links to academy.org in footer + why-now). Once both live, academy = top-funnel authority, agency = conversion.

## Warnings / conventions
- HARD: no em/en dashes (commas/colons/hyphens). No fabricated clients/testimonials/logos/credentials/Google-partner claims — honest placeholders only (case-study page is a framework + "be our first" offer; About has founder placeholder).
- Do NOT frame OKF as an SEO hack; it's a knowledge-packaging format.
- Markdown frontmatter `description`/`h1` containing `: ` MUST be quoted (build-breaking — hit twice this build).
