const fs = require("node:fs");
const path = require("node:path");

const repoRoot = path.resolve(__dirname, "..", "..");
const fixturePath = path.join(repoRoot, "contracts", "sp-084", "contract-fixtures.json");
const corpus = JSON.parse(fs.readFileSync(fixturePath, "utf8"));

const expectedIds = [
  "contract-version-additive",
  "contract-version-breaking",
  "timestamp-dst-boundary",
  "private-not-found",
  "cursor-context-revoked",
  "operation-retry-identical",
  "operation-reuse-different-payload",
  "offline-delete-wins",
  "event-duplicate",
  "event-gap-and-reorder",
  "worker-lease-loss",
  "multi-owner-collection"
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(corpus.fixtureSet === "sp-084-contract-fixtures-v1", "unexpected fixture-set identity");
assert(/^\d{4}-\d{2}$/.test(corpus.contractVersion), "contract version must use YYYY-MM");
assert(Number.isInteger(corpus.schemaRevision) && corpus.schemaRevision >= 1, "invalid schema revision");
assert(corpus.classification === "synthetic", "fixture data must be synthetic");
assert(JSON.stringify(corpus.consumers) === JSON.stringify(["mobile", "web", "job"]), "consumer set changed");
assert(Array.isArray(corpus.fixtures) && corpus.fixtures.length === expectedIds.length, "fixture count changed");

const ids = corpus.fixtures.map((fixture) => fixture.id);
assert(new Set(ids).size === ids.length, "fixture IDs must be unique");
assert(JSON.stringify(ids) === JSON.stringify(expectedIds), "required fixture identity/order changed");

for (const fixture of corpus.fixtures) {
  assert(fixture.concern && typeof fixture.concern === "string", `${fixture.id}: concern missing`);
  assert(fixture.input && typeof fixture.input === "object", `${fixture.id}: input missing`);
  assert(fixture.expected && typeof fixture.expected === "object", `${fixture.id}: expected result missing`);
}

const byId = Object.fromEntries(corpus.fixtures.map((fixture) => [fixture.id, fixture]));
assert(byId["private-not-found"].expected.externallyIndistinguishable === true, "private existence privacy weakened");
assert(byId["operation-retry-identical"].expected.effectCount === 1, "identical retry may duplicate effects");
assert(byId["operation-reuse-different-payload"].expected.originalIntentOverwritten === false, "operation reuse may overwrite intent");
assert(byId["offline-delete-wins"].expected.resourceRecreated === false, "offline replay may resurrect a resource");
assert(byId["event-duplicate"].expected.effectCount === 1, "duplicate delivery may duplicate effects");
assert(byId["event-gap-and-reorder"].expected.silentGapApply === false, "event gap may be silently applied");
assert(byId["worker-lease-loss"].expected.effectCount === 1, "lease loss may duplicate an effect");
assert(byId["multi-owner-collection"].expected.foreignResourceCount === 0, "foreign resource may be disclosed");
assert(byId["multi-owner-collection"].expected.foreignCountDisclosed === false, "foreign count may be disclosed");

const serialized = JSON.stringify(corpus);
assert(!/[A-Za-z]:\\|\/Users\/|\/home\//.test(serialized), "machine-specific absolute path found");
assert(!/password|api[_-]?key|bearer\s+[A-Za-z0-9]/i.test(serialized), "credential-like fixture content found");

console.log(JSON.stringify({
  status: "PASS",
  fixtureSet: corpus.fixtureSet,
  contractVersion: corpus.contractVersion,
  schemaRevision: corpus.schemaRevision,
  consumers: corpus.consumers,
  fixtures: corpus.fixtures.length
}, null, 2));
