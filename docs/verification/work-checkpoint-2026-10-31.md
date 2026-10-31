# Verified work checkpoint — 31 October 2026

## Delivered source

- Drill Timing is available from Settings / Guardian and the local Settings screen, in the existing paired light/dark Bricolage Grotesque and green/lime design. The owner approved the reference layout and title capitalization.
- Timed drills default to 60 seconds practice, 30 seconds rest, then 60 seconds practice. Two rounds total 2:30; the eight-drill circuit totals 20:00 before setup, countdowns and transitions. These are duration totals, not guaranteed touch counts.
- Practice presets: 30/45/60/90 seconds. Rest presets: 15/30/45/60 seconds. Plus/minus adjusts by 15 seconds; practice permits 15–600 seconds and rest 0–600 seconds. All drills saves global defaults and clears individual overrides. Choose drills saves the selected drills only. Settings persist locally; new guided plans and single-drill sessions resolve them into snapshots. Existing saved sessions retain their snapshot timing.
- D12 Head juggling remains a single self-paced coach-approved attempt, excluded from timed overrides. D24 Ball cross over is timed but has no touch analysis or touch score.
- Catalogue: 24 numbered IDs; 22 selectable, 11 accepted drills, 11 pending, D13/D14 reserved. Ten local pipelines/variants are accepted (D01/D02/D03/D04/D15/D16/D17/D18/D22/D23); D24 is separately accepted with no analysis required. Acceptance is not accuracy certification or native pipeline integration.
- Silent three-second card previews for D01/D03/D04/D06 derive from the already bundled internal demonstrations, with still-image fallbacks, pause/reduced-motion/background behavior and no unrelated-demo substitution. The media guard pins all eight derivative hashes and retains the original sample manifest/release restrictions.
- Build 63 preparation removes the experimental larger ball-model fallback and review switches; explicitly packages the remaining models/licenses; preserves historical analysis, explicit reanalysis and restoration; and stages version 0.2.0+63. The manual build helper targets main.
- Local development source includes D17 v8 accepted variant, D18 v8 selected registry route (older variants retained), D22 v4 plus accepted wider-crop variant, and D23 v6 with frozen evaluation/reviewer helpers. Their known misses, extra proposals and coverage failures remain documented in the per-drill handoffs. These Python pipelines are not promoted to native phone analysis by this checkpoint.

## Verification

- Complete default Flutter suite: **305 passed, 11 existing feature/device skips**. Older timer assertions were updated to the new prescription; the recording-recovery fixture explicitly retains its historical 20-second duration.
- Full Dart static analysis: **no issues found**.
- All importable analyser unittest modules: **739 passed** in the existing local analyser virtual environment. Argument-driven evidence harnesses are separate from unittest discovery.
- D17/D22/D23 offline reviewer harnesses: **all three passed**, using their existing local evidence reports. No new inference or private evidence publication.
- Model-packaging tests: **2 passed**; repository-side security/contracts and prototype media tests passed. Preview assets are individually hash-pinned; modified/missing derivatives are rejected.
- Companion documentation validator: **passed**, including 2,259 relative links, canonical-package parity and generated activity-map checks.
- Local Android debug build: **passed**. Artifact: `apps/mobile/build/app/outputs/flutter-apk/app-debug.apk`; SHA-256: `1eddebe6891ae9e37063fd7c0159a1cee3451200751474439bd4affd384dcfe3`. APK and model binaries stay outside Git.
- Verification performed on the combined source checkout, not a claimed new iPhone deployment or independent accuracy benchmark.

The Android debug APK was compiled locally from the combined working tree using Flutter, including the Build 63 preparation. It is not a signed iPhone release. Build 62 remains the latest confirmed installed iPhone build. No Codemagic dispatch, iOS build, installation, model/media evidence upload or release publication was performed. Source commits and pushes to both repositories are explicitly requested by the owner.

## Pathways remain a proposal

The discussed 500/1,000/2,000-touch pathways use Inside touches, Sole rolls, V taps, Croquetas, Lace stops, Sole taps, L drags and Samba taps. Ready-made touch-target plans and cumulative touch-goal completion have not been implemented by the timing change. The 2,000-touch goal does not promise completion in 60–90 minutes. D16 still counts push/return cycles; do not silently reinterpret those as individual contacts.

## Remaining verification

Physical iPhone capture, timing/recovery, accessibility, performance and accuracy checks remain open. Windows tests do not compile the changed Swift implementation. Existing feature-gated/device-only test skips remain explicit. Historical dated checkpoint claims below linked documents are retained as history; this checkpoint supersedes older statements that no local build has occurred or Build 63 preparation is uncommitted.
