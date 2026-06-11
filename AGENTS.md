# AGENTS.md

## What this is

Personal GitHub Pages site (bot/agent developer portfolio). Content lives in `docs/`.

## Commands

No build, test, lint, or typecheck commands configured — no package manifests found. All changes are static content.

## GitHub Pages

Two deployment workflows exist. Both deploy from `docs/` on push to `main`:
- `.github/workflows/jekyll-gh-pages.yml` — Jekyll build pipeline
- `.github/workflows/static.ymlЩ` — static content deploy (note: filename ends with Cyrillic `Щ`, possibly a mistake)

## Conventions

- Content is in Russian
- `.gitignore` excludes `/Без названия/` (an "Untitled" directory artifact)
- All work is done on `main` branch
