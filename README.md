# Open Knowledge Format Agency

Independent B2B agency site for **OKF implementation services** (audits, implementation, KB migration, agent-ready knowledge). Converts companies' docs/KBs/wikis/catalogs into Google's Open Knowledge Format (OKF) bundles. Not affiliated with Google. Commercial sibling of `openknowledgeformat.academy`.

Live domain: `openknowledgeformat.agency`

## Stack
Astro 5 (static) + Tailwind 4 + `@tailwindcss/typography` + `@astrojs/sitemap`. Shares the academy's infra; B2B slate/blue palette.

## Commands
```bash
npm install
npm run dev / build / preview
```

## Pages (10)
`/` · `/services/` · `/okf-readiness-audit/` · `/okf-implementation/` · `/okf-knowledge-base-migration/` · `/okf-for-ai-agents/` · `/case-study-template/` · `/pricing/` · `/contact/` · `/about/`

## Conventions
- No em/en dashes anywhere. No fabricated clients/testimonials/logos/credentials/Google-partner language.
- All pricing is **indicative** placeholder (audit £1,500 / starter £4,000 / migration £9,000 / retainer £1,200pm) — Sunny confirms before launch.
- Contact + waitlist forms point to placeholder `formspree.io/f/your-form-id`; mailto fallback `hello@openknowledgeformat.agency`. Wire a real backend before launch.
- Service pages emit `Service` JSON-LD (with indicative Offer); sitewide `ProfessionalService`.
- Markdown frontmatter descriptions containing `: ` MUST be quoted (build-breaking).

## Deploy
GitHub -> Cloudflare Pages. Build `npm run build`, output `dist`, NODE_VERSION=22.
