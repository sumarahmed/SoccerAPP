# Linear planning artifacts

Updated 8 September 2026. Read the [full setup and import guide](soccer_linear_setup_and_import.md) before using the files.

Choose **one** import route:

- [Full CSV: 165 source tasks](../packages/soccer_agent_activity_package_20260908/docs/soccer_linear_import.csv); or
- [Smoke CSV: 3 tasks](../packages/soccer_agent_activity_package_20260908/docs/soccer_linear_smoke.csv), followed by [remaining CSV: 162 tasks](../packages/soccer_agent_activity_package_20260908/docs/soccer_linear_remaining.csv).

Use the [source manifest](../packages/soccer_agent_activity_package_20260908/docs/soccer_linear_manifest.json) for the separate relationship pass and retain actual live issue IDs. [Acceptance evidence](../packages/soccer_agent_activity_package_20260908/docs/soccer_acceptance_evidence_register.json) remains unverified. IP-01–IP-05 are included in the updated files.

The [390-activity manifest](../packages/soccer_agent_activity_package_20260908/docs/soccer_agent_activity_manifest.json) and [activity CSV](../packages/soccer_agent_activity_package_20260908/docs/soccer_agent_activity_tasks.csv) provide smaller assignment units. The activity CSV is a planning view, not an additional Linear import route. Source descriptions include the activity goals; decide the live sub-issue hierarchy before creating additional records.

All machine files live in the [canonical package](../packages/soccer_agent_activity_package_20260908/README.md) to keep descriptions, dependencies, acceptance IDs and checksums together. Their package-relative references use `packages/soccer_agent_activity_package_20260908/docs/` as the document context. No live tracker import or agent dispatch has been performed.
