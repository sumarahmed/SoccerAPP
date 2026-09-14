#!/usr/bin/env python3
"""
soccolo-export: put the Soccolo intro in front of a recording.

    soccolo-export training.mp4
    soccolo-export training.mov -o exports/ --orientation 9:16 --outro

WHAT IT GUARANTEES

  The source is never touched. It is opened read-only, hashed before and after,
  and the run fails loudly if the hash moves. The export is a new file.

  Training time is the source duration. Nothing else. The intro is export time:
  it is added in front and is reported separately, in a sidecar JSON and in the
  file's own metadata, so whatever counts training minutes can subtract it
  without guessing.

  No frame of the recording is lost or veiled. The dissolve reveals a held copy
  of source frame zero. Source motion and source audio begin at 2.00 s.

  No footage is ever cropped. Forcing an orientation letterboxes onto the brand
  navy. A training recording can have the ball at the edge of frame, and a crop
  that removes it is worse than a black band.

  Audio is never invented. A silent recording stays silent: the export has no
  audio stream at all, rather than a stream of silence. Where the source has
  audio it is delayed to stay in sync and transcoded to AAC 192 kbit/s; that
  conversion is recorded rather than described as bit-for-bit preservation.

  There is no timer, no demonstration overlay and no outro unless asked. The
  four-second end card is a separate opt-in.
"""
import argparse
import hashlib
import json
import os
import shutil
import subprocess
import sys
import tempfile
from datetime import datetime, timezone

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import video as V


# ------------------------------------------------------------------- probing

def probe(path, count_frames=False):
    args = ["ffprobe", "-v", "error"]
    if count_frames:
        args.append("-count_frames")
    r = subprocess.run(
        args + ["-print_format", "json",
         "-show_streams", "-show_format", path],
        capture_output=True, text=True)
    if r.returncode != 0:
        raise SystemExit(f"cannot read {path}:\n{r.stderr.strip()}")
    d = json.loads(r.stdout)
    vs = [s for s in d["streams"] if s["codec_type"] == "video"]
    if not vs:
        raise SystemExit(f"{path} has no video stream")
    v = vs[0]
    aud = [s for s in d["streams"] if s["codec_type"] == "audio"]

    w, h = int(v["width"]), int(v["height"])
    # A phone recording carries its rotation as side data. Filters see the
    # rotated picture, so the canvas has to be sized from the DISPLAY shape.
    rot = 0
    for sd in v.get("side_data_list", []) or []:
        if "rotation" in sd:
            rot = int(round(float(sd["rotation"])))
    if abs(rot) % 180 == 90:
        w, h = h, w

    rate_expr = v.get("avg_frame_rate") or v.get("r_frame_rate") or "30/1"
    num, den = rate_expr.split("/")
    fps = float(num) / float(den or 1)
    dur = float(d["format"].get("duration") or v.get("duration") or 0.0)
    raw_frames = v.get("nb_read_frames") or v.get("nb_frames")
    frame_count = int(raw_frames) if raw_frames and raw_frames != "N/A" else None
    r_num, r_den = (v.get("r_frame_rate") or rate_expr).split("/")
    r_fps = float(r_num) / float(r_den or 1)
    return {"path": path, "width": w, "height": h, "rotation": rot,
            "fps": fps, "duration": dur,
            "rate_expr": rate_expr, "reported_rate": r_fps,
            "frame_count": frame_count,
            "variable_frame_rate": abs(fps - r_fps) > 0.001,
            "has_audio": bool(aud),
            "audio_codec": aud[0]["codec_name"] if aud else None,
            "audio_channels": int(aud[0].get("channels", 2)) if aud else 0,
            "video_codec": v["codec_name"],
            "size_bytes": int(d["format"].get("size") or 0)}


def sha256(path, chunk=1 << 20):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for b in iter(lambda: f.read(chunk), b""):
            h.update(b)
    return h.hexdigest()


# ------------------------------------------------------------------- geometry

