"""
Vector PDF writer for the Soccolo artwork.

Writes PDFs directly from the same path data the SVGs use, rather than exporting
an RGB PDF and asking a printer to convert it. That matters for two reasons:
the colour is specified in CMYK where it will be printed in CMYK, and the file
carries an embedded output intent so the numbers are anchored to a named
condition rather than floating.

No fonts are embedded because there is no text: every mark is a filled path.
Nothing is transparent, so nothing has to be flattened downstream.

This is not claimed to be certified PDF/X. It is a clean, single-page,
CMYK vector PDF with an embedded ICC output intent, which is what a printer
actually needs from a logo file.
"""
import math
import zlib
from datetime import datetime, timezone

MM = 72.0 / 25.4                      # points per millimetre


# --------------------------------------------------------------- path parsing

def _tokens(d):
    return d.replace(",", " ").split()


def arc_to_cubics(p0, rx, ry, phi_deg, large, sweep, p1):
    """SVG elliptical arc to a list of cubic segments, in the same coordinate
    space the path data is written in. Endpoint to centre parameterisation,
    exactly as the SVG specification defines it."""
    x1, y1 = p0
    x2, y2 = p1
    if rx == 0 or ry == 0 or (abs(x1 - x2) < 1e-12 and abs(y1 - y2) < 1e-12):
        return [("L", p1)]
    phi = math.radians(phi_deg)
    cosp, sinp = math.cos(phi), math.sin(phi)
    dx2, dy2 = (x1 - x2) / 2.0, (y1 - y2) / 2.0
    x1p = cosp * dx2 + sinp * dy2
    y1p = -sinp * dx2 + cosp * dy2
    rx, ry = abs(rx), abs(ry)

    lam = (x1p * x1p) / (rx * rx) + (y1p * y1p) / (ry * ry)
    if lam > 1:
        k = math.sqrt(lam)
        rx, ry = rx * k, ry * k

    num = rx * rx * ry * ry - rx * rx * y1p * y1p - ry * ry * x1p * x1p
    den = rx * rx * y1p * y1p + ry * ry * x1p * x1p
    co = math.sqrt(max(0.0, num / den)) if den else 0.0
    if large == sweep:
        co = -co
    cxp = co * rx * y1p / ry
    cyp = -co * ry * x1p / rx
    cx = cosp * cxp - sinp * cyp + (x1 + x2) / 2.0
    cy = sinp * cxp + cosp * cyp + (y1 + y2) / 2.0

    def ang(ux, uy, vx, vy):
        n = math.hypot(ux, uy) * math.hypot(vx, vy)
        c = max(-1.0, min(1.0, (ux * vx + uy * vy) / n))
        a = math.acos(c)
        return -a if (ux * vy - uy * vx) < 0 else a

    ux, uy = (x1p - cxp) / rx, (y1p - cyp) / ry
    vx, vy = (-x1p - cxp) / rx, (-y1p - cyp) / ry
    th1 = ang(1, 0, ux, uy)
    dth = ang(ux, uy, vx, vy)
    if not sweep and dth > 0:
        dth -= 2 * math.pi
    elif sweep and dth < 0:
        dth += 2 * math.pi

    n = max(1, int(math.ceil(abs(dth) / (math.pi / 2))))
    step = dth / n
    a = 4.0 / 3.0 * math.tan(step / 4.0)
    out = []
    th = th1
    for _ in range(n):
        c1, s1 = math.cos(th), math.sin(th)
        c2, s2 = math.cos(th + step), math.sin(th + step)

        def E(c, s):
            return (cx + rx * cosp * c - ry * sinp * s,
                    cy + rx * sinp * c + ry * cosp * s)

        def D(c, s):
            return (-rx * cosp * s - ry * sinp * c,
                    -rx * sinp * s + ry * cosp * c)

        P0 = E(c1, s1)
        P3 = E(c2, s2)
        d0 = D(c1, s1)
        d3 = D(c2, s2)
        out.append(("C", (P0[0] + a * d0[0], P0[1] + a * d0[1]),
                    (P3[0] - a * d3[0], P3[1] - a * d3[1]), P3))
        th += step
    return out


def path_to_pdf(d, fmt):
    """SVG path data to PDF content-stream operators. `fmt` maps a point."""
    t = _tokens(d)
    out, i = [], 0
    here = start = (0.0, 0.0)
    while i < len(t):
        c = t[i]
        if c == "M":
            here = start = (float(t[i + 1]), float(t[i + 2]))
            out.append(f"{fmt(here)} m")
            i += 3
        elif c == "L":
            here = (float(t[i + 1]), float(t[i + 2]))
            out.append(f"{fmt(here)} l")
            i += 3
        elif c == "Q":
            q = (float(t[i + 1]), float(t[i + 2]))
            p = (float(t[i + 3]), float(t[i + 4]))
            # PDF has no quadratic operator; the exact cubic equivalent.
            c1 = (here[0] + 2.0 / 3.0 * (q[0] - here[0]),
                  here[1] + 2.0 / 3.0 * (q[1] - here[1]))
            c2 = (p[0] + 2.0 / 3.0 * (q[0] - p[0]),
                  p[1] + 2.0 / 3.0 * (q[1] - p[1]))
            out.append(f"{fmt(c1)} {fmt(c2)} {fmt(p)} c")
            here = p
            i += 5
        elif c == "C":
            c1 = (float(t[i + 1]), float(t[i + 2]))
            c2 = (float(t[i + 3]), float(t[i + 4]))
            p = (float(t[i + 5]), float(t[i + 6]))
            out.append(f"{fmt(c1)} {fmt(c2)} {fmt(p)} c")
            here = p
            i += 7
        elif c == "A":
            rx, ry, rot = float(t[i + 1]), float(t[i + 2]), float(t[i + 3])
            la, sw = int(float(t[i + 4])), int(float(t[i + 5]))
            p = (float(t[i + 6]), float(t[i + 7]))
            for seg in arc_to_cubics(here, rx, ry, rot, la, sw, p):
                if seg[0] == "L":
                    out.append(f"{fmt(seg[1])} l")
                else:
                    out.append(f"{fmt(seg[1])} {fmt(seg[2])} {fmt(seg[3])} c")
            here = p
            i += 8
        elif c == "Z":
            out.append("h")
            here = start
            i += 1
        else:
            raise ValueError(f"unhandled path command {c!r}")
    return " ".join(out)


