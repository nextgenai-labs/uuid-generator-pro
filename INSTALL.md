# Installation Guide

## Requirements

- **Node.js** 20.x or later
- **pnpm** 9.x or later

Verify your environment:

```bash
node --version
pnpm --version
```

## Clone or Extract

### From Git

```bash
git clone https://github.com/nextgenai-labs/uuid-generator-pro.git
cd uuid-generator-pro
```

### From Codester ZIP

```bash
unzip uuid-generator-pro.zip
cd uuid-generator-pro
```

## Install Dependencies

```bash
pnpm install
```

## Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The application supports hot module replacement — changes to source files are reflected instantly.

## Production Build

```bash
pnpm build
```

Output is written to the `.next` directory. Preview the production build locally:

```bash
pnpm start
```

## Available Commands

| Command       | Description               |
|---------------|---------------------------|
| `pnpm dev`    | Start development server  |
| `pnpm build`  | Create production build   |
| `pnpm start`  | Start production server   |
| `pnpm lint`   | Run ESLint                |
| `pnpm format` | Format code with Prettier |

## Deploy to Vercel

UUID Generator Pro can be deployed to Vercel with zero configuration:

1. Push the repository to GitHub, GitLab, or Bitbucket
2. Import the project in Vercel
3. Vercel auto-detects Next.js — no configuration needed
4. Click Deploy

No environment variables are required.

See [docs/marketplace/demo.md](./docs/marketplace/demo.md) for detailed deployment instructions.

## Troubleshooting

### `pnpm install` fails

Ensure you are using a supported version of Node.js and pnpm. Clear caches and retry:

```bash
pnpm store prune
pnpm install --force
```

### Build fails with missing modules

Delete `node_modules` and the lockfile, then reinstall:

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Clipboard not working

The application falls back to `document.execCommand("copy")` if the Clipboard API is unavailable. If copying still fails, ensure your browser supports clipboard operations and that the page is served over HTTPS (or `localhost` for development).

### Port already in use

Specify a different port:

```bash
pnpm dev -- --port 3001
```

## Support

See [SUPPORT.md](./SUPPORT.md) or open an issue on the [GitHub repository](https://github.com/nextgenai-labs/uuid-generator-pro/issues).
