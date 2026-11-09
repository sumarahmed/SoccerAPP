## Current rate revision — 9 November 2026

The owner revised 15 drill rates; eight remain unchanged. Duration scaling, rounding and preservation of saved historical rates pass 13 targeted tests. [Complete rates, 30/60/90-second examples and delivery boundary](verification/touch-rates-20261109.md). Both repositories are being synchronized; **no Codemagic build or deployment is authorized or started**. Installed Build 74 remains unchanged.

## Local package separation — 9 November 2026

Build 74 installation is owner-confirmed. The local candidate excludes the analysis engine from the app package and preserves it in private research; automatic setup framing and media features remain. Measured removable components: 66.42 MiB unpacked / 36.69 MiB compressed, with further static-library savings unmeasured. **No new build is authorized or started.** [Evidence and remaining acceptance](verification/engine-package-separation-20261109.md). Earlier statuses below are historical.

## Build 74 preparation — 8 November 2026

**Build outcome:** the first Build 74 run failed on a retired native probe reference, now corrected. On 9 November the owner authorized one corrected retry after adding the drill name above the between-drill description. Local checks precede submission; no successful IPA is claimed yet.

The owner has now approved GitHub pushes for both repositories and one internal Codemagic app build, including the requested estimated-touch results UI improvement. Results emphasize count and active duration with accessible wrapping. Local validation precedes cloud submission; build success and device acceptance are not yet claimed. [Current release checkpoint](verification/duration-estimates-20261108.md).

## Current scope — 8 November 2026

The owner approved provisional drill-specific **Estimated touches** based on active practice duration, replacing on-device analysis in the local app candidate. Temporary performance/analysis troubleshooting is retired. Service analysis remains research, not deployed. One corrected paid retry is now authorized; this checkpoint is not installed-device acceptance or publication. See [decision, evidence and acceptance checklist](verification/duration-estimates-20261108.md). Older build/analysis statements below remain historical evidence.

Next: review provisional rates, verify the replacement experience on a separately approved device build, and continue offline service accuracy/performance evaluation.

# Soccolo handoff

## Build 68 · Practice camera and planner

Version 0.2.0 (68) brings compact glass camera controls, the opening exercise preview, corrected pathway rounds and the selected-day planner agenda. [Release record and iPhone checks](verification/build68-iphone-release.md)

## Build 67 · Camera setup

Version 0.2.0 (67) adds a full-screen camera preview and an automatic countdown when Player, Feet and Ball are ready. [Release notes and iPhone checks](verification/build67-iphone-release.md)

## Build 66 · 6 November 2026

The internal iPhone candidate adds touch pathways, weekly scheduling and direct access to today's practice from Home. See the [release record and device checks](verification/build66-iphone-release.md).

## Build 64 · 5 November 2026

The signed internal iPhone build is available for registered devices. Codemagic run 88 passed and the IPA measures 96.75 MiB. Owner device testing is pending. Live player calibration is deferred until explicitly requested. [Release details and testing handoff](verification/build64-iphone-release.md)

## Historical acceptance checkpoint — 4 November 2026

D25 **v12 circular/template foot** is explicitly owner-accepted as the local
D25 pipeline. Fresh outputs for D25_1–5 are **10/13/4/7/5 feet**. Event misses,
suspected false positives, body-attribution issues and unchanged quality-gate
failures remain documented. Catalogue: **23 selectable, 13 accepted, 10 pending**;
25 identifiers with D13/D14 reserved. D12 V5 is unchanged. Acceptance does not
imply mobile integration or change the 60–30–60 drill timing. No build,
deployment, upload, commit or push accompanies this update.

The dated checkpoints below remain historical.

## Historical checkpoint — 1 November 2026

See the [current work checkpoint](verification/work-checkpoint-2026-11-01.md) for the 23 selectable drills, accepted D12 V5, pending D11 v6/D25 v11, event-level limitations, validation and product plans. D25 reaches 10/12 and 13/15 feet but remains pending and fails unchanged quality gates. This supersedes older current-state summaries below. Source commits/pushes are authorized; builds, deployments and recording uploads remain outside scope.

## Latest verified work — 31 October 2026

