"""
Soccolo: the symbols and the wordmarks.

PRIMARY ("Double C"). Two c-forms, apertures facing, with a dot held between
them. Constructed here from ellipses, not lifted from the typeface: the outer
and inner axes, the stroke weights and the aperture angle are all measured off
the font's lowercase o and c, so the device reads as the "cc" of Soccolo while
remaining original artwork the brand owns outright.

Three deliberate departures from the sketch this replaces, all made to put
distance between the mark and the interlocking opposed-C monograms that are
heavily enforced in other classes (see 06-provenance/similarity-review.md):

  1. The two forms never overlap or interlock. A measured gap separates them.
  2. The dot is load-bearing. Remove it and the mark is incomplete, which is
     not true of an interlocking monogram.
  3. Terminals are cut square across the stroke at a fixed aperture, giving
     four blunt ends rather than the tapered terminals of a monogram.

ALTERNATE ("Orbit"). A different idea, not a variation: two broken concentric
rings turning against each other around the same dot. Square by construction,
so it fits an app tile without dead space.
"""
import math

import fontmark as FM
import system as SY
from geom import _translate, _fmt


class Mark:
    def __init__(self, name, parts, bounds, meta=None):
        self.name = name
        self.parts = parts
        self.x0, self.y0, self.x1, self.y1 = bounds
        self.meta = meta or {}

    @property
    def width(self):
        return self.x1 - self.x0

    @property
    def height(self):
        return self.y1 - self.y0

    def paths(self, dx=0.0, dy=0.0, origin="ink"):
        sx = dx - self.x0 if origin == "ink" else dx
        return [_translate(p, sx, dy) for p in self.parts]


# ------------------------------------------------------------ elliptical ring
# The font's o has a taller-than-wide counter, so the symbol is drawn from
# ellipses. Circular arcs cannot express that, which is why these shapes are
# emitted directly rather than built by offsetting a centreline.

def _e(rx, ry, cy, a):
    """Point on an ellipse at parametric angle a (degrees), y-up."""
    t = math.radians(a)
    return (rx * math.cos(t), cy + ry * math.sin(t))


def _pt(p):
    return f"{_fmt(p[0])} {_fmt(-p[1])}"


def ellipse_ring(rx, ry, ix, iy, cy):
    """Closed ring: outer ellipse one way, counter the other, non-zero fill."""
    return (f"M {_pt((rx, cy))} "
            f"A {_fmt(rx)} {_fmt(ry)} 0 1 0 {_pt((-rx, cy))} "
            f"A {_fmt(rx)} {_fmt(ry)} 0 1 0 {_pt((rx, cy))} Z "
            f"M {_pt((ix, cy))} "
            f"A {_fmt(ix)} {_fmt(iy)} 0 1 1 {_pt((-ix, cy))} "
            f"A {_fmt(ix)} {_fmt(iy)} 0 1 1 {_pt((ix, cy))} Z")


def c_form(rx, ry, ix, iy, cy, aperture, mirror=False):
    """One c: outer arc the long way round, a square terminal, the counter arc
    back, a square terminal home."""
    sgn = -1.0 if mirror else 1.0
    a0, a1 = aperture, -aperture

    def P(rx_, ry_, a):
        p = _e(rx_, ry_, cy, a)
        return (p[0] * sgn, p[1])

    return (f"M {_pt(P(rx, ry, a0))} "
            f"A {_fmt(rx)} {_fmt(ry)} 0 1 {0 if not mirror else 1} "
            f"{_pt(P(rx, ry, a1))} "
            f"L {_pt(P(ix, iy, a1))} "
            f"A {_fmt(ix)} {_fmt(iy)} 0 1 {1 if not mirror else 0} "
            f"{_pt(P(ix, iy, a0))} Z")


def disc(cx, cy, r):
    return (f"M {_fmt(cx - r)} {_fmt(-cy)} "
            f"A {_fmt(r)} {_fmt(r)} 0 1 0 {_fmt(cx + r)} {_fmt(-cy)} "
            f"A {_fmt(r)} {_fmt(r)} 0 1 0 {_fmt(cx - r)} {_fmt(-cy)} Z")


