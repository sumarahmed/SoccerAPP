"""
Soccolo: the video intro, and the assets the export tool composites.

TIMING MODEL, and the reason for it

    0.00 s  navy, mark at zero opacity
    0.10 s  mark begins to appear
    0.50 s  mark at full
    1.60 s  dissolve begins to a held copy of source frame zero
    2.00 s  intro is gone; source motion and source audio begin at time zero

The dissolve uses a held copy of the source's first display frame. It never
veils moving training footage and never consumes source time. The export is
exactly `intro + source` long, the source begins at exactly 2.00 s, and the
training duration remains the source duration.

The mark's own geometry does not animate. The intro is opacity only: no travel,
no rotation, no scale. That rule is set out in the export treatment and it holds
here for the same reasons.
"""
import os
import subprocess
import sys

_HERE = os.path.dirname(os.path.abspath(__file__))
for _c in (_HERE, os.path.normpath(os.path.join(_HERE, "..", "01-master", "source"))):
    if os.path.isfile(os.path.join(_c, "lockups.py")) and _c not in sys.path:
        sys.path.insert(0, _c)

import cairosvg

import lockups as L
import palette as P

#: Ground for both intro and outro.
GROUND = P.TOKENS["ink-800"]

#: The intro uses the stacked lockup WITHOUT the tagline. Two seconds is not
#: long enough to read a wordmark and a tagline, and the outro already carries
#: the tagline. Giving them different weight is what stops the pair feeling
#: like the same card shown twice.
INTRO_LOCKUP = "stacked"
OUTRO_LOCKUP = "stacked-tagline"

INTRO_TOTAL = 2.00         # complete opening, including the dissolve
DISSOLVE = 0.40            # fade to held source frame zero
DISSOLVE_START = INTRO_TOTAL - DISSOLVE
MARK_IN_START = 0.10
MARK_IN_DUR = 0.40

OUTRO_TOTAL = 4.00         # the end card, per the export treatment
OUTRO_IN = 0.40            # dissolve from footage into the end card

#: Fraction of the frame WIDTH the mark spans, per orientation. The vertical
#: crop gets a wider mark because the frame is narrow and platform chrome eats
#: the vertical, not the horizontal.
SPAN = {"16:9": 0.40, "1:1": 0.40, "9:16": 0.62}

CROPS = {"16:9": (1920, 1080), "1:1": (1080, 1080), "9:16": (1080, 1920)}

#: Optical centring. A lockup centred on its bounding box reads low.
RISE = 0.015               # of frame height, upward


def classify(width, height):
    """Nearest supported orientation for a source resolution."""
    ar = width / height
    best, gap = None, 1e9
    for name, (w, h) in CROPS.items():
        g = abs(ar - w / h)
        if g < gap:
            best, gap = name, g
    return best


def mark_png(path, crop, width, kind="intro", colourway="dark"):
    """The lockup alone, on transparency, sized for a frame `width` wide.

    Rendered oversize and left for ffmpeg to place, so the tool never has to
    re-render artwork at export time.
    """
    key = INTRO_LOCKUP if kind == "intro" else OUTRO_LOCKUP
    lock = L.ALL[key]()
    n = lock.normalised()
    target = width * SPAN[crop]
    scale = target / n.width
    from svgdoc import Doc
    d = Doc(round(n.width * scale, 3), round(n.height * scale, 3))
    L.emit(d, lock, L.COLOURWAYS[colourway], 0, 0, scale)
    tmp = path + ".svg"
    d.save(tmp)
    cairosvg.svg2png(url=tmp, write_to=path, output_width=round(n.width * scale))
    os.remove(tmp)
    return path


def _run(args):
    r = subprocess.run(args, capture_output=True, text=True)
    if r.returncode != 0:
        raise RuntimeError(r.stderr[-2000:])
    return r


