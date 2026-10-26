# Seyi Adekoya — portfolio & CV

A responsive developer workspace portfolio combining terminal windows, a career
timeline, project tabs, a schematic journey illustration, and a printable CV.

## Material design study

The `codex/material-study` branch explores a tactile version of the existing
design: matte cardstock, visible laminated cut edges, paper window strips,
layered controls, a green paper nameplate, and stacked project tabs. Purple,
green, monospace typography, content, and navigation remain shared with the
original design. The visual layer lives in `src/styles/material.css`, with a
local SVG grain texture in `src/assets/paper-grain.svg`.

Preview this branch locally with `npm start`. GitHub Pages continues to deploy
only `master`, so this experiment does not replace the live design.

## Run locally

Use Node.js 24 (`nvm use`), then:

```sh
npm ci
npm start
```

Open http://127.0.0.1:3000.

## Check and build

```sh
npm test
npm run build
npm run preview
```

Vite writes production files to `build/`. Netlify’s SPA fallback preserves direct
links to `/about`, `/projects`, and `/resume`. A project can be shared with a URL
such as `/projects?project=mindright#selected-work`. Workplace names in the
experience timeline open their matching details in selected work.

## Content and implementation

- `src/data/profile.js`: shared verified work history, projects, skills, education.
- `src/components/workspace`: terminal windows, illustrations, timeline, tabs,
  and toolbox. Windows collapse and maximize; Escape restores expanded windows.
- `src/layouts/Layout.jsx`: shared desktop/mobile navigation and footer.
- `src/App.css`: responsive layout, original typography, and reduced-motion rules.
- `src/pages/resume.css`: CV presentation and print layout.
- `CONTENT_SOURCES.md`: content sources and limits.

Project tabs support arrow keys, Home, and End. The mobile menu and expanded
windows support Escape. The layout stacks at phone widths and only the project
tab strip scrolls horizontally. Contact actions open email. Google Fonts have
monospace system fallbacks. No backend or extra integration is required.

The application uses React 19, React Router 7, and Vite 8. Earlier source
components are retained for reference but are not loaded by the current app.

## GitHub Pages

The `Deploy portfolio to GitHub Pages` workflow tests, builds, and deploys every
push to `master`. In GitHub Settings → Pages, the publishing source must be
**GitHub Actions**. The project URL is https://sheyooo.github.io/sheyi/.

```sh
npm run build:pages
npm run preview
```

The Pages build uses `/sheyi/` for asset URLs and client-side routing. Static
entry documents for About, Projects, and CV make direct URLs and refreshes work.
The ordinary `npm run build` still targets `/` for local or other static hosting.
