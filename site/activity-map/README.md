# SoccerAPP activity map

This site is generated from the repository's activity manifest and dated decision records. Do not edit `dist/index.html` manually.

Build and validate locally:

```powershell
node tools/build-activity-map.cjs
node tools/validate-activity-map.cjs
```

GitHub Actions runs the same commands and publishes `site/activity-map/dist/` to GitHub Pages whenever the activity manifests, decision records, map template or generator changes.