def _outline_points(rx, ry, ix, iy, cy, aperture, n=220):
    """Dense sample of one c, for measuring clearances honestly."""
    span = 360.0 - 2 * aperture
    pts = []
    for i in range(n + 1):
        a = aperture + span * i / n
        pts.append(_e(rx, ry, cy, a))
        pts.append(_e(ix, iy, cy, a))
    return pts


# ------------------------------------------------------------ primary symbol

#: The device occupies exactly the width of the two letters it replaces, so the
#: word keeps its rhythm straight through it. Everything else is solved from
#: that: the aperture opens until the two forms hold the gap below, and the dot
#: then grows to fill what is left while holding its own clearance.
GAP_FORMS = 0.72          # between the two c-forms, x stroke
GAP_DOT = 0.45            # between the dot and each form, x stroke
DOT_LIMITS = (0.95, 1.30)  # dot diameter, x stroke


def natural_cc():
    """Centre-to-centre distance of two c's as the font sets them."""
    return (SY.FACE.advance("c") + SY.FACE.kerning("c", "c")) * SY.SCALE


def double_c(sep=None, aperture=None, stroke_scale=1.0, gap_forms=GAP_FORMS,
             gap_dot=GAP_DOT, dot_limits=DOT_LIMITS, with_dot=True):
    sv, sh = SY.STROKE_V * stroke_scale, SY.STROKE_H * stroke_scale
    rx, ry = SY.RO_X, SY.RO_Y
    ix, iy = rx - sh, ry - sv
    cy = SY.CY
    stroke = (sv + sh) / 2.0
    if sep is None:
        sep = natural_cc()

    def form_gap(ap):
        pts = _outline_points(rx, ry, ix, iy, cy, ap)
        left = [(x - sep / 2.0, y) for x, y in pts]
        best = 1e18
        for px, py in left:
            for qx, qy in left:
                v = (px + qx) ** 2 + (py - qy) ** 2
                if v < best:
                    best = v
        return math.sqrt(best)

    if aperture is None:
        # The letter's own aperture is the floor; the device may open further.
        lo, hi = SY.APERTURE, 46.0
        for _ in range(30):
            mid = (lo + hi) / 2.0
            if form_gap(mid) < gap_forms * stroke:
                lo = mid
            else:
                hi = mid
        aperture = (lo + hi) / 2.0
    ap = aperture

    pts = _outline_points(rx, ry, ix, iy, cy, ap)
    dot_gap = min(math.hypot(x - sep / 2.0, y - cy) for x, y in pts)
    rd = dot_gap - gap_dot * stroke
    rd = max(dot_limits[0] * stroke / 2.0, min(dot_limits[1] * stroke / 2.0, rd))
    clearance = dot_gap - rd

    parts = [_translate(c_form(rx, ry, ix, iy, cy, ap), -sep / 2.0, 0),
             _translate(c_form(rx, ry, ix, iy, cy, ap, mirror=True), sep / 2.0, 0)]
    if with_dot:
        parts.append(disc(0.0, cy, rd))

    half = sep / 2.0 + rx
    return Mark("double-c", parts, (-half, cy - ry, half, cy + ry),
                {"separation": sep, "dot_d": rd * 2, "clearance": clearance,
                 "aperture": ap, "stroke_v": sv, "stroke_h": sh,
                 "stroke": stroke, "cy": cy, "rx": rx, "ry": ry,
                 "ix": ix, "iy": iy, "form_gap": form_gap(ap)})


def double_c_compact():
    """Small-size optical variant. Below about 24 px the aperture silts up and
    the dot welds itself to the terminals, so the aperture opens, the stroke
    thickens and the forms move apart. The same mark, redrawn for the size."""
    return double_c(sep=natural_cc() * 1.07, stroke_scale=1.10,
                    gap_forms=0.88, gap_dot=0.52, dot_limits=(0.95, 1.16))


# ---------------------------------------------------------- alternate symbol

