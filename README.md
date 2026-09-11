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

**Accepted decisions:** [SP-001 launch and account assumptions](docs/decisions/SP-001-launch-and-account-assumptions.md) version 1.0 was accepted by the founder/product owner on 10 September 2026. [SP-075 ownership and discovery authority](docs/decisions/SP-075-ownership-and-discovery-authority.md) version 1.0 was accepted on 11 September 2026. Syed Ahmed holds all primary accountable roles for the one-person company; all human backups and independent reviewers are explicitly vacant, discovery spend is capped at AUD 0, only Syed may contact specialists, and no discovery briefs have been issued. The recorded vacancies block the sensitive actions that require real alternates or independent/specialist review. Neither decision claims participant recruitment, specialist approval or implementation evidence.

Explore the delivery dependencies and accepted status in the [automatically generated SoccerAPP activity execution map](https://sumarahmed.github.io/SoccerAPP/). GitHub Actions rebuilds and republishes it from the activity manifests and accepted decision records after relevant changes land on `main`.

**Next development step:** the [detailed foundation milestones](docs/foundation/development_foundation_milestones.md), added 10 September 2026, define 11 milestones and 33 work items for tooling, libraries, CI, contracts, local services, runnable tests, agent execution and device/provider feasibility. Read the [library baseline](docs/foundation/technology_and_libraries.md), [36 test specifications](docs/foundation/foundation_test_catalog.md) and [review report](docs/foundation/foundation_review.md). These are planned implementation tasks; the app stack and executable app tests are not yet installed.

Start with the [agent activity plan](docs/delivery/soccer_agent_activity_plan.md): **390 activities across twelve phases**, including **327 agent activities**, **21 human actions/decisions** and **42 human acceptance rollups**. Every activity has a goal, deliverable, executor role, predecessors and completion checks; the plan includes the first assignment batch.

The [delivery master plan](docs/product/soccer_delivery_master_plan.md) and [detailed backlog](docs/delivery/soccer_delivery_backlog.md) contain **165 source tasks**. The five newer priorities are reconciled through SP-151–SP-165 and updates to existing task scopes. The [acceptance register](packages/soccer_agent_activity_package_20260908/docs/soccer_acceptance_evidence_register.json) contains **613 planned criteria**, including the original 543.

- `docs/product/` — product, delivery, competitive and wishlist planning.
- `docs/design/` — UX, recording, theme and export requirements.
- `docs/architecture/` — platform architecture and data boundaries.
- `docs/security/` — identity, media, privacy and safeguarding requirements.
- `docs/decisions/` — dated, attributable human decisions and their stated limits.
- `docs/delivery/` — full activity cards, backlog, traceability, human/agent execution model and validation reports.
- `linear/` — tracker import guidance and links to the exact import artifacts.
- `packages/soccer_agent_activity_package_20260908/` — complete authoritative planning package, including structured manifests, CSVs, original specifications, workbook and design assets.

Existing documentation paths now contain synchronized full-text views of the canonical package. See the [package inventory](docs/delivery/package_inventory.md) for every included file and the update procedure.

The 10 September refinement lives in `docs/foundation/` and maps back to the unchanged 8 September package. DF milestones/work items/test IDs do not create additional imported SP/ACT tasks or change the 165/390/613 baseline counts. Edit `tools/foundation-plan-data.cjs` and run `node tools/build-foundation-docs.cjs` to regenerate its milestone and test records; library and review documents are authored directly.

## Structured task data and supporting files

- [Activity manifest](packages/soccer_agent_activity_package_20260908/docs/soccer_agent_activity_manifest.json) and [sortable activity CSV](packages/soccer_agent_activity_package_20260908/docs/soccer_agent_activity_tasks.csv).
- [Source task manifest](packages/soccer_agent_activity_package_20260908/docs/soccer_linear_manifest.json) with parent links, dependencies and run-contract fields.
- [Full Linear CSV](packages/soccer_agent_activity_package_20260908/docs/soccer_linear_import.csv), or [smoke CSV](packages/soccer_agent_activity_package_20260908/docs/soccer_linear_smoke.csv) followed by [remaining CSV](packages/soccer_agent_activity_package_20260908/docs/soccer_linear_remaining.csv). Choose one route; the activity CSV is not another import route.
- [Subscription and cost workbook](packages/soccer_agent_activity_package_20260908/financial/soccer_subscription_and_cost_model.xlsx), unchanged planning assumptions.
- [Practice screen concepts](packages/soccer_agent_activity_package_20260908/design/soccer_practice_app_concept_screens.png), [practice board](packages/soccer_agent_activity_package_20260908/design/soccer_practice_app_concept_board.png) and [navigation board](packages/soccer_agent_activity_package_20260908/design/soccer_navigation_consistency_board.png).

## Documentation checks

Run `node tools/validate-docs.cjs` from the repository root. This checks the source/activity graphs, acceptance coverage, CSV parity, package hashes, generated documentation, activity-map output and relative links. To update documentation, edit canonical files under `packages/soccer_agent_activity_package_20260908/` and follow the [regeneration procedure](docs/delivery/package_inventory.md#updating-documentation).

## Current status

Documentation synchronized 8 September 2026; the development foundation plan and attributable SP-001/SP-075 decisions were added 10–11 September 2026. SP-001 and SP-075 are accepted through their dated decision artifacts. ACT-SP-004-01 is the next P00 founder review; it must assess pilot measures, the zero-budget boundary, device access and specialist work scopes without treating deferred specialist evidence as complete. The frozen planning-package manifests still retain their original Backlog/Not started state, and foundation milestones remain proposed. No production application, live database, customer billing setup, live Linear import or autonomous agent dispatch is represented by this documentation update. Specialist review and implementation evidence remain required at the relevant downstream delivery gates.
