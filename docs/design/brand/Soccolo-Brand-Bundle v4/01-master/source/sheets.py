"""
Soccolo: print-ready artwork and the specification sheets that go with it.

Three things live here.

  1. The logo PDFs. Written directly in CMYK for press and in RGB for office
     use, with clear space built into the page so dropping the file into a
     layout cannot crowd the mark.
  2. The printer's reference, two pages, carrying the colour build, the gamut
     finding, sizes and production notes.
  3. The export timing specification, which turns the end-frame timing from
     prose into a drawing with a frame-accurate axis.
"""
import os

import lockups as L
import palette as P
import pdfout as PO
import printcolour as PC
import system as SY
from svgdoc import Doc

MM = PO.MM
ROLE = ["mark", "accent", "tag"]

#: Longest edge of the artwork on the page, in millimetres. Vector art scales,
#: but a predictable page size makes the files easier to place.
ART_MM = 100.0

PDF_LOCKUPS = ["horizontal", "horizontal-tagline", "stacked", "stacked-tagline",
               "symbol", "symbol-orbit", "wordmark"]
PDF_COLOURWAYS = ["light", "dark", "black", "white"]


def _colour(hexs, space):
    return PO.CMYK(*PC.cmyk_for(hexs)) if space == "cmyk" else PO.RGB(hexs)


def logo_pdf(lock, cw, space, title):
    """One lockup, one colourway, one colour space, on a page sized to the ink
    plus its clear space."""
    n = lock.normalised()
    longest = max(n.width, n.height)
    k = ART_MM * MM / longest
    m = L.CLEAR * k
    W, H = n.width * k + 2 * m, n.height * k + 2 * m

    subject = ("CMYK, FOGRA39L Coated, relative colorimetric"
               if space == "cmyk" else "sRGB")
    doc = PO.PDF(W, H, title=title, subject=subject,
                 icc_path=PC.FOGRA if space == "cmyk" else None,
                 icc_name=PC.CONDITION)
    colours = {"mark": cw.mark, "accent": cw.accent, "tag": cw.tag}
    for layer in sorted(n.layers, key=lambda l: ROLE.index(l.role)):
        col = _colour(colours[layer.role], space)
        if layer.scale != 1.0 or layer.tx or layer.ty:
            f = PO.mapper(k * layer.scale, m + layer.tx * k, H - m + layer.ty * k)
        else:
            f = PO.mapper(k, m, H - m)
        doc.fill(layer.paths, col, f)
    return doc, (W / MM, H / MM)


def build_logo_pdfs(root):
    index = []
    for key in PDF_LOCKUPS:
        lock = L.ALL[key]()
        for cwk in PDF_COLOURWAYS:
            cw = L.COLOURWAYS[cwk]
            for space in ("cmyk", "rgb"):
                title = f"Soccolo {key} {cwk} ({space.upper()})"
                doc, size = logo_pdf(lock, cw, space, title)
                sub = "cmyk-for-print" if space == "cmyk" else "rgb-for-office"
                p = os.path.join(root, "07-print", sub,
                                 f"soccolo-{key}-{cwk}-{space}.pdf")
                doc.save(p)
                index.append({"lockup": key, "colourway": cwk, "space": space,
                              "file": os.path.relpath(p, root).replace(os.sep, "/"),
                              "page_mm": [round(size[0], 1), round(size[1], 1)]})
    return index


# ------------------------------------------------------------------- sheets

INK, GREEN, MUTE, RULE = "#0A2231", "#0A5537", "#4E7E96", "#CBDBE4"
PAPER = "#FFFFFF"
FONT = "Poppins, 'DejaVu Sans', sans-serif"


def _page(w=210.0, h=297.0):
    d = Doc(f"{w}mm", f"{h}mm", vb=f"0 0 {w} {h}")
    d.bg(PAPER)
    return d


def _t(d, x, y, s, size=3.2, fill=INK, weight="400", anchor="start", spacing=0):
    d.text(x, y, s, fill=fill, size=size, anchor=anchor, family=FONT,
           weight=weight, spacing=spacing)


