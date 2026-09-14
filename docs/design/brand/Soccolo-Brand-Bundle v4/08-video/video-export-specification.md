# Soccolo, recording export specification

The two-second intro, what it must never do to a recording, and how to run it.
Version 1.1 review candidate, Sep 14, 2026.

---

## 1. What this is

A training recording is the asset. The intro is packaging. Everything below
follows from keeping those two things separate.

The export puts a two-second Soccolo intro in front of a recording and writes a
**new file**. The recording is not touched. The intro is **export time** and is
never counted as training time. There is no timer, no demonstration overlay and
no end card unless one is asked for.

---

## 2. The timing model

```
  0.00 s   navy, mark at zero opacity
  0.10 s   mark begins to appear
  0.50 s   mark at full
  1.60 s   dissolve begins to a held copy of source frame zero
  2.00 s   intro ends. THE RECORDING STARTS HERE, at its own first frame,
           fully visible; source motion and source audio begin at time zero
```

| Quantity | Value |
|---|---|
| Intro | 2.00 s |
| Dissolve | 0.40 s, to a held copy of source frame zero |
| Recording starts at | 2.00 s |
| Export duration | 2.00 s + recording duration |
| Training duration | recording duration, unchanged |

**The dissolve does not run over moving footage.** A cross-dissolve that
consumed or veiled footage could hide a touch, a first step or the ball entering
frame. The first display frame is held beneath the final 0.40 s of the intro;
source motion and source audio begin unobscured at export time 2.00 s.

The exporter measures the output duration and decoded frame count. At a constant
30 fps, a six-second recording exports as 60 intro frames plus 180 source frames
for 240 frames. Variable-frame-rate input is converted to the recorded constant
output rate and is not described as frame-for-frame source preservation.

### Mapping timestamps back

Subtract 2.00 seconds. Any annotation, clip point or event timestamp taken from
the export maps to the recording by subtracting the intro, and only the intro.

---

## 3. Training time is not export time

This is the rule the whole thing exists to protect.

**Training time is the source duration.** The intro adds two seconds to the
file and zero seconds to the session. Anything that totals training minutes,
bills against them, or shows a player how long they trained must read the
recording's duration, not the export's.

Every export writes a sidecar next to it, `NAME.soccolo.json`:

```json
{
  "timing": {
    "introSeconds": 2.0,
    "dissolveSeconds": 0.4,
    "dissolveStartsAtSeconds": 1.6,
    "outroSeconds": 0.0,
    "trainingStartsAtSeconds": 2.0,
    "trainingDurationSeconds": 312.480,
    "brandingSeconds": 2.0
  }
}
```

The same figures go into the file's own `comment` metadata, so a file that gets
separated from its sidecar still carries the answer. The sidecar also records
the **SHA-256 of the source**, so the export can always be tied back to the
recording it came from.

---

## 4. Audio

**Audio is never generated. A silent recording stays silent.**

| Source | Export |
|---|---|
| No audio stream | **No audio stream.** Not a stream of silence. |
| Has audio | Source audio delayed 2.00 s and transcoded to AAC 192 kbit/s; input/output codec facts are recorded. |

The 2.00 s delay at the head, and the tail padding that keeps the audio and
video streams the same length, are **padding for synchronisation**, not content.
Nothing is synthesised, no sting is added, no music is laid under the intro, and
nothing is ducked, normalised or filtered.

If an audio sting is ever wanted, it is a separate decision with a separate
approval, and it does not belong in this tool.

---

## 5. Orientation

Three are supported: **16:9, 1:1 and 9:16.**

**`auto` is the default and keeps the recording's own resolution exactly.** It
only decides which orientation's mark sizing to use, by nearest aspect ratio. A
phone-shot 9:16 recording exports at its own pixel dimensions with the 9:16
intro in front of it. Nothing is rescaled.

**Forcing an orientation letterboxes. It never crops or upscales.** A 4:3
recording forced to 9:16 is scaled down only as needed and centred on the brand
navy, with bars above and below. The whole frame survives.

That is not a stylistic preference. A training recording can have the ball, a
cone or a player at the very edge of frame, and a crop that removes it damages
the recording's usefulness. A black band does not.

Mark width, as a fraction of the frame width:

| Orientation | Mark span |
|---|---|
| 16:9 | 40% |
| 1:1 | 40% |
| 9:16 | 62% |

The 9:16 mark is proportionally wider because the frame is narrow. The lockup
sits 1.5% of the frame height above true centre, because a lockup centred on its
bounding box reads low.

---

## 6. What is deliberately absent

None of these are options, and none are on by default:

- **No timer or clock.** A burned-in timer cannot be corrected later and would
  disagree with the intro offset the moment anyone trimmed the file.
