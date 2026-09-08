# SoccerAPP — complete documentation package

Planning package revised 8 September 2026. Intended repository: https://github.com/sumarahmed/SoccerAPP

This is a planning and design package. It does not contain a working mobile/web application, database, deployed infrastructure or live subscription service. Security requirements are not evidence of implemented protection.

## Start here

1. [Agent activity plan](docs/soccer_agent_activity_plan.md) — 390 activities across twelve phases, with goals, deliverables, dependencies, roles, completion checks and a first assignment batch.
2. [Delivery master plan](docs/soccer_delivery_master_plan.md) — product scope, delivery gates and five immediate priorities, now reconciled into the task package.
3. [Product wishlist](docs/soccer_product_wishlist.md) and [market gap analysis](docs/soccer_market_gap_analysis.md) — deferred candidates and market research dated 6 September 2026.
4. [Human action playbook](docs/soccer_human_action_playbook.md) and [agent execution playbook](docs/soccer_agent_execution_playbook.md) — responsibilities and bounded execution contracts.

## Specifications and design

- [Foundation](docs/baseline/soccer_app_foundation_plan.md)
- [Platform, hosting and business plan](docs/baseline/soccer_end_to_end_platform_and_business_plan.md)
- [Club, parent and coach administration](docs/baseline/soccer_club_parent_and_coach_administration.md)
- [Pilot and design pack](docs/baseline/soccer_pilot_and_design_pack.md), including light/dark appearance and an app-logo opening frame for exported recordings
- [SDLC and security delivery review](docs/baseline/soccer_sdlc_security_and_agent_delivery_review.md)
- [End-to-end security and gap review](docs/baseline/soccer_end_to_end_security_and_gap_review.md)
- [Feature traceability](docs/soccer_feature_traceability.md)

Three visual concept boards are included: [practice screens](design/soccer_practice_app_concept_screens.png), [practice board](design/soccer_practice_app_concept_board.png), and [navigation consistency](design/soccer_navigation_consistency_board.png). These are visual references, not an editable Figma prototype. Where early imagery conflicts with later design requirements, use the written design baseline, particularly its appearance requirements.

## Linear delivery baseline

[Import instructions](docs/soccer_linear_setup_and_import.md) explain the tracker setup and relationship pass.

Choose one import route:

- [Full CSV](docs/soccer_linear_import.csv): 165 source tasks; or
- [Smoke CSV](docs/soccer_linear_smoke.csv): 3 tasks, then [remaining CSV](docs/soccer_linear_remaining.csv): 162 tasks.

Do not import both routes. [Detailed backlog](docs/soccer_delivery_backlog.md), [structured manifest](docs/soccer_linear_manifest.json), and [acceptance evidence register](docs/soccer_acceptance_evidence_register.json) accompany these files.

**IP-01–IP-05 are reconciled into SP-151–SP-165 and the affected existing scopes, dependencies, acceptance register and all three source-task CSVs.** The 390 activity records comprise 327 agent activities, 21 human actions/decisions and 42 human acceptance rollups. No live Linear import or agent dispatch has been performed. The 613 acceptance criteria are planned; they are not completed test evidence.

Use the [activity manifest](docs/soccer_agent_activity_manifest.json) for structured assignments and the [flat activity CSV](docs/soccer_agent_activity_tasks.csv) for sorting. The activity CSV is a planning view, not another Linear import route. All source records and activities remain Backlog until their actual assignment inputs and predecessor evidence are resolved.

The [earlier validation report](docs/validation_report.md) records the original delivery baseline. The [current validation report](docs/activity_plan_validation.md) records this revision. The 74-task backlog inside `docs/baseline/` remains historical; use the 165-task backlog and activity packs directly inside `docs/`.

## Financial model

[Subscription and operating-cost workbook](financial/soccer_subscription_and_cost_model.xlsx) contains seven sheets. It is the existing financial baseline and has not been recalculated for all subsequent security, identity, export and priority additions. Prices and costs are planning assumptions, not supplier commitments.

## Package verification and provenance

[Package validation](PACKAGE_VALIDATION.md) records archive and cross-reference checks. [Package manifest](package-manifest.json) lists every other included file with its size and SHA-256 checksum. [Baseline source manifest](docs/source_manifest.json) preserves provenance and hashes for the seven original baseline documents.

The package includes the latest available planning documents, supporting data, workbook and three confirmed visual assets. Superseded ZIPs, scratch scripts, temporary downloads and unrelated files are excluded. Local sandbox links in the current Markdown documents were converted to relative links for GitHub portability; the original baseline documents remain byte-identical to their source manifest.
