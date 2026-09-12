# ACT-SP-002-01 — Tracker configuration draft

| Field | Recorded value |
|---|---|
| Artifact version | 0.1 |
| Prepared | 12 September 2026 |
| Activity | `ACT-SP-002-01` — Draft tracker configuration |
| Source issue | `SP-002` |
| Phase / gate | P02 / G0 |
| Run identity | `RUN-ACT-SP-002-01-20260912-01`; Codex delivery agent; attempt 1 of 2 |
| Accountable owner / reviewer | Syed Ahmed, Delivery owner; role-consolidated review is not independent review |
| Repository/base | `https://github.com/sumarahmed/SoccerAPP.git`; `main`; `dc0f90d21998584fb6b17ccc52a4e86189315248` |
| Approved path | `docs/delivery/ACT-SP-002-01-tracker-configuration.md` |
| Data/environment | Repository planning data only; local Windows checkout; no live tracker data, credentials, personal data or production data |
| Authority | Syed Ahmed's 12 September 2026 instruction to proceed and commit `ACT-SP-002-01` |
| External effects | Local documentation edit and commit only; no push, workspace mutation, import, invitation, integration installation or agent dispatch |
| Spend/time | AUD 0 incremental; attempt 1; 90-minute checkpoint; exact elapsed time reported at handoff if available |
| Recovery | Preserve as an isolated commit; revise by patch or revert that commit without resetting unrelated work |
| Status | Review-ready draft for `ACT-SP-002-02`; no live tracker configuration has been applied |

This artifact converts the existing Linear setup guidance and structured manifests into one reviewable destination configuration. It deliberately stops before `ACT-SP-002-02`, which owns live workspace inspection, permission verification, import and relationship application.

## 1. Proposed destination and authority boundary

| Item | Proposed configuration | Must be resolved before live mutation |
|---|---|---|
| Service | Linear | Confirm the actual workspace and current service behavior/plan |
| Workspace | Existing owner-selected workspace | Record workspace name and immutable ID; do not infer it from a similar name |
| Team | One team named `SoccerTrainingApp` | Syed Ahmed confirms the final name, key and immutable team ID |
| Team key | Proposed `SOC` | Confirm availability; a different live key does not change `SP-nnn` source IDs |
| Workspace administrator | Syed Ahmed | Resolve the actual member/account ID and verify administrator permissions |
| Additional members | None assumed | Never create, invite or assign a fictional/placeholder user |
| Agent integration | None for this activity | Installation/delegation is separately authorized only after SP-013 evidence |
| Import route | Recommended: three-record smoke CSV, then the 162-record remaining CSV | Confirm this route immediately before import; never also import the 165-record full CSV |
| Live mutation owner | `ACT-SP-002-02` under a new exact run contract | Confirm backup/export, IDs, permissions, cleanup and retry behavior |

The repository URL, documentation artifacts and source manifests are known. The live workspace, team, member, project, milestone, workflow-state and label IDs are intentionally unresolved here and represented only by explicit mapping fields.

## 2. One-team structure — AC-SP-002-01

Create or select exactly one initial team:

| Field | Value |
|---|---|
| Display name | `SoccerTrainingApp` |
| Proposed key | `SOC` |
| Purpose | Own all 165 SP source issues across G0–G6 while the organization is one person |
| Source identifier rule | Preserve `[SP-nnn]` in every title and `SP-nnn` in the mapping table; never replace it with the Linear issue number |
| Membership | Syed Ahmed after actual account/permission verification; no automatic invitations |
| Scope rule | Do not create separate teams for phases, workstreams, agents or gate projects during the initial configuration |

If an existing team is selected instead, `ACT-SP-002-02` must record its exact ID, current workflow and conflicts before changing it. The one-team acceptance criterion concerns the operating model, not a requirement to create a duplicate team.

## 3. Gate projects and phase milestones — AC-SP-002-02

| Gate project | Purpose | Phase milestones |
|---|---|---|
| G0 — Definition and delivery setup | Scope, ownership and budgets | P00 |
| G1 — Content, experience and security contracts | Reviewed requirements and designs | P01 |
| G2 — Technical feasibility | Workspace, controlled agent trial and feasibility decision | P02, P03 |
| G3 — Pilot implementation and verification | Integrated product and readiness | P04, P05, P06, P07, P08 |
| G4 — Family and club pilot | Research, corrections and economics | P09 |
| G5 — Commercial release | Live catalog, operations and release | P10 |
| G6 — Operation and expansion | Dated maintenance and justified future scope | P11 |

Configuration rules:

