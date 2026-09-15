const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..', '..');
const c = JSON.parse(fs.readFileSync(path.join(root, 'contracts/content/sp006-animation-placeholders.json'),'utf8'));
if (c.status !== 'design-placeholder-only' || c.playerReleaseAllowed !== false || c.countsAsAnimationAcceptanceEvidence !== false) throw new Error('placeholder boundary missing');
if (JSON.stringify(c.assets.map(x=>[x.id,x.drill])) !== JSON.stringify([['A01','D01'],['A02','D06'],['A03','D04']])) throw new Error('placeholder mapping mismatch');
for (const a of c.assets) {
  const f = path.join(root,a.file);
  if (!fs.existsSync(f)) throw new Error(`missing ${a.file}`);
  const svg=fs.readFileSync(f,'utf8');
  if (!svg.includes('PLACEHOLDER — ANIMATION NOT PRODUCED') || !svg.includes('Not a coaching demonstration')) throw new Error(`unsafe placeholder: ${a.id}`);
}
for (const x of ['editable-source','source-rights','animator-qa','aaron-render-review','approved-version-link']) if (!c.replacementRequires.includes(x)) throw new Error(`replacement gate missing ${x}`);
console.log('PASS: SP-006 A01–A03 design placeholders are present and cannot be mistaken for accepted animation evidence.');
