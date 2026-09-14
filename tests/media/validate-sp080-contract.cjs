const assert = require('assert').strict;
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const fixturePath = path.join(root, 'contracts', 'sp-080', 'export-contract-fixtures.json');
const fixture = JSON.parse(fs.readFileSync(fixturePath, 'utf8'));
const timeline = fixture.timebase;

assert.equal(fixture.schemaVersion, 1);
assert.equal(fixture.contractVersion, '1.0');
assert.deepEqual(timeline.supportedOutputFps, [25, 30]);
assert.equal(timeline.fixedPlateSeconds + timeline.dissolveSeconds, timeline.introSeconds);
assert.equal(timeline.sourceMotionStartsAtSeconds, timeline.introSeconds);
assert.equal(timeline.defaultOutro, false);
assert.equal(timeline.rangeConvention, 'half-open [startFrame,endFrame)');

const allIds = [];
for (const item of [...fixture.timelineCases, ...fixture.chapterCases,
                    ...fixture.operationTransitions, ...fixture.copyShareCases]) {
  allIds.push(item.id);
}
assert.equal(new Set(allIds).size, allIds.length, 'fixture IDs must be unique');

for (const item of fixture.timelineCases) {
  assert.ok(timeline.supportedOutputFps.includes(item.fps));
  const intro = timeline.introSeconds * item.fps;
  const plate = timeline.fixedPlateSeconds * item.fps;
  const dissolve = timeline.dissolveSeconds * item.fps;
  const outro = (item.outroRequested ? timeline.optionalOutroSeconds : 0) * item.fps;
  assert.equal(Number.isInteger(intro), true);
  assert.equal(Number.isInteger(plate), true);
  assert.equal(Number.isInteger(dissolve), true);
  assert.deepEqual(item.expected, {
    introFrames: intro,
    fixedPlateFrames: plate,
    dissolveFrames: dissolve,
    sourceStartFrame: intro,
    outroFrames: outro,
    outputFrames: intro + item.sourceFrames + outro,
    outputHasAudio: item.sourceHasAudio
  });
}

for (const item of fixture.chapterCases) {
  const intro = timeline.introSeconds * item.fps;
  assert.equal(item.expectedOutputFrames, intro + item.sourceFrames);
  let previousPartEnd = 0;
  for (const part of item.parts) {
    assert.equal(part.sourceStartFrame, previousPartEnd, `${item.id}: parts must cover the presentation timeline contiguously`);
    assert.ok(part.sourceEndFrame > part.sourceStartFrame);
    assert.ok(part.captureGapBeforeMs >= 0);
    previousPartEnd = part.sourceEndFrame;
  }
  assert.equal(previousPartEnd, item.sourceFrames);
  for (const chapter of item.chapters) {
    assert.ok(chapter.sourceStartFrame >= 0);
    assert.ok(chapter.sourceEndFrame > chapter.sourceStartFrame);
    assert.ok(chapter.sourceEndFrame <= item.sourceFrames);
    assert.equal(chapter.expectedExportStartFrame, intro + chapter.sourceStartFrame);
    assert.equal(chapter.expectedExportEndFrame, intro + chapter.sourceEndFrame);
  }
}

for (const item of fixture.operationTransitions) {
  assert.equal(item.sourceMutation, false, `${item.id}: source mutation is forbidden`);
  assert.equal(item.shareInvoked, false, `${item.id}: composition never invokes sharing`);
  if (item.to !== 'local-export-ready') assert.equal(item.publishedOutput, false);
  if (item.to.startsWith('failed') || item.to === 'cancelled') assert.equal(item.stagingRetained, false);
}

const defaultReady = fixture.copyShareCases.find(item => item.id === 'SH-01-READY-IS-LOCAL');
assert.equal(defaultReady.createsExternalCopy, false);
assert.equal(defaultReady.invokesShareSheet, false);
const denied = fixture.copyShareCases.find(item => item.id === 'SH-05-AUTHORITY-REVOKED');
assert.equal(denied.authorityCurrent, false);
assert.equal(denied.createsExternalCopy, false);
assert.equal(denied.invokesShareSheet, false);
for (const item of fixture.copyShareCases) {
  if (!item.authorityCurrent) {
    assert.equal(item.expected, 'denied-authority');
    assert.equal(item.createsExternalCopy, false);
    assert.equal(item.invokesShareSheet, false);
  }
}

console.log(`PASS: SP-080 contract ${fixture.contractVersion}; ${fixture.timelineCases.length} timelines, ${fixture.chapterCases.length} chapter maps, ${fixture.operationTransitions.length} operation transitions and ${fixture.copyShareCases.length} copy/share cases.`);
