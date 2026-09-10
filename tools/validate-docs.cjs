const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const crypto=require('node:crypto');
const {spawnSync}=require('node:child_process');
const root=path.resolve(__dirname,'..');
function run(script,args=[]){
  const result=spawnSync(process.execPath,[path.join(root,script),...args],{cwd:root,encoding:'utf8'});
  process.stdout.write(result.stdout||'');process.stderr.write(result.stderr||'');
  if(result.status!==0)process.exit(result.status||1);
}
run('packages/soccer_agent_activity_package_20260908/tools/validate-activity-plan.cjs');
run('tools/sync-docs.cjs',['--check']);
run('tools/validate-foundation-docs.cjs');
const walk=folder=>fs.readdirSync(path.join(root,folder),{withFileTypes:true}).flatMap(e=>e.name==='.git'?[]:e.isDirectory()?walk(path.posix.join(folder,e.name)):[path.posix.join(folder,e.name)]);
let links=0;
for(const file of walk('').filter(f=>f.endsWith('.md')&&!f.startsWith('packages/soccer_agent_activity_package_20260908/docs/baseline/'))){
  const text=fs.readFileSync(path.join(root,file),'utf8');
  for(const [,target]of text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)){
    if(/^[a-z][a-z0-9+.-]*:/i.test(target)||target.startsWith('#'))continue;
    const local=decodeURIComponent(target.split('#')[0].replace(/^<|>$/g,''));
    const resolved=path.resolve(root,path.dirname(file),local);
    assert(resolved.startsWith(root+path.sep)||resolved===root,`${file}: link escapes repository ${target}`);
    assert(fs.existsSync(resolved),`${file}: missing link ${target}`);links++;
  }
}
const source=JSON.parse(fs.readFileSync(path.join(root,'docs/delivery/source_manifest.json'),'utf8'));
for(const f of source.files){
  const bytes=fs.readFileSync(path.resolve(root,'docs/delivery',f.file));
  assert.equal(bytes.length,f.bytes);assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),f.sha256);
}
console.log(`PASS: ${links} repository-relative links resolve; seven source hashes match; generated documentation agrees with the canonical package.`);