def canvas_for(src, orientation):
    """Output size, and how the footage sits inside it.

    auto keeps the recording's own resolution exactly, and only decides which
    orientation's mark sizing to use. Forcing an orientation letterboxes; it
    never crops.
    """
    if orientation == "auto":
        crop = V.classify(src["width"], src["height"])
        # H.264 needs even dimensions. Pad an odd edge by one pixel rather than
        # resizing or cropping the recording.
        w = src["width"] + src["width"] % 2
        h = src["height"] + src["height"] % 2
        return w, h, crop, (w != src["width"] or h != src["height"])
    target_w, target_h = V.CROPS[orientation]
    # A forced shape may reduce resolution but never enlarge the source.
    scale = min(1.0, src["width"] / target_w, src["height"] / target_h)
    canvas_w = max(2, even(target_w * scale))
    canvas_h = max(2, even(target_h * scale))
    return canvas_w, canvas_h, orientation, True


def even(n):
    return int(n) - (int(n) % 2)


# --------------------------------------------------------------------- build

def build(src, out_path, orientation="auto", outro=False, crf=18,
          preset="medium", fps=None, keep_intermediates=None, quiet=False):
    W, H, crop, letterbox = canvas_for(src, orientation)
    W, H = even(W), even(H)
    rate = fps or src["fps"]
    work = keep_intermediates or tempfile.mkdtemp(prefix="soccolo-export-")

    try:
        # Artwork sized to this canvas, then the intro as an alpha movie at the
        # recording's own frame rate so nothing is resampled later.
        mark = V.mark_png(os.path.join(work, "intro-mark.png"), crop, W)
        intro = V.render_intro(os.path.join(work, "intro.mov"), crop,
                               size=(W, H), fps=rate, mark=mark, with_alpha=True)
        inputs = ["-i", src["path"], "-i", intro]
        outro_clip = None
        if outro:
            omark = V.mark_png(os.path.join(work, "outro-mark.png"), crop, W,
                               kind="outro")
            outro_clip = V.render_outro(os.path.join(work, "outro.mov"), crop,
                                        size=(W, H), fps=rate, mark=omark)
            inputs += ["-i", outro_clip]

    # --- video chain
    #
    # tpad's `start`/`stop` are FRAME COUNTS; the colour is `color`. Getting
    # that wrong silently asks for a hundred million pad frames, so it is
    # spelled out here.
        fit = (f"scale={W}:{H}:force_original_aspect_ratio=decrease:"
               f"force_divisible_by=2,pad={W}:{H}:(ow-iw)/2:(oh-ih)/2:"
               f"color={V.GROUND}" if orientation != "auto" else
               f"pad={W}:{H}:(ow-iw)/2:(oh-ih)/2:color={V.GROUND}")
    # The tail pad goes on FIRST. Chaining a start pad and then a stop pad
    # silently loses time: the second tpad misreads the already-padded stream
    # and pads short. Padding the tail before the head gives the right length.
        tail = (f"tpad=stop_duration={V.OUTRO_TOTAL:.3f}:stop_mode=add:color=black,"
                if outro else "")
        chain = [
        # The recording: tail-padded to black for the end card if there is one,
        # then held back by the length of the intro and pre-padded with navy so
        # the intro has a ground of the right shape beneath it.
        f"[0:v]{fit},fps={rate},format=rgba,{tail}"
        f"tpad=start_duration={V.INTRO_TOTAL:.3f}:start_mode=clone,"
        f"setpts=PTS-STARTPTS[base]",
        # The intro, which already carries its own dissolve in the alpha.
        f"[1:v]format=rgba,setpts=PTS-STARTPTS[in]",
        f"[base][in]overlay=0:0:format=auto:eof_action=pass:shortest=0[withintro]",
        ]
        last = "withintro"
        if outro:
        # Padded at the front with transparent frames rather than shifted in
        # time, so the overlay always has a frame to composite and never
        # stalls waiting for the stream to begin.
            start = V.INTRO_TOTAL + src["duration"]
            chain.append(f"[2:v]format=rgba,tpad=start_duration={start:.4f}:"
                         f"start_mode=add:color=black@0.0,setpts=PTS-STARTPTS[out]")
            chain.append(f"[{last}][out]overlay=0:0:format=auto:eof_action=pass:"
                         f"shortest=0[withoutro]")
            last = "withoutro"
        chain.append(f"[{last}]format=yuv420p[v]")

        maps = ["-map", "[v]"]
        acodec = []
        if src["has_audio"]:
        # Delay to stay in sync, and pad the tail only so the container does
        # not end up with streams of different lengths. Neither adds content.
            adelay = int(round(V.INTRO_TOTAL * 1000))
            chain.append(f"[0:a]adelay={adelay}:all=1,apad[a]")
            maps += ["-map", "[a]"]
            acodec = ["-c:a", "aac", "-b:a", "192k"]

        total = V.INTRO_TOTAL + src["duration"] + (V.OUTRO_TOTAL if outro else 0.0)
        cmd = (["ffmpeg", "-n", "-v", "error", "-stats" if not quiet else "-nostats"]
           + inputs
           + ["-filter_complex", ";".join(chain)]
           + maps
           + ["-c:v", "libx264", "-crf", str(crf), "-preset", preset,
              "-pix_fmt", "yuv420p", "-movflags", "+faststart",
              "-r", f"{rate}", "-t", f"{total:.6f}"]
           + acodec
              + ["-metadata", f"comment=Soccolo export. Intro {V.INTRO_TOTAL:g}s is "
                           f"export time, not training time. Training starts at "
                           f"{V.INTRO_TOTAL:g}s and runs {src['duration']:.3f}s.",
              "-metadata", "encoder_note=soccolo-export",
              out_path])
        r = subprocess.run(cmd, capture_output=True, text=True)
        if r.returncode != 0:
            raise SystemExit("ffmpeg failed:\n" + r.stderr[-3000:])
        return {"canvas": [W, H], "orientation": crop, "letterboxed": letterbox,
                "fps": rate, "expected_duration": total}
    finally:
        if keep_intermediates is None:
            shutil.rmtree(work, ignore_errors=True)


