# SoccerAPP activity map

This site is generated from the repository's activity manifest and dated decision records. Do not edit `dist/index.html` manually.

The template also contains a dated current-product-status panel linking the
latest scope/backlog and resume handoff. Keep this panel aligned with those
documents without treating approved future scope as completed activity evidence.

Build and validate locally:

```powershell
node tools/build-activity-map.cjs
node tools/validate-activity-map.cjs
```

GitHub Actions runs the same commands and publishes `site/activity-map/dist/` to GitHub Pages whenever the activity manifests, decision records, map template or generator changes.
