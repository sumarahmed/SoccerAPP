"""
Soccolo: the measured basis of the identity.

The wordmark and tagline are set in Poppins SemiBold (SIL Open Font License).
The symbol is NOT taken from the font. It is constructed here from ellipses,
with every dimension measured off the font's own lowercase o so that it sits
inside the word as if it belonged there.

Everything downstream reads its numbers from this module, so changing the face
changes the whole system coherently rather than leaving the symbol behind.
"""
import math

from fontmark import Face

FONT_FILE = "Poppins-SemiBold.ttf"
FONT_NAME = "Poppins SemiBold"
FONT_LICENCE = "SIL Open Font License 1.1"

FACE = Face(FONT_FILE, None, FONT_NAME)

#: Working unit. All geometry in this system is quoted at cap height 100.
CAP = 100.0
SCALE = CAP / FACE.cap                       # font units -> working units

_om = FACE.o_metrics()
_ob = _om["outer"]

XH = FACE.xh * SCALE                         # 79.03
OVER = (_om["h"] * SCALE - XH) / 2.0         # 1.28, the round overshoot

#: The o is not a ring of even thickness. Its side walls are heavier than its
#: top and bottom, which is the standard optical correction, and the symbol has
#: to be built the same way or it reads thin beside the letters.
STROKE_V = _om["stroke_v"] * SCALE           # 17.40, top and bottom
STROKE_H = _om["stroke_h"] * SCALE           # 20.40, left and right flanks
STROKE = (STROKE_V + STROKE_H) / 2.0         # the system's dimensional unit

RO_X = _om["w"] * SCALE / 2.0                # outer semi-axes of the o
RO_Y = _om["h"] * SCALE / 2.0
RI_X = RO_X - STROKE_H                       # counter semi-axes
RI_Y = RO_Y - STROKE_V
CY = (_ob[1] + _ob[3]) / 2.0 * SCALE         # 39.51, the x-height centre


def _aperture():
    """Half-angle of the gap in the font's own c, measured off its outline so
    the constructed form opens exactly as far as the letter does."""
    cb = FACE.bbox("c")
    cx = (cb[0] + cb[2]) / 2.0
    cy = (_ob[1] + _ob[3]) / 2.0
    r = _om["h"] / 2.0
    ang = sorted(math.degrees(math.atan2(y - cy, x - cx)) % 360.0
                 for c in FACE.contours("c") for (x, y) in c
                 if math.hypot(x - cx, y - cy) > r * 0.80)
    gap = max(((ang[(i + 1) % len(ang)] - a) % 360.0, a)
              for i, a in enumerate(ang))
    return gap[0] / 2.0


APERTURE = _aperture()                       # 18.6 degrees

#: Sidebearings, taken from the font so the symbol fits like the letters it
#: replaces rather than being spaced by eye.
def bearings(ch):
    b = FACE.bbox(ch)
    return b[0] * SCALE, (FACE.advance(ch) - b[2]) * SCALE


C_LSB, C_RSB = bearings("c")
O_LSB, O_RSB = bearings("o")

METRICS = {
    "font": FONT_NAME, "licence": FONT_LICENCE,
    "cap": CAP, "xHeight": round(XH, 2), "overshoot": round(OVER, 2),
    "strokeVertical": round(STROKE_V, 2), "strokeHorizontal": round(STROKE_H, 2),
    "oOuterWidth": round(RO_X * 2, 2), "oOuterHeight": round(RO_Y * 2, 2),
    "counterWidth": round(RI_X * 2, 2), "counterHeight": round(RI_Y * 2, 2),
    "aperture": round(APERTURE, 2), "xHeightCentre": round(CY, 2),
}
