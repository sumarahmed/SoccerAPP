# ACT-SP-080-01 — Logo-first composition acceptance

| Field | Recorded value |
|---|---|
| Activity | ACT-SP-080-01 |
| Source issue | SP-080 |
| Decision version | 1.0 |
| Decision date | 14 September 2026 |
| Outcome | Accepted |
| Accountable person | Syed Ahmed, Founder/product owner and interim privacy decision owner for this activity |
| Acceptance scope | Design/specification activity only; SP-080 remains open for ACT-SP-080-02 and ACT-SP-080-03 |
| Repository base | `12193c95` on `main` |

Syed Ahmed reviewed and accepted the exact two-second logo-first composition,
held-frame dissolve, source-preservation behavior, audio rule, fixed navy
composition and default absence of an outro. He also accepted that export
creation requires current media owner/guardian authority or a purpose-bound
grant and does not itself authorize sharing.

## Accepted evidence

- [Composition and input/output contract](../design/ACT-SP-080-01-logo-first-composition.md), version 1.0.
- [V4 technical review](../design/ACT-SP-080-01-soccolo-brand-bundle-v4-review.md).
- [Accepted Soccolo Brand Bundle v4](<../design/brand/Soccolo-Brand-Bundle v4/README.md>), aggregate release SHA-256 `350a76d214465780c7d80a7722669b8d75823357e1fae615020cfcd09311aa44` across 224 recorded files.
- [Rejected v3 review](../design/ACT-SP-080-01-soccolo-brand-bundle-v3-review.md), retained as remediation evidence; the v3 bundle itself is not published.

## Completion assessment

- The approved logo, duration, transition, orientation, audio choice and
  preserved-source contract are explicit.
- Synthetic silent and audio fixtures passed exact duration/frame, orientation,
  overwrite refusal and side-effect-free dry-run checks.
- The v4 video manifest covers 18 derived assets; the complete release manifest
  covers 224 files and verifies.
- All 200 accepted v2 files are retained. Only five intended authored/source
  records differ, and the two founder-supplied PDFs remain byte-identical.

`ACT-SP-080-01` is accepted and complete as a design/specification activity.
This role-consolidated decision is not independent privacy review, device
validation, production enforcement, legal clearance or permission to use real
youth media. `ACT-SP-080-02` must now define cancellation, low-space, overlap,
copy-state and deliberate-sharing semantics; `ACT-SP-080-03` remains the final
SP-080 verification and handoff.
