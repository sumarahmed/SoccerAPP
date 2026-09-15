const assert = require('assert').strict;
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const fixturePath = path.join(root, 'contracts', 'sp-011', 'cloud-lifecycle-fixtures.json');
const fixture = JSON.parse(fs.readFileSync(fixturePath, 'utf8'));

assert.equal(fixture.fixtureSet, 'sp-011-cloud-lifecycle-v1');
assert.equal(fixture.contractVersion, '1.0');

const config = fixture.configuration;
assert.equal(config.resumableUploadEnabled, false, 'User-facing resumable upload must remain disabled');
assert.equal(config.unstartedReservationLifetimeSeconds, 15 * 60);
assert.ok(config.uploadCredentialLifetimeSeconds <= 15 * 60);
assert.equal(config.maximumContinuousUploadAttemptSeconds, 60 * 60);
assert.ok(config.uploadInactivityTimeoutSeconds <= 5 * 60);
assert.ok(config.fragmentCleanupDeadlineSeconds <= 60 * 60);
assert.ok(config.playbackUrlLifetimeSeconds <= 5 * 60);
assert.equal(config.activeCloudRetentionDays, 30);
assert.equal(config.noncurrentRecoveryDays, 7);
assert.equal(config.serverTimeAuthoritative, true);
assert.equal(config.quarantineReadable, false);
assert.equal(config.quarantineIncludedInRecovery, false);
assert.equal(config.retryStartsAtByteZero, true);

for (const [name, value] of Object.entries(fixture.quotaInvariants)) {
  if (name === 'equation') continue;
  if (name === 'recoveryBytesCountAgainstCustomerAllowance' || name === 'automaticDeletionToMakeSpace') {
    assert.equal(value, false, `${name} must remain false`);
  } else {
    assert.equal(value, true, `${name} must remain true`);
  }
}
assert.equal(
  fixture.quotaInvariants.equation,
  'availableBytes = limitBytes - usedBytes - reservedBytes'
);

assert.deepEqual(fixture.authorizationCheckpoints, [
  'reservation',
  'uploadAdmission',
  'finalization',
  'newRetry',
  'playbackUrlMint',
  'externalShareGrant',
  'deleteOrWithdraw',
  'allowanceMigration'
]);

assert.deepEqual(fixture.reconnectOrder, [
  'refreshAuthority',
  'applySuppression',
  'applyDeviceDeletion',
  'pullCurrentState',
  'submitSessionEvents',
  'createNewUploadReservations'
]);

const expectedScenarioIds = [
  'concurrent-final-quota',
  'duplicate-reservation-identical',
  'operation-reuse-changed-payload',
  'unstarted-reservation-expiry',
  'transient-same-attempt-retry',
  'interrupted-upload-restart',
  'withdraw-while-queued',
  'withdraw-during-transfer',
  'delete-during-verification',
  'dual-group-one-view-missing',
  'actual-bytes-exceed-reservation',
  'expiry-with-live-playback-url',
  'offline-stale-reupload',
  'delete-everywhere-reconnect',
  'restore-after-newer-tombstone',
  'fragment-cleanup-deadline-failure',
  'sponsorship-ends-active-copy'
];

assert.equal(fixture.scenarios.length, expectedScenarioIds.length);
assert.deepEqual(
  fixture.scenarios.map(scenario => scenario.id).sort(),
  [...expectedScenarioIds].sort()
);

const byId = new Map(fixture.scenarios.map(scenario => [scenario.id, scenario]));
assert.equal(byId.size, fixture.scenarios.length, 'Scenario IDs must be unique');
for (const scenario of fixture.scenarios) {
  assert.ok(scenario.category, `${scenario.id} requires a category`);
  assert.ok(scenario.expected && Object.keys(scenario.expected).length, `${scenario.id} requires expected results`);
}

assert.deepEqual(byId.get('concurrent-final-quota').expected, {
  acceptedReservations: 1,
  oversubscribed: false,
  loserState: 'quota_paused'
});
assert.equal(byId.get('duplicate-reservation-identical').expected.quotaChargedTwice, false);
assert.equal(byId.get('operation-reuse-changed-payload').expected.mutationCount, 0);
assert.equal(byId.get('unstarted-reservation-expiry').expected.expiresAfterSeconds, config.unstartedReservationLifetimeSeconds);
assert.equal(byId.get('transient-same-attempt-retry').expected.userResumeOffered, false);
assert.equal(byId.get('transient-same-attempt-retry').expected.attemptCeilingSeconds, config.maximumContinuousUploadAttemptSeconds);

const interrupted = byId.get('interrupted-upload-restart').expected;
assert.equal(interrupted.cleanupRequestedImmediately, true);
assert.equal(interrupted.cleanupDeadlineSeconds, config.fragmentCleanupDeadlineSeconds);
assert.equal(interrupted.fragmentsReusable, false);
assert.equal(interrupted.retryStartsAtByte, 0);

assert.equal(byId.get('withdraw-while-queued').expected.uploadStarts, false);
assert.equal(byId.get('withdraw-during-transfer').expected.finalization, 'dependency_revoked');
assert.equal(byId.get('delete-during-verification').expected.cloudAvailable, false);
assert.equal(byId.get('dual-group-one-view-missing').expected.cloudAvailable, false);
assert.equal(byId.get('actual-bytes-exceed-reservation').expected.borrowedCapacity, false);
assert.equal(
  byId.get('expiry-with-live-playback-url').expected.existingUrlMaximumResidualSeconds,
  config.playbackUrlLifetimeSeconds
);
assert.equal(byId.get('offline-stale-reupload').expected.suppressionAppliedBeforeUpload, true);
assert.equal(byId.get('delete-everywhere-reconnect').expected.deviceDeletionAppliedBeforeUpload, true);
assert.equal(byId.get('restore-after-newer-tombstone').expected.restoredObjectReadable, false);
assert.equal(byId.get('fragment-cleanup-deadline-failure').expected.operatorAlert, true);
assert.equal(byId.get('fragment-cleanup-deadline-failure').expected.quotaReleased, false);
assert.equal(byId.get('sponsorship-ends-active-copy').expected.sponsorMediaAccess, false);

console.log(
  `PASS: SP-011 review contract; resumable upload disabled, ${fixture.scenarios.length} race scenarios, ` +
  `${config.fragmentCleanupDeadlineSeconds / 60}-minute fragment cleanup ceiling and ` +
  `${config.playbackUrlLifetimeSeconds / 60}-minute playback URL maximum.`
);
