# SP-018 readiness review — feasibility and revised-estimate gate

| Field | Review record |
|---|---|
| Review date | 25 September 2026 |
| Source family | [SP-018 — Accept feasibility and revise scope/estimates](../delivery/soccer_delivery_backlog.md#sp-018--accept-feasibility-and-revise-scopeestimates) |
| Governing activity | [ACT-SP-018-01](../delivery/activities/P03.md#act-sp-018-01--accept-integrated-outcome-accept-feasibility-and-revise-scopeestimates) |
| Public planning base | `5f03370b` on `SoccerAPP-repo/main` |
| Private implementation base | `8bc319b83b7f6c033e07d89cb9b4591e6f368a2e` on `Soccolo-app/feat/sp014-local-camera-feasibility` |
| Last owner-tested iPhone build source | `323aa848c49c18a48f948f48b30c6b3d3c6dfa0c` |
| Founder/technical lead | Syed Ahmed |
| Delivery owner | Syed Ahmed |
| Review independence | Syed Ahmed fills both roles; no independent delivery-owner review is claimed |
| Review disposition | **Deferred with evidence gaps; SP-018 is not accepted** |

## Review boundary and decision rule

SP-018 is the human G2 feasibility rollup. Its activity requires accepted
evidence from sixteen predecessor families before the founder/technical lead
can accept the integrated outcome. This review classifies repository evidence,
records the current criterion result and prepares the remaining human gates. It
does not convert preparatory tests, design acceptance or an owner walkthrough
into missing runtime, device, provider, specialist or independent-review
evidence.

SP-018 may be accepted only when:

1. all sixteen predecessor activities named by `ACT-SP-018-01` have accepted,
   version-bound evidence at their stated scope;
2. `AC-SP-018-01`, `AC-SP-018-02` and `AC-SP-018-03` all pass;
3. the founder/technical lead and delivery owner are named and record their
   decisions; and
4. the revised estimate distinguishes evidence-based effort, dependency wait,
   specialist lead time, actual quotes and unresolved gaps.

## Evidence stabilized in this review

The SP-017 local synthetic fixture is now a versioned private-repository
artifact at `b8a10da5753dd1b5ce019845fd57112b9be8084b` rather than an uncommitted
worker result. `node tools/dev/verify.cjs` passed on that commit, including:

- the SP-039 static contract validator: 15 checks, supplemented on 26 September
  2026 by a clean local migration/seed reset and 18/18 passing pgTAP assertions;
- the foundation security guard and its negative self-test;
- the SP-006 source/media manifest guard; and
- 28 of 28 SP-017 synthetic lifecycle cases.

The SP-017 cases cover explicit opt-in and exact household/player context,
atomic used-plus-reserved quota, byte-zero retry, exact expiry boundaries,
cleanup retention and confirmation, unreadable quarantine, stale generations,
withdrawal/deletion suppression and private playback authorization. They do
not provide a hosted object-store path, actual network retry, provider quota,
mobile integration, residual-access measurement or reviewer handoff. The
[SP-017 family review](SP-017-family-review-2026-09-20.md) therefore remains
authoritative: the local fixture is preparation, not SP-017 completion.

## Predecessor evidence ledger

| Family | Current classification | Evidence and retained limit | SP-018 treatment |
|---|---|---|---|
| SP-006 | **Accepted — bounded sample/design scope** | [Pilot animation acceptance](../content/ACT-SP-006-02-provisional-acceptance.md) closes sample/design work; no current file is approved for player release | Accepted predecessor at its recorded scope; release workload remains in the revised estimate |
| SP-009 | **Open** | [Threat/privacy packet](../security/ACT-SP-009-01-threat-privacy-store-review-packet.md) retains H1, H2, H3 and L1; the owner exception is synthetic-planning risk acceptance, not specialist approval | Blocking |
| SP-013 | **Open; controlled-run evidence added** | [Run evidence](SP-013-controlled-run-evidence-2026-09-26.md) records the actual local-model run, zero external spend, supervisor cancellation and reviewed replacement; injected-instruction handling and the human rollup remain open | Blocking |
| SP-014 | **Accepted — bounded local iPhone feasibility scope** | [Acceptance evidence](ACT-SP-014-03-iphone-feasibility-acceptance.md) records the signed build, three ten-minute runs, three typical sessions, front/rear and portrait/landscape owner acceptance; HEVC is local-only and H.264 remains a main-build target | Accepted predecessor at its recorded scope; Android, release and H.264 claims remain downstream |
| SP-015 | **Open; local fixture added** | [Local evidence](SP-015-local-fixture-evidence-2026-09-26.md) records 12/12 deterministic part/chapter/gap tests at `014de71`; physical capture, 30-minute device measurement and handoff remain open | Blocking |
| SP-016 | **Open; local recovery matrix added** | [Local evidence](SP-016-local-recovery-evidence-2026-09-26.md) records 18/18 injected failure/recovery tests at `8bc319b`; native device, thermal/battery and independent-QA evidence remain open | Blocking |
| SP-017 | **Open; local preparation improved** | Commit `b8a10da5` passes 28 synthetic contract cases; no separately authorized hosted path, actual network/provider evidence or final handoff exists | Blocking |
| SP-037 | **Accepted — design/specification scope** | [Acceptance evidence](../delivery/ACT-SP-037-03-acceptance-evidence.md) accepts hierarchy/capability design; runtime and accountable security gates remain downstream | Accepted predecessor at its stated scope |
| SP-038 | **Accepted — design/specification scope** | [Acceptance evidence](../design/ACT-SP-038-03-acceptance-evidence.md) accepts administration/membership design; runtime evidence remains downstream | Accepted predecessor at its stated scope |
| SP-039 | **Accepted — bounded local feasibility scope** | [Acceptance evidence](../delivery/ACT-SP-039-03-acceptance-evidence.md) and [execution evidence](SP-039-local-database-attempt-2026-09-26.md) record Syed Ahmed's dual-role acceptance after WSL 2/Docker setup, a clean migration and synthetic-seed reset, 18/18 passing pgTAP assertions, full repository verification and disposable shutdown at `8bc319b` | Accepted predecessor at its recorded scope; hosted, production and independent-security evidence remain downstream gates |
| SP-051 | **Open / no accepted execution evidence located** | Local persistence, account-switch, offline, crash/outbox, tombstone and interrupted-upload phone demonstrations remain required | Blocking |
| SP-052 | **Open / no accepted sandbox evidence located** | Apple/Google sandbox and Stripe test-mode purchase, restore, refund, order and expiry cases remain required | Blocking |
| SP-064 | **Accepted — zero-spend planning scope** | [Decision](../decisions/SP-064-requirements-and-estimate-gaps.md) accepts reconciliation and eight explicit gaps; it expressly is not the revised SP-018 estimate | Accepted predecessor at its stated scope; gaps flow into AC-SP-018-02 |
| SP-065 | **Open / no accepted runtime evidence located** | MFA, recovery, AAL/direct-API denial, child-session and revocation feasibility remain required | Blocking |
| SP-081 | **Open / no accepted composition evidence located** | On-device branded composition depends on SP-014, SP-015, SP-080 and SP-126 and requires measured representative-device encoding results | Blocking |
| SP-126 | **Accepted — protocol/scope decision** | [Decision](../decisions/SP-126-measurable-feasibility-and-device-thresholds.md) accepts thresholds, fallbacks and synthetic/adult fixture limits; it claims no successful physical run | Accepted predecessor at its stated scope; actual results remain in SP-014–SP-016/SP-081 |

Current count: **7 accepted at their bounded scope; 9 blocking/open**.

## SP-018 acceptance criteria

| Criterion | Current result | Evidence-based reason |
|---|---|---|
| AC-SP-018-01 — Media and scoped database evidence, device limits, animation/admin workload and full club/family architecture | **FAIL — OPEN** | SP-014 and SP-039 are accepted at their bounded feasibility scopes, and animation samples and administration designs exist, but SP-009, SP-013, SP-015–SP-017, SP-051–SP-052, SP-065 and SP-081 remain open |
| AC-SP-018-02 — Revised engineering/content/cloud/recovery estimate supersedes the family-only range | **FAIL — OPEN** | SP-064 records explicit estimate gaps and an assumption-based workbook; no evidence-backed revised estimate, actual capacity plan or approved supplier scope exists |
| AC-SP-018-03 — No invented supplier quote | **PASS for the current review** | No supplier response is represented as received; missing prices remain explicit gaps and the baseline workbook is not treated as a quote or approved budget |

## Revised-estimate input register

No replacement total is calculated while required inputs are absent. Doing so
would disguise uncertainty as precision. The eventual revision must separate
hands-on effort from dependency wait, specialist lead time and cash cost, and
must use optimistic/expected/pessimistic ranges for leaf work only.

| Workstream | Evidence available now | Input required before a revised estimate can pass |
|---|---|---|
| Identity, MFA, recovery and child credentials | Accepted design contracts | SP-065 feasibility, supported provider limits, identity/recovery implementation scope and actual owner capacity |
| Administrative web/API and authorization | SP-037/SP-038/SP-060 design contracts | Runtime API/RLS denial evidence, independent security scope and implementation estimate |
| Media validation and optional cloud | SP-011 contract and SP-017 local fixture | Authorized hosted environment, provider/storage/transfer measurements, quarantine-worker scope and residual-access result |
| iOS build and device work | SP-126 protocol plus accepted bounded SP-014 signed-build and iPhone evidence | Completed SP-015–SP-016/SP-081 runs, main-build H.264 route, further device limits and reviewer effort |
| Content, animation and accessibility | Three SP-006 review samples and fixed minimum matrix | Release-asset production scope, source rights, coach/accessibility review effort and actual quote or internal rate |
| Safeguarding, privacy and support | Design/runbook contracts | Resolution of SP-009 H1–H3/L1, named qualified reviewers, coverage model and measured/support-volume assumption |
| Billing, subscriptions and support | Entitlement design contract | SP-052 sandbox evidence, provider fee inputs and purchase/recovery/refund workload |
| Cash runway and usage stress | Existing formula workbook | Dated cash inputs, actual capacity/rates, provider bills/quotes and evidence-based usage scenarios |

Any supplier or specialist amount must be a dated actual quote, a documented
internal cost based on a known rate, `QUOTE REQUIRED`, or `UNKNOWN — NOT
INCLUDED`. The existing workbook totals remain assumptions and must not be
presented as SP-018's revised estimate.

## Required human gates

### HG-SP-018-01 — Assign review authority

**Completed 25 September 2026.** Syed Ahmed authorized recording himself as both
founder/technical lead and delivery owner. This satisfies role assignment for
the readiness review, but it does not provide independent review. Any source
criterion or later release gate that specifically requires an independent
reviewer remains open until a different qualified person supplies that review.

### HG-SP-018-02 — Choose the bounded route through open predecessors

**Completed 26 September 2026 for the zero-spend local route.** Syed Ahmed first
authorized local-only evidence preparation without host installation, paid
service, hosted provider, physical-device claim or specialist contact. He then
separately authorized the required zero-spend WSL 2 and Docker Desktop host
setup and the Windows restart. That route produced the SP-013 run record,
SP-015 session fixture, SP-016 recovery matrix and passing SP-039 local database
execution record linked above. Syed Ahmed subsequently accepted SP-039 in both
recorded roles at its bounded local scope. That acceptance does not waive other
source criteria or claim an independent security review.

Any expansion beyond that route still requires the founder/technical lead to
choose whether to:

- fund/authorize the missing feasibility work;
- retain a truthful fallback or exclude an unsupported capability/device;
- defer the full-build gate; or
- stop the proposed scope.

This choice must not mark an unmet predecessor complete.

### HG-SP-018-03 — Approve the revised estimate

Once evidence and estimate inputs exist, the founder/technical lead approves or
rejects the replacement estimate. Supplier contact, spend, account creation and
provider use require their separately recorded authority.

### HG-SP-018-04 — Final gate decision

The founder/technical lead records `ACCEPTED`, `REVISE` or `STOP`, and the
delivery owner records the review. `ACCEPTED` is unavailable while any mandatory
predecessor or SP-018 criterion remains open.

## Current decision record

```text
SP-018 DECISION: DEFERRED WITH EVIDENCE GAPS

AC-SP-018-01: FAIL — OPEN
AC-SP-018-02: FAIL — OPEN
AC-SP-018-03: PASS FOR CURRENT REVIEW

No authorization is granted for the full P04–P10 build.
No production publishing, child media, live customer data, real charge,
supplier contact, hosted-service connection or unsupported-device claim is
authorized by this readiness review.
```

This is the maximum evidence-based disposition available before the named human
gates and missing predecessor results exist.
