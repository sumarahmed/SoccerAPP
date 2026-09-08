# SoccerTrainingApp — Documentation Package Inventory

## Current GitHub documentation

The repository contains the current reconstructed planning set covering product, architecture, UX/design, security, human delivery, agent delivery, market analysis, wishlist and Linear setup.

## Original 6–7 September planning package

The original package contained the following artifacts:

| Artifact | Purpose | GitHub status |
|---|---|---|
| `soccer_delivery_master_plan.md` | 12-phase delivery and gate plan | Current version uploaded |
| `soccer_human_action_playbook.md` | Human actions and approvals | Current version uploaded |
| `soccer_agent_execution_playbook.md` | Agent boundaries/evidence | Current version uploaded |
| `soccer_delivery_backlog.md` | 150 detailed SP-001–SP-150 work records | Source artifact retained in File Library; summary/index should be treated separately from exact machine-readable package |
| `soccer_feature_traceability.md` | 30 feature groups; F01–F33, S01–S27, R01–R20 mappings | Source artifact retained in File Library |
| `soccer_linear_setup_and_import.md` | Linear setup/import procedure | Current version uploaded |
| `soccer_linear_import.csv` | Full 150-record Linear import | Source artifact retained in File Library |
| `soccer_linear_smoke.csv` | 3-record import test | Source artifact retained in File Library |
| `soccer_linear_remaining.csv` | Remaining 147 records | Source artifact retained in File Library |
| `soccer_linear_manifest.json` | 150-task parent/dependency/run-contract structure | Source artifact retained in File Library |
| `soccer_acceptance_evidence_register.json` | 543 planned acceptance criteria | Source artifact retained in File Library |
| `source_manifest.json` | Historical baseline hashes | Hash manifest uploaded |
| `validation_report.md` | Planning-package structural checks | Current version uploaded |
| `soccer_market_gap_analysis.md` | Competitive market review | Current version uploaded |
| `soccer_product_wishlist.md` | Deferred product candidates | Current version uploaded |

## Integrity note

The large CSV/JSON/backlog artifacts were generated and validated as one dated package. They should not be manually reconstructed from excerpts because doing so could alter issue descriptions, dependencies, acceptance IDs or import behavior. The original validation reported 150 source issues, 76 parent links, 574 predecessor edges and 543 planned acceptance criteria.

The 7 September master-plan update added five immediate product priorities after the market review. Those additions were not yet regenerated into the 6 September machine-readable CSV/JSON package. Before using the dated Linear bundle for development dispatch, reconcile those priorities and regenerate the machine-readable artifacts from one authoritative manifest.
