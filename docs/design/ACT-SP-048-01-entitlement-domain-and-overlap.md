# ACT-SP-048-01 — Entitlement domain and overlap contract

| Field | Recorded value |
|---|---|
| Activity | `ACT-SP-048-01` — Model purchase ownership and beneficiaries |
| Source | `SP-048` — Define packaging and entitlement contract |
| Specification version | 1.0 accepted |
| Decision date | 15 September 2026 |
| Status | Accepted by Syed Ahmed; complete as a design/specification activity |
| Repository base | `f49305313d0437c75b3b201a4389f7efe3c5bf3c` on `main` |
| Executor | Codex acting as Billing design agent |
| Accountable owner | Syed Ahmed acting as Founder/backend lead |
| Required later reviewer | Billing/security reviewer; accountant, store/audience and privacy review remain required before sale |
| Predecessors | Accepted `ACT-SP-001-02` and `ACT-SP-037-03` |
| Deliverable | Entitlement domain model and overlap examples |

## 1. Scope and non-authority rule

This contract separates money, product access and protected-person authority.
A successful payment may fund a package, seat or allowance. It never by itself
establishes guardianship, club membership, staff status, coaching qualification,
player enrollment, consent, media access, sharing authority or ownership of a
recording.

The backend entitlement ledger is the single effective-access projection. It is
derived from authenticated current provider state plus Soccolo's separate
beneficiary and eligibility records. A client purchase-success screen, cached
receipt, role title or payer identity cannot grant access directly.

`SP-049` still owns the current Apple/Google purchase-route and child-audience
review. `SP-052` must exercise real provider sandboxes. `SP-054` owns production
reconciliation, refunds, invoices and cost operations. This design acceptance
does not approve a price for sale, a provider configuration or legal/tax
treatment.

## 2. Canonical record model

| Record | Purpose and mandatory separation |
|---|---|
| `purchaser` | Verified adult or legal organization responsible for payment; never a child profile |
| `billing_contact` | Adult contact used for invoices/support; grants no workspace or media permission |
| `provider_customer` | Environment-scoped provider reference mapped to one purchaser; provider payload contains no child data |
| `provider_transaction` | Immutable source transaction/order and verification state |
| `provider_subscription` | Provider product, period, renewal and current lifecycle independent of Soccolo role |
| `catalog_product_version` | Stable internal product code, version, included capabilities and proposed/approved sale status |
| `promotion` | Provider/source, eligibility, discount, duration, redemption and stacking rules; grants no capability alone |
| `beneficiary` | Exact household or club workspace for which valid product value is intended |
| `licensed_seat` | One contracted club player-capacity unit; not a login, staff member or permission |
| `seat_assignment` | Time-bounded allocation of a seat to an eligible enrolled player within the exact club |
| `player_enrollment` | Separate membership link; payment or seat allocation cannot create it implicitly |
| `sponsorship` | Club/complimentary funding source and effective boundary for specified assigned value |
| `feature_grant` | Derived capability, scope, source, validity and generation used by authorization checks |
| `storage_allowance` | Separately governed byte capacity and source; never media-viewing authority |
| `media_grant` | Guardian/adult-authorized access to exact private media; completely independent of payment |
| `provider_event_receipt` | Durable event identity, payload digest, environment, verification and processing result |
| `entitlement_reconciliation_receipt` | Inputs/generations used to calculate the effective ledger and its differences |

All external provider identifiers are encrypted or otherwise protected at rest
as appropriate and excluded from ordinary analytics. Internal joins use opaque
identifiers. Payment metadata must not contain a child's name, email, date or
year of birth, player ID, club roster information, recording ID, session ID or
media path.

## 3. Purchaser and provider attribution

An authenticated adult selects the exact household or authorized club workspace
before checkout. Soccolo creates a pending purchase intent that binds purchaser,
beneficiary, catalog version, provider/environment and an opaque correlation
identity before opening the provider flow.

Recommended provider mapping:

| Route | Opaque attribution and verification boundary |
|---|---|
| Apple | `appAccountToken` maps to Soccolo's adult purchaser, and signed transaction/subscription state is verified server-side |
| Google | Obfuscated adult account identifier plus unique purchase token; current purchase state is checked with the Play Developer API |
| RevenueCat | Stable identified App User ID derived from an opaque Soccolo adult-purchaser ID; anonymous purchase ownership is not the normal path |
| Stripe | Environment-scoped Customer and Subscription map to the adult/organization purchaser; authenticated webhooks and current objects feed reconciliation |
| Manual club contract | Attributable approved contract/invoice record; never represented as an Apple/Google/Stripe transaction |

Provider IDs are not authorization tokens. Sandbox and production customers,
products, events, secrets and ledgers are disjoint. A sandbox event can never
mutate a production entitlement.

## 4. Product, grant and allowance derivation

A verified product is a source of candidate benefits. The ledger derives one or
more scoped `feature_grant` and `storage_allowance` records only when the
provider state, purchaser mapping, beneficiary, product version, eligibility
and effective time all agree.

