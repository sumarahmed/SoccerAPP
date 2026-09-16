const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const siteDir = path.join(root, 'site', 'activity-map');
const templatePath = path.join(siteDir, 'template.html');
const outputDir = path.join(siteDir, 'dist');
const activityManifestPath = path.join(root, 'packages', 'soccer_agent_activity_package_20260908', 'docs', 'soccer_agent_activity_manifest.json');
const sourceManifestPath = path.join(root, 'packages', 'soccer_agent_activity_package_20260908', 'docs', 'soccer_linear_manifest.json');
const decisionsDir = path.join(root, 'docs', 'decisions');
const activityDecisionsDir = path.join(root, 'docs', 'activity-decisions');
const sp009ExceptionPath = path.join(root, 'docs', 'security', 'ACT-SP-009-02-owner-risk-exception.md');
const sp012RoutePath = path.join(root, 'docs', 'operations', 'SP-012-windows-android-ios-development-route.md');

const readJson = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const activityManifest = readJson(activityManifestPath);
const sourceManifest = readJson(sourceManifestPath);

const activities = activityManifest.activities.map(activity => ({
  id: activity.id,
  source: activity.source_issue,
  title: activity.title,
  goal: activity.goal,
  phase: activity.phase,
  gate: activity.gate,
  kind: activity.kind,
  execution: activity.execution,
  dependencies: activity.dependencies,
  deliverables: activity.deliverables
}));

const byId = new Map(activities.map(activity => [activity.id, activity]));
const topologicalOrder = activityManifest.topological_order;
if (topologicalOrder.length !== activities.length || topologicalOrder.some(id => !byId.has(id))) {
  throw new Error('Activity manifest topological order is incomplete');
}

const successors = Object.fromEntries(activities.map(activity => [activity.id, []]));
for (const activity of activities) {
  for (const dependency of activity.dependencies) {
    if (!byId.has(dependency)) throw new Error(`Unknown dependency ${dependency} for ${activity.id}`);
    successors[dependency].push(activity.id);
  }
}

const distance = new Map();
const previous = new Map();
for (const id of topologicalOrder) {
  const activity = byId.get(id);
  let bestDistance = 1;
  let bestPredecessor = null;
  for (const dependency of activity.dependencies) {
    const candidate = distance.get(dependency) + 1;
    if (candidate > bestDistance) {
      bestDistance = candidate;
      bestPredecessor = dependency;
    }
  }
  distance.set(id, bestDistance);
  previous.set(id, bestPredecessor);
}

let longestEnd = topologicalOrder[0];
for (const id of topologicalOrder) {
  if (distance.get(id) > distance.get(longestEnd)) longestEnd = id;
}
const longestChain = [];
for (let id = longestEnd; id; id = previous.get(id)) longestChain.push(id);
longestChain.reverse();

const phases = Object.fromEntries(sourceManifest.phases.map(phase => [phase.id, [phase.name, phase.outcome]]));
const phaseCounts = Object.fromEntries(Object.keys(phases).map(phase => [phase, activities.filter(activity => activity.phase === phase).length]));

function tableValue(markdown, field) {
  const escaped = field.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return markdown.match(new RegExp(`^\\|\\s*${escaped}\\s*\\|\\s*(.*?)\\s*\\|\\s*$`, 'mi'))?.[1].trim() || null;
}

