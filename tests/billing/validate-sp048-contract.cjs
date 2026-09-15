const assert = require('assert').strict;
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const fixture = JSON.parse(fs.readFileSync(path.join(root, 'contracts', 'sp-048', 'entitlement-lifecycle-fixtures.json'), 'utf8'));

assert.equal(fixture.fixtureSet, 'sp-048-entitlement-lifecycle-v1');
assert.equal(fixture.contractVersion, '1.0');
assert.equal(fixture.classification, 'synthetic');
assert.equal(fixture.catalogStatus, 'proposed_not_for_sale');

const config = fixture.configuration;
for (const key of [
  'childFacingPurchases',
  'purchaseGrantsGuardianship',
  'purchaseGrantsMediaAccess',
  'seatConsumesStaff',
  'couponStackingEnabled',
  'automaticPurchaseTransferBetweenSoccoloAccounts',
  'complimentaryPilotAutoConverts',
  'coachProAvailableInitially',
  'extraStorageAvailableInitially',
  'paymentMetadataAllowsChildData'
]) assert.equal(config[key], false, `${key} must remain false`);
assert.equal(config.maximumComplimentaryPilotDays, 30);

assert.equal(fixture.proposedCatalog.length, 8);
for (const product of fixture.proposedCatalog) {
  assert.ok(!/soccolo/i.test(product.code), `${product.code} must remain brand-neutral`);
  assert.ok(!/14\.99|119\.99|\b5\b|\b48\b/.test(product.code), `${product.code} must remain price-neutral`);
  assert.ok(['proposed_not_for_sale', 'deferred'].includes(product.status));
}
const catalog = new Map(fixture.proposedCatalog.map(product => [product.code, product]));
assert.equal(catalog.get('family_monthly_v1').cloudGb, 20);
assert.equal(catalog.get('family_annual_v1').profiles, 4);
assert.equal(catalog.get('club_seat_monthly_v1').minimumSeats, 25);
assert.equal(catalog.get('club_seat_annual_v1').cloudGbPerSeat, 5);
assert.equal(catalog.get('invited_club_coach_v1').consumesSeat, false);
assert.equal(catalog.get('coach_pro_later_v1').status, 'deferred');
assert.equal(catalog.get('extra_storage_later_v1').status, 'deferred');

assert.equal(new Set(fixture.requiredF23States).size, fixture.requiredF23States.length);
assert.equal(new Set(fixture.requiredF24States).size, fixture.requiredF24States.length);
assert.ok(fixture.requiredF23States.includes('restore_account_conflict'));
assert.ok(fixture.requiredF23States.includes('covered_by_another_source'));
assert.ok(fixture.requiredF24States.includes('capacity_full'));
assert.ok(fixture.requiredF24States.includes('coupon_invalid'));
assert.ok(fixture.requiredF24States.includes('reconciliation_mismatch'));

const expectedIds = [
  'pending-purchase-no-grant', 'verified-activation-one-grant',
  'duplicate-provider-event', 'forged-provider-event',
  'cross-environment-provider-event', 'delayed-old-event',
  'cancel-at-period-end', 'refund-or-chargeback', 'family-club-overlap',
  'one-upload-one-allowance', 'two-club-isolation', 'atomic-final-club-seat',
  'coach-invitation-included', 'seat-grants-no-authority', 'sponsorship-end',
  'restore-original-account', 'restore-other-account',
  'account-delete-subscription-separate', 'provider-metadata-child-data',
  'valid-family-coupon', 'expired-or-ineligible-coupon',
  'duplicate-coupon-redemption', 'cross-environment-coupon',
  'coupon-stacking-attempt', 'promotion-renewal-disclosure',
  'club-seat-coupon', 'promotion-removal', 'complimentary-pilot-expiry',
  'f23-child-context', 'f24-billing-contact'
];
assert.equal(fixture.scenarios.length, expectedIds.length);
assert.deepEqual(fixture.scenarios.map(item => item.id).sort(), [...expectedIds].sort());
const byId = new Map(fixture.scenarios.map(item => [item.id, item]));
assert.equal(byId.size, fixture.scenarios.length, 'Scenario IDs must be unique');
for (const scenario of fixture.scenarios) {
  assert.ok(scenario.category, `${scenario.id} requires a category`);
  assert.ok(scenario.expected && Object.keys(scenario.expected).length, `${scenario.id} requires an expected result`);
}

assert.equal(byId.get('pending-purchase-no-grant').expected.featureGranted, false);
assert.equal(byId.get('duplicate-provider-event').expected.featureGrantCount, 1);
assert.equal(byId.get('forged-provider-event').expected.accepted, false);
assert.equal(byId.get('cross-environment-provider-event').expected.productionMutation, false);
assert.equal(byId.get('delayed-old-event').expected.ledgerRolledBack, false);
assert.equal(byId.get('refund-or-chargeback').expected.personalMediaDeleted, false);
assert.equal(byId.get('family-club-overlap').expected.mediaAccessGrantedByPayment, false);
assert.equal(byId.get('one-upload-one-allowance').expected.allowanceSourcesCharged, 1);
assert.equal(byId.get('two-club-isolation').expected.crossClubAccess, false);
assert.equal(byId.get('atomic-final-club-seat').expected.capacityExceeded, false);
assert.equal(byId.get('coach-invitation-included').expected.separateCoachPurchaseRequired, false);
assert.equal(byId.get('seat-grants-no-authority').expected.guardianshipGranted, false);
assert.equal(byId.get('restore-other-account').expected.automaticTransfer, false);
assert.equal(byId.get('provider-metadata-child-data').expected.accepted, false);

assert.equal(byId.get('valid-family-coupon').expected.packageCapabilitiesChanged, false);
assert.equal(byId.get('expired-or-ineligible-coupon').expected.priceChanged, false);
assert.equal(byId.get('duplicate-coupon-redemption').expected.redemptions, 1);
assert.equal(byId.get('cross-environment-coupon').expected.productionDiscountApplied, false);
assert.equal(byId.get('coupon-stacking-attempt').expected.stacked, false);
assert.equal(byId.get('promotion-renewal-disclosure').expected.futureRenewalShown, true);
assert.equal(byId.get('club-seat-coupon').expected.discountGrantsExtraSeats, false);
assert.equal(byId.get('promotion-removal').expected.mediaDeleted, false);
assert.equal(byId.get('complimentary-pilot-expiry').expected.autoConverted, false);
assert.equal(byId.get('f23-child-context').expected.purchasePressureShown, false);
assert.equal(byId.get('f24-billing-contact').expected.billingContactGetsMediaAccess, false);

console.log(
  `PASS: SP-048 design contract; ${fixture.proposedCatalog.length} proposed/deferred products, ` +
  `${fixture.scenarios.length} billing/entitlement scenarios including promotion safety, F23 and F24.`
);