Each derived record retains its source. Effective access is the union of valid
grants for the selected context, not a destructive merge of subscriptions.
When one source ends, the ledger recalculates; a capability still covered by a
different valid source remains available.

Storage does not stack implicitly. Every cloud upload selects exactly one valid
allowance source under accepted `SP-011`; the same bytes are never charged to
Family and Club simultaneously. Multiple club memberships retain separate
allowance and workspace boundaries.

## 5. Club seat contract

One paid seat is capacity for one eligible enrolled player in one exact club.
Coaches, staff, billing contacts and administrators consume no player seat.

- Allocation and release are atomic against the contracted capacity generation.
- A player can occupy no more than one active seat from the same contract at a
  time.
- A seat assignment does not create enrollment, guardianship, role, consent or
  media access.
- Removing a seat ends future sponsored benefits at the recorded effective time
  without deleting authorized history or personal media.
- Reassignment closes the previous allocation before the replacement begins and
  preserves an attributable history.
- A seat reduction scheduled for renewal does not silently evict players before
  its effective date.
- A club administrator must see price/proration and resulting capacity before
  confirming an increase.

## 6. Invited coach boundary

An invited club coach requires no separate paid Coach plan to perform their
assigned club role. The invitation is not itself access: verified membership,
required MFA, current scope, qualification and any distinct edit/review/publish
capabilities must pass.

The included-coach benefit does not grant Family premium content, a personal
cloud allowance, guardianship, club-wide recordings or authority outside the
sponsoring club. Coach departure removes future club capability without
altering household ownership or the adult's separately purchased package.

## 7. Promotions, coupons and complimentary access

A promotion affects price or trial terms only. It never independently creates a
feature, seat, allowance, role or media permission. Promotions are adult-facing
and provider/source specific:

- Apple/Google Family promotions use provider-supported offer mechanisms;
- Stripe web/club promotions use configured coupons or promotion codes;
- a complimentary pilot is a sponsorship record with explicit capacity and end
  date, not a hidden coupon or subscription; and
- manual support cannot invent an undocumented discount or entitlement.

The promotion record includes opaque promotion ID, provider/environment,
eligible catalog version, purchaser/beneficiary class, discount form/value,
duration, redemption limit, valid interval, renewal behavior and stacking
policy. No child information is stored in provider promotion metadata.

Coupon stacking is disabled by default. A single checkout may apply only the
provider-supported promotion explicitly shown before confirmation. Duplicate
delivery or redemption returns the original receipt and never creates another
discount or grant. Expired, ineligible, cross-environment or changed-product
redemption is rejected without entitlement mutation.

## 8. Overlap examples

| Situation | Required effective outcome |
|---|---|
| Family plus one club | Household retains Family tools/20 GB; club covers only eligible assigned content and its exact sponsored allowance |
| Family ends while club remains | Club-assigned benefits continue; independent Family programs/allowance stop at verified Family end |
| Club sponsorship ends while Family remains | Family benefits continue; no new club-sponsored allocation; history and existing cloud expiry remain |
| Two clubs sponsor one player | Each club's content, seat and allowance stay separate; no cross-club roster/media access or automatic pooled storage |
| Parent is also coach | Purchaser, household and coach grants remain separate and are evaluated in the active context |
| Existing Family before second checkout | Show current source/coverage and block or clearly divert duplicate purchase; never silently cancel the first source |
| Club seat assigned to enrolled player | Sponsored capability may derive; seat still grants no media access or guardian status |
| Coach invited | Coach seat price remains zero; access waits for membership/MFA/scope checks |
| Coupon applied to Family | Price changes for the disclosed period; package capabilities remain the exact Family product version |
| Complimentary pilot ends | Temporary grants expire without automatic paid conversion or surprise charge |

## 9. Provider event and ledger safety

Every provider event is treated as untrusted input until its signature or
authenticated delivery is verified, environment/audience is correct, immutable
provider event identity is deduplicated, and current provider state is obtained
where required. The event is a reconciliation signal; arrival order or a client
assertion does not decide current entitlement.

The first durable event receipt and entitlement effect are transactionally
linked. An identical duplicate returns the receipt. An older delayed event may
trigger reconciliation but cannot roll current state backwards. Refund,
chargeback, replacement-token and subscription-link relationships are preserved
without treating a new provider token as a second beneficiary.

Authorization reads only the derived current ledger and its generation. Billing
support may inspect restricted payment/reconciliation records but receives no
routine private-media permission.

## 10. Retained limits

- Exact provider products, prices and promotions are not created by this design.
- Current store-route and child-audience compliance remains for `SP-049`.
- Provider authenticity, event ordering, restore and refund behavior require
  sandbox proof in `SP-052` and operational reconciliation in `SP-054`.
- Tax/GST, invoices, consumer terms and accounting treatment require qualified
  review before sale.
- No real purchaser, child, transaction, coupon, provider key or payment method
  was used.