See the [consolidated work checkpoint](verification/work-checkpoint-2026-10-31.md) for Drill Timing (60–30–60), both themes, saved settings, the 22-drill catalogue including no-touch D24, card previews, Build 63 preparation and accepted local analyser variants. The local Android debug build succeeded; installed iPhone Build 62 is unchanged. Codemagic has not been started. Touch-target pathways remain a proposal. This section supersedes older current-state summaries below; dated evidence is retained.

## Current drill status — 31 October 2026

The [all-drill acceptance register](verification/accepted-local-pipelines.md) supersedes older pipeline-status summaries below. **10 of 21 selectable drills have an owner-accepted local development pipeline or variant**: D01/D02/D03/D04/D15/D16/D17/D18/D22/D23. D05–D12 and D19–D21 remain pending; D13/D14 are reserved. D17 v8 is an accepted variant, D18 now selects accepted v8 (v5 preserved), D22 retains accepted v4 plus its accepted 1.5× crop experiment, and D23 v6 is accepted. These are development decisions, not complete accuracy or mobile-integration claims.

This documentation checkpoint does not change app catalogue flags, detector code, installed Build 62, or the uncommitted Build 63 preparation. Detailed handoffs retain known misses, extra proposals and failed coverage gates. Earlier dated sections are historical checkpoints. GitHub documentation commits/pushes are authorized for this update; builds, deployment and media uploads are not part of it.

## D16 V3 accepted — 28 October 2026

The owner accepts D16's local `drill-owned-v3-push-return-cycles` pipeline and
authorizes local Git commits. D16 is a forward lace push followed by a roll-back;
one cycle counts as one D16 touch. The current catalogue corrects the earlier
hand-drop wording. Six of 21 pipelines are now accepted: D01/D02/D03/D04/D15/D16;
D05 stays pending. Counts are 7/13 on the two exposed sources, with unresolved
D16_1 evidence and event review still open. Acceptance does not certify accuracy
or update installed Build 62. No native build, media upload or push.

[D16 operation, validation and limits](verification/d16-pipeline-acceptance.md).


## Library source checkpoint — 28 October 2026

The owner authorizes a separate local commit of the Library implementation:
exercises, sound bites, pathways, user-created calendar plans and meal guides.
State and completion are stored per player, separately from Train and analyser
history. Recordings remain pending; this does not change installed Build 62.
Validation: 53 selected Flutter tests pass; static analysis reports no issues.
See [Library implementation and validation](verification/library-implementation.md).


## D15 V11 accepted and earlier selections committed — 28 October 2026

The owner accepts D15 V11 and authorizes local commits in both repositories.
Read [D15 operation, evidence and limits](verification/d15-pipeline-acceptance.md)
and the [accepted pipeline register](verification/accepted-local-pipelines.md).
D01 Image-side v1 remains the default `drill-owned-v11-image-side`; its
previously uncommitted implementation/docs are included. D02 v3, D03 v5 and D04 v11
remain accepted. **D05 remains pending**. D02's current intake/history docs are
included without changing its counter. Build 62, saved history and frozen results
are retained; no native build, media upload, push or publication is included.

## D01 Image-side v1 selected — 26 October 2026

Local D01 drill-owned default is now `drill-owned-v11-image-side`, composing
v10 finite-width + distinct-response v3 + image-side gate. See
[selection and limitations](verification/d01-pipeline-acceptance.md), and the app
`D01_HANDOFF.md` / `D01_EXPERIMENTS.md` for the complete experiment inventory.
Exact six-case replay parity does not certify accuracy or phone readiness.
D03/D04, Build 62, saved history and the frozen benchmark remain unchanged.

## D04 accepted local pipeline — 24 October 2026

The owner accepted the latest D04 response-locality experiment as the local
Cone weave pipeline, revision `drill-owned-v11-local-passage`, and authorized
cleanup, documentation and local commits. See [decision, operation and limits](verification/d04-pipeline-acceptance.md).
D03 v5, other drills, Build 62, saved history and the frozen benchmark are preserved.
Acceptance does not certify complete touch totals or authorize a native build,
upload or push. One reviewed rolling-ball false proposal and threshold sensitivity
remain open; full-video accuracy and held-out evaluation remain unresolved.

