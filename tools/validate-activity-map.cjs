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
assert.ok(data.acceptedDecisions.some(decision => decision.source === 'SP-080' && decision.acceptance === 'AC-SP-080-01 through AC-SP-080-04'));
assert.ok(data.acceptedDecisions.some(decision => decision.source === 'SP-010' && decision.acceptance === 'AC-SP-010-01 through AC-SP-010-08'));
assert.ok(data.acceptedDecisions.some(decision => decision.source === 'SP-011' && decision.acceptance === 'AC-SP-011-01 through AC-SP-011-08'));
assert.ok(data.activityDecisions.some(decision => decision.activity === 'ACT-SP-080-01'));
assert.ok(data.activityDecisions.some(decision => decision.activity === 'ACT-SP-011-01'));
assert.equal(statusOverrides['ACT-SP-001-01'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-001-02'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-080-01'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-080-02'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-080-03'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-010-01'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-011-01'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-011-02'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-011-03'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-047-01'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-047-02'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-047-03'].status, 'Accepted');
assert.equal(statusOverrides['ACT-SP-048-01'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-048-02'].status, 'Completed');
assert.equal(statusOverrides['ACT-SP-048-03'].status, 'Accepted');
assert.ok(template.includes("(activity.status ? '✓ ' : '') + shortId(id)"), 'Completed activities need an always-visible checkmark');
assert.ok(template.includes("activity.status ? 'done' : ''"), 'Completed activities need a dedicated visual state');
assert.ok(template.includes("selector: 'node.done'"), 'Completed activity styling is missing');
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
