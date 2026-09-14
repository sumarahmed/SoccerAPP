"""
Soccolo brand system: geometric construction engine.

All mathematics is done in a Y-UP coordinate space with the baseline at y = 0.
Serialisation to SVG flips Y (SVG is Y-down) and inverts arc sweep flags.

A glyph or symbol is defined as a SKELETON: a tangent-continuous chain of
straight lines and circular arcs representing the centreline of a stroke.
The outline is produced by exactly offsetting that centreline by half the
stroke weight to each side. Offsetting a circular arc is exact (a concentric
arc); offsetting a line is exact (a translation). Nothing is traced, and no
curve is approximated.
"""
import math

TAU = math.tau


# ---------------------------------------------------------------- primitives

class Line:
    def __init__(self, p0, p1):
        self.p0 = tuple(map(float, p0))
        self.p1 = tuple(map(float, p1))

    @property
    def length(self):
        return math.hypot(self.p1[0] - self.p0[0], self.p1[1] - self.p0[1])

    def unit(self):
        L = self.length
        return ((self.p1[0] - self.p0[0]) / L, (self.p1[1] - self.p0[1]) / L)

    def offset(self, d):
        """Offset to the LEFT of travel by d (d may be negative for right)."""
        ux, uy = self.unit()
        nx, ny = -uy, ux                      # left normal
        return Line((self.p0[0] + nx * d, self.p0[1] + ny * d),
                    (self.p1[0] + nx * d, self.p1[1] + ny * d))

    def reversed(self):
        return Line(self.p1, self.p0)

    def start(self):
        return self.p0

    def end(self):
        return self.p1

    def sample(self, n=2):
        return [(self.p0[0] + (self.p1[0] - self.p0[0]) * i / n,
                 self.p0[1] + (self.p1[1] - self.p0[1]) * i / n) for i in range(n + 1)]


class Arc:
    """Circular arc. a0/a1 in degrees, standard maths convention (y-up, CCW+).
    ccw=True travels with increasing angle."""

    def __init__(self, c, r, a0, a1, ccw=True):
        self.c = tuple(map(float, c))
        self.r = float(r)
        self.a0 = float(a0)
        self.a1 = float(a1)
        self.ccw = bool(ccw)

    def sweep(self):
        """Signed angular travel in degrees."""
        d = (self.a1 - self.a0) % 360.0
        if not self.ccw:
            d = d - 360.0 if d != 0 else -360.0
        elif d == 0:
            d = 360.0
        return d

    def point(self, a_deg):
        a = math.radians(a_deg)
        return (self.c[0] + self.r * math.cos(a), self.c[1] + self.r * math.sin(a))

    def offset(self, d):
        """Offset to the LEFT of travel by d. Travelling CCW the left side is
        inward (smaller radius); travelling CW the left side is outward."""
        r = self.r - d if self.ccw else self.r + d
        return Arc(self.c, r, self.a0, self.a1, self.ccw)

    def reversed(self):
        return Arc(self.c, self.r, self.a1, self.a0, not self.ccw)

    def start(self):
        return self.point(self.a0)

    def end(self):
        return self.point(self.a1)

    def split(self, max_deg=90.0):
        """Split into chunks no larger than max_deg, so every SVG arc command
        is unambiguous."""
        total = self.sweep()
        n = max(1, math.ceil(abs(total) / max_deg))
        step = total / n
        out = []
        for i in range(n):
            out.append(Arc(self.c, self.r, self.a0 + step * i,
                           self.a0 + step * (i + 1), self.ccw))
        return out

    def sample(self, n=None):
        total = self.sweep()
        if n is None:
            n = max(4, int(abs(total) / 6))
        return [self.point(self.a0 + total * i / n) for i in range(n + 1)]


# ------------------------------------------------------------- path emission

def _fmt(v):
    s = f"{v:.3f}".rstrip("0").rstrip(".")
    return "0" if s in ("-0", "") else s


def _pt(p):
    """Y-up maths point -> Y-down SVG point."""
    return f"{_fmt(p[0])} {_fmt(-p[1])}"


