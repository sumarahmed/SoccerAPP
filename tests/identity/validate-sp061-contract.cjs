const assert = require('assert').strict;
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const fixture = JSON.parse(fs.readFileSync(
  path.join(root, 'contracts', 'sp-061', 'guardianship-rights-fixtures.json'),
  'utf8'
));

assert.equal(fixture.fixtureSet, 'sp-061-lean-guardianship-rights-v1');
assert.equal(fixture.contractVersion, '1.0');

const config = fixture.configuration;
assert.equal(config.firstMarket, 'Australia');
assert.equal(config.primaryDataRegion, 'Sydney');
assert.equal(config.worldwideAuthorizedAccessAllowed, true);
for (const disabled of [
  'routineIdentityDocumentCollection',
  'automaticDuplicateMergeAllowed',
  'under18AlwaysLacksPrivacyCapacity',
  'dedicatedPilotRecoveryEnabled',
  'linearMayContainPrivateCaseContent'
]) assert.equal(config[disabled], false, `${disabled} must remain false`);
assert.equal(config.secondGuardianInviteLifetimeSeconds, 7 * 24 * 60 * 60);
assert.equal(config.secondGuardianInviteSingleUse, true);
assert.equal(config.secondGuardianRequiresFreshTotp, true);
assert.equal(config.adultTransitionAgeYears, 18);
assert.equal(config.adultTransitionNoticeDays, 30);
assert.equal(config.rightsResponseTargetDays, 30);
assert.equal(config.exportPackageLifetimeSeconds, 24 * 60 * 60);
assert.equal(config.exportLinkMaximumSeconds, 300);
assert.equal(config.activeCloudMediaDays, 30);
assert.equal(config.failedFragmentCleanupSeconds, 3600);
assert.equal(config.inactiveReviewMonths, 12);
assert.equal(config.inactiveClosureMonths, 24);
assert.equal(config.closureNoticeDays, 30);
assert.equal(config.departedClubRecordMonths, 12);
assert.equal(config.routineLogDays, 30);
assert.equal(config.securityAuditMonths, 12);
assert.equal(config.revokedDeviceDetailDays, 90);
assert.equal(config.ordinarySupportAfterClosureDays, 90);
assert.equal(config.identityDocumentAfterReviewDays, 0);
assert.equal(config.rightsAndDisputeAfterClosureMonths, 12);
assert.equal(config.accountingRecordYearsProposed, 5);
assert.equal(config.deletionSuppressionDays, 30);
assert.equal(config.holdReviewDays, 30);

const byId = new Map(fixture.scenarios.map(scenario => [scenario.id, scenario]));
assert.equal(byId.size, fixture.scenarios.length, 'Scenario IDs must be unique');
assert.equal(fixture.scenarios.length, 40);

for (const id of [
  'email-alone-claims-guardian',
  'payer-claims-guardian',
  'coach-claims-guardian',
  'club-import-claims-guardian',
  'second-guardian-invite-replay',
  'second-guardian-invite-expired',
  'second-guardian-wrong-invitee',
  'second-guardian-after-issuer-revoked'
]) assert.equal(byId.get(id).expected.grant, false, `${id} must not grant guardian authority`);

assert.equal(byId.get('first-guardian-verified-attestation').expected.grant, true);
assert.equal(byId.get('second-guardian-valid-invite').expected.independentAccount, true);
assert.equal(byId.get('second-guardian-valid-invite').expected.lifetimeSeconds, config.secondGuardianInviteLifetimeSeconds);
assert.equal(byId.get('guardian-self-withdrawal').expected.ownGrantRevoked, true);
assert.equal(byId.get('guardian-removes-other').expected.immediateRemoval, false);
assert.equal(byId.get('credible-guardian-dispute').expected.newCloudUpload, false);
assert.equal(byId.get('credible-guardian-dispute').expected.localPractice, true);
assert.equal(byId.get('dispute-reporter-disclosed-automatically').expected.allowed, false);
assert.equal(byId.get('duplicate-match-by-email-name').expected.merged, false);
assert.equal(byId.get('verified-reversible-account-link').expected.destructiveMerge, false);
assert.equal(byId.get('ordinary-age-correction').expected.historyRewritten, false);
assert.equal(byId.get('age-correction-crosses-eighteen').expected.automaticAuthorityTransfer, false);
assert.equal(byId.get('coach-reads-full-birth-date').expected.allowed, false);
assert.equal(byId.get('capable-older-young-person-request').expected.automaticDenialBecauseUnder18, false);
assert.equal(byId.get('adult-transition-parent-media-access').expected.allowed, false);
assert.equal(byId.get('adult-transition-billing-continues').expected.parentDataAccess, false);
assert.equal(byId.get('adult-transition-club-membership').expected.newMediaGrant, false);
assert.equal(byId.get('adult-transition-incomplete').expected.automaticTransfer, false);
assert.equal(byId.get('access-request-current-adult').expected.targetDays, config.rightsResponseTargetDays);
assert.equal(byId.get('export-with-other-person-data').expected.releaseUnredacted, false);
assert.equal(byId.get('export-bundle-expired').expected.lifetimeSeconds, config.exportPackageLifetimeSeconds);
assert.equal(byId.get('correction-refused').expected.complaintRoute, true);
assert.equal(byId.get('deletion-with-active-store-subscription').expected.subscriptionCancellationSeparate, true);
assert.equal(byId.get('delete-with-queued-upload').expected.finalize, false);
assert.equal(byId.get('delete-reconnect-stale-device').expected.resurrect, false);
assert.equal(byId.get('cloud-media-thirty-day-expiry').expected.activeDays, config.activeCloudMediaDays);
assert.equal(byId.get('pilot-media-recovery-request').expected.available, false);
assert.equal(byId.get('narrow-legal-hold').expected.reviewDays, config.holdReviewDays);
assert.equal(byId.get('indefinite-generic-hold').expected.allowed, false);
assert.equal(byId.get('processor-deletion-failure').expected.requestComplete, false);
assert.equal(byId.get('private-rights-case-in-linear').expected.allowed, false);
assert.equal(byId.get('identity-document-after-review').expected.retainedDays, 0);
assert.equal(byId.get('worldwide-authorized-access').expected.primaryRegion, 'Sydney');
assert.equal(byId.get('provider-ai-training-on-private-media').expected.allowed, false);

console.log(
  `PASS: SP-061 lean guardianship/rights contract; ${fixture.scenarios.length} authority, transition, retention and data-rights scenarios.`
);
