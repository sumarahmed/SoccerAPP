"""
Build the Soccolo wordmark from an openly licensed typeface.

The symbol is not re-used from the constructed version here. It is rebuilt from
the chosen font's own letter c and its mirror, so the device is made of the same
curves as the word it sits inside rather than approximately matching them.
"""
import math
import os

from fontTools.ttLib import TTFont
from fontTools.pens.recordingPen import DecomposingRecordingPen
from fontTools.varLib import instancer

SOURCE_DIR = os.path.dirname(os.path.abspath(__file__))
FONTS = os.path.abspath(os.path.join(SOURCE_DIR, "..", "typeface"))


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

    # --------------------------------------------------------------- glyphs
    def gname(self, ch):
        return self.cmap[ord(ch)]

    def contours(self, ch):
        """Flattened contours of a glyph, in font units, y-up."""
        # Decomposing, because a dotted i is often a composite glyph and a
        # plain recording pen would drop its components silently.
        pen = DecomposingRecordingPen(self.glyphset)
        self.glyphset[self.gname(ch)].draw(pen)
        out, cur, start = [], [], None
        for op, args in pen.value:
            if op == "moveTo":
                if cur:
                    out.append(cur)
                start = args[0]
                cur = [start]
            elif op == "lineTo":
                cur.append(args[0])
            elif op == "qCurveTo":
                cur += _quad(cur[-1], args)
            elif op == "curveTo":
                cur += _cubic(cur[-1], args)
            elif op == "closePath":
                if cur:
                    out.append(cur)
                cur = []
        if cur:
            out.append(cur)
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
        """SVG path data, y flipped, optionally mirrored horizontally about a
        given x in font units (used to make the reversed c)."""
        out = []
        for c in self.contours(ch):
            pts = c
            if mirror_about is not None:
                pts = [(2 * mirror_about - x, y) for x, y in pts]
            d = " ".join(
                ("M" if i == 0 else "L") +
                f" {(x * scale + dx):.3f} {(-y * scale + dy):.3f}"
                for i, (x, y) in enumerate(pts))
            out.append(d + " Z")
        return " ".join(out)

    # -------------------------------------------------------------- metrics
    def o_metrics(self):
        """Outer box and counter of the lowercase o, which is what the symbol
        has to match."""
        cs = self.contours("o")
        boxes = []
        for c in cs:
            xs, ys = [p[0] for p in c], [p[1] for p in c]
            boxes.append((min(xs), min(ys), max(xs), max(ys)))
        boxes.sort(key=lambda b: (b[2] - b[0]) * (b[3] - b[1]))
        counter, outer = boxes[0], boxes[-1]
        stroke_v = ((outer[3] - outer[1]) - (counter[3] - counter[1])) / 2
        stroke_h = ((outer[2] - outer[0]) - (counter[2] - counter[0])) / 2
        return {"outer": outer, "counter": counter,
                "stroke_v": stroke_v, "stroke_h": stroke_h,
                "h": outer[3] - outer[1], "w": outer[2] - outer[0]}


def _quad(p0, args):
    """Flatten a TrueType quadratic run, including implied on-curve points."""
    pts, out = list(args), []
    if pts[-1] is None:                       # closed all-off-curve contour
        pts = pts[:-1]
        pts.append(((pts[0][0] + pts[-1][0]) / 2, (pts[0][1] + pts[-1][1]) / 2))
    cur = p0
    for i in range(len(pts) - 1):
        c = pts[i]
        nxt = pts[i + 1]
        end = nxt if i == len(pts) - 2 else ((c[0] + nxt[0]) / 2, (c[1] + nxt[1]) / 2)
        for t in [j / 12 for j in range(1, 13)]:
            u = 1 - t
            out.append((u * u * cur[0] + 2 * u * t * c[0] + t * t * end[0],
                        u * u * cur[1] + 2 * u * t * c[1] + t * t * end[1]))
        cur = end
    return out


def _cubic(p0, args):
    c1, c2, p3 = args
    out = []
    for j in range(1, 17):
        t = j / 16
        u = 1 - t
        out.append((u**3 * p0[0] + 3 * u * u * t * c1[0] + 3 * u * t * t * c2[0] + t**3 * p3[0],
                    u**3 * p0[1] + 3 * u * u * t * c1[1] + 3 * u * t * t * c2[1] + t**3 * p3[1]))
    return out


# ------------------------------------------------------------------ assembly

