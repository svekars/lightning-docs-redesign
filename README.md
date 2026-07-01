# Lightning AI docs redesign

A working prototype of a restructured `/docs/platform/` for Lightning AI, focused on the Overview section and a rewritten Getting Started page. Built with [Nextra](https://nextra.site).

Created as part of a take-home for the Senior Technical Writer, Developer Experience role at Lightning AI (2026).

## Run locally

```bash
cd ~/repositories/lightning-docs-redesign
npm install   # already done once on this machine
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Key routes:
- `/` — repo landing page
- `/docs/platform/overview/` — new section landing (the redesigned version of the empty page in production)
- `/docs/platform/overview/getting-started/` — the showpiece, the new canonical Getting Started
- `/journey/` — user journey diagram, current vs proposed (Mermaid)
- `/wireframe/` — structural wireframe with annotations

## Deploy to GitHub Pages

A workflow at `.github/workflows/deploy.yml` builds the static site and publishes it to GitHub Pages on every push to `main`.

**One-time setup**:

1. Push this repo to GitHub. The repo name `lightning-docs-redesign` matters because it's baked into the `basePath`. If you rename, edit `repoName` in `next.config.mjs`.
2. In the repo on GitHub, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main`. The workflow builds and deploys.
5. The published site URL is `https://<your-github-username>.github.io/lightning-docs-redesign/`.

**Local production build (sanity check before pushing)**:

```bash
NODE_ENV=production npm run build
ls out/
```

The static site lands in `out/`. The `postbuild` script also drops a `.nojekyll` file so GitHub Pages doesn't try to Jekyll-process the underscored Next.js files.

## Repository layout

```
lightning-docs-redesign/
├── .github/workflows/deploy.yml      GitHub Pages CI
├── pages/                            Nextra pages (also the source for Notion import)
│   ├── index.mdx                     Repo landing page
│   ├── journey.mdx                   User journey diagram (Mermaid)
│   ├── wireframe.mdx                 Structural wireframe + annotations
│   ├── _meta.ts                      Top-level sidebar config
│   ├── _app.tsx                      Required by Nextra v3
│   └── docs/platform/
│       ├── overview/
│       │   ├── index.mdx             New section landing
│       │   └── getting-started.md    THE showpiece
│       ├── concepts/
│       │   └── why-lightning.md      Moved out of Overview
│       ├── faq/
│       │   └── account-and-verification.md   New, surfaces the GPU unlock gate
│       └── setups/
│           ├── academia.md           Consolidates 9 pages
│           ├── enterprise.md         Consolidates 6 pages
│           ├── personal-use.md       Consolidates 5 pages
│           └── startups.md           Consolidates 3 pages
├── package.json
├── next.config.mjs
├── theme.config.tsx                  Nextra docs theme config
└── tsconfig.json
```

## Proposed IA (Overview section only)

```
docs/platform/
  overview/
    index               new section landing (replaces empty page)
    getting-started     canonical 5-minute path (replaces getting-started + quick-start)
  concepts/
    why-lightning       moved out of Overview (was first-touch marketing)
    studios             [stub, out of scope]
    teamspaces          [stub, out of scope]
    model-apis          [stub, out of scope]
  faq/
    account-and-verification   new; surfaces the GPU unlock gate
    billing                    moved next to pricing in nav [stub]
    get-help                   [stub]
  setups/
    academia            consolidates 9 academia sub-pages
    enterprise          consolidates 6 enterprise sub-pages
    personal-use        consolidates 5 personal-use sub-pages
    startups            consolidates 3 startups sub-pages
```

Net: 46 Overview pages reduced to ~12, with no content loss. Full per-page action plan in the working notes folder at `~/Downloads/job_search_2026/lightning_takehome/overview_action_plan.csv`.

## Headline findings about the current docs

1. The Overview landing page has no authored markdown body. The SPA renders an auto-generated grid of 6 cards.
2. Getting Started and Quickstart both exist with overlapping and conflicting intent.
3. The free-tier verification step that unlocks GPU is not mentioned in Getting Started, so users hit a credit card prompt and bounce.
4. The 46-page Overview section contains 9 duplicate or near-duplicate pages, including one with the URL `setups/personal-use/new-page-4x6h5` (an unrenamed CMS auto-slug).

## Why these IA choices

Full audit at `~/Downloads/job_search_2026/lightning_takehome/analysis.md`. Summary of the headline decisions:

1. **One canonical Getting Started, not two.** Today's Getting Started and Quickstart compete with each other and use different structures. Merged into one linear 5-minute path with branching offered only after first success.
2. **Verification step is explicit.** Today's docs never tell new users that phone or `.edu` email verification unlocks free GPU hours. Made it a callout, not a buried FAQ.
3. **Why Lightning moved out of first-touch.** 134 lines of positioning was the second card on Overview. Moved to `concepts/`, replaced with a single demoted link.
4. **Setups consolidated.** 28 persona pages collapse to 4 (academia, enterprise, personal-use, startups) with anchored sections per persona. Zero content loss, ~85% URL reduction.
5. **Defined success state per step.** Every step ends with "you should see X."

## Process recommendations (the tooling/workflow answer)

To keep this from drifting back to 46 pages and 9 duplicates:

- **Content-hash CI check.** Hash normalized page bodies; fail the build on duplicate detection. Caught all 9 dupes here in seconds.
- **Empty-page CI check.** Block merge if a page body is shorter than a threshold. Would have caught the empty Overview landing.
- **CMS slug audit.** Block merge on URL slugs matching auto-generated patterns (`new-page-*`, `untitled-*`). Would have caught `new-page-4x6h5`.
- **Quickstart smoke test.** Spin up a fresh Studio nightly, run the Getting Started snippet, page on failure. Doc rot kills more onboarding than bad writing does.
- **Vocabulary lint.** Vale (or custom rules) for the recurring inconsistencies: `Studio` vs `AI Studio`, `LitAI` vs `litAI` vs `litai`, `AI Hub` vs `AI hub`.

## Using this as a Notion source

The `.md` files in `pages/docs/` are plain markdown with frontmatter. To import the structure into a Notion workspace:

1. Notion → Settings → Workspace → Import.
2. Choose **Markdown & CSV**.
3. Select the `pages/docs/` folder.
4. Notion preserves the folder hierarchy as nested pages.

Mermaid diagrams (in `journey.mdx`) won't render natively in Notion. Either swap them for images, or rely on the GitHub Pages site for the live diagrams.

## Disclaimer

Take-home prototype, not an official Lightning AI redesign. Not affiliated with Lightning AI. Based on public docs as of 2026-06-30.
