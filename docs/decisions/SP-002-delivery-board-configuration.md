# SP-002 — Delivery board configuration

| Field | Recorded value |
|---|---|
| Decision version | 1.0 |
| Decision date | 13 September 2026 |
| Source issue | SP-002 |
| Acceptance criterion | AC-SP-002-01 through AC-SP-002-08 |
| Outcome | Accepted |
| Accountable person | Syed Ahmed, Delivery owner |
| Review status | Owner acceptance recorded; role-consolidated review is not independent review |
| Repository base | `ef76a0bd4a5d03ae8977e6c4bb33034c4ac4e4bd` on `main` |

Syed Ahmed reviewed the staged Linear import evidence, accepted the SP-002 completion route, and authorized its execution, commit and publication. This decision accepts the configured delivery-board baseline and the explicit operating conventions below.

## 1. Accepted evidence

- [ACT-SP-002-01 tracker configuration](../delivery/ACT-SP-002-01-tracker-configuration.md) version 0.1.
- [ACT-SP-002-02 tracker application run](../delivery/ACT-SP-002-02-tracker-application-run-contract.md) version 1.0.
- [ACT-SP-002-03 acceptance evidence](../delivery/ACT-SP-002-03-acceptance-evidence.md) version 1.0.
- Private owner-controlled smoke and Stage C evidence, bound by the SHA-256 values in `ACT-SP-002-03` and intentionally excluded from Git.

## 2. Accepted board outcome

The accepted Linear operating baseline is:

1. one `SoccerTrainingApp` team owns all 165 SP source issues;
2. seven G0–G6 gate projects and twelve P00–P11 phase milestones organize delivery;
3. all 165 issues retain their `phase-Pxx` label, which is the permanent phase representation when Linear does not allow a cross-project native milestone;
4. Backlog, Ready, In Progress, Review, Validation, Done, Canceled and Duplicate are the native workflow states;
5. blocked work remains in its truthful workflow state and uses the existing `status-blocked` label plus the Blocked saved view;
6. the repository is authoritative for requirements, dated decisions and evidence, while Linear is authoritative for live workflow status, assignment, blockers and relationships; and
7. imported source issues remain unassigned unless a verified real member accepts the role. No fictional member, reviewer or agent identity may be created.

## 3. Accepted operational views

| View | Accepted filter |
|---|---|
| Human decisions | `mode-human` |
| Ready agent work | status `Ready` and `mode-agent` |
| Review queue | status `Review` |
| Blocked | `status-blocked` |
| Gate evidence | `kind-gate` |
| Content approval | `area-content` |
| Dated operations | `phase-P11` |

These are read-only projections of Linear issue fields, not separate progress stores and not acceptance evidence by themselves.

## 4. Permission and sample disposition

- The owner-authenticated administrator path completed the bounded configuration/import and read-back.
- SP-001 was reconciled as the sample issue: assigned only to the verified owner, placed in the native P00 milestone, linked to its accepted decision, its acceptance checkbox recorded, and moved to Done.
- The negative-permission test is explicitly deferred to SP-012. The workspace currently has one real member; inviting or manufacturing a second identity solely for this gate would violate the no-fictional-member rule and add no trustworthy least-privilege evidence.
- A future multi-member or agent integration must complete its own negative-permission test before receiving write authority.

## 5. Acceptance criteria

- **AC-SP-002-01 — Accepted:** one team owns all 165 source issues.
- **AC-SP-002-02 — Accepted:** seven gate projects, twelve phase milestones and the permanent `phase-Pxx` fallback convention preserve gate/phase identity.
- **AC-SP-002-03 — Accepted:** the operating-record template exists and source descriptions retain required fields.
- **AC-SP-002-04 — Accepted:** the native workflow plus `status-blocked`/Blocked-view convention represents active, review, validation, completed and blocked work without conflating blocked with canceled.
- **AC-SP-002-05 — Accepted for the current one-person model:** the verified owner is the only real member; specialist and independent-review roles remain vacant until accepted by real people.
- **AC-SP-002-06 — Accepted:** 91 parent relations and 642 predecessor edges reconcile pairwise with zero missing, unexpected or duplicate relations.
- **AC-SP-002-07 — Accepted:** Linear and the repository have distinct authoritative roles; the seven views are derived projections only.
- **AC-SP-002-08 — Accepted with explicit deferral:** positive administrator and SP-001 sample checks passed; the negative-permission identity exercise is routed to SP-012 before any broader identity gains write access.

## 6. Limits retained

- This evidence verifies delivery-board configuration, not product implementation, production readiness or specialist approval.
- Role-consolidated owner review is not independent review.
- Cross-project native milestones remain a Linear limitation; the accepted `phase-Pxx` convention must not be silently removed.
- No API credential is retained. Future API work requires a new task-specific minimum-permission credential and current authorization.
- No invitation, integration installation, plan upgrade, destructive cleanup or production action is authorized by this decision.

## 7. Owner decision

Syed Ahmed accepted the SP-002 evidence and authorized the recommended completion route on 13 September 2026. After the configured views and SP-001 second-pass record were read back, SP-002 may be marked Done and this decision may be committed and published as version 1.0.

Any material change to the team model, workflow, phase convention, authority split or permission boundary requires a new reviewed version and affected acceptance evidence.
