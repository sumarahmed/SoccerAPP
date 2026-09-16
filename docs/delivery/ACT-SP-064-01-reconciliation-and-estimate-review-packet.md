# ACT-SP-064-01 — Requirements, content and estimate review packet

| Field | Value |
|---|---|
| Activity | `ACT-SP-064-01` |
| Source issue | `SP-064` |
| Packet version | 1.0 |
| Prepared | 16 September 2026 |
| Accountable owner | Syed Ahmed, founder/delivery owner |
| Review scope | Zero-spend reconciliation and explicit estimate gaps; no quote request or funding decision |
| Status | Accepted preparation for the bounded SP-064 decision |

## Source and authority boundary

The accepted predecessors are SP-004, SP-005, SP-006, SP-047, SP-048 and
SP-059–SP-063. This packet does not revise their contracts. The
[30-feature traceability map](soccer_feature_traceability.md) gives the full
feature-to-source-task and planned verification-task mapping; the
[165-task backlog](soccer_delivery_backlog.md),
[390-activity plan](soccer_agent_activity_plan.md), and
[foundation test catalogue](../foundation/foundation_test_catalog.md) retain
the detailed task, activity, acceptance and test IDs. These mappings are
specifications, not implementation or test results. The current catalogue has
36 written foundation test cases and does not replace the later integrated,
accessibility, commerce or release suites.

The [SP-004 decision](../decisions/SP-004-pilot-metrics-budget-and-specialist-scopes.md)
and [SP-075 authority decision](../decisions/SP-075-ownership-and-discovery-authority.md)
retain an AUD 0 incremental discovery-spend cap and Syed Ahmed's exclusive
authority for external specialist contact. No scope brief has been issued and
no custom supplier quote exists. This packet performs no external contact,
purchase or workbook change.

## Requirement → design → task → test reconciliation

The table groups all FT-01–FT-30 feature rows exactly once. The linked feature
map remains the row-level authority for every build and verification issue.
`SP-064` records the design anchor and the evidence gap that the mapped task
must close; it does not mark the mapped tasks complete.

| Feature IDs | Design/contract anchor | Delivery task and verification route | Present evidence and remaining test gap |
|---|---|---|---|
| FT-01, FT-02, FT-03 | [SP-037](../decisions/SP-037-hierarchy-and-scoped-capabilities.md), [SP-005](../decisions/SP-005-qualified-coach-drill-review.md), [SP-151](../content/ACT-SP-151-01-pathway-coverage.md), [SP-006](../decisions/SP-006-animation-samples-pilot.md) | SP-085/SP-096/SP-125; SP-070/SP-127/SP-130 | Design and D01–D10 base variants accepted; exact release assets, variant/rights and player tests pending |
| FT-04, FT-05, FT-06 | [SP-010](../decisions/SP-010-recording-and-local-protection-contract.md), [SP-126](../decisions/SP-126-measurable-feasibility-and-device-thresholds.md) | SP-014–SP-016/SP-092–SP-095; physical DF-T026–DF-T028 and SP-127 | iPhone-focused threshold protocol fixed; signed build, physical timing/capture and failure results pending |
| FT-07, FT-08, FT-09 | [SP-080](../decisions/SP-080-branded-export-and-timeline-contract.md), [SP-077](../decisions/SP-077-paired-theme-components.md) | SP-078–SP-083/SP-098; DF-T029–DF-T030 and SP-130 | Export/theme contracts accepted; exact-device media/export and accessibility evidence pending |
| FT-10, FT-11, FT-12 | [SP-047](../decisions/SP-047-device-persistence-and-sync-contract.md), [SP-059](../decisions/SP-059-mfa-recovery-and-player-credential-contract.md) | SP-051/SP-065/SP-089–SP-091; DF-T012–DF-T014/DF-T019–DF-T022 | Local and MFA contracts accepted; migration, physical isolation, recovery and stale-client tests pending |
| FT-13, FT-14, FT-15 | [SP-059](../decisions/SP-059-mfa-recovery-and-player-credential-contract.md), [SP-061](../decisions/SP-061-retention-guardianship-and-data-rights.md), [SP-037](../decisions/SP-037-hierarchy-and-scoped-capabilities.md) | SP-065/SP-068/SP-088/SP-099–SP-112; DF-T011–DF-T014 and SP-128 | Authority design accepted; direct API/RLS, adult transition and roster-negative tests pending |
| FT-16, FT-17, FT-18 | [SP-005](../decisions/SP-005-qualified-coach-drill-review.md), [SP-152](../decisions/SP-152-deterministic-next-session-rules.md), [SP-153](../decisions/SP-153-repeatable-skill-check-protocols.md) | SP-042/SP-043/SP-113–SP-116/SP-152–SP-163; SP-070/SP-127/SP-138 | Coaching/decision contracts accepted; implemented plan history, workload and participant-path evidence pending |
| FT-19, FT-20, FT-21 | [SP-011](../decisions/SP-011-cloud-consent-deletion-and-recovery-contract.md), [SP-060](../decisions/SP-060-web-api-sessions-and-media-validation.md), [SP-061](../decisions/SP-061-retention-guardianship-and-data-rights.md) | SP-021–SP-024/SP-067–SP-069/SP-104–SP-109; DF-T022/DF-T031 onward | Current-state/retention contracts accepted; provider quarantine, withdrawal and deletion-race tests pending; optional cloud remains disabled until proven |
| FT-22, FT-23, FT-24 | [SP-050](../decisions/SP-050-lean-pilot-hosting-and-recovery.md), [SP-048](../decisions/SP-048-packaging-and-entitlement-contract.md), [SP-063](../decisions/SP-063-operator-key-and-recovery-runbooks.md) | SP-012/SP-049/SP-052/SP-069–SP-072/SP-110/SP-120–SP-123; provider/billing suites | No-recovery lean pilot and billing contracts accepted; SP-012 protection, provider and sandbox evidence pending |
| FT-25, FT-26, FT-27 | [SP-062](../decisions/SP-062-safeguarding-and-accessible-identity-journeys.md), [SP-007](../decisions/SP-007-core-screen-and-state-design.md), [SP-003](../decisions/SP-003-agent-scope-and-evidence-policy.md) | SP-013/SP-070/SP-071/SP-118/SP-119/SP-130/SP-146/SP-165; DF-T023–DF-T025 | Safeguarding/design/agent contracts accepted; staffed response, assistive-device and controlled-agent trial evidence pending |
| FT-28, FT-29, FT-30 | [SP-004](../decisions/SP-004-pilot-metrics-budget-and-specialist-scopes.md), [architecture and business plan](../architecture/soccer_end_to_end_platform_and_business_plan.md) | SP-029–SP-036/SP-073/SP-074/SP-133–SP-150; research/commercial/release suites | Precommitted measures only; participant research, funded build, exact release and operating results pending |

