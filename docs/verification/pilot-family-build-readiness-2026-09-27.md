# Pilot-family build readiness and next-family recommendation

| Field | Current record |
|---|---|
| Date | 27 September 2026; local export evidence updated 28 September 2026 |
| Governing rollup | [SP-018 readiness review](SP-018-readiness-review-2026-09-25.md) |
| Scope | Local-first completion milestone; retain the sixteen-family SP-018 ledger for the wider roadmap |
| Current position | **8 accepted at bounded scope; 8 open in the wider roadmap; cloud work deferred by owner** |
| Recommended next family | **SP-081 — local export closeout, followed by local SP-051 persistence/recovery** |

## Decision

Local correction follow-up: the three recovery findings are implemented in
source, with 64 passing Flutter tests, clean analysis and repository checks.
Fault injection covers staging-write and publication failures, preservation of
committed data, and continued cleanup after multiple errors. Backup restoration,
retry after transient verification, legacy quarantine recovery and unknown-schema
preservation are tested. No new binary or native iOS disk-full result is claimed.
The earlier review disposition below is historical; device packaging/validation
of this source revision and independent QA remain separate from source completion.

Local source/test review, 28 September: **revise before local closeout**. Review
fixtures reproduced corrupt-canonical backup bypass and permanent quarantine
after transient verification failure. Source review also found repeated writes
inside failure handlers can bypass later cleanup/error reporting. All 59 Flutter
tests passed, including characterization tests of the two unresolved defects;
analysis and repository contracts passed. Controlled write rejection preserved
existing files but is not native iOS ENOSPC evidence. Implement recovery/error
handling corrections with injectable storage failures; no owner disk-filling
test is required. The owner confirms intentional silent recording, satisfactory
branding and export survival across update. Cloud remains deferred.

Follow-up owner evidence: all ten combined local checklist cases were reported
passed, with test 2 limited to a silent recording. Relaunch, airplane mode,
cancellation/retry, background/lock, force-close recovery, deletion durability,
permission recovery and usability now have owner-reported evidence. See the
[case table and limits](local-export-build16-owner-result-2026-09-28.md).
Next engineering checks: controlled low-space behavior and frame-accurate timing;
verify update persistence on the next release. Voiced-source audio remains
unverified. Do not repeat the completed owner checklist without a relevant change.

28 September local-export update: the owner reports Build 16 delete, view,
export and save working as expected. The empty Saved exports defect is closed
at functional smoke-test scope. See [the bounded device result](local-export-build16-owner-result-2026-09-28.md).
This advances SP-081 runtime evidence without closing its remaining timing/audio,
failure-preservation or independent-review gates; the family totals are unchanged.

The SP-016 **owner-executed test matrix is complete**. The family is not yet
formally accepted because build 9 needs one short completion-card recheck and
`ACT-SP-016-03` requires independent QA. No long recording or interruption
matrix should be repeated unless the short recheck finds a regression.

Owner direction, 28 September 2026: **defer cloud features to the later roadmap
and complete local functionality first**. This supersedes the earlier SP-017-next
recommendation. Private upload, cloud playback/storage, server deletion, sync and
hosted account work are outside the immediate milestone. Preserve their existing
contracts and implementation for later; do not mark them accepted or remove them.

The immediate milestone is a complete on-device record, review, export, save and
delete workflow, with reliable persistence and recovery. It does not require a
backend connection or cloud credentials. The wider SP-018 gate remains open;
deferral does not count as passing its original sixteen-family criteria.

## Single pilot-family ledger

