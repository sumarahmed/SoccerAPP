# ACT-SP-080-01 — Logo-first composition review

| Field | Review value |
|---|---|
| Activity | `ACT-SP-080-01` — Specify logo-first composition |
| Source | `SP-080` — Specify branded export and timeline contract |
| Review version | 1.0 |
| Review date | 14 September 2026 |
| Status | Accepted by Syed Ahmed on 14 September 2026; `ACT-SP-080-01` complete as a design/specification activity |
| Executor | Media agent |
| Accountable owner | Syed Ahmed, founder/product owner for this design decision; implementation owner remains to be assigned |
| Reviewer | Syed Ahmed, role-consolidated founder review; independent privacy and device QA not claimed |
| Founder decision | Accepted the duration, transition and default composition on 14 September 2026 |
| Privacy decision | Accepted by Syed Ahmed as interim privacy decision owner for this activity; export requires current media authority and creates no sharing authority |
| Deliverable | Export storyboard and composition input/output contract |

Rejected v3 evidence is assessed in the
[Soccolo Brand Bundle v3 review](ACT-SP-080-01-soccolo-brand-bundle-v3-review.md).
Its usable video idea has been rebuilt, without adopting v3, in the
[Soccolo Brand Bundle v4 review candidate](<brand/Soccolo-Brand-Bundle v4/README.md>).
V4 is the controlling approved brand input for this activity following founder
acceptance on 14 September 2026.

## 1. Recommendation

Adopt a **two-second Soccolo opening plate** for a deliberately requested export.
The current source recording remains unchanged. The export begins with the
approved Soccolo identity, dissolves to a still copy of the source's first
display frame, and starts source motion and source audio at export time 2.00 s.

The four-second end-frame treatment in the accepted brand bundle is retained as
an optional brand asset, but it is **not part of the default export**. It must
never be appended unless a later, deliberate product choice authorizes it.

This recommendation satisfies the product's logo-first requirement without
dropping, obscuring or advancing the first 0.40 s of the source recording. V3
instead faded the brand plate over the first 0.40 s of moving source footage.
V4 corrects that behavior and implements this recommendation using a held copy
of source frame zero.

## 2. Controlling inputs and conflict resolution

| Input | Decision for this activity |
|---|---|
| [SP-001 accepted launch assumptions](../decisions/SP-001-launch-and-account-assumptions.md) | Australia-first product boundary and founder authority remain in force. |
| [SP-076 accepted brand decision](../decisions/SP-076-brand-assets-and-ownership.md) | Use the selected `Soccolo-Brand-Bundle v2` and keep all product-facing brand references centrally replaceable. |
| [Accepted brand bundle](<brand/Soccolo-Brand-Bundle v2/README.md>) | Use the navy identity plate, approved stacked Soccolo lockup with `Train, Play, Grow`, crop-safe compositions and static-mark rule. |
| [Accepted v4 bundle](<brand/Soccolo-Brand-Bundle v4/README.md>) | Implements the held-frame transition, verified media set and non-overwriting reference exporter; release digest `350a76d214465780c7d80a7722669b8d75823357e1fae615020cfcd09311aa44`. |
| [Export timing specification](<brand/Soccolo-Brand-Bundle v2/04-export-treatment/soccolo-export-timing-specification.pdf>) | Reuse its visual safe areas and prohibition on animating the mark. Its four-second timing describes an end frame and does not override SP-080's logo-first opening requirement. |
| [Pilot and design pack](soccer_pilot_and_design_pack.md) | Preserve its proposed two-second opening, fixed appearance, original source, and no automatic timer/demo burn-in. |
| [SP-008 accepted data/access decision](../decisions/SP-008-data-map-and-access-matrix.md) | Export is a protected media action. Media ownership or a current purpose-bound grant is required; export does not create sharing authority. |

The older Concept E storyboard is superseded as brand artwork, but its proposed
two-second structure is consistent with the product requirement. Its original
1.60–2.00 s wording left source timing ambiguous: footage appeared to dissolve
in before its time zero began. This review removes that ambiguity by using a
still copy of source frame zero during the dissolve. Source playback itself
starts only at export time 2.00 s.

## 3. Approval storyboard

### 3.1 Default timeline

| Export time | Video | Audio | Time-base rule |
|---:|---|---|---|
| 0.00–1.60 s | Fixed navy identity plate with the approved stacked Soccolo lockup and tagline | Silence; no generated sting, ambience or effect | Intro/export time only; no source time advances |
| 1.60–2.00 s | Cross-dissolve the complete identity plate to a still copy of source display frame zero | Silence | Source frame zero may become visible, but remains held; no source time advances |
| 2.00 s onward | Start the source picture at source time 0.00 s | Start source audio at source time 0.00 s if it exists and is authorized | `sourceTime = exportTime - 2.00 s` |
| Source end | End the export with the source | End with source audio | No automatic end card, timer, demonstration layer or additional outro |

The full intro is exactly 2.00 seconds: 50 frames at 25 fps or 60 frames at
30 fps. The transition occupies the final 0.40 seconds of that intro. A
frame-accurate implementation fixture belongs to `ACT-SP-080-02`.

### 3.2 Transition and motion

- Apply the bundle's `cubic-bezier(0.33, 0, 0.15, 1)` easing to the whole-frame
  cross-dissolve.
- Keep the Soccolo symbol, centre dot, c-forms, wordmark and tagline completely
  static. Do not rotate, close, overlap, bounce or independently animate them.