## Preserved D03 checkpoint

D03 remains `drill-owned-v5-camera-motion`, accepted from MSD4. Its bounded
tracking, stationary departure and camera-compensated motion are unchanged.
Its foot hand/wrist bypass is an experimental trade-off, not a validated handling
exclusion. The earlier integration's 121 tests, 37 frozen outputs and three fresh
runs remain historical evidence; D04 acceptance does not modify those results.

## Selected next-work path — 22 October 2026

Use **NEW: Drill-owned crop** for forward drill-by-drill optimization on new
videos. Follow the [saved direction and protocol](verification/drill-owned-crop-direction.md).
The owner selects a development path, not a proven accuracy upgrade. Preserve
the frozen benchmark, unresolved regressions, installed Build 62 and saved
results. No build, publishing or media upload is authorized by this checkpoint.

## Completed experimental benchmark — 22 October 2026

Independent drill-owned recovery/composition is implemented locally and the
descriptive benchmark is complete. Read [the latest outcome](verification/tiny-diagnostics-protocol.md).
Regressions block promotion despite passing engineering tests and negative
controls. Preserve old results; refine affected modules separately with event
evidence, not count-target tuning. Personal comparisons/source snapshots remain
local/private. No further build or publication is authorized by this checkpoint.

## Revised numbering — 22 October 2026

Use the [revised full list](content/DRILL_CATALOG_REVISED.md): local D11/D12 now
mean thigh/head juggling. Previously reserved scan/choose/pass and goalkeeper
collection move to D13/D14 and remain deferred. Preserve original signed/frozen
contracts as historical records; do not reinterpret their old identifiers as
approval of juggling. New app catalogue work and Tiny strategies are local only.

## Superseding direction — 22 October 2026

Continue Tiny-only experimental modular strategies in the private repository;
the owner rejects the larger ball model going forward. Preserve installed Build
62 and historical estimates. D03 Dribble and stop is the confirmed selected drill.
Separate drill modules initially retain shared counting rules; native integration
and per-drill accuracy/resource acceptance remain open. Do not initiate another
build, commit or publish based on the historical Build 62 authorization below.
See [device follow-up](verification/build62-device-testing.md).

Build 62 source is committed and pushed: `6d69d89a7d64331e62ef51fd5644453210984637`. Milestone tag: `milestone/build62-stronger-touch-count`. [Codemagic run](https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6ad8a3d893707fc384745ec3) finished successfully: all native, Flutter and packaging stages passed. Build 62 is the latest successful internal build and the owner confirms it is installed. Accuracy refinement and device acceptance remain open.

Read [current status](CURRENT_STATUS.md), [milestone](verification/touch-count-milestone-20261021.md)
and [backlog](content/current-backlog.md). Latest successful internal build is 62;
the owner confirms it is installed. The accepted stronger pipeline is included;
its end-to-end device accuracy remains to be tested.

Preserve the accepted baseline, existing UI/analytics/export behaviour and private
media. Front view is selected; side development retired, mixed tuning deferred.
Build62 is explicitly authorized. Stronger v9, larger-model fallback and bounded
recovered tracks are integrated locally;77 identical-evidence parity cases pass.
Highest supported normal recording FPS first and below-minimum analysis rejection
are local. Nominal29.97 is accepted as30. Verify actual rates on hardware.
The exact Build61 native-layout preview was accepted; incremental setup/tips/result
changes are implemented. D03 is bundled as a temporary24fps demo, independently
from player-video analysis. Real D03 validation footage is still needed.
Accuracy refinement and phone/native/resource testing remain OPEN.
See [Build62 milestone](verification/build62-stronger-touch-count.md).

Private handoff: Soccolo-app `apps/mobile/RESUME_HANDOFF_TOUCH_COUNT.md`.
Native checks passed and installation is owner-confirmed. Begin the device-test report before any detector changes.
Do not upload private media/traces or infer permission to deploy public docs.

## Historical record

[Previous documentation snapshot](RESUME_HANDOFF.history-20261021.md). Dated claims there are not current instructions.
