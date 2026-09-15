# ACT-SP-048-03 — SP-048 acceptance evidence

| Field | Review value |
|---|---|
| Activity | `ACT-SP-048-03` — Verify and hand off: Define packaging and entitlement contract |
| Source | `SP-048` |
| Evidence version | 1.0 accepted |
| Evidence date | 15 September 2026 |
| Status | Accepted by Syed Ahmed; `ACT-SP-048-01`, `-02`, `-03` and `SP-048` complete as design/specification work |
| Repository base | `f49305313d0437c75b3b201a4389f7efe3c5bf3c` on `main` before completion revision |
| Executor | Codex acting as QA/Billing design agent |
| Accountable owner | Syed Ahmed acting as Founder/backend lead |
| Required later reviewer | Billing/security reviewer; accountant, store/audience and privacy review before sale |
| Evidence scope | Design contract and synthetic fixture validation only; no provider transaction or live product claimed |

## 1. Exact evidence set

| Artifact | Version / identity | SHA-256 |
|---|---|---|
| [ACT-SP-048-01 entitlement domain and overlap](ACT-SP-048-01-entitlement-domain-and-overlap.md) | Accepted version 1.0 | `BC490A9FA561F930746A2C711A57672D2893ECF85710DF5B94A5DDC898E15D36` |
| [ACT-SP-048-02 package lifecycle and F23/F24](ACT-SP-048-02-package-lifecycle-and-f23-f24.md) | Accepted version 1.0 | `121389346D7CDE1C08C1EDA7BDA32B9A757AF7968AF923AA37BFE57C3B73B860` |
| [SP-048 entitlement fixtures](../../contracts/sp-048/entitlement-lifecycle-fixtures.json) | `sp-048-entitlement-lifecycle-v1`; contract 1.0; 30 synthetic scenarios | `519D9DE93C75EDD0E47481F904C65FDC41D1164D9311661A895024F19CDFC8FB` |
| [Dependency-free fixture validator](../../tests/billing/validate-sp048-contract.cjs) | Local Node validator | `ABD5BC03F0CA4192ADB9209016C9BFDC2E25D6806D5D16C7057F42AA885E42D7` |
| [SP-037 hierarchy and scoped capabilities](../decisions/SP-037-hierarchy-and-scoped-capabilities.md) | Accepted version 1.2 | Existing accepted decision |
| [SP-084 shared contract](../decisions/SP-084-versioned-domain-and-api-contracts.md) | Accepted version 1.0 | Existing accepted decision |

## 2. Checks actually performed

Command:

```powershell
node tests/billing/validate-sp048-contract.cjs
```

Observed result:

```text
PASS: SP-048 design contract; 8 proposed/deferred products, 30
billing/entitlement scenarios including promotion safety, F23 and F24.
```

The validator checked:

- every catalogue entry remains proposed or deferred rather than live;
- product codes are brand- and price-neutral;
- Family profile/storage and Club minimum-seat/storage values match the
  reviewed planning baseline;
- child purchases, purchase-derived authority, staff seat consumption, coupon
  stacking, cross-account automatic transfer and pilot auto-conversion remain
  disabled;
- all required F23 and F24 lifecycle/presentation states are unique and present;
- all 30 scenario IDs are unique; and
- provider, overlap, seat, restore, privacy, promotion, deletion and
  presentation outcomes preserve the accepted boundaries.

The full documentation validator was also run after recording the decision. It
checked repository-relative links, canonical source/package parity and the
generated activity-map status. It did not contact a billing provider.

## 3. Source acceptance assessment

| Criterion | Outcome | Evidence and retained limit |
|---|---|---|
| `AC-SP-048-01` — Buyer/beneficiary/provider/seat/grant separation | **PASS — design/fixture** | `ACT-SP-048-01` defines 17 separate record roles and 10 overlap cases; fixtures reject payment-derived guardianship/media access and cross-club pooling; no database/API exists |
| `AC-SP-048-02` — Catalog and prices marked proposed | **PASS — design/fixture** | Eight proposed/deferred entries; every price is `proposed_not_for_sale`; Coach Pro and extra storage deferred; accountant/store/customer research remains open |
| `AC-SP-048-03` — Sponsorship, free coach invitations, restore and F23/F24 | **PASS — design/fixture** | Club sponsorship and zero-seat coach boundary, controlled original-account restore, lifecycle states and written F23/F24 contracts are covered; no provider/UI test exists |

Promotional coupons are an accepted extension across all three criteria: their
record/authority boundary is in `-01`, disclosure/lifecycle in `-02`, and eight
promotion scenarios plus F23/F24 cases in the fixture/evidence set.