- **No demonstration or coaching overlay.** Nothing is drawn over the footage.
- **No outro**, unless explicitly requested. See section 7.
- **No watermark or bug** during the recording.
- **No audio sting.** See section 4.
- **No colour grade, stabilisation, denoise or crop** applied to the footage.

The export re-encodes, because compositing requires it. The default is CRF 18,
which is visually transparent for this purpose, and the source is preserved
untouched, so the re-encode is recoverable rather than destructive. A production
pipeline handling long recordings should consider smart-rendering the untouched
tail instead of re-encoding it.

---

## 7. The end card, as a separate item

The four-second end card from `04-export-treatment/` is **opt-in**. It is a
different object from the intro and is meant to feel like one.

| | Intro | End card |
|---|---|---|
| Duration | 2.0 s | 4.0 s |
| Lockup | Stacked, **no tagline** | Stacked **with tagline** |
| Role | A title | A signature |
| Default | On | **Off** |

Two seconds is not long enough to read a wordmark and a tagline. Giving them
different weight is what stops the pair feeling like the same card shown twice.

When the end card is appended: the footage dissolves to navy over 0.4 s, the
mark and tagline fade in, the card holds still for 2.5 s, and the whole frame
fades to black. Timings and the frame-accurate axis are in
`../04-export-treatment/soccolo-export-timing-specification.pdf`.

**The end card is also export time.** With it enabled, branding is 6.0 s and
training time is still the recording duration.

---

## 8. The mark does not animate

Opacity only. The dot does not travel, the c-forms do not rotate, close or
interlock, and there is no scale, slide or spin.

This is a design rule and a legal one. The gap between the two c-forms and the
independence of the dot are the features that distance the mark from
interlocking opposed-C monograms, which is set out in
`../06-provenance/similarity-review.md`. An animation that closes that gap, even
for four frames, creates a frame that can be screenshot, and that frame is
exactly the configuration being avoided.

---

## 9. Running it

```bash
# The default: two-second intro, nothing else.
python3 soccolo-export.py session-2026-09-14.mp4

# Into a folder, forced vertical, with the end card.
python3 soccolo-export.py session.mov -o exports/ --orientation 9:16 --outro

# See what it would do without creating directories or files.
python3 soccolo-export.py session.mp4 --dry-run

# Verify dependencies and bundled inputs without processing media.
python3 soccolo-export.py --check
```

| Option | Default | What it does |
|---|---|---|
| `-o, --output` | `NAME-soccolo.mp4` beside the source | File or directory |
| `--orientation` | `auto` | `auto`, `16:9`, `1:1`, `9:16` |
| `--outro` | off | Append the four-second end card |
| `--crf` | 18 | x264 quality, lower is better |
| `--fps` | source | Override the output frame rate |
| `--json` | off | Print the sidecar instead of a summary |
| `--dry-run` | off | Report the plan and stop |
| `--check` | off | Verify ffmpeg, ffprobe and bundled inputs, then stop |

Requires `ffmpeg` and `ffprobe` on the path, Python 3.9 or later, and the pinned
Python dependencies in `../01-master/source/requirements.txt`. The runtime check
records the exact tool versions used for evidence.

### The guarantees it enforces at runtime

- The source is hashed before and after. If the hash moves, the run fails.
- It refuses to write over the source.
- Output duration and decoded frame count are checked against the exact CFR
  export contract; measured counts are written to the sidecar.
- Existing media and sidecar paths are refused; staged files are published only
  after media, source-integrity and frame/duration checks pass.
- Dry-run creates no directory or file.
- If the source has no audio, the export is written with no audio stream.

---

## 10. Files

```
08-video/
  soccolo-export.py            The tool.
  video.py                     Intro and end-card rendering, imported by the tool.
  video-export-specification.md    This document.

  intro/
    soccolo-intro-{16x9,1x1,9x16}.mp4         2.0 s, flat. Butt-cut it and
                                              apply your own 0.4 s dissolve.
    soccolo-intro-{16x9,1x1,9x16}-alpha.mov   2.0 s, QuickTime RLE with alpha;
                                              fade-out from 1.6 to 2.0 s.
  outro/
    soccolo-outro-{16x9,1x1,9x16}.mov         4.0 s with alpha.
    soccolo-outro-{16x9,1x1,9x16}.mp4         4.0 s flat, for tools that will
                                              not take an alpha movie.
  mark/
    soccolo-{intro,outro}-mark-*.png          The lockup on transparency, at
                                              the right size for each frame.
```

The pre-rendered clips are for editors working by hand at 1920×1080, 1080×1080
and 1080×1920, 30 fps. The tool does not use them: it renders the intro at the
recording's own resolution and frame rate, so nothing is ever rescaled or
frame-rate converted on the way in.
