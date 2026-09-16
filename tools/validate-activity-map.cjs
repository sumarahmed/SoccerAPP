const assert = require('assert').strict;
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const template = fs.readFileSync(path.join(root, 'site', 'activity-map', 'template.html'), 'utf8');
const outputPath = path.join(root, 'site', 'activity-map', 'dist', 'index.html');
const output = fs.readFileSync(outputPath, 'utf8');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'packages', 'soccer_agent_activity_package_20260908', 'docs', 'soccer_agent_activity_manifest.json'), 'utf8'));

assert.equal((template.match(/__ACTIVITY_DATA__/g) || []).length, 1);
assert.equal((template.match(/__STATUS_OVERRIDES__/g) || []).length, 1);
assert.ok(!output.includes('__ACTIVITY_DATA__'));
assert.ok(!output.includes('__STATUS_OVERRIDES__'));
assert.ok(fs.existsSync(path.join(root, 'site', 'activity-map', 'dist', '.nojekyll')));

const dataLine = output.split(/\r?\n/).find(line => line.startsWith('  const data = '));
const statusLine = output.split(/\r?\n/).find(line => line.startsWith('  const statusOverrides = '));
assert.ok(dataLine && statusLine, 'Generated data declarations are missing');
const data = JSON.parse(dataLine.slice('  const data = '.length, -1));
const statusOverrides = JSON.parse(statusLine.slice('  const statusOverrides = '.length, -1));

assert.equal(data.activities.length, manifest.activities.length);
assert.equal(data.topologicalOrder.length, manifest.activities.length);
assert.equal(data.edgeCount, manifest.activities.reduce((total, activity) => total + activity.dependencies.length, 0));
assert.equal(data.rootCount, manifest.activities.filter(activity => activity.dependencies.length === 0).length);
assert.ok(data.acceptedDecisions.some(decision => decision.source === 'SP-001' && decision.acceptance === 'AC-SP-001-01'));
assert.ok(data.acceptedDecisions.some(decision => decision.source === 'SP-005' && decision.acceptance === 'AC-SP-005-01 through AC-SP-005-05'));
assert.ok(data.acceptedDecisions.some(decision => decision.source === 'SP-080' && decision.acceptance === 'AC-SP-080-01 through AC-SP-080-04'));
assert.ok(data.acceptedDecisions.some(decision => decision.source === 'SP-010' && decision.acceptance === 'AC-SP-010-01 through AC-SP-010-08'));
assert.ok(data.acceptedDecisions.some(decision => decision.source === 'SP-011' && decision.acceptance === 'AC-SP-011-01 through AC-SP-011-08'));
assert.ok(data.acceptedDecisions.some(decision => decision.source === 'SP-050' && decision.acceptance === 'AC-SP-050-01 through AC-SP-050-02'));
assert.ok(data.acceptedDecisions.some(decision => decision.source === 'SP-059' && decision.acceptance === 'AC-SP-059-01 through AC-SP-059-02'));
assert.ok(data.acceptedDecisions.some(decision => decision.source === 'SP-060' && decision.acceptance === 'AC-SP-060-01 through AC-SP-060-02'));
assert.ok(data.acceptedDecisions.some(decision => decision.source === 'SP-061' && decision.acceptance === 'AC-SP-061-01 through AC-SP-061-02'));
assert.ok(data.acceptedDecisions.some(decision => decision.source === 'SP-062' && decision.acceptance === 'AC-SP-062-01 through AC-SP-062-02'));
assert.ok(data.activityDecisions.some(decision => decision.activity === 'ACT-SP-080-01'));
assert.ok(data.activityDecisions.some(decision => decision.activity === 'ACT-SP-011-01'));
assert.ok(data.activityDecisions.some(decision => decision.activity === 'ACT-SP-038-01'));
assert.ok(data.activityDecisions.some(decision => decision.activity === 'ACT-SP-038-02'));
assert.ok(data.activityDecisions.some(decision => decision.activity === 'ACT-SP-006-01'));
assert.equal(statusOverrides['ACT-SP-001-01'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-001-02'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-009-02'].status, undefined, 'Owner exception must not mark SP-009 accepted');
assert.equal(statusOverrides['ACT-SP-009-02'].statusLabel, 'Open · risk exception');
assert.ok(statusOverrides['ACT-SP-009-02'].exceptionLabel.includes('specialist review remain unresolved'));
assert.ok(statusOverrides['ACT-SP-009-02'].evidenceUrl.endsWith('/docs/security/ACT-SP-009-02-owner-risk-exception.md'));
assert.equal(statusOverrides['ACT-SP-012-03'].status, undefined, 'Interim route must not mark SP-012 accepted');
assert.equal(statusOverrides['ACT-SP-012-03'].statusLabel, 'Open · interim route');
assert.ok(statusOverrides['ACT-SP-012-03'].exceptionLabel.includes('SP-012 and iOS verification remain open'));
assert.ok(statusOverrides['ACT-SP-012-03'].evidenceUrl.endsWith('/docs/operations/SP-012-windows-android-ios-development-route.md'));
assert.equal(statusOverrides['ACT-SP-005-01'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-005-02'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-006-01'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-006-02'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-007-01'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-080-01'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-080-02'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-080-03'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-010-01'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-011-01'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-011-02'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-011-03'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-038-01'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-038-02'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-038-03'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-047-01'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-047-02'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-047-03'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-048-01'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-048-02'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-048-03'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-050-01'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-050-02'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-050-03'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-059-01'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-059-02'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-059-03'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-060-01'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-060-02'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-060-03'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-061-01'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-061-02'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-061-03'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-062-01'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-062-02'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-062-03'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-063-01'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-063-02'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-063-03'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-077-01'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-077-02'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-077-03'].status, 'Accepted');
assert.ok(template.includes("(activity.status ? '✓ ' : activity.exceptionLabel ? '⚠ ' : '') + shortId(id)"), 'Completed activities need a checkmark and open exceptions need a warning');
assert.ok(template.includes("activity.status ? 'done' : ''"), 'Completed activities need a dedicated visual state');
assert.ok(template.includes("selector: 'node.done'"), 'Completed activity styling is missing');
assert.ok(template.includes("selector: 'node.exception'"), 'Open risk exception styling is missing');
assert.ok(template.includes('const acceptedEvidenceLink ='), 'Accepted evidence link must not shadow the accepted-evidence collection');
assert.ok(!template.includes('const acceptedEvidence = document.'), 'Accepted evidence collection is shadowed in its initialization block');

for (const decision of data.acceptedDecisions) {
  assert.ok(fs.existsSync(path.join(root, ...decision.relativePath.split('/'))), `Missing evidence file ${decision.relativePath}`);
}
for (const decision of data.activityDecisions) {
  assert.ok(fs.existsSync(path.join(root, ...decision.relativePath.split('/'))), `Missing activity evidence file ${decision.relativePath}`);
}

const inlineScripts = [...output.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)];
assert.ok(inlineScripts.length > 0);
for (const [, script] of inlineScripts) new Function(script);

console.log('PASS: generated activity map matches the manifest, accepted decisions and evidence files; inline JavaScript parses.');
