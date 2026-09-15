const assert = require('assert').strict;
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const fixture = JSON.parse(fs.readFileSync(
  path.join(root, 'contracts', 'sp-059', 'identity-assurance-fixtures.json'),
  'utf8'
));

assert.equal(fixture.fixtureSet, 'sp-059-lean-pilot-identity-v1');
assert.equal(fixture.contractVersion, '1.0');

const config = fixture.configuration;
assert.equal(config.adultMfaMethod, 'totp');
for (const disabled of ['smsMfaEnabled', 'passkeysEnabled', 'enterpriseSsoEnabled', 'socialLoginCountsAsMfa', 'emailRecoveryGrantsProtectedAccess', 'customRecoveryCodesEnabled']) {
  assert.equal(config[disabled], false, `${disabled} must remain false for the lean pilot`);
}
assert.equal(config.freshMfaWindowSeconds, 300);
assert.equal(config.pairingCodeLifetimeSeconds, 600);
assert.equal(config.pairingCodeSingleUse, true);
assert.equal(config.recoveryEnrollmentTokenLifetimeSeconds, 900);
assert.equal(config.recoveryResult, 'enrollment_only');
assert.equal(config.revokeExistingSessionsAfterRecovery, true);
assert.equal(config.childEmailRequired, false);
assert.equal(config.childAuthenticatorRequired, false);
assert.equal(config.playerCredentialContainsAdultRefreshToken, false);
assert.equal(config.lastRequiredFactorRemovalAllowed, false);

assert.deepEqual(fixture.alwaysMfaRoles, [
  'platform_administrator',
  'club_administrator',
  'coach'
]);

for (const action of ['enable_cloud', 'view_private_cloud_media', 'share_private_media', 'change_guardian', 'pair_player_device', 'change_factor', 'export_private_data']) {
  assert.ok(fixture.adultStepUpActions.includes(action), `Missing step-up action ${action}`);
}
for (const action of ['read_sibling_data', 'manage_billing', 'change_guardian', 'enable_cloud', 'share_private_media', 'administer_club', 'grant_consent']) {
  assert.ok(fixture.playerDeniedActions.includes(action), `Missing player denial ${action}`);
}

const byId = new Map(fixture.scenarios.map(scenario => [scenario.id, scenario]));
assert.equal(byId.size, fixture.scenarios.length, 'Scenario IDs must be unique');
assert.equal(fixture.scenarios.length, 24);

assert.equal(byId.get('admin-aal1').expected.allowed, false);
assert.equal(byId.get('coach-aal1-direct-api').expected.allowed, false);
assert.equal(byId.get('parent-local-only-aal1').expected.scope, 'local_only');
assert.equal(byId.get('parent-private-media-aal1').expected.allowed, false);
assert.equal(byId.get('social-login-without-totp').expected.assurance, 'aal1');
assert.equal(byId.get('fresh-sensitive-action').expected.maximumAgeSeconds, config.freshMfaWindowSeconds);
assert.equal(byId.get('stale-sensitive-action').expected.next, 'fresh_totp');
assert.equal(byId.get('remove-last-required-factor').expected.allowed, false);
assert.equal(byId.get('promoted-coach-without-factor').expected.scope, 'enrollment_only');
assert.deepEqual(byId.get('second-factor-replacement').expected.order, [
  'verify_backup',
  'enroll_replacement',
  'verify_replacement',
  'remove_lost',
  'revoke_old_sessions'
]);
assert.equal(byId.get('email-only-all-factors-lost').expected.protectedAccess, false);
assert.equal(byId.get('manual-recovery-approved').expected.scope, 'enrollment_only');
assert.equal(byId.get('manual-recovery-approved').expected.tokenLifetimeSeconds, config.recoveryEnrollmentTokenLifetimeSeconds);
assert.equal(byId.get('recovery-token-replay').expected.allowed, false);
assert.equal(byId.get('recovery-token-expired').expected.allowed, false);
assert.equal(byId.get('recovery-completed').expected.oldSessionsValid, false);
assert.equal(byId.get('pairing-code-valid').expected.lifetimeSeconds, config.pairingCodeLifetimeSeconds);
assert.equal(byId.get('pairing-code-second-use').expected.allowed, false);
assert.equal(byId.get('pairing-code-expired').expected.allowed, false);
assert.equal(byId.get('player-reads-sibling').expected.allowed, false);
assert.equal(byId.get('player-enables-cloud').expected.allowed, false);
assert.equal(byId.get('shared-device-restart').expected.mode, 'restricted_player');
assert.equal(byId.get('adult-return').expected.requiresDeliberateUnlock, true);
assert.equal(byId.get('revoked-player-device-renewal').expected.allowed, false);
assert.equal(byId.get('support-asks-for-live-totp').expected.allowed, false);

console.log(
  `PASS: SP-059 lean identity contract; TOTP-only MFA, ${fixture.scenarios.length} assurance/recovery/shared-device scenarios, no paid identity add-on.`
);
