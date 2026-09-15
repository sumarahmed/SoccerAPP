# ACT-SP-151-03 — Acceptance evidence

| Field | Value |
|---|---|
| Evidence version | `1.0` |
| Contract | `soccolo-sp151-sp153-foundation-v1` |
| Accountable owner | Syed Ahmed, founder/content owner |
| Coaching reviewer | Aaron M, A Diploma |
| Review decision | Pilot recommendations reviewed and passed; owner acceptance recorded 16 September 2026 |
| Device evidence | Not applicable; this activity verifies a portable data/content contract |

| Criterion | Result | Evidence |
|---|---|---|
| AC-SP-151-01 exact ordered paths | Pass | Four paths contain learning goals, entry requirements, age-banded ordered exact variants, exact next actions, exact easier alternatives and coach-controlled progression conditions |
| AC-SP-151-02 age/ability separation | Pass | Independent eligibility gates, age-specific routes, mature older-beginner language, advisory position relevance and parent setup guidance |
| AC-SP-151-03 missing/withdrawn behavior | Pass | Validation rejects unavailable references; an affected route or branch is blocked; D11/D12 remain unavailable and the catalogue is explicitly extensible |

## Verification

Run from the repository root:

```powershell
node tests/content/validate-sp151-sp153-contract.cjs
```

The validator checks the D01–D10 release scope, D11/D12 deferral, named approval
metadata, learning goals, entry and progression rules, age routes, exact next
actions, exact fallbacks, parent setup keys, recommendation precedence and the
existing SP-152/SP-153 deterministic fixtures.

## Human evidence

Syed Ahmed accepted the review recommendations and confirmed that Aaron M had
reviewed and passed every proposed pilot coaching decision: the four pathway
families, D01–D10 `base.v1` promotion, age-banded endpoints, D04/D08 branch,
repeat/return targets, coach-only progression authority, advisory position
relevance and parent setup guidance.

## Retained limits

- This is an accepted design/content contract, not runtime recommendation-engine evidence.
- A changed drill, age rule, prescription, sequence, setup or safety condition requires a new reviewed version.
- SP-006 separately controls animation source, rights, accessibility, rendered-result and participant-release evidence; this acceptance does not publish or release participant media.
