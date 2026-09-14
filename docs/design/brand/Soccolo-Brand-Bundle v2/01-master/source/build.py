"""Soccolo: asset bundle generator.

Running this file regenerates the derived artwork and copies the authored
documents and supplied reference PDFs unchanged. The derivation remains
reproducible without pretending that authored records are generated artwork.
"""
import argparse
import json
import os
import shutil
import sys

sys.dont_write_bytecode = True

import palette as P
import system as SY
import marks as M
import lockups as L
import sheets as SH
import printcolour as PC
from svgdoc import Doc, rasterise

SOURCE_DIR = os.path.dirname(os.path.abspath(__file__))
BUNDLE_SOURCE = os.path.abspath(os.path.join(SOURCE_DIR, "..", ".."))
ROOT = None
WORK = None
UNIT = L.UNIT


def path(*parts):
    if ROOT is None:
        raise RuntimeError("Build output is not configured")
    p = os.path.join(ROOT, *parts)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    return p


def work_path(name):
    if WORK is None:
        raise RuntimeError("Build work directory is not configured")
    os.makedirs(WORK, exist_ok=True)
    return os.path.join(WORK, name)


def c(n):
    return P.TOKENS[n]


# =========================================================== 01 editable master

EXPORT_LOCKUPS = ["symbol", "symbol-compact", "symbol-orbit", "wordmark",
                  "horizontal", "horizontal-tagline", "stacked", "stacked-tagline"]
EXPORT_CW = ["light", "dark", "black", "white"]