- Use seven projects, not twelve phase projects. Phases are milestones inside the relevant gate project and also remain labels.
- An optional initiative may group G0–G6 if the actual plan supports it; initiative progress is navigation only.
- Milestone/project percentages never substitute for a dated human gate decision.
- Preserve `gate-G0`–`gate-G6` and `phase-P00`–`phase-P11` labels even when native milestones exist.
- Record every live project and milestone ID in the mapping register before applying issue relationships.

## 4. Workflow — AC-SP-002-04

| Status | Intended category | Entry rule | Exit authority |
|---|---|---|---|
| Backlog | Backlog | Requirement exists; unresolved inputs allowed | Delivery owner refines, readies or cancels |
| Ready | Unstarted | Exact run contract complete and predecessors accepted | Accountable owner or authorized coordinator |
| In Progress | Started | Bounded run claimed with target, executor and budget | Assigned executor submits Review or records Blocked |
| Review | Started | Reviewable artifact and current evidence attached | Designated reviewer accepts, revises or strengthens routing |
| Validation | Started | Review passed; integration/device/operational acceptance pending | QA, specialist or acceptance owner |
| Done | Completed | Current applicable evidence and required human decisions accepted | Authorized acceptance owner only |
| Blocked | Canceled or custom unstarted/started category selected by owner | Exact blocker, owner and next action recorded | Named blocker owner or accountable owner |
| Cancelled | Canceled | Explicit cancellation with history/evidence preserved | Accountable owner |

Before configuration, compare these names with the destination's available categories. Do not map imported Backlog items to an active state. If Linear cannot represent Blocked without conflating it with Cancelled, retain a Backlog/In Progress workflow state plus a `status-blocked` label and documented saved view; do not lose the distinction.

All imported source issues begin Backlog. Accepted repository decisions are applied only in the verified second pass, with the exact decision artifact linked; no import preview alone marks an issue Done.

## 5. Labels and priorities

Create or map these plain-name label families:

- phases: `phase-P00` through `phase-P11`;
- gates: `gate-G0` through `gate-G6`;
- areas: `area-mobile`, `area-web`, `area-identity`, `area-media`, `area-billing`, `area-operations`, `area-content`, `area-quality`, `area-security`, `area-design`, `area-backend`, `area-research`, `area-business`, `area-delivery`, `area-release`;
- execution: `mode-human`, `mode-agent`, `mode-hybrid`;
- risk: `risk-high`, `risk-standard`;
- kind: `kind-work-package`, `kind-task`, `kind-human-action`, `kind-gate`; and
- required class: `required-p0`, `required-p1`, `required-p2`.

Initial priority mapping is P0 → High, P1 → Medium and P2 → Low. Priority expresses gate prerequisite class, not urgency or authority, and never bypasses a predecessor or review gate.

## 6. Owner and reviewer mapping — AC-SP-002-05

| Planning field | Live handling |
|---|---|
| `owner_role` | Preserve in description/mapping. After Syed Ahmed's member ID is verified, map primary accountable roles to him under SP-075 version 1.0 |
| `reviewer_role` | Preserve exactly. Map to an actual member only after that person accepts the role |
| Vacant independent/specialist reviewer | Leave unassigned and keep the affected review/acceptance Blocked; never assign Syed or an agent and call it independent |
| `agent_role` | Suggested delegate metadata only; never create a user or imply an integration is installed |
| CSV Assignee/Creator | Blank during import; confirm preview remains unassigned |
| Human action/gate issue | Named human remains accountable; never delegate the decision as autonomous agent work |

No placeholder email addresses, duplicate member accounts or fictional reviewers are allowed. A role label is not an identity or permission grant.

## 7. Issue template — AC-SP-002-03

Use this content when creating or materially revising a live source issue:

```text
[SP-nnn] <source title>

Source ID: SP-nnn
Source version: <manifest/package version and repository commit>
Gate / phase: <G0–G6> / <P00–P11>
Kind / execution / risk: <values>
Parent: <SP source ID and resolved live link, or None>
Predecessors: <SP source IDs and resolved blocking links, or None>

Outcome:
<one source outcome>

Acceptance criteria:
- [ ] <AC-SP-nnn-nn — exact criterion>

Human decisions:
<named owner decisions; never delegated as autonomous approval>

Activities:
<linked ACT IDs/goals; do not duplicate as live issues until hierarchy is explicitly approved>

Owner / reviewer:
<role plus actual mapped identity or Vacant>

Run readiness:
<exact repository, base, environment, approved files, fixtures/data, tools/network,
external effects, validation, recovery, time/attempt/spend and stop rules>

Evidence:
<exact commit/artifact/build/config/device/provider versions and links>

Status / blocker / next action:
<current operational state, accountable owner and dated decision>
```