# ------------------------------------------------------------------- colour

class CMYK:
    def __init__(self, c, m, y, k):
        self.v = (c, m, y, k)

    def op(self):
        return " ".join(f"{x:.4f}" for x in self.v) + " k"

    @property
    def tac(self):
        return round(sum(self.v) * 100)


class RGB:
    def __init__(self, hexs):
        h = hexs.lstrip("#")
        self.v = tuple(int(h[i:i + 2], 16) / 255.0 for i in (0, 2, 4))

    def op(self):
        return " ".join(f"{x:.4f}" for x in self.v) + " rg"


# ----------------------------------------------------------------- document

class PDF:
    def __init__(self, width_pt, height_pt, title="", subject="",
                 icc_path=None, icc_components=4, icc_name="FOGRA39L Coated"):
        self.w, self.h = width_pt, height_pt
        self.title, self.subject = title, subject
        self.icc_path, self.icc_n, self.icc_name = icc_path, icc_components, icc_name
        self.ops = []

    def fill(self, paths, colour, transform):
        """Fill a group of paths. `transform` maps artwork units to page points."""
        self.ops.append("q")
        self.ops.append(colour.op())
        for d in paths:
            self.ops.append(path_to_pdf(d, transform))
        self.ops.append("f")          # non-zero winding, as the artwork expects
        self.ops.append("Q")

    def rect(self, x, y, w, h, colour):
        self.ops.append(f"q {colour.op()} {x:.4f} {y:.4f} {w:.4f} {h:.4f} re f Q")

    # ------------------------------------------------------------- writing
    def bytes(self):
        objs = {}
        content = zlib.compress(("\n".join(self.ops)).encode("latin-1"))
        n = 1
        cat, pages, page, cont = n, n + 1, n + 2, n + 3
        info = n + 4
        nxt = n + 5
        icc_obj = intent_obj = None
        if self.icc_path:
            icc_obj, intent_obj = nxt, nxt + 1
            nxt += 2

        extra = f"/OutputIntents [{intent_obj} 0 R]" if intent_obj else ""
        objs[cat] = f"<< /Type /Catalog /Pages {pages} 0 R {extra} >>"
        objs[pages] = f"<< /Type /Pages /Kids [{page} 0 R] /Count 1 >>"
        objs[page] = (f"<< /Type /Page /Parent {pages} 0 R "
                      f"/MediaBox [0 0 {self.w:.4f} {self.h:.4f}] "
                      f"/TrimBox [0 0 {self.w:.4f} {self.h:.4f}] "
                      f"/Resources << >> /Contents {cont} 0 R >>")
        objs[cont] = (f"<< /Length {len(content)} /Filter /FlateDecode >>", content)
        now = datetime.now(timezone.utc).strftime("D:%Y%m%d%H%M%SZ")
        objs[info] = (f"<< /Title ({_esc(self.title)}) /Subject ({_esc(self.subject)}) "
                      f"/Creator (Soccolo brand system generator) "
                      f"/Producer (Soccolo pdfout) /CreationDate ({now}) "
                      f"/ModDate ({now}) >>")
        if icc_obj:
            icc = zlib.compress(open(self.icc_path, "rb").read())
            objs[icc_obj] = (f"<< /N {self.icc_n} /Length {len(icc)} "
                             f"/Filter /FlateDecode >>", icc)
            objs[intent_obj] = (
                f"<< /Type /OutputIntent /S /GTS_PDFX "
                f"/OutputConditionIdentifier ({_esc(self.icc_name)}) "
                f"/Info ({_esc(self.icc_name)}) "
                f"/DestOutputProfile {icc_obj} 0 R >>")

        buf = bytearray(b"%PDF-1.7\n%\xe2\xe3\xcf\xd3\n")
        offsets = {}
        for num in sorted(objs):
            offsets[num] = len(buf)
            body = objs[num]
            buf += f"{num} 0 obj\n".encode("latin-1")
            if isinstance(body, tuple):
                buf += body[0].encode("latin-1") + b"\nstream\n" + body[1] + b"\nendstream"
            else:
                buf += body.encode("latin-1")
            buf += b"\nendobj\n"
        xref = len(buf)
        top = max(objs) + 1
        buf += f"xref\n0 {top}\n".encode("latin-1")
        buf += b"0000000000 65535 f \n"
        for num in range(1, top):
            buf += f"{offsets.get(num, 0):010d} 00000 n \n".encode("latin-1")
        buf += (f"trailer\n<< /Size {top} /Root {cat} 0 R /Info {info} 0 R >>\n"
                f"startxref\n{xref}\n%%EOF\n").encode("latin-1")
        return bytes(buf)

    def save(self, path):
        import os
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, "wb") as f:
            f.write(self.bytes())
        return path


def _esc(s):
    return s.replace("\\", r"\\").replace("(", r"\(").replace(")", r"\)")


def mapper(scale, tx, ty):
    """Artwork units (y down) to page points (y up)."""
    def f(p):
        return f"{tx + p[0] * scale:.4f} {ty - p[1] * scale:.4f}"
    return f
