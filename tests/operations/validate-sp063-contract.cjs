const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..', '..');
const fixture = JSON.parse(fs.readFileSync(path.join(root, 'contracts/operations/sp063-operator-controls.json'), 'utf8'));
const access = fs.readFileSync(path.join(root, 'docs/operations/ACT-SP-063-01-privileged-access-and-key-custody.md'), 'utf8');
const recovery = fs.readFileSync(path.join(root, 'docs/operations/ACT-SP-063-02-recovery-and-compatibility-runbooks.md'), 'utf8');
const evidence = fs.readFileSync(path.join(root, 'docs/operations/ACT-SP-063-03-acceptance-evidence.md'), 'utf8');

const failures = [];
const requireCheck = (condition, message) => { if (!condition) failures.push(message); };

requireCheck(fixture.contract === 'soccolo-sp063-operator-controls-v1' && fixture.version === '1.0', 'contract identity/version missing');
requireCheck(fixture.status === 'accepted-pilot-operations-design-setup', 'accepted pilot setup status missing');
requireCheck(fixture.costPosture === 'free-plan-pilot', 'free-plan posture missing');
requireCheck(fixture.recoveryPosture.dedicatedBackup === false, 'pilot must not claim dedicated backup');
requireCheck(fixture.recoveryPosture.customerRpoPromise === false && fixture.recoveryPosture.customerRtoPromise === false, 'pilot must not claim RPO/RTO');
requireCheck(fixture.recoveryPosture.participantDataRestoreClaim === false, 'pilot must not claim participant restore');
requireCheck(fixture.requiredHumanConfirmations.length === 5, 'five current human confirmations required');
requireCheck(fixture.humanConfirmationState === 'all-five-owner-attested-2026-09-16', 'owner confirmation state missing');
requireCheck(fixture.tabletopState === 'passed-written-response-paths-no-destructive-live-test', 'tabletop boundary missing');
requireCheck(fixture.roles.alternateRecoveryCustodian === 'confirmed-private-register', 'private alternate confirmation missing');
requireCheck(fixture.services.some(service => service.id === 'supabase-pilot-production' && service.state === 'not-provisioned'), 'Supabase production gate missing');
requireCheck(fixture.prohibitedSecretLocations.includes('public-repository') && fixture.prohibitedSecretLocations.includes('agent-prompt'), 'secret destination prohibitions missing');

for (const risk of ['R10', 'R11', 'R15', 'R16', 'R18']) {
  requireCheck(fixture.riskCoverage.includes(risk), `${risk} fixture coverage missing`);
  requireCheck(evidence.includes(risk), `${risk} evidence mapping missing`);
}

for (const topic of ['backup factor', 'alternate', 'deletion authority', 'audit', 'API key']) {
  requireCheck(access.toLowerCase().includes(topic.toLowerCase()), `access topic missing: ${topic}`);
}

for (const topic of ['auth and configuration rebuild', 'Content withdrawal', 'Older-client compatibility', 'Tabletop rehearsal']) {
  requireCheck(recovery.toLowerCase().includes(topic.toLowerCase()), `recovery topic missing: ${topic}`);
}

requireCheck(evidence.includes('**ACCEPTED FOR PILOT OPERATIONS DESIGN/SETUP / RUNTIME AND INDEPENDENT REVIEW RETAINED**'), 'SP-063 acceptance boundary missing');
requireCheck(!/\b(?:ghp|github_pat|lin_api|sbp)_[A-Za-z0-9_-]{12,}\b/.test(`${access}\n${recovery}\n${evidence}`), 'credential-like value found in public docs');

if (failures.length) {
  console.error(`FAIL: SP-063 operator contract (${failures.length} failure(s))`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('PASS: SP-063 accepted pilot operations setup; five controls owner-attested, tabletop bounded, R10/R11/R15/R16/R18 mapped.');
