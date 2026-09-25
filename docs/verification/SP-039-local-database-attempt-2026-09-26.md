# SP-039 local database execution attempt

| Field | Evidence record |
|---|---|
| Date | 26 September 2026 |
| Source | [SP-039](../delivery/soccer_delivery_backlog.md#sp-039--prove-scoped-database-and-storage-foundation) |
| Implementation revision | `8bc319b83b7f6c033e07d89cb9b4591e6f368a2e` |
| External spend | AUD 0 |
| Disposition | **Static contract passes; database execution blocked by missing local container runtime** |

## Commands and results

| Command/check | Result |
|---|---|
| `node tests/backend/validate-sp039-contract.cjs` | PASS — 15 static contract checks; database execution still required |
| `node tools/dev/preflight.cjs` | Git PASS; Node `v24.19.0` PASS; pinned `supabase@2.117.0` PASS through `npx`; Docker PENDING |
| `Get-Command docker,podman,psql,pg_isready,supabase` | No installed command found |
| Workspace `.toolchains` scan | No Docker, Podman, PostgreSQL or Supabase runtime found |
| `wsl.exe --list --quiet` | WSL is not installed |

The repository-defined database path requires a running Docker-compatible
runtime before `supabase start`, `db reset --local` and `test db --local` can
execute. No host installation or global configuration change was authorized by
the zero-spend local route, so the attempt stopped without modifying the host.

## Retained limit

The migration, seed and 18-assertion pgTAP suite remain unexecuted against
PostgreSQL. Static inspection cannot establish actual migration order,
transaction behavior, RLS enforcement or cross-household denial. SP-039 remains
open pending an authorized disposable local database environment and accepted
handoff.
