# ACT-SP-015-03 — iPhone full-session feasibility acceptance

| Field | Evidence record |
|---|---|
| Date | 27 September 2026 |
| Source | [SP-015](../delivery/soccer_delivery_backlog.md#sp-015--prove-full-session-mode-and-chapters) |
| Accountable owner/reviewer | Syed Ahmed |
| Device | iPhone 16 Pro Max; previously recorded iOS 26.6.2, with no newer version supplied for these runs |
| Build | Soccolo Mobile `0.1.0 (7)`, Ad Hoc build [`6ab83b9913ca7741e618c615`](https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6ab83b9913ca7741e618c615), 29,296,353-byte IPA |
| App source | [`32025d2b9744088fe45549ac14af95f74fb03f00`](https://github.com/sumarahmed/Soccolo-app/commit/32025d2b9744088fe45549ac14af95f74fb03f00) |
| App acceptance record | [`d8d4b757bed7df3f42ed4c220c7d898ee25dae14`](https://github.com/sumarahmed/Soccolo-app/commit/d8d4b757bed7df3f42ed4c220c7d898ee25dae14) |
| Protocol | `ACT-SP-015-02-v1` |
| Disposition | **Accepted at the bounded local-only iPhone feasibility scope** |

## Executed evidence

The owner installed signed build 7 and accepted the following consenting-adult
or synthetic-scene results.

The 60-second calibration saved one verified rear/portrait MP4 H.264 `avc1`
original: 60,011 ms captured, 60,068 ms playable, 46,951,393 bytes, 720×1280,
29.999 fps, rotation 0°, 57 ms start confirmation and 155 ms finalization.
Four work/rest chapter rows mapped to source offsets and played correctly. The
owner confirmed that the screen stayed awake and the camera remained active.
No rendered duplicate or pause gap existed.

The measured 30-minute Pause/Resume run saved 1,800,021 ms of presentation in
two verified rear/portrait H.264 originals totaling 1,293,599,805 bytes. The
first and second parts were 1,082,017 ms and 718,004 ms; their playable
durations were 1,082,028 ms and 718,018 ms. Start confirmation was 34/18 ms and
finalization was 1,797/1,179 ms. The owner's intentional Pause produced an
8,091 ms gap with no source frames. Six source-offset segments accurately split
phase B across the two originals, retained both programmed rests and created no
rendered aggregate video. The owner accepted rear/portrait as the measured
Pause/Resume configuration.

The owner additionally reported completing and accepted the uninterrupted
30-minute plan on the same build and device, then directed SP-015 acceptance to
proceed. That repeat is aggregate owner evidence: its copied report, exact
`parts/chapters/gaps` values, battery/storage deltas and thermal observation
were not supplied and are not reconstructed. The detailed Pause/Resume record
above remains the exact measured long-run artifact.

## Automated and build evidence

- Flutter static analysis: no issues.
- Flutter tests: 20/20 passed after the build-7 correction.
- SP-015 synthetic contract suite: 12/12 passed.
- SP-016 and SP-017 regression suites: 18/18 and 28/28 passed.
- Guarded `camera_avfoundation 0.10.3` H.264 target check: passed.
- Android debug compilation: passed; this is build evidence, not accepted
  Android device support.
- Codemagic signed the exact source SHA and produced the named Ad Hoc IPA.

Build 6 is explicitly rejected. Its first calibration truthfully failed before
Saved because the temporary verification path ended `.mp4.partial`, which iOS
AVPlayer rejected with OSStatus `-12847`; its screen also slept during the
attempted long run. Build 7 corrected the path to `.partial.mp4`, held the iOS
idle timer disabled during active capture and added a browser for verified
app-private sessions.

## Criterion disposition

| Criterion | Disposition |
|---|---|
| AC-SP-015-01 — proposed maximum 30-minute capture includes programmed rests | **Accepted at bounded scope.** The measured 30-minute logical session retained both two-minute programmed rests in its original parts; the owner also accepted an uninterrupted repeat. |
| AC-SP-015-02 — chapter offsets refer to original recording | **Accepted.** Six measured segments resolve to the two retained originals, and all four calibration chapter rows played correctly. |
| AC-SP-015-03 — manual Pause/Resume and gaps accurately represented | **Accepted.** Intentional Pause closed and verified part 1, explicit Resume created part 2, and the 8,091 ms interval is a gap with no fabricated frames. |
| AC-SP-015-04 — no unnecessary duplicate full video | **Accepted.** Both supplied reports state `Rendered duplicate: none`; playback navigates original parts through the manifest. |
| AC-SP-015-05 — 30 minutes is technical, not a youth prescription | **Accepted.** The UI, run sheet and evidence consistently label the plan an internal technical fixture for consenting-adult/synthetic use. |

## Accepted limits and exclusions

This acceptance covers only the tested iPhone 16 Pro Max, local app-private
originals, direct H.264, manifest-based chapter navigation and truthful
Pause/Resume parts. It does not approve child footage, a player-facing release,
App Store/TestFlight publication, Photos export, cloud upload, Android support,
dual capture, low-storage behavior, abrupt-termination recovery or a general
supported-device floor. Those safety/device-limit claims remain with SP-016 and
later release gates.

Per-run battery percentage, free-storage delta and thermal observations were
not supplied. The same phone's preceding SP-014 evidence recorded about 68 GB
free and battery condition Normal, 90% maximum capacity and 503 cycles, but
those values are context rather than reconstructed SP-015 measurements. The
uninterrupted repeat is accepted as aggregate owner evidence without its copied
report. These gaps limit performance extrapolation but do not alter the owner's
bounded local feasibility decision.

## Handoff

`ACT-SP-015-01`, `ACT-SP-015-02`, `ACT-SP-015-03` and SP-015 are accepted at the
scope above. This artifact may serve as the accepted SP-015 input to SP-016,
SP-018 and SP-081; each downstream family retains its other predecessors,
criteria, independent evidence and human gates.
