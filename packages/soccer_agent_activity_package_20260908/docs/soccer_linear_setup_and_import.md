# SoccerTrainingApp — Linear setup and import guide

Import method researched 6 September 2026; task data revised 8 September 2026. This revision updates planning records and does not revalidate current vendor behavior. No workspace, integration, user invitation, project, issue or automated agent run has been created by this work.

## 1. What can be imported

The CSVs follow Linear's documented **CLI importer → Linear (CSV)** route. They carry issue titles, full Markdown descriptions, priority, status, labels and the standard export headers. The importer does not reconstruct the full project hierarchy. Use the manifest for a deliberate second pass. Compare the file header with a fresh export template from the destination workspace before executing, since tools can change. [Linear CLI importer](https://linear.app/docs/cli-importer).

| Artifact | Record count | Use |
|---|---:|---|
| `soccer_linear_import.csv` | 165 | Single full import after mapping review |
| `soccer_linear_smoke.csv` | 3 | SP-001, SP-003 and SP-075 to check formatting and one dependency |
| `soccer_linear_remaining.csv` | 162 | Import after the smoke records succeed in the same destination |
| `soccer_linear_manifest.json` | 165 tasks | Full metadata, parent relations, predecessors, phases and run-contract placeholders |
| `soccer_agent_activity_manifest.json` / `soccer_agent_activity_tasks.csv` | 390 activities | Separate planning breakdown; not an additional import route |
| `soccer_acceptance_evidence_register.json` | One record per planned acceptance criterion | Future traceability and reviewer evidence; all entries start unverified |

**Choose one route:** full CSV **or** smoke then remaining. The full CSV includes the smoke records, so importing both would risk duplicates. The metadata manifest is not natively ingestible through Linear's issue CSV dialog and is not a runnable importer.

## 2. Target workspace structure

Use one team initially, proposed name **SoccerTrainingApp**. The actual name/key is selected by the workspace owner. Never assume `SP-001` will become the live Linear issue identifier; keep `[SP-001]` in the title and maintain a mapping to the actual ID/UUID.

| Project | Purpose | Phase milestones |
|---|---|---|
| G0 — Definition and delivery setup | Scope, ownership and budgets | P00 |
| G1 — Content, experience and security contracts | Reviewed requirements and designs | P01 |
| G2 — Technical feasibility | Workspace, agent trial and feasibility decision | P02, P03 |
| G3 — Pilot implementation and verification | Integrated product and readiness | P04, P05, P06, P07, P08 |
| G4 — Family and club pilot | Research, corrections and economics | P09 |
| G5 — Commercial release | Live catalog, operations and release | P10 |
| G6 — Operation and expansion | Dated maintenance and justified future scope | P11 |