def _seg_cmds(seg):
    """Emit SVG commands for a segment, assuming the pen is at seg.start()."""
    if isinstance(seg, Line):
        return f"L {_pt(seg.p1)}"
    out = []
    for a in seg.split(180.0):
        # After the Y flip, CCW-in-maths becomes CW-on-screen -> sweep flag 0.
        sweep = 0 if a.ccw else 1
        large = 1 if abs(a.sweep()) > 180.0 + 1e-9 else 0
        out.append(f"A {_fmt(a.r)} {_fmt(a.r)} 0 {large} {sweep} {_pt(a.end())}")
    return " ".join(out)


def _line_intersect(a, b):
    """Intersection of two infinite lines, or None if parallel."""
    x1, y1 = a.p0
    x2, y2 = a.p1
    x3, y3 = b.p0
    x4, y4 = b.p1
    den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4)
    if abs(den) < 1e-12:
        return None
    t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den
    return (x1 + t * (x2 - x1), y1 + t * (y2 - y1))


def _miter(offs, h, limit=6.0):
    """Close corners between adjacent offset segments.

    Tangent-continuous joins already meet exactly and are left untouched. A true
    corner between two straight offsets is mitred to their intersection, unless
    the spike would exceed the miter limit, in which case it is bevelled. Any
    other corner is bevelled, which the emitter does by drawing to the next
    segment's start.
    """
    segs = list(offs)
    for i in range(len(segs) - 1):
        a, b = segs[i], segs[i + 1]
        if math.dist(a.end(), b.start()) < 1e-7:
            continue
        if isinstance(a, Line) and isinstance(b, Line):
            x = _line_intersect(a, b)
            if x is not None and math.dist(x, a.end()) <= limit * h:
                segs[i] = Line(a.p0, x)
                segs[i + 1] = Line(x, b.p1)
    return segs


def _walk(segs):
    """Emit a chain, bridging any remaining corner with a straight bevel."""
    d, pen = [], None
    for s in segs:
        if pen is not None and math.dist(pen, s.start()) > 1e-7:
            d.append(f"L {_pt(s.start())}")
        d.append(_seg_cmds(s))
        pen = s.end()
    return d, pen


def _retarget(seg, y, at_start):
    """Slide a straight offset's endpoint along its own line until it reaches y.
    This is how a diagonal stroke gets a terminal cut square to the baseline
    instead of square to the stroke."""
    if not isinstance(seg, Line):
        return seg
    (x0, y0), (x1, y1) = seg.p0, seg.p1
    if abs(y1 - y0) < 1e-9:
        return seg
    t = (y - y0) / (y1 - y0)
    p = (x0 + t * (x1 - x0), y)
    return Line(p, seg.p1) if at_start else Line(seg.p0, p)


def _offsets(segs, weight, flat_start=None, flat_end=None):
    h = weight / 2.0
    left = _miter([s.offset(h) for s in segs], h)
    right = _miter([s.offset(-h) for s in segs], h)
    if flat_start is not None:
        left[0] = _retarget(left[0], flat_start, True)
        right[0] = _retarget(right[0], flat_start, True)
    if flat_end is not None:
        left[-1] = _retarget(left[-1], flat_end, False)
        right[-1] = _retarget(right[-1], flat_end, False)
    return left, right


def open_stroke(segs, weight, cap="butt", flat_start=None, flat_end=None):
    """Outline an open centreline chain.

    Walks the left offset forward, crosses the end cap, walks the right offset
    backward, crosses the start cap, and closes. Butt caps give the radial
    terminals used throughout this system; flat_start/flat_end override a
    terminal to a horizontal cut at the given height.
    """
    h = weight / 2.0
    left, right = _offsets(segs, weight, flat_start, flat_end)

    d = [f"M {_pt(left[0].start())}"]
    fwd, _ = _walk(left)
    d += fwd
    if cap == "round":
        d.append(f"A {_fmt(h)} {_fmt(h)} 0 0 0 {_pt(right[-1].end())}")
    else:
        d.append(f"L {_pt(right[-1].end())}")
    back, _ = _walk([s.reversed() for s in reversed(right)])
    d += back
    if cap == "round":
        d.append(f"A {_fmt(h)} {_fmt(h)} 0 0 0 {_pt(left[0].start())}")
    else:
        d.append(f"L {_pt(left[0].start())}")
    d.append("Z")
    return " ".join(d)