# ---------------------------------------------------------------- validation

def tool_version(name):
    executable = shutil.which(name)
    if not executable:
        raise SystemExit(f"required tool is not on PATH: {name}")
    result = subprocess.run([executable, "-version"], capture_output=True, text=True)
    if result.returncode != 0:
        raise SystemExit(f"cannot run {name}: {result.stderr.strip()}")
    return executable, result.stdout.splitlines()[0]


def validate_export(src, got, info, outro):
    failures = []
    tolerance = max(0.05, 2.0 / info["fps"])
    if abs(got["duration"] - info["expected_duration"]) > tolerance:
        failures.append(
            f"duration {got['duration']:.6f}s != expected "
            f"{info['expected_duration']:.6f}s (tolerance {tolerance:.6f}s)"
        )
    if [got["width"], got["height"]] != info["canvas"]:
        failures.append(
            f"canvas {got['width']}x{got['height']} != expected "
            f"{info['canvas'][0]}x{info['canvas'][1]}"
        )
    if got["has_audio"] != src["has_audio"]:
        failures.append("output audio-stream presence does not match the source")

    expected_frames = round(info["expected_duration"] * info["fps"])
    actual_frames = got.get("frame_count")
    if actual_frames is None:
        failures.append("ffprobe did not return an output frame count")
    elif abs(actual_frames - expected_frames) > 1:
        failures.append(
            f"frame count {actual_frames} != expected {expected_frames} "
            "within one-frame rounding tolerance"
        )
    if failures:
        raise SystemExit("export validation failed:\n- " + "\n- ".join(failures))
    return {
        "expectedOutputFrames": expected_frames,
        "actualOutputFrames": actual_frames,
        "toleranceFrames": 1,
        "sourceFramesRead": src.get("frame_count"),
        "sourceVariableFrameRate": src.get("variable_frame_rate"),
        "mode": "constant-output-frame-rate duration and frame-count check",
        "outroIncluded": outro,
    }


# ---------------------------------------------------------------------- main

