# SP-006 animation review assets

These are versioned review exports and setup stills for the three SP-006 sample
animations. They replace the visible design placeholders for product-owner
review, but they are not player-release assets yet.

| Asset | Drill | Review export | Setup still | Status |
|---|---|---|---|---|
| A01 | D01 — Inside touches | `A01-D01-inside-touches-review-v0.1.mp4` | `A01-D01-inside-touches-setup-v0.1.png` | Accepted for now; source audio track still requires review/removal |
| A02 | D06 — Receive and return | `A02-D06-receive-and-return-review-v0.2.mp4` | `A02-D06-receive-and-return-setup-v0.2.png` | Accepted for now after replacing the rejected duplicated-ball render |
| A03 | D04 — Cone weave | `A03-D04-cone-weave-review-v0.1.mp4` | `A03-D04-cone-weave-setup-v0.1.png` | Accepted for now after frame-level ball/cone continuity review |

Exact byte counts, SHA-256 values and generation task identifiers are recorded
in `contracts/content/sp006-animation-review-assets.json`. The exports were
created in the product owner's connected generation workspace. The repository
does not claim that editable production source, alternate/slow views, caption
timing, narration separation, commercial-rights review, animator QA or Aaron
M's rendered-result review has been supplied.

Do not ship these files to players until the manifest's remaining gates are
closed and `playerReleaseAllowed` is explicitly changed through a reviewed
revision.
