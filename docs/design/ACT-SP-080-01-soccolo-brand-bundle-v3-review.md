# ACT-SP-080-01 — Soccolo Brand Bundle v3 review

| Field | Recorded value |
|---|---|
| Review date | 14 September 2026 |
| Candidate | `docs/design/brand/Soccolo-Brand-Bundle v3` |
| Candidate label | Version 1.3 |
| Activity | `ACT-SP-080-01` — Specify logo-first composition |
| Compared with | Accepted `Soccolo-Brand-Bundle v2` |
| Review outcome | **REVISE — video concept is usable; v3 is not ready to replace v2** |
| Repository effect | Review only; no acceptance, commit or publication authorized by this record |

## 1. Executive assessment

The new `08-video` section supplies a coherent two-second intro, a separate
four-second opt-in end card, three orientations, editor-ready flat clips, alpha
clips, mark plates, a filmstrip, a Python exporter and a detailed written
contract. The rendered video assets are visually consistent and structurally
sound.

The bundle as a whole is not acceptable as a successor to the already accepted
v2 package. V3 is not a clean additive revision: it removes three portability
files, restores machine-specific generator paths and restores superseded rights
and provenance wording. It also claims runtime guarantees that its exporter
does not currently enforce.

The safe route is to keep v2 controlling, remediate the v3 `08-video` section,
and then produce a true v3 derived from v2 plus the corrected video additions.

## 2. Inventory and comparison

| Check | Result |
|---|---|
| V2 inventory | 200 files |
| V3 inventory | 219 files |
| Byte-identical shared files | 128 |
| Changed shared files | 69 |
| New v3 files | 22, all under `08-video/` |
| Files present in v2 but missing in v3 | 3 |
| V3 file types | 73 PNG, 58 PDF, 49 SVG, 13 Python, 7 Markdown, 6 MOV, 6 MP4, 4 JSON, 1 CSS, 1 TTF, 1 TXT |

The three missing v2 files are:

- `01-master/profiles/FOGRA39L_coated.icc`;
- `01-master/profiles/sRGB.icc`; and
- `01-master/source/requirements.txt`.

All 56 placement-ready print PDFs, both reference PDFs and eleven source or
governance files differ from v2. Therefore the candidate cannot be reviewed as
“v2 plus videos”; the non-video changes also require reconciliation.

## 3. Video asset results

### 3.1 Structural and visual checks

| Asset family | Result |
|---|---|
| Three flat intro MP4s | **PASS:** 2.00 s, 30 fps, H.264 High, yuv420p; 1920×1080, 1080×1080 and 1080×1920 |
| Three alpha intro MOVs | **PASS:** 2.40 s, 30 fps, QuickTime RLE ARGB with alpha; all three orientations |
| Three flat outro MP4s | **PASS:** 4.00 s, 30 fps, H.264 High, yuv420p; all three orientations |
| Three alpha outro MOVs | **PASS:** 4.00 s, 30 fps, QuickTime RLE ARGB with alpha; all three orientations |
| Decode test | **PASS:** all 12 clips decode completely without reported errors |
| Audio streams | **PASS for assets:** none of the 12 supplied intro/outro clips contains an audio stream |
| Mark behavior | **PASS:** opacity changes only; no dot/c-form motion, overlap, rotation or geometry animation observed |
| Composition | **PASS:** intro uses the stacked lockup without tagline; opt-in outro uses the stacked lockup with tagline |
| Orientation | **PASS:** 16:9, 1:1 and 9:16 marks are centred consistently and remain legible |
| Filmstrip | **PASS as review evidence:** accurately shows the proposed intro-over-footage dissolve and separate opt-in outro |

The intro and outro visuals are professional, restrained and suitable for the
selected Soccolo system. The distinction between a short title without tagline
and a longer signature with tagline is a sound hierarchy.

### 3.2 Timeline decision still required

V3 starts the source at export time 2.00 s and keeps the fading intro over the
source until 2.40 s. No source frame is deleted, but the first 0.40 s of training
footage is visibly veiled by the brand plate.

That is different from the current review recommendation, which dissolves to a
held copy of source frame zero during 1.60–2.00 s and starts unobscured source
motion at 2.00 s. The two choices are:

