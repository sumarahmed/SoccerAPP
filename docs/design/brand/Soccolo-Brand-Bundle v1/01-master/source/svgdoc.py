"""Minimal SVG document builder for the Soccolo asset pipeline."""

HEADER = ('<svg xmlns="http://www.w3.org/2000/svg" '
          'viewBox="{vb}" width="{w}" height="{h}">')


class Doc:
    def __init__(self, w, h, vb=None, title=None, desc=None):
        self.w, self.h = w, h
        self.vb = vb or f"0 0 {_n(w)} {_n(h)}"
        self.body = []
        self.defs = []
        self.title = title
        self.desc = desc

    def rect(self, x, y, w, h, fill, rx=0, **kw):
        a = _attrs(kw)
        r = f' rx="{_n(rx)}"' if rx else ""
        self.body.append(f'<rect x="{_n(x)}" y="{_n(y)}" width="{_n(w)}" '
                         f'height="{_n(h)}" fill="{fill}"{r}{a}/>')

    def bg(self, fill):
        self.body.insert(0, f'<rect x="0" y="0" width="100%" height="100%" fill="{fill}"/>')

    def group(self, transform=None, **kw):
        return _Group(self, transform, kw)

    def paths(self, ds, fill, transform=None, **kw):
        a = _attrs(kw)
        t = f' transform="{transform}"' if transform else ""
        inner = "".join(f'<path d="{d}"/>' for d in ds)
        self.body.append(f'<g fill="{fill}" fill-rule="nonzero"{t}{a}>{inner}</g>')

    def circle(self, cx, cy, r, fill, **kw):
        self.body.append(f'<circle cx="{_n(cx)}" cy="{_n(cy)}" r="{_n(r)}" '
                         f'fill="{fill}"{_attrs(kw)}/>')

    def line(self, x1, y1, x2, y2, stroke, width=1, **kw):
        self.body.append(f'<line x1="{_n(x1)}" y1="{_n(y1)}" x2="{_n(x2)}" y2="{_n(y2)}" '
                         f'stroke="{stroke}" stroke-width="{_n(width)}"{_attrs(kw)}/>')

    def text(self, x, y, s, fill="#000", size=12, anchor="start", family=None,
             weight="400", spacing=0, **kw):
        fam = family or "ui-sans-serif, system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif"
        self.body.append(
            f'<text x="{_n(x)}" y="{_n(y)}" fill="{fill}" font-size="{_n(size)}" '
            f'text-anchor="{anchor}" font-family="{fam}" font-weight="{weight}" '
            f'letter-spacing="{_n(spacing)}"{_attrs(kw)}>{_esc(s)}</text>')

    def raw(self, s):
        self.body.append(s)

    def add_def(self, s):
        self.defs.append(s)

    def tostring(self):
        out = [HEADER.format(vb=self.vb, w=_n(self.w), h=_n(self.h))]
        if self.title:
            out.append(f"<title>{_esc(self.title)}</title>")
        if self.desc:
            out.append(f"<desc>{_esc(self.desc)}</desc>")
        if self.defs:
            out.append("<defs>" + "".join(self.defs) + "</defs>")
        out += self.body
        out.append("</svg>")
        return "\n".join(out)

    def save(self, path):
        import os
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, "w", encoding="utf-8") as f:
            f.write(self.tostring())
        return path


class _Group:
    def __init__(self, doc, transform, kw):
        self.doc, self.transform, self.kw = doc, transform, kw
        self.items = []

    def __enter__(self):
        self._saved = self.doc.body
        self.doc.body = self.items
        return self.doc

    def __exit__(self, *a):
        self.doc.body = self._saved
        t = f' transform="{self.transform}"' if self.transform else ""
        self.doc.body.append(f'<g{t}{_attrs(self.kw)}>' + "".join(self.items) + "</g>")


def _n(v):
    if isinstance(v, str):
        return v
    s = f"{v:.4f}".rstrip("0").rstrip(".")
    return "0" if s in ("-0", "") else s


def _attrs(kw):
    if not kw:
        return ""
    parts = []
    for k, v in kw.items():
        parts.append(f' {k.replace("_", "-")}="{v}"')
    return "".join(parts)


def _esc(s):
    return (str(s).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;"))


def rasterise(svg_path, png_path, width=None, height=None, scale=None, bg=None):
    import cairosvg, os
    os.makedirs(os.path.dirname(png_path), exist_ok=True)
    kw = {}
    if width:
        kw["output_width"] = width
    if height:
        kw["output_height"] = height
    if scale:
        kw["scale"] = scale
    if bg:
        kw["background_color"] = bg
    cairosvg.svg2png(url=svg_path, write_to=png_path, **kw)
    return png_path
