# ACT-SP-076-02 — Supplied Soccolo brand bundle review

| Field | Recorded value |
|---|---|
| Review version | 1.0 accepted |
| Review date | 14 September 2026 |
| Source issue | `SP-076` |
| Reviewed bundle | [`Soccolo-Brand-Bundle v2`](<brand/Soccolo-Brand-Bundle v2/README.md>), verified as 200 files |
| Founder decision | Syed Ahmed approved this exact v2 bundle as the current launch identity and accepted the disclosed rights/trade-mark risk on 14 September 2026 |
| Review outcome | **ACCEPTED; ACT-SP-076-02 AND SP-076 COMPLETE** |
| Supersedes | Concept E v0.1–v0.3 as the active candidate; those files remain historical decision evidence |
| External effect | Repository commit/publication authorized; no filing, purchase, domain action, supplier engagement or legal instruction |

## 1. Design assessment

The supplied bundle is a coherent, professionally structured identity system and is materially stronger than the earlier internal candidate packages. It consistently applies the selected `Soccolo` name and `Train, Play, Grow` theme across a wordmark, standalone symbol, stacked and horizontal lockups, app icons, favicons and fixed-background export frames.

The primary device uses two opposed open circular forms around a structural centre dot. In the wordmark it replaces the two middle `c` characters. This is memorable and name-specific, and the restrained navy/green system can serve children, teenagers, adults, guardians, coaches and clubs without reading as either infantile or corporate-only.

The design has documented small-size variants and rendered proofs. The primary/small-size double-C symbol is usable from 20–24 px according to the supplied proof; the 16 px rendering is visibly soft and is not approved as a critical standalone identifier. The supplied Orbit alternate is the stronger 16 px fallback, although using two symbols in market would reduce identity consistency.

## 2. Inventory and integrity verification

Read-only validation of the supplied files produced the following results:

| Check | Result |
|---|---|
| Inventory | 200 files: 49 SVG, 66 PNG, 58 PDF, 4 JSON, 11 Python, 6 Markdown, 2 ICC, 2 TXT, 1 CSS and 1 TTF |
| SVG parsing | **PASS:** 49 of 49 parse as XML |
| PNG structure | **PASS:** 65 of 65 have valid PNG headers and non-zero dimensions |
| Logo transparency | **PASS:** every PNG under `02-logo/` uses an alpha-capable PNG colour type |
| JSON parsing | **PASS:** 3 of 3 parse successfully |
| Logo manifest | **PASS:** all 34 records resolve to their referenced SVG/PNG files |
| Wordmark delivery | **PASS:** production logo SVGs use outlined paths; no external font or image reference was found in the logo exports |
| Typeface evidence | Poppins SemiBold font file plus SIL Open Font License 1.1 are present |
| Representative app master | 1024 × 1024 PNG and editable SVG present |
| Platform exports | iOS sizes, Android adaptive layers/monochrome, Play Store icon, web favicons and maskable icon present |
| Export treatment | 16:9, 1:1 and 9:16 PNG/SVG end frames plus safe-area overlays and the approved timing PDF present |
| Print delivery | **PASS:** 28 outlined CMYK press PDFs, 28 outlined RGB office PDFs and the approved two-page print reference are present |
| CMYK structure | **PASS:** all 28 press PDFs contain an embedded output intent and none contains live font resources |
| RGB structure | **PASS:** all 28 office PDFs are vector-only and none contains live font resources |

Deterministic digest of the sorted `SHA-256 + relative path` list for the 200 reviewed files:

`0c14faaa1579b4de6c772af507413307c96ddcf97292060368275b1571b58503`

Representative source hashes:

| File | SHA-256 |
|---|---|
| `01-master/soccolo-master.svg` | `853f2b363e8a649921630e202e2020be4c43f8ee827cefdcf981863229b995b4` |
| `02-logo/horizontal/soccolo-horizontal-tagline-light.svg` | `b85b174a6b393f1c4999ca79819befdf06229eaac7630614df7bd3c2fd180c35` |
| `03-app/soccolo-appicon-master-1024.svg` | `b7e25f82e34fb4770728d4a3bc78251503cb7f874a55e64be750fb2a1617f82e` |
| `06-provenance/rights-and-provenance.md` | `f5083eaf365ec06e883b67f4b2ca2e538f62f05efdc1f2527a04a5bf1f31c4f0` |

## 3. Remediation and remaining production-lock controls

### 3.1 Portable rebuild — completed

The generator now resolves its source, supplied typeface and FOGRA39L/sRGB profiles relative to `build.py`, requires an explicit separate `--output` directory, refuses to overwrite the checked-in bundle, and refuses an unmarked non-empty output directory. Temporary files are contained inside the marked build root and removed after the build. No `/home`, `/usr`, Windows-user or other machine-specific path remains in the Python source.

`01-master/source/requirements.txt` pins the direct and transitive Python dependencies used for the verification build. A clean Windows build regenerated 34 logo records and 56 placement-ready logo PDFs and passed the built-in contrast audit. The two approved reference PDFs were copied unchanged. Same-runtime checksums are useful release evidence, but cross-platform byte identity is not claimed for raster/PDF serialization.

### 3.2 User-supplied PDF package — completed

