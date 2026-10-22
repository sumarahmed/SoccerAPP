# Revised full drill list — 22 October 2026

Validation for this local change: 169 importable Python tests pass; 24 targeted
Flutter tests pass (one existing skip); Flutter static analysis reports no issues.
Companion documentation validation passes. Flutter execution required a retry
outside the sandbox for its localhost test connection, using cached dependencies.
No device build or native performance/accuracy validation was performed.

Owner-requested current numbering. D11/D12 are new juggling drafts. The former
reserved activities are retained under D13/D14, not removed. Historical review
records keep their original identifiers and do not approve these new drafts.

| ID | Drill | Focus | Availability |
| --- | --- | --- | --- |
| D01 | Inside touches | Alternating inside-foot ball control | Existing activity |
| D02 | Sole rolls | Sustained sole control and release/recontact | Existing activity |
| D03 | Dribble and stop | Travelling control and stopping | Existing activity |
| D04 | Cone weave | Controlled changes of direction | Existing activity |
| D05 | Pass through a gate | Ground-pass direction | Existing activity |
| D06 | Receive and return | First touch and return pass | Existing activity |
| D07 | Open-body receive | Reception and next-pass orientation | Existing activity |
| D08 | Pull-back turn | Sole control and turn | Existing activity |
| D09 | Feint and escape | Deception and controlled exit | Existing activity |
| D10 | Receive and finish to a target | Reception and finishing | Existing activity |
| D11 | Thigh juggling | Controlled thigh contacts | New internal local draft; not yet built |
| D12 | Head juggling | Coach-approved head contacts | New restricted internal draft; not yet built |
| D13 | Scan, choose and pass | Read a cue and choose a target | Former reserved D11; still deferred |
| D14 | Goalkeeper set and ground-ball collection | Ready position and collection of rolling service | Former reserved D12; still deferred |

The local selectable catalogue is D01–D12. D13/D14 are reserved, not app entries.
No new build or publication is authorized. Existing pathways and saved D01–D10
identities remain unchanged. Frozen SP-005/SP-151 review evidence describes the
earlier catalogue; this numbering change does not revise or fabricate approvals.

## D01/D02 experimental analysis

Private Tiny and Tiny + bounded person-crop variants have separate versioned
entry points and review checklists. D01 checks observed inside-foot transfers
against noncontact steps/hand resets. D02 checks continuous sole episodes against
release/recontact: a direction change during uninterrupted contact is not a new
touch. Distinct stop and pass still count twice. Shared rules and thresholds
remain unchanged; implementation is not a new accuracy claim or native rollout.

## D11 — Thigh juggling details

- Goal/prerequisites: controlled thigh contacts; comfortable balance and ability
  to follow the coach's guidance.
- Setup: suitable ball, clear level retrieval area, full body and complete ball
  flight visible from the front; adult-operated camera for a child.
- Steps: balanced start, gentle release towards a thigh, controlled upward
  touch, catch/reset initially. Link contacts only when the coach agrees.
- Cue: Balance. Gentle thigh touch. Reset with control.
- Timing: two 20-second windows, 30 seconds rest; resets allowed, no contact
  quota, stop whenever uncomfortable.
- Review/variation: a genuine touch counts even if the ball falls afterward.
  Start with one touch then catch; avoid prioritizing height or chasing misses.
  Hand releases/catches and floor impacts are excluded.
- Assets: dedicated reviewed juggling demo missing. D01 is explicitly an
  unrelated temporary interface sample, not a juggling demonstration.

## D12 — Head juggling details

- Goal/prerequisites: only where a qualified coach confirms suitability and
  heading is permitted by age/association/club restrictions. Unknown eligibility
  means choose a non-heading activity; this draft is not child heading approval.
- Setup: coach-approved ball/service and clear space, no contested balls; front
  view includes the whole body and complete ball flight.
- Steps: confirm permission/limits, follow coach-approved technique/service,
  stop/reset after the approved attempt, manually end the self-paced attempt.
- Cue: Coach approval first. Controlled attempt. Stop and reset.
- Timing: one self-paced attempt, no automatic repeat rounds or heading-contact
  target. The repetition label means an attempt, not a quota of headers.
- Review/variation: genuine head contact counts even if the ball falls; hands
  and floor impacts do not. No harder heading variation is prescribed. Stop if
  uncomfortable or unwell and inform the supervising coach/adult.
- Assets/restrictions: dedicated reviewed demo absent; unrelated D01 sample is
  labelled. Restrictions are instructional, not automated medical/age clearance.
  Existing youth pathways do not automatically include D12.

Youth heading restrictions differ by association; no universal safe load/age is
asserted. See [UEFA youth heading guidance](https://www.uefa.com/news-media/news/025e-0fb60fba795d-c82533c13f87-1000--uefa-unveils-heading-guidelines-for-youth-players/).

## Retained deferred activities

**D13 Scan, choose and pass:** D06/D07 readiness; partner, ball and two gates with
shape/number as well as colour cues. Read cue, receive, select target, pass and
reset. Cue: Check the cue. Receive. Find the gate. Historical draft six decisions
with resets remains unpromoted. Easier static ball/early cue; review choice and
execution separately. Camera shows cue/player/targets; no phone reading while
moving. Content/asset release remains deferred.

**D14 Goalkeeper set and ground-ball collection:** qualified goalkeeper review,
helper, suitable ball, clear level rolling lane. Ready position, watch controlled
roll, collect using reviewed technique, return/reset. Cue: Ready. Watch the ball.
Gather and reset. Historical draft six gentle services remains unpromoted. No
diving, collisions or overhead service. Camera stays outside service path and
shows body/hands/ball. Easier stationary setup; any progression needs review.
Hand collections are not shared playing-contact counts; do not treat the current
touch analyser as a goalkeeper collection-success metric.

## Evidence and pending work

D01/D02/D11/D12 use independent Tiny strategy profiles but one shared ledger:
all playing feet/head/thigh contacts count, drill selection is not a filter,
hands/floor/object impacts are excluded, uncertainty stays Unclassified.
No exact accuracy, child generalization, phone latency or thermal pass is claimed.
New catalogue coach/media review and native Tiny integration remain pending.
Detailed implementation: private `apps/mobile/DRILL_CATALOG_REVISED.md`.