def _head(d, title, sub, page, of):
    lock = L.ALL["horizontal"]()
    n = lock.normalised()
    k = 34.0 / n.width
    L.emit(d, lock, L.COLOURWAYS["light"], 16, 15, k)
    _t(d, 16, 34, title, 6.4, INK, "600")
    _t(d, 16, 40, sub, 3.3, MUTE)
    _t(d, 194, 18, f"{page} / {of}", 3.0, MUTE, anchor="end")
    _t(d, 194, 23, "Version 1.1", 3.0, MUTE, anchor="end")
    d.line(16, 45, 194, 45, RULE, 0.3)


def print_reference_p1():
    d = _page()
    _head(d, "Print reference", "Colour build, gamut and production notes", 1, 2)

    _t(d, 16, 55, "COLOUR BUILD", 3.4, INK, "600", spacing=0.5)
    _t(d, 16, 60.5, f"Converted from sRGB through {PC.CONDITION} at relative "
       f"colorimetric intent. Not by arithmetic.", 2.9, MUTE)

    cols = [16, 40, 58, 84, 116, 130, 144, 160]
    hdr = ["Token", "Screen", "Hex", "C / M / Y / K", "TAC", "dE", "Process", "Note"]
    y = 69
    for x, hlabel in zip(cols, hdr):
        _t(d, x, y, hlabel.upper(), 2.5, MUTE, "600", spacing=0.3)
    d.line(16, y + 1.6, 194, y + 1.6, RULE, 0.3)

    y += 6
    for name, r in PC.TABLE.items():
        if name == "white":
            continue
        sim = PC.simulated(r["hex"])
        d.rect(cols[1], y - 3.2, 14, 4.2, r["hex"], rx=0.4)
        d.rect(cols[6], y - 3.2, 11, 4.2, sim, rx=0.4)
        _t(d, cols[0], y, name, 2.7)
        _t(d, cols[2], y, r["hex"], 2.6, MUTE)
        c, m, yy, kk = PC.pct(r["cmyk"])
        _t(d, cols[3], y, f"{c} / {m} / {yy} / {kk}", 2.6)
        _t(d, cols[4], y, f"{r['tac']}%", 2.6, MUTE)
        _t(d, cols[5], y, f"{r['dE']:.1f}", 2.6,
           INK if r["in_gamut"] else "#A4432E")
        if not r["in_gamut"]:
            _t(d, cols[7], y, "out of gamut", 2.5, "#A4432E")
        d.line(16, y + 1.6, 194, y + 1.6, "#EEF3F6", 0.25)
        y += 6.2

    # The finding that matters.
    y += 4
    d.rect(16, y, 178, 34, "#FFF6E8", rx=1)
    d.rect(16, y, 1.2, 34, "#C98A2E")
    _t(d, 21, y + 7, "The mint does not reproduce in process colour", 3.6, "#6B4410", "600")
    for i, line in enumerate([
            "pitch-300 lands 30.1 dE from its screen value in four-colour process. Anything past about 3 dE is a",
            "visible difference; 30 is a different colour. The bright end of the green ramp is all out of gamut.",
            "",
            "For CMYK print use the deep green, pitch-700, which converts at 0.5 dE. Where the mint is genuinely",
            "required (reversed on navy, for instance) specify a fifth plate as a spot colour and have the printer",
            "match it against a physical guide. No spot reference is given here because none has been verified."]):
        _t(d, 21, y + 12.5 + i * 3.6, line, 2.7, "#6B4410")

    y += 42
    _t(d, 16, y, "SIMULATED SIDE BY SIDE", 3.4, INK, "600", spacing=0.5)
    y += 6
    lock = L.ALL["symbol"]()
    for i, (label, hexs) in enumerate([("Screen mint", P.TOKENS["pitch-300"]),
                                       ("Mint in process colour", PC.simulated(P.TOKENS["pitch-300"])),
                                       ("Deep green, screen", P.TOKENS["pitch-700"]),
                                       ("Deep green in process", PC.simulated(P.TOKENS["pitch-700"]))]):
        x = 16 + i * 45
        d.rect(x, y, 40, 20, "#0A2231", rx=1)
        cw = L.Colourway("x", None, hexs, hexs, hexs, "")
        n = lock.normalised()
        k = 30.0 / n.width
        L.emit(d, lock, cw, x + 5, y + (20 - n.height * k) / 2, k)
        _t(d, x, y + 24, label, 2.5, MUTE)
    return d


