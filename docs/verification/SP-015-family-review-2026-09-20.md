# SP-015 family review — full-session mode and chapters

| Field | Review record |
|---|---|
| Date | 20 September 2026 |
| Source family | [SP-015 — Prove full-session mode and chapters](../delivery/soccer_delivery_backlog.md#sp-015--prove-full-session-mode-and-chapters) |
| Public planning base | `7a2cbaa0b57cc2b65072e8e32785aa5521ec412c` |
| Private implementation base | `41ed5327a0e149b1495cbc3e1c53595f1a7e77d6` on `feat/sp014-local-camera-feasibility` |
| Review disposition | Preparation recommended; no ACT-SP-015 activity or source criterion accepted here |

## Evidence and gap

The private [SP-014 iPhone evidence](https://github.com/sumarahmed/Soccolo-app/blob/feat/sp014-local-camera-feasibility/apps/mobile/SP014_PILOT_FEASIBILITY_EVIDENCE.md) records a successful owner smoke test of local exercise clips on the iPhone 16 Pro Max. Build 4 records a five-second ready lead-in plus ten seconds of work in each normally completed round clip, unrecorded rest, and a playable six-second interrupted part. That is the **exercise-clip** mode. It does not demonstrate a continuous full-session source, rest chapters, manual Pause/Resume parts, chapter seeking or a 30-minute capture.

The accepted [SP-010 recording contract](../decisions/SP-010-recording-and-local-protection-contract.md) requires full-session mode to keep programmed rests in the original recording, represent chapters without duplicating footage, close the current part on manual Pause, and start a new confirmed part on explicit Resume while preserving the gap. The [SP-015 source criteria](../delivery/soccer_delivery_backlog.md#sp-015--prove-full-session-mode-and-chapters) and [P03 activity cards](../delivery/activities/P03.md#act-sp-015-01--prototype-full-session-chapters-and-parts) require a prototype/schema, named-device duration and chapter measurements, then reviewer handoff. The accepted [SP-126 test protocol](ACT-SP-126-01-device-threshold-review-packet.md) treats 30 minutes as a technical feasibility ceiling and calls for resource, playback and interruption observations. It is not a youth training prescription.

## Recommendation for the next work slice

1. Prepare `ACT-SP-015-01` as a **local synthetic-fixture prototype**: one logical session with ordered source parts, work and rest chapters mapped to actual source offsets, and explicit Pause/Resume gaps. Use the accepted SP-010 contract as the behavior source; do not create a second rendered video merely to provide chapter navigation.
2. Verify the schema and playback behavior with short deterministic fixtures before using another paid Mac build or asking for another physical-device run. Check chapter seeking into work and rest, truthful gaps, Stop/finalization states, and preservation of original source files.
3. After the prototype and reviewer scope are fixed, plan `ACT-SP-015-02` against the named iPhone 16 Pro Max: two 30-minute technical runs with pre-run free space and battery condition, source-offset checks, playable parts, file-size and thermal observations. Use only synthetic or consenting-adult scenes. A shorter bounded run can diagnose a failure but cannot pass the 30-minute criterion.
4. Assemble `ACT-SP-015-03` from actual results and request the mobile lead/device QA decision. Keep SP-015 **open** until its criteria are evidenced. Keep the existing exercise-clip mode as the supported internal fallback if full-session feasibility fails.

This is a review recommendation, not authorization to publish, use child footage, claim full-session support, or mark SP-015 Done. [SP-014's dated scope amendment](../decisions/SP-014-iphone-first-pilot-feasibility-scope.md) leaves its measurement/handoff open, and SP-015 formally depends on SP-014. The owner's [SP-012 interim-route decision](../operations/ACT-SP-012-03-acceptance-evidence.md) defers paid branch protection and the failed-change proof while retaining their blocked status. Preparatory SP-015 review may proceed under that bounded synthetic route; formal ACT-SP-015 execution and acceptance retain the source dependency and reviewer requirements.

## Owner follow-up on build 4

The owner reported testing a continuous recording and asked to mark the SP-015
flow complete, identifying Codemagic build `6aaf07998be471e28abda84b` as the
candidate. The authenticated build status identifies source commit
`323aa848c49c18a48f948f48b30c6b3d3c6dfa0c`. Inspection of that exact
source shows the D01 exercise-clip route: capture stops and saves round 1,
displays that the test rest is **not recorded**, and starts a separate capture
for round 2. The repository describes two separate round clips and D04 as a
design preview. No full-session chapter or chapter-seeking implementation is
present in that build. The owner's observation is retained, but this build
cannot establish SP-015's continuous-rest, chapter-offset, Pause/Resume or
30-minute criteria. No SP-015 source criterion or activity is marked complete;
the review awaits a distinct implementation/build reference if one exists.

The owner clarified that after the two D01 rounds, **Next drill** opened the
D04 Cone Weave design preview. This identifies the tested navigation as the
existing D01 exercise-clip flow, not chapter seeking inside a full-session
recording. The successful owner test remains credited to the SP-014 clip
candidate; no additional SP-015 build or test is inferred.
