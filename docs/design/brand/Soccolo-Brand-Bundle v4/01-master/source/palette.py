"""Soccolo colour system: re-derived, with WCAG contrast validation."""


def srgb_to_lin(c):
    c = c / 255.0
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4


def luminance(hexs):
    h = hexs.lstrip("#")
    r, g, b = (int(h[i:i + 2], 16) for i in (0, 2, 4))
    return 0.2126 * srgb_to_lin(r) + 0.7152 * srgb_to_lin(g) + 0.0722 * srgb_to_lin(b)


def contrast(a, b):
    la, lb = luminance(a), luminance(b)
    hi, lo = max(la, lb), min(la, lb)
    return (hi + 0.05) / (lo + 0.05)


# --- Ink: the navy ground. Hue held at ~203 deg, chroma falling as it lightens,
#     so tints stay in family instead of drifting grey-blue.
INK = {
    "ink-900": "#04141D",   # deepest ground, print-safe rich black substitute
    "ink-800": "#0A2231",   # PRIMARY BRAND NAVY
    "ink-700": "#123449",
    "ink-600": "#1E4A63",
    "ink-400": "#4E7E96",
    "ink-200": "#AFC6D2",
    "ink-100": "#DCE7ED",
    "paper":   "#F4F8FA",   # light ground (not pure white; less glare in app UI)
    "white":   "#FFFFFF",
}

# --- Pitch: the green. Two jobs, two values. The mint carries the mark on dark
#     grounds; the deep green carries it on light grounds, where mint fails.
PITCH = {
    "pitch-900": "#06301F",
    "pitch-700": "#0A5537",   # DEEP GREEN: accent on light grounds
    "pitch-600": "#0C6B45",
    "pitch-500": "#12A26C",
    "pitch-400": "#2ACE8C",
    "pitch-300": "#54E8AC",   # MINT: accent on dark grounds
    "pitch-200": "#8DF3C9",
    "pitch-100": "#CDFAE6",
}

TOKENS = {**INK, **PITCH}

SEMANTIC = {
    "brand.ground.dark":   "ink-800",
    "brand.ground.light":  "paper",
    "brand.mark.onDark":   "white",
    "brand.mark.onLight":  "ink-800",
    "brand.accent.onDark": "pitch-300",
    "brand.accent.onLight": "pitch-700",
    "brand.mono.black":    "#000000",
    "brand.mono.white":    "#FFFFFF",
}

# Pairs that must hold for the identity to be usable. Minimums are the WCAG 2.2
# non-text contrast floor (3.0) for the mark itself, and 4.5 where the pair also
# carries the tagline, which is small text.
REQUIRED = [
    ("pitch-300", "ink-800",  4.5, "mint accent on brand navy"),
    ("pitch-300", "ink-900",  4.5, "mint accent on deepest navy"),
    ("white",     "ink-800",  7.0, "reversed wordmark on brand navy"),
    ("ink-100",   "ink-800",  7.0, "tagline reversed on brand navy"),
    ("pitch-700", "paper",    4.5, "deep green accent on light ground"),
    ("pitch-700", "white",    4.5, "deep green accent on pure white"),
    ("ink-800",   "paper",    7.0, "wordmark on light ground"),
    ("ink-600",   "paper",    4.5, "tagline on light ground"),
    ("ink-800",   "pitch-300", 4.5, "navy mark on mint ground"),
]


def resolve(name):
    return TOKENS.get(name, name)


def audit():
    rows, ok = [], True
    for fg, bg, floor, label in REQUIRED:
        ratio = contrast(resolve(fg), resolve(bg))
        passed = ratio >= floor
        ok = ok and passed
        rows.append((label, fg, bg, ratio, floor, passed))
    return rows, ok


if __name__ == "__main__":
    rows, ok = audit()
    w = max(len(r[0]) for r in rows)
    for label, fg, bg, ratio, floor, passed in rows:
        print(f"{label:<{w}}  {fg:>10} on {bg:<10} {ratio:5.2f}:1  "
              f"min {floor:.1f}  {'PASS' if passed else 'FAIL'}")
    print("\nALL PASS" if ok else "\nFAILURES PRESENT")
