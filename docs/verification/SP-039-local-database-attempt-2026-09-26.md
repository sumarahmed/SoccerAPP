# SP-039 local database execution attempt

| Field | Evidence record |
|---|---|
| Date | 26 September 2026 |
| Source | [SP-039](../delivery/soccer_delivery_backlog.md#sp-039--prove-scoped-database-and-storage-foundation) |
| Implementation revision | `8bc319b83b7f6c033e07d89cb9b4591e6f368a2e` |
| External spend | AUD 0 |
| Disposition | **Static contract passes; WSL 2 enablement installed and awaiting required Windows restart** |

## Commands and results

| Command/check | Result |
|---|---|
| `node tests/backend/validate-sp039-contract.cjs` | PASS — 15 static contract checks; database execution still required |
| `node tools/dev/preflight.cjs` | Git PASS; Node `v24.19.0` PASS; pinned `supabase@2.117.0` PASS through `npx`; Docker PENDING |
| `Get-Command docker,podman,psql,pg_isready,supabase` | No installed command found |
| Workspace `.toolchains` scan | No Docker, Podman, PostgreSQL or Supabase runtime found |
| `wsl.exe --list --quiet` | WSL is not installed |
| Windows prerequisite check | Windows 10 Pro build `26200`, x64; current Codex process is not elevated |
| Elevated `wsl.exe --install --no-distribution` | Exit code `0`; default WSL version set to 2 |
| Post-install `wsl.exe --status` | WSL 2 cannot start until Virtual Machine Platform and firmware virtualization are active |
| Windows reboot flags | Component Based Servicing `RebootPending` present; pending file rename operations present |

The repository-defined database path requires a running Docker-compatible
runtime before `supabase start`, `db reset --local` and `test db --local` can
execute. The delivery owner authorized the zero-spend host setup on 26 September
2026. The supported WSL installer was then run with administrator elevation and
completed successfully. Windows now requires a restart before WSL 2 can be
retested. If virtualization still reports disabled after that restart, enabling
Intel virtualization in the machine's UEFI/BIOS remains a human gate.

## Retained limit

The migration, seed and 18-assertion pgTAP suite remain unexecuted against
PostgreSQL. Static inspection cannot establish actual migration order,
transaction behavior, RLS enforcement or cross-household denial. SP-039 remains
open pending the authorized Windows restart, a working local container runtime,
database execution and accepted handoff.