def build_wordmark(face, cap=100.0, dot_ratio=1.05, clearance_ratio=0.40,
                   with_symbol=True):
    """Lay out Soccolo at the given cap height. Returns (base paths, accent
    paths, bounds, notes). The two c's become the symbol when with_symbol."""
    s = cap / face.cap
    om = face.o_metrics()
    stroke = om["stroke_v"] * s
    c_box = face.bbox("c")
    c_w = (c_box[2] - c_box[0])

    c_pts = [(x, y) for c in face.contours("c") for (x, y) in c]
    cx_local = (c_box[0] + c_box[2]) / 2.0
    cy_local = (c_box[1] + c_box[3]) / 2.0
    sample = c_pts[::2]

    def forms(sep_units):
        return [((x - cx_local - sep_units / 2.0) * s, y * s) for (x, y) in sample]

    def form_gap(sep_units):
        """Closest approach between the left form and its mirror."""
        left = forms(sep_units)
        best = 1e18
        for px, py in left:
            for qx, qy in left:
                v = (px + qx) ** 2 + (py - qy) ** 2
                if v < best:
                    best = v
        return math.sqrt(best)

    def dot_gap(sep_units):
        left = forms(sep_units)
        cy = cy_local * s
        return min(math.hypot(px, py - cy) for px, py in left)

    # Separation is set by the gap between the two forms, which is the figure
    # that has to stay constant across faces for the device to read the same.
    want_cc = 0.93 * stroke
    lo, hi = c_w * 0.5, c_w * 3.4
    for _ in range(34):
        mid = (lo + hi) / 2
        if form_gap(mid) < want_cc:
            lo = mid
        else:
            hi = mid
    sep = (lo + hi) / 2

    # The dot then fills the space that separation leaves, holding a constant
    # clearance. A face with a more open c gets a larger dot, which is right:
    # the dot is sized by the room it is given, not by a fixed ratio.
    rd = dot_gap(sep) - clearance_ratio * stroke
    rd = max(0.475 * stroke, min(0.78 * stroke, rd))

    def clearance(sep_units):
        return dot_gap(sep_units) - rd

    # ------------------------------------------------------------- layout
    base, accent = [], []
    pen = 0.0
    seq = "Soccolo"
    i = 0
    sym_span = None
    while i < len(seq):
        ch = seq[i]
        if with_symbol and seq[i:i + 2] == "cc":
            # Left form is the font's c; right form is its mirror.
            left_x = pen - c_box[0]
            accent.append(face.path_d("c", dx=left_x * s, dy=0, scale=s))
            right_centre = left_x + cx_local + sep
            accent.append(face.path_d(
                "c", dx=(right_centre - cx_local) * s, dy=0, scale=s,
                mirror_about=cx_local))
            dot_cx = (left_x + cx_local + sep / 2.0) * s
            dot_cy = -cy_local * s
            accent.append(_disc(dot_cx, dot_cy, rd))
            sym_span = (left_x * s + c_box[0] * s, (right_centre + (cx_local - c_box[0])) * s)
            pen = right_centre + (cx_local - c_box[0]) + \
                (face.advance("c") - (c_box[2] - c_box[0])) / 2.0 - c_box[0]
            pen = right_centre - cx_local + face.advance("c")
            i += 2
            continue
        base.append(face.path_d(ch, dx=pen * s, dy=0, scale=s))
        adv = face.advance(ch)
        nxt = seq[i + 1] if i + 1 < len(seq) else None
        if nxt and not (with_symbol and seq[i + 1:i + 3] == "cc"):
            adv += face.kerning(ch, nxt)
        pen += adv
        i += 1

    pts = []
    for ch_i, group in (("b", base), ("a", accent)):
        for d in group:
            pts += _path_points(d)
    xs, ys = [p[0] for p in pts], [p[1] for p in pts]
    bounds = (min(xs), min(ys), max(xs), max(ys))
    notes = {"stroke": stroke, "dot": rd * 2, "sep": sep * s,
             "clearance": clearance(sep), "o_h": om["h"] * s,
             "o_w": om["w"] * s, "cap": cap, "xh": face.xh * s}
    return base, accent, bounds, notes


def _disc(cx, cy, r):
    return (f"M {cx - r:.3f} {cy:.3f} "
            f"A {r:.3f} {r:.3f} 0 1 0 {cx + r:.3f} {cy:.3f} "
            f"A {r:.3f} {r:.3f} 0 1 0 {cx - r:.3f} {cy:.3f} Z")


def _path_points(d):
    toks = d.replace(",", " ").split()
    pts, i = [], 0
    while i < len(toks):
        t = toks[i]
        if t in ("M", "L"):
            pts.append((float(toks[i + 1]), float(toks[i + 2])))
            i += 3
        elif t == "A":
            pts.append((float(toks[i + 6]), float(toks[i + 7])))
            i += 8
        else:
            i += 1
    return pts


CANDIDATES = [
    ("Poppins-SemiBold.ttf", None, "Poppins SemiBold"),
    ("Poppins-Bold.ttf", None, "Poppins Bold"),
    ("Outfit[wght].ttf", 600, "Outfit SemiBold"),
    ("Outfit[wght].ttf", 700, "Outfit Bold"),
    ("Jost[wght].ttf", 600, "Jost SemiBold"),
    ("Urbanist[wght].ttf", 700, "Urbanist Bold"),
]


def typeset(face, text, cap=100.0, tracking=0.0):
    """Plain string setting, used for the tagline comparison."""
    s = cap / face.cap
    paths, pen = [], 0.0
    for i, ch in enumerate(text):
        if ch != " ":
            paths.append(face.path_d(ch, dx=pen * s, dy=0, scale=s))
        adv = face.advance(ch)
        if i + 1 < len(text):
            adv += face.kerning(ch, text[i + 1])
        pen += adv + tracking / s
    pts = [q for d in paths for q in _path_points(d)]
    xs, ys = [q[0] for q in pts], [q[1] for q in pts]
    return paths, (min(xs), min(ys), max(xs), max(ys))