def ring(c, r_centre, weight):
    """Closed annulus: outer contour CCW, inner contour CW (non-zero fill)."""
    ro, ri = r_centre + weight / 2.0, r_centre - weight / 2.0
    cx, cy = c
    return (
        f"M {_pt((cx + ro, cy))} "
        f"A {_fmt(ro)} {_fmt(ro)} 0 1 0 {_pt((cx - ro, cy))} "
        f"A {_fmt(ro)} {_fmt(ro)} 0 1 0 {_pt((cx + ro, cy))} Z "
        f"M {_pt((cx + ri, cy))} "
        f"A {_fmt(ri)} {_fmt(ri)} 0 1 1 {_pt((cx - ri, cy))} "
        f"A {_fmt(ri)} {_fmt(ri)} 0 1 1 {_pt((cx + ri, cy))} Z"
    )


def disc(c, r):
    cx, cy = c
    return (
        f"M {_pt((cx + r, cy))} "
        f"A {_fmt(r)} {_fmt(r)} 0 1 0 {_pt((cx - r, cy))} "
        f"A {_fmt(r)} {_fmt(r)} 0 1 0 {_pt((cx + r, cy))} Z"
    )


# ------------------------------------------------------------------ measuring

def stroke_bounds(segs, weight, flat_start=None, flat_end=None):
    """Tight bounds of an outlined stroke chain, by dense sampling of the same
    offsets the outline is built from. Accurate to well under a thousandth of
    the em."""
    left, right = _offsets(segs, weight, flat_start, flat_end)
    pts = []
    for o in left + right:
        pts.extend(o.sample(200 if isinstance(o, Arc) else 2))
    xs = [p[0] for p in pts]
    ys = [p[1] for p in pts]
    return min(xs), min(ys), max(xs), max(ys)


def union_bounds(boxes):
    return (min(b[0] for b in boxes), min(b[1] for b in boxes),
            max(b[2] for b in boxes), max(b[3] for b in boxes))


def circle_bounds(c, r):
    return (c[0] - r, c[1] - r, c[0] + r, c[1] + r)


# ---------------------------------------------------------------- transform

def _translate(path_d, dx, dy):
    """Translate an emitted path. dy is given in Y-UP terms; SVG data is Y-down,
    so the vertical shift is negated here.

    Handles every command this system emits: M, L, Q, C, A and Z. Curve control
    points move with their endpoints, which an earlier version silently failed
    to do.
    """
    COORDS = {"M": 1, "L": 1, "T": 1, "Q": 2, "S": 2, "C": 3}
    out, toks = [], path_d.split()
    i = 0
    while i < len(toks):
        cmd = toks[i]
        if cmd in COORDS:
            n = COORDS[cmd]
            out.append(cmd)
            for j in range(n):
                out.append(_f(float(toks[i + 1 + j * 2]) + dx))
                out.append(_f(float(toks[i + 2 + j * 2]) - dy))
            i += 1 + n * 2
        elif cmd == "A":
            # rx ry rotation large-arc sweep, then the endpoint
            out += [cmd, toks[i + 1], toks[i + 2], toks[i + 3], toks[i + 4],
                    toks[i + 5],
                    _f(float(toks[i + 6]) + dx), _f(float(toks[i + 7]) - dy)]
            i += 8
        elif cmd == "Z":
            out.append(cmd)
            i += 1
        else:
            raise ValueError(f"unhandled path command {cmd!r}")
    return " ".join(out)


def _f(v):
    s = f"{v:.3f}".rstrip("0").rstrip(".")
    return "0" if s in ("-0", "") else s
