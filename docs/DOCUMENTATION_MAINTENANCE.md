# Documentation ownership and release procedure

Updated 21 October2026.

The owner approved the Build 62 native-layout UI and internal build. Its source is committed/pushed and Codemagic is running; see [current build evidence](verification/build62-stronger-touch-count.md). Keep documentation synchronized with verified results. This authorization does not imply a public app release or website deployment. Historical snapshots remain dated evidence, not active guidance.

1. Maintain implementation status, source maps, detailed tests and internal installation/build evidence in the private Soccolo-app repository, currently on `feat/sp014-local-camera-feasibility`. Start at `apps/mobile/CURRENT_STATUS.md`.
2. For each delivered candidate, update this repository's [current status](CURRENT_STATUS.md), [backlog](content/current-backlog.md), applicable acceptance checklist, README and `site/activity-map/template.html` status panel. Keep version, date and acceptance state aligned.
3. Publish only public-safe product summaries. Never copy credentials, signing profiles, internal installation links, private recordings or child data. Preserve dated decisions, canonical package snapshots and formal acceptance evidence.
4. Mark superseded dated pilot notes as historical with a link to current status. Edit canonical package material only when the planning contract itself changes; do not regenerate acceptance to match app progress.
5. Run `node tools/validate-docs.cjs`, review the diff and commit the documentation checkpoint. Push when authorized. Website deployment is a separate action through `.github/workflows/activity-map-pages.yml`; only claim publication after verifying that workflow and the live status.
6. Update the private release handoff with the public documentation link. A private commit alone does not publish public documentation; a local generated site alone does not deploy Pages.

The public activity graph tracks its documented criteria independently of mobile release acceptance. Both repositories are needed; neither silently replaces the other.
