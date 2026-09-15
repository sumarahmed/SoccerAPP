const assert = require('assert').strict;
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const fixture = JSON.parse(fs.readFileSync(
  path.join(root, 'contracts', 'sp-060', 'web-media-security-fixtures.json'),
  'utf8'
));

assert.equal(fixture.fixtureSet, 'sp-060-lean-web-media-v1');
assert.equal(fixture.contractVersion, '1.0');

const config = fixture.configuration;
for (const disabled of [
  'commercialWafEnabled',
  'paidMediaScannerEnabled',
  'cloudUploadDefaultEnabled',
  'unvalidatedPromotionAllowed',
  'browserHoldsProviderRefreshToken',
  'sharedCacheForAuthenticatedResponses',
  'quarantineReadableByOrdinaryClients',
  'clientCanPromoteMedia',
  'workerOutboundNetworkEnabled',
  'userFacingResumeEnabled'
]) assert.equal(config[disabled], false, `${disabled} must remain false`);

for (const enabled of [
  'webSessionCookieHttpOnly',
  'webSessionCookieSecure',
  'csrfRequiredForCookieMutations'
]) assert.equal(config[enabled], true, `${enabled} must remain true`);

assert.equal(config.webSessionCookieSameSite, 'lax');
assert.equal(config.freshMfaWindowSeconds, 300);
assert.equal(config.staffInactivitySeconds, 900);
assert.equal(config.parentManagementInactivitySeconds, 1800);
assert.equal(config.workspaceMaximumSeconds, 28800);
assert.equal(config.signedMediaUrlMaximumSeconds, 300);
assert.equal(config.uploadCredentialMaximumSeconds, 900);
assert.equal(config.continuousUploadMaximumSeconds, 3600);
assert.equal(config.uploadInactivitySeconds, 300);
assert.equal(config.failedFragmentCleanupMaximumSeconds, 3600);
assert.equal(config.activeCloudRetentionDays, 30);
assert.equal(config.maximumLogicalDurationSeconds, 1800);
assert.equal(config.targetMaximumFramesPerSecond, 30);
assert.equal(config.maximumVideoStreamsPerFile, 1);
assert.equal(config.maximumAudioStreamsPerFile, 1);
assert.equal(config.activeUploadGroupsPerPlayerDevice, 1);
assert.equal(config.activeUploadGroupsPerHousehold, 2);
assert.equal(config.reservationsPerPlayerPerHour, 10);
assert.equal(config.reservationsPerHouseholdPerHour, 30);
assert.equal(config.validationFailuresPerPlayerPerHour, 3);
assert.equal(config.validationFailuresPerHouseholdPerDay, 10);
assert.equal(config.cloudUploadPauseSeconds, 3600);
assert.deepEqual(fixture.acceptedContainers, ['mp4', 'mov']);
assert.deepEqual(fixture.acceptedVideoCodecs, ['h264']);
assert.deepEqual(fixture.acceptedAudioCodecs, ['aac', 'none']);

const byId = new Map(fixture.scenarios.map(scenario => [scenario.id, scenario]));
assert.equal(byId.size, fixture.scenarios.length, 'Scenario IDs must be unique');
assert.equal(fixture.scenarios.length, 36);

for (const id of [
  'anonymous-family-api',
  'parent-other-household',
  'coach-unassigned-player',
  'coach-media-without-grant',
  'club-admin-family-media-by-role',
  'player-sibling-list',
  'player-billing-route',
  'stale-role-jwt',
  'stale-sensitive-mfa',
  'csrf-missing-on-cookie-mutation',
  'authenticated-response-shared-cache',
  'service-secret-in-browser',
  'realtime-cross-tenant',
  'rpc-bypasses-resource-scope',
  'quarantine-direct-read',
  'client-promotes-quarantine'
]) assert.equal(byId.get(id).expected.allowed, false, `${id} must be denied`);

for (const id of [
  'mime-extension-spoof',
  'truncated-container',
  'unexpected-hevc',
  'too-many-streams',
  'over-duration',
  'metadata-location-tag',
  'embedded-outbound-reference',
  'digest-mismatch',
  'dual-missing-secondary',
  'worker-timeout'
]) assert.equal(byId.get(id).expected.promote, false, `${id} must fail promotion`);

assert.equal(byId.get('parent-own-player-current').expected.allowed, true);
assert.equal(byId.get('coach-assigned-progress-aal2').expected.allowed, true);
assert.equal(byId.get('player-own-practice').expected.allowed, true);
assert.equal(byId.get('signed-url-current-grant').expected.maximumSeconds, config.signedMediaUrlMaximumSeconds);
assert.equal(byId.get('signed-url-after-revocation-before-expiry').expected.residualAccessPossible, true);
assert.equal(byId.get('over-duration').expected.maximumSeconds, config.maximumLogicalDurationSeconds);
assert.equal(byId.get('dual-missing-secondary').expected.partialPlayback, false);
assert.equal(byId.get('worker-timeout').expected.failClosed, true);
assert.equal(byId.get('queue-cost-circuit-open').expected.localCopyRetained, true);
assert.equal(byId.get('validation-abuse-pause').expected.wholeAccountLocked, false);
assert.equal(byId.get('validation-abuse-pause').expected.cloudUploadPausedSeconds, config.cloudUploadPauseSeconds);
assert.equal(byId.get('upload-interrupted').expected.resume, false);
assert.equal(byId.get('upload-interrupted').expected.cleanupMaximumSeconds, config.failedFragmentCleanupMaximumSeconds);
assert.equal(byId.get('complete-group-current-authority').expected.promote, true);
assert.equal(byId.get('complete-group-current-authority').expected.retentionDays, config.activeCloudRetentionDays);

console.log(
  `PASS: SP-060 lean web/media security contract; ${fixture.scenarios.length} authorization and hostile-media scenarios, cloud upload fail-closed by default.`
);
