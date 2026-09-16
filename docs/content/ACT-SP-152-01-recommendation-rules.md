# ACT-SP-152-01 — Deterministic recommendation rules

| Field | Value |
|---|---|
| Ruleset version | `sp152-v1` |
| Status | Accepted for the pilot |
| Accountable owner | Syed Ahmed, founder/product owner |
| Coaching approver | Aaron M, A Diploma |
| Approval date | 16 September 2026 |
| Pathway input | `soccolo-sp151-sp153-foundation-v1` |

## Required inputs

The evaluator uses current, attributed values for selected context, player age,
assessed ability, exact pathway/version, assignment origin and validity,
equipment, space, assistance, available time, supervision, content approval and
withdrawal state. Unknown required values are not treated as safe defaults.

## Precedence, highest first

1. Block withdrawn, unapproved, superseded or safety-restricted content.
2. Require current authority, one selected context and current assignment scope.
3. Apply age suitability and supervision before assessed ability.
4. Check exact equipment, space, assistance and complete approved duration.
5. Block or explain existing workload and assignment conflicts.
6. Offer the exact next eligible SP-151 variant.
7. Offer one exact named easier alternative when the next step is ineligible.
8. Return no recommendation with a stable reason code and plain explanation.

Every decision returns exactly one exact approved action or no action. It also
returns ruleset/pathway versions, selected context, assignment origin, inputs
used, stable reason code, parent-readable explanation, decision time and signed
expiry time.

## Pilot decisions

- A single current club assignment in the selected context takes priority over
  optional home practice. Two overlapping current assignments, including from
  different clubs, produce `ASSIGNMENT_CONFLICT`; workloads are never combined.
- If the required ball is missing, return `BALL_REQUIRED`; do not invent a
  no-ball drill. Other missing equipment may use only an exact approved fallback.
- An activity is eligible only when its complete approved duration fits. The
  evaluator never shortens, compresses or combines activities unless a distinct
  approved short variant exists.
- A missed session resumes its current step only while the assignment and
  variant remain current, eligible and safe. No catch-up workload is stacked.
- An authorized guardian or adult player may edit today's time, equipment,
  space and assistance. Approval, withdrawal, safety, age, assessed ability,
  assignment origin and coaching evidence are immutable evaluator inputs.
- A guardian/adult may request reassessment. Only coach-approved evidence may
  change assessed ability, progression or a coach-selected branch.
- An authorized adult or coach may choose only from exact alternatives returned
  by the ruleset; the choice cannot author a new prescription.
- Offline mode may display the last server-signed recommendation only until the
  end of its local decision day and never longer than 24 hours. It performs no
  new calculation. Expired or unverifiable signed data produces no recommendation.
- Completion records practice only. It never raises ability, increases workload,
  advances the pathway or combines assignments.

The server remains authoritative. Client clocks, cached context, hidden controls
and user-edited payload fields cannot grant eligibility or extend validity.
