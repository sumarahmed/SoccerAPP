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

const rules = c.recommendationRules;
rules.version === 'sp152-v1' && rules.status === 'accepted-pilot-baseline' || fail('SP-152 accepted ruleset missing');
rules.accountableOwner === 'Syed Ahmed' && rules.coachingApprover === 'Aaron M' || fail('SP-152 approval metadata missing');
rules.selectedContextRequired === true || fail('one selected context must be required');
equal(rules.editableTodayInputs, ['available-time', 'equipment', 'space', 'assistance'], 'editable inputs changed');
['content-approval', 'withdrawal', 'safety', 'age', 'assessed-ability', 'assignment-origin', 'coaching-evidence'].every(field => rules.immutableEvaluatorInputs.includes(field)) || fail('immutable evaluator input missing');
rules.assignmentConflictResult === 'no-recommendation' || fail('assignment conflicts must not be silently resolved');
rules.missingBallResult === 'no-recommendation' || fail('missing ball must not invent an activity');
rules.limitedTimeRequiresFullApprovedDuration === true || fail('limited time cannot compress an activity');
rules.missedSessionStacksWorkload === false || fail('missed sessions cannot stack workload');
rules.guardianMayRequestReassessment === true && rules.coachApprovedEvidenceChangesProgression === true || fail('reassessment authority mismatch');
rules.offline.calculateNewRecommendation === false || fail('offline mode cannot calculate a recommendation');
rules.offline.displaySignedRecommendationOnly === true || fail('offline mode must use signed recommendations only');
rules.offline.sameLocalDecisionDayOnly === true && rules.offline.maximumHours === 24 || fail('offline freshness boundary mismatch');

const required = ['no-equipment', 'limited-time', 'missed-session', 'younger-advanced', 'older-beginner', 'conflicting-club-assignments'];
const fixtureByCase = new Map(c.recommendationFixtures.map(fixture => [fixture.case, fixture]));
required.every(name => fixtureByCase.has(name)) || fail('required recommendation fixture missing');
fixtureByCase.size === c.recommendationFixtures.length || fail('duplicate recommendation fixture case');
for (const fixture of c.recommendationFixtures) {
  fixture.input && typeof fixture.input === 'object' || fail(`${fixture.case} input missing`);
  fixture.expected && typeof fixture.expected === 'object' || fail(`${fixture.case} expected output missing`);
  fixture.expected.reasonCode?.trim() || fail(`${fixture.case} reason code missing`);
  fixture.expected.explanation?.trim() || fail(`${fixture.case} explanation missing`);
  if (fixture.expected.action !== null) {
    typeof fixture.expected.action === 'object' && !Array.isArray(fixture.expected.action) || fail(`${fixture.case} must return one action object`);
    fixture.expected.action.type?.trim() || fail(`${fixture.case} action type missing`);
    isApprovedVariant(fixture.expected.action.variant) || fail(`${fixture.case} action uses an unavailable or inexact variant`);
  }
}
fixtureByCase.get('no-equipment').expected.action === null || fail('no-equipment must return no action when the ball is missing');
fixtureByCase.get('limited-time').input.candidateApprovedMinutes <= fixtureByCase.get('limited-time').input.availableMinutes || fail('limited-time fixture does not fit');
fixtureByCase.get('missed-session').expected.stackWorkload === false || fail('missed session stacks workload');
fixtureByCase.get('younger-advanced').expected.action.variant === 'D03.base.v1' || fail('younger advanced fixture bypasses the age route');
fixtureByCase.get('older-beginner').expected.action.variant === 'D01.base.v1' || fail('older beginner does not receive the foundation start');
fixtureByCase.get('conflicting-club-assignments').expected.action === null || fail('conflicting assignments must return no action');
fixtureByCase.get('offline-current').expected.calculatedOffline === false || fail('current offline result was recalculated');
fixtureByCase.get('offline-stale').expected.action === null && fixtureByCase.get('offline-stale').expected.calculatedOffline === false || fail('stale offline result must return no action without calculation');
fixtureByCase.get('completion-without-reassessment').expected.assessedAbilityAfter === fixtureByCase.get('completion-without-reassessment').input.assessedAbility || fail('completion changed assessed ability');
fixtureByCase.get('completion-without-reassessment').expected.workloadIncrease === false || fail('completion increased workload');
c.invariants.completionChangesAbility === false || fail('completion cannot change ability');
c.invariants.completionChangesWorkload === false || fail('completion cannot change workload');
c.invariants.parentObservationChangesProgression === false || fail('parent observation cannot change progression');
c.invariants.coachApprovedAssessmentRequired === true || fail('coach-approved assessment must control progression');
c.invariants.positionRelevanceBlocksEligibility === false || fail('position relevance cannot block eligibility');
c.invariants.inventUnapprovedActivity === false || fail('unapproved activities cannot be invented');