An initiative grouping these projects is optional if available in the chosen workspace. Milestones belong to one project; create the relevant phase milestone inside each project that contains such issues. Cross-project grouping can use phase labels. Native milestone progress is a navigation aid; the explicit human gate acceptance remains authoritative. [Project milestones](https://linear.app/docs/project-milestones).

Statuses: **Backlog → Ready → In Progress → Review → Validation → Done**, with **Blocked** and **Cancelled**. Map to the destination's workflow categories; do not silently map imported Backlog to active work. All 165 source records start Backlog with no completed timestamps, estimates or fabricated assignees. Source descriptions include linked ACT goals; choose an actual ACT hierarchy before creating additional live sub-issues.

Labels use plain names to avoid relying on custom field support:

- `phase-P00` through `phase-P11` and `gate-G0` through `gate-G6`.
- `area-mobile`, `area-web`, `area-identity`, `area-media`, `area-billing`, `area-operations`, `area-content`, `area-quality`, `area-security`, `area-design`, `area-backend`, `area-research`, `area-business`, `area-delivery`, `area-release`.
- `mode-human`, `mode-agent`, `mode-hybrid`; `risk-high`, `risk-standard`.
- `kind-work-package`, `kind-task`, `kind-human-action`, `kind-gate`.
- `required-p0`, `required-p1`, `required-p2` preserve the original gate requirement class.

Map P0 to **High**, P1 to **Medium** and P2 to **Low** for this initial import. P0 means prerequisite for its applicable gate; it does not mean a live production emergency. Priority never bypasses dependency or review requirements.

## 3. CSV field mapping

The prepared header includes the standard fields exposed by the published Linear CSV importer. Labels are separated with **comma followed by a space**, matching the current parser. User-visible source identifiers remain in titles/descriptions because importer behaviour is not a source-ID upsert contract. [Published Linear CSV importer](https://github.com/linear/linear/blob/master/packages/import/src/importers/linearCsv/LinearCsvImporter.ts).

| Column | Supplied value / handling |
|---|---|
| Id | Stable SP source reference; not assumed to become a live issue ID |
| Team | Proposed source team name; select actual destination interactively |
| Title | `[SP-nnn]` followed by the task title |
| Description | Full task card: scope, human actions, agent work, acceptance, constraints and references |
| Status | Backlog |
| Priority | High, Medium or Low |
| Labels | Comma-and-space-separated labels above |
| Project | Gate project name for reference; assign real project in the second pass |
| Assignee / Creator | Blank; owner role is in the description and manifest until mapped to actual people |
| Estimate | Blank; estimate leaf tasks after actual repository/interface inspection |
| Created / Updated / Started / Completed / Canceled / Archived | Blank; no historic execution or completion dates invented |
| Cycle Number / Name / Start / End | Blank; select cycles when scheduling Ready work |

Do not insert placeholder email addresses to force owner assignment. Confirm that the blank assignee maps to unassigned in the import preview; do not accept creation/invitation of a blank or fictional user. Required role names are planning metadata, not Linear account identities.

## 4. Import procedure for the workspace administrator

1. **Confirm destination and authority.** Identify the actual workspace/team and whether this is the first import. Back up/export existing work where relevant. Importing files is separate from activating agents or beginning development.
2. **Create the basic configuration.** Set up or map statuses, gate projects and relevant phase milestones. Confirm available features, account protections and team access for the selected service plan. Do not invite people automatically.
3. **Review the input.** Inspect the CSV header against the workspace's fresh export template. Select full or smoke-plus-remaining route. Keep UTF-8 encoding and multiline Description quoting intact; do not save through an editor that truncates cells.
4. **Run the documented CLI path.** As an authorized workspace administrator, open Linear's Import/Export settings and follow the CLI importer instructions. Select **Linear (CSV)**, the chosen file and the actual destination team. Obtain the current tool from the official documentation; do not paste credentials into issue descriptions.
5. **Inspect the preview.** Check titles, blank-user mapping, labels, Backlog status and multiline descriptions. For the three-record route, confirm SP-075 correctly names SP-001 as its predecessor in the description; the relationship is applied in the second pass.
6. **Complete the chosen import and record results.** Retain actual IDs and any per-item errors. After a successful three-record test, import only `soccer_linear_remaining.csv`. If a result is uncertain, inspect actual created issues before retrying.
7. **Build the ID map.** Locate each title's SP reference and record actual issue identifier/UUID. Ensure exactly one match per source ID. Do not derive UUIDs or assume issue-number ordering.
8. **Apply structure.** Assign gate projects and phase milestones, parent/sub-issue relationships, predecessor blocking relations and real human owners/reviewers from the manifest. Resolve each actual entity ID from the destination. A parent issue waits for its children to be accepted; children do not wait for their own parent to close.
9. **Verify.** Check 165 unique SP references, 91 parent links and 642 dependency edges against the manifest. Count 42 acceptance containers separately from 123 leaves. Confirm every relationship points the right way. None of these imports should mark work Done or dispatch an agent. The separate activity graph has 390 records and must not be imported as duplicate source tasks.
10. **Publish the operating guidance internally.** Attach the master/human/agent/traceability documents to the relevant project and replace package-local references with actual project-document/repository URLs where needed. Configure team guidance and delegated integrations only with authorized access and a successful SP-013 trial.

Dependency text in a description does not create a blocking relation. Native issue relations can represent blocked/blocking relationships, but they do not themselves enforce runtime safety. [Linear issue relations](https://linear.app/docs/issue-relations).

## 5. Second-pass manifest mapping

| Manifest field | Apply to Linear |
|---|---|
| `id` | Preserve source reference and map to actual issue ID |
| `gate` | Actual gate project |
| `phase` | Phase milestone within that project and phase label |
| `parent_id` | Actual parent issue, if one exists |
| `dependencies` | Each listed predecessor blocks this issue |
| `owner_role` | Map to a named human after acceptance of responsibility |
| `agent_role` | Suggested delegate only; not a created/installed agent account |
| `reviewer_role` | Named reviewer recorded in the template or supported fields |
| `dispatchable` | Eligibility hint for a leaf; still requires Ready and a complete run contract |
| `run_contract` | Fill actual target, permission, reviewer, duration and spend before execution |
| `feature_ids`, `screen_ids`, `security_ids`, `review_ids` | Traceability metadata; keep in description/document if native fields are unavailable |

Where authorized tooling supports it, an agent can perform this second pass through the available connector or current GraphQL API. It must first read the destination schema/entities, resolve real IDs, compare existing state and propose a bounded mutation batch. Persist returned mappings and check per-field/per-item errors; an HTTP success alone does not prove a GraphQL mutation fully succeeded. [Linear API and error handling](https://linear.app/developers/graphql).

For repeat imports or updates, use the retained mapping and inspect current state. Do not assume repeated CSV import updates existing issues. Do not delete the existing board or a prior import wholesale to resolve a small mismatch. Quarantine only demonstrable duplicates created by this specific operation after appropriate scope is established.

## 6. Agent dispatch after setup

Installing a supported agent integration is a separate administrative action. Keep the human assignee accountable and delegate one Ready leaf at a time using the actual supported integration. Team/workspace guidance can carry project rules, but enforcement depends on that integration. [Agents in Linear](https://linear.app/docs/agents-in-linear).

Create useful views: **Human decisions**, **Ready agent work**, **Review queue**, **Blocked**, **Gate evidence**, **Content approval**, and **Dated operations**. Filter out work-package parents when computing leaf throughput. Do not use a milestone percentage or an agent's self-report as release approval.

The initial planning batch is SP-001 and SP-003; SP-075 follows SP-001, then SP-004 can close. Once the relevant contracts and commissioning are in place, P02/P03 establish actual controlled execution. Nothing in these files starts unattended development.
