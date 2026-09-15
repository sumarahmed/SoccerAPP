const assert = require('assert').strict;
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const fixturePath = path.join(root, 'contracts', 'sp-047', 'reconciliation-fixtures.json');
const fixture = JSON.parse(fs.readFileSync(fixturePath, 'utf8'));

assert.equal(fixture.fixtureSet, 'sp-047-reconciliation-v1');
assert.equal(fixture.contractVersion, '1.0');
assert.equal(fixture.classification, 'synthetic');

const config = fixture.configuration;
assert.equal(config.maximumOfflineValidityDays, 7);
assert.equal(config.maximumAutomaticAttemptsPerSyncRun, 5);
assert.equal(config.maximumSyncRunSeconds, 15 * 60);
assert.equal(config.serverTimeAuthoritative, true);
assert.equal(config.timestampsResolveSecurityConflicts, false);
assert.equal(config.mediaResumeEnabled, false);
assert.equal(config.mediaAutomaticFullRestart, false);
assert.equal(config.mediaRetryStartsAtByteZero, true);
assert.equal(config.freeContentAfterPremiumExpiry, true);
assert.equal(config.localHistoryAfterPremiumExpiry, true);
assert.equal(config.localMediaAfterPremiumExpiry, true);

assert.deepEqual(fixture.idempotencyScope, [
  'principalId',
  'selectedContextId',
  'commandType',
  'operationId'
]);

assert.deepEqual(fixture.reconciliationOrder, [
  'refreshIdentityAndContext',
  'refreshAuthorityAndServerTime',
  'applyWithdrawalSuppressionAndDeviceDeletion',
  'forceAuthorizedResyncWhenCursorUntrusted',
  'pullPermittedCurrentState',
  'submitIdempotentSessionEvents',
  'resolveRemainingAuthorizedCommands',
  'offerNewMediaReservationOrByteZeroRestart'
]);

const expectedF25States = [
  'offline_valid',
  'offline_verification_required',
  'practice_updates_waiting',
  'cloud_uploads_waiting',
  'upload_interrupted_restart',
  'retrying_small_event',
  'conflict_needs_attention',
  'authority_changed',
  'account_switch_warning',
  'premium_expired_local_retained',
  'fully_reconciled'
];
assert.deepEqual(fixture.requiredF25States, expectedF25States);

const expectedScenarioIds = [
  'operation-retry-identical',
  'operation-reuse-changed-payload',
  'crash-before-outbox-commit',
  'response-lost-after-server-accept',
  'event-duplicate-and-gap',
  'cursor-expired-forces-resync',
  'offline-edit-versus-newer-plan',
  'offline-upload-versus-newer-delete',
  'withdrawal-while-upload-queued',
  'delete-everywhere-old-device-reconnect',
  'account-switch-with-unsynced-work',
  'premium-expires-offline',
  'premium-expires-during-session',
  'device-clock-rollback',
  'concurrent-household-plan-edits',
  'membership-removed-before-replay',
  'interrupted-media-byte-zero-restart',
  'terminal-error-not-retried'
];

assert.equal(fixture.scenarios.length, expectedScenarioIds.length);
assert.deepEqual(fixture.scenarios.map(item => item.id).sort(), [...expectedScenarioIds].sort());
const byId = new Map(fixture.scenarios.map(item => [item.id, item]));
assert.equal(byId.size, fixture.scenarios.length, 'Scenario IDs must be unique');
for (const scenario of fixture.scenarios) {
  assert.ok(scenario.category, `${scenario.id} requires a category`);
  assert.ok(scenario.expected && Object.keys(scenario.expected).length, `${scenario.id} requires an expected result`);
}

assert.equal(byId.get('operation-retry-identical').expected.domainEffects, 1);
assert.equal(byId.get('operation-reuse-changed-payload').expected.secondMutationApplied, false);
assert.equal(byId.get('crash-before-outbox-commit').expected.partialLocalStateVisible, false);
assert.equal(byId.get('response-lost-after-server-accept').expected.newOperationCreated, false);
assert.equal(byId.get('event-duplicate-and-gap').expected.gapAppliedSilently, false);
assert.equal(byId.get('cursor-expired-forces-resync').expected.pushBeforeResync, false);
assert.equal(byId.get('offline-edit-versus-newer-plan').expected.silentOverwrite, false);
assert.equal(byId.get('offline-upload-versus-newer-delete').expected.resourceResurrected, false);
assert.equal(byId.get('withdrawal-while-upload-queued').expected.uploadStarted, false);
assert.equal(byId.get('delete-everywhere-old-device-reconnect').expected.deviceDeletionBeforeUpload, true);
assert.equal(byId.get('account-switch-with-unsynced-work').expected.crossContextCopy, false);

const expired = byId.get('premium-expires-offline').expected;
assert.equal(expired.newPremiumSessionAllowed, false);
assert.equal(expired.freeContentAvailable, true);
assert.equal(expired.localHistoryAvailable, true);
assert.equal(expired.localMediaAvailable, true);
assert.equal(byId.get('premium-expires-during-session').expected.activeSessionMayFinish, true);
assert.equal(byId.get('device-clock-rollback').expected.offlineValidityExtended, false);
assert.equal(byId.get('concurrent-household-plan-edits').expected.silentLastWriteWins, false);
assert.equal(byId.get('membership-removed-before-replay').expected.foreignDetailsRevealed, false);

const mediaRestart = byId.get('interrupted-media-byte-zero-restart').expected;
assert.equal(mediaRestart.automaticFullRestart, false);
assert.equal(mediaRestart.fragmentsReusable, false);
assert.equal(mediaRestart.retryStartsAtByte, 0);
assert.equal(byId.get('terminal-error-not-retried').expected.automaticRetry, false);

console.log(
  `PASS: SP-047 reconciliation contract; ${fixture.scenarios.length} synthetic scenarios, ` +
  `${config.maximumOfflineValidityDays}-day offline maximum, delete-wins ordering and F25 states verified.`
);
