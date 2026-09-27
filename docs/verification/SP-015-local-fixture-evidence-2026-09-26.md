# SP-015 local full-session fixture evidence

| Field | Evidence record |
|---|---|
| Date | 26 September 2026 |
| Source | [SP-015](../delivery/soccer_delivery_backlog.md#sp-015--prove-full-session-mode-and-chapters) |
| Implementation | [`014de71`](https://github.com/sumarahmed/Soccolo-app/commit/014de71cd51e79dfd0edfc5b471a5d1d77a84112) |
| Validation | `node tests/media/validate-sp015-session-fixture.cjs` — 12/12 passed |
| External spend/data | AUD 0; synthetic identifiers and timing only |
| Disposition | **Superseded by the bounded iPhone [ACT-SP-015-03 acceptance](ACT-SP-015-03-iphone-full-session-acceptance.md)** |

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

### Build 6 physical rejection and build 7 correction

On 27 September 2026, the owner ran build 6's 60-second calibration on the
iPhone 16 Pro Max. Finalization failed truthfully with iOS `VideoError`,
OSStatus `-12847`, and no Saved claim. The owner also reported the display
sleeping during the intended long capture. Inspection identified that the
verifier copied the MP4 to a staging name ending `.mp4.partial`; iOS AVPlayer
rejected that path before the final `.mp4` rename. Build 6 is rejected for
SP-015 and supplies no accepted capture result.

Corrective source commit
[`32025d2`](https://github.com/sumarahmed/Soccolo-app/commit/32025d2b9744088fe45549ac14af95f74fb03f00)
uses `.partial.mp4`, disables the iOS idle timer only while capture is active,
and adds an in-app browser for every verified app-private session. Incomplete
or failed attempts remain excluded from the saved-session browser. Static
analysis, 20 Flutter tests, all 12/18/28 SP-015/016/017 contract cases, the
guarded H.264 target check and Android debug compilation passed.

Codemagic Ad Hoc build
[`6ab83b9913ca7741e618c615`](https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6ab83b9913ca7741e618c615)
finished from that exact source and produced `soccolo_mobile.ipa`, version
`0.1.0 (7)`, 29,296,353 bytes. Build success does not resolve the physical
gate: build 7 must first pass the 60-second save/H.264/playback check before
either 30-minute run proceeds.

On 27 September 2026, the owner supplied build 7's copied calibration report.
Session `1790462332057499` saved one verified rear/portrait original with four
chapters and no gaps: 60,011 ms capture, 60,068 ms playable duration,
46,951,393 bytes, MP4 H.264 `avc1`, 29.999 fps, 720×1280, rotation 0°, 57 ms
start confirmation and 155 ms finalization. The manifest reports no rendered
duplicate. This passes the measurable save/codec/structure portion of the
calibration. Explicit owner confirmation of keep-awake behavior and playback
from every chapter row remains required before the first 30-minute run.

The owner subsequently confirmed that the camera remained active/the screen
stayed awake throughout the calibration and that all four chapter rows played
correctly. Build 7 therefore passes the complete 60-second calibration gate;
the continuous 30-minute rear/portrait run may proceed. This does not yet pass
either required 30-minute measurement or close SP-015.

The owner then supplied and accepted 30-minute session
`1790462625360092` as the intentional Pause/Resume case. It saved 1,800,021 ms
of captured presentation across two verified rear/portrait H.264 `avc1`
originals (1,293,599,805 bytes total), six source-offset chapter segments and
one accurately represented 8,091 ms frameless gap. Phase B is split across the
two originals without fabricating frames; both programmed rests remain in the
sources; no rendered duplicate exists. The owner accepted rear/portrait as the
tested configuration instead of the proposed front/landscape combination.
Battery delta, free-storage delta and thermal observations were not supplied
and are not inferred. This accepted Pause/Resume result does not replace the
required uninterrupted `1 part / 5 chapters / 0 gaps` 30-minute run, so SP-015
remains open.

## Subsequent owner acceptance

The owner later reported completing the uninterrupted 30-minute run and
directed SP-015 acceptance to proceed. The final criterion dispositions,
aggregate-evidence limit and exclusions are recorded in the dated
[ACT-SP-015-03 acceptance](ACT-SP-015-03-iphone-full-session-acceptance.md).
That record supersedes this packet's earlier open disposition without altering
the historical measurements or inventing a missing continuous-run report.
