const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..', '..');
const packet = fs.readFileSync(path.join(root, 'docs/security/ACT-SP-009-01-threat-privacy-store-review-packet.md'), 'utf8');
const environment = fs.readFileSync(path.join(root, 'docs/operations/ACT-SP-012-01-repository-environment-record.md'), 'utf8');
const ci = fs.readFileSync(path.join(root, 'docs/operations/ACT-SP-012-02-ci-check-evidence.md'), 'utf8');
const evidence = fs.readFileSync(path.join(root, 'docs/operations/ACT-SP-012-03-acceptance-evidence.md'), 'utf8');
const decision = fs.readFileSync(path.join(root, 'docs/activity-decisions/ACT-SP-009-01-threat-privacy-store-review.md'), 'utf8');
const integrated = fs.readFileSync(path.join(root, 'docs/design/SP-007-SP-038-integrated-verification.md'), 'utf8');
const claudia = fs.readFileSync(path.join(root, 'docs/security/reviews/ACT-SP-009-claudia-independent-review-2026-09-16.md'), 'utf8');
const disposition = fs.readFileSync(path.join(root, 'docs/security/ACT-SP-009-02-claudia-findings-disposition.md'), 'utf8');
const gateMap = fs.readFileSync(path.join(root, 'docs/security/ACT-SP-009-consolidated-security-gate-map.md'), 'utf8');
const sharing = fs.readFileSync(path.join(root, 'docs/security/ACT-SP-009-sharing-feedback-and-reporting-classification.md'), 'utf8');
const store = fs.readFileSync(path.join(root, 'docs/security/ACT-SP-009-store-release-verification-checklist.md'), 'utf8');
const capability = fs.readFileSync(path.join(root, 'docs/security/ACT-SP-009-provider-device-capability-gates.md'), 'utf8');

const failures = [];
function requireCheck(condition, message) {
  if (!condition) failures.push(message);
}

for (let index = 1; index <= 27; index += 1) {
  const id = `S${String(index).padStart(2, '0')}`;
  requireCheck(new RegExp(`\\| ${id} \\|`).test(packet), `${id} is not mapped exactly once`);
  requireCheck((packet.match(new RegExp(`\\| ${id} \\|`, 'g')) || []).length === 1, `${id} is duplicated`);
}

for (let index = 1; index <= 20; index += 1) {
  const id = `R${String(index).padStart(2, '0')}`;
  requireCheck(new RegExp(`\\| ${id} \\|`).test(packet), `${id} is not mapped exactly once`);
  requireCheck((packet.match(new RegExp(`\\| ${id} \\|`, 'g')) || []).length === 1, `${id} is duplicated`);
}

for (let index = 1; index <= 27; index += 1) {
  const id = `S${String(index).padStart(2, '0')}`;
  requireCheck((gateMap.match(new RegExp(`\\| ${id} \\|`, 'g')) || []).length === 1, `${id} consolidated gate row is missing or duplicated`);
}

for (let index = 1; index <= 20; index += 1) {
  const id = `R${String(index).padStart(2, '0')}`;
  requireCheck((gateMap.match(new RegExp(`\\| ${id} \\|`, 'g')) || []).length === 1, `${id} consolidated gate row is missing or duplicated`);
}

for (let index = 1; index <= 8; index += 1) {
  const id = `AC-SP-012-${String(index).padStart(2, '0')}`;
  requireCheck(evidence.includes(id), `${id} has no disposition`);
}

