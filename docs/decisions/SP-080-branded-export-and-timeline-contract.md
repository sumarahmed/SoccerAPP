# SP-080 — Branded export and timeline contract decision

| Field | Recorded value |
|---|---|
| Decision version | 1.0 |
| Decision date | 15 September 2026 |
| Source issue | SP-080 |
| Acceptance criterion | AC-SP-080-01 through AC-SP-080-04 |
| Outcome | Accepted |
| Accountable person | Syed Ahmed, Founder/product owner and interim privacy decision owner for this design task |
| Review status | Owner acceptance recorded; independent privacy and device-QA review not claimed |
| Repository base | `6c3ffb24d4130ac12c563a42d247d7ed7f66aa1f` on `main` |

Syed Ahmed reviewed and accepted `ACT-SP-080-02` version 1.0 and
`ACT-SP-080-03` version 1.0 on 15 September 2026, authorized commit and GitHub
publication, and confirmed the earlier acceptance of `ACT-SP-080-01`. SP-080 is
complete as a design/specification task.

## 1. Accepted evidence

- [ACT-SP-080-01 logo-first composition](../design/ACT-SP-080-01-logo-first-composition.md), version 1.0, SHA-256 `1CDD92877C73DD5A05FF5470D67CD625B4450854E01CE9FEC60558D8A2644CA1`.
- [ACT-SP-080-02 timeline and failure semantics](../design/ACT-SP-080-02-timeline-and-failure-semantics.md), version 1.0, SHA-256 `6C4650C048FFBE5FE8826120E3C91A1D27A8911D30FDF1B041C94A373D8AFA17`.
- [ACT-SP-080-03 acceptance evidence](../design/ACT-SP-080-03-acceptance-evidence.md), version 1.0.
- [SP-080 export-contract fixtures](../../contracts/sp-080/export-contract-fixtures.json), contract 1.0/schema 1, SHA-256 `71CD573F974448D73830E60A2559D993EA3101A54B0849688C607CAE569AFD07`.
- [Dependency-free fixture validator](../../tests/media/validate-sp080-contract.cjs), SHA-256 `10507C6DA25A56CBB26F765A982D6D5D58AEB5B2406AFAFD9BD2AB084B614726`.
- [Accepted Soccolo Brand Bundle v4](<../design/brand/Soccolo-Brand-Bundle v4/README.md>), aggregate SHA-256 `350a76d214465780c7d80a7722669b8d75823357e1fae615020cfcd09311aa44` across 224 manifest records.

The separate v3 review remains remediation history. The v3 bundle is not part
of the accepted or published evidence set.

## 2. Accepted contract

1. Every output has one two-second logo-first intro: 1.60 seconds fixed and a
   0.40-second dissolve to held source frame zero. Source motion/audio begins at
   export time 2.00 seconds.
2. Capture, source-presentation, training and export clocks remain distinct.
   Chapters add exactly the intro frames; interruption gaps remain metadata and
   do not become invented video or training time.
3. Cancellation, insufficient space, renderer failure or validation failure
   publishes no usable output, mutates no source and invokes no sharing.
4. Output becomes ready only after frame, duration, stream and digest validation
   followed by same-volume atomic publication and a durable receipt.
5. Storage bounds are measured per selected adapter/device under `SP-081`.
   Missing conservative bounds fail preflight rather than assuming space.
6. Local export, saving an external copy and invoking a share handoff are
   distinct, deliberate states. Current media authority is rechecked before
   external handoff, and completed handoff limits are described honestly.
7. The four-second outro is disabled by default. No timer or demonstration
   overlay is silently added, and a microphone-off source remains stream-silent.

## 3. Acceptance criteria

| Criterion | Accepted design outcome |
|---|---|
| `AC-SP-080-01` | Logo-first storyboard and fixed held-frame transition are explicit and backed by inspected synthetic outputs |
| `AC-SP-080-02` | Intro/export time is excluded from source and training time, with exact 25/30 fps fixture mappings |
| `AC-SP-080-03` | Silent source produces no audio stream; source audio, when present, begins with source picture |
| `AC-SP-080-04` | Timer/demo overlays are prohibited and outro requires an explicit request |

## 4. Limits retained

- No iOS/Android app, production compositor, device integration, cloud upload or
  share workflow is implemented by this decision.
- No named physical-device, variable-frame-rate, rotation, thermal, battery,
  background, interruption or platform-permission result is claimed.
- Adapter-specific scratch-space and safety margins still require measurement.
- No real youth, guardian or customer media was processed.
- Syed Ahmed's role-consolidated privacy-boundary decision is not an independent
  privacy assessment or permission to bypass later privacy/safeguarding gates.
- External-copy revocation cannot be guaranteed after a successful OS/provider
  handoff; later UX and implementation must state that limitation.

`SP-081` now owns on-device adapter selection and measured feasibility. Later
media/share activities must consume this accepted contract without silently
changing the clocks, failure publication rule or authority boundary.
