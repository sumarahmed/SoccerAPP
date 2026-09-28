# Pilot-family build readiness and next-family recommendation

| Field | Current record |
|---|---|
| Date | 27 September 2026; local export evidence updated 28 September 2026 |
| Governing rollup | [SP-018 readiness review](SP-018-readiness-review-2026-09-25.md) |
| Scope | The sixteen SP-018 predecessor families needed to justify the pilot build |
| Current position | **8 accepted at bounded scope; 8 still blocking/open** |
| Recommended next family | **SP-017 — authorized cloud-media path** |

## Decision

28 September local-export update: the owner reports Build 16 delete, view,
export and save working as expected. The empty Saved exports defect is closed
at functional smoke-test scope. See [the bounded device result](local-export-build16-owner-result-2026-09-28.md).
This advances SP-081 runtime evidence without closing its remaining timing/audio,
failure-preservation or independent-review gates; the family totals are unchanged.

The SP-016 **owner-executed test matrix is complete**. The family is not yet
formally accepted because build 9 needs one short completion-card recheck and
`ACT-SP-016-03` requires independent QA. No long recording or interruption
matrix should be repeated unless the short recheck finds a regression.

Proceed next with **SP-017**. It is the nearest media dependency, already has a
versioned 28/28 synthetic lifecycle fixture, and can reuse SP-015/SP-016's
verified-local-media boundary. The first pilot contract is retry from byte zero,
not fragment continuation. A hosted claim must wait for an explicitly
authorized test environment and real end-to-end evidence.

## Single pilot-family ledger

| Family | State | Smallest next action | Recommendation |
|---|---|---|---|
| SP-006 | Accepted — bounded sample/design | Produce release assets only when the pilot content scope is fixed | Do not reopen the accepted review |
| SP-009 | Open | Resolve threat/privacy findings H1–H3 and L1 with a qualified reviewer | Bundle into one specialist packet; do not rerun unrelated engineering tests |
| SP-013 | Open | Test injected-instruction handling and complete the human rollup | Reuse the controlled local-agent harness and record only new evidence |
| SP-014 | Accepted — bounded iPhone feasibility | None for the current gate | Reuse its signed-device baseline |
| SP-015 | Accepted — bounded local iPhone session | None for the current gate | Reuse timing, chapter and Pause/Resume evidence |
| SP-016 | Review | One build-9 success-message/diagnostic check, then independent QA | Treat the owner matrix as complete; no wholesale rerun |
| SP-017 | Open — prepared | Connect the 28-case contract fixture to one authorized mobile/backend test path | **Build next**; prove upload, denial, retry, quota, deletion and playback once |
| SP-037 | Accepted — design/specification | Runtime work belongs to downstream implementation | Do not rereview the design |
| SP-038 | Accepted — design/specification | Runtime work belongs to downstream implementation | Do not rereview the design |
| SP-039 | Accepted — bounded local database | Hosted/security gates remain downstream | Reuse the 18/18 database result |
| SP-051 | Open | Demonstrate local persistence, account switch, offline/outbox, tombstone and interrupted upload on phone | Build after the media path; share its local-state and fault harnesses |
| SP-052 | Open | Run Apple/Google sandbox plus Stripe test-mode purchase, restore, refund and expiry cases | Defer until sandbox accounts and billing scope are ready; never use real charges |
| SP-064 | Accepted — zero-spend planning | Replace assumptions only when measured inputs or quotes exist | Carry gaps forward; do not invent a revised total |
| SP-065 | Open | Prove MFA, recovery, assurance-level denial, child sessions and revocation | Run after identity-provider choice; combine security review with SP-009 where possible |
| SP-081 | Open — Build 16 local workflow owner-passed | Retain successful delete/view/export/save evidence; complete measured timing/audio, cancel and low-space preservation checks | Review the remaining cases only; see the 28 September device result |
| SP-126 | Accepted — protocol/scope | Apply thresholds to each measured result | Do not reopen the protocol decision |

## Recommended execution order

1. **SP-016 closeout:** short build-9 UI/diagnostic check and independent review.
2. **SP-017:** authorized cloud-media path using the existing 28-case fixture.
3. **SP-081:** on-device composition using the accepted capture/session files.
4. **SP-051:** offline/local state and interrupted-work recovery.
5. **SP-065:** identity, MFA, child-session and revocation runtime proof.
6. **SP-052:** store and payment sandbox proof once accounts are available.
7. **SP-009 and SP-013:** focused specialist/human closures using their existing packets.
8. **SP-018:** final evidence rollup and revised estimate only after the blockers above resolve.

This order keeps the current media context warm, maximizes reuse of signed-device
fixtures and postpones provider/account work until it can produce acceptance
evidence in one pass.

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

## Immediate SP-017 review boundary

The next review should answer only these questions:

1. What mobile adapter and backend/object-store test path can exercise the
   existing SP-017 state machine without production or child data?
2. Which cases already pass locally, and which require real network/provider
   evidence?
3. What exact authorization, test credentials, cost ceiling and reviewers are
   required for the smallest hosted proof?
4. What result would accept SP-017, and what fallback remains if hosted proof is
   unavailable?

That focused delta review is sufficient to produce an implementation plan; a
new full-family narrative is unnecessary.
