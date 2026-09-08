# Package validation — 8 September 2026

> Synchronized 8 September 2026 from the [complete planning source](../../packages/soccer_agent_activity_package_20260908/PACKAGE_VALIDATION.md). This page contains the full source text with repository-relative navigation. Edit the canonical file under `packages/soccer_agent_activity_package_20260908/`, then run `node tools/sync-docs.cjs` from the repository root. Plain filenames, machine-data references and package regeneration commands in the source are relative to the [canonical package](../../packages/soccer_agent_activity_package_20260908/README.md).

The [activity validation report](activity_plan_validation.md) records the detailed structural checks.

- 165 source tasks and 390 linked activities cover all twelve phases and IP-01–IP-05.
- Source and activity dependency graphs are acyclic; source/CSV/activity/evidence relationships agree.
- Source CSV counts are full 165, smoke 3 and remaining 162. All 613 acceptance records remain unverified.
- All seven original baseline document hashes match their source manifest.
- The financial workbook and three design PNGs are unchanged from the earlier package.
- Current Markdown file references resolve; JSON parses; the package manifest lists every included file with current size and SHA-256.

No live import, product implementation, participant work or agent dispatch has been performed. Archive integrity is checked separately after creating the dated ZIP. Regenerate package hashes with `node tools/validate-activity-plan.cjs --refresh-package` after authorized file changes.