def build_master():
    """One artboard carrying every component as a named, separable group. This
    is the file a designer opens; every other SVG in the bundle is a crop of it."""
    pad, col_gap, row_gap = 120, 140, 130
    d = Doc(1700, 2420, title="Soccolo: editable master",
            desc="All identity components. Each group is named and separable. "
                 "Geometry is generated; see 01-master/source/.")
    d.bg(c("ink-800"))
    d.raw(f'<!-- Soccolo master artboard. Unit = {UNIT:.1f} '
          f'(the diameter of the dot at the centre of the symbol). -->')
    cw = L.COLOURWAYS["dark"]

    y = pad
    lab = c("ink-200")
    rows = [
        ("Primary horizontal", L.ALL["horizontal"](), 150),
        ("Primary horizontal with tagline", L.ALL["horizontal-tagline"](), 230),
        ("Wordmark, plain", L.ALL["wordmark"](), 130),
    ]
    for title, lock, h in rows:
        d.text(pad, y - 26, title.upper(), fill=lab, size=22, spacing=2.4, weight="600")
        sc = h / lock.height
        _, hh = L.emit(d, lock, cw, pad, y, sc, group_id="g-" + lock.name)
        y += hh + row_gap

    # Symbols across one row.
    d.text(pad, y - 26, "SYMBOLS".upper(), fill=lab, size=22, spacing=2.4, weight="600")
    x = pad
    for key, cap in [("symbol", "Primary"), ("symbol-compact", "Primary, small-size"),
                     ("symbol-orbit", "Alternate: Orbit")]:
        lock = L.ALL[key]()
        sc = 165 / lock.height
        w, hh = L.emit(d, lock, cw, x, y, sc, group_id="g-" + lock.name)
        d.text(x, y + hh + 34, cap, fill=c("ink-400"), size=19)
        x += w + col_gap
    y += 210 + row_gap

    d.text(pad, y - 26, "STACKED", fill=lab, size=22, spacing=2.4, weight="600")
    x = pad
    for key in ["stacked", "stacked-tagline", "stacked-orbit"]:
        lock = L.ALL[key]()
        sc = 300 / lock.height
        w, hh = L.emit(d, lock, cw, x, y, sc, group_id="g-" + lock.name)
        x += w + col_gap
    y += 300 + row_gap

    # Palette strip.
    d.text(pad, y - 26, "COLOUR", fill=lab, size=22, spacing=2.4, weight="600")
    sw = 128
    for i, name in enumerate(["ink-900", "ink-800", "ink-700", "ink-600", "ink-400",
                              "ink-200", "ink-100", "paper", "pitch-900", "pitch-700",
                              "pitch-600", "pitch-500", "pitch-400", "pitch-300",
                              "pitch-200", "pitch-100"]):
        cx = pad + (i % 8) * (sw + 14)
        cy = y + (i // 8) * (sw + 52)
        d.rect(cx, cy, sw, sw, c(name), rx=14, stroke=c("ink-700"), stroke_width="1.5")
        d.text(cx, cy + sw + 22, name, fill=c("ink-400"), size=16)
        d.text(cx, cy + sw + 42, c(name), fill=c("ink-600"), size=15)
    d.save(path("01-master", "soccolo-master.svg"))


def build_construction():
    """The drawing behind the drawing: the ellipses the symbol is built from,
    and the measurements taken off the typeface that set them."""
    import math
    W, H = 2000, 1460
    d = Doc(W, H, title="Soccolo, construction")
    d.bg(c("paper"))
    guide, hard, ink, note = c("ink-200"), c("pitch-700"), c("ink-800"), c("ink-600")

    def label(x, y, t, size=19, fill=None, weight="400", anchor="start"):
        d.text(x, y, t, fill=fill or note, size=size, weight=weight, anchor=anchor)

    label(120, 104, "SOCCOLO", 26, c("ink-800"), "700")
    label(120, 134, "CONSTRUCTION AND MEASURED GEOMETRY", 18, note, "600")
    d.line(120, 160, W - 120, 160, c("ink-200"), 1.5)

    sym = M.double_c()
    mt = sym.meta
    s = 4.9
    ink_w = sym.width * s
    ox = (W - ink_w) / 2.0
    top = 300.0

    def X(u):
        return ox + (u + sym.width / 2.0) * s

    def Y(v):
        return top + (sym.y1 - v) * s

    label(120, 218, "THE SYMBOL", 20, c("ink-800"), "700")
    for sgn in (-1, 1):
        cx = sgn * mt["separation"] / 2.0
        d.raw(f'<ellipse cx="{X(cx):.2f}" cy="{Y(mt["cy"]):.2f}" '
              f'rx="{mt["rx"] * s:.2f}" ry="{mt["ry"] * s:.2f}" fill="none" '
              f'stroke="{guide}" stroke-width="1.5"/>')
        d.raw(f'<ellipse cx="{X(cx):.2f}" cy="{Y(mt["cy"]):.2f}" '
              f'rx="{mt["ix"] * s:.2f}" ry="{mt["iy"] * s:.2f}" fill="none" '
              f'stroke="{guide}" stroke-width="1.5"/>')
        d.line(X(cx) - 12, Y(mt["cy"]), X(cx) + 12, Y(mt["cy"]), c("ink-400"), 1.2)
        d.line(X(cx), Y(mt["cy"]) - 12, X(cx), Y(mt["cy"]) + 12, c("ink-400"), 1.2)
    d.paths(sym.paths(dx=0), ink,
            transform=f"translate({ox},{top + sym.y1 * s}) scale({s})", opacity="0.9")

    cxu, cyv = -mt["separation"] / 2.0, mt["cy"]
    for sgn in (1, -1):
        a_ = math.radians(sgn * mt["aperture"])
        d.line(X(cxu), Y(cyv),
               X(cxu + (mt["rx"] + 9) * math.cos(a_)),
               Y(cyv + (mt["ry"] + 9) * math.sin(a_)),
               hard, 1.4, stroke_dasharray="6 5")
    label(X(cxu), Y(cyv) - mt["ry"] * s - 22,
          f"aperture ±{mt['aperture']:.1f}°", 17, hard, anchor="middle")

    dy = Y(cyv) + mt["ry"] * s + 54
    left_c, right_c = X(cxu), X(-cxu)
    d.line(left_c, dy, right_c, dy, hard, 1.6)
    for xx in (left_c, right_c):
        d.line(xx, dy - 9, xx, dy + 9, hard, 1.6)
        d.line(xx, Y(cyv), xx, dy - 14, guide, 1.2, stroke_dasharray="4 5")
    label((left_c + right_c) / 2, dy + 30,
          f"separation {mt['separation']:.2f}, exactly the width of two c's", 17,
          hard, anchor="middle")

    facts = [f"outer ellipse {mt['rx'] * 2:.2f} x {mt['ry'] * 2:.2f}",
             f"counter {mt['ix'] * 2:.2f} x {mt['iy'] * 2:.2f}",
             f"stroke {mt['stroke_h']:.2f} at the flanks, {mt['stroke_v']:.2f} top and bottom",
             f"dot diameter {mt['dot_d']:.2f}",
             f"dot clearance {mt['clearance']:.2f} ({mt['clearance'] / mt['stroke']:.2f} stroke)",
             f"gap between forms {mt['form_gap']:.2f} ({mt['form_gap'] / mt['stroke']:.2f} stroke)"]
    for i, t in enumerate(facts):
        label(120, 262 + i * 27, t, 17)
    label(120, 262 + 6 * 27 + 12,
          "Every axis is measured off the typeface's own o.", 17, hard)
    label(120, 262 + 7 * 27 + 12,
          "The two forms never touch; the dot is structural.", 17, hard)

    word = M.wordmark_plain()
    ws = 2.42
    wx, base = 300.0, 1300.0
    gx0, gx1 = 190.0, W - 330.0
    label(120, 870, "THE WORDMARK", 20, c("ink-800"), "700")
    for val, name, strong in [(SY.CAP, f"cap height {SY.CAP:g}", True),
                              (SY.XH, f"x-height {SY.XH:.2f}", True),
                              (0, "baseline", True),
                              (SY.CAP + SY.OVER, None, False),
                              (-SY.OVER, None, False)]:
        yy = base - val * ws
        d.line(gx0, yy, gx1, yy, hard if strong else guide, 1.4,
               stroke_dasharray="none" if strong else "5 6",
               opacity="0.85" if strong else "1")
        if name:
            label(gx1 + 16, yy + 6, name, 17)
    for val in (SY.CAP + SY.OVER, -SY.OVER):
        d.line(150, base - val * ws, gx0, base - val * ws, guide, 1.2)
    d.line(160, base - (SY.CAP + SY.OVER) * ws, 160, base + SY.OVER * ws,
           c("ink-400"), 1.4)
    label(120, base - (SY.CAP / 2) * ws, "overshoot", 16, c("ink-400"))
    label(120, base - (SY.CAP / 2) * ws + 20, f"±{SY.OVER:.2f}", 16, c("ink-400"))
    d.paths(word.paths(dx=0), ink, transform=f"translate({wx},{base}) scale({ws})")
    for i, t in enumerate([
            f"set in {SY.FONT_NAME} ({SY.FONT_LICENCE})",
            f"the letter's own aperture is ±{SY.APERTURE:.1f}°; the symbol opens "
            f"to ±{mt['aperture']:.1f}° so the dot has room",
            "the symbol is original artwork, not the typeface's c",
            "outlines are supplied converted, so no font file ships with the mark"]):
        label(120, 910 + i * 27, t, 17)
    d.save(path("01-master", "soccolo-construction-grid.svg"))


def build_clearspace():
    """Clear space stated in a unit anyone can measure off the mark itself."""
    lock = L.ALL["horizontal"]()
    n = lock.normalised()
    s = 2.0
    u = UNIT * s
    cs = 2 * u
    mx, my = 180.0, 150.0
    mw, mh = n.width * s, n.height * s
    W = mx * 2 + mw + cs * 2
    H = my + mh + cs * 2 + 200
    d = Doc(W, H, title="Soccolo, clear space")
    d.bg(c("paper"))

    bx, by = mx, my
    d.rect(bx, by, mw + cs * 2, mh + cs * 2, c("ink-100"), rx=4)
    d.rect(bx + cs, by + cs, mw, mh, c("paper"))
    L.emit(d, lock, L.COLOURWAYS["light"], bx + cs, by + cs, s)

    # The unit, drawn at size, filling each band twice over. Stacked vertically
    # in the top band and side by side in the left band, so each pair visibly
    # spans the dimension it governs.
    green = c("pitch-700")
    cxm = bx + cs + mw / 2
    cym = by + cs + mh / 2
    for i in range(2):
        d.circle(cxm, by + u / 2 + i * u, u / 2 - 1.2, "none",
                 stroke=green, stroke_width="2")
        d.circle(bx + u / 2 + i * u, cym, u / 2 - 1.2, "none",
                 stroke=green, stroke_width="2")
    d.text(cxm + u * 0.85, by + cs / 2 + 6, "2 units", fill=green, size=17)
    d.text(bx + 4, cym + u * 1.15 + 6, "2 units", fill=green, size=17)

    ty = by + mh + cs * 2 + 58
    d.text(mx, ty, "CLEAR SPACE", fill=c("ink-800"), size=21, weight="700", spacing=1.6)
    for i, t in enumerate([
            f"The unit is the dot at the centre of the symbol: {UNIT:.0f} units at cap height 100.",
            "Hold two of them clear on every side of the mark. Nothing enters that band: "
            "no type, rule, image edge or other logo.",
            "The band scales with the mark, so the rule holds at every size."]):
        d.text(mx, ty + 34 + i * 27, t, fill=c("ink-600"), size=18)
    d.save(path("05-specification", "clear-space.svg"))


#: Derived from the rendered legibility test below, not from a rule of thumb.
#: Print figures are the screen figure taken to a comfortable physical size for
#: offset and digital print; embroidery and etching need their own trials.
MIN_SIZE = [
    ("Primary horizontal", "horizontal", 88, "22 mm"),
    ("Horizontal with tagline", "horizontal-tagline", 140, "34 mm"),
    ("Stacked", "stacked", 88, "22 mm"),
    ("Stacked with tagline", "stacked-tagline", 140, "34 mm"),
]
MIN_SYMBOL = [("Primary symbol", 24, "6 mm"),
              ("Small-size variant", 20, "5 mm"),
              ("Alternate, Orbit", 20, "5 mm")]


def build_minsize():
    """Each lockup rendered at a ladder of real pixel widths, so the stated
    minimum is something the reader can check rather than take on trust."""
    from PIL import Image, ImageDraw
    tests = [("Primary horizontal", "horizontal", [56, 72, 88, 104, 128, 160]),
             ("Horizontal with tagline", "horizontal-tagline", [110, 140, 170, 200, 240, 300]),
             ("Stacked", "stacked", [48, 60, 72, 88, 110, 140]),
             ("Stacked with tagline", "stacked-tagline", [60, 76, 92, 110, 140, 180])]
    mins = {k: v for _, k, v, _ in MIN_SIZE}
    W, pad = 1560, 48
    sheet = Image.new("RGB", (W, 1160), (244, 248, 250))
    dr = ImageDraw.Draw(sheet)
    dr.text((pad, 38), "SOCCOLO  MINIMUM SIZE", font=_font(24, True), fill=(10, 34, 49))
    dr.text((pad, 72), "Rendered at the stated pixel width. The marked size is the "
                       "smallest at which the dot and the tagline hold.",
            font=_font(16), fill=(78, 126, 150))
    y = 130
    for label, key, widths in tests:
        lock = L.ALL[key]()
        dr.text((pad, y), label, font=_font(17, True), fill=(18, 52, 73))
        y += 26
        x, tall = pad, 0
        for w in widths:
            doc = L.standalone(lock, L.COLOURWAYS["light"], width=w * 4,
                               ground=c("paper"))
            sp = doc.save(work_path("minimum-size.svg"))
            pp = rasterise(sp, work_path("minimum-size.png"), width=w)
            im = Image.open(pp).convert("RGB")
            sheet.paste(im, (x, y))
            ok = w >= mins[key]
            dr.text((x, y + im.height + 8), f"{w} px" + ("  minimum" if w == mins[key] else ""),
                    font=_font(13, w == mins[key]),
                    fill=(10, 85, 55) if ok else (150, 120, 120))
            tall = max(tall, im.height)
            x += max(w, 64) + 44
        y += tall + 54
    sheet = sheet.crop((0, 0, W, y + 10))
    sheet.save(path("05-specification", "minimum-size.png"))
    return sheet.size


# ================================================================ 02 the logos

def build_logos():
    manifest = []
    for key in EXPORT_LOCKUPS:
        lock = L.ALL[key]()
        folder = ("symbol" if key.startswith("symbol")
                  else "stacked" if key.startswith("stacked") else "horizontal")
        for cwk in EXPORT_CW:
            cw = L.COLOURWAYS[cwk]
            doc = L.standalone(lock, cw, height=1000 if lock.ratio < 2 else None,
                               width=None if lock.ratio < 2 else 2000,
                               title=f"Soccolo {key} ({cw.label})")
            name = f"soccolo-{key}-{cwk}.svg"
            sp = doc.save(path("02-logo", folder, name))
            pp = path("02-logo", folder, "png", name.replace(".svg", ".png"))
            rasterise(sp, pp, width=2000 if lock.ratio >= 2 else None,
                      height=None if lock.ratio >= 2 else 1000)
            manifest.append({"lockup": key, "colourway": cwk,
                             "svg": os.path.relpath(sp, ROOT).replace(os.sep, "/"),
                             "png": os.path.relpath(pp, ROOT).replace(os.sep, "/"),
                             "aspect": round(lock.ratio, 4)})
        # transparent-ground note: every file above has no background rectangle
    # accent-ground variant, useful and easy to get wrong
    for key in ["symbol", "horizontal"]:
        lock = L.ALL[key]()
        doc = L.standalone(lock, L.COLOURWAYS["mint"], width=2000,
                           title=f"Soccolo {key} (on accent ground)")
        sp = doc.save(path("02-logo", "on-accent", f"soccolo-{key}-on-mint.svg"))
        manifest.append({"lockup": key, "colourway": "mint",
                         "svg": os.path.relpath(sp, ROOT).replace(os.sep, "/"), "png": None,
                         "aspect": round(lock.ratio, 4)})
    with open(path("02-logo", "manifest.json"), "w") as f:
        json.dump(manifest, f, indent=2)
    return manifest


# =================================================================== 03 app icons

def icon_doc(size, symbol_span, ground=True, mark_colour=None, rounded=None,
             alt=False, compact=False, title=None):
    lock = L.ALL["symbol-orbit" if alt else
                 ("symbol-compact" if compact else "symbol")]()
    n = lock.normalised()
    d = Doc(size, size, title=title or "Soccolo app icon")
    if ground:
        if rounded:
            d.rect(0, 0, size, size, c("ink-800"), rx=rounded)
        else:
            d.bg(c("ink-800"))
    target_w = size * symbol_span
    scale = target_w / n.width
    if n.height * scale > size * symbol_span:
        scale = size * symbol_span / n.height
    w, h = n.width * scale, n.height * scale
    cw = L.Colourway("icon", None, mark_colour or c("pitch-300"),
                     mark_colour or c("pitch-300"), mark_colour or c("pitch-300"), "")
    L.emit(d, lock, cw, (size - w) / 2, (size - h) / 2, scale, group_id="icon-mark")
    return d


def build_app():
    # --- master
    master = icon_doc(1024, 0.66, title="Soccolo app icon: 1024 master")
    mp = master.save(path("03-app", "soccolo-appicon-master-1024.svg"))
    rasterise(mp, path("03-app", "soccolo-appicon-master-1024.png"), width=1024)

    # --- iOS: full-bleed square source; the system applies the mask.
    ios = [1024, 180, 167, 152, 120, 87, 80, 76, 60, 58, 40, 29, 20]
    for s in ios:
        span = 0.66 if s >= 120 else 0.72
        doc = icon_doc(1024, span, compact=(s < 120),
                       title=f"Soccolo iOS icon {s}")
        tmp = doc.save(path("03-app", "ios", "_src", f"src-{s}.svg"))
        rasterise(tmp, path("03-app", "ios", f"AppIcon-{s}.png"), width=s)
    shutil.rmtree(path("03-app", "ios", "_src", "x")[:-2], ignore_errors=True)

    # --- Android adaptive: 432 canvas, 264 safe circle (Android uses the centre
    #     66 of 108 dp; anything outside can be cropped by the launcher mask).
    fg = Doc(432, 432, title="Soccolo Android adaptive: foreground")
    lock = L.ALL["symbol"]().normalised()
    scale = (264 * 0.92) / lock.width
    w, h = lock.width * scale, lock.height * scale
    cwm = L.Colourway("x", None, c("pitch-300"), c("pitch-300"), c("pitch-300"), "")
    L.emit(fg, L.ALL["symbol"](), cwm, (432 - w) / 2, (432 - h) / 2, scale,
           group_id="adaptive-foreground")
    fp = fg.save(path("03-app", "android", "ic_launcher_foreground.svg"))
    rasterise(fp, path("03-app", "android", "ic_launcher_foreground.png"), width=432)

    bgd = Doc(432, 432, title="Soccolo Android adaptive: background")
    bgd.bg(c("ink-800"))
    bp = bgd.save(path("03-app", "android", "ic_launcher_background.svg"))
    rasterise(bp, path("03-app", "android", "ic_launcher_background.png"), width=432)

    mono = Doc(432, 432, title="Soccolo Android adaptive: monochrome")
    L.emit(mono, L.ALL["symbol"](),
           L.Colourway("x", None, "#000000", "#000000", "#000000", ""),
           (432 - w) / 2, (432 - h) / 2, scale, group_id="adaptive-monochrome")
    mnp = mono.save(path("03-app", "android", "ic_launcher_monochrome.svg"))
    rasterise(mnp, path("03-app", "android", "ic_launcher_monochrome.png"), width=432)

    play = icon_doc(512, 0.66, title="Soccolo Play Store icon")
    pp = play.save(path("03-app", "android", "_playstore-512.svg"))
    rasterise(pp, path("03-app", "android", "playstore-icon-512.png"), width=512)

    # --- web
    fav = icon_doc(32, 0.80, compact=True, rounded=6, title="Soccolo favicon")
    fvp = fav.save(path("03-app", "web", "favicon.svg"))
    for s in (16, 32, 48):
        rasterise(fvp, path("03-app", "web", f"favicon-{s}.png"), width=s)
    orb = icon_doc(32, 0.74, alt=True, rounded=6,
                   title="Soccolo favicon: Orbit alternate")
    op = orb.save(path("03-app", "web", "favicon-orbit-alternate.svg"))
    for s in (16, 32):
        rasterise(op, path("03-app", "web", f"favicon-orbit-{s}.png"), width=s)
    atp = icon_doc(180, 0.66, title="Soccolo apple-touch-icon").save(
        path("03-app", "web", "_apple-touch.svg"))
    rasterise(atp, path("03-app", "web", "apple-touch-icon-180.png"), width=180)
    # Maskable: the safe zone is the centre 80%, so the mark sits smaller.
    msk = icon_doc(512, 0.58, title="Soccolo maskable icon")
    mskp = msk.save(path("03-app", "web", "_maskable.svg"))
    rasterise(mskp, path("03-app", "web", "maskable-icon-512.png"), width=512)

    for junk in ["03-app/ios/_src", "03-app/android/_playstore-512.svg",
                 "03-app/web/_apple-touch.svg", "03-app/web/_maskable.svg"]:
        p = os.path.join(ROOT, junk)
        shutil.rmtree(p, ignore_errors=True) if os.path.isdir(p) else (
            os.remove(p) if os.path.exists(p) else None)


def _font(size, bold=False):
    from PIL import ImageFont
    return ImageFont.truetype(
        os.path.join(BUNDLE_SOURCE, "01-master", "typeface", SY.FONT_FILE), size
    )


def build_small_proofs():
    """Actual-size renders beside hard-pixel blow-ups, which is the only honest
    way to judge a mark at tile sizes. Each column is one pixel size: the tile
    as it will actually appear, and above it the same pixels magnified so the
    failure mode is visible."""
    from PIL import Image, ImageDraw
    sizes = [16, 20, 24, 32, 48, 64]
    rows = [("Primary symbol", dict(compact=False), 0.66),
            ("Small-size variant", dict(compact=True), 0.72),
            ("Alternate, Orbit", dict(alt=True), 0.72)]
    Z = 6
    pad, gutter, label_w, head = 40, 40, 300, 96
    cell = max(sizes) * Z
    row_h = cell + 56 + 34
    W = pad * 2 + label_w + sum(s * Z for s in sizes) + gutter * (len(sizes) - 1)
    H = head + pad + len(rows) * (row_h + 46)
    sheet = Image.new("RGB", (W, H), (10, 34, 49))
    dr = ImageDraw.Draw(sheet)
    dr.text((pad, 34), "SOCCOLO  SMALL-SIZE PROOF", font=_font(26, True),
            fill=(84, 232, 172))
    dr.text((pad, 68), "Magnified above, actual rendered size below. "
                       "Navy ground, mint mark.", font=_font(17), fill=(140, 170, 185))
    y = head + 28
    for label, kw, span in rows:
        doc = icon_doc(1024, span, rounded=None, **kw)
        tmp = doc.save(work_path("small-size-tile.svg"))
        dr.text((pad, y + cell // 2 - 10), label, font=_font(19, True),
                fill=(215, 235, 243))
        x = pad + label_w
        for s in sizes:
            png = rasterise(tmp, work_path(f"small-size-tile-{s}.png"), width=s)
            im = Image.open(png).convert("RGB")
            sheet.paste(im.resize((s * Z, s * Z), Image.NEAREST),
                        (x, y + cell - s * Z))
            sheet.paste(im, (x + (s * Z - s) // 2, y + cell + 24))
            tw = dr.textlength(f"{s} px", font=_font(15))
            dr.text((x + (s * Z - tw) / 2, y + cell + 24 + s + 12), f"{s} px",
                    font=_font(15), fill=(140, 170, 185))
            x += s * Z + gutter
        y += row_h + 46
    sheet.save(path("03-app", "proofs", "small-size-proof.png"))
    return sheet.size


# ========================================================= 04 export treatment

FRAMES = [("1920x1080", 1920, 1080, "16:9: YouTube, broadcast, web"),
          ("1080x1080", 1080, 1080, "1:1: feed"),
          ("1080x1920", 1080, 1920, "9:16: Stories, Reels, TikTok")]

#: Fractions of the SHORT edge kept clear of the mark, per surface. The vertical
#: figures for 9:16 are what platform chrome actually occupies.
SAFE = {"1920x1080": (0.05, 0.05), "1080x1080": (0.06, 0.06),
        "1080x1920": (0.06, 0.14)}


def build_export_frames():
    lock = L.ALL["stacked-tagline"]()
    n = lock.normalised()
    for key, W, H, _ in FRAMES:
        for overlay in (False, True):
            d = Doc(W, H, title=f"Soccolo logo-first frame {key}")
            d.bg(c("ink-800"))
            span = 0.40 if key != "1080x1920" else 0.62
            scale = (W * span) / n.width
            w, h = n.width * scale, n.height * scale
            # Optical centre sits a little above true centre; at frame scale the
            # difference is visible, so it is applied rather than assumed away.
            L.emit(d, lock, L.COLOURWAYS["dark"], (W - w) / 2,
                   (H - h) / 2 - H * 0.015, scale, group_id="endframe-mark")
            if overlay:
                sx, sy = SAFE[key]
                mx, my = W * sx if W < H else H * sx, H * sy if H < W else W * sy
                mx, my = min(W, H) * sx, min(W, H) * sy
                d.rect(mx, my, W - 2 * mx, H - 2 * my, "none",
                       stroke=c("pitch-300"), stroke_width="3", stroke_dasharray="14 10",
                       opacity="0.85")
                d.text(mx + 14, my + 34, f"SAFE AREA  {key}", fill=c("pitch-300"), size=22,
                       spacing=2)
                cs = L.CLEAR * scale
                d.rect((W - w) / 2 - cs, (H - h) / 2 - H * 0.015 - cs,
                       w + 2 * cs, h + 2 * cs, "none", stroke=c("ink-400"),
                       stroke_width="2", stroke_dasharray="8 8", opacity="0.7")
            suffix = "-safe-area" if overlay else ""
            sp = d.save(path("04-export-treatment",
                             f"soccolo-endframe-{key}{suffix}.svg"))
            if not overlay:
                rasterise(sp, path("04-export-treatment",
                                   f"soccolo-endframe-{key}.png"), width=W)
            else:
                rasterise(sp, path("04-export-treatment", "overlays",
                                   f"soccolo-endframe-{key}-safe-area.png"), width=W // 2)


# ============================================================ 05 tokens & docs

def build_tokens():
    rows, ok = P.audit()
    data = {
        "$schema": "https://design-tokens.org/schema.json",
        "meta": {"system": "Soccolo", "unit": "the dot diameter at the centre "
                                              "of the symbol", "unitValue": UNIT},
        "colour": {k: {"value": v} for k, v in P.TOKENS.items()},
        "semantic": {k: {"value": f"{{colour.{v}}}" if v in P.TOKENS else v}
                     for k, v in P.SEMANTIC.items()},
        "geometry": {
            "typeface": {"value": SY.FONT_NAME},
            "typefaceLicence": {"value": SY.FONT_LICENCE},
            "capHeight": {"value": SY.CAP},
            "xHeight": {"value": round(SY.XH, 2)},
            "strokeVertical": {"value": round(SY.STROKE_V, 2)},
            "strokeHorizontal": {"value": round(SY.STROKE_H, 2)},
            "overshoot": {"value": round(SY.OVER, 2)},
            "letterAperture": {"value": round(SY.APERTURE, 2), "unit": "degrees"},
            "symbolAperture": {"value": round(M.double_c().meta["aperture"], 2),
                               "unit": "degrees"},
            "symbolSeparation": {"value": round(M.double_c().meta["separation"], 2)},
            "dotDiameter": {"value": round(UNIT, 3)},
            "clearSpace": {"value": round(L.CLEAR, 3)},
        },
        "contrastAudit": [
            {"pair": lbl, "foreground": fg, "background": bg,
             "ratio": round(r, 2), "minimum": mn, "pass": ps}
            for lbl, fg, bg, r, mn, ps in rows],
        "contrastAuditPasses": ok,
    }
    with open(path("05-specification", "colour-tokens.json"), "w") as f:
        json.dump(data, f, indent=2)

    css = [":root {"]
    for k, v in P.TOKENS.items():
        css.append(f"  --soccolo-{k}: {v};")
    css.append("")
    for k, v in P.SEMANTIC.items():
        ref = f"var(--soccolo-{v})" if v in P.TOKENS else v
        css.append(f"  --soccolo-{k.replace('.', '-')}: {ref};")
    css.append("}")
    with open(path("05-specification", "colour-tokens.css"), "w") as f:
        f.write("\n".join(css) + "\n")
    return rows, ok


def copy_source():
    for f in ["geom.py", "system.py", "fontmark.py", "marks.py", "lockups.py",
              "palette.py", "svgdoc.py", "build.py", "pdfout.py",
              "printcolour.py", "sheets.py", "requirements.txt"]:
        shutil.copy2(os.path.join(SOURCE_DIR, f), path("01-master", "source", f))
    # The typeface travels with the bundle, licence first.
    typeface = os.path.join(BUNDLE_SOURCE, "01-master", "typeface")
    shutil.copy2(os.path.join(typeface, "OFL.txt"),
                 path("01-master", "typeface", "OFL.txt"))
    shutil.copy2(os.path.join(typeface, SY.FONT_FILE),
                 path("01-master", "typeface", SY.FONT_FILE))
    profiles = os.path.join(BUNDLE_SOURCE, "01-master", "profiles")
    for name in ["FOGRA39L_coated.icc", "sRGB.icc"]:
        shutil.copy2(os.path.join(profiles, name),
                     path("01-master", "profiles", name))


def copy_authored_documents():
    """Copy records and user-supplied PDFs without regenerating them."""
    copies = [
        ("README.md", "README.md"),
        (os.path.join("04-export-treatment", "export-treatment.md"),
         os.path.join("04-export-treatment", "export-treatment.md")),
        (os.path.join("04-export-treatment", "soccolo-export-timing-specification.pdf"),
         os.path.join("04-export-treatment", "soccolo-export-timing-specification.pdf")),
        (os.path.join("04-export-treatment", "soccolo-export-timing-specification.png"),
         os.path.join("04-export-treatment", "soccolo-export-timing-specification.png")),
        (os.path.join("05-specification", "usage-specification.md"),
         os.path.join("05-specification", "usage-specification.md")),
        (os.path.join("06-provenance", "rights-and-provenance.md"),
         os.path.join("06-provenance", "rights-and-provenance.md")),
        (os.path.join("06-provenance", "similarity-review.md"),
         os.path.join("06-provenance", "similarity-review.md")),
        (os.path.join("06-provenance", "revision-log.md"),
         os.path.join("06-provenance", "revision-log.md")),
        (os.path.join("07-print", "soccolo-print-reference.pdf"),
         os.path.join("07-print", "soccolo-print-reference.pdf")),
    ]
    for source_rel, output_rel in copies:
        source = os.path.join(BUNDLE_SOURCE, source_rel)
        if not os.path.isfile(source):
            raise FileNotFoundError(f"Required authored source is missing: {source}")
        shutil.copy2(source, path(*output_rel.split(os.sep)))


def measure():
    """Numbers the specification quotes, taken from the geometry rather than
    written down and hoped for."""
    out = {}
    for k in L.ALL:
        lk = L.ALL[k]()
        out[k] = {"w": round(lk.width, 2), "h": round(lk.height, 2),
                  "ratio": round(lk.ratio, 3)}
    sym = M.double_c()
    out["_symbol"] = {k: (round(v, 3) if isinstance(v, float) else v)
                      for k, v in sym.meta.items() if not isinstance(v, (list, dict))}
    return out


def configure_output(output):
    """Resolve a safe build root and refuse unmarked non-empty directories."""
    global ROOT, WORK
    candidate = os.path.abspath(output)
    marker = os.path.join(candidate, ".soccolo-brand-build-root")
    if os.path.normcase(candidate) == os.path.normcase(BUNDLE_SOURCE):
        raise SystemExit("Refusing to rebuild in place; choose a separate --output directory")
    if os.path.isdir(candidate) and os.listdir(candidate) and not os.path.isfile(marker):
        raise SystemExit(
            "Refusing non-empty output without .soccolo-brand-build-root: " + candidate
        )
    os.makedirs(candidate, exist_ok=True)
    with open(marker, "w", encoding="utf-8") as stream:
        stream.write("Soccolo portable build output. Safe for generator refresh.\n")
    ROOT = candidate
    WORK = os.path.join(ROOT, ".build-work")


def main(argv=None):
    parser = argparse.ArgumentParser(description="Build the Soccolo brand bundle")
    parser.add_argument(
        "--output", required=True,
        help="Separate output directory; the checked-in source bundle is never overwritten",
    )
    args = parser.parse_args(argv)
    configure_output(args.output)

    # Clean only what this script generates. The authored documents in
    # 05-specification/ and 06-provenance/ are written by hand and kept.
    for sub in ["01-master", "02-logo", "03-app", "07-print"]:
        shutil.rmtree(os.path.join(ROOT, sub), ignore_errors=True)
    # 04-export-treatment holds an authored document alongside generated
    # frames, so only the generated files go.
    et = os.path.join(ROOT, "04-export-treatment")
    shutil.rmtree(os.path.join(et, "overlays"), ignore_errors=True)
    if os.path.isdir(et):
        for f in os.listdir(et):
            if os.path.splitext(f)[1] in (".svg", ".png", ".pdf"):
                os.remove(os.path.join(et, f))
    for f in ["clear-space.svg", "minimum-size.png", "colour-tokens.json",
              "colour-tokens.css", "measurements.json"]:
        fp = os.path.join(ROOT, "05-specification", f)
        if os.path.exists(fp):
            os.remove(fp)
    try:
        build_master()
        build_construction()
        build_clearspace()
        build_minsize()
        mani = build_logos()
        build_app()
        sz = build_small_proofs()
        build_export_frames()
        rows, ok = build_tokens()
        pdf_index = SH.build_logo_pdfs(ROOT)
        with open(path("07-print", "print-index.json"), "w") as f:
            json.dump({"condition": PC.CONDITION,
                       "intent": "relative colorimetric",
                       "artworkLongestEdgeMm": SH.ART_MM,
                       "colour": {k: {"hex": v["hex"],
                                      "cmyk": [round(x * 100) for x in v["cmyk"]],
                                      "totalAreaCoverage": v["tac"],
                                      "deltaE": round(v["dE"], 1),
                                      "inGamut": v["in_gamut"]}
                                  for k, v in PC.TABLE.items()},
                       "files": pdf_index}, f, indent=2)
        copy_source()
        copy_authored_documents()
        m = measure()
        with open(path("05-specification", "measurements.json"), "w") as f:
            json.dump(m, f, indent=2)
        print("output:", ROOT)
        print("logo files:", len(mani), "| print PDFs:", len(pdf_index),
              "| contrast audit passes:", ok, "| proof sheet:", sz)
        for k, v in m.items():
            print(f"  {k:24} {v}")
    finally:
        shutil.rmtree(WORK, ignore_errors=True)


if __name__ == "__main__":
    main()
