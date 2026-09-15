const assert = require('assert').strict;
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const fixture = JSON.parse(fs.readFileSync(path.join(root, 'contracts', 'design', 'sp007-sp038-screen-states.json'), 'utf8'));
const prototypePath = path.join(root, 'docs', 'design', 'prototypes', 'soccolo-screen-review.html');
const prototype = fs.readFileSync(prototypePath, 'utf8');
assert.equal(fixture.version, '1.0-sp038-direction-accepted-sp007-review');
assert.equal(fixture.brandBundle, 'Soccolo-Brand-Bundle v4');
assert.match(fixture.label, /NOT A WORKING APP/);
assert.equal(fixture.frames.length, 33);

const byId = new Map(fixture.frames.map(frame => [frame.id, frame]));
assert.equal(byId.size, 33, 'frame IDs must be unique');
for (let number = 1; number <= 33; number += 1) {
  const id = `F${String(number).padStart(2, '0')}`;
  const frame = byId.get(id);
  assert.ok(frame, `${id} missing`);
  assert.ok(frame.actions.length > 0, `${id} actions missing`);
  assert.ok(frame.states.length > 1, `${id} alternative states missing`);
  assert.equal(frame.family, number <= 13 ? 'core' : number <= 22 ? 'administration' : 'controls');
}

for (const invariant of [
  'stop_is_immediate_and_never_guardian_gated',
  'recording_indicator_only_after_capture_confirmed',
  'camera_and_microphone_are_optional',
  'cloud_backup_starts_off',
  'no_colour_only_status',
  'no_unrestricted_adult_child_private_chat',
  'current_authority_required_for_privileged_or_media_actions',
  'missing_or_withdrawn_content_is_not_silently_substituted',
  'youngest_teen_and_adult_copy_are_distinct',
  'light_dark_portrait_landscape_and_large_text_are_required'
]) assert.ok(fixture.globalInvariants.includes(invariant), `${invariant} missing`);

assert.ok(byId.get('F09').actions.includes('stop'));
assert.ok(byId.get('F09').states.includes('recording_stopped'));
assert.ok(byId.get('F09').states.includes('landscape'));
assert.ok(byId.get('F11').states.includes('adult_transition'));
assert.ok(byId.get('F12').states.includes('deletion_pending'));
assert.ok(byId.get('F14').states.includes('no_cross_context_carryover'));
assert.ok(byId.get('F18').states.includes('coach_approval_pending'));
assert.ok(byId.get('F19').states.includes('rights_missing'));
assert.ok(byId.get('F21').states.includes('media_not_granted'));
assert.ok(byId.get('F22').states.includes('grant_revoked'));
assert.ok(byId.get('F26').states.includes('follow_device_default'));
assert.ok(byId.get('F13').states.includes('missed_week'));
assert.ok(byId.get('F13').states.includes('opt_out'));
assert.ok(byId.get('F06').states.includes('animation_placeholder_not_playable'));
assert.ok(byId.get('F27').states.includes('same_phone_manual_entry'));
assert.ok(byId.get('F31').states.includes('authority_revoked'));
assert.ok(byId.get('F32').states.includes('coach_reported'));
assert.ok(byId.get('F33').states.includes('correction_refused'));

assert.ok(prototype.includes('DESIGN HANDOFF — NOT A WORKING APP'));
assert.ok(prototype.includes('Soccolo-Brand-Bundle%20v4'));
assert.ok(prototype.includes("selectedId = 'F09'"));
assert.ok(prototype.includes('data-audience="youngest"'));
assert.ok(prototype.includes('data-audience="teen"'));
assert.ok(prototype.includes('data-audience="adult"'));
assert.ok(prototype.includes('data-orientation="landscape"'));
assert.ok(prototype.includes('id="themeButton"'));
assert.ok(prototype.includes("themeMode = 'follow'"));
assert.ok(fs.existsSync(path.join(root, 'docs', 'design', 'brand', 'Soccolo-Brand-Bundle v4', '02-logo', 'horizontal', 'soccolo-horizontal-light.svg')));
assert.ok(fs.existsSync(path.join(root, 'docs', 'design', 'brand', 'Soccolo-Brand-Bundle v4', '02-logo', 'horizontal', 'soccolo-horizontal-dark.svg')));
for (const [, source] of prototype.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)) new Function(source);

console.log('PASS: SP-007/SP-038 review handoff covers F01–F33 and mandatory safety/state invariants.');
