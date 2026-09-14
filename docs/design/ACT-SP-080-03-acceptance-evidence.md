# ACT-SP-080-03 — SP-080 acceptance evidence

| Field | Review value |
|---|---|
| Activity | `ACT-SP-080-03` — Verify and hand off: Specify branded export and timeline contract |
| Source | `SP-080` — Specify branded export and timeline contract |
| Evidence version | 1.0 |
| Evidence date | 14 September 2026 |
| Status | Accepted by Syed Ahmed on 15 September 2026; SP-080 complete as a design/specification task |
| Repository base | `6c3ffb24d4130ac12c563a42d247d7ed7f66aa1f` on `main` |
| Executor | QA / Media agent |
| Accountable owner / reviewer | Syed Ahmed is the design acceptance owner; mobile/media implementation and device-QA roles remain to assign |
| Evidence scope | Design contract, deterministic fixtures and synthetic local reference renders only |

## 1. Exact evidence set

| Artifact | Version / identity | SHA-256 or release digest |
|---|---|---|
| [ACT-SP-080-01 composition contract](ACT-SP-080-01-logo-first-composition.md) | Accepted 1.0 | `1CDD92877C73DD5A05FF5470D67CD625B4450854E01CE9FEC60558D8A2644CA1` |
| [ACT-SP-080-02 timeline and failure contract](ACT-SP-080-02-timeline-and-failure-semantics.md) | Accepted 1.0 | `6C4650C048FFBE5FE8826120E3C91A1D27A8911D30FDF1B041C94A373D8AFA17` |
| [SP-080 fixture corpus](../../contracts/sp-080/export-contract-fixtures.json) | `1.0`, schema 1 | `71CD573F974448D73830E60A2559D993EA3101A54B0849688C607CAE569AFD07` |
| [Fixture validator](../../tests/media/validate-sp080-contract.cjs) | Dependency-free Node validator | `10507C6DA25A56CBB26F765A982D6D5D58AEB5B2406AFAFD9BD2AB084B614726` |
| [Soccolo Brand Bundle v4](<brand/Soccolo-Brand-Bundle v4/README.md>) | Founder-accepted v4; 224-file manifest | Aggregate `350a76d214465780c7d80a7722669b8d75823357e1fae615020cfcd09311aa44` |

The v3 bundle is not part of this evidence. Its separate
[review record](ACT-SP-080-01-soccolo-brand-bundle-v3-review.md) demonstrates
why the transition and exporter were remediated before v4 acceptance.

## 2. Checks actually performed

| Check | Environment | Observed result |
|---|---|---|
| `node tests/media/validate-sp080-contract.cjs` | Local Windows workspace; bundled Node.js 24.19.0 | **PASS:** 3 timeline cases, 3 chapter maps, 7 operation transitions and 5 copy/share cases |
| V4 video-manifest write/check | Local Windows workspace; FFmpeg 6.1.1, FFprobe 4.0.2 and pinned Python requirements | **PASS:** all 18 derived media/mark assets matched their media facts and SHA-256 records |
| Clean portable v4 build | Separate marked temporary output | **PASS:** 34 logo records, 56 print PDFs, 12 rendered video files and all contrast checks; clean-build video hashes matched v4 |
| V4 whole-release manifest | Local checked-in candidate and clean output | **PASS:** both 224-file manifests verified; accepted v2 artwork and supplied PDFs were preserved |
| Synthetic silent source export | 640×360, 30 fps, 3.00 seconds / 90 decoded frames | **PASS:** 5.00 seconds / 150 frames, no audio stream, source digest unchanged |
| Synthetic audio source, explicit 9:16 and opt-in outro | 640×360 input, downscale/contain path | **PASS:** 202×360, 9.00 seconds / 270 frames, AAC reported, outro only because explicitly requested |
| Existing-output attempt | Repeated target path | **PASS:** refused; existing output digest unchanged |
| Dry-run to nonexistent nested destination | Reference exporter `--dry-run` | **PASS:** reported zero filesystem changes and created no directory |
| Contact-sheet review | Synthetic silent and audio outputs | **PASS:** fixed plate, held-frame dissolve, unobscured source start, contain padding and opt-in outro visible |

