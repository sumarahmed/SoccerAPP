# ACT-SP-002-02 — Tracker application and inspection run contract

| Field | Recorded value |
|---|---|
| Artifact version | 1.0 |
| Prepared | 12 September 2026 |
| Activity | `ACT-SP-002-02` — Apply and inspect authorized tracker configuration |
| Source issue | `SP-002` |
| Phase / gate | P02 / G0 |
| Preparation run | `PREP-ACT-SP-002-02-20260912-01`; Codex delivery agent; attempt 1 |
| Accountable owner / reviewer | Syed Ahmed, Delivery owner; role-consolidated review is not independent review |
| Repository/base | `https://github.com/sumarahmed/SoccerAPP.git`; `main`; `224dbc545aa10f210ac7c6d08cf2968dcba9cfb1` |
| Approved preparation path | `docs/delivery/ACT-SP-002-02-tracker-application-run-contract.md` |
| Preparation authority | Syed Ahmed's 12 September 2026 instruction to prepare the next activity for review |
| Preparation external effects | Repository documentation edit only; no commit, push, Linear access, upload, import, configuration change, invitation or integration installation |
| Spend/time | AUD 0 incremental; preparation attempt 1; 90-minute checkpoint |
| Status | Stages A-C and the authorized completion pass executed on 12-13 September 2026; accepted result recorded by `ACT-SP-002-03` and the SP-002 decision |

This artifact originally prepared the bounded run for `ACT-SP-002-02`. Syed Ahmed subsequently authorized Stage A read-only inspection, Stage B's three-record smoke mutation and Stage C's remaining 162-record import as separate decisions. The executed result is summarized in section 13 and verified in `ACT-SP-002-03`; private workspace identifiers remain outside the public repository.

## 1. Predecessor and source identity

