# Soccolo identity usage specification — Concept E v0.3

## Identity and status

- Working name: `Soccolo`.
- Working theme: `Train, Play, Grow`.
- Brand ID: `working-soccolo-e-v0.3`.
- Status: provisional review candidate; changeable through the canonical brand manifest.
- Stable repository, package, application, database and infrastructure identifiers remain independent of this public-facing identity.

## Construction

The wordmark and symbol are repository geometry built from paths and circles. Under the founder's v0.3 direction, both middle `c` forms open toward the right in reading direction, the `o`–`c` joins intentionally overlap, and the shared touch point is enlarged. The complete double-touch unit uses one accent colour: deep green on light surfaces and mint on dark surfaces.

No font is used in the SVG wordmark or tagline. The review-board explanatory labels use local Arial for presentation only and are not part of any logo asset.

## Colour variants

| Use | Background | Main form | Double-touch accent | Measured contrast |
|---|---|---|---|---:|
| Primary light | `#FFFFFF` or `#F5F8FA` | Navy `#0B1D2A` | Deep green `#087A55` | Navy/white 17.17:1; green/white 5.35:1; green/light surface 5.02:1 |
| Primary dark | Navy `#0B1D2A` | White `#FFFFFF` | Mint `#59EFB5` | White/navy 17.17:1; mint/navy 11.80:1 |
| Monochrome dark ink | Transparent/light | Black `#000000` | Black `#000000` | Background-dependent |
| Monochrome reverse | Transparent/dark | White `#FFFFFF` | White `#FFFFFF` | Background-dependent |

The measurements use WCAG relative-luminance arithmetic. Logos are not ordinary body text, but the high-contrast pairings improve recognition and should be preserved. Do not place the mint form on white as the primary light treatment.

## Clear space and size

- Symbol clear space: at least the diameter of its centre touch point on every side.
- Horizontal lockup clear space: at least one wordmark stroke width on every side.
- Stacked lockup clear space: at least twice the wordmark stroke width above and below.
- Wordmark without tagline: minimum rendered width 120 px.
- Horizontal lockup with tagline: minimum rendered width 260 px.
- Standalone symbol: minimum 24 px for the full touch-point detail.
- At 16 px, use the supplied app/favicon raster proof; do not add the tagline.
- App/adaptive-icon geometry must stay inside the supplied safe area. Platform masks are applied by the operating system; do not bake a rounded-corner mask into the 1024 px source.

## Approved candidate compositions

- Horizontal: symbol, wordmark and optional theme.
- Stacked: symbol above wordmark and theme.
- Symbol-only: app icon, favicon, avatar or space-constrained control, subject to the collision warning in `SIMILARITY-REVIEW.md`.
- Export intro: fixed navy background with the reversed horizontal lockup; timing remains unapproved until SP-080.

## Do not

- auto-trace, stretch, rotate, skew or rearrange the geometry;
- use gradients, glow, drop shadow, bevel, outline effects or photographic fills;
- recolour individual letters outside the supplied variants;
- place mint directly on white in the primary identity;
- add a football, shield, mascot, crown, star, swoosh, trophy or other stock sports device;
- add `™` or `®` without an approved legal/registration basis;
- hard-code `Soccolo` or `Train, Play, Grow` outside the canonical brand manifest, migrations or historical evidence; or
- represent v0.3 as a cleared, registered or approved launch asset.

## Accessibility and metadata

- When the adjacent page text already says Soccolo, use empty alternative text for a decorative logo image.
- When the logo is the only brand identification, use `alt="Soccolo"`.
- The tagline should appear in alternative text only when it carries information not otherwise present.
- Inline SVGs retain their supplied `<title>` and `<desc>` elements; unique IDs are required if multiple copies are injected into one document.