def render_intro(out, crop, size=None, fps=30, mark=None, with_alpha=False):
    """The intro as a standalone clip.

    with_alpha produces the version the export tool composites: the whole frame
    dissolves off over the final DISSOLVE seconds of the two-second opening. The
    exporter holds source frame zero beneath it and starts source motion/audio
    only after this clip ends. Without alpha it is a flat two-second plate for
    editors applying the same transition manually.
    """
    w, h = size or CROPS[crop]
    total = INTRO_TOTAL
    tmp_mark = mark or mark_png(out + ".mark.png", crop, w)
    ground = f"color=c={GROUND}:s={w}x{h}:r={fps}:d={total:.3f}"
    y = f"(H-h)/2-{RISE:.4f}*H"
    chain = (
        f"[1:v]format=rgba,"
        f"fade=t=in:st={MARK_IN_START}:d={MARK_IN_DUR}:alpha=1[m];"
        f"[0:v]format=rgba[bg];"
        f"[bg][m]overlay=(W-w)/2:{y}:format=auto[c]"
    )
    if with_alpha:
        chain += f";[c]fade=t=out:st={DISSOLVE_START}:d={DISSOLVE}:alpha=1[v]"
        codec = ["-c:v", "qtrle", "-pix_fmt", "argb"]
        outp = out
    else:
        chain += ";[c]format=yuv420p[v]"
        codec = ["-c:v", "libx264", "-crf", "16", "-preset", "medium",
                 "-pix_fmt", "yuv420p", "-movflags", "+faststart"]
        outp = out
    _run(["ffmpeg", "-y", "-f", "lavfi", "-i", ground,
          "-loop", "1", "-framerate", str(fps), "-i", tmp_mark,
          "-filter_complex", chain, "-map", "[v]",
          "-t", f"{total:.3f}", "-r", str(fps)] + codec + [outp])
    if mark is None:
        os.remove(tmp_mark)
    return outp


def render_outro(out, crop, size=None, fps=30, mark=None):
    """The four-second end card from the export treatment, as a clip.

    Separate from the intro on purpose: it is opt-in, it carries the tagline,
    and it is a signature rather than a title.
    """
    w, h = size or CROPS[crop]
    tmp_mark = mark or mark_png(out + ".mark.png", crop, w, kind="outro")
    ground = f"color=c={GROUND}:s={w}x{h}:r={fps}:d={OUTRO_TOTAL:.3f}"
    y = f"(H-h)/2-{RISE:.4f}*H"
    # Phases from the export treatment: ground 0.00-0.30, beat to 0.50,
    # mark in to 0.90, hold to 3.40, out to 4.00.
    chain = (
        f"[1:v]format=rgba,fade=t=in:st=0.50:d=0.40:alpha=1,"
        f"fade=t=out:st=3.40:d=0.60:alpha=1[m];"
        f"[0:v]format=rgba[bg];"
        f"[bg][m]overlay=(W-w)/2:{y}:format=auto,"
        # The ground fades up from whatever precedes it, then the whole card
        # fades off at the end. Both are on the composite, not just the mark.
        f"fade=t=in:st=0:d=0.30:alpha=1,"
        f"fade=t=out:st=3.40:d=0.60:alpha=1[v]"
    )
    _run(["ffmpeg", "-y", "-f", "lavfi", "-i", ground,
          "-loop", "1", "-framerate", str(fps), "-i", tmp_mark,
          "-filter_complex", chain, "-map", "[v]",
          "-t", f"{OUTRO_TOTAL:.3f}", "-r", str(fps),
          "-c:v", "qtrle", "-pix_fmt", "argb", out])
    if mark is None:
        os.remove(tmp_mark)
    return out


def build_assets(root, fps=30):
    """Pre-rendered clips for editors working by hand, plus the mark plates the
    export tool uses."""
    made = []
    for crop, (w, h) in CROPS.items():
        tag = crop.replace(":", "x")
        mk = os.path.join(root, "mark", f"soccolo-intro-mark-{tag}.png")
        os.makedirs(os.path.dirname(mk), exist_ok=True)
        mark_png(mk, crop, w)
        mko = os.path.join(root, "mark", f"soccolo-outro-mark-{tag}.png")
        mark_png(mko, crop, w, kind="outro")

        # Both clips are 2.0 s. The alpha version fades during its last 0.4 s;
        # the flat version is for editors applying that dissolve themselves.
        p = os.path.join(root, "intro", f"soccolo-intro-{tag}.mp4")
        os.makedirs(os.path.dirname(p), exist_ok=True)
        render_intro(p, crop, fps=fps, mark=mk, with_alpha=False)
        made.append(p)
        pa = os.path.join(root, "intro", f"soccolo-intro-{tag}-alpha.mov")
        render_intro(pa, crop, fps=fps, mark=mk, with_alpha=True)
        made.append(pa)

        p = os.path.join(root, "outro", f"soccolo-outro-{tag}.mov")
        os.makedirs(os.path.dirname(p), exist_ok=True)
        render_outro(p, crop, fps=fps, mark=mko)
        made.append(p)

        # A flat MP4 of the outro too, for anyone who cannot take an alpha movie.
        pf = os.path.join(root, "outro", f"soccolo-outro-{tag}.mp4")
        _run(["ffmpeg", "-y", "-i", p, "-c:v", "libx264", "-crf", "16",
              "-preset", "medium", "-pix_fmt", "yuv420p",
              "-movflags", "+faststart", pf])
        made.append(pf)
    return made