| Choice | Benefit | Cost |
|---|---|---|
| **A — held-first-frame dissolve (recommended)** | Every moving source frame is fully visible; source motion/audio begins cleanly at 2.00 s | The first source frame appears as a still during the last 0.40 s of the intro |
| B — v3 overlay dissolve | More conventional flowing transition | The first 0.40 s of training motion is partially obscured even though it is not deleted |

Because a ball touch, first step or ball entry can occur immediately, this
review recommends A. The founder must approve A or B; the report does not make
that human product decision silently.

## 4. Runtime and contract findings

### V3-080-01 — Claimed frame-count guarantee is absent

**Severity: High.** `video-export-specification.md`, the revision log and the
tool help state that the export frame count is checked against intro frames plus
source frames. `soccolo-export.py` probes duration after encoding but contains
no frame or packet count and no comparison with an expected count. The sidecar
then records the stronger “no frame dropped” statement without evidence.

**Required correction:** obtain authoritative input/output frame counts where
the source permits it, compare against the defined transformation, fail on a
mismatch and record the measured counts. For VFR sources, use timestamp-based
fixtures and do not claim frame-for-frame equality.

### V3-080-02 — Existing outputs can be overwritten

**Severity: High.** The tool refuses to use the source path as output, but it
passes `-y` to ffmpeg and writes the JSON sidecar with mode `w`. An unrelated
existing export or sidecar at the target path is overwritten without a refusal
or backup. That conflicts with the stated “new file” guarantee.

**Required correction:** fail if either output path already exists unless the
caller supplies a separate, explicit overwrite flag; write media and sidecar to
temporary sibling files and atomically publish only after all validation passes.

### V3-080-03 — Audio is transcoded despite “otherwise untouched” wording

**Severity: Medium.** An audio-bearing source is always encoded to AAC at
192 kbit/s. That can be a reasonable output policy, but it is not the same audio
and is not “otherwise left alone.”

**Required correction:** describe the actual transcode, record input/output
codec and channel facts, and reserve “preserved” for timing/content semantics.

### V3-080-04 — Forced orientation can upscale

**Severity: Medium.** `auto` preserves even-sized source dimensions, but a
forced preset selects 1920×1080, 1080×1080 or 1080×1920 and scales the source to
fit. A smaller source can therefore be enlarged despite the accepted no-silent-
upscale rule.

**Required correction:** cap the forced canvas to a non-upscaling size or make
upscaling a separate explicit choice and report it in the sidecar.

### V3-080-05 — Reproducible dependency/runtime contract is missing

**Severity: High.** The v2 pinned Python dependency file is absent. The new tool
requires `ffmpeg`, `ffprobe`, CairoSVG, fontTools and Pillow but records no
supported ffmpeg build/version or installation verification. On this PC the
provided Python runtime cannot start either script from the bundle alone, and
`ffmpeg`/`ffprobe` are not on `PATH`.

**Required correction:** restore pinned Python requirements, add a documented
ffmpeg/ffprobe version floor and startup checks, and provide a read-only
`--check` command that validates dependencies and assets before a media run.

### V3-080-06 — Dry run and failure publication are not fully non-mutating

**Severity: Medium.** Output directories are created before the `--dry-run`
branch. A failed encode can leave a partial target, and a sidecar failure can
leave an apparently successful export without its required evidence.

**Required correction:** make dry-run filesystem-neutral and use staged files
plus atomic publication/cleanup for both media and sidecar.

### V3-080-07 — Video release manifest is absent

**Severity: Medium.** The 18 rendered clips/marks and filmstrip are described in
prose but have no machine manifest binding their path, digest, role, dimensions,
frame rate, duration, codec, alpha/audio state and generation contract.

**Required correction:** add a versioned `08-video/manifest.json` and validate
it as part of the bundle build/release check.

## 5. Bundle regression findings

### V3-BUNDLE-01 — Generator portability regressed

**Severity: High.** The candidate restores `/home/claude/...` output, work,
source and font paths in `build.py` and `sheets.py`, and `/usr/share/...` ICC
paths in `printcolour.py`. It omits the two bundled ICC profiles. `build.py`
also imports `video` without adding `08-video/` to its module search path.

