# ACT-SP-152-01 — Deterministic recommendation rules

Version `1.0-review-ready` consumes the exact SP-151 pathway version and current, attributed inputs.

## Precedence (highest first)

1. Withdrawal, unapproved content, or a safety restriction.
2. Current authority and club assignment.
3. Age suitability, supervision, and assessed ability.
4. Available equipment, space, assistance, and time.
5. Existing prescribed workload or assignment conflict.
6. Next eligible step in the selected path.
7. Named easier alternative.
8. Explicit no-recommendation reason.

Every result contains exactly one eligible action and a reason, or no action and an explicit reason. Adults may edit today’s time, equipment, space, and assistance; they cannot edit approval, safety, or attributed ability. Stale offline inputs may display the last signed recommendation but cannot calculate a new one. Completion alone never changes ability or combines/increases assigned workload.
