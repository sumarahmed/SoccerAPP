import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outputDir = dirname(fileURLToPath(import.meta.url));
mkdirSync(outputDir, { recursive: true });

const colours = {
  navy: '#0B1D2A',
  mint: '#59EFB5',
  green: '#087A55',
  white: '#FFFFFF',
  black: '#000000',
  surfaceLight: '#F5F8FA',
};

const xml = (width, height, title, description, body, extra = '') => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc" ${extra}>
  <title id="title">${title}</title>
  <desc id="desc">${description}</desc>
  <metadata>Soccolo Concept E controlled refinement v0.2; generated from repository source geometry on 2026-09-14; no stock icon, traced image or third-party wordmark font.</metadata>
${body}
</svg>
`;

function symbol(primary, accent, dot = primary) {
  return `<g fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M88 27 C72 11 40 13 24 35 C7 58 19 91 48 99 C65 104 82 98 93 84" stroke="${accent}" stroke-width="18"/>
    <circle cx="110" cy="58" r="8.5" fill="${accent}" stroke="none"/>
    <path d="M88 27 C72 11 40 13 24 35 C7 58 19 91 48 99 C65 104 82 98 93 84" transform="translate(220 0) scale(-1 1)" stroke="${accent}" stroke-width="18"/>
  </g>`;
}

function wordmark(primary, accent, dot = primary) {
  return `<g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="18">
    <path d="M76 29 C65 14 32 14 19 30 C8 44 19 55 44 58 C68 61 79 70 71 85 C62 102 29 103 14 86" stroke="${primary}"/>
    <circle cx="119" cy="59" r="31" stroke="${primary}"/>
    <path d="M218 35 C204 20 180 21 166 37 C152 53 157 80 174 91 C189 100 207 96 219 82" stroke="${accent}"/>
    <circle cx="235" cy="58" r="6.5" fill="${accent}" stroke="none"/>
    <path d="M218 35 C204 20 180 21 166 37 C152 53 157 80 174 91 C189 100 207 96 219 82" transform="translate(470 0) scale(-1 1)" stroke="${accent}"/>
    <circle cx="365" cy="59" r="31" stroke="${primary}"/>
    <path d="M421 17 L421 79 C421 94 433 100 447 89" stroke="${primary}"/>
    <circle cx="496" cy="59" r="31" stroke="${primary}"/>
  </g>`;
}

const glyphs = {
  A: ['M0 16 L6 0 L12 16 M3 10 H9', 14],
  G: ['M12 3 C9 -1 2 0 1 8 C0 16 8 19 13 14 V10 H8', 15],
  I: ['M2 0 V16', 6],
  L: ['M1 0 V16 H12', 14],
  N: ['M1 16 V0 L12 16 V0', 15],
  O: ['M7 0 C1 0 0 4 0 8 C0 13 2 16 7 16 C12 16 14 13 14 8 C14 3 12 0 7 0 Z', 17],
  P: ['M1 16 V0 H7 C14 0 14 9 7 9 H1', 15],
  R: ['M1 16 V0 H7 C14 0 14 9 7 9 H1 M7 9 L14 16', 17],
  T: ['M0 0 H14 M7 0 V16', 16],
  W: ['M0 0 L3 16 L8 6 L13 16 L16 0', 19],
  Y: ['M0 0 L7 8 L14 0 M7 8 V16', 16],
  ',': ['M3 14 L1 19', 7],
  ' ': ['', 8],
};

function vectorText(value, colour, x, y, scale = 1) {
  let cursor = 0;
  const marks = [];
  for (const character of value) {
    const key = character.toUpperCase();
    const [path, width] = glyphs[key] ?? ['', 10];
    const isLower = character >= 'a' && character <= 'z';
    const glyphScale = isLower ? 0.76 : 1;
    const yOffset = isLower ? 3.8 : 0;
    if (path) {
      marks.push(`<g transform="translate(${cursor.toFixed(2)} ${yOffset}) scale(${glyphScale})"><path d="${path}"/></g>`);
    }
    cursor += width * glyphScale + 3.6;
  }
  return `<g transform="translate(${x} ${y}) scale(${scale})" fill="none" stroke="${colour}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${marks.join('')}</g>`;
}

function horizontalLockup(background, primary, accent, dot, includeBackground = true) {
  const backgroundRect = includeBackground ? `<rect width="900" height="200" fill="${background}"/>` : '';
  return `${backgroundRect}
  <g transform="translate(34 50) scale(.78)">${symbol(primary, accent, dot)}</g>
  <g transform="translate(232 35)">${wordmark(primary, accent, dot)}</g>
  ${vectorText('Train, Play, Grow', primary, 236, 146, 1.15)}`;
}

