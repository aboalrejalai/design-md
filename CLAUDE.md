# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A content repository plus a zero-build static site. The content is ~150 design-system packages
(`design-systems/<slug>/`) that feed AI coding agents brand-accurate design tokens; the site
(`index.html` + `index.js` + `index.css`) is a browser catalog for reading and downloading them.
There is no `package.json`, no bundler, no framework, and no test runner. Everything in the repo root
is served verbatim by GitHub Pages (`.github/workflows/static.yml` uploads `path: '.'` on push to
`main`).

## Commands

```bash
# Regenerate brands_metadata.js after ANY change under design-systems/
node scripts/build_metadata.js

# Preview the site — it fetch()es package files, so file:// will not work
python3 -m http.server 8000
```

Design-creator skill scripts (scaffold a new package from a live site or a local codebase):

```bash
python3 design-creator/scripts/analyze_url.py <URL> design-systems/<slug>
python3 design-creator/scripts/analyze_codebase.py <PATH> design-systems/<slug>
```

`design-creator/evals/evals.json` holds prompt-level evals for the skill (no automated runner);
`design-md-generator-workspace/iteration-1/` archives a past with-skill/without-skill benchmark.

## Architecture

Three layers, connected by one generated file:

1. **Content** — `design-systems/<slug>/` packages. Fixed v1 filenames (`manifest.json`,
   `DESIGN.md`, `tokens.css`, `design-tokens.json`, `tailwind-v4.css`, `components.html`,
   `components.manifest.json`, `USAGE.md`, plus optional `preview/`, `source/`, `assets/`, `fonts/`).
2. **Index** — `scripts/build_metadata.js` walks every package directory, reads its `manifest.json`,
   pulls identity colors out of `design-tokens.json` and a description out of `DESIGN.md`, and emits
   `brands_metadata.js` as one `const BRANDS_METADATA = [...]` array.
3. **Viewer** — `index.html` loads `brands_metadata.js` then `index.js` as plain classic scripts
   (`BRANDS_METADATA` is a global; there are no ES modules). `index.js` renders the card grid and
   category pills from that array, and the reader drawer lazily `fetch()`es the actual package files
   per tab (design / tokens / components / usage / preview). "Download ZIP" is assembled entirely
   client-side by JSZip from the same fetches. `marked`, JSZip, and FontAwesome come from CDNs.

Key consequences:

- **`brands_metadata.js` is generated — never hand-edit it.** Change the package's `manifest.json`,
  `DESIGN.md`, or `design-tokens.json`, then re-run the builder and commit both.
- `getFileUrl()` in `index.js` resolves every runtime fetch relative to `location.pathname` so the
  site works under the GitHub Pages sub-path (`/design-md/`) as well as at a domain root. Keep paths
  in metadata repo-relative (`design-systems/<slug>/...`); never make them absolute.
- `.nojekyll` at the root is required — without it Pages would drop `design-systems/_schema/`.

## Adding or editing a design system

1. Create `design-systems/<slug>/` with an ASCII slug (dotted brands are normalized: `x.ai` → `x-ai`)
   and the fixed v1 filenames above. `manifest.json` needs at least `schemaVersion`
   (`od-design-system-project/v1`), `id`, `name`, `category`, `description`, `source`, `files`.
2. Category strings come straight from `manifest.category` — reuse an existing one or you create a
   new filter pill on the site.
3. The site's "Visit Website" link resolves in this order: `manifest.website` → `manifest.url` →
   `manifest.source.url` → the `BRAND_WEBSITES` map at the top of `scripts/build_metadata.js` →
   `https://github.com`. Add the URL to the manifest, or to that map for bundled fixtures.
4. Card swatches come from `design-tokens.json` identity colors, so a package without that file shows
   no palette.
5. `SKIP_DIRS` in the builder excludes `_schema`, `apple-test`, `example-test`.
6. Re-run `node scripts/build_metadata.js`.

## Gotchas

- `designs/` (93 flat `DESIGN-<brand>.md` files) is a **legacy** catalog linked from `README.md`. The
  site does not read it. The README's counts and brand tables are maintained by hand and are already
  out of sync with the 150 packages the site reports — update the README deliberately, not on the
  assumption that it tracks `design-systems/`.
- `design-systems/README.md` and `design-systems/_schema/AGENTS.md` are inherited from the upstream
  Open Design project. They describe the token/manifest contract accurately and are worth reading,
  but they reference tooling that does not exist here (`pnpm guard`, `packages/contracts/...`,
  `scripts/check-design-system-manifests.ts`). **Nothing validates manifests or tokens in this repo** —
  the only executable check is that `build_metadata.js` runs without warnings.
- `design-creator.skill` is a zip bundle of `design-creator/`; if you change `design-creator/SKILL.md`
  or its scripts, the bundle is now stale.

## design-creator skill

`design-creator/SKILL.md` defines the package-generation workflow. The Python scripts scaffold
`tokens.css`, `components.html`, `design-tokens.json`, `components.manifest.json`, and `USAGE.md`;
**`DESIGN.md` is written by the model** from the scripts' JSON output. It must be English-only, start
with YAML frontmatter (`version`, `name`, `description`, `colors`, `typography`, `rounded`, `spacing`,
`components`, with component values referencing tokens as `{colors.primary}`), and then carry the
sections Overview, Colors, Typography, Layout, Elevation & Depth, Shapes, Components, Responsive
Behavior, Do's and Don'ts, Iteration Guide / Known Gaps. No placeholder values.
