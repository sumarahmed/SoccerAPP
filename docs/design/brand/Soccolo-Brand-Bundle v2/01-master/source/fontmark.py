"""
Typeface access for the Soccolo wordmark and tagline.

Outlines are taken from the font as TRUE CURVES and emitted as curves. An
earlier version flattened them to polylines; that was accurate enough to print
(the chord error at a metre-wide wordmark is about 0.02 mm) but it produced
artwork with several hundred anchor points per word, which no designer can
usefully edit and no printer should have to handle.

Flattened contours are still generated, but only for measurement: bounds,
clearances and the like are computed off the flattened form so the numbers
quoted in the specification are honest.
"""
import math
import os

from fontTools.ttLib import TTFont
from fontTools.pens.recordingPen import DecomposingRecordingPen
from fontTools.varLib import instancer

SOURCE_DIR = os.path.dirname(os.path.abspath(__file__))
FONTS = os.path.abspath(os.path.join(SOURCE_DIR, "..", "typeface"))

#: Steps used when flattening a curve for measurement only.
FLATTEN = 24


class Face:
    def __init__(self, path, weight=None, label=None):
        self.path = path
        f = TTFont(os.path.join(FONTS, path))
        if weight is not None and "fvar" in f:
            f = instancer.instantiateVariableFont(f, {"wght": weight})
        self.font = f
        self.upm = f["head"].unitsPerEm
        os2 = f["OS/2"]
        self.cap = getattr(os2, "sCapHeight", None) or self.upm * 0.7
        self.xh = getattr(os2, "sxHeight", None) or self.upm * 0.5
        self.glyphset = f.getGlyphSet()
        self.cmap = f.getBestCmap()
        self.hmtx = f["hmtx"]
        self.kern = self._kern_pairs()
        name = f["name"].getDebugName(16) or f["name"].getDebugName(1)
        self.label = label or f"{name} {weight or ''}".strip()
        self._seg_cache = {}

    # --------------------------------------------------------------- glyphs
    def gname(self, ch):
        return self.cmap[ord(ch)]

    def segments(self, ch):
        """Contours with their curves intact.

        Each contour is (start_point, [command, ...]) where a command is
        ("L", p) or ("Q", c, p) or ("C", c1, c2, p), in font units, y-up.
        """
        if ch in self._seg_cache:
            return self._seg_cache[ch]
        # Decomposing, because a dotted i is often a composite glyph and a
        # plain recording pen would drop its components silently.
        pen = DecomposingRecordingPen(self.glyphset)
        self.glyphset[self.gname(ch)].draw(pen)

        out, cur, start, here = [], None, None, None
        for op, args in pen.value:
            if op == "moveTo":
                if cur:
                    out.append((start, cur))
                start = here = args[0]
                cur = []
            elif op == "lineTo":
                cur.append(("L", args[0]))
                here = args[0]
            elif op == "qCurveTo":
                for c, p in _quad_runs(here, args, start):
                    cur.append(("Q", c, p))
                    here = p
            elif op == "curveTo":
                cur.append(("C",) + tuple(args))
                here = args[-1]
            elif op == "closePath":
                if cur:
                    out.append((start, cur))
                cur, here = None, None
        if cur:
            out.append((start, cur))
        self._seg_cache[ch] = out
        return out

    def contours(self, ch):
        """Flattened contours, for measurement only."""
        out = []
        for start, cmds in self.segments(ch):
            pts, here = [start], start
            for cmd in cmds:
                if cmd[0] == "L":
                    pts.append(cmd[1])
                elif cmd[0] == "Q":
                    pts += _flat_quad(here, cmd[1], cmd[2])
                else:
                    pts += _flat_cubic(here, cmd[1], cmd[2], cmd[3])
                here = cmd[-1]
            out.append(pts)
        return out

    def advance(self, ch):
        return self.hmtx[self.gname(ch)][0]

    def bbox(self, ch):
        pts = [p for c in self.contours(ch) for p in c]
        xs, ys = [p[0] for p in pts], [p[1] for p in pts]
        return min(xs), min(ys), max(xs), max(ys)

    def _kern_pairs(self):
        pairs = {}
        if "kern" in self.font:
            for st in self.font["kern"].kernTables:
                pairs.update(st.kernTable)
        return pairs

    def kerning(self, a, b):
        return self.kern.get((self.gname(a), self.gname(b)), 0)

    # ---------------------------------------------------------------- paths
    def path_d(self, ch, dx=0.0, dy=0.0, scale=1.0, mirror_about=None):
        """SVG path data with curves preserved. Y is flipped for SVG; an
        optional horizontal mirror is applied about a given x in font units."""
        def T(p):
            x, y = p
            if mirror_about is not None:
                x = 2 * mirror_about - x
            return f"{x * scale + dx:.3f} {-y * scale + dy:.3f}"

        out = []
        for start, cmds in self.segments(ch):
            d = [f"M {T(start)}"]
            for cmd in cmds:
                if cmd[0] == "L":
                    d.append(f"L {T(cmd[1])}")
                elif cmd[0] == "Q":
                    d.append(f"Q {T(cmd[1])} {T(cmd[2])}")
                else:
                    d.append(f"C {T(cmd[1])} {T(cmd[2])} {T(cmd[3])}")
            d.append("Z")
            out.append(" ".join(d))
        return " ".join(out)

    # -------------------------------------------------------------- metrics
    def o_metrics(self):
        """Outer box and counter of the lowercase o, which is what the symbol
        has to match."""
        boxes = []
        for c in self.contours("o"):
            xs, ys = [p[0] for p in c], [p[1] for p in c]
            boxes.append((min(xs), min(ys), max(xs), max(ys)))
        boxes.sort(key=lambda b: (b[2] - b[0]) * (b[3] - b[1]))
        counter, outer = boxes[0], boxes[-1]
        return {"outer": outer, "counter": counter,
                "stroke_v": ((outer[3] - outer[1]) - (counter[3] - counter[1])) / 2,
                "stroke_h": ((outer[2] - outer[0]) - (counter[2] - counter[0])) / 2,
                "h": outer[3] - outer[1], "w": outer[2] - outer[0]}