def orbit(stroke_scale=1.0):
    w = SY.STROKE * stroke_scale
    outer_r = SY.RO_Y * 2.0
    gap = w * 0.72
    inner_r = outer_r - w - gap
    rd = (inner_r - w) * 0.46
    a_out, a_in = 21.0, 27.0

    def broken_ring(r, centre_deg, half):
        ro, ri = r, r - w
        a0, a1 = centre_deg + half, centre_deg - half + 360.0
        p = lambda rr, a: (rr * math.cos(math.radians(a)), rr * math.sin(math.radians(a)))
        return (f"M {_pt(p(ro, a0))} "
                f"A {_fmt(ro)} {_fmt(ro)} 0 1 0 {_pt(p(ro, a0 + 180))} "
                f"A {_fmt(ro)} {_fmt(ro)} 0 0 0 {_pt(p(ro, a1))} "
                f"L {_pt(p(ri, a1))} "
                f"A {_fmt(ri)} {_fmt(ri)} 0 0 1 {_pt(p(ri, a0 + 180))} "
                f"A {_fmt(ri)} {_fmt(ri)} 0 1 1 {_pt(p(ri, a0))} Z")

    parts = [broken_ring(outer_r, 56.0, a_out),
             broken_ring(inner_r, 236.0, a_in),
             disc(0.0, 0.0, rd)]
    return Mark("orbit", parts, (-outer_r, -outer_r, outer_r, outer_r),
                {"outer_r": outer_r, "inner_r": inner_r, "dot_d": rd * 2,
                 "stroke": w})


def orbit_compact():
    return orbit(stroke_scale=1.14)


# --------------------------------------------------------------- the wordmark
# Two wordmarks exist, and they are not interchangeable.
#
#   ACCENT  the symbol stands in for the "cc" and is set in the accent colour.
#           Used wherever the mark appears alone.
#   PLAIN   the word with ordinary c's, one colour throughout. Used whenever
#           the symbol already appears beside or above it, so the mark is not
#           stated twice.

def _mathsy(b):
    """Convert SVG-space bounds (y down) to the y-up bounds a Mark carries."""
    return (b[0], -b[3], b[2], -b[1])


def _union(boxes):
    return (min(b[0] for b in boxes), min(b[1] for b in boxes),
            max(b[2] for b in boxes), max(b[3] for b in boxes))


def wordmark_plain():
    paths, b = FM.typeset(SY.FACE, "Soccolo", cap=SY.CAP)
    bb = _mathsy(b)
    return Mark("wordmark-plain", paths, bb, {"advance": bb[2] - bb[0]})


def wordmark_accent():
    """Lays out S, o, [symbol], o, l, o. The symbol is fitted with the font's
    own c sidebearings, so the word keeps its rhythm through the device."""
    f, s = SY.FACE, SY.SCALE
    sym = double_c()

    head, hb = FM.typeset(f, "So", cap=SY.CAP)
    pen = (f.advance("S") + f.kerning("S", "o") + f.advance("o")
           + f.kerning("o", "c")) * s

    # The symbol occupies the space of two c's: left bearing of a c on the way
    # in, right bearing of a c on the way out.
    left_edge = pen + SY.C_LSB
    sym_centre = left_edge + sym.width / 2.0
    accent = sym.paths(dx=sym_centre, origin="raw")
    sym_box = (sym_centre + sym.x0, sym.y0, sym_centre + sym.x1, sym.y1)

    pen = left_edge + sym.width + SY.C_RSB + f.kerning("c", "o") * s
    tail, tb = FM.typeset(f, "olo", cap=SY.CAP)
    tail = [_translate(p, pen, 0) for p in tail]
    tail_box = _mathsy((tb[0] + pen, tb[1], tb[2] + pen, tb[3]))

    base = head + tail
    bb = _union([_mathsy(hb), sym_box, tail_box])
    return Mark("wordmark-accent", base + accent, bb,
                {"accent": accent, "base": base, "symbol": sym,
                 "advance": bb[2] - bb[0]})


def tagline(tracking=None):
    tr = SY.STROKE * 0.11 if tracking is None else tracking
    paths, b = FM.typeset(SY.FACE, "Train, Play, Grow", cap=SY.CAP, tracking=tr)
    bb = _mathsy(b)
    return Mark("tagline", paths, bb, {"advance": bb[2] - bb[0]})
