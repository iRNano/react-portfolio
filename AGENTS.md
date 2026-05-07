# AGENTS.md

## Cursor Cloud specific instructions

### Overview

This is a simple React SPA (Create React App) portfolio template. Single `package.json` at root, no backend, no database, no Docker.

### Node.js version

Node.js 20 LTS is required. It is installed via nvm and set as the default (`nvm alias default 20`). Corepack is enabled.

### OpenSSL compatibility

react-scripts 3.4.1 uses an older version of webpack that is incompatible with Node.js 17+ OpenSSL defaults. The environment variable `NODE_OPTIONS=--openssl-legacy-provider` is set in `~/.bashrc` and is required for `npm start`, `npm run build`, and `npm test` to work. If you get `ERR_OSSL_EVP_UNSUPPORTED`, ensure this env var is set.

### Key commands

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Dev server | `npm start` (port 3000) |
| Build | `npm run build` |
| Test | `CI=true npm test -- --passWithNoTests` |
| Lint | `npx eslint src/` |

### Notes

- There are no test files in the repo; `--passWithNoTests` is needed to avoid a non-zero exit code.
- The dev server hot-reloads on file changes.
- Bootstrap 4 CSS is loaded via CDN in `public/index.html`; styling requires internet access.
