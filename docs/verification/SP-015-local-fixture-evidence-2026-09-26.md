# SP-015 local full-session fixture evidence

| Field | Evidence record |
|---|---|
| Date | 26 September 2026 |
| Source | [SP-015](../delivery/soccer_delivery_backlog.md#sp-015--prove-full-session-mode-and-chapters) |
| Implementation | [`014de71`](https://github.com/sumarahmed/Soccolo-app/commit/014de71cd51e79dfd0edfc5b471a5d1d77a84112) |
| Validation | `node tests/media/validate-sp015-session-fixture.cjs` — 12/12 passed |
| External spend/data | AUD 0; synthetic identifiers and timing only |
| Disposition | **ACT-SP-015-01 preparatory fixture complete; SP-015 remains open** |

## Evidence supplied

The dependency-free fixture implements one logical full session containing
ordered original source parts, work/rest chapters mapped to source offsets,
manual Pause closure, explicit Resume into a new source part, durable frameless
gaps, truthful finalization states and chapter seeking without rendering a
duplicate aggregate video.

The test suite verifies:

- programmed rest remains in the current full-session source;
- Pause closes the current part and creates a gap with no invented frames;
- Resume creates a distinct source part;
- work and rest chapter seeks resolve to original source offsets;
- `Saved` is unavailable until every original source is verified;
- failed finalization stays failed and unseekable;
- identifiers and event times cannot be reused or move backwards;
- original sources remain in the manifest with no aggregate/rendered-video
  field; and
- a synthetic 30-minute timeline can be represented without describing that
  ceiling as a recommended youth session duration.

## Retained limits

This is a local schema/state prototype. It does not capture camera media, prove
codec behavior, run for 30 minutes on a physical device, measure file size,
battery or thermal behavior, verify iOS seeking, or satisfy `ACT-SP-015-02` and
`ACT-SP-015-03`. SP-014 was subsequently
[accepted at its bounded iPhone feasibility scope](ACT-SP-014-03-iphone-feasibility-acceptance.md),
so that predecessor is now available. No SP-015 source criterion is marked
accepted yet; the exercise-clip mode remains the tested internal fallback while
physical full-session work proceeds.

## Signed physical-device candidate

The owner accepted the reviewed implementation route and authorized a full
build on 26 September 2026. Mobile source commit
[`ec9a0aa`](https://github.com/sumarahmed/Soccolo-app/commit/ec9a0aa8d4d9f245b6b0a1016d657764c8e47511)
implements the separate internal full-session diagnostic, original-part
manifest, source-offset chapter navigation, programmed-rest capture, truthful
Pause/Resume gaps, direct H.264 request and iOS fail-closed `avc1` inspection.
It creates no rendered aggregate video.

Verification against that source completed as follows:

- Flutter static analysis: no issues;
- Flutter tests: 19/19 passed;
- SP-015 synthetic contract suite: 12/12 passed;
- SP-016 and SP-017 regression suites: 18/18 and 28/28 passed;
- Android debug compile: passed; and
- guarded `camera_avfoundation 0.10.3` H.264 patch target check: passed.

Codemagic Ad Hoc build
[`6ab7a5b8f0d54ec5b548c4f4`](https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6ab7a5b8f0d54ec5b548c4f4)
finished from that exact source SHA and produced `soccolo_mobile.ipa`, version
`0.1.0 (6)`, 29,292,611 bytes. This proves buildability/signing only. A
60-second H.264 calibration and two 30-minute iPhone 16 Pro Max runs remain the
human physical-device gate for `ACT-SP-015-02`; SP-015 remains open until those
results and the owner's acceptance decision are recorded.