- Do not add gradients, glow, particles, child imagery, sponsor marks, URLs,
  calls to action or unapproved copy.
- The app's light/dark setting does not affect an export already requested; the
  identity plate always uses the approved fixed navy treatment.

## 4. Orientation and composition

The default output orientation matches the source display orientation. Do not
silently rotate, stretch, crop or upscale source media.

| Output shape | Identity composition | Minimum platform safe area |
|---|---|---|
| 16:9 landscape | 1920 × 1080 reference; mark width 40% | 5% horizontal and vertical |
| 1:1 square | 1080 × 1080 reference; mark width 40% | 6% horizontal and vertical |
| 9:16 portrait | 1080 × 1920 reference; mark width 62% | 6% horizontal, 14% vertical |

For a source whose aspect ratio does not match one of these shapes, render the
identity plate at the selected output dimensions and contain the complete source
picture against the approved navy background. A crop may be offered only as a
separate, explicit user choice in a later contract. The first implementation
must not infer a crop from device orientation or social-platform convention.

The renderer resolves the active files through the versioned central brand
manifest. It must not hard-code `Soccolo`, `Train, Play, Grow`, a user directory
or a permanent v2 asset path into application logic.

## 5. Audio contract

- The intro contains no generated or bundled audio.
- A microphone-off or otherwise silent source remains silent for the entire
  export. The exporter must not synthesize an audio track that can create sound.
- If the source contains authorized audio, it begins with source picture at
  export time 2.00 s and remains synchronized to source time zero.
- The composition must not duck, normalize, loop, fade, replace or extend source
  audio merely to accommodate the brand plate.
- Any technically necessary codec conversion must be reported in export
  metadata and must not be represented as bit-for-bit source preservation.

## 6. Source and output contract

### 6.1 Required input

| Field | Requirement |
|---|---|
| Source reference | Stable local or authorized media reference; never a path embedded in product configuration |
| Source identity | Digest or equivalent immutable identifier plus capture version |
| Media facts | Display dimensions, rotation metadata, duration, frame rate/time base and audio presence |
| Capture facts | Microphone choice and the authoritative training/session time range |
| Export preset | Source-matching default or an explicit supported aspect-ratio choice |
| Brand reference | Active brand-manifest version and asset digest, resolved at export start |
| Authority | Current media owner/guardian authority or an explicit resource/purpose-bound grant |

### 6.2 Required output

| Field | Requirement |
|---|---|
| Export media | A new file or object; never an overwrite of the capture |
| Duration | Source presentation duration plus exactly 2.00 s; no implicit tail |
| Video mapping | Intro and source time ranges, transition range, orientation and any contain padding |
| Audio mapping | `none` for a silent source, otherwise source audio beginning at export time 2.00 s |
| Provenance | Source identity, export identity, brand-manifest version/digest and composition-contract version |
| Integrity result | Confirmation that the source identity is unchanged after export, or an explicit failure |
| Warnings | Any codec conversion, unsupported orientation, reduced resolution or other honest limitation |

Creating an export grants no recipient access and performs no upload or share.
Those require a separate deliberate action and current authorization. Detailed
cancellation, low-space, retry, copy state, overlap math and sharing behavior are
the scope of `ACT-SP-080-02`.

## 7. Acceptance review

| Check | Review result |
|---|---|
| Approved logo identified | **READY:** selected v2 stacked Soccolo lockup and fixed navy treatment, carried unchanged into v4 |
| Duration and transition defined | **ACCEPTED:** 2.00 s total; 0.40 s dissolve to held source frame zero |
| Orientation defined | **READY:** source-matching default with explicit 16:9, 1:1 and 9:16 compositions; no inferred crop/upscale |
| Audio choice defined | **READY:** no intro audio; silent source remains silent; source audio starts at export time 2.00 s |
| Source preserved | **READY:** separate export, unchanged source identity and complete source timeline |
| No hidden overlays/outro | **READY:** timer/demo layers and four-second end card disabled by default |
| Export permission boundary | **ACCEPTED FOR THIS DESIGN ACTIVITY:** Syed Ahmed is the named interim privacy decision owner; protected media authority is checked at export request and export creates no sharing authority |
| Reference render validation | **READY:** v4 assets and synthetic silent/audio fixtures pass exact duration, decoded-frame, orientation, non-overwrite and dry-run checks |
| Device validation | **NOT CLAIMED:** device evidence belongs to later implementation activities |

## 8. Owner decision

Syed Ahmed accepted on 14 September 2026:

1. the two-second default opening;
2. the 0.40-second dissolve to a held copy of source frame zero;
3. the stacked logo and tagline on the fixed navy plate in all three supported
   shapes;
4. silence throughout the intro, with source audio beginning at export time
   2.00 s; and
5. no automatic timer/demo burn-in or four-second end card.

Syed Ahmed also accepted, as founder and interim privacy decision owner for this
activity, that export creation uses current media owner/guardian authority or a
resource/purpose-bound grant and does not itself authorize sharing.

`ACT-SP-080-01` is complete as a design/specification activity. This
role-consolidated decision does not claim an independent privacy assessment,
device validation, production enforcement or authority to process real youth
media before later gates are satisfied.

## 9. Handoff state

The storyboard, accepted v4 bundle and composition input/output contract are
the fixed predecessor for `ACT-SP-080-02`. Only synthetic local fixtures were processed; no user media,
device test, upload, sharing or production publication has been performed.
`ACT-SP-080-02` may now define product implementation, failure semantics and
deliberate sharing states without changing these visual or source-preservation
decisions.
