# ACT-SP-009 — Provider and device capability-disable gates

| Field | Value |
|---|---|
| Finding addressed | M4 — material provider/device conditions hidden by broad “runtime later” wording |
| Version | 1.0 remediation candidate |
| Date | 16 September 2026 |
| Rule | Missing evidence disables the affected capability; it does not weaken the control |

| Condition | Required evidence | Gate / owner | Capability-disable fallback |
|---|---|---|---|
| Full-session cloud storage feasibility | SP-017 proves a viable path using representative duration, resolution, bitrate, file/part sizes, quota and cost; current Supabase Free 50 MB per-file limitation is included | Before full-session cloud enablement; media/backend owner | Keep full session local; allow only proven bounded clips or no cloud upload |
| Isolated media validation | Quarantine cannot be read/promoted by client; server allowlists container/size/duration, uses bounded isolated decoding, rejects malformed/truncated files and covers finalization races | Before any cloud media becomes readable; backend/security owner | Cloud upload remains disabled; local practice/recording remains available |
| Upload authorization residual | Measure actual credential behavior; unstarted reservation/credential ≤15 minutes, continuous attempt ≤60 minutes, inactivity ≤5 minutes; resume remains disabled and retries restart at byte zero | Before cloud upload; backend/security owner | No cloud upload |
| Fragment cleanup | Interruption/cancel/failure starts cleanup immediately; physical/provider result verified within one hour or alert raised; quota not falsely released | Before cloud upload; backend/operator | Stop new uploads when cleanup backlog or alert handling is unhealthy |
| Playback/download link | Current grant checked at mint/renew; URL lifetime ≤5 minutes; range/renewal/cache and removed-recipient tests measure residual access | Before cloud playback/sharing; backend/security owner | Local playback only; no coach/external cloud playback |
| Downloaded/exported bytes | UI, notice and tests state that bytes already downloaded, exported, placed in a gallery or handed to another service cannot be remotely recalled | Before download/export/share; product/privacy owner | Disable export/share; retain in-app local copy controls only |
| Temporary cloud copy/no recovery | Governing SP-011 v1.1 and SP-050/SP-063 posture shown in product copy; no “backup”, RPO, RTO or restoration promise; original device copy retained | Before cloud opt-in; product/operator | Do not offer cloud copy |
| Provider incidental backup expiry | Provider terms/configuration inventoried; deletion/retention notice distinguishes incidental provider copies from Soccolo recovery; expiry/erasure behavior recorded | Before real participant cloud data; privacy/operator | No cloud participant data |
| Deletion/withdrawal ordering | New generation and tombstone deny access first; stale queues, upload, playback, grants, restored data and cached availability cannot win | Before sync/cloud/share; backend/security owner | Local-only mode without cloud/share/sync |
| Tombstone and stale-client boundary | 30-day privacy-minimized tombstone plus forced full resync for devices older than seven days; test after tombstone expiry, clock rollback, reinstall/restore and old cursor | Before reconnect/sync with real participant data; mobile/backend/privacy owners | Force full reauthentication/resync; deny consequential offline pushes |
| Namespace/account switching | Physical-device tests prove one owner-context vault, locked switching, no cached thumbnail/preview leak and no cross-context queued replay | Before shared-device real participant use; mobile/security owner | One verified context per device or no child/private media |
| Offline withdrawal/deletion | Withdrawal/tombstone applies before upload/share/edit replay; bounded offline rights do not extend when clock is untrusted | Before offline sync with cloud; mobile/backend owner | Offline local practice only; no deferred consequential upload/share |
| Provider restore/recreation | If recovery is later enabled, isolated restore replays later deletion/revocation, checks auth/config/object consistency and unrelated households/clubs before access | Optional post-pilot recovery only; operator/security owner | Maintain accepted no-recovery posture; never promise restore |
| Real-device capture/storage | Named supported iOS/Android devices verify clip/full-session capture, interruption, thermal/space failure, finalization, local protection and dual-camera fallback | Before affected capture mode is claimed; mobile/device QA | Disable unproven mode; offer non-recorded practice or proven single-camera/local route |

Required negative suites include stale clients after tombstone expiry, clock
rollback, offline withdrawal/deletion, account/namespace switching, cached
media, direct upload/finalization attempts, leaked/expired playback links and any
future provider restore/recreation. Exact build, provider project/configuration,
device/OS and observed timing are recorded.

This matrix does not remediate H3. Even a technically correct recording mode
remains blocked for real-child scope where teammates, spectators or other people
may be captured without an accepted authority/removal design.