The [consolidated S01–S27/R01–R20 map](../security/ACT-SP-009-consolidated-security-gate-map.md)
adds control owners, timing and fail-closed conditions. SP-009's H1–H3 and L1
review findings remain open; SP-064 cannot close them by assigning an estimate.

## Content quantity and release-readiness boundary — R14

The accepted initial catalogue is exactly `D01.base.v1` through `D10.base.v1`.
D11 and D12 were reviewed but are deferred. The four pathway contracts are ball
control, passing foundations, move and turn, and receive and finish. No extra
age/ability variant is included in this quantity; adding one requires its own
coach-approved content and asset row before release.

[SP-125](soccer_delivery_backlog.md#sp-125--produce-and-approve-every-pilot-content-asset)
requires main, alternate and slow demonstrations, cue audio, captions and setup
assets for each released variant. The minimum ten-base-variant inventory is
therefore **60 deliverable cells** (10 in each of six classes), plus four
pathway-specific parent-guidance sets and exact-version rights/coach approval
records. This is a count of required deliverables, not an animation-hours
estimate or a claim that every variant will use separate production sources.

| Base variant | Main | Alternate | Slow | Cue audio | Captions | Setup | Current evidence |
|---|---|---|---|---|---|---|---|
| D01 | Pending release asset | Pending | Pending | Pending | Pending | Pending release asset | A01 review video and still only |
| D02 | Pending | Pending | Pending | Pending | Pending | Pending | No review render |
| D03 | Pending | Pending | Pending | Pending | Pending | Pending | No review render |
| D04 | Pending release asset | Pending | Pending | Pending | Pending | Pending release asset | A03 review video and still only |
| D05 | Pending | Pending | Pending | Pending | Pending | Pending | No review render |
| D06 | Pending release asset | Pending | Pending | Pending | Pending | Pending release asset | A02 v0.2 review video and still only |
| D07 | Pending | Pending | Pending | Pending | Pending | Pending | No review render |
| D08 | Pending | Pending | Pending | Pending | Pending | Pending | No review render |
| D09 | Pending | Pending | Pending | Pending | Pending | Pending | No review render |
| D10 | Pending | Pending | Pending | Pending | Pending | Pending | No review render |
| D11 | Deferred — not counted in the ten-variant release minimum | Deferred | Deferred | Deferred | Deferred | Deferred | Coach-reviewed drill; no initial release |
| D12 | Deferred — not counted in the ten-variant release minimum | Deferred | Deferred | Deferred | Deferred | Deferred | Coach-reviewed goalkeeper drill; no initial release |

The three accepted SP-006 samples are design-review evidence, not player-release
assets; the [asset manifest](../../contracts/content/sp006-animation-review-assets.json)
sets `playerReleaseAllowed: false`. Thus zero of the 60 minimum release cells
is certified by this packet. A final production asset may legitimately satisfy
more than one view only if the coach and accessibility owner approve the exact
experience and the release matrix records it; do not silently count a review
render as all views. Incomplete variants and pathways stay unavailable.
The two deferred rows keep all twelve reviewed drill families visible in the
readiness register without miscounting them as offered pilot variants.

## Estimate-gap register — R19

The register names missing scoped inputs without inventing supplier responses.
`SC-01`–`SC-04` in [SP-004](../decisions/SP-004-pilot-metrics-budget-and-specialist-scopes.md)
are prepared briefs only. No agent has authority to issue them.

| Gap | Required bounded estimate or measurement | Current state and next gate |
|---|---|---|
| Identity, MFA, recovery and child credentials | Implement/build/test scope, auth-user counts, factor recovery workload and provider-plan limits | SP-059 contract only; quote and usage absent; feasibility SP-065, funding SP-073 |
| Administrative web/API and authorization | Server-mediated sessions, API/RLS denial, audit and independent tests | SP-037/SP-060 contracts only; scoped engineering/security estimate absent; SP-065/SP-068/SP-088 |
| Media validation and optional cloud | Quarantine worker, hostile-media parsing/isolation, byte/compute ceilings, storage and transfer by owner | SP-060 profile only; measured usage/provider pricing absent; keep cloud/full-session upload disabled until SP-017/SP-067 pass |
| iOS build and physical-device work | Authorized signing/build route, named iPhone runs, simulator/OS matrix, failure repeats and staff time | SP-126 protocol accepted; no build/device results or approved paid route; SP-014–SP-016 |
| Content, animation and accessibility | Ten-variant/60-cell lower bound, four guidance sets, reusable source/rights, coach and assistive/outdoor tests | Three review samples only; no release-asset quote or production schedule; SP-125/SP-070 |
| Safeguarding, privacy and support | Qualified review, case handling, alternate coverage, response volume and retention | Contracts accepted, staffing/cost/real-child approval not evidenced; SP-062/SP-063/SP-071 |
| Billing, subscriptions and customer support | Provider sandbox, purchase/recovery/refund/cancellation support and seat stress | SP-048 contract only; provider costs and support demand unmeasured; SP-072/SP-073 |
| Cash runway and usage stress | Dated monthly cash receipts, per-owner quota stress, actual auth identities, vendor bills and support sensitivity | Baseline workbook has scenario formulas, not cash runway or quotes; SP-073 before commercial commitment |

## Baseline workbook audit and limits

The unchanged [seven-sheet financial workbook](../../packages/soccer_agent_activity_package_20260908/financial/soccer_subscription_and_cost_model.xlsx)
has SHA-256 `B5E823043CFF7014D1AF27AE7C2808994F7571253FDC786601962CD253CB1ED2`.
Read-only inspection confirmed `Inputs!B58=550` core-engineering hours,
`Inputs!B64=120` animation hours, `Inputs!B68=40` security-review hours and
`Inputs!B74=25%` contingency. `Build Budget!B17:D17` holds cached modeled cash
totals of AUD 60,337.50, 81,821.875 and 137,681.25 for founder-led, hybrid
and commissioned scenarios respectively. Formula cells derive these values
from editable assumptions. The Checks sheet tests arithmetic and selected
input boundaries; it does not validate project scope or supplier availability.

The workbook predates the detailed identity/recovery, administrative web/API,
media-validation, alternate-operator and full content-variant obligations. It
also contains device/build allowances that do not override the current AUD 0
discovery authority or the [lean pilot no-recovery decision](../decisions/SP-050-lean-pilot-hosting-and-recovery.md).
Do not use its totals as quotes, an approved budget, a delivery date, a
per-family quota proof or a dated cash runway. Do not edit the baseline workbook
until measured findings and an explicitly authorized finance revision exist.

## R20 and acceptance disposition

R20 is addressed here at the planning/traceability level through the stable
FT/SP/ACT/AC mapping, design anchors, named verification lanes and explicit
missing evidence. It remains a release gate: every implemented requirement
must later link an exact build, executable result and independent decision.
The older baseline documents are historical and cannot override accepted
versioned decisions or the current dependency graph.

| SP-064 criterion | Packet result | Retained limit |
|---|---|---|
| AC-SP-064-01 — Requirement/design/task/test matrix | Met for planning via the grouped matrix and complete 30-row feature map | Execution evidence remains at mapped tasks |
| AC-SP-064-02 — Complete content quantities | Met for the fixed ten-base-variant pilot: 60 minimum release cells and four guidance sets | No release cells or further variants certified |
| AC-SP-064-03 — Scoped quotes or explicit gaps | Met through eight explicit scoped estimate gaps | Zero quotes, contacts or funded commitments |
| AC-SP-064-04 — Baseline workbook limits | Met by read-only SHA/formula/input audit | Baseline workbook unchanged and not a revised estimate |
| AC-SP-064-05 — R14/R19/R20 | Met as a planning disposition with owners/gates above | Production, funding and independent release evidence remain open |

The owner accepted the recommended zero-spend reconciliation and explicit-gap
route on 16 September 2026. This completes SP-064 as a planning decision only;
it does not authorize supplier outreach, spend, real-child data, implementation
readiness or release.
