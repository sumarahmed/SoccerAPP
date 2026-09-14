# SP-076 — Brand assets and ownership decision

| Field | Recorded value |
|---|---|
| Decision version | 1.0 |
| Decision date | 14 September 2026 |
| Source issue | SP-076 |
| Activity | `ACT-SP-076-02` — Complete human action: Prepare brand assets and ownership record |
| Acceptance criterion | AC-SP-076-01, AC-SP-076-02, AC-SP-076-03 |
| Outcome | Accepted |
| Accountable person | Syed Ahmed, Founder/product designer |
| Repository base | `5994d3cc47dd9fffe1a7eb261d5be7c5f84ad7fc` on `main` |
| Selection review | [ACT-SP-076-02 supplied-bundle review](../design/ACT-SP-076-02-soccolo-brand-bundle-review.md) |
| Selected asset bundle | [Soccolo Brand Bundle v2](<../design/brand/Soccolo-Brand-Bundle v2/README.md>) |
| Historical candidate | [Concept E v0.3](../design/brand/soccolo-e-v0.3/README.md), retained as superseded review evidence |
| Approved bundle digest | `0c14faaa1579b4de6c772af507413307c96ddcf97292060368275b1571b58503` over sorted `SHA-256 + relative path` records for 200 files |
| External effect | Repository commit/publication authorized; no domain, filing, supplier engagement, commission, payment or legal instruction |

## 1. Founder decisions

| Decision | Recorded outcome | Effect |
|---|---|---|
| Working name | `Soccolo` | Approved current launch name; remains centrally changeable if the founder later revises it |
| Working theme | `Train, Play, Grow` | Approved current theme; remains centrally changeable and is not claimed as an exclusive mark |
| Selected visual system | **Supplied `Soccolo-Brand-Bundle v2`**, digest `0c14faaa1579b4de6c772af507413307c96ddcf97292060368275b1571b58503` | Approved by Syed Ahmed on 14 September 2026 as the current launch asset |
| Superseded design | Internal Concept E v0.1–v0.3 | Historical evidence only; no longer the active visual source |
| Product architecture | Central brand manifest | Product-facing name, theme and asset references must not be duplicated or hard-coded across the application |

Syed Ahmed's statements approving completion and directing commit/publication are recorded as the named launch-asset decision. He expressly declines to make IP Australia or external trade-mark clearance a condition of this activity. The approval accepts the disclosed risk; it does not represent that the mark is registered, independently cleared or guaranteed non-infringing.

## 2. Technical review outcome

The selected bundle is comprehensive and visually coherent. Checks passed across its 200 files: all 49 SVG and 4 JSON files parse, all 34 logo-manifest references resolve, logo PNGs preserve transparency, production logo SVGs use outlined vector paths, and all 58 PDFs pass structural inspection. All 28 CMYK press PDFs contain an embedded output intent and neither the CMYK nor RGB placement-ready PDFs contain live font resources.

The controlling review is recorded in [ACT-SP-076-02](../design/ACT-SP-076-02-soccolo-brand-bundle-review.md). The latest technical position is:

1. the generator now uses repository-relative inputs, an explicit marked output directory, pinned dependencies and a verified overwrite guard;
2. the bundle includes Syed Ahmed's supplied print-reference and export-timing PDFs unchanged, plus all 28 CMYK press and 28 RGB office placement-ready logo PDFs named by the print reference;
3. Syed Ahmed's acceptance of the applicable Anthropic terms and use of his own Claude for Work account `sumarahmed` are recorded, and the published Commercial Terms effective 17 June 2025 are identified; remaining account/custom-agreement/prior-sketch evidence limits are disclosed and accepted; and
4. the double-C trade-mark risk remains documented as **NOT INDEPENDENTLY CLEARED**, while the founder has accepted proceeding without an IP Australia or external clearance gate.

## 3. Rights and authority boundary

No trade-mark registration, paid legal work, domain purchase, designer commission or external supplier contact is authorized by this decision. Repository publication and use of the exact v2 bundle as the current launch identity are authorized. The existing AUD 0 incremental discovery cap remains in force.

The supplied Poppins SemiBold file and SIL OFL 1.1 licence are present. The bundle's claims that the generated symbol is “exclusive” or owned “outright” are not accepted as legal conclusions, because the same provenance record says no assignment is in place and AI-related human-authorship certainty is unresolved.

The selected design is approved for product implementation and launch use while remaining replaceable through the central brand manifest. It must not be described as registered, independently cleared, guaranteed non-infringing or exclusively owned.

## 4. Acceptance assessment

| Criterion | Outcome | Evidence / remaining requirement |
|---|---|---|
| `AC-SP-076-01` — Rights and source files recorded | **MET** | Portable sources, component inventory, font licence, Claude for Work account/terms and all known provenance, authorship and clearance limits are recorded; the founder accepts those limits without claiming legal clearance |
| `AC-SP-076-02` — Placeholder clearly marked if final brand is pending | **MET** | `Soccolo`, `Train, Play, Grow` and the bundle are selected but explicitly changeable until the final release lock |
| `AC-SP-076-03` — Final launch asset has named approval | **MET** | Syed Ahmed approved the exact 200-file v2 bundle identified by digest `0c14faaa1579b4de6c772af507413307c96ddcf97292060368275b1571b58503` on 14 September 2026 |

`ACT-SP-076-02` and `SP-076` are complete and accepted. This record authorizes repository commit/publication and the dependent implementation handoff without authorizing registration, paid legal work or other external spend.

## 5. Acceptance and future change control

Syed Ahmed accepted this decision and exact bundle digest on 14 September 2026 and authorized commit and GitHub publication. Future artwork, name, theme or provenance changes create a new bundle version and require a new digest and named approval. Any later trade-mark filing or irreversible brand spend should reconsider the recorded clearance recommendation, but that recommendation is not an open SP-076 completion condition.