function stackedLockup(background, primary, accent, dot, includeBackground = true) {
  const backgroundRect = includeBackground ? `<rect width="560" height="420" fill="${background}"/>` : '';
  return `${backgroundRect}
  <g transform="translate(92 44) scale(1.7)">${symbol(primary, accent, dot)}</g>
  <g transform="translate(7 244)">${wordmark(primary, accent, dot)}</g>
  ${vectorText('Train, Play, Grow', primary, 135, 365, 1.15)}`;
}

const outputs = new Map([
  ['soccolo-symbol-primary.svg', xml(220, 120, 'Soccolo inward double-touch symbol', 'Two custom inward-facing C-shaped training touches and one contact point in green.', symbol(colours.navy, colours.green))],
  ['soccolo-symbol-reversed.svg', xml(220, 120, 'Soccolo inward double-touch reversed symbol', 'Two custom inward-facing C-shaped training touches and one contact point in mint.', symbol(colours.white, colours.mint, colours.white))],
  ['soccolo-wordmark-primary.svg', xml(540, 120, 'Soccolo custom wordmark', 'Custom geometric Soccolo wordmark with the selected inward-facing double-c touch construction.', wordmark(colours.navy, colours.green))],
  ['soccolo-wordmark-reversed.svg', xml(540, 120, 'Soccolo reversed custom wordmark', 'Custom geometric Soccolo wordmark in white and mint with the selected inward-facing double-c construction.', wordmark(colours.white, colours.mint, colours.white))],
  ['soccolo-lockup-horizontal-light.svg', xml(900, 200, 'Soccolo horizontal light lockup', 'Soccolo double-touch symbol, wordmark and Train, Play, Grow tagline on a light surface.', horizontalLockup(colours.white, colours.navy, colours.green, colours.navy))],
  ['soccolo-lockup-horizontal-dark.svg', xml(900, 200, 'Soccolo horizontal dark lockup', 'Soccolo double-touch symbol, wordmark and Train, Play, Grow tagline on a navy surface.', horizontalLockup(colours.navy, colours.white, colours.mint, colours.white))],
  ['soccolo-lockup-stacked-light.svg', xml(560, 420, 'Soccolo stacked light lockup', 'Stacked Soccolo double-touch symbol, wordmark and Train, Play, Grow tagline on white.', stackedLockup(colours.white, colours.navy, colours.green, colours.navy))],
  ['soccolo-lockup-stacked-dark.svg', xml(560, 420, 'Soccolo stacked dark lockup', 'Stacked Soccolo double-touch symbol, wordmark and Train, Play, Grow tagline on navy.', stackedLockup(colours.navy, colours.white, colours.mint, colours.white))],
  ['soccolo-lockup-monochrome-black.svg', xml(900, 200, 'Soccolo monochrome black lockup', 'Single-colour black Soccolo lockup on a transparent background.', horizontalLockup('none', colours.black, colours.black, colours.black, false))],
  ['soccolo-lockup-monochrome-white.svg', xml(900, 200, 'Soccolo monochrome white lockup', 'Single-colour white Soccolo lockup on a transparent background.', horizontalLockup('none', colours.white, colours.white, colours.white, false))],
  ['soccolo-app-icon-1024.svg', xml(1024, 1024, 'Soccolo app icon', 'Full-bleed navy square with the mint inward-facing double-touch symbol in the central safe area.', `<rect width="1024" height="1024" fill="${colours.navy}"/><g transform="translate(103 287) scale(3.72)">${symbol(colours.white, colours.mint, colours.white)}</g>`)],
  ['soccolo-android-adaptive-foreground.svg', xml(432, 432, 'Soccolo Android adaptive foreground', 'Transparent adaptive-icon foreground with the mint inward-facing double-touch symbol inside the 66 by 66 percent safe zone.', `<g transform="translate(62 134) scale(1.4)">${symbol(colours.white, colours.mint, colours.white)}</g>`)],
  ['soccolo-android-adaptive-background.svg', xml(432, 432, 'Soccolo Android adaptive background', 'Solid navy background layer for the Soccolo adaptive app icon.', `<rect width="432" height="432" fill="${colours.navy}"/>`)],
  ['soccolo-favicon.svg', xml(220, 120, 'Soccolo favicon source', 'Transparent two-colour Soccolo double-touch symbol source for favicon rasterization.', symbol(colours.navy, colours.green))],
  ['soccolo-export-intro-frame-16x9.svg', xml(1920, 1080, 'Soccolo export intro frame', 'Provisional fixed navy 16 by 9 export frame with centred Soccolo lockup.', `<rect width="1920" height="1080" fill="${colours.navy}"/><g transform="translate(510 440)">${horizontalLockup('none', colours.white, colours.mint, colours.white, false)}</g>`)],
]);

