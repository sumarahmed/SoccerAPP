const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const refresh=process.argv.includes('--refresh-package');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const json=p=>JSON.parse(read(p));
const digest=p=>crypto.createHash('sha256').update(fs.readFileSync(path.join(root,p))).digest('hex');
const files=(folder='')=>fs.readdirSync(path.join(root,folder),{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.posix.join(folder,e.name)):[path.posix.join(folder,e.name)]).sort();
const m=json('docs/soccer_linear_manifest.json');
const am=json('docs/soccer_agent_activity_manifest.json');
const evidence=json('docs/soccer_acceptance_evidence_register.json').criteria;
const counts=json('docs/activity-plan-counts.json');
const tasks=new Map(m.tasks.map(t=>[t.id,t]));
const activities=new Map(am.activities.map(a=>[a.id,a]));
const acs=new Map(evidence.map(a=>[a.acceptance_id,a]));
const checks=[];
function check(name,fn){fn();checks.push(name);}
function verifyOrder(map,order){
  assert.equal(new Set(order).size,map.size);assert.equal(order.length,map.size);
  const position=new Map(order.map((id,i)=>[id,i]));
  for(const [id,item]of map){assert(position.has(id));assert.equal(new Set(item.dependencies).size,item.dependencies.length);for(const dep of item.dependencies){assert(map.has(dep),`${id}: missing ${dep}`);assert(position.get(dep)<position.get(id),`${id}: invalid order/cycle at ${dep}`);}}
}
function parseCSV(text){
  const rows=[];let row=[],field='',quoted=false;
  for(let i=0;i<text.length;i++){
    const c=text[i];
    if(quoted){if(c==='"'){if(text[i+1]==='"'){field+='"';i++;}else quoted=false;}else field+=c;}
    else if(c==='"')quoted=true;
    else if(c===','){row.push(field);field='';}
    else if(c==='\n'){row.push(field);rows.push(row);row=[];field='';}
    else if(c!=='\r')field+=c;
  }
  assert(!quoted,'Unclosed CSV quote');if(field||row.length){row.push(field);rows.push(row);}return rows;
}
check('165 unique consecutive source IDs; SP-001–SP-150 retained',()=>{assert.equal(tasks.size,165);for(let i=1;i<=165;i++)assert(tasks.has(`SP-${String(i).padStart(3,'0')}`));});
check('390 unique activity IDs; every source task has a complete activity mapping',()=>{
  assert.equal(activities.size,390);assert.equal(am.activities.length,390);
  for(const t of tasks.values()){
    assert(t.activity_ids.length>0);
    for(const id of t.activity_ids){assert(activities.has(id));assert.equal(activities.get(id).source_issue,t.id);}
    assert.equal(am.activities.filter(a=>a.source_issue===t.id).length,t.activity_ids.length);
  }
  for(const a of activities.values())assert(tasks.has(a.source_issue));
});
check('Source and activity dependency graphs exist, are acyclic and match saved order',()=>{verifyOrder(tasks,m.topological_order);verifyOrder(activities,am.topological_order);});
check('Parent/child completion and activity predecessor mappings agree',()=>{
  for(const t of tasks.values()){
    if(t.parent_id){const p=tasks.get(t.parent_id);assert(p);assert(p.children.includes(t.id));assert(p.dependencies.includes(t.id));}
    for(const child of t.children)assert.equal(tasks.get(child).parent_id,t.id);
    const first=activities.get(t.activity_ids[0]);
    assert.deepEqual([...first.source_dependencies].sort(),[...t.dependencies].sort());
    assert.deepEqual([...first.dependencies].sort(),t.dependencies.map(d=>tasks.get(d).activity_ids.at(-1)).sort());
    for(let i=1;i<t.activity_ids.length;i++)assert.deepEqual(activities.get(t.activity_ids[i]).dependencies,[t.activity_ids[i-1]]);
    if(t.children.length){assert.equal(t.activity_ids.length,1);assert.equal(first.execution,'Human');assert.equal(first.kind,'Acceptance rollup');}
  }
});
check('613 unique acceptance criteria match source text and remain mapped to activities',()=>{
  assert.equal(acs.size,613);assert.equal(evidence.length,613);
  for(const t of tasks.values()){
    assert.equal(t.acceptance.length,t.acceptance_ids.length);
    t.acceptance_ids.forEach((id,i)=>{const a=acs.get(id);assert(a);assert.equal(a.source_issue,t.id);assert.equal(a.requirement,t.acceptance[i]);assert.deepEqual(a.activity_ids,t.activity_ids);});
    const last=activities.get(t.activity_ids.at(-1));assert.deepEqual(last.definition_of_done,t.acceptance);
    for(const id of t.activity_ids)assert.deepEqual(activities.get(id).source_acceptance_ids,t.acceptance_ids);
  }
  assert.equal(m.tasks.reduce((n,t)=>n+t.acceptance.length,0),613);
});
check('Each activity specifies a goal, deliverable, executor, inputs, checks, boundary and review role',()=>{
  for(const a of activities.values()){
    for(const key of ['title','goal','phase','gate','kind','execution','accountable_owner_role','reviewer_role','write_lane'])assert(a[key],`${a.id}: ${key}`);
    for(const key of ['required_inputs','deliverables','definition_of_done','source_acceptance_ids','proposed_paths'])assert(a[key]?.length,`${a.id}: ${key}`);
    assert(a.run_contract);assert(a.sizing);assert(['Agent','Human'].includes(a.execution));
    assert(read(`docs/activities/${a.phase}.md`).includes(`## ${a.id} — ${a.title}`));
  }
});
check('Twelve phases and all five priority requirement mappings are covered',()=>{
  assert.equal(new Set(am.activities.map(a=>a.phase)).size,12);
  assert.equal(am.priority_mapping.length,5);
  for(const p of am.priority_mapping){assert(p.source_issues.length);assert(p.activity_ids.length);for(const id of p.source_issues)assert(tasks.get(id).priority_ids.includes(p.id));for(const id of p.activity_ids)assert(activities.get(id).priority_ids.includes(p.id));for(const id of p.acceptance_ids)assert(acs.has(id));}
  for(const group of Object.values(m.traceability))for(const entry of group)for(const id of [...(entry.issues||[]),...(entry.build_issues||[]),...(entry.verification_issues||[]),...(entry.source_issues||[])])assert(tasks.has(id));
  for(const id of ['SP-154','SP-160','SP-161','SP-165'])assert(tasks.get(id).screen_ids.includes('F21'),'Feedback maps to F21');
});
check('Source CSVs are 165 full / 3 smoke / 162 remaining with exact multiline description parity',()=>{
  const loaded=['soccer_linear_import.csv','soccer_linear_smoke.csv','soccer_linear_remaining.csv'].map(p=>parseCSV(read('docs/'+p)));
  assert.equal(loaded[0].length,166);assert.equal(loaded[1].length,4);assert.equal(loaded[2].length,163);
  const [header]=loaded[0];assert.equal(header.length,21);
  for(const rows of loaded){assert.deepEqual(rows[0],header);for(const row of rows.slice(1)){
    assert.equal(row.length,header.length);const t=tasks.get(row[0]);assert(t);assert.equal(row[2],`[${t.id}] ${t.title}`);assert.equal(row[3],t.description);assert.equal(row[4],t.status);assert.equal(row[9],'');
  }}
  const complete=loaded[0].slice(1).map(r=>r[0]).sort();const split=[...loaded[1].slice(1),...loaded[2].slice(1)].map(r=>r[0]).sort();assert.deepEqual(complete,split);assert.equal(new Set(split).size,165);
  assert.deepEqual(loaded[1].slice(1).map(r=>r[0]),['SP-001','SP-003','SP-075']);
});
check('Flat activity CSV has 390 unique rows and matches the activity manifest',()=>{
  const rows=parseCSV(read('docs/soccer_agent_activity_tasks.csv'));assert.equal(rows.length,391);
  assert.equal(new Set(rows.slice(1).map(r=>r[0])).size,390);
  for(const row of rows.slice(1)){assert.equal(row.length,rows[0].length);const a=activities.get(row[0]);assert(a);assert.equal(row[7],a.goal);assert.equal(row[8],a.deliverables.join('; '));assert.equal(row[9],a.dependencies.join(', '));}
});
check('All task descriptions in the backlog match the manifest',()=>{const backlog=read('docs/soccer_delivery_backlog.md');for(const t of tasks.values())assert(backlog.includes(t.description));});
check('No activity, task, human approval or acceptance evidence is fabricated',()=>{
  assert.equal(m.implementation_authorized,false);assert.equal(m.import_executed,false);
  for(const t of tasks.values()){assert.equal(t.status,'Backlog');assert.equal(t.assignee,null);assert.equal(t.reviewer_name,null);}
  for(const a of activities.values()){assert.equal(a.status,'Backlog');assert.equal(a.dispatchable_now,false);assert.equal(a.evidence.length,0);assert.equal(a.accepted_at,null);}
  for(const a of evidence){assert.equal(a.status,'Not started');assert.equal(a.evidence_urls.length,0);assert.equal(a.accepted_at,null);assert.equal(a.reviewer_name,null);}
});
check('Counts agree with source/activity records',()=>{
  assert.equal(counts.source_tasks,tasks.size);assert.equal(counts.activities,activities.size);assert.equal(counts.agent_activities,am.activities.filter(a=>a.execution==='Agent').length);
  assert.equal(counts.source_containers,m.tasks.filter(t=>t.children.length).length);assert.equal(counts.source_leaves,m.tasks.filter(t=>!t.children.length).length);
  assert.equal(counts.source_dependency_edges,m.tasks.reduce((n,t)=>n+t.dependencies.length,0));assert.equal(counts.activity_dependency_edges,am.activities.reduce((n,a)=>n+a.dependencies.length,0));
  assert.equal(counts.parent_links,m.tasks.filter(t=>t.parent_id).length);
});
check('Seven original baseline documents remain byte-identical to their source hashes',()=>{
  const source=json('docs/source_manifest.json');assert.equal(source.files.length,7);for(const f of source.files){assert.equal(digest('docs/'+f.file),f.sha256);assert.equal(fs.statSync(path.join(root,'docs',f.file)).size,f.bytes);}
});
const priorPackage=json('package-manifest.json');
check('Financial workbook and three design PNGs remain unchanged',()=>{
  const preserved=priorPackage.files.filter(f=>f.path.startsWith('financial/')||f.path.startsWith('design/'));
  assert.equal(preserved.length,4);for(const f of preserved)assert.equal(digest(f.path),f.sha256);
});
if(refresh){
  // Placeholder files make link validation cover the final report destinations.
  if(!fs.existsSync(path.join(root,'docs/activity_plan_validation.md')))fs.writeFileSync(path.join(root,'docs/activity_plan_validation.md'),'# Activity plan validation\n');
}
let linkCount=0;
check('Current Markdown relative file links resolve inside the package',()=>{
  for(const p of files().filter(p=>p.endsWith('.md')&&!p.startsWith('docs/baseline/'))){
    for(const match of read(p).matchAll(/\[[^\]]*\]\(([^)]+)\)/g)){
      const target=match[1].split('#')[0].replace(/^<|>$/g,'');if(!target||/^(https?:|mailto:|app:|codex:)/.test(target))continue;
      const resolved=path.resolve(root,path.dirname(p),decodeURIComponent(target));assert(resolved.startsWith(root+path.sep)||resolved===root,`${p}: link escapes package ${target}`);assert(fs.existsSync(resolved),`${p}: missing ${target}`);linkCount++;
    }
  }
});
if(refresh){
  const report=`# Activity plan validation — 8 September 2026\n\nExecuted locally with Node.js using \`tools/build-activity-plan.cjs\` and \`tools/validate-activity-plan.cjs --refresh-package\`. These are planning-data checks; no product, device, coaching, security or live tracker acceptance is claimed.\n\n| Check | Result |\n|---|---|\n${checks.map(c=>`| ${c} | Pass |`).join('\n')}\n\nCounts: ${counts.source_tasks} source tasks, ${counts.source_containers} containers, ${counts.source_leaves} leaves, ${counts.activities} activities, ${counts.agent_activities} agent activities, ${counts.human_actions} human actions and ${counts.human_rollups} human rollups. Source graph: ${counts.source_dependency_edges} predecessor edges and ${counts.parent_links} parent links. Activity graph: ${counts.activity_dependency_edges} predecessor edges. ${counts.planned_acceptance_criteria} planned acceptance records; zero actual acceptances.\n\nThe original 543 criterion IDs/text were preserved during the append-only reconciliation; the generator rejects changed text for an existing acceptance ID. 70 new criteria cover the priority additions and integration obligations. Every final activity checks its source criteria; intermediate deliverables retain traceability to those criteria. The first draft and regeneration both produced 165/390/613 counts and acyclic graphs.\n\nThe package checksum manifest is refreshed after these checks and verified on the final files. Historical 6/7 September reports remain dated records. The financial workbook has not been recalculated; source paths, run budgets and named reviewers remain planning inputs. CSV importer behavior and the actual Linear workspace were not exercised. ZIP integrity and entry hashes are verified separately after archive creation.\n`;
  fs.writeFileSync(path.join(root,'docs/activity_plan_validation.md'),report);
  fs.writeFileSync(path.join(root,'PACKAGE_VALIDATION.md'),`# Package validation — 8 September 2026\n\nThe [activity validation report](docs/activity_plan_validation.md) records the detailed structural checks.\n\n- 165 source tasks and 390 linked activities cover all twelve phases and IP-01–IP-05.\n- Source and activity dependency graphs are acyclic; source/CSV/activity/evidence relationships agree.\n- Source CSV counts are full 165, smoke 3 and remaining 162. All 613 acceptance records remain unverified.\n- All seven original baseline document hashes match their source manifest.\n- The financial workbook and three design PNGs are unchanged from the earlier package.\n- Current Markdown file references resolve; JSON parses; the package manifest lists every included file with current size and SHA-256.\n\nNo live import, product implementation, participant work or agent dispatch has been performed. Archive integrity is checked separately after creating the dated ZIP. Regenerate package hashes with \`node tools/validate-activity-plan.cjs --refresh-package\` after authorized file changes.\n`);
  const updated={...priorPackage,revised_on:'2026-09-08',status:'planning_only',linear_baseline_date:'2026-09-08',priorities_reconciled_into_linear:true,priority_reconciliation_scope:'Prepared local task/CSV/manifest files only; no live Linear import',activity_count:390,source_task_count:165,files:files().filter(p=>p!=='package-manifest.json').map(p=>({path:p,bytes:fs.statSync(path.join(root,p)).size,sha256:digest(p)}))};
  fs.writeFileSync(path.join(root,'package-manifest.json'),JSON.stringify(updated,null,2)+'\n');
}
check('Package manifest lists every file with matching byte length and SHA-256',()=>{
  const pack=json('package-manifest.json');assert.deepEqual(pack.files.map(f=>f.path).sort(),files().filter(p=>p!=='package-manifest.json'));
  for(const f of pack.files){assert.equal(fs.statSync(path.join(root,f.path)).size,f.bytes,f.path);assert.equal(digest(f.path),f.sha256,f.path);}
});
console.log(JSON.stringify({status:'PASS',checks:checks.length,relative_links:linkCount,counts},null,2));
