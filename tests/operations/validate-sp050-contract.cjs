const assert = require('assert').strict;
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const fixturePath = path.join(root, 'contracts', 'sp-050', 'pilot-hosting-fixtures.json');
const fixture = JSON.parse(fs.readFileSync(fixturePath, 'utf8'));

assert.equal(fixture.fixtureSet, 'sp-050-lean-pilot-hosting-v1');
assert.equal(fixture.contractVersion, '1.0');

const config = fixture.configuration;
assert.equal(config.primaryDataRegion, 'ap-southeast-2');
assert.equal(config.globalDeliveryAllowed, true);
assert.equal(config.strictAustraliaOnlyProcessingClaim, false);
assert.deepEqual(config.environments, ['development', 'pilot_production']);
assert.equal(config.paidStagingDeferred, true);
assert.equal(config.developmentUsesSyntheticOrAdultData, true);
assert.equal(config.productionSecretsAvailableToPreview, false);
assert.equal(config.privateStorage, true);
assert.equal(config.personalizedSharedCdnCacheAllowed, false);
assert.equal(config.publicStaticSharedCdnCacheAllowed, true);
assert.equal(config.dedicatedRecoveryEnabled, false);
assert.equal(config.crossRegionMediaCopyEnabled, false);
assert.equal(config.pitrEnabled, false);
assert.equal(config.customerRpoHours, null);
assert.equal(config.customerRtoHours, null);
assert.equal(config.recoveryPromise, false);
assert.equal(config.retainOriginalOnDeviceGuidance, true);
assert.equal(config.spendCapRequiredWhereAvailable, true);

const expectedIds = [
  'sydney-primary',
  'generic-apac-primary',
  'global-public-cdn',
  'global-private-transit',
  'personalized-shared-cache',
  'private-response-no-store',
  'development-production-secret-reuse',
  'production-data-in-preview',
  'dedicated-melbourne-recovery',
  'pitr-addon',
  'customer-rpo-claim',
  'customer-rto-claim',
  'provider-default-backup',
  'database-backup-called-media-backup',
  'pilot-original-device-message',
  'paid-service-without-owner-approval',
  'post-pilot-recovery-promise'
];

assert.equal(fixture.scenarios.length, expectedIds.length);
const byId = new Map(fixture.scenarios.map(scenario => [scenario.id, scenario]));
assert.equal(byId.size, fixture.scenarios.length, 'Scenario IDs must be unique');
assert.deepEqual([...byId.keys()].sort(), [...expectedIds].sort());

for (const scenario of fixture.scenarios) {
  assert.ok(scenario.expected && typeof scenario.expected.accepted === 'boolean', `${scenario.id} requires an accepted result`);
  if (!scenario.expected.accepted) assert.ok(scenario.expected.reason, `${scenario.id} requires a rejection reason`);
}

assert.equal(byId.get('sydney-primary').expected.accepted, true);
assert.equal(byId.get('global-public-cdn').expected.sharedCache, true);
assert.equal(byId.get('global-private-transit').expected.authorizationRequired, true);
assert.equal(byId.get('personalized-shared-cache').expected.accepted, false);
assert.equal(byId.get('development-production-secret-reuse').expected.accepted, false);
assert.equal(byId.get('dedicated-melbourne-recovery').expected.reason, 'deferred_for_pilot');
assert.equal(byId.get('pitr-addon').expected.reason, 'deferred_cost');
assert.equal(byId.get('provider-default-backup').expected.customerPromise, false);
assert.equal(byId.get('database-backup-called-media-backup').expected.accepted, false);
assert.equal(byId.get('pilot-original-device-message').expected.required, true);
assert.equal(byId.get('post-pilot-recovery-promise').expected.accepted, false);

console.log(
  `PASS: SP-050 lean pilot contract; Sydney primary, global delivery allowed, ` +
  `${fixture.scenarios.length} environment/cost/recovery scenarios, no dedicated pilot recovery or RPO/RTO promise.`
);