The imported Markdown description remains the initial full source card. This template defines the minimum operating fields for later updates; it does not authorize mass rewriting during import.

## 8. Source-to-live-ID mapping template

Maintain one row per SP source issue in a versioned/exportable mapping. Never infer IDs from ordering.

| Column | Required value |
|---|---|
| `source_id` | Stable `SP-nnn`; unique and immutable |
| `source_title` | Exact source title used to locate/verify the issue |
| `source_manifest_version` | Package/repository version used for import |
| `import_route` / `batch` | `smoke` or `remaining`, plus dated batch identity |
| `live_issue_identifier` | Human-readable Linear key, recorded from the created/found issue |
| `live_issue_uuid` | Immutable Linear issue ID returned/resolved from the destination |
| `live_issue_url` | Verified live issue URL |
| `team_id` | Resolved immutable one-team ID |
| `project_id` | Resolved G0–G6 project ID |
| `milestone_id` | Resolved P00–P11 milestone ID |
| `parent_source_id` / `parent_live_uuid` | Both source and resolved parent identities, or blank |
| `predecessor_source_ids` / `predecessor_live_uuids` | Ordered source list and resolved live IDs |
| `owner_role` / `owner_member_id` | Planned role and verified actual identity, or explicit `Vacant` |
| `reviewer_role` / `reviewer_member_id` | Planned role and verified actual identity, or explicit `Vacant` |
| `workflow_status_id` | Actual destination status ID after verification |
| `decision_evidence_url` | Dated accepted decision when applicable; blank otherwise |
| `imported_at` / `verified_at` / `verified_by` | Actual timestamps and named verifier |
| `result` | Created, matched-existing, failed, quarantined-duplicate or not-attempted |
| `notes` | Preview warnings, errors, reconciliation or follow-up |

Initial smoke rows to prepare, without inventing live values:

| source_id | source_title | batch | expected predecessor | current accepted evidence | live identifiers |
|---|---|---|---|---|---|
| SP-001 | Fix launch assumptions and account behaviour | smoke-01 | None | `docs/decisions/SP-001-launch-and-account-assumptions.md` | Unresolved until ACT-SP-002-02 |
| SP-003 | Set agent scope and evidence policy | smoke-01 | None | `docs/decisions/SP-003-agent-scope-and-evidence-policy.md` | Unresolved until ACT-SP-002-02 |
| SP-075 | Name owners and fund discovery work | smoke-01 | SP-001 | `docs/decisions/SP-075-ownership-and-discovery-authority.md` | Unresolved until ACT-SP-002-02 |

## 9. Dependency and hierarchy application — AC-SP-002-06

The current manifest contains 165 source issues, 91 parent links and 642 predecessor dependency edges. Apply them only after every referenced source ID resolves to exactly one live UUID.

Rules:

1. `parent_id` becomes a parent/sub-issue relation; it does not make a child wait for its own parent.
2. Each manifest `dependencies` entry is a predecessor that blocks the current issue; verify direction from predecessor to dependent.
3. A work-package/container waits for all children and its original integration acceptance.
4. Dependency text in a description is not a native blocking relation and is checked separately.
5. Apply relationships in bounded, logged batches and record per-item success/error.
6. On an uncertain result, inspect the live issue before retrying; never create a second issue/relation merely because a request timed out.
7. Compare the final live edge list to the manifest counts and source pairs, not only totals.

The 390 ACT activities are planning/execution breakdown records. They are not a second import route and must not be imported as duplicate SP source tasks. An ACT live hierarchy requires a later explicit decision.

## 10. One source of operational progress — AC-SP-002-07

| Information | Authoritative source | Derived/reference surfaces |
|---|---|---|
| Requirements, acceptance wording, manifests and historical package | Git repository canonical package and versioned documentation | Linear descriptions link the exact repository version |
| Dated human decisions and evidence artifacts | Git repository `docs/decisions/**` and `docs/delivery/**` | Activity map and Linear evidence links are derived/reference views |
| Live workflow status, assignee, blocker, scheduling and live relationships after import | Linear, keyed by the retained source-to-live-ID map | Reports may read Linear but do not maintain a second editable status |
| Public activity visualization | Generated from repository manifests and accepted decision records | Read-only progress display; never manually edited as a competing status store |

Before a live import exists, repository decision artifacts remain the only accepted progress evidence. Once Linear is configured, an accepted decision artifact is linked into the live issue and the live status is updated once; do not independently maintain status in spreadsheets, duplicate boards, both CSV routes or a separate ACT import.

## 11. Import route and duplicate prevention

Use the safer smoke-first route:

