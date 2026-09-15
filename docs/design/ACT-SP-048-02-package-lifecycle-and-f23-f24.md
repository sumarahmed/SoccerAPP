# ACT-SP-048-02 — Package lifecycle and F23/F24 contract

| Field | Recorded value |
|---|---|
| Activity | `ACT-SP-048-02` — Specify package and lifecycle presentation |
| Source | `SP-048` — Define packaging and entitlement contract |
| Specification version | 1.0 accepted |
| Decision date | 15 September 2026 |
| Status | Accepted by Syed Ahmed; complete as a design/specification activity |
| Repository base | `f49305313d0437c75b3b201a4389f7efe3c5bf3c` on `main` |
| Executor | Codex acting as Billing design agent |
| Accountable owner | Syed Ahmed acting as Founder/backend lead |
| Required later reviewer | Billing/security reviewer; accountant, store/audience and privacy review remain required before sale |
| Predecessor | Accepted [ACT-SP-048-01 entitlement domain and overlap](ACT-SP-048-01-entitlement-domain-and-overlap.md), version 1.0 |
| Deliverable | Proposed catalog and purchase-source lifecycle/state matrix |

## 1. Catalogue status

Every value in this section is `proposed_not_for_sale`. Acceptance approves a
research and implementation-planning baseline, not commercial launch, supplier
pricing, tax treatment or permission to configure a live product.

| Package | Proposed price | Proposed value | Fixed boundary |
|---|---:|---|---|
| Starter | Free | One player; six approved foundation drills; demonstrations, timer, both local recording modes and personal history | No hosted-video allowance; existing local recordings and safe Starter practice do not depend on payment |
| Family monthly | AUD 14.99/month, GST-inclusive assumption | Up to four player profiles, released premium programs/paths, home-plan tools, parent controls and 20 GB optional shared cloud allowance | Thirty-day cloud-copy expiry; no promise of an unlimited or unfinished content catalogue |
| Family annual | AUD 119.99/year, GST-inclusive assumption | Same versioned benefits as Family monthly for the verified annual period | Renewal price/date and saving comparison must be accurate at checkout |
| Club monthly | AUD 5 per licensed player/month before GST assumption; 25-seat minimum | Club workspace, teams, calendar, approved plan tools, assignments, scoped progress and 5 GB per licensed seat pooled with safeguards | Proposed minimum AUD 125/month; staff excluded; payment grants no guardian/media authority |
| Club annual | AUD 48 per licensed player/year before GST assumption; 25-seat minimum | Same versioned club benefits for the contracted annual period | Proposed minimum AUD 1,200/year; reduction timing and invoices must be explicit |
| Invited club coach | Included in club licence | Assigned coaching workspace and authorized tools | No separate paid coach plan; membership/MFA/qualification/scope still required |
| Independent Coach Pro | Later; proposed AUD 29/month or AUD 249/year | Proposed professional workspace for up to 20 active client relationships | Not available in initial release; client content/cloud entitlements remain separate |
| Extra storage | Later; no price | Deliberately selected higher allowance | Not available until measured storage, playback, recovery and support cost evidence exists |
| Complimentary club pilot | No charge; maximum 30 days | Explicit temporary seats/capacity and named sponsor/source | Exact end date; no payment method required and no automatic paid conversion |

Stable internal product codes exclude the Soccolo brand and displayed price, for
example `family_monthly_v1` and `club_seat_annual_v1`. A price change creates a
new provider price/catalog version while historical purchases retain their
original meaning.

Before sale, willingness-to-pay research, current store configuration, cost
stress, GST/tax and accounting review must replace or explicitly approve these
assumptions.

## 2. Intended purchase sources, subject to SP-049

| Offering | Intended source and management route |
|---|---|
| Starter | No purchase |
| Family in native app | Apple/Google billing coordinated through RevenueCat, only if approved by `SP-049` |
| Family on web | Stripe Checkout/Billing only where current store/linking rules permit; manage in Stripe portal |
| Club | Stripe Billing/invoice or an attributable approved contract route |
| Invited coach | No purchase; derived from a valid club membership and assignment |
| Complimentary pilot | Internal sponsorship authorization; no provider subscription |
| Coach Pro / extra storage | Deferred, unavailable products |

The interface always displays the actual source and sends the adult to that
source's correct management/cancellation route. It does not imply that Soccolo
can directly cancel an Apple/Google subscription or that deleting a Soccolo
account automatically cancels provider billing.

## 3. Subscription and entitlement lifecycle

| Provider/ledger state | Required behavior and presentation |
|---|---|
| `pending` / authentication required | Show pending; grant nothing unless a separate explicit bounded trial exists |
| `trialing` | Show source, price after trial, exact end and cancellation route; derive only the trial's approved benefits |
| `active` | Derive current product benefits after provider verification and beneficiary checks |
| `grace` / billing retry | Apply only the provider/contract's verified grace end; explain it to the adult; do not invent a universal period |
| `past_due` / account hold | Preserve Starter, local history/media and authorized existing cloud lifecycle; grant paid access only while verified policy permits |
| `cancelled_at_period_end` | Preserve benefits until verified effective end and show non-renewal plus management route |
| `paused` | Follow provider current state; show effective limits without deleting personal history/media |
| `expired` | Stop new premium downloads and sponsored uploads; preserve Starter/local state and existing cloud copies until their own expiry |
| `refunded` / `chargeback` | Reconcile paid capabilities; never delete personal recordings as punishment |
| `superseded` / upgraded | Preserve source chain and apply provider effective/proration rules; do not double-grant |

