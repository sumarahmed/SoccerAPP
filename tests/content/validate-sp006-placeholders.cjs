const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const root = path.resolve(__dirname, '..', '..');
const placeholders = JSON.parse(fs.readFileSync(path.join(root, 'contracts/content/sp006-animation-placeholders.json'),'utf8'));
if (placeholders.status !== 'superseded-by-review-assets' || placeholders.playerReleaseAllowed !== false || placeholders.countsAsAnimationAcceptanceEvidence !== false) throw new Error('superseded placeholder boundary missing');
if (placeholders.supersededBy !== 'contracts/content/sp006-animation-review-assets.json') throw new Error('replacement manifest link missing');
if (JSON.stringify(placeholders.assets.map(x=>[x.id,x.drill])) !== JSON.stringify([['A01','D01'],['A02','D06'],['A03','D04']])) throw new Error('placeholder mapping mismatch');
for (const a of placeholders.assets) {
  const f = path.join(root,a.file);
  if (!fs.existsSync(f)) throw new Error(`missing ${a.file}`);
  const svg=fs.readFileSync(f,'utf8');
  if (!svg.includes('PLACEHOLDER — ANIMATION NOT PRODUCED') || !svg.includes('Not a coaching demonstration')) throw new Error(`unsafe placeholder: ${a.id}`);
  if (a.productionStatus !== 'superseded-placeholder') throw new Error(`placeholder not superseded: ${a.id}`);
}
for (const x of ['editable-source','source-rights','animator-qa','aaron-render-review','approved-version-link']) if (!placeholders.replacementRequires.includes(x)) throw new Error(`replacement gate missing ${x}`);

const review = JSON.parse(fs.readFileSync(path.join(root, placeholders.supersededBy),'utf8'));
if (review.status !== 'provisional-owner-accepted' || review.decisionQualifier !== 'accepted-for-now') throw new Error('provisional decision missing');
if (review.playerReleaseAllowed !== false || review.countsAsAnimationSampleEvidence !== true || review.countsAsFinalSP006AcceptanceEvidence !== false) throw new Error('sample/release boundary missing');
if (review.coachRenderedReview !== 'pending' || review.sourceRightsReview !== 'pending') throw new Error('human gates must remain pending');
if (JSON.stringify(review.assets.map(x=>[x.id,x.drill])) !== JSON.stringify([['A01','D01'],['A02','D06'],['A03','D04']])) throw new Error('review asset mapping mismatch');
for (const a of review.assets) {
  if (a.ownerReview !== 'accepted-for-now') throw new Error(`owner review missing: ${a.id}`);
  for (const [fileKey, hashKey, bytesKey] of [['videoFile','videoSha256','videoBytes'],['setupStillFile','setupStillSha256','setupStillBytes']]) {
    const f=path.join(root,a[fileKey]);
    if (!fs.existsSync(f)) throw new Error(`missing ${a[fileKey]}`);
    const bytes=fs.readFileSync(f);
    if (bytes.length !== a[bytesKey]) throw new Error(`byte count mismatch: ${a[fileKey]}`);
    const hash=crypto.createHash('sha256').update(bytes).digest('hex').toUpperCase();
    if (hash !== a[hashKey]) throw new Error(`hash mismatch: ${a[fileKey]}`);
  }
}
for (const x of ['editable-source-delivery','commercial-source-rights-review','animator-qa','aaron-render-review','final-approved-version-links']) if (!review.remainingGates.includes(x)) throw new Error(`remaining gate missing ${x}`);
console.log('PASS: SP-006 A01–A03 review assets are byte-verified and provisionally accepted without claiming final coach or player-release approval.');