def print_reference_p2():
    d = _page()
    _head(d, "Print reference", "Sizes, clear space and file index", 2, 2)

    _t(d, 16, 55, "MINIMUM SIZE IN PRINT", 3.4, INK, "600", spacing=0.5)
    y = 62
    rows = [("Primary horizontal", "22 mm wide"),
            ("Horizontal with tagline", "34 mm wide"),
            ("Stacked", "22 mm wide"),
            ("Stacked with tagline", "34 mm wide"),
            ("Primary symbol", "6 mm wide"),
            ("Small-size symbol variant", "5 mm wide")]
    for a, b in rows:
        _t(d, 16, y, a, 2.9)
        _t(d, 80, y, b, 2.9, GREEN)
        d.line(16, y + 1.6, 120, y + 1.6, "#EEF3F6", 0.25)
        y += 6
    _t(d, 16, y + 4, "Embroidery, etching, debossing and vinyl need their own physical", 2.7, MUTE)
    _t(d, 16, y + 8, "trials. These figures do not transfer to them.", 2.7, MUTE)

    # Clear space, drawn at size.
    y += 18
    _t(d, 16, y, "CLEAR SPACE", 3.4, INK, "600", spacing=0.5)
    y += 6
    lock = L.ALL["horizontal"]()
    n = lock.normalised()
    k = 70.0 / n.width
    u = L.UNIT * k
    cs = 2 * u
    d.rect(16, y, n.width * k + 2 * cs, n.height * k + 2 * cs, "#E7EFF3", rx=0.6)
    d.rect(16 + cs, y + cs, n.width * k, n.height * k, PAPER)
    L.emit(d, lock, L.COLOURWAYS["light"], 16 + cs, y + cs, k)
    for i in range(2):
        d.circle(16 + cs + n.width * k / 2, y + u / 2 + i * u, u / 2 - 0.2,
                 "none", stroke=GREEN, stroke_width="0.3")
    _t(d, 16 + cs + n.width * k / 2 + u, y + cs / 2 + 0.8, "2 units", 2.6, GREEN)
    _t(d, 120, y + 6, f"One unit is the dot at the centre of the symbol.", 2.8)
    _t(d, 120, y + 10, f"Hold two of them clear on every side.", 2.8)
    _t(d, 120, y + 14, "The clear space is already built into every", 2.8, MUTE)
    _t(d, 120, y + 18, "page in this folder, so placing the PDF edge", 2.8, MUTE)
    _t(d, 120, y + 22, "to edge still respects it.", 2.8, MUTE)

    y += n.height * k + 2 * cs + 12
    _t(d, 16, y, "WHAT IS IN THIS FOLDER", 3.4, INK, "600", spacing=0.5)
    y += 6
    for a, b in [("cmyk-for-print/", "CMYK vector, FOGRA39L output intent embedded. Use these on press."),
                 ("rgb-for-office/", "sRGB vector, for documents, slides and email."),
                 ("soccolo-print-reference.pdf", "This document."),
                 ("", ""),
                 ("Naming", "soccolo-[lockup]-[colourway]-[space].pdf")]:
        if a:
            _t(d, 16, y, a, 2.8, INK, "500")
            _t(d, 62, y, b, 2.8, MUTE)
        y += 5.4

    y += 2
    _t(d, 16, y, "STOCK AND PROCESS", 3.4, INK, "600", spacing=0.5)
    y += 6
    for a, b in [
            ("Coated", "As specified. The build above is measured against this condition."),
            ("Uncoated", "Ink spreads and the navy gains. Ask for a proof on the actual stock and"),
            ("", "expect to lighten the navy build rather than accept a heavier mark."),
            ("Newsprint, low grade", "Use the one-colour black file. A four-colour navy will fill in."),
            ("One colour", "Use the black or white files, never a tint or a screen of the navy."),
            ("Foil, emboss, screen", "Supply the one-colour black as artwork. These are line processes:"),
            ("", "re-test the minimum sizes physically before committing."),
    ]:
        if a:
            _t(d, 16, y, a, 2.8, INK, "500")
        _t(d, 62, y, b, 2.8, MUTE)
        y += 4.8

    y += 4
    _t(d, 16, y, "PRODUCTION NOTES", 3.4, INK, "600", spacing=0.5)
    y += 6
    for line in [
            "No fonts are embedded. Every mark is a filled path, so nothing can substitute or reflow.",
            "No transparency, no overprint set, no spot channels. Nothing needs flattening.",
            "Fills are non-zero winding. Counters are real holes, not white shapes laid on top.",
            "Highest total area coverage in the palette is 280% (pitch-900), inside the 330% FOGRA39 limit.",
            "Pages are trimmed to the artwork plus its clear space. There is no bleed because there is no",
            "    background: place the file on your own ground.",
            "This is a clean CMYK vector PDF with an embedded output intent. It is not certified PDF/X.",
            "Do not recolour, rasterise, add a keyline, or scale below the minimums above.",
    ]:
        _t(d, 16, y, line, 2.75, MUTE)
        y += 4.6
    return d