1. Record destination IDs, permission results and a backup/export reference.
2. Compare the prepared CSV header with a fresh destination export/import template.
3. Import `soccer_linear_smoke.csv` once for SP-001, SP-003 and SP-075.
4. Reconcile exactly three unique source IDs and populate their live mapping rows.
5. Verify formatting, blank assignees, Backlog mapping and the SP-075 → SP-001 predecessor description before native relationship application.
6. Only after an accepted smoke result, import `soccer_linear_remaining.csv` once.
7. Never import `soccer_linear_import.csv` in the same destination after using smoke plus remaining; it contains all 165 records and would risk duplicates.
8. Before every retry or later update, query the retained source/live mapping and exact `[SP-nnn]` title. Repeated CSV import is not an upsert.

Quarantine only a duplicate demonstrably created by the authorized operation. Do not delete an existing board or bulk records to correct a small mismatch.

## 12. Permission and sample-issue verification plan — AC-SP-002-08

`ACT-SP-002-02` must perform and record these checks before the full import:

### Permission checks

- identify the workspace, team and Syed Ahmed member IDs;
- confirm the executor can read existing teams, projects, workflow states, labels and issues;
- confirm only the authorized administrator can create/map the team, projects, milestones, statuses, labels and import;
- confirm ordinary/agent identities cannot invite members, change workspace security, install integrations, alter protected settings or self-approve human gates;
- record service-plan limitations without upgrading or accepting charges; and
- use no credential in repository files, issue descriptions, screenshots or evidence output.

### Sample issue: SP-001

Verify one smoke-imported SP-001 issue end to end:

- exactly one `[SP-001]` title exists and maps to one immutable live UUID;
- team, G0 project, P00 milestone, labels, priority and full Markdown description match the source manifest;
- assignee is blank after import, then maps only to Syed Ahmed's verified member ID in the authorized second pass;
- it has no predecessor and its parent handling matches the manifest;
- the accepted SP-001 version 1.0 decision link is attached before moving the live source issue to Done;
- no agent is dispatched, no invitation is sent and no sibling source issue is modified by the sample check; and
- read-back through the normal member view confirms the same status, links and relationships.

Record screenshots only if they contain no secrets or unrelated private workspace data. Prefer IDs, redacted structured exports and explicit field comparisons.

## 13. Required saved views

Create after the live fields exist:

- Human decisions
- Ready agent work
- Review queue
- Blocked
- Gate evidence
- Content approval
- Dated operations

Filter work-package parents out of leaf-throughput reporting. No saved view, project percentage or agent self-report is acceptance evidence.

## 14. Unresolved inputs for ACT-SP-002-02

- exact Linear workspace name/ID and confirmation that it is the intended destination;
- existing team/project/issue inventory and whether any prior import occurred;
- final team name/key and immutable team ID;
- Syed Ahmed's actual member ID and verified administrator permissions;
- available service-plan features and any limitation affecting milestones, initiatives, statuses or permissions;
- actual project, milestone, status and label IDs;
- fresh destination CSV/import template and field-preview behavior;
- backup/export reference, approved mutation batch, cleanup route and retry owner;
- confirmation of smoke-first versus full import immediately before execution; this draft recommends smoke-first; and
- separate authority for live mutations, file upload/import and any integration installation.

Until these are resolved, `ACT-SP-002-02` is not Ready and no live tracker action is authorized.

## 15. ACT-SP-002-01 completion and handoff

- [x] `AC-SP-002-01` — one-team configuration is proposed without creating a duplicate team.
- [x] `AC-SP-002-02` — seven gate projects and twelve phase milestones are mapped.
- [x] `AC-SP-002-03` — a complete issue template is supplied.
- [x] `AC-SP-002-04` — workflow states, categories, entry rules and authorities are defined.
- [x] `AC-SP-002-05` — accountable, reviewer, vacant-specialist and agent-role mapping is defined.
- [x] `AC-SP-002-06` — parent/dependency semantics and verification counts are explicit.
- [x] `AC-SP-002-07` — repository, Linear and generated-view authority boundaries prevent duplicate progress stores.
- [x] `AC-SP-002-08` — permission checks and the SP-001 sample-issue plan are defined without claiming execution.
- [x] The board configuration and source-to-live-ID mapping template are attached in this artifact.
- [x] Unresolved live destination inputs and mutation authority are explicit.

Handoff status: Review-ready for Syed Ahmed as Delivery owner. If accepted, `ACT-SP-002-02` may prepare a separate exact run contract for read-only workspace inspection followed by a bounded smoke import only after the remaining destination, permission, backup and mutation fields are approved. `SP-002` and its acceptance criteria remain pending live application and `ACT-SP-002-03` verification.