const acceptedDecisions = [];
if (fs.existsSync(decisionsDir)) {
  for (const name of fs.readdirSync(decisionsDir).filter(name => name.endsWith('.md')).sort()) {
    const absolutePath = path.join(decisionsDir, name);
    const markdown = fs.readFileSync(absolutePath, 'utf8');
    const outcome = tableValue(markdown, 'Outcome');
    if (!outcome || outcome.toLowerCase() !== 'accepted') continue;
    const source = tableValue(markdown, 'Source issue');
    const version = tableValue(markdown, 'Decision version');
    const date = tableValue(markdown, 'Decision date');
    const acceptance = tableValue(markdown, 'Acceptance criterion');
    const accountable = tableValue(markdown, 'Accountable person');
    const title = markdown.match(/^#\s+(.+)$/m)?.[1].trim() || name;
    if (!source || !version || !date || !acceptance || !accountable) {
      throw new Error(`Accepted decision ${name} is missing required metadata`);
    }
    if (!activities.some(activity => activity.source === source)) {
      throw new Error(`Accepted decision ${name} references unknown source issue ${source}`);
    }
    const relativePath = path.relative(root, absolutePath).split(path.sep).join('/');
    acceptedDecisions.push({
      source,
      version,
      date,
      acceptance,
      accountable,
      title,
      relativePath,
      evidenceUrl: `https://github.com/sumarahmed/SoccerAPP/blob/main/${relativePath}`
    });
  }
}
acceptedDecisions.sort((a, b) => Date.parse(b.date) - Date.parse(a.date) || a.source.localeCompare(b.source));

const activityDecisions = [];
if (fs.existsSync(activityDecisionsDir)) {
  for (const name of fs.readdirSync(activityDecisionsDir).filter(name => name.endsWith('.md')).sort()) {
    const absolutePath = path.join(activityDecisionsDir, name);
    const markdown = fs.readFileSync(absolutePath, 'utf8');
    const outcome = tableValue(markdown, 'Outcome');
    if (!outcome || outcome.toLowerCase() !== 'accepted') continue;
    const activity = tableValue(markdown, 'Activity');
    const version = tableValue(markdown, 'Decision version');
    const date = tableValue(markdown, 'Decision date');
    const accountable = tableValue(markdown, 'Accountable person');
    const title = markdown.match(/^#\s+(.+)$/m)?.[1].trim() || name;
    if (!activity || !version || !date || !accountable) {
      throw new Error(`Accepted activity decision ${name} is missing required metadata`);
    }
    if (!byId.has(activity)) {
      throw new Error(`Accepted activity decision ${name} references unknown activity ${activity}`);
    }
    const relativePath = path.relative(root, absolutePath).split(path.sep).join('/');
    activityDecisions.push({
      activity,
      version,
      date,
      accountable,
      title,
      relativePath,
      evidenceUrl: `https://github.com/sumarahmed/SoccerAPP/blob/main/${relativePath}`
    });
  }
}
activityDecisions.sort((a, b) => Date.parse(b.date) - Date.parse(a.date) || a.activity.localeCompare(b.activity));

const statusOverrides = {};
for (const decision of acceptedDecisions) {
  const related = activities.filter(activity => activity.source === decision.source);
  const finalHuman = [...related].reverse().find(activity => activity.execution === 'Human') || related.at(-1);
  for (const activity of related) {
    const accepted = activity.id === finalHuman.id;
    statusOverrides[activity.id] = {
      status: accepted ? 'Accepted' : 'Completed',
      statusDate: decision.date,
      evidenceLabel: accepted ? `Accepted ${decision.acceptance}` : `${decision.source} decision v${decision.version}`,
      evidenceUrl: decision.evidenceUrl
    };
  }
}
for (const decision of activityDecisions) {
  statusOverrides[decision.activity] = {
    status: 'Accepted',
    statusDate: decision.date,
    evidenceLabel: `${decision.activity} decision v${decision.version}`,
    evidenceUrl: decision.evidenceUrl
  };
}

// An owner risk exception is visible evidence, not an accepted activity.
if (fs.existsSync(sp009ExceptionPath)) {
  const exception = fs.readFileSync(sp009ExceptionPath, 'utf8');
  if (!exception.includes('`ACT-SP-009-02` and `SP-009` remain open')) {
    throw new Error('SP-009 owner exception must preserve the open review status');
  }
  const relativePath = path.relative(root, sp009ExceptionPath).split(path.sep).join('/');
  statusOverrides['ACT-SP-009-02'] = {
    statusLabel: 'Open · risk exception',
    exceptionLabel: 'Owner exception recorded; H1/H2/H3/L1 and specialist review remain unresolved',
    evidenceLabel: 'Read SP-009 owner risk exception (not acceptance)',
    evidenceUrl: `https://github.com/sumarahmed/SoccerAPP/blob/main/${relativePath}`
  };
}
if (fs.existsSync(sp012RoutePath)) {
  const route = fs.readFileSync(sp012RoutePath, 'utf8');
  if (!route.includes('`ACT-SP-012-03` and `SP-012` remain **open**')) {
    throw new Error('SP-012 interim route must preserve the open family status');
  }
  const relativePath = path.relative(root, sp012RoutePath).split(path.sep).join('/');
  statusOverrides['ACT-SP-012-03'] = {
    statusLabel: 'Open · interim route',
    exceptionLabel: 'Windows/Android development route accepted; SP-012 and iOS verification remain open',
    evidenceLabel: 'Read SP-012 interim platform route (not family acceptance)',
    evidenceUrl: `https://github.com/sumarahmed/SoccerAPP/blob/main/${relativePath}`
  };
}

const data = {
  activities,
  topologicalOrder,
  longestChain,
  successors,
  phases,
  phaseCounts,
  edgeCount: activities.reduce((total, activity) => total + activity.dependencies.length, 0),
  rootCount: activities.filter(activity => activity.dependencies.length === 0).length,
  acceptedDecisions,
  activityDecisions
};

const template = fs.readFileSync(templatePath, 'utf8');
if ((template.match(/__ACTIVITY_DATA__/g) || []).length !== 1 || (template.match(/__STATUS_OVERRIDES__/g) || []).length !== 1) {
  throw new Error('Activity map template must contain each data placeholder exactly once');
}
const output = template
  .replace('__ACTIVITY_DATA__', JSON.stringify(data))
  .replace('__STATUS_OVERRIDES__', JSON.stringify(statusOverrides));

fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'index.html'), output);
fs.writeFileSync(path.join(outputDir, '.nojekyll'), '');
console.log(`Built activity map: ${activities.length} activities, ${data.edgeCount} dependencies, ${acceptedDecisions.length} accepted source decisions and ${activityDecisions.length} accepted activity decisions.`);
