import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const assetDir = dirname(fileURLToPath(import.meta.url));
const manifestName = 'asset-manifest.json';
const includedExtensions = new Set(['.svg', '.png', '.json', '.md', '.mjs', '.ps1']);

const files = readdirSync(assetDir)
  .filter((name) => name !== manifestName)
  .filter((name) => includedExtensions.has(name.slice(name.lastIndexOf('.')).toLowerCase()))
  .sort()
  .map((name) => {
    const path = join(assetDir, name);
    const bytes = readFileSync(path);
    return {
      path: name,
      bytes: statSync(path).size,
      sha256: createHash('sha256').update(bytes).digest('hex').toUpperCase(),
      role: name === 'build-assets.mjs' ? 'canonical-editable-geometry-source'
        : name.endsWith('.svg') ? 'editable-vector-or-vector-derivative'
        : name.endsWith('.png') ? 'raster-derivative'
        : name.endsWith('.md') ? 'specification-or-evidence'
        : name.endsWith('.ps1') || name.endsWith('.mjs') ? 'reproduction-tool'
        : 'configuration',
    };
  });

const manifest = {
  schemaVersion: 1,
  assetSet: 'working-soccolo-e-v0.3',
  status: 'provisional-review',
  created: '2026-09-14',
  canonicalSource: 'build-assets.mjs',
  creatorRecord: 'PROVENANCE.md',
  usageRules: 'USAGE.md',
  similarityReview: 'SIMILARITY-REVIEW.md',
  finalFounderApproval: null,
  files,
};

writeFileSync(join(assetDir, manifestName), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
console.log(`Wrote ${manifestName} with ${files.length} SHA-256 records`);
