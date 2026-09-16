const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..', '..');
const packet = fs.readFileSync(path.join(root, 'docs/security/ACT-SP-009-01-threat-privacy-store-review-packet.md'), 'utf8');
const environment = fs.readFileSync(path.join(root, 'docs/operations/ACT-SP-012-01-repository-environment-record.md'), 'utf8');
const ci = fs.readFileSync(path.join(root, 'docs/operations/ACT-SP-012-02-ci-check-evidence.md'), 'utf8');
const evidence = fs.readFileSync(path.join(root, 'docs/operations/ACT-SP-012-03-acceptance-evidence.md'), 'utf8');
const decision = fs.readFileSync(path.join(root, 'docs/activity-decisions/ACT-SP-009-01-threat-privacy-store-review.md'), 'utf8');
const integrated = fs.readFileSync(path.join(root, 'docs/design/SP-007-SP-038-integrated-verification.md'), 'utf8');

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

for (let index = 1; index <= 8; index += 1) {
  const id = `AC-SP-012-${String(index).padStart(2, '0')}`;
  requireCheck(evidence.includes(id), `${id} has no disposition`);
}

requireCheck(packet.includes('ACT-SP-009-02` and `SP-009` remain open'), 'SP-009 open state is missing');
requireCheck(packet.includes('SP-063') && packet.includes('Accepted pilot design/setup input'), 'SP-063 accepted input is missing');
requireCheck(environment.includes('403 — Upgrade to GitHub Pro or make this repository public'), 'branch-protection limitation is missing');
requireCheck(ci.includes('cc21c9c12fadcf6c014244adc822b598b7867381'), 'CI evidence is not commit-bound');
requireCheck(ci.includes('18 pgTAP policy assertions passed'), 'database assertion count is missing');
requireCheck(evidence.includes('**PARTIAL / ACCEPTED INTERIM RISK / NOT COMPLETE**'), 'SP-012 outcome is overstated');
requireCheck(decision.includes('completes only the agent preparation activity'), 'ACT-SP-009-01 decision scope is missing');
requireCheck(decision.includes('`ACT-SP-009-02`') && decision.includes('`SP-009` remain open'), 'ACT-SP-009-01 decision overstates family closure');
requireCheck(integrated.includes('SP-007 | ACCEPTED DESIGN CONTRACT'), 'SP-007 accepted state is missing');
requireCheck(integrated.includes('SP-038 | ACCEPTED DESIGN CONTRACT'), 'SP-038 accepted state is missing');
requireCheck(integrated.includes('PLAYER-RELEASE NOT ALLOWED'), 'SP-006 player-release boundary is missing');
requireCheck(!/SP-009[^\n]{0,50}(?:is|:)[^\n]{0,20}(?:complete|accepted)/i.test(packet), 'SP-009 is incorrectly claimed complete');
requireCheck(!/SP-012[^\n]{0,50}(?:is|:)[^\n]{0,20}(?:complete|accepted)/i.test(evidence), 'SP-012 is incorrectly claimed complete');

if (failures.length) {
  console.error(`FAIL: SP-009/SP-012 review packet (${failures.length} failure(s))`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('PASS: SP-009/SP-012 review packet; 27 risks, 20 review actions and 8 SP-012 criteria mapped without completion overclaim.');
