const assert = require('assert').strict;
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const fixture = JSON.parse(fs.readFileSync(path.join(root, 'contracts', 'sp-062', 'safeguarding-accessibility-fixtures.json'), 'utf8'));
const config = fixture.configuration;

assert.equal(fixture.fixtureSet, 'sp-062-safeguarding-accessibility-v1');
assert.equal(fixture.contractVersion, '1.0');
assert.equal(config.humanSafeguardingOwnerRequired, true);
assert.equal(config.humanAlternateRequired, true);
for (const key of ['aiMayActAsSafeguardingDecisionMaker','twentyFourSevenMonitoringPromised','freeTextRequired','attachmentRequired','automaticNotifyReportedPerson','unrestrictedChildCoachMessaging','colorOnlyAllowed','cameraMicRequiredForSafePractice','sp005CoachApprovalAccepted','sp007CoreScreensAccepted','sp038AdminFlowsAccepted']) {
  assert.equal(config[key], false, `${key} must remain false`);
}
assert.equal(config.stopAlwaysAvailable, true);
assert.equal(config.webAccessibilityTarget, 'WCAG_2_2_AA');
assert.equal(config.criticalAckStaffedWindowSeconds, 3600);
assert.equal(config.ordinaryTextContrast, 4.5);
assert.equal(config.largeTextAndUiContrast, 3);
assert.equal(config.webZoomPercent, 200);
assert.equal(config.iosSafetyTargetPoints, 44);
assert.equal(config.androidSafetyTargetDp, 48);
assert.equal(config.webSafetyTargetCssPixels, 44);
assert.equal(config.releasedDrillCount, 0);

const byId = new Map(fixture.scenarios.map(item => [item.id, item]));
assert.equal(byId.size, fixture.scenarios.length, 'Scenario IDs must be unique');
assert.equal(fixture.scenarios.length, 40);
for (const id of ['coach-is-subject','guardian-is-subject','club-admin-is-subject','primary-owner-is-subject','alternate-is-subject']) {
  assert.equal(byId.get(id).expected.notifySubject, false, `${id} must not notify its subject`);
}
assert.equal(byId.get('immediate-danger').expected.waitForApp, false);
assert.equal(byId.get('stop-during-report').expected.available, true);
assert.equal(byId.get('report-without-free-text').expected.submit, true);
assert.equal(byId.get('report-without-attachment').expected.submit, true);
assert.equal(byId.get('critical-outside-staffed-window').expected.twentyFourSevenPromise, false);
assert.equal(byId.get('ai-reviews-real-allegation').expected.allowed, false);
assert.equal(byId.get('ai-contacts-authority').expected.allowed, false);
assert.equal(byId.get('web-two-hundred-percent').expected.zoomPercent, 200);
assert.equal(byId.get('color-only-status').expected.allowed, false);
assert.equal(byId.get('camera-declined').expected.safePracticeAvailable, true);
assert.equal(byId.get('missing-video-variant').expected.silentSubstitution, false);
assert.equal(byId.get('d12-goalkeeper').expected.goalkeeperReviewerRequired, true);
assert.equal(byId.get('sp007-screen-evidence').expected.complete, false);
assert.equal(byId.get('sp038-admin-evidence').expected.provisional, true);
assert.equal(byId.get('real-device-evidence').expected.complete, false);

console.log(`PASS: SP-062 safeguarding/accessibility contract; ${fixture.scenarios.length} synthetic scenarios.`);