## 4. Accepted outcomes

1. Purchaser, billing contact, provider customer/transaction/subscription,
   beneficiary, seat, enrollment, sponsorship, feature grant, storage allowance
   and media grant remain separate records.
2. Payment changes no guardianship, club role, coaching qualification, consent,
   enrollment, data ownership or media permission.
3. Provider metadata contains no child identity, roster, session or recording
   data; opaque adult/organization purchaser references are used.
4. A backend ledger derives effective capabilities from verified current
   provider state and exact beneficiary/eligibility records.
5. Family and Club benefits may overlap as separately sourced grants; each
   upload uses one allowance and multiple clubs remain isolated.
6. One Club seat means one allocated player capacity. Staff/coach accounts do
   not consume seats, and seat allocation grants no protected authority.
7. Invited club coaches need no separate purchase but still require valid
   membership, MFA, qualification and scope.
8. Starter, Family and Club values remain proposed. Coach Pro and extra storage
   are deferred; a complimentary pilot is bounded to 30 days with no automatic
   paid conversion.
9. Promotions are adult-facing, provider-specific, non-stacking by default and
   affect price only. Normal/discounted/future renewal values must be disclosed.
10. Restore is deliberate and bound to the original identified adult Soccolo
    purchaser. A conflicting account receives no automatic transfer or foreign
    identity disclosure.
11. Refund, chargeback, cancellation and expiry reconcile paid features without
    deleting personal history or recordings.
12. F23/F24 expose source, price/tax/renewal, coverage, restore/cancel, seats,
    proration, promotions and the no-guardian/no-media authority boundary.

## 5. Scenario groups

| Group | Accepted result |
|---|---|
| Provider authenticity/environment/order | Forged and cross-environment events mutate nothing; duplicate/delayed events cannot duplicate or roll back grants |
| Lifecycle | Pending grants nothing; cancellation preserves verified period; refund/chargeback does not delete personal media |
| Overlap/allowance | Valid benefits union with sources retained; one upload charges one source; clubs do not pool access/storage |
| Seats/coaches | Capacity is atomic; staff consume no seat; seat/invitation grants no guardian or media authority |
| Sponsorship | Ending stops new funded allocation while preserving authorized history and existing cloud expiry |
| Restore/deletion | Original purchaser can restore entitlement; another account gets no transfer/disclosure; data deletion and provider cancellation remain separate |
| Privacy | Child data in provider metadata is rejected |
| Promotions | Valid, invalid, duplicate, cross-environment, stacking, renewal, club-seat, removal and pilot-expiry outcomes are explicit |
| F23/F24 | Child context shows no price/coupon/pressure; billing contact gains no admin or media access |

## 6. Retained risks and gates

1. No Apple, Google, RevenueCat or Stripe product, price, webhook, customer,
   transaction, coupon, restore or sandbox was configured or exercised.
2. `SP-049` must perform the current Australian store-route, SDK/audience,
   privacy and purchase-journey review; this decision cannot make those routes
   legally or platform appropriate.
3. `SP-052` must verify purchase, duplicate/out-of-order event, restore, refund,
   coupon and environment behavior in actual provider sandboxes.
4. `SP-054` must implement and verify production ledger, seat, invoice, tax,
   refund, support and monthly reconciliation controls.
5. Prices, GST assumptions, commissions, customer demand and unit economics are
   not approved for sale and require refreshed evidence.
6. Written F23/F24 behavior is not a visual design, implemented screen,
   accessibility result or usability finding.
7. No real child, household, club, purchaser, payment method or provider secret
   was used.

## 7. Reviewer checklist and outcome

- [x] Buyer, provider source, beneficiary, seat, enrollment and grants are separate.
- [x] Payment grants no guardianship, role, consent or media authority.
- [x] Catalogue and all prices are visibly proposed/not for sale.
- [x] Club sponsorship and included invited-coach behavior are explicit.
- [x] Original-account restore and cross-account conflict behavior are explicit.
- [x] Promotions/coupons have eligibility, disclosure, renewal, no-stacking and privacy rules.
- [x] F23 and F24 include all required lifecycle and failure states.
- [x] Thirty synthetic scenarios pass the dependency-free validator.
- [x] Store, tax, sandbox, implementation and specialist limits remain open.

Syed Ahmed reviewed and accepted the complete `ACT-SP-048` family and the
promotional-coupon extension, authorized all activities and `SP-048` to be
marked complete, and authorized commit and GitHub publication on 15 September
2026.

This closes SP-048 as design/specification work only. It does not approve live
prices, a storefront route, a processor configuration or production billing.