const reviewBoard = xml(1600, 1040, 'Soccolo Concept E v0.2 asset review board', 'Review board showing the reference-aligned inward-facing double-c wordmark, symbol, light, dark, monochrome, app icon and small-size treatments.', `<rect width="1600" height="1040" fill="${colours.surfaceLight}"/>
  <text x="70" y="72" fill="${colours.navy}" font-family="Arial, sans-serif" font-size="34" font-weight="700">SOCCOLO — CONCEPT E REFERENCE-ALIGNED REFINEMENT v0.2</text>
  <text x="70" y="110" fill="${colours.navy}" font-family="Arial, sans-serif" font-size="20">Custom geometry · no stock icon · no wordmark font · review candidate, not launch approval</text>
  <rect x="60" y="145" width="930" height="230" rx="24" fill="${colours.white}"/><g transform="translate(75 160)">${horizontalLockup('none', colours.navy, colours.green, colours.navy, false)}</g>
  <rect x="1020" y="145" width="520" height="230" rx="24" fill="${colours.navy}"/><g transform="translate(1110 174) scale(1.55)">${symbol(colours.white, colours.mint, colours.white)}</g>
  <rect x="60" y="405" width="930" height="230" rx="24" fill="${colours.navy}"/><g transform="translate(75 420)">${horizontalLockup('none', colours.white, colours.mint, colours.white, false)}</g>
  <rect x="1020" y="405" width="250" height="250" fill="${colours.navy}"/><g transform="translate(1038 466) scale(1)">${symbol(colours.white, colours.mint, colours.white)}</g>
  <rect x="1290" y="405" width="250" height="250" fill="${colours.white}"/><g transform="translate(1308 466) scale(1)">${symbol(colours.navy, colours.green, colours.navy)}</g>
  <rect x="60" y="685" width="720" height="170" rx="24" fill="${colours.white}"/><g transform="translate(95 710) scale(.7)">${horizontalLockup('none', colours.black, colours.black, colours.black, false)}</g>
  <rect x="820" y="685" width="720" height="170" rx="24" fill="${colours.navy}"/><g transform="translate(855 710) scale(.7)">${horizontalLockup('none', colours.white, colours.white, colours.white, false)}</g>
  <text x="70" y="920" fill="${colours.navy}" font-family="Arial, sans-serif" font-size="22" font-weight="700">SMALL-SIZE APP ICON PROOF</text>
  ${[16, 24, 32, 48, 64].map((size, index) => `<g transform="translate(${75 + index * 130} 948)"><rect width="${size}" height="${size}" fill="${colours.navy}"/><g transform="scale(${size / 1024})"><rect width="1024" height="1024" fill="${colours.navy}"/><g transform="translate(103 287) scale(3.72)">${symbol(colours.white, colours.mint, colours.white)}</g></g><text x="${size + 10}" y="${Math.max(15, size / 2 + 6)}" fill="${colours.navy}" font-family="Arial, sans-serif" font-size="15">${size}px</text></g>`).join('')}
  <text x="910" y="976" fill="${colours.navy}" font-family="Arial, sans-serif" font-size="18">Founder-selected direction: Double Touch Wordmark</text>
  <text x="910" y="1006" fill="${colours.navy}" font-family="Arial, sans-serif" font-size="18">Working identity: Soccolo · Train, Play, Grow</text>`);
outputs.set('soccolo-review-board.svg', reviewBoard);

for (const [name, contents] of outputs) {
  writeFileSync(join(outputDir, name), contents, 'utf8');
}

writeFileSync(join(outputDir, 'brand-tokens.json'), `${JSON.stringify({
  schemaVersion: 1,
  brandId: 'working-soccolo-e-v0.2',
  status: 'provisional-review',
  displayName: 'Soccolo',
  tagline: 'Train, Play, Grow',
  colours,
  logo: {
    lightPrimary: 'soccolo-lockup-horizontal-light.svg',
    darkPrimary: 'soccolo-lockup-horizontal-dark.svg',
    symbolLight: 'soccolo-symbol-primary.svg',
    symbolDark: 'soccolo-symbol-reversed.svg',
    appIconSource: 'soccolo-app-icon-1024.svg',
    exportIntroFrame: 'soccolo-export-intro-frame-16x9.svg',
  },
  technicalIdentifiersRemainIndependent: true,
}, null, 2)}\n`, 'utf8');

console.log(`Generated ${outputs.size + 1} source assets in ${outputDir}`);
