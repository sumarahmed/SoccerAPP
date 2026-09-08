# SoccerTrainingApp

Youth soccer training platform for ages 5–18, supporting direct-family and club-managed training.

## Product baseline

- iOS and Android mobile training app.
- Responsive administration portal for platform, clubs, parents and coaches.
- Level 0 Platform Admin, Level 1 Club/Parent Admin, Level 2 Coach, Level 3 Player.
- Programs, positions, age-appropriate drill catalog and coach-managed plans.
- 12-drill pilot catalog, with no permanent 12-drill product limit.
- Work/rest timer, realistic drill demonstrations and spoken/visual cues.
- Exercise-clip recording and full-session recording with chapters.
- Local-first media and optional private cloud backup.
- Logo-first video export followed by the recorded training footage.
- Device-following Light/Dark themes with live switching that must not interrupt recording.
- Adult MFA, restricted player sessions, guardian authority and scoped club permissions.
- Family and club subscription models, with commercial assumptions subject to validation.

## Documentation

Start with the [agent activity plan](docs/delivery/soccer_agent_activity_plan.md): **390 activities across twelve phases**, including **327 agent activities**, **21 human actions/decisions** and **42 human acceptance rollups**. Every activity has a goal, deliverable, executor role, predecessors and completion checks; the plan includes the first assignment batch.

The [delivery master plan](docs/product/soccer_delivery_master_plan.md) and [detailed backlog](docs/delivery/soccer_delivery_backlog.md) contain **165 source tasks**. The five newer priorities are reconciled through SP-151–SP-165 and updates to existing task scopes. The [acceptance register](packages/soccer_agent_activity_package_20260908/docs/soccer_acceptance_evidence_register.json) contains **613 planned criteria**, including the original 543.

- `docs/product/` — product, delivery, competitive and wishlist planning.
- `docs/design/` — UX, recording, theme and export requirements.
- `docs/architecture/` — platform architecture and data boundaries.
- `docs/security/` — identity, media, privacy and safeguarding requirements.
- `docs/delivery/` — full activity cards, backlog, traceability, human/agent execution model and validation reports.
- `linear/` — tracker import guidance and links to the exact import artifacts.
- `packages/soccer_agent_activity_package_20260908/` — complete authoritative planning package, including structured manifests, CSVs, original specifications, workbook and design assets.

Existing documentation paths now contain synchronized full-text views of the canonical package. See the [package inventory](docs/delivery/package_inventory.md) for every included file and the update procedure.

## Structured task data and supporting files

- [Activity manifest](packages/soccer_agent_activity_package_20260908/docs/soccer_agent_activity_manifest.json) and [sortable activity CSV](packages/soccer_agent_activity_package_20260908/docs/soccer_agent_activity_tasks.csv).
- [Source task manifest](packages/soccer_agent_activity_package_20260908/docs/soccer_linear_manifest.json) with parent links, dependencies and run-contract fields.
- [Full Linear CSV](packages/soccer_agent_activity_package_20260908/docs/soccer_linear_import.csv), or [smoke CSV](packages/soccer_agent_activity_package_20260908/docs/soccer_linear_smoke.csv) followed by [remaining CSV](packages/soccer_agent_activity_package_20260908/docs/soccer_linear_remaining.csv). Choose one route; the activity CSV is not another import route.
- [Subscription and cost workbook](packages/soccer_agent_activity_package_20260908/financial/soccer_subscription_and_cost_model.xlsx), unchanged planning assumptions.
- [Practice screen concepts](packages/soccer_agent_activity_package_20260908/design/soccer_practice_app_concept_screens.png), [practice board](packages/soccer_agent_activity_package_20260908/design/soccer_practice_app_concept_board.png) and [navigation board](packages/soccer_agent_activity_package_20260908/design/soccer_navigation_consistency_board.png).

## Documentation checks

Run `node tools/validate-docs.cjs` from the repository root. This checks the source/activity graphs, acceptance coverage, CSV parity, package hashes, generated documentation and relative links. To update documentation, edit canonical files under `packages/soccer_agent_activity_package_20260908/` and follow the [regeneration procedure](docs/delivery/package_inventory.md#updating-documentation).

## Current status

Documentation synchronized 8 September 2026. Planning/design stage: all task and activity records remain Backlog. No production application, live database, customer billing setup, live Linear import or dispatched agent run is represented by this documentation update. Human approval, specialist review and implementation evidence remain required at the relevant delivery gates.