| Input | Exact version | Use in this activity |
|---|---|---|
| [ACT-SP-002-01 tracker configuration](ACT-SP-002-01-tracker-configuration.md) | Commit `224dbc545aa10f210ac7c6d08cf2968dcba9cfb1`; SHA-256 `A0DA849436914D6F08B07657865FBF6AA22E8E9C2B19583A83654B65F903AB2F` | Proposed one-team configuration, workflow, issue template, ownership, ID map, duplicate controls and verification plan |
| [ACT-SP-003-01 run-contract policy](ACT-SP-003-01-agent-run-contract-policy.md) | Accepted SP-003 policy in repository `main` | Authority, data, external-effect, retry, recovery and handoff rules |
| [ACT-SP-003-02 evidence routing](ACT-SP-003-02-evidence-and-review-routing.md) | Accepted SP-003 review policy in repository `main` | Current-version evidence, review status and failure routing |
| [P02 activity card](activities/P02.md#act-sp-002-02--apply-and-inspect-authorized-tracker-configuration) | Synchronized package `20260908` | Goal, predecessor, deliverable, completion checks and source acceptance IDs |

Syed Ahmed instructed that the predecessor be committed and made live immediately after its review. That is recorded here as approval to publish the exact predecessor version for use in this preparation. It is not acceptance of `SP-002`, evidence that Linear has been configured, or authority for a live mutation.

## 2. Proposed outcome and exclusions

### Outcome

Against one exact owner-confirmed Linear workspace:

1. inspect the existing workspace without mutation;
2. resolve immutable workspace, member, team and configuration IDs;
3. prove the destination is suitable and establish a recoverable baseline;
4. configure only the approved one-team/G0–G6/P00–P11/workflow/label surface;
5. import the three-record smoke CSV exactly once;
6. reconcile SP-001, SP-003 and SP-075 to unique live issue UUIDs;
7. verify permissions, field mapping, duplicate prevention and the SP-001 sample issue; and
8. only after a separate accepted smoke checkpoint, import and reconcile the remaining 162 source issues and apply verified relationships in bounded batches.

The activity deliverable is the actual import result, a complete source-to-live-ID map and a pairwise relationship comparison against the source manifest.

### Exclusions

- no second team, duplicate board or import of the 390 ACT activity records;
- no use of both the smoke-plus-remaining route and the 165-record full CSV route;
- no invitation, fictional identity, autonomous agent dispatch or integration installation;
- no paid plan upgrade, metered overage or other incremental spend;
- no workspace-security, SSO, billing, repository-protection or production change;
- no real player, child, customer, private-media, credential or production data;
- no deletion or bulk rewrite of pre-existing workspace records;
- no declaration that `SP-002` is Done; acceptance remains with Syed Ahmed after `ACT-SP-002-03` evidence; and
- no commit, push or public disclosure of private Linear identifiers unless separately approved and suitably redacted.

## 3. Immutable repository inputs

| Input | Rows | SHA-256 | Authorized use |
|---|---:|---|---|
| [`soccer_linear_smoke.csv`](../../packages/soccer_agent_activity_package_20260908/docs/soccer_linear_smoke.csv) | 3 | `46110D572EC8866F294959AA9D22C03BEB6E4B5E75766045854AB6B7FEA0E5E4` | First and only import file at the smoke gate |
| [`soccer_linear_remaining.csv`](../../packages/soccer_agent_activity_package_20260908/docs/soccer_linear_remaining.csv) | 162 | `DBC5599D763C5480CC28C5B19402095E2CCF0BCA35A820D873C804E430B09D7B` | Later expansion gate only after accepted smoke evidence |
| [`soccer_linear_import.csv`](../../packages/soccer_agent_activity_package_20260908/docs/soccer_linear_import.csv) | 165 | `5F2D3F88E3D6F73E36DFE2253643EF5276E76BEC1E83F7E4A96BB86215301CF5` | Prohibited in this proposed smoke-plus-remaining route; retained only for parity comparison |
| [`soccer_linear_manifest.json`](../../packages/soccer_agent_activity_package_20260908/docs/soccer_linear_manifest.json) | 165 source records | `621558A326F5A1E7BBD1DA70742FF1DA7D8AEF5E89FF7427C5C1F438031F45C6` | Expected fields, 91 parent links and 642 predecessor dependency edges |

Immediately before execution, rerun repository validation and confirm these hashes. A changed file, commit, row count or header invalidates this proposal until reviewed again.

## 4. Activation gates requiring owner review

No live Linear access or mutation is Ready until the applicable gate has an exact recorded answer.

| Gate | Owner must record | Safe state while unresolved |
|---|---|---|
| G-002-02-01 — predecessor | Acceptance of the exact `ACT-SP-002-01` version identified above for operational use | Preparation only |
| G-002-02-02 — destination | Exact Linear workspace URL, human-readable name and immutable workspace ID; confirmation that it is the intended destination | Do not open or query a similar workspace by inference |
| G-002-02-03 — identity | Syed Ahmed's verified Linear member ID and administrator capability; exact executor identity/session | No login request, secret handling or mutation |
| G-002-02-04 — read authority | Permission to inspect existing teams, projects, milestones, statuses, labels, issues, members and plan capabilities | Repository-only inspection |
| G-002-02-05 — baseline/recovery | Dated export/backup reference, export custodian/location, pre-existing inventory, collision report and cleanup/retry owner | No mutation |
| G-002-02-06 — destination design | Final team name/key; handling if the intended team already exists; approved projects, milestones, statuses and labels | Do not create or rename live objects |
| G-002-02-07 — smoke authority | Explicit authority to configure the approved surface, upload the exact three-row file and create at most three source issues | No file upload or live write |
| G-002-02-08 — capture boundary | Approved private evidence location and redaction rule for workspace/member/issue IDs and screenshots | Keep live identifiers out of the public repository |
| G-002-02-09 — expansion authority | Owner acceptance of the exact smoke evidence and separate authority to upload the exact 162-row file | Stop after smoke verification |
| G-002-02-10 — relationship authority | Approved mechanism and bounded batch size for applying parent/dependency relations; exact API/browser/tool rights if required | Compare expected relations only; do not mutate them |

Approval of this version authorizes neither read access nor mutation by itself. Each external effect remains limited to the gate that names it.

## 5. Proposed executable run contract

The following values are fixed for review. Items marked **BLOCKED** must be replaced with exact values in a dated activation record before execution.

```yaml
run_id: RUN-ACT-SP-002-02-[activation-date]-01
activity_id: ACT-SP-002-02
source_issue: SP-002
attempt: 1
executor: Codex delivery agent using the owner-authenticated bounded session
accountable_owner: Syed Ahmed
reviewer: Syed Ahmed
independent_review_required: false for this delivery configuration; role-consolidated review must be disclosed
outcome: inspect one named Linear workspace, apply the approved configuration, perform a three-record smoke import, reconcile it, then stop for review
acceptance_ids:
  - AC-SP-002-01
  - AC-SP-002-02
  - AC-SP-002-03
  - AC-SP-002-04
  - AC-SP-002-05
  - AC-SP-002-06
  - AC-SP-002-07
  - AC-SP-002-08
repository_url: https://github.com/sumarahmed/SoccerAPP.git
checkout: C:\Users\Home\Documents\SoccerApp\SoccerAPP-repo
base_branch: main
base_commit: 224dbc545aa10f210ac7c6d08cf2968dcba9cfb1
environment: exact Linear workspace URL and immutable ID — BLOCKED by G-002-02-02
approved_repository_paths:
  - docs/delivery/ACT-SP-002-02-tracker-application-run-contract.md
  - a new private/redacted result artifact path approved at activation
approved_live_scope: one exact workspace and one exact team — BLOCKED by G-002-02-02 and G-002-02-06
contracts:
  - ACT-SP-002-01 version 0.1 at the commit and SHA-256 recorded in section 1
  - accepted SP-003 run and review policy
data_class: repository planning data plus minimum necessary private workspace metadata; no child/customer/media/production data
fixtures:
  - soccer_linear_smoke.csv at the exact SHA-256 in section 3
allowed_tools:
  - existing local Git and Node.js for read-only validation
  - owner-authenticated Linear browser/API route — BLOCKED until exact route and rights are approved
allowed_network_destinations:
  - github.com and sumarahmed.github.io for read-only evidence
  - exact Linear workspace origin — BLOCKED by G-002-02-02
dependency_install_authority: false
external_effects:
  - read-only workspace inspection — BLOCKED by G-002-02-04
  - approved configuration writes and one three-row upload/import — BLOCKED by G-002-02-07
validation:
  - repository documentation validator at the current commit
  - destination inventory and exact-title/source-ID collision check
  - preview field comparison before import confirmation
  - exactly three unique created-or-reconciled source IDs after smoke
  - SP-001 end-to-end field, permission and read-back check
  - zero unintended invitations, integrations, duplicate records or unrelated changes
checkpoint_minutes: 90
max_attempts: 2
currency: AUD
max_incremental_spend: 0
secrets: use the existing owner-authenticated session only; never reveal or store credential values
recovery: preserve the pre-run export and inventory; stop on uncertainty; quarantine only a demonstrably run-created duplicate; owner approves any deletion
stop_conditions:
  - wrong or ambiguous workspace/team/member identity
  - predecessor/input/hash/header mismatch
  - existing exact or likely duplicate source record not safely reconcilable
  - preview changes titles, descriptions, statuses, assignments or counts unexpectedly
  - insufficient permission or any request for broader admin/integration rights
  - plan upgrade, charge or overage risk
  - secret, personal, child, customer, private-media or production data exposure
  - uncertain mutation response, unexpected bulk effect, or inability to export/recover
  - three records are not uniquely reconciled
  - time or attempt ceiling reached
handoff_owner: Syed Ahmed
```

## 6. Stage A — read-only destination inspection

After gates G-002-02-01 through G-002-02-04 are satisfied:

1. Confirm the browser/account is inside the exact approved workspace before reading any object.
2. Record the workspace ID, Syed Ahmed member ID, plan/feature limits and observed permission level without recording credentials.
3. Inventory existing teams, projects, milestones/cycles, workflow states, labels and issues relevant to the proposed names.
4. Search exact titles and source tokens for all 165 `SP-nnn` records; distinguish exact matches, likely prior imports and unrelated collisions.
5. Compare the destination's current CSV template/preview capabilities with the repository CSV header. Do not upload at this stage.
6. Produce a redacted inspection result with collision counts, proposed reuse/create decisions and limitations.
7. Stop for owner review if any prior import, similarly named team or incompatible plan behavior exists.

Read-only inspection does not authorize creation, renaming, upload, import or permission changes.

## 7. Stage B — configuration and three-record smoke import

After the inspection is accepted and gates G-002-02-05 through G-002-02-08 are satisfied:

1. Record the pre-run export/backup and final live-object plan.
2. Reuse compatible existing objects where the owner approved reuse; create only missing objects inside the exact live scope.
3. Configure the one team, seven G0–G6 projects, twelve P00–P11 milestones, approved workflow states and labels.
4. Preview the exact smoke CSV and compare row count, titles, description formatting, Backlog status, blank assignees, priorities and project mapping.
5. Abort before confirmation on any unexpected transformation or collision.
6. Import the exact three-row smoke CSV once.
7. Read back the result and map each source ID to exactly one immutable live UUID and URL.
8. Apply only the separately approved smoke relationships, then verify direction and count pair-by-pair.
9. Run the SP-001 sample and permission checks from the predecessor artifact.
10. Stop for review. Do not upload the remaining or full CSV during this stage.

### Smoke pass thresholds

| Check | Required result |
|---|---|
| Imported/reconciled source IDs | Exactly `SP-001`, `SP-003` and `SP-075` |
| Uniqueness | One live UUID per source ID; no duplicate title/source token |
| Assignees | Blank after import; any later assignment uses only the verified member ID |
| Initial workflow | Backlog until accepted decision evidence is deliberately linked and reviewed |
| SP-075 predecessor | `SP-001` is the predecessor; direction verified after native relation application |
| SP-001 predecessor | None |
| Unexpected changes | Zero invitations, integrations, security changes or unrelated issue changes |
| Incremental spend | AUD 0 |

Any failed threshold blocks expansion. A partial or uncertain response is inspected before retry; the same CSV is never blindly re-imported.

## 8. Stage C — remaining import and relationship comparison

This stage requires G-002-02-09 and G-002-02-10 after Syed Ahmed accepts the exact smoke evidence.

1. Reconfirm current workspace/team IDs, current input hashes and absence of duplicates for the remaining source IDs.
2. Preview and import only the exact 162-row remaining CSV once.
3. Reconcile all records so the final map contains exactly 165 unique source IDs and 165 unique live UUIDs unless an owner-approved matched-existing result is documented.
4. Resolve every parent and predecessor source ID to a live UUID before applying relationships.
5. Apply relationships in the approved bounded batches, recording request/result identities and inspecting uncertain results before retry.
6. Compare every expected pair, direction and relation type against the manifest.
7. Record totals only as a secondary check: 91 parent links and 642 predecessor edges are expected from the current manifest.
8. Create the approved saved views without turning them into a second editable progress source.
9. Export/read back the resulting configuration and submit the result artifact to `ACT-SP-002-03`.

The full 165-row CSV remains prohibited throughout this route.

## 9. Evidence and result artifact

The execution result must record:

- activation record, run/attempt identity, actual start/end time and exact owner approvals;
- repository commit plus hashes of every imported input;
- exact workspace/team identities in an owner-approved private location, with public evidence redacted;
- executor identity and observed permissions without credential material;
- pre-existing inventory, collision queries and backup/export reference;
- configuration objects reused/created/changed, including immutable IDs;
- import preview, actual row-level result and any warning/error;
- one source-to-live-ID row for each attempted source issue;
- expected versus actual parent/dependency pairs, direction and discrepancies;
- SP-001 sample results and permission-positive/negative checks;
- duplicates, quarantines, skipped checks, plan limitations and unsupported claims;
- cleanup/recovery actions actually performed or still owned by Syed Ahmed;
- incremental spend, attempt count and whether a stop ceiling was reached; and
- exact handoff question for `ACT-SP-002-03`.

Screenshots are optional and must exclude unrelated private workspace content. Prefer redacted structured values and counts. A public repository artifact must not contain private workspace URLs, member IDs or secrets unless the owner explicitly determines they are safe to publish.

## 10. Recovery and failure routing

| Event | Required response | Owner decision before continuation |
|---|---|---|
| Similar team or prior import found | Stop mutation; map exact matches and collisions | Reuse, isolate, clean up or choose another destination |
| CSV preview mismatch | Cancel before confirmation and preserve the preview discrepancy | Approve a regenerated/versioned input or alternate mapping |
| Import response is uncertain | Inspect live state by source token and immutable IDs; do not repeat upload | Reconcile safely or approve a specific cleanup/retry |
| Run-created duplicate | Mark it quarantined; do not delete automatically | Approve exact duplicate cleanup target |
| Unexpected existing record affected | Stop, preserve before/after facts and avoid further writes | Approve recovery or forward fix |
| Permission denial | Stop; do not broaden rights or install an integration | Owner changes the run or performs the human action |
| Plan/charge prompt | Stop before accepting | New dated spend decision; current cap is AUD 0 |
| Secret/private-data exposure | Stop capture, avoid reproducing the value and notify Syed Ahmed | Safe redaction/revocation/rotation route |
| Relationship count/pair mismatch | Stop expansion/acceptance; preserve pairwise diff | Correct the smallest approved batch or accept a documented limitation |

No destructive cleanup is pre-authorized. Preserve unrelated and pre-existing records. If recovery cannot distinguish an operation-created item from an existing item, leave it untouched and escalate.

## 11. Review decisions requested

Syed Ahmed is asked to review this proposal and record:

- [ ] acceptance or revision of the exact predecessor/configuration version;
- [ ] exact Linear workspace URL/name/immutable ID;
- [ ] permission for Stage A read-only inspection;
- [ ] final team name/key and reuse-versus-create rule;
- [ ] private evidence location and redaction boundary;
- [ ] backup/export, cleanup and retry owner;
- [ ] approval or revision of the smoke-first route;
- [ ] whether browser-only operation is required or a specific existing API/connector is authorized;
- [ ] Stage B mutation/upload authority after reviewing Stage A; and
- [ ] acknowledgement that Stage C requires a later separate decision after smoke evidence.

## 12. Preparation completion and handoff

- [x] Exact repository, base commit, predecessor and input hashes are recorded.
- [x] Outcome, exclusions, acceptance IDs, data class and AUD 0 boundary are explicit.
- [x] Read-only inspection, smoke mutation and expansion are separate authorization gates.
- [x] Duplicate prevention, uncertain-mutation handling and non-destructive recovery are defined.
- [x] Permission, SP-001 sample, mapping and pairwise relationship evidence are specified.
- [x] Missing destination/identity/authority fields remain visibly blocked rather than invented.
- [x] Stage A was separately authorized and completed.
- [x] Stage B smoke import was separately authorized and completed.
- [x] Stage C remaining import and relationship reconciliation were separately authorized and completed.

Handoff status: Execution completed and submitted to `ACT-SP-002-03`. This status records the authorized run, not acceptance of every SP-002 criterion.

## 13. Executed result and retained limits

| Result | Recorded outcome |
|---|---|
| Import route | Three-row smoke file followed by the 162-row remaining file; the 165-row full file was not imported |
| Source reconciliation | 165 unique source issues mapped to 165 live issues |
| Project placement | All 165 issues assigned across the seven G0-G6 projects |
| Parent relationships | 91 expected and verified |
| Dependency relationships | 642 expected and verified; zero missing, unexpected or duplicate edges |
| Field comparison | Zero field problems reported by the final reconciler for the checked source fields |
| Credentials | Temporary task-specific API credentials were revoked after use and the local clipboard was cleared |
| Spend | AUD 0 incremental |

The private owner-controlled evidence files are bound to this public summary by SHA-256 only:

- smoke result: `F0A01E9549FE09F2E0EC4CBFE3C91482448BBA73122CFAE6BD99873459363438`;
- Stage C result and complete private source-to-live map: `5A536D50FC88531FDA7BB35E0D8CFB008EC73439625E6D238946D9D7854A6501`.

The authorized completion pass resolved or dispositioned the retained findings:

- all twelve phase milestones exist within their owning gate projects; `phase-Pxx` labels are the accepted permanent phase representation where Linear forbids a cross-project native milestone, while same-project records may use the native milestone;
- all seven planned custom views were created and read back: Human decisions, Ready agent work, Review queue, Blocked, Gate evidence, Content approval and Dated operations;
- blocked work uses the existing `status-blocked` label and the Blocked view instead of being conflated with a canceled workflow state;
- SP-001 was assigned only to the verified owner, placed in P00, linked to its accepted decision, acceptance-checked and moved to Done; and
- the separate least-privilege negative-permission identity exercise is explicitly deferred to SP-012 before any additional human or agent identity receives write authority. No fictional/test member was invited in the one-member workspace.

No private workspace URL, member identifier, email address, issue UUID, issue URL or credential is included in this repository artifact.
