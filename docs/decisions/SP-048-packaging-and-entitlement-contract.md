# SP-048 — Packaging and entitlement contract decision

| Field | Recorded value |
|---|---|
| Decision version | 1.0 |
| Decision date | 15 September 2026 |
| Source issue | SP-048 |
| Acceptance criterion | AC-SP-048-01 through AC-SP-048-03 |
| Outcome | Accepted |
| Accountable person | Syed Ahmed, Founder/backend lead |
| Review status | Owner acceptance recorded; store/audience, accountant, sandbox, billing-security and runtime review remain later gates |
| Repository base | `f49305313d0437c75b3b201a4389f7efe3c5bf3c` on `main` |

Syed Ahmed reviewed and accepted the complete SP-048 family, including the
promotional-coupon extension, and authorized completion, commit and GitHub
publication on 15 September 2026. SP-048 is complete as a design/specification
task.

## 1. Accepted evidence

- [ACT-SP-048-01 entitlement domain and overlap](../design/ACT-SP-048-01-entitlement-domain-and-overlap.md), accepted version 1.0.
- [ACT-SP-048-02 package lifecycle and F23/F24](../design/ACT-SP-048-02-package-lifecycle-and-f23-f24.md), accepted version 1.0.
- [ACT-SP-048-03 acceptance evidence](../design/ACT-SP-048-03-acceptance-evidence.md), accepted version 1.0.
- [SP-048 entitlement fixtures](../../contracts/sp-048/entitlement-lifecycle-fixtures.json), contract 1.0 with 30 synthetic scenarios.
- [SP-048 validator](../../tests/billing/validate-sp048-contract.cjs), executed successfully before publication.

## 2. Acceptance criteria

- `AC-SP-048-01` accepted for design: purchaser, provider source, beneficiary,
  club seat, enrollment, sponsorship, feature, allowance and media authority are
  explicitly separate.
- `AC-SP-048-02` accepted for design: all package values and prices are marked
  proposed/not for sale; Coach Pro and extra storage are deferred.
- `AC-SP-048-03` accepted for design: club sponsorship, included coach access,
  original-account restore, promotions and F23/F24 lifecycle states are fixed.

## 3. Binding product decisions

1. Payment never grants guardianship, membership, role, consent, media access or
   recording ownership.
2. Provider metadata contains opaque adult/organization purchaser references
   and no child data.
3. One backend ledger derives effective scoped grants from verified provider
   state; clients do not grant entitlement.
4. Family/Club overlaps retain their sources and one upload uses one allowance.
5. Coaches included by a Club licence use no player seat or separate paid coach
   plan, but still need membership/MFA/qualification/scope.
6. Cross-account purchase restore never silently transfers or aliases an
   identified purchaser; it requires the original sign-in or controlled support.
7. Coupons are adult-facing, non-stacking by default and modify price only.
   Normal, discounted and post-promotion renewal terms are disclosed.
8. Complimentary pilots end within 30 days and never convert automatically.
9. Subscription loss reconciles paid capabilities without deleting personal
   history or recordings.
10. Current store/legal/tax/provider approval remains outside this decision.

## 4. Retained limits

- No live catalogue, approved sale price, provider configuration, transaction,
  coupon or UI exists.
- `SP-049` remains the human current-store/SDK/audience review.
- `SP-052` and `SP-054` retain sandbox and operational billing evidence.
- Accountant, privacy, legal, billing-security and store approvals are not
  claimed.
- Later implementation activities must provide current runtime evidence and
  cannot reuse this design-only PASS as proof of enforcement.