Cancellation, account deletion, local-data deletion, consent withdrawal and
cloud-media deletion are distinct actions. Account deletion must explain the
provider subscription and management route but cannot make cancellation a
precondition for a legitimate data-rights request.

## 4. Restore and purchaser-account conflict

Purchase/restore starts in a verified adult Soccolo account. RevenueCat uses an
identified opaque App User ID and is configured to keep a transaction with its
original identified Soccolo purchaser rather than silently transfer or alias it
between accounts.

Restore performs these steps:

1. authenticate the adult and selected household context;
2. initiate the provider-supported restore/status refresh deliberately;
3. verify provider authenticity, environment and current transaction state;
4. match the opaque purchaser binding and original transaction/token chain;
5. recalculate benefits for the original authorized beneficiary; and
6. show the restored package/source or a privacy-safe conflict.

If a purchase is already bound to another Soccolo account, show `This purchase
is linked to another Soccolo account`. Reveal no household/player identity.
Require sign-in to the original account or a controlled adult support route; do
not move the transaction automatically.

Restore can recover eligible paid entitlement plus authorized cloud metadata
and unexpired cloud objects. It does not restore guardianship, club roles,
sharing grants, deleted state or local-only files from a previous device.

## 5. Promotion/coupon lifecycle

Before confirmation, adult-facing purchase presentation shows:

- normal price and discounted price;
- currency and current tax/GST presentation;
- discount type, eligibility and redemption limit;
- start/end or number of discounted billing periods;
- price and renewal date after the promotion;
- whether provider rules permit cancellation, refund or plan change; and
- that the associated package—not the coupon itself—defines benefits.

Coupon stacking is off by default. Invalid, expired, already redeemed,
ineligible, cross-environment or wrong-product codes change nothing and reveal
no other purchaser. A duplicated provider event creates one redemption and one
entitlement effect.

Removing or expiring a promotion changes future price according to the provider
terms; it does not delete history/media or end an otherwise active paid period.
Complimentary pilots have a visible end date and never convert automatically.

## 6. F23 — Adult subscriptions

F23 is available only in an authenticated adult context. It must show:

- current package, status and every active coverage source;
- store, web, club or complimentary origin;
- normal/promotional price, currency, GST/tax treatment, billing interval and
  renewal/effective end date;
- included profiles, features and optional cloud allowance;
- exact trial, discount and verified grace-period terms;
- overlap between Family and club sponsorship before another checkout;
- `Restore purchases` plus its account-binding explanation;
- correct source-specific manage/cancel route and refund guidance; and
- what Starter, history, local media and existing cloud copies retain after
  expiry.

Required states include loading, no purchase, pending, authentication required,
trial, active, grace, cancelled-at-period-end, expired, restore in progress,
restore complete, purchase-account conflict, provider unavailable and current
entitlement with another source.

Children receive no price, coupon, countdown, billing failure, upgrade prompt or
purchase pressure. An age-appropriate child route may state that some content
is unavailable, without making the child responsible for asking an adult to
pay.

## 7. F24 — Club billing and seats

F24 requires an authorized club billing/admin context and current assurance. It
must show:

- contracted capacity, assigned seats and available seats;
- player assignments separately from membership/enrollment state;
- staff/coach count separately, marked as non-seat-consuming;
- pending additions/reductions and effective dates;
- unit and total price, currency, GST/tax treatment and invoice source;
- exact disclosed proration or delayed-renewal effect before confirmation;
- billing contact separately from club permissions;
- subscription/contract status, renewal date and correct management route;
- promotion or complimentary-pilot terms and end date; and
- a persistent explanation that payment/seat allocation grants no guardianship
  or private-video access.

Adding seats is atomic and requires confirmation of the price/effective result.
Reductions take effect at renewal by default unless the exact reviewed contract
says otherwise. Unexpected usage-based seat additions and silent overage
billing are prohibited.

Required states include capacity available/full, assignment pending, scheduled
increase/reduction, invoice/payment pending, active, grace/past due, cancelled,
pilot ending, coupon valid/invalid and reconciliation mismatch.

## 8. Truthful overlap and management copy

| Condition | Required message intent |
|---|---|
| Family already active | Identify source and renewal; explain overlapping club value before allowing another purchase |
| Club covers assignment | `This club covers assigned training. Family remains optional for independent household programs and its own allowance.` |
| Restore conflict | `This purchase is linked to another Soccolo account.` No identity disclosure |
| Club seat full | Explain capacity and authorized administrator route; do not direct a child to pay |
| Promotion ends | Show exact future price and effective renewal before confirmation |
| Subscription expires | `Starter, completed history and recordings on this device remain available.` |
| Sponsorship ends | Show date new club-funded benefits stop and preserve displayed existing cloud expiry |
| Account deletion | Explain that provider billing may require separate cancellation through the named source |

## 9. Retained limits

- All prices, product codes and promotion examples remain proposed and not live.
- `SP-049` must approve current Australian store routes, SDK/audience behavior
  and child-facing purchase boundaries.
- Provider sandbox purchase, restore, refund, coupon, webhook and seat tests
  remain for `SP-052`; production reconciliation remains for `SP-054`.
- No accountant, lawyer, Apple, Google, RevenueCat or Stripe approval is claimed.
- F23/F24 are written state contracts, not implemented or usability-tested
  screens.