requireCheck(packet.includes('ACT-SP-009-02` and `SP-009` remain open'), 'SP-009 open state is missing');
requireCheck(packet.includes('SP-063') && packet.includes('Accepted pilot design/setup input'), 'SP-063 accepted input is missing');
requireCheck(packet.includes('Governing cloud lifecycle decision v1.1') && packet.includes('historical v1.0 evidence'), 'SP-011 supersession is not explicit');
requireCheck(packet.includes('temporary private cloud copy') && packet.includes('not a backup'), 'no-recovery cloud copy wording is missing');
requireCheck(environment.includes('403 — Upgrade to GitHub Pro or make this repository public'), 'branch-protection limitation is missing');
requireCheck(ci.includes('cc21c9c12fadcf6c014244adc822b598b7867381'), 'CI evidence is not commit-bound');
requireCheck(ci.includes('18 pgTAP policy assertions passed'), 'database assertion count is missing');
requireCheck(evidence.includes('**PARTIAL / ACCEPTED INTERIM RISK / NOT COMPLETE**'), 'SP-012 outcome is overstated');
requireCheck(decision.includes('completes only the agent preparation activity'), 'ACT-SP-009-01 decision scope is missing');
requireCheck(decision.includes('`ACT-SP-009-02`') && decision.includes('`SP-009` remain open'), 'ACT-SP-009-01 decision overstates family closure');
requireCheck(integrated.includes('SP-007 | ACCEPTED DESIGN CONTRACT'), 'SP-007 accepted state is missing');
requireCheck(integrated.includes('SP-038 | ACCEPTED DESIGN CONTRACT'), 'SP-038 accepted state is missing');
requireCheck(integrated.includes('PLAYER-RELEASE NOT ALLOWED'), 'SP-006 player-release boundary is missing');
requireCheck(claudia.includes('1E5B1A7027B186459638D35F9DFDBBB8D515D7D5F481C645B959A840A6F9FCEB'), 'preserved review hash missing');
for (const id of ['H1', 'H2', 'H3', 'H4', 'M1', 'M2', 'M3', 'M4', 'L1']) {
  requireCheck(new RegExp(`\\| ${id} \\|`).test(disposition), `${id} disposition missing`);
}
for (const id of ['H1', 'H2', 'H3', 'L1']) {
  requireCheck(new RegExp(`\\| ${id} \\|[^\\n]*OPEN — NOT REMEDIATED`).test(disposition), `${id} must remain open`);
}
for (const id of ['H4', 'M1', 'M2', 'M3', 'M4']) {
  requireCheck(new RegExp(`\\| ${id} \\|[^\\n]*REMEDIATED`).test(disposition), `${id} remediation status missing`);
}
requireCheck(gateMap.includes('Separate dev/staging/production') && gateMap.includes('webhook authenticity/freshness') && gateMap.includes('payment CTA'), 'M1 retained obligations are incomplete');
requireCheck(gateMap.includes('Accountable owner') && gateMap.includes('Timing') && gateMap.includes('Required evidence and fallback'), 'M1 traceability columns missing');
requireCheck(sharing.includes('Local branded export') && sharing.includes('Purpose-bound private coach media grant') && sharing.includes('Safeguarding/help report'), 'H4 route classification incomplete');
requireCheck(sharing.includes('no public profile or feed') && sharing.includes('H3 blocker'), 'H4 disabled features or H3 boundary missing');
requireCheck(store.includes('Apple checklist') && store.includes('Google Play checklist') && store.includes('SDK and processor inventory') && store.includes('Network evidence'), 'M3 release checklist incomplete');
for (const phrase of ['Full-session cloud storage feasibility', 'Isolated media validation', 'Upload authorization residual', 'Fragment cleanup', 'Playback/download link', 'Tombstone and stale-client boundary']) {
  requireCheck(capability.includes(phrase), `M4 capability condition missing: ${phrase}`);
}
requireCheck(capability.includes('Downloaded/exported bytes') && capability.includes('cannot be remotely recalled'), 'M4 external-byte limitation missing');
requireCheck(packet.includes('H1, H2, H3 and L1 remain findings') && packet.includes('ACT-SP-009-02') && packet.includes('remain open'), 'open finding/family boundary missing');
requireCheck(!/SP-009[^\n]{0,50}(?:is|:)[^\n]{0,20}(?:complete|accepted)/i.test(packet), 'SP-009 is incorrectly claimed complete');
requireCheck(!/SP-012[^\n]{0,50}(?:is|:)[^\n]{0,20}(?:complete|accepted)/i.test(evidence), 'SP-012 is incorrectly claimed complete');

if (failures.length) {
  console.error(`FAIL: SP-009/SP-012 review packet (${failures.length} failure(s))`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('PASS: SP-009 bounded remediation; Claudia review preserved, H4/M1-M4 remediated, H1-H3/L1 open, 47 gates and 8 SP-012 criteria verified.');