# ---------------------------------------------------- export timing sheet

PHASES = [("Ground in", 0.00, 0.30, "Navy field fades up from the preceding shot", "#1E4A63"),
          ("Hold", 0.30, 0.50, "Empty navy. A beat before the mark", "#4E7E96"),
          ("Mark in", 0.50, 0.90, "Lockup fades in, 0 to 100", "#0C6B45"),
          ("HOLD", 0.90, 3.40, "Mark absolutely still. 2.5 s minimum", "#0A5537"),
          ("Out", 3.40, 4.00, "Whole frame fades out, or cuts", "#1E4A63")]

CROPS = [("16:9", 1920, 1080, 0.05, 0.05, "YouTube, broadcast, web"),
         ("1:1", 1080, 1080, 0.06, 0.06, "Feed"),
         ("9:16", 1080, 1920, 0.06, 0.14, "Stories, Reels, TikTok")]


def timing_sheet():
    W, H = 297.0, 210.0
    d = _page(W, H)
    lock = L.ALL["horizontal"]()
    n = lock.normalised()
    L.emit(d, lock, L.COLOURWAYS["light"], 16, 14, 34.0 / n.width)
    _t(d, 16, 33, "Export timing specification", 6.4, INK, "600")
    _t(d, 16, 39, "The fixed logo-first end frame. Four seconds, at 25 or 30 fps.", 3.3, MUTE)
    _t(d, W - 16, 17, "1 / 1", 3.0, MUTE, anchor="end")
    _t(d, W - 16, 22, "Version 1.1", 3.0, MUTE, anchor="end")
    d.line(16, 44, W - 16, 44, RULE, 0.3)

    # --- timeline
    x0, x1 = 30.0, W - 30.0
    T = 4.0
    def X(t):
        return x0 + (x1 - x0) * t / T
    top = 56.0
    _t(d, 16, 52, "TIMELINE", 3.4, INK, "600", spacing=0.5)

    bar_h = 6.4
    for i, (name, a, b, note, col) in enumerate(PHASES):
        y = top + i * 9.4
        d.rect(X(a), y, X(b) - X(a), bar_h, col, rx=0.8)
        strong = name == "HOLD"
        _t(d, X(a) + 1.6, y + 4.4, name, 3.0 if strong else 2.7, "#FFFFFF",
           "600" if strong else "400")
        # A note that would run off the page hangs to the left of its bar.
        est = len(note) * 2.6 * 0.52
        if X(b) + 2 + est > W - 16:
            _t(d, X(a) - 2, y + 4.4, note, 2.6, MUTE, anchor="end")
        else:
            _t(d, X(b) + 2, y + 4.4, note, 2.6, MUTE)
        _t(d, 16, y + 4.4, f"{a:.2f} to {b:.2f} s", 2.5, MUTE)

    axis_y = top + len(PHASES) * 9.4 + 5
    d.line(x0, axis_y, x1, axis_y, INK, 0.4)
    t = 0.0
    while t <= T + 1e-9:
        major = abs(t * 2 - round(t * 2)) < 1e-9
        d.line(X(t), axis_y, X(t), axis_y + (2.2 if major else 1.2), INK, 0.3)
        if major:
            _t(d, X(t), axis_y + 6, f"{t:.1f}s", 2.5, MUTE, anchor="middle")
            _t(d, X(t), axis_y + 10, f"{round(t * 25)}f", 2.3, "#9BB4C2", anchor="middle")
            _t(d, X(t), axis_y + 13.6, f"{round(t * 30)}f", 2.3, "#9BB4C2", anchor="middle")
        t += 0.25
    _t(d, x0 - 3, axis_y + 10, "25 fps", 2.3, "#9BB4C2", anchor="end")
    _t(d, x0 - 3, axis_y + 13.6, "30 fps", 2.3, "#9BB4C2", anchor="end")

    # --- easing
    ey = axis_y + 20
    _t(d, 16, ey, "EASING", 3.4, INK, "600", spacing=0.5)
    _t(d, 16, ey + 5, "cubic-bezier(0.33, 0, 0.15, 1)", 2.9, GREEN)
    _t(d, 16, ey + 9.4, "on both fades. A linear fade reads", 2.7, MUTE)
    _t(d, 16, ey + 13.4, "mechanical at this length.", 2.7, MUTE)
    gx, gy, gs = 78.0, ey - 2, 34.0
    d.rect(gx, gy, gs, gs, "#F4F8FA", rx=0.8)
    for f in (0.25, 0.5, 0.75):
        d.line(gx, gy + gs * f, gx + gs, gy + gs * f, "#E0EAEF", 0.2)
        d.line(gx + gs * f, gy, gx + gs * f, gy + gs, "#E0EAEF", 0.2)
    d.raw(f'<path d="M {gx:.2f} {gy + gs:.2f} '
          f'C {gx + gs * 0.33:.2f} {gy + gs:.2f} '
          f'{gx + gs * 0.15:.2f} {gy:.2f} {gx + gs:.2f} {gy:.2f}" '
          f'fill="none" stroke="{GREEN}" stroke-width="0.6"/>')
    _t(d, gx, gy + gs + 4, "0", 2.3, MUTE)
    _t(d, gx + gs, gy + gs + 4, "t", 2.3, MUTE, anchor="end")

    # --- safe areas
    sx = 128.0
    _t(d, sx, ey, "SAFE AREA BY CROP", 3.4, INK, "600", spacing=0.5)
    for i, (name, w, h, mx, my, use) in enumerate(CROPS):
        bw = 35.0
        scale = bw / max(w, h)
        cw_, ch_ = w * scale, h * scale
        bx = sx + i * 48
        by = ey + 6 + (bw - ch_) / 2
        d.rect(bx, by, cw_, ch_, "#0A2231", rx=0.6)
        d.rect(bx + min(cw_, ch_) * mx, by + min(cw_, ch_) * my,
               cw_ - 2 * min(cw_, ch_) * mx, ch_ - 2 * min(cw_, ch_) * my,
               "none", stroke="#54E8AC", stroke_width="0.3",
               stroke_dasharray="1 0.8")
        st = L.ALL["stacked-tagline"]()
        sn = st.normalised()
        span = 0.40 if name != "9:16" else 0.62
        k = cw_ * span / sn.width
        L.emit(d, st, L.COLOURWAYS["dark"], bx + (cw_ - sn.width * k) / 2,
               by + (ch_ - sn.height * k) / 2 - ch_ * 0.015, k)
        _t(d, bx, ey + 6 + bw + 4.4, f"{name}   {w} x {h}", 2.7, INK, "500")
        _t(d, bx, ey + 6 + bw + 8.2, f"margin {mx:.0%} / {my:.0%} of the short edge",
           2.4, MUTE)
        _t(d, bx, ey + 6 + bw + 11.8, use, 2.4, "#9BB4C2")

    # --- prohibition
    py = 186.0
    d.rect(16, py, W - 32, 16, "#FFF6E8", rx=1)
    d.rect(16, py, 1.2, 16, "#C98A2E")
    _t(d, 21, py + 5.5, "The mark's own geometry does not animate", 3.4, "#6B4410", "600")
    _t(d, 21, py + 10.4, "The dot does not travel and the two c-forms do not rotate, close or interlock. An animation that closes the gap creates a", 2.7, "#6B4410")
    _t(d, 21, py + 14, "single frame that can be screenshot, and that frame is the configuration being avoided. Fade the whole lockup, or scale it uniformly 98 to 100%. Nothing else.", 2.7, "#6B4410")
    return d


# ----------------------------------------------------------------- assembly

def build_sheets(root, tmp):
    """The approved reference sheets are supplied files, not generated output."""
    raise RuntimeError(
        "Reference-sheet generation is disabled; preserve and copy the approved PDFs"
    )