Temporary tools, fixtures and rendered test outputs were removed after the
checks. No user media, account media, cloud object, upload or external recipient
was involved.

## 3. Source acceptance results

| Acceptance criterion | Outcome for SP-080 design/specification | Evidence and limit |
|---|---|---|
| `AC-SP-080-01` — Storyboard shows logo then footage | **PASS** | ACT-SP-080-01 fixes 1.60 seconds of static plate plus a 0.40-second dissolve to held source frame zero; motion begins at 2.00. V4 synthetic inspection confirms the sequence. Device implementation remains `SP-081`. |
| `AC-SP-080-02` — Intro is not training time | **PASS** | Four clocks are separated; frame mappings add 50 or 60 intro frames without altering source/training offsets. Three chapter fixtures include contiguous, interrupted and 25 fps boundaries. |
| `AC-SP-080-03` — Microphone-off source remains silent | **PASS** | The contract requires no generated audio stream. The silent synthetic export remained stream-silent; the fixture validator binds output audio presence to source audio presence. Device microphone/capture behavior remains later evidence. |
| `AC-SP-080-04` — No timer/demo overlay or extra outro is silently added | **PASS** | The default fixture has no outro, the accepted composition prohibits timer/demo overlays, and the synthetic outro appeared only under the explicit option. App UI enforcement remains later evidence. |

These outcomes satisfy the source criteria as **design requirements with
executable contract evidence**. They do not claim that an iOS or Android build
already enforces them.

## 4. Failure and security assessment

- The source is read-only and digest-checked before and after composition.
- Cancelled, low-space, renderer-failed or validation-failed operations publish
  no output and invoke no share path.
- Staging is operation-owned and never treated as a playable completed export.
- Retry repeats current authority, source identity and storage checks; it does
  not reuse a stale permission decision.
- Local-ready, external copy and OS share handoff are distinct states. A current
  media-authority check occurs before external handoff.
- The receipt does not need absolute paths, credentials, authorization tokens,
  player names or playable URLs and is not co-shared by default.
- After a genuine OS/external handoff, the app cannot promise revocation of an
  independently retained copy; the contract requires honest wording.

## 5. Remaining implementation evidence

The following are deliberately **not claimed** by SP-080 completion:

- no mobile project or production media adapter exists yet;
- no named iPhone, iPad or Android device has rendered these exports;
- no variable-frame-rate, rotation-metadata, thermal, battery, interruption or
  platform-background behavior has been measured;
- no adapter-specific peak scratch space or safety margin is known;
- no Photos/files permission flow or OS share-sheet result has been exercised;
- no real youth, guardian or customer media has been processed;
- no independent privacy assessment or device-QA acceptance has occurred; and
- no upload, recipient grant, revocation, cloud retention or production control
  is implemented.

`SP-081` owns on-device adapter selection and measurement. `SP-082` and later
media/share activities own preview, deliberate handoff and authorization
implementation. Those tasks must use the fixed SP-080 contract rather than
reinterpreting its time bases or treating a successful encoder exit as a safe
published result.

## 6. Owner decision

Syed Ahmed accepted `ACT-SP-080-02` and `ACT-SP-080-03` and closed `SP-080` as
a design/specification task on 15 September 2026. The decision accepts:

1. the exact timeline and chapter transforms;
2. cancellation, low-space, retry and atomic-publication semantics;
3. deliberate local-copy/share authority boundaries;
4. the four source criteria as design-contract passes; and
5. every implementation/device/privacy limit in section 5 as retained future
   work rather than hidden evidence.

The acceptance authorizes repository commit and publication of this evidence
and the activity-map rendering fix. It does not broaden the implementation,
device, privacy, real-media, cloud or external-sharing authority stated above.
