# ACT-SP-006-02 — Pilot animation acceptance

| Field | Value |
|---|---|
| Decision | Accepted for the pilot sample/design gate |
| Decision date | 16 September 2026 |
| Decision scope | A01/D01, A02/D06 and A03/D04 review exports and setup stills |
| Product-owner state | Accepted |
| Player-release state | Not allowed |
| Final SP-006 state | Complete for pilot sample/design work; later player-release asset gate retained |

## Evidence reviewed

- A01/D01 uses the corrected normal-scale demonstrator and was accepted for use
  as the current review sample.
- A02/D06 v0.1 was rejected after frame inspection found a second ball beginning
  at about 6.208 seconds. The rejected render is not committed. The replacement
  v0.2 uses one incoming ball, one receive and one return pass, and was accepted.
- A03/D04 shows one ball weaving around four fixed cones and finishing under
  control. A quarter-second frame audit found no duplicated ball, missing or
  moved cone, camera cut or audio track. It was accepted for now.

The exact review files, setup stills, byte counts, SHA-256 values and generation
task identifiers are machine recorded in
[`sp006-animation-review-assets.json`](../../contracts/content/sp006-animation-review-assets.json).

## Retained player-release gates

Syed Ahmed explicitly accepted SP-006 on 16 September 2026 for the pilot sample
and design stage. This closes the source family for that bounded purpose without
inventing player-release evidence. Before any current or replacement render is
distributed in the app, the release activity must record commercial source/tool
rights, final caption/cue timing and accessible alternatives, resolve A01's
audio track, retain final approved-version links and obtain coach/content review
of the exact release exports. No current file is approved for player release.
