# ACT-SP-080-01 — Soccolo Brand Bundle v4 review

| Field | Review value |
|---|---|
| Candidate | `docs/design/brand/Soccolo-Brand-Bundle v4/` |
| Baseline | Founder-accepted `Soccolo-Brand-Bundle v2/` |
| Review date | 14 September 2026 |
| Status | Accepted by Syed Ahmed on 14 September 2026 for `ACT-SP-080-01`; no independent privacy/device/production review claimed |

## Scope and lineage

V4 was created from the accepted v2 bundle. The v3 folder was not used as a
release baseline and remains separate review evidence. Only the useful video
concept was carried forward, through corrected source and newly generated
assets. The v2 artwork, reference PDFs, typeface, ICC profiles, licence and
rights disclosures remain the controlling inputs.

## Findings closed from the v3 review

| Finding | V4 result |
|---|---|
| Moving source veiled during the dissolve | Closed: the dissolve reveals a held copy of source frame zero; source motion/audio starts at 2.00 seconds |
| Hard-coded machine paths | Closed: generators and exporter resolve their bundle location and use supplied paths |
| Missing font, licence, ICC profiles and pinned dependencies | Closed: all are retained from v2 |
| Reverted provenance and overbroad rights claims | Closed: accepted v2 language is preserved; v4 adds only an explicit technical addendum |
| Existing outputs could be overwritten | Closed: exporter refuses existing media or sidecars and invokes FFmpeg in no-overwrite mode |
| Dry-run created output directories | Closed: dry-run performs validation and prints the plan without filesystem changes |
| Forced presets silently upscaled sources | Closed: contain scaling is down-only; odd source dimensions may be padded by one pixel |
| Audio preservation was overstated | Closed: the sidecar reports AAC transcoding when source audio exists |
| Duration checks lacked decoded-frame evidence | Closed: exact duration and decoded-frame count are validated before publication |
| No derived-media manifest | Closed: 18 assets record role, dimensions, duration, frames, codec, alpha/audio facts, size and SHA-256 |
| No complete release integrity record | Closed: the root release manifest records every bundle file and an aggregate SHA-256 |

## Verification evidence

- Video manifest write and check: 18 assets pass.
- Alpha intros: exactly 2.00 seconds and 60 frames at 30 fps.
- Synthetic silent source: 3.00-second/90-frame source produced a
  5.00-second/150-frame export with no audio.
- Synthetic audio source with explicit 9:16 preset and opt-in outro: source was
  contained without upscaling; output was 9.00 seconds/270 frames with AAC audio.
- A second export to an existing path was refused and the existing digest was
  unchanged.
- A dry run targeting a nonexistent nested directory reported zero filesystem
  changes and did not create the directory.
- Contact-sheet inspection confirmed the fixed plate, held-frame dissolve,
  unobscured source start, contain padding and opt-in outro.
- A clean portable rebuild completed successfully: 34 logo records, 56 print
  PDFs, 12 rendered video files and all contrast checks passed. Its video hashes
  matched the checked-in candidate exactly, and both its 224-file release
  manifest and the candidate's 224-file release manifest verified.
- The clean Windows rebuild serialized 115 pre-existing v2-derived SVG, PNG,
  JSON or PDF files differently, as the accepted provenance record warns can
  occur across runtimes. No accepted v2 release artwork was replaced: all 200
  v2 files exist in v4 and only the five intended authored/source documents
  differ. Both founder-supplied reference PDFs remain byte-identical to v2.

## Acceptance and retained boundary

Syed Ahmed accepted the two-second opening, held-frame dissolve, fixed navy
composition, silent intro and default absence of an outro on 14 September 2026.
He also accepted, as founder and interim privacy decision owner for this
activity, that export creation requires current media owner/guardian authority
or a purpose-bound grant and does not itself authorize sharing.

This role-consolidated acceptance completes the design/specification activity.
It is not an independent privacy assessment, device result, production control
or authorization to process real youth media before the applicable product,
privacy, safeguarding and implementation gates are satisfied.
