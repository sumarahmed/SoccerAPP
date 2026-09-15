const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..', '..');
const tokens = JSON.parse(fs.readFileSync(path.join(root, 'docs/design/brand/Soccolo-Brand-Bundle v4/05-specification/colour-tokens.json'), 'utf8'));
const states = JSON.parse(fs.readFileSync(path.join(root, 'contracts/design/sp007-sp038-screen-states.json'), 'utf8'));
const html = fs.readFileSync(path.join(root, 'docs/design/prototypes/soccolo-screen-review.html'), 'utf8');
const rgb = h => [1,3,5].map(i => parseInt(h.slice(i,i+2),16)/255);
const lum = h => rgb(h).map(v => v <= .04045 ? v/12.92 : ((v+.055)/1.055)**2.4).reduce((s,v,i)=>s+v*[.2126,.7152,.0722][i],0);
const ratio = (a,b) => (Math.max(lum(a),lum(b))+.05)/(Math.min(lum(a),lum(b))+.05);
const colour = Object.fromEntries(Object.entries(tokens.colour).map(([k,v])=>[k,v.value]));
if (!tokens.contrastAuditPasses || tokens.contrastAudit.length < 9) throw new Error('brand contrast audit missing');
for (const a of tokens.contrastAudit) {
  const measured = ratio(colour[a.foreground], colour[a.background]);
  if (measured + .02 < a.minimum || Math.abs(measured-a.ratio) > .05) throw new Error(`contrast mismatch: ${a.pair}`);
}
if (states.frames.length !== 33) throw new Error('F01-F33 required');
if (!states.frames.find(f=>f.id==='F26').states.includes('follow_device_default')) throw new Error('Follow device default missing');
for (const state of ['goals_off_default','rest','missed_week','opt_out','supportive_return','milestone_preserved']) if (!states.frames.find(f=>f.id==='F13').states.includes(state)) throw new Error(`SP-155 state missing: ${state}`);
if (!html.includes("themeMode = 'follow'")) throw new Error('prototype does not default to Follow device');
for (const id of ['F07','F14','F23','F24','F27','F30']) if (!states.frames.some(f=>f.id===id)) throw new Error(`${id} missing`);
console.log('PASS: SP-077 paired theme contract; 9 contrast pairs and F01-F33 verified.');
