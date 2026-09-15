const fs = require('fs');

const p = 'contracts/content/sp151-sp153-fixtures.json';
const c = JSON.parse(fs.readFileSync(p, 'utf8'));
const fail = message => { throw new Error(message); };
const equal = (actual, expected, message) => {
  JSON.stringify(actual) === JSON.stringify(expected) || fail(message);
};
const exactVariant = value => /^D(0[1-9]|10)\.base\.v1$/.test(value);
const expected = Array.from({ length: 10 }, (_, index) => `D${String(index + 1).padStart(2, '0')}`);

equal(c.catalog.offered, expected, 'initial catalogue must be D01-D10');
equal(c.catalog.deferred, ['D11', 'D12'], 'D11/D12 must be deferred');
c.catalog.pilotSizeIsAuthoringLimit === false || fail('pilot size cannot be an authoring limit');
c.status === 'accepted-pilot-baseline' || fail('SP-151 pilot baseline is not accepted');
c.approval.accountableOwner === 'Syed Ahmed' || fail('accountable owner missing');
c.approval.coachingApprover === 'Aaron M' || fail('coaching approver missing');
c.approval.approvedDate === '2026-09-16' || fail('approval date mismatch');
/^[A-F0-9]{64}$/.test(c.approval.sourceSha256) || fail('frozen source SHA-256 missing');

const approvedVariants = new Set(c.catalog.offered.map(id => `${id}${c.catalog.variantSuffix}`));
const isApprovedVariant = value => exactVariant(value) && approvedVariants.has(value);
const pathIds = ['ball-control', 'passing', 'move-turn', 'receive-finish'];
equal(c.pathways.map(pathway => pathway.id), pathIds, 'four approved pathways required');

for (const pathway of c.pathways) {
  pathway.learningGoal?.trim() || fail(`${pathway.id} learning goal missing`);
  pathway.entryRequirements?.length >= 5 || fail(`${pathway.id} entry requirements incomplete`);
  pathway.progressionCondition?.includes('Coach-approved') || fail(`${pathway.id} progression is not coach-controlled`);
  pathway.positionRelevance === 'advisory' || fail(`${pathway.id} position relevance must be advisory`);
  c.parentSetup[pathway.parentSetupKey]?.trim() || fail(`${pathway.id} parent setup missing`);
  pathway.steps.length > 0 || fail(`${pathway.id} has no ordered steps`);
  pathway.steps.every(isApprovedVariant) || fail(`${pathway.id} uses unavailable or inexact step variants`);

  const fallbackKeys = Object.keys(pathway.easierAlternatives);
  equal(fallbackKeys, pathway.steps, `${pathway.id} must name a fallback for every ordered step`);
  Object.values(pathway.easierAlternatives).every(value => value === null || isApprovedVariant(value)) ||
    fail(`${pathway.id} fallback uses an unavailable or symbolic variant`);

  pathway.ageSegments?.length > 0 || fail(`${pathway.id} age routes missing`);
  for (const segment of pathway.ageSegments) {
    Number.isInteger(segment.minAge) && Number.isInteger(segment.maxAge) && segment.minAge <= segment.maxAge ||
      fail(`${pathway.id} has an invalid age route`);
    segment.sequence?.length > 0 && segment.sequence.every(isApprovedVariant) ||
      fail(`${pathway.id} age route uses an unavailable or inexact variant`);
    segment.sequence.every(variant => pathway.steps.includes(variant)) ||
      fail(`${pathway.id} age route is not an ordered pathway subset`);
    const next = segment.next;
    next && typeof next === 'object' && !Array.isArray(next) || fail(`${pathway.id} next action must be typed`);
    if (next.variant) isApprovedVariant(next.variant) || fail(`${pathway.id} next variant is unavailable or symbolic`);
    if (next.variants) {
      next.variants.length > 0 && next.variants.every(isApprovedVariant) ||
        fail(`${pathway.id} branch uses an unavailable or symbolic variant`);
      next.selectionRule?.trim() || fail(`${pathway.id} branch selection rule missing`);
    }
    (next.variant || next.variants) || fail(`${pathway.id} exact next variant missing`);
  }
}

equal(c.pathways.find(pathway => pathway.id === 'ball-control').ageSegments.map(route => [route.minAge, route.maxAge]), [[5, 7], [8, 18]], 'ball-control age routes changed');
equal(c.pathways.find(pathway => pathway.id === 'passing').ageSegments.map(route => [route.minAge, route.maxAge]), [[5, 7], [8, 10], [11, 18]], 'passing age routes changed');
equal(c.pathways.find(pathway => pathway.id === 'move-turn').ageSegments.map(route => [route.minAge, route.maxAge]), [[8, 18]], 'move-turn age route changed');
equal(c.pathways.find(pathway => pathway.id === 'receive-finish').ageSegments.map(route => [route.minAge, route.maxAge]), [[8, 18]], 'receive-finish age route changed');

c.eligibility.ageAndAbilityAreSeparate === true || fail('age and ability must be separate');
c.eligibility.missingOrWithdrawnBlocksAffectedRoute === true || fail('missing or withdrawn variants must block the affected route');
c.eligibility.silentTruncationAllowed === false || fail('silent pathway truncation cannot be allowed');
c.eligibility.inventAlternativeAllowed === false || fail('unapproved alternatives cannot be invented');
c.eligibility.partnerAndReboundInterchangeableByDefault === false || fail('partner and rebound cannot be interchangeable by default');
c.precedence.length === 8 || fail('ordered precedence incomplete');

const required = ['no-equipment', 'limited-time', 'missed-session', 'younger-advanced', 'older-beginner', 'conflicting-club-assignments'];
required.every(name => c.recommendationFixtures.some(fixture => fixture.case === name && fixture.reason)) || fail('required recommendation fixture missing');
c.recommendationFixtures.every(fixture => fixture.reason && (fixture.oneAction || fixture.result.includes('no-recommendation') || fixture.case === 'offline-stale')) || fail('fixture lacks one action or explicit none');
c.invariants.completionChangesAbility === false || fail('completion cannot change ability');
c.invariants.completionChangesWorkload === false || fail('completion cannot change workload');
c.invariants.parentObservationChangesProgression === false || fail('parent observation cannot change progression');
c.invariants.coachApprovedAssessmentRequired === true || fail('coach-approved assessment must control progression');
c.invariants.positionRelevanceBlocksEligibility === false || fail('position relevance cannot block eligibility');
c.invariants.inventUnapprovedActivity === false || fail('unapproved activities cannot be invented');

c.protocols.length === 3 || fail('three skill protocols required');
c.protocols.every(protocol => protocol.recordingRequired === false && protocol.retestDays === 7) || fail('skill protocol safety/default mismatch');
['protocol-version', 'setup', 'equipment', 'surface', 'assistance', 'observation-source', 'foot-or-side'].every(field => c.comparabilityFields.includes(field)) || fail('comparability field missing');
['no-video-valid', 'unsafe-no-result', 'parent-limited-observation', 'append-only-correction'].every(name => c.skillFixtures.includes(name)) || fail('skill fixture missing');

console.log(`PASS: SP-151 accepted pathway contract and SP-152-SP-153 fixtures; ${c.pathways.length} pathways, ${c.pathways.reduce((total, pathway) => total + pathway.ageSegments.length, 0)} age routes, ${c.recommendationFixtures.length + c.skillFixtures.length} deterministic fixtures.`);