# ------------------------------------------------------------------ curves

def _quad_runs(here, args, start):
    """TrueType packs a run of off-curve points with implied on-curve points
    halfway between consecutive pairs. Expand that into individual quadratics."""
    pts = list(args)
    if pts[-1] is None:                      # closed, entirely off-curve
        pts = pts[:-1] + [start]
    out = []
    for i in range(len(pts) - 1):
        c, nxt = pts[i], pts[i + 1]
        end = nxt if i == len(pts) - 2 else ((c[0] + nxt[0]) / 2, (c[1] + nxt[1]) / 2)
        out.append((c, end))
    if not out and pts:
        out.append((pts[0], pts[-1]))
    return out


def _flat_quad(p0, c, p1, n=FLATTEN):
    out = []
    for i in range(1, n + 1):
        t = i / n
        u = 1 - t
        out.append((u * u * p0[0] + 2 * u * t * c[0] + t * t * p1[0],
                    u * u * p0[1] + 2 * u * t * c[1] + t * t * p1[1]))
    return out


def _flat_cubic(p0, c1, c2, p1, n=FLATTEN):
    out = []
    for i in range(1, n + 1):
        t = i / n
        u = 1 - t
        out.append((u**3 * p0[0] + 3 * u * u * t * c1[0] + 3 * u * t * t * c2[0] + t**3 * p1[0],
                    u**3 * p0[1] + 3 * u * u * t * c1[1] + 3 * u * t * t * c2[1] + t**3 * p1[1]))
    return out


# --------------------------------------------------------------- typesetting

def typeset(face, text, cap=100.0, tracking=0.0):
    """Set a string at the given cap height.

    Returns (paths, bounds). Bounds come from the flattened outlines, not from
    control points, so they are the true ink extents.
    """
    s = cap / face.cap
    paths, pen = [], 0.0
    xs, ys = [], []
    for i, ch in enumerate(text):
        if ch != " ":
            paths.append(face.path_d(ch, dx=pen * s, dy=0, scale=s))
            for c in face.contours(ch):
                for (x, y) in c:
                    xs.append(x * s + pen * s)
                    ys.append(-y * s)
        adv = face.advance(ch)
        if i + 1 < len(text):
            adv += face.kerning(ch, text[i + 1])
        pen += adv + tracking / s
    return paths, (min(xs), min(ys), max(xs), max(ys))


def glyph_bounds(face, ch, cap=100.0, dx=0.0, mirror_about=None):
    """Ink bounds of one placed glyph, in SVG terms."""
    s = cap / face.cap
    xs, ys = [], []
    for c in face.contours(ch):
        for (x, y) in c:
            if mirror_about is not None:
                x = 2 * mirror_about - x
            xs.append(x * s + dx)
            ys.append(-y * s)
    return min(xs), min(ys), max(xs), max(ys)
