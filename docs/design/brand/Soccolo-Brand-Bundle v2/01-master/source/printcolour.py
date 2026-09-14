"""
Soccolo: the print colour build.

CMYK values are converted from the sRGB palette through the FOGRA39L Coated
profile at relative colorimetric intent, not by arithmetic. The round-trip
error is measured and reported in CIE dE76, because the important fact about
this palette is not what the numbers are but which of them survive the
conversion.
"""
import math
import os

from PIL import Image, ImageCms

import palette as P

SOURCE_DIR = os.path.dirname(os.path.abspath(__file__))
PROFILE_DIR = os.path.abspath(os.path.join(SOURCE_DIR, "..", "profiles"))
SRGB = os.path.join(PROFILE_DIR, "sRGB.icc")
FOGRA = os.path.join(PROFILE_DIR, "FOGRA39L_coated.icc")
CONDITION = "FOGRA39L Coated"
INTENT = 1                              # relative colorimetric

_src = ImageCms.getOpenProfile(SRGB)
_dst = ImageCms.getOpenProfile(FOGRA)
_fwd = ImageCms.buildTransform(_src, _dst, "RGB", "CMYK", renderingIntent=INTENT)
_back = ImageCms.buildTransform(_dst, _src, "CMYK", "RGB", renderingIntent=INTENT)


def _rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def _lab(c):
    def lin(v):
        v /= 255.0
        return v / 12.92 if v <= 0.04045 else ((v + 0.055) / 1.055) ** 2.4
    r, g, b = (lin(x) for x in c)
    X = r * 0.4124 + g * 0.3576 + b * 0.1805
    Y = r * 0.2126 + g * 0.7152 + b * 0.0722
    Z = r * 0.0193 + g * 0.1192 + b * 0.9505

    def f(t):
        return t ** (1 / 3) if t > (6 / 29) ** 3 else t / (3 * (6 / 29) ** 2) + 4 / 29
    fx, fy, fz = f(X / 0.95047), f(Y / 1.0), f(Z / 1.08883)
    return (116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz))


def delta_e(a, b):
    return math.sqrt(sum((x - y) ** 2 for x, y in zip(_lab(a), _lab(b))))


def to_cmyk(hexs):
    """Returns (c, m, y, k) as fractions, plus the round-trip dE."""
    im = Image.new("RGB", (1, 1), _rgb(hexs))
    cm = ImageCms.applyTransform(im, _fwd)
    back = ImageCms.applyTransform(cm, _back).getpixel((0, 0))
    v = tuple(x / 255.0 for x in cm.getpixel((0, 0)))
    return v, delta_e(_rgb(hexs), back)


#: dE above which a colour is treated as not reproducible in process colour.
#: Three is the usual threshold for a noticeable difference; ten is a different
#: colour. The bright end of the green ramp lands well past that.
GAMUT_LIMIT = 6.0

#: Overrides, because a converted value is not always the right value.
#: One-colour black is a single plate, not a four-colour build, and one-colour
#: white is the absence of ink rather than a tint.
OVERRIDES = {
    "#000000": (0.0, 0.0, 0.0, 1.0),
    "#FFFFFF": (0.0, 0.0, 0.0, 0.0),
}


def build():
    rows = {}
    for name, hexs in P.TOKENS.items():
        v, de = to_cmyk(hexs)
        rows[name] = {"hex": hexs, "cmyk": v, "dE": de,
                      "tac": round(sum(v) * 100),
                      "in_gamut": de <= GAMUT_LIMIT}
    return rows


TABLE = build()


def cmyk_for(hexs):
    if hexs.upper() in OVERRIDES:
        return OVERRIDES[hexs.upper()]
    for r in TABLE.values():
        if r["hex"].upper() == hexs.upper():
            return r["cmyk"]
    return to_cmyk(hexs)[0]


def pct(v):
    return tuple(round(x * 100) for x in v)


def simulated(hexs):
    """The colour as it comes back after a round trip through the print
    condition: what the ink will look like, near enough, on screen."""
    if hexs.upper() in OVERRIDES:
        return hexs
    im = Image.new("RGB", (1, 1), _rgb(hexs))
    r, g, b = ImageCms.applyTransform(ImageCms.applyTransform(im, _fwd), _back).getpixel((0, 0))
    return f"#{r:02X}{g:02X}{b:02X}"


def cmyk_string(hexs):
    c, m, y, k = pct(cmyk_for(hexs))
    return f"{c}/{m}/{y}/{k}"


if __name__ == "__main__":
    print(f"Condition: {CONDITION}, relative colorimetric\n")
    print(f"{'token':11} {'hex':9} {'C':>4}{'M':>4}{'Y':>4}{'K':>4}  {'TAC':>5} {'dE':>6}  gamut")
    for k, r in TABLE.items():
        c, m, y, kk = pct(r["cmyk"])
        flag = "ok" if r["in_gamut"] else "OUT"
        print(f"{k:11} {r['hex']:9} {c:4}{m:4}{y:4}{kk:4}  {r['tac']:4}% {r['dE']:6.1f}  {flag}")
    worst = max(TABLE.values(), key=lambda r: r["dE"])
    print(f"\nworst: {worst['hex']} at dE {worst['dE']:.1f}")
    print(f"max total area coverage: {max(r['tac'] for r in TABLE.values())}%")
