import { copyFile, mkdir, writeFile } from 'node:fs/promises';

// Pages serves files directly. Give each client route its own entry document so
// direct links and page refreshes work without a server-side SPA rewrite.
for (const route of ['about', 'projects', 'resume']) {
  await mkdir(`build/${route}`, { recursive: true });
  await copyFile('build/index.html', `build/${route}/index.html`);
}
await copyFile('build/index.html', 'build/404.html');
await writeFile('build/.nojekyll', '');
