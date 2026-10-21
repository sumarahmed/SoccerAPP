# Soccolo current status — 21 October 2026

Build 62 source is committed and pushed: `6d69d89a7d64331e62ef51fd5644453210984637`. Milestone tag: `milestone/build62-stronger-touch-count`. [Codemagic run](https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6ad8a3d893707fc384745ec3) finished successfully: all native, Flutter and packaging stages passed. Build 62 is the latest successful internal build and the owner confirms it is installed. Accuracy refinement and device acceptance remain open.

Latest successful internal iPhone build is **0.2.0+62**, confirmed installed by
the owner. Codemagic passed all native, Flutter and packaging stages for source
`6d69d89`. Build 60 remains the accepted player/crop tracking baseline; Build 61
is the previous installed release. Build 62 includes the stronger v9 counter,
larger-model fallback and recovered tracks. Accepted estimates do not establish
exact counts or resolved child generalization. Device testing remains open.

## Completed work

Local comparison covers original adult recordings, independent child/adult sets,
additional front/side views and negative controls. Expanded recovered tracking
was run on15 original-adult/round 2-child clips:14 totals unchanged, one extra
unclassified wall-passing candidate remains unconfirmed, and no-touch stays zero.
Personal footage, detailed traces and child-specific results remain private/local.

## Authorized Build 62 milestone

- Preserve one estimated playing-contact total; drill is context, hands/reset
  handling and ground/rebound impacts excluded. Unknown attribution stays explicit.
- Front-view guidance, whole player/ball/lane visible, stable camera and good light.
- Highest supported normal recording FPS per camera/resolution, nominal 30 minimum
  (29.97 accepted). Local opener now discovers rates and tries highest first down to30; nine
  camera-policy tests pass. Below-minimum source/cadence rejection is implemented
  locally; native/device validation remains open.
- Preserve shipped UI composition and analytics/history/export behaviour. The
  first two redesign previews were rejected; the later exact-source Build61 native
  layout preview was accepted and its additions are implemented locally.
- D03 demo candidate (24fps) is bundled as an explicitly temporary demonstration. Separate real
  detector-validation footage at nominal30fps or higher is still needed.
  Synthetic demos cannot establish real-player counting accuracy.
- Local validation and both repository updates are committed and pushed. The owner explicitly
  authorized Build 62; Codemagic passed all stages for source `6d69d89` and the owner confirms installation.
  Device testing remains open; no public app release or website deployment is claimed.

Local validation:77 cached-evidence Dart parity cases;157 Python tests;276 Flutter
tests (11 skips);28 enabled camera/history/shared checks;49 enabled practice regressions;6 milestone/dashboard checks.
Static analysis passes. These checks do not certify end-to-end phone inference.
See [Build62 milestone](verification/build62-stronger-touch-count.md).

## Existing pilot boundaries

Family/Guardian ownership, local videos, plans, silent recording/export, practice
timers and interruption recovery remain. Native detection and voice capabilities
are not universally equivalent across platforms. Coach/payment presentation is
not a live marketplace. D01–D10 catalogue availability does not prove all-drill
counting accuracy. Formal delivery-plan acceptance remains independent.

## Documentation

- [Next-chat handoff](RESUME_HANDOFF.md)
- [Current backlog](content/current-backlog.md)
- [Current milestone and UI/build checklist](verification/touch-count-milestone-20261021.md)
- [Maintenance and publication rules](DOCUMENTATION_MAINTENANCE.md)

Private implementation remains in Soccolo-app on `feat/sp014-local-camera-feasibility`.
These are local documentation updates; the published site may still show its last deployment.

## Historical record

[Previous documentation snapshot](CURRENT_STATUS.history-20261021.md). Dated claims there are not current instructions.
