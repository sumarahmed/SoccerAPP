const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const checkOnly = process.argv.includes('--check');
const mappings = {
  'docs/soccer_delivery_master_plan.md': 'docs/product/soccer_delivery_master_plan.md',
  'docs/soccer_market_gap_analysis.md': 'docs/product/soccer_market_gap_analysis.md',
  'docs/soccer_product_wishlist.md': 'docs/product/soccer_product_wishlist.md',
  'docs/baseline/soccer_app_foundation_plan.md': 'docs/product/soccer_app_foundation_plan.md',
  'docs/baseline/soccer_club_parent_and_coach_administration.md': 'docs/product/soccer_club_parent_and_coach_administration.md',
  'docs/baseline/soccer_end_to_end_platform_and_business_plan.md': 'docs/architecture/soccer_end_to_end_platform_and_business_plan.md',
  'docs/baseline/soccer_pilot_and_design_pack.md': 'docs/design/soccer_pilot_and_design_pack.md',
  'docs/baseline/soccer_end_to_end_security_and_gap_review.md': 'docs/security/soccer_end_to_end_security_and_gap_review.md',
  'docs/baseline/soccer_sdlc_security_and_agent_delivery_review.md': 'docs/security/soccer_sdlc_security_and_agent_delivery_review.md',
  'docs/soccer_human_action_playbook.md': 'docs/delivery/soccer_human_action_playbook.md',
  'docs/soccer_agent_execution_playbook.md': 'docs/delivery/soccer_agent_execution_playbook.md',
  'docs/soccer_delivery_backlog.md': 'docs/delivery/soccer_delivery_backlog.md',
  'docs/soccer_feature_traceability.md': 'docs/delivery/soccer_feature_traceability.md',
  'docs/soccer_agent_activity_plan.md': 'docs/delivery/soccer_agent_activity_plan.md',
  'docs/activity_plan_validation.md': 'docs/delivery/activity_plan_validation.md',
  'docs/validation_report.md': 'docs/delivery/validation_report.md',
  'docs/soccer_linear_setup_and_import.md': 'linear/soccer_linear_setup_and_import.md',
  'PACKAGE_VALIDATION.md': 'docs/delivery/package_validation.md'
};
const currentDecisionOverrides = new Set([
  'docs/product/soccer_delivery_master_plan.md',
  'docs/product/soccer_app_foundation_plan.md',
  'docs/architecture/soccer_end_to_end_platform_and_business_plan.md',
  'docs/security/soccer_sdlc_security_and_agent_delivery_review.md'
]);
for(let i=0;i<12;i++){
  const phase='P'+String(i).padStart(2,'0');
  mappings[`docs/activities/${phase}.md`]=`docs/delivery/activities/${phase}.md`;
}
const rel=(from,to)=>path.posix.relative(path.posix.dirname(from),to);
const destinationFor=source=>mappings[source]||'packages/soccer_agent_activity_package_20260908/'+source;
function projectMarkdown(source,destination){
  let text=fs.readFileSync(path.join(root,"packages/soccer_agent_activity_package_20260908",source),'utf8').replaceAll('\r\n','\n');
  text=text.replace(/(!?\[[^\]]*\])\(([^)]+)\)/g,(match,label,target)=>{
    if(/^[a-z][a-z0-9+.-]*:/i.test(target)||target.startsWith('#'))return match;
    const hash=target.indexOf('#'),file=hash<0?target:target.slice(0,hash),anchor=hash<0?'':target.slice(hash);
    const canonical=path.posix.normalize(path.posix.join(path.posix.dirname(source),file));
    return `${label}(${rel(destination,destinationFor(canonical))}${anchor})`;
  });
  const headingEnd=text.indexOf('\n');
  const notice=`\n\n> Synchronized 8 September 2026 from the [complete planning source](${rel(destination,'packages/soccer_agent_activity_package_20260908/'+source)}). This page contains the full source text with repository-relative navigation. Edit the canonical file under \`packages/soccer_agent_activity_package_20260908/\`, then run \`node tools/sync-docs.cjs\` from the repository root. Plain filenames, machine-data references and package regeneration commands in the source are relative to the [canonical package](${rel(destination,'packages/soccer_agent_activity_package_20260908/README.md')}).`;
  const currentOverride=currentDecisionOverrides.has(destination)
    ? `\n\n> **Current lean-pilot override — accepted 15 September 2026:** The [SP-050 decision](../decisions/SP-050-lean-pilot-hosting-and-recovery.md) supersedes older proposals below for strict Australian-only processing, paid staging, Melbourne recovery copies and pilot RPO/RTO. Sydney primary placement and private-data authorization remain; global delivery is permitted and dedicated recovery is deferred until post-pilot.`
    : '';
  return text.slice(0,headingEnd)+notice+currentOverride+text.slice(headingEnd);
}
function emit(destination,text){
  const output=path.join(root,destination);
  if(checkOnly){
    if(!fs.existsSync(output)||fs.readFileSync(output,'utf8')!==text)throw Error('Stale/missing documentation view: '+destination);
  }else{fs.mkdirSync(path.dirname(output),{recursive:true});fs.writeFileSync(output,text,'utf8');}
}
for(const [source,destination] of Object.entries(mappings))emit(destination,projectMarkdown(source,destination));
const sourceManifest=JSON.parse(fs.readFileSync(path.join(root,'packages/soccer_agent_activity_package_20260908/docs/source_manifest.json'),'utf8'));
sourceManifest.note='Historical 6 September source hashes, with paths resolved from docs/delivery to the exact snapshots in packages/soccer_agent_activity_package_20260908/docs/baseline. Current scope and priority additions are in the delivery/activity plans.';
for(const f of sourceManifest.files)f.file=rel('docs/delivery/source_manifest.json','packages/soccer_agent_activity_package_20260908/docs/'+f.file);
emit('docs/delivery/source_manifest.json',JSON.stringify(sourceManifest,null,2)+'\n');
const packageManifest=JSON.parse(fs.readFileSync(path.join(root,'packages/soccer_agent_activity_package_20260908/package-manifest.json'),'utf8'));
const inventory=`# SoccerAPP — documentation package inventory\n\nUpdated 8 September 2026. The complete local planning package is now included in this repository. It replaces the earlier reconstructed summaries and supplies the previously missing backlog, task manifests, import CSVs, evidence register, original specifications, workbook and concept assets.\n\n## Current delivery baseline\n\n- **165 source tasks:** SP-001–SP-150 preserved; SP-151–SP-165 reconcile IP-01–IP-05.\n- **390 activities:** 327 agent activities, 21 human actions/decisions and 42 human acceptance rollups across twelve phases.\n- **613 planned criteria:** the original 543 retained plus 70 priority/integration criteria. No passing implementation evidence or human approvals are implied.\n- **Import routes:** 165 full records, or 3 smoke plus 162 remaining. The separate activity CSV is a planning view, not an additional Linear import.\n\n## Sources and navigation\n\n[Start with the activity plan](soccer_agent_activity_plan.md), then the [master plan](../product/soccer_delivery_master_plan.md) and [full backlog](soccer_delivery_backlog.md). The [canonical package](../../packages/soccer_agent_activity_package_20260908/README.md) contains the authoritative synchronized files and their [checksum manifest](../../packages/soccer_agent_activity_package_20260908/package-manifest.json). Existing product/design/architecture/security/delivery pages are generated full-text views with working repository links.\n\nThe [Linear guide](../../linear/soccer_linear_setup_and_import.md) links the exact import artifacts. [Validation results](activity_plan_validation.md) cover the planning graphs and data; the [source manifest](source_manifest.json) resolves all seven historical snapshots. Historical documents retain their original research dates and assumptions; newer scope is in the current master/activity plans.\n\n## Complete canonical file inventory\n\n| File | Bytes |\n|---|---:|\n${packageManifest.files.map(f=>`| [${f.path}](${rel('docs/delivery/package_inventory.md','packages/soccer_agent_activity_package_20260908/'+f.path)}) | ${f.bytes} |`).join('\n')}\n\nThe package manifest itself is also included. The financial workbook and three concept PNGs are unchanged; financial assumptions have not been recalculated. No production code, database, paid service, live Linear import or agent dispatch is created by this documentation synchronization.\n\n## Updating documentation\n\n1. Edit canonical material under \`packages/soccer_agent_activity_package_20260908/\`. Keep original \`packages/soccer_agent_activity_package_20260908/docs/baseline/\` snapshots byte-identical.\n2. If task configuration changes, run \`node packages/soccer_agent_activity_package_20260908/tools/build-activity-plan.cjs\`.\n3. Refresh package validation and checksums with \`node packages/soccer_agent_activity_package_20260908/tools/validate-activity-plan.cjs --refresh-package\`.\n4. Regenerate repository views with \`node tools/sync-docs.cjs\`.\n5. Check both package and views with \`node tools/validate-docs.cjs\` before committing.\n`;
emit('docs/delivery/package_inventory.md',inventory);
console.log(`${checkOnly?'Verified':'Synchronized'} ${Object.keys(mappings).length} full-text documentation views, source manifest and package inventory.`);