def main(argv=None):
    ap = argparse.ArgumentParser(
        prog="soccolo-export",
        description="Put the Soccolo intro in front of a recording, without "
                    "touching the recording.")
    ap.add_argument("source", nargs="?", help="the recording. Opened read-only.")
    ap.add_argument("-o", "--output",
                    help="output file, or a directory. Default: alongside the "
                         "source as NAME-soccolo.mp4")
    ap.add_argument("--orientation", default="auto",
                    choices=["auto", "16:9", "1:1", "9:16"],
                    help="auto keeps the recording's own resolution and only "
                         "picks the mark sizing. Forcing letterboxes; it never "
                         "crops.")
    ap.add_argument("--outro", action="store_true",
                    help="append the four-second end card. Off by default.")
    ap.add_argument("--crf", type=int, default=18,
                    help="x264 quality, lower is better. Default 18.")
    ap.add_argument("--preset", default="medium")
    ap.add_argument("--fps", type=float, default=None,
                    help="override the output frame rate. Defaults to the "
                         "recording's own.")
    ap.add_argument("--json", action="store_true",
                    help="print the sidecar to stdout instead of a summary.")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--check", action="store_true",
                    help="verify runtime tools and bundled inputs, then stop")
    a = ap.parse_args(argv)

    ffmpeg_path, ffmpeg_version = tool_version("ffmpeg")
    ffprobe_path, ffprobe_version = tool_version("ffprobe")
    if a.check:
        required = [
            os.path.join(os.path.dirname(__file__), "video.py"),
            os.path.join(os.path.dirname(__file__), "video-export-specification.md"),
            os.path.join(os.path.dirname(__file__), "..", "01-master", "source", "requirements.txt"),
            os.path.join(os.path.dirname(__file__), "..", "01-master", "typeface", "Poppins-SemiBold.ttf"),
        ]
        missing = [os.path.abspath(path) for path in required if not os.path.isfile(path)]
        if missing:
            raise SystemExit("missing bundled input(s):\n- " + "\n- ".join(missing))
        print(json.dumps({
            "status": "PASS",
            "ffmpeg": {"path": ffmpeg_path, "version": ffmpeg_version},
            "ffprobe": {"path": ffprobe_path, "version": ffprobe_version},
            "bundledInputs": "present",
        }, indent=2))
        return 0

    if not a.source:
        ap.error("source is required unless --check is used")
    if not os.path.isfile(a.source):
        raise SystemExit(f"no such file: {a.source}")
    source_path = os.path.abspath(a.source)
    src = probe(source_path, count_frames=True)
    if src["duration"] <= 0:
        raise SystemExit("could not determine the recording's duration")

    stem = os.path.splitext(os.path.basename(a.source))[0]
    if a.output and os.path.isdir(a.output):
        out = os.path.join(a.output, f"{stem}-soccolo.mp4")
    elif a.output:
        out = a.output
    else:
        out = os.path.join(os.path.dirname(os.path.abspath(a.source)),
                           f"{stem}-soccolo.mp4")
    if os.path.abspath(out) == os.path.abspath(a.source):
        raise SystemExit("refusing to write over the recording")
    out = os.path.abspath(out)
    sidecar_path = os.path.splitext(out)[0] + ".soccolo.json"
    existing = [path for path in (out, sidecar_path) if os.path.exists(path)]
    if existing:
        raise SystemExit("refusing to overwrite existing output:\n- " +
                         "\n- ".join(existing))

    before = sha256(source_path)
    if a.dry_run:
        W, H, crop, lb = canvas_for(src, a.orientation)
        print(json.dumps({"wouldWrite": out, "wouldWriteSidecar": sidecar_path,
                          "canvas": [even(W), even(H)],
                          "orientation": crop, "letterboxed": lb,
                          "source": src, "filesystemChanges": 0}, indent=2))
        return 0

    output_dir = os.path.dirname(out)
    os.makedirs(output_dir, exist_ok=True)
    suffix = os.path.splitext(out)[1] or ".mp4"
    descriptor, staged_media = tempfile.mkstemp(
        prefix=".soccolo-export-", suffix=suffix, dir=output_dir
    )
    os.close(descriptor)
    os.remove(staged_media)
    staged_sidecar = staged_media + ".json"
    published_media = False
    try:
        staged_src = dict(src)
        staged_src["path"] = source_path
        info = build(staged_src, staged_media, a.orientation, a.outro, a.crf,
                     a.preset, a.fps, quiet=a.json)
        after = sha256(source_path)
        if before != after:
            raise SystemExit("the source file changed during the run. Stopping.")

        got = probe(staged_media, count_frames=True)
        frame_validation = validate_export(src, got, info, a.outro)
        sidecar = {
        "tool": "soccolo-export",
        "contractVersion": "1.1",
        "generatedAt": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "source": {"file": os.path.basename(a.source),
                   "sha256": before,
                   "durationSeconds": round(src["duration"], 3),
                   "resolution": [src["width"], src["height"]],
                   "fps": round(src["fps"], 3),
                   "frameCountRead": src["frame_count"],
                   "variableFrameRate": src["variable_frame_rate"],
                   "hasAudio": src["has_audio"],
                   "audioCodec": src["audio_codec"]},
        "export": {"file": os.path.basename(out),
                   "sha256": sha256(staged_media),
                   "durationSeconds": round(got["duration"], 3),
                   "resolution": [got["width"], got["height"]],
                   "fps": round(got["fps"], 3),
                   "frameCountRead": got["frame_count"],
                   "hasAudio": got["has_audio"],
                   "audioCodec": got["audio_codec"],
                   "audioPolicy": ("transcoded to AAC 192 kbit/s after a "
                                   "2.00 s synchronization delay"
                                   if got["has_audio"] else "no audio stream"),
                   "orientation": info["orientation"],
                   "letterboxed": info["letterboxed"]},
        "timing": {
            "introSeconds": V.INTRO_TOTAL,
            "dissolveSeconds": V.DISSOLVE,
            "dissolveStartsAtSeconds": V.DISSOLVE_START,
            "outroSeconds": V.OUTRO_TOTAL if a.outro else 0.0,
            "trainingStartsAtSeconds": V.INTRO_TOTAL,
            "trainingDurationSeconds": round(src["duration"], 3),
            "brandingSeconds": round(V.INTRO_TOTAL + (V.OUTRO_TOTAL if a.outro else 0.0), 3),
        },
        "frameValidation": frame_validation,
        "rules": [
            "Training time is the source duration. The intro and any outro are "
            "export time and must not be counted as training.",
            "To map any timestamp in the export back to the recording, "
            f"subtract {V.INTRO_TOTAL:g} seconds.",
            "The dissolve reveals a held copy of source frame zero; moving "
            "source footage and source audio begin unobscured at 2.00 seconds.",
            "No audio was generated. Silence in means silence out.",
            "The source file was not modified; its hash is recorded above.",
        ],
        }
        with open(staged_sidecar, "x", encoding="utf-8") as stream:
            json.dump(sidecar, stream, indent=2)
            stream.write("\n")

        os.replace(staged_media, out)
        published_media = True
        try:
            os.replace(staged_sidecar, sidecar_path)
        except Exception:
            os.remove(out)
            published_media = False
            raise
    finally:
        for staged in (staged_media, staged_sidecar):
            if os.path.exists(staged):
                os.remove(staged)

    if a.json:
        print(json.dumps(sidecar, indent=2))
    else:
        t = sidecar["timing"]
        print(f"\n  wrote      {out}")
        print(f"  canvas     {got['width']}x{got['height']} @ {got['fps']:.3f} fps"
              f"   ({info['orientation']}"
              f"{', letterboxed' if info['letterboxed'] else ''})")
        print(f"  export     {got['duration']:.3f} s")
        print(f"  training   {t['trainingDurationSeconds']:.3f} s, starting at "
              f"{t['trainingStartsAtSeconds']:g} s")
        print(f"  branding   {t['brandingSeconds']:g} s, not training time")
        print(f"  audio      {'transcoded to AAC and delayed to stay in sync' if got['has_audio'] else 'none, and none was added'}")
        print(f"  source     unchanged, sha256 {before[:16]}...\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
