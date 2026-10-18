# Documentation ownership and release procedure

Updated 18 October 2026.

1. Maintain implementation status, source maps, detailed tests and internal installation/build evidence in the private Soccolo-app repository, currently on `feat/sp014-local-camera-feasibility`. Start at `apps/mobile/CURRENT_STATUS.md`.
2. For each delivered candidate, update this repository's [current status](CURRENT_STATUS.md), [backlog](content/current-backlog.md), applicable acceptance checklist, README and `site/activity-map/template.html` status panel. Keep version, date and acceptance state aligned.
3. Publish only public-safe product summaries. Never copy credentials, signing profiles, internal installation links, private recordings or child data. Preserve dated decisions, canonical package snapshots and formal acceptance evidence.
4. Mark superseded dated pilot notes as historical with a link to current status. Edit canonical package material only when the planning contract itself changes; do not regenerate acceptance to match app progress.
5. Run `node tools/validate-docs.cjs`, review the diff, commit and push public `main`. GitHub Pages deploys via `.github/workflows/activity-map-pages.yml`; verify its success and the actual published status date/build.
6. Update the private release handoff with the public documentation link. A private commit alone does not publish public documentation; a local generated site alone does not deploy Pages.

The public activity graph tracks its documented criteria independently of mobile release acceptance. Both repositories are needed; neither silently replaces the other.