c.skillCheckRules.version === 'sp153-v1' && c.skillCheckRules.status === 'accepted-pilot-baseline' || fail('SP-153 accepted protocol catalog missing');
c.skillCheckRules.accountableOwner === 'Syed Ahmed' && c.skillCheckRules.coachingApprover === 'Aaron M' || fail('SP-153 approval metadata missing');
c.skillCheckRules.formalComparableRetestMinimumDays === 7 || fail('formal retest minimum must be seven days');
c.skillCheckRules.earlyRetest === 'valid-standalone-not-trend-comparable' || fail('early retest policy mismatch');
c.skillCheckRules.maximumReplacementAttemptsPerInvalidAttempt === 1 || fail('invalid-attempt replacement limit mismatch');
c.skillCheckRules.incompleteSafeMeasuredSetResult === 'NO_RESULT' || fail('incomplete safe measured set must produce no result');
c.skillCheckRules.recordingRequired === false || fail('recording cannot be required');
c.skillCheckRules.comparisonPopulation === 'same-player-only' || fail('comparison must be personal only');
c.skillCheckRules.ageNormsAllowed === false && c.skillCheckRules.talentScoresAllowed === false || fail('norms or talent scores cannot be allowed');
c.skillCheckRules.timerCompletionCertifiesTechnique === false || fail('timer completion cannot certify technique');
c.skillCheckRules.childReflectionCreatesFormalResult === false || fail('child reflection cannot create a formal result');
equal(c.skillCheckRules.observationSources, ['coach-observed', 'guardian-observed', 'adult-player-self-observed'], 'observation sources changed');
c.skillCheckRules.correctionMode === 'append-only' || fail('corrections must be append-only');

c.protocols.length === 3 || fail('three skill protocols required');
equal(c.protocols.map(protocol => protocol.id), ['P01-D01-v1', 'P02-D03-v1', 'P03-D05-v1'], 'protocol identities changed');
equal(c.protocols.map(protocol => protocol.drillVariant), ['D01.base.v1', 'D03.base.v1', 'D05.base.v1'], 'protocol drill bindings changed');
for (const protocol of c.protocols) {
  protocol.setup && typeof protocol.setup === 'object' || fail(`${protocol.id} setup missing`);
  protocol.familiarisation?.attempts === 1 && protocol.familiarisation.scored === false || fail(`${protocol.id} familiarisation mismatch`);
  protocol.measured?.attempts > 0 || fail(`${protocol.id} measured attempts missing`);
  protocol.unit?.trim() && protocol.result?.trim() || fail(`${protocol.id} result contract missing`);
  protocol.unsuccessfulExecution?.trim() || fail(`${protocol.id} unsuccessful-execution rule missing`);
  protocol.invalidAttempt?.length > 0 || fail(`${protocol.id} invalid-attempt rules missing`);
  protocol.permittedAssistance?.length > 0 || fail(`${protocol.id} permitted assistance missing`);
  protocol.stopConditions?.length >= 5 || fail(`${protocol.id} stop conditions incomplete`);
  protocol.recordingRequired === false && protocol.retestDays === 7 || fail(`${protocol.id} safety/default mismatch`);
}
['protocol-version', 'setup-dimensions', 'equipment-and-ball', 'surface', 'footwear', 'measured-attempt-count', 'familiarisation-and-rest', 'assistance-and-service', 'observation-source', 'foot-or-side', 'material-environment'].every(field => c.comparabilityFields.includes(field)) || fail('comparability field missing');

const skillFixtureByCase = new Map(c.skillFixtures.map(fixture => [fixture.case, fixture]));
skillFixtureByCase.size === c.skillFixtures.length || fail('duplicate skill fixture case');
['matching-conditions', 'changed-surface', 'changed-assistance', 'coach-observation', 'parent-limited-observation', 'adult-self-observation', 'no-video-valid', 'unsafe-no-result', 'missing-fields-no-result', 'unsuccessful-valid-attempt', 'external-invalid-replaced', 'too-many-invalid-no-result', 'early-retest-standalone', 'timer-completion-no-certification', 'append-only-correction'].every(name => skillFixtureByCase.has(name)) || fail('skill fixture missing');
skillFixtureByCase.get('matching-conditions').expected.comparable === true || fail('matching results must be comparable');
skillFixtureByCase.get('changed-surface').expected.valid === true && skillFixtureByCase.get('changed-surface').expected.comparable === false || fail('changed surface must remain standalone');
skillFixtureByCase.get('parent-limited-observation').expected.certifiesTechnique === false && skillFixtureByCase.get('parent-limited-observation').expected.changesProgression === false || fail('parent observation limits missing');
skillFixtureByCase.get('no-video-valid').expected.valid === true || fail('no-video result should be valid when sufficiently observed');
skillFixtureByCase.get('unsafe-no-result').expected.state === 'NO_RESULT' || fail('unsafe attempt must produce no result');
skillFixtureByCase.get('unsuccessful-valid-attempt').expected.valid === true && skillFixtureByCase.get('unsuccessful-valid-attempt').expected.attemptOutcome === 0 || fail('unsuccessful execution was treated as invalid');
skillFixtureByCase.get('external-invalid-replaced').expected.replacementAllowed === true || fail('first external invalid attempt must allow replacement');
skillFixtureByCase.get('too-many-invalid-no-result').expected.replacementAllowed === false && skillFixtureByCase.get('too-many-invalid-no-result').expected.state === 'NO_RESULT' || fail('replacement limit not enforced');
skillFixtureByCase.get('early-retest-standalone').expected.valid === true && skillFixtureByCase.get('early-retest-standalone').expected.comparable === false || fail('early retest must remain standalone');
skillFixtureByCase.get('timer-completion-no-certification').expected.certifiesTechnique === false && skillFixtureByCase.get('timer-completion-no-certification').expected.changesProgression === false || fail('timer completion changed skill state');
skillFixtureByCase.get('append-only-correction').expected.appendOnly === true && skillFixtureByCase.get('append-only-correction').expected.originalRetained === true || fail('correction history is not append-only');

console.log(`PASS: SP-151-SP-153 accepted content contracts; ${c.pathways.length} pathways, ${c.pathways.reduce((total, pathway) => total + pathway.ageSegments.length, 0)} age routes, ${c.protocols.length} skill protocols, ${c.recommendationFixtures.length + c.skillFixtures.length} deterministic fixtures.`);
