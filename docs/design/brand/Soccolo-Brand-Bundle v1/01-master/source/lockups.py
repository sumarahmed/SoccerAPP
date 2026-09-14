"""Soccolo: lockups, colourways and the geometry that relates them."""
import marks as M
import palette as P
import system as SY
from geom import _translate

STEM = SY.STROKE

#: The clear-space and spacing unit for the whole identity is the diameter of
#: the dot at the centre of the symbol. It is a visible part of the mark, so
#: anyone can measure it off a printed sheet without the specification to hand.
UNIT = M.double_c().meta["dot_d"]        # 22.8 at cap height 100
CLEAR = 2.0 * UNIT                       # clear space on every side

#: Tagline sizing is derived, not chosen: tracking is fixed, then the tagline is
#: scaled until it spans this fraction of the wordmark's width.
TAG_SPAN = 0.92
TAG_TRACKING = 0.20 * SY.STROKE


def _c(n):
    return P.TOKENS[n]


class Colourway:
    def __init__(self, key, ground, mark, accent, tag, label):
        self.key, self.ground, self.mark = key, ground, mark
        self.accent, self.tag, self.label = accent, tag, label


COLOURWAYS = {
    "light": Colourway("light", _c("paper"), _c("ink-800"), _c("pitch-700"),
                       _c("ink-600"), "Primary on light ground"),
    "dark": Colourway("dark", _c("ink-800"), _c("white"), _c("pitch-300"),
                      _c("ink-100"), "Primary on dark ground"),
    "mint": Colourway("mint", _c("pitch-300"), _c("ink-800"), _c("ink-800"),
                      _c("ink-700"), "On accent ground"),
    "black": Colourway("black", None, "#000000", "#000000", "#000000",
                       "One colour black"),
    "white": Colourway("white", None, "#FFFFFF", "#FFFFFF", "#FFFFFF",
                       "One colour white"),
}

#: Order in which layers are drawn, and therefore stacked in the master file.
ROLE_ORDER = ["mark", "accent", "tag"]


class Layer:
    """Paths in the shared unit space, optionally with a uniform scale applied
    about the origin. Keeping the scale as a transform rather than baking it
    into the coordinates is what lets the tagline stay one editable object."""

    def __init__(self, role, paths, scale=1.0, tx=0.0, ty=0.0):
        self.role, self.paths = role, paths
        self.scale, self.tx, self.ty = scale, tx, ty

    def shifted(self, dx, dy):
        if self.scale == 1.0 and self.tx == 0.0 and self.ty == 0.0:
            return Layer(self.role, [_translate(p, dx, dy) for p in self.paths])
        return Layer(self.role, self.paths, self.scale, self.tx + dx, self.ty + dy)

    def transform(self):
        if self.scale == 1.0 and self.tx == 0.0 and self.ty == 0.0:
            return None
        return (f"translate({self.tx:.4f},{-self.ty:.4f}) "
                f"scale({self.scale:.6f})")


class Lockup:
    def __init__(self, name, layers, bounds):
        self.name, self.layers = name, layers
        self.x0, self.y0, self.x1, self.y1 = bounds

    @property
    def width(self):
        return self.x1 - self.x0

    @property
    def height(self):
        return self.y1 - self.y0

    @property
    def ratio(self):
        return self.width / self.height

    def shifted(self, dx, dy):
        return Lockup(self.name, [l.shifted(dx, dy) for l in self.layers],
                      (self.x0 + dx, self.y0 + dy, self.x1 + dx, self.y1 + dy))

    def normalised(self):
        """Ink top-left at the origin, in SVG terms (y grows downward)."""
        return self.shifted(-self.x0, -self.y1)


def _tag_layer(target_width, origin_x, top_y, unit_gap=0.80):
    """Scale the tagline to span TAG_SPAN of `target_width` and hang it below
    `top_y`, centred on `origin_x` .. `origin_x + target_width`."""
    tag = M.tagline(tracking=TAG_TRACKING)
    scale = target_width * TAG_SPAN / tag.width
    ty = top_y - unit_gap * UNIT - tag.y1 * scale
    tx = origin_x + (target_width - tag.width * scale) / 2.0 - tag.x0 * scale
    layer = Layer("tag", list(tag.parts), scale, tx, ty)
    bounds = (tx + tag.x0 * scale, ty + tag.y0 * scale,
              tx + tag.x1 * scale, ty + tag.y1 * scale)
    return layer, bounds, scale


def _union(boxes):
    return (min(b[0] for b in boxes), min(b[1] for b in boxes),
            max(b[2] for b in boxes), max(b[3] for b in boxes))


# ------------------------------------------------------------------ builders

def symbol_only(alt=False, compact=False):
    if alt:
        s = M.orbit_compact() if compact else M.orbit()
    else:
        s = M.double_c_compact() if compact else M.double_c()
    name = s.name + ("-compact" if compact else "")
    return Lockup(name, [Layer("accent", s.paths(dx=0))], (0, s.y0, s.width, s.y1))