This directly reverses the portable/safe generator accepted in v2, while the
v3 revision log states that portability was verified from a clean extraction.

**Required correction:** start from the accepted v2 source, preserve its
explicit marked output directory, overwrite guard, relative profiles, pinned
requirements and contained work directory, then integrate the video module
through an explicit relative import/path.

### V3-BUNDLE-02 — Accepted provenance corrections regressed

**Severity: High.** V3 again states or implies that the symbol is “exclusive”
or owned “outright,” includes an irrelevant instruction for Tungsten Automation
employees, leaves Anthropic output terms pending, and does not preserve the
accepted record that the source used Syed Ahmed's Claude for Work account
`sumarahmed` with the disclosed terms/ownership limitations.

**Required correction:** retain the accepted v2 provenance and legal caveats
verbatim unless a new, evidenced decision changes them. Add video provenance
without reviving rejected legal conclusions.

### V3-BUNDLE-03 — Reference and print outputs were regenerated unnecessarily

**Severity: Medium.** All 58 PDFs differ from the accepted v2 files. Structural
inspection passes for all 59 pages, and the timing sheet, both print-reference
pages and representative CMYK/RGB placements render cleanly. The visual content
reviewed appears consistent, but v3 provides no release manifest explaining why
every accepted PDF changed.

**Required correction:** copy the accepted user-supplied reference PDFs
byte-for-byte and preserve accepted placement assets unless a documented source
change requires regeneration. Bind the resulting bundle with a new immutable
checksum manifest.

## 6. Two top-level brand files

The two files placed directly in `docs/design/brand/` are exact byte-for-byte
duplicates of v3 assets:

| Top-level file | Matching v3 file | SHA-256 |
|---|---|---|
| `soccolo-export-filmstrip.png` | `08-video/soccolo-export-filmstrip.png` | `3e8f424f429758f0261264d167803cb8b37d4c31f8c3d3befac97dd3552f53c8` |
| `soccolo-intro-16x9.mp4` | `08-video/intro/soccolo-intro-16x9.mp4` | `e6db52d50c912ad9369df250c84e6241fffaa0446bb45d551b0206671a95f382` |

They are useful temporary review copies but should not become a second
authoritative location in the repository. Keep the files inside the versioned
bundle and remove or exclude the top-level duplicates only after explicit user
approval.

## 7. Acceptance position

| ACT-SP-080-01 concern | Current result |
|---|---|
| Approved visual identity available | **PASS:** v2 remains the accepted identity; v3 video rendering uses it coherently |
| Duration/transition | **REVIEW:** two-second opening is sound; founder must choose held-first-frame or v3 overlay dissolve |
| Orientations | **PASS FOR PRE-RENDERED ASSETS:** all three shapes supplied; exporter upscaling rule needs correction |
| Audio choice | **PASS FOR SILENT BRAND ASSETS; REVISE EXPORTER WORDING/EVIDENCE** |
| Original source preservation | **DESIGN INTENT PASS; RUNTIME CLAIM NOT YET PROVEN** |
| No automatic timer/demo/outro | **DESIGN PASS:** outro is opt-in; overwrite/failure behavior still needs correction |
| Privacy/export authority | **PENDING NAMED PRIVACY CONFIRMATION** |

`ACT-SP-080-01` should remain in review. The video artwork can be retained as
candidate evidence, but neither v3 nor its exporter should be accepted or
published as the controlling bundle until the High findings are remediated and
the transition/privacy decisions are recorded.

## 8. Recommended remediation route

1. Copy the accepted v2 bundle to a clean candidate and add only the v3
   `08-video` concept and corrected source.
2. Implement the frame/timestamp validation, non-overwrite and atomic-output
   guarantees before describing them as enforced.
3. Restore the pinned dependency/profile package and portable v2 generator.
4. Restore the accepted v2 provenance, terms and clearance limitations.
5. Add the video manifest and an immutable full-bundle checksum manifest.
6. Remove the two duplicate top-level review copies after the versioned bundle
   is verified.
7. Obtain the founder transition choice and named privacy-owner confirmation,
   then repeat the focused video/runtime review.
