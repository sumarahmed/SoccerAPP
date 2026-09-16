# SP-006 — Pilot animation samples

| Field | Decision |
|---|---|
| Source issue | SP-006 |
| Decision version | 1.0 |
| Decision date | 16 September 2026 |
| Outcome | Accepted |
| Acceptance criterion | AC-SP-006-01 through AC-SP-006-06 for pilot sample review |
| Accountable person | Syed Ahmed, acting as Founder/content owner |
| Review status | Accepted as pilot sample evidence; not approved for player release |

Syed Ahmed explicitly accepted SP-006 on 16 September 2026. The accepted pilot
sample set is A01/D01 Inside touches, A02/D06 Receive and return version 0.2 and
A03/D04 Cone weave version 0.1. The rejected duplicated-ball A02 version is not
part of the repository or decision.

## Accepted evidence

- [Animation sample review packet](../content/ACT-SP-006-01-animation-placeholder-packet.md), version 2.0.
- [Pilot animation acceptance](../content/ACT-SP-006-02-provisional-acceptance.md), updated final pilot decision.
- [Machine asset inventory](../../contracts/content/sp006-animation-review-assets.json).
- The three exact review videos and setup stills linked by the inventory.
- `node tests/content/validate-sp006-placeholders.cjs`.

## Decision and retained release boundary

The samples meet the present planning/design need and identify the
demonstrations, captions and cues required by the pilot pathways. Their current
camera and ball-continuity results are accepted for this stage.

This acceptance does **not** make the review renders player-release assets.
Before distribution in an app, the release activity must record commercial
source/tool rights, provide final caption/cue timing and accessible alternatives,
resolve A01's audio track, retain final version links and obtain coach/content
review of the exact released exports. `playerReleaseAllowed` therefore remains
`false`; those controls move with the later release-asset gate and are not
silently waived by this design-stage acceptance.
