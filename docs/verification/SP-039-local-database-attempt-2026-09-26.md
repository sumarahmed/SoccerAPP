# SP-039 local database execution evidence

| Field | Evidence record |
|---|---|
| Date | 26 September 2026 |
| Source | [SP-039](../delivery/soccer_delivery_backlog.md#sp-039--prove-scoped-database-and-storage-foundation) |
| Implementation revision | `8bc319b83b7f6c033e07d89cb9b4591e6f368a2e` |
| External spend | AUD 0 |
| Disposition | **PASS — disposable local migration, synthetic seed and 18 pgTAP assertions executed successfully** |

## Commands and results

| Command/check | Result |
|---|---|
| `node tests/backend/validate-sp039-contract.cjs` | PASS — 15 static contract checks |
| `node tools/dev/preflight.cjs` | PASS — Git `2.55.0`, Node `v24.19.0`, Docker Engine `29.8.0` and pinned Supabase CLI `2.117.0` |
| `Get-Command docker,podman,psql,pg_isready,supabase` | No installed command found |
| Workspace `.toolchains` scan | No Docker, Podman, PostgreSQL or Supabase runtime found |
| `wsl.exe --list --quiet` | WSL is not installed |
| Windows prerequisite check | Windows 10 Pro build `26200`, x64; current Codex process is not elevated |
| Elevated `wsl.exe --install --no-distribution` | Exit code `0`; default WSL version set to 2 |
| Post-restart `wsl.exe --version` | PASS — WSL `2.7.14.0`, kernel `6.18.33.2-2`, default version 2 |
| Windows reboot flags | Component Based Servicing `RebootPending` present; pending file rename operations present |
| Docker Desktop installation | PASS — WinGet-verified Docker Desktop `4.91.0`; Linux Engine `29.8.0` responded |
| `npx --yes supabase@2.117.0 start` from `backend` | PASS — applied `202609160001_sp039_scoped_foundation.sql` and seeded `supabase/seed.sql` |
| `npx --yes supabase@2.117.0 db reset --local` from `backend` | PASS — database recreated; migration and synthetic seed reapplied |
| `npx --yes supabase@2.117.0 test db --local` from `backend` | PASS — 1 file, 18 tests, all successful |
| `node tools/dev/verify.cjs` | PASS — SP-039 static guard, security guard, media manifest and SP-015/SP-016/SP-017 fixture suites |
| `npx --yes supabase@2.117.0 stop --no-backup` from `backend` | PASS — disposable `soccolo-local` stack stopped without backup |

The delivery owner authorized the zero-spend host setup on 26 September 2026.
WSL 2 and Docker Desktop were installed locally, then the repository-defined
commands were run from the documented `backend` working directory. The clean
reset proved that the migration and synthetic seed rebuild successfully. The
pgTAP suite proved the fixed policy set, household isolation, limited club
projection, denial of implicit media access, purpose-bound media grants,
immediate revocation and unrelated-club denial across all 18 assertions.

## Retained limit

This is disposable local feasibility evidence at implementation revision
`8bc319b83b7f6c033e07d89cb9b4591e6f368a2e`. It does not prove a hosted
environment, production operations, provider controls, real-child data handling
or independent review. The implementation produced no tracked change. SP-039
has passed its local execution proof and remains pending founder/technical-lead
and delivery-owner acceptance at the recorded bounded scope.