- Syed Ahmed supplied `soccolo-print-reference.pdf` (2 A4 pages, SHA-256 `331413818d19ed14ac34cdc7fcdc3d6ce59585a1631877052df956edec5cbf51`). Both pages render cleanly; the document has no encryption, forms, scripts or raster images. It records FOGRA39L conversion values, gamut limitations, print minimums, clear space and production notes.
- The reference is correctly treated as guidance rather than a placement-ready logo master. `Soccolo-Brand-Bundle v2` supplies the complete companion sets named by its index: 28 PDFs under `07-print/cmyk-for-print/` and 28 under `07-print/rgb-for-office/`.
- Syed Ahmed supplied `soccolo-export-timing-specification.pdf` (1 A4 landscape page, SHA-256 `4da35a84a779a33deda29a694625d3b40b17290cb0f1239183e6e73db26d1dc4`). It renders cleanly and fully defines a four-second 25/30 fps timeline, easing, crop-safe areas and the prohibition on symbol-geometry animation.
- Source-to-bundle and source-to-verification-build SHA-256 comparisons confirm that both supplied PDFs are copied byte-for-byte; the generator does not recreate or substitute them.
- Structural checks passed for all 58 PDFs. Representative CMYK and RGB logo sheets and every page of the two approved reference PDFs were rendered for visual review without clipping or missing artwork.
- A full immutable release checksum manifest remains a final-lock control rather than a missing format.

### 3.3 Rights and provenance — recorded with disclosed limitations

The bundle truthfully records that it was generated by Claude/Anthropic from Syed Ahmed's direction. Syed Ahmed has expressly recorded acceptance of the applicable terms and confirmed that the source session used his own **Claude for Work** account, identified as `sumarahmed`, rather than a third party's account. Anthropic identifies Claude for Work as a commercial product; its published Commercial Terms effective 17 June 2025 state that, between the parties and to the extent permitted by law, the customer retains input rights and owns outputs. The product and published terms are identified. Any negotiated order form/custom agreement, evidence tying `sumarahmed` to the customer workspace, and the prior sketch's provenance remain desirable due-diligence evidence, but the founder has accepted those disclosed limitations rather than representing that a legal rights warranty exists.

The supplied provenance originally claimed that the symbol was “exclusive” and owned “outright”, and included an irrelevant direction to “Tungsten Automation employees”. The v2 record now removes those assertions and instead states the actual evidence and unresolved legal questions. IP Australia recommends checking an AI tool's ownership/commercial terms, preserving creation evidence, and checking whether a generated logo resembles an existing mark before business use: <https://ipfirstresponse.ipaustralia.gov.au/options/considerations-when-using-artificial-intelligence-create-ip-0>.

The Poppins SemiBold dependency is adequately identified for design review: the exact `.ttf` file and SIL OFL 1.1 text are included. The font file hash is `d3bf1bdaf0550e83da9ac0b1d1d9fe6db086835a83aa28578e609a394b9a0286`.

### 3.4 Trade-mark decision — founder risk accepted; not independently cleared

The bundle remains **NOT INDEPENDENTLY CLEARED OR REGISTERED**. Its similarity review identifies the opposed double-C configuration as a material residual risk and confirms that no official register, image/device-code or class-specific professional search was performed. The earlier exact-word knockout checks are encouraging, but independent construction and an empty exact-name result do not answer trade-mark similarity, confusion or reputation questions.

Syed Ahmed, acting as founder and accountable product designer, expressly approved proceeding with the exact v2 bundle and declined to make an IP Australia or external clearance process a condition of SP-076 completion. That closes the human decision required by this activity through explicit business risk acceptance; it does not turn this review into legal clearance, registration or a non-infringement warranty. Professional assessment remains recommended before a filing or major irreversible brand spend.

## 4. SP-076 acceptance position

| Criterion | Current result | What remains |
|---|---|---|
| `AC-SP-076-01` — Rights and source files recorded | **MET** | Portable source, exports, font licence, Claude for Work account `sumarahmed`, applicable published terms, provenance limits and accepted residual risks are recorded without claiming a warranty or clearance |
| `AC-SP-076-02` — Placeholder clearly marked if final brand is pending | **MET** | Keep `Soccolo` and `Train, Play, Grow` in the replaceable brand manifest until final lock |
| `AC-SP-076-03` — Final launch asset has named approval | **MET** | Syed Ahmed approved `Soccolo-Brand-Bundle v2`, aggregate bundle digest `0c14faaa1579b4de6c772af507413307c96ddcf97292060368275b1571b58503`, as the current launch asset on 14 September 2026 |

Syed Ahmed's dated approval completes `ACT-SP-076-02` and `SP-076`. It authorizes repository publication and use of the v2 brand system as the current launch identity. It is not a trade-mark filing instruction, legal clearance or rights warranty; those limits remain visible as accepted business risk.

## 5. Recommended completion route

1. **DONE:** make the generator portable and safe, pin build dependencies, and reproduce the package in a staging directory.
2. **DONE:** the supplied print reference and export timing specification are incorporated with the complete 28-file CMYK and 28-file RGB companion sets.
3. **DONE FOR THIS ACTIVITY:** record Claude for Work account `sumarahmed`, published Commercial Terms and the remaining account/custom-agreement/prior-sketch evidence limits; founder accepted the disclosed limits.
4. **RISK ACCEPTED:** no IP Australia or external clearance is required by the founder as an SP-076 completion gate; the recommendation and double-C risk remain documented.
5. **DONE:** bind the approved 200-file v2 release by aggregate digest and record Syed Ahmed's dated launch-asset approval.