| Family | State | Smallest next action | Recommendation |
|---|---|---|---|
| SP-006 | Accepted — bounded sample/design | Produce release assets only when the pilot content scope is fixed | Do not reopen the accepted review |
| SP-009 | Open | Resolve threat/privacy findings H1–H3 and L1 with a qualified reviewer | Bundle into one specialist packet; do not rerun unrelated engineering tests |
| SP-013 | Open | Test injected-instruction handling and complete the human rollup | Reuse the controlled local-agent harness and record only new evidence |
| SP-014 | Accepted — bounded iPhone feasibility | None for the current gate | Reuse its signed-device baseline |
| SP-015 | Accepted — bounded local iPhone session | None for the current gate | Reuse timing, chapter and Pause/Resume evidence |
| SP-016 | Review | One build-9 success-message/diagnostic check, then independent QA | Treat the owner matrix as complete; no wholesale rerun |
| SP-017 | Deferred — later cloud roadmap | Retain the 28-case fixture and existing upload adapter | Revisit after local completion; no hosted work in the immediate milestone |
| SP-037 | Accepted — design/specification | Runtime work belongs to downstream implementation | Do not rereview the design |
| SP-038 | Accepted — design/specification | Runtime work belongs to downstream implementation | Do not rereview the design |
| SP-039 | Accepted — bounded local database | Hosted/security gates remain downstream | Reuse the 18/18 database result |
| SP-051 | Open — split local and cloud scope | Verify local persistence, relaunch/recovery and deletion durability; retain applicable local identity boundaries | Review local cases next; defer sync/outbox transfer and hosted reconciliation |
| SP-052 | Open | Run Apple/Google sandbox plus Stripe test-mode purchase, restore, refund and expiry cases | Defer until sandbox accounts and billing scope are ready; never use real charges |
| SP-064 | Accepted — zero-spend planning | Replace assumptions only when measured inputs or quotes exist | Carry gaps forward; do not invent a revised total |
| SP-065 | Open | Prove MFA, recovery, assurance-level denial, child sessions and revocation | Run after identity-provider choice; combine security review with SP-009 where possible |
| SP-081 | Open — Build 16 local workflow owner-passed | Retain successful delete/view/export/save evidence; complete measured timing/audio, cancel and low-space preservation checks | Review the remaining cases only; see the 28 September device result |
| SP-126 | Accepted — protocol/scope | Apply thresholds to each measured result | Do not reopen the protocol decision |

## Recommended execution order

1. **SP-081 local closeout:** preserve the four owner-passed functions; review
   remaining transition/audio, cancellation, low-space and original-preservation cases.
2. **SP-051 local subset:** verify recordings/exports survive relaunch and app
   updates, deletions remain deleted, and interrupted local work recovers honestly.
3. **SP-016 closeout:** assess the outstanding completion-message check against
   the current build and obtain the outstanding independent review; reuse the owner matrix.
4. **Local usability review:** assess navigation, recording/export labels, progress,
   permission guidance and error/retry states. Keep cloud controls outside the
   primary local flow; any UI changes follow source review rather than this roadmap edit.
5. **Local milestone review:** report passed cases, residual defects and applicable
   privacy/security findings. Do not declare the wider SP-018 gate complete.
6. **Later roadmap:** resume SP-017 cloud media and cloud SP-051, hosted SP-065
   identity, and SP-052 billing when those capabilities are explicitly prioritized.

Applicable local security/privacy checks remain in scope. Existing accepted
capture and export evidence should be reused rather than repeated wholesale.

## Token- and evidence-efficiency rules

- Maintain this ledger as the single status index; family files hold details.
- Review deltas only: cite accepted baselines instead of restating them.
- Use one compact evidence packet per family: source SHA, build/environment,
  case table, failures, decision and residual limits.
- Run deterministic local cases before device, hosted or specialist work.
- Collect all device/provider diagnostics in one copied report per run.
- Repeat a passed long/device test only after a relevant code-path change or
  observed regression.
- Separate `owner passed`, `independent accepted` and `release supported`; never
  spend tokens reconciling claims that use different evidence scopes.
- Finish with one SP-018 acceptance table and one revised estimate. Do not
  produce parallel summaries that drift.

## Immediate local review boundary

The next review should answer only these questions:

1. Which SP-081 criteria are covered by Build 16 evidence, and which need focused
   timing/audio or controlled failure checks?
2. Do local recordings and exports remain usable after relaunch, interruption
   and update, and do deletion and retry preserve the intended files?
3. Can the complete local workflow be used without cloud credentials, network
   access or unrelated provider setup?
4. What minimal source changes and device checks close the local milestone?

That focused delta review is sufficient to produce an implementation plan; a
new full-family narrative is unnecessary.
