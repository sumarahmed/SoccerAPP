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
`ACT-SP-015-03`. The formal SP-014 predecessor is also still open. Therefore no
SP-015 source criterion is marked accepted and the exercise-clip mode remains
the tested internal fallback.
