# Soccolo current status — 21 October 2026

Latest recorded successful internal iPhone build is **0.2.0+61**. Build 60 remains
the accepted player/crop tracking baseline. Build 61 adds experimental shared
contact counting and drill/body-part analytics; larger-model and recovered-track
research improvements are not yet shipped. Acceptance of local stronger estimates
is a milestone, not a claim of exact counts or resolved child generalization.

## Completed work

Local comparison covers original adult recordings, independent child/adult sets,
additional front/side views and negative controls. Expanded recovered tracking
was run on15 original-adult/round 2-child clips:14 totals unchanged, one extra
unclassified wall-passing candidate remains unconfirmed, and no-touch stays zero.
Personal footage, detailed traces and child-specific results remain private/local.

## Next app milestone

- Preserve one estimated playing-contact total; drill is context, hands/reset
  handling and ground/rebound impacts excluded. Unknown attribution stays explicit.
- Front-view guidance, whole player/ball/lane visible, stable camera and good light.
- Highest supported normal recording FPS per camera/resolution, nominal 30 minimum
  (29.97 accepted). Existing local opener only tries 60/30; maximum selection and
  saved-video FPS rejection with an explanation are pending.
- Preserve shipped UI composition and analytics/history/export behaviour. The
  first two redesign previews were rejected; corrected layout preview awaits review.
- Dedicated D03 demo and separate real detector-validation footage are pending.
  Synthetic demos cannot establish real-player counting accuracy.
- Validate locally, update docs and commit reviewed changes. The next app build
  requires explicit owner approval. No new build or public deployment is claimed.

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