def horizontal(tagline=False):
    w = M.wordmark_accent()
    dx = -w.x0
    layers = [Layer("mark", [_translate(p, dx, 0) for p in w.meta["base"]]),
              Layer("accent", [_translate(p, dx, 0) for p in w.meta["accent"]])]
    box = (0, w.y0, w.width, w.y1)
    if not tagline:
        return Lockup("horizontal", layers, box)
    tl, tb, _ = _tag_layer(w.width, 0.0, w.y0)
    layers.append(tl)
    return Lockup("horizontal-tagline", layers, _union([box, tb]))


#: In a stacked lockup the symbol is not used at its inline size: at that size
#: it reads as a dropped letter pair rather than an emblem. It is scaled against
#: the width of the word beneath it, which is the measure the eye actually
#: compares. The two symbols take different fractions because one is twice as
#: wide as it is tall and the other is square.
STACK_SYMBOL_SPAN = {"double-c": 0.50, "orbit": 0.30}


def stacked(tagline=False, alt=False):
    sym = M.orbit() if alt else M.double_c()
    word = M.wordmark_plain()
    gap = 1.30 * UNIT
    s = STACK_SYMBOL_SPAN[sym.name] * word.width / sym.width

    sw, sh = sym.width * s, sym.height * s
    total_w = max(sw, word.width)
    sx = (total_w - sw) / 2.0
    wx = (total_w - word.width) / 2.0
    # Symbol sits with its underside on y = 0; the word hangs below it.
    sym_ty = -sym.y0 * s
    wy = -gap - word.y1

    layers = [Layer("accent", sym.paths(dx=0), s, sx, sym_ty),
              Layer("mark", [_translate(p, wx - word.x0, wy) for p in word.parts])]
    box = (0, wy + word.y0, total_w, sh)
    base = "stacked-alt" if alt else "stacked"
    if not tagline:
        return Lockup(base, layers, box)
    tl, tb, _ = _tag_layer(word.width, wx, wy + word.y0)
    layers.append(tl)
    return Lockup(base + "-tagline", layers, _union([box, tb]))


def wordmark_plain_lockup():
    w = M.wordmark_plain()
    return Lockup("wordmark", [Layer("mark", [_translate(p, -w.x0, 0) for p in w.parts])],
                  (0, w.y0, w.width, w.y1))


ALL = {
    "symbol": lambda: symbol_only(),
    "symbol-compact": lambda: symbol_only(compact=True),
    "symbol-orbit": lambda: symbol_only(alt=True),
    "symbol-orbit-compact": lambda: symbol_only(alt=True, compact=True),
    "wordmark": wordmark_plain_lockup,
    "horizontal": lambda: horizontal(),
    "horizontal-tagline": lambda: horizontal(tagline=True),
    "stacked": lambda: stacked(),
    "stacked-tagline": lambda: stacked(tagline=True),
    "stacked-orbit": lambda: stacked(alt=True),
}


# -------------------------------------------------------------------- drawing

def emit(doc, lock, cw, x, y, scale=1.0, group_id=None):
    """Draw a lockup with its ink top-left at (x, y), scaled uniformly."""
    n = lock.normalised()
    colour = {"mark": cw.mark, "accent": cw.accent, "tag": cw.tag}
    order = {r: i for i, r in enumerate(ROLE_ORDER)}
    items = sorted(n.layers, key=lambda l: order.get(l.role, 9))
    base = f"translate({x},{y}) scale({scale})"
    inner = []
    for l in items:
        t = l.transform()
        tr = f"{base} {t}" if t else base
        ps = "".join(f'<path d="{d}"/>' for d in l.paths)
        inner.append(f'<g fill="{colour[l.role]}" fill-rule="nonzero" '
                     f'data-role="{l.role}" transform="{tr}">{ps}</g>')
    gid = f' id="{group_id}"' if group_id else ""
    doc.raw(f"<g{gid}>" + "".join(inner) + "</g>")
    return n.width * scale, n.height * scale


def standalone(lock, cw, height=None, width=None, pad_units=0.0, ground=None,
               title=None):
    """A single lockup on its own artboard, sized to the ink plus optional
    clear space, ready to drop into a layout."""
    from svgdoc import Doc
    n = lock.normalised()
    if height:
        scale = height / n.height
    elif width:
        scale = width / n.width
    else:
        scale = 1.0
    pad = pad_units * UNIT * scale
    w = n.width * scale + 2 * pad
    h = n.height * scale + 2 * pad
    d = Doc(round(w, 4), round(h, 4), title=title)
    if ground:
        d.bg(ground)
    emit(d, lock, cw, pad, pad, scale, group_id=f"soccolo-{lock.name}")
    return d
