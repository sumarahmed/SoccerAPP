const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const {spawnSync}=require('node:child_process');
const root=path.resolve(__dirname,'..');
const generated=spawnSync(process.execPath,[path.join(__dirname,'build-foundation-docs.cjs'),'--check'],{cwd:root,encoding:'utf8'});
process.stdout.write(generated.stdout||'');process.stderr.write(generated.stderr||'');
if(generated.status!==0)process.exit(generated.status||1);
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const plan=read('docs/foundation/foundation_milestones.json');
const catalog=read('docs/foundation/foundation_test_catalog.json');
const source=read(plan.source_manifest);
const sourceTasks=new Map(source.tasks.map(t=>[t.id,t]));
const milestoneMap=new Map(plan.milestones.map(m=>[m.id,m]));
const work=plan.milestones.flatMap(m=>m.work);
const workMap=new Map(work.map(w=>[w.id,w]));
const testMap=new Map(catalog.cases.map(c=>[c.id,c]));
assert.equal(milestoneMap.size,11);assert.equal(workMap.size,33);assert.equal(testMap.size,36);
assert.equal(plan.implementation_authorized,false);
assert.deepEqual(plan.source_counts,{tasks:165,activities:390,acceptance_criteria:613});
assert.equal(source.tasks.length,165);
function dag(map,edges){
  const visiting=new Set(),visited=new Set();
  function visit(id){assert(map.has(id),'Missing graph ID '+id);assert(!visiting.has(id),'Cycle at '+id);if(visited.has(id))return;visiting.add(id);for(const dep of edges(map.get(id)))visit(dep);visiting.delete(id);visited.add(id);}
  for(const id of map.keys())visit(id);
}
dag(milestoneMap,m=>m.depends);dag(workMap,w=>w.depends_on);
const referencedTests=new Set();
for(const m of plan.milestones){
  assert(m.goal&&m.owner&&m.reviewer&&m.paths.length&&m.inputs.length&&m.exit.length);
  assert.equal(m.status,'Proposed; not started');
  for(const id of [...m.source_tasks,...m.prepares_source_tasks])assert(sourceTasks.has(id),'Unknown source '+id);
  assert.deepEqual(m.source_activity_ids,m.source_tasks.flatMap(id=>sourceTasks.get(id).activity_ids));
  assert.deepEqual(m.source_acceptance_ids,m.source_tasks.flatMap(id=>sourceTasks.get(id).acceptance_ids));
  assert.deepEqual(m.work[0].depends_on,m.depends.map(id=>`${id}-03`));
  for(const id of m.tests){assert(testMap.has(id));referencedTests.add(id);}
  for(const w of m.work){
    assert(w.title&&w.goal&&w.deliverable&&w.acceptance&&w.executor_role&&w.reviewer_role);
    assert.equal(w.status,'Proposed; not started');assert.equal(w.evidence.length,0);assert.equal(w.accepted_at,null);
    for(const field of ['base_commit','environment','owner_name','reviewer_name','authority_record','approved_minutes','approved_spend'])assert.equal(w.run_contract[field],null);
  }
}
assert.equal(referencedTests.size,36,'Every case is scheduled in a milestone');
for(const c of catalog.cases){
  assert(milestoneMap.has(c.milestone));assert(catalog.fixtures[c.fixture_id]);assert(c.preconditions.length&&c.steps.length&&c.expected_result);
  assert(sourceTasks.has(c.source_task));assert.deepEqual(c.source_acceptance_ids,sourceTasks.get(c.source_task).acceptance_ids);
  assert.equal(c.status,'Specified; not implemented or executed');assert.equal(c.test_file,null);assert.equal(c.last_run_commit,null);assert.equal(c.evidence.length,0);assert.equal(c.accepted_at,null);
}
assert(milestoneMap.get('DF-05').depends.includes('DF-04'),'Client persistence proof waits for local backend evidence');
assert(milestoneMap.get('DF-09').depends.includes('DF-08'),'Upload feasibility waits for device/local-save evidence');
assert.equal(milestoneMap.get('DF-10').depends.length,10);
console.log('PASS: foundation milestone/work graphs are acyclic; all source/ACT/AC references and 36 test mappings resolve; no execution evidence or approvals fabricated.');
