# UUID Generator Pro

> A fast, modern, and developer-friendly UUID generator built with Next.js and TypeScript. Generate UUID v1, v4, and v7 with bulk support, one-click clipboard copy, and TXT/CSV export.

---

## Features

- **UUID v1, v4, v7** — Generate UUIDs across three RFC 9562 standard versions
- **Bulk generation** — Generate 1–100 UUIDs in a single click
- **Export to TXT / CSV** — Download results with date-based filenames
- **Clipboard integration** — Copy single or all UUIDs with success feedback
- **Dark mode** — Light and dark themes with system preference detection and zero flash of unstyled content (FOUC)
- **Responsive design** — Optimized for mobile, tablet, and desktop
- **Keyboard accessible** — Full keyboard navigation with visible focus rings
- **Rapid-click protection** — Built-in throttle against duplicate generation
- **Privacy-first** — All UUIDs are generated client-side; no data is transmitted

## Requirements

| Dependency | Minimum Version |
|------------|-----------------|
| Node.js    | 20.x            |
| pnpm       | 9.x             |

## Quick Start

```bash
git clone <repository-url>
cd uuid-generator-pro
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

See [INSTALL.md](./INSTALL.md) for full setup and troubleshooting.

## Tests

Run the unit test suite (Vitest covers UUID generation format/version
markers/uniqueness and filename conventions):

```bash
pnpm test
```

CI runs `pnpm lint`, `pnpm test`, and `pnpm build` on every push/PR.

## Usage

1. **Select a UUID version** — Choose v1 (time-based), v4 (random), or v7 (Unix Epoch + random)
2. **Set quantity** — Enter a number between 1 and 100
3. **Click Generate** — UUIDs are displayed instantly with fade-in animation
4. **Copy or export** — Copy individual UUIDs, copy all, or download as TXT / CSV

## UUID Versions

| Version | Description                   | Library Support |
|---------|-------------------------------|-----------------|
| v1      | Time-based (MAC + timestamp)  | ✓               |
| v4      | Random                        | ✓               |
| v7      | Unix Epoch timestamp + random | ✓               |

All versions are provided by the [uuid](https://www.npmjs.com/package/uuid) package (RFC 9562).

## Export Formats

| Format | Extension | Content                          |
|--------|-----------|----------------------------------|
| TXT    | `.txt`    | One UUID per line                |
| CSV    | `.csv`    | Header row `UUID` + one per line |

Filenames follow the pattern `uuids-YYYY-MM-DD.{ext}`.

## Project Structure

```
uuid-generator-pro/
├── public/                  # Static assets
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/
│   │   ├── ui/              # Reusable UI primitives
│   │   └── uuid/            # UUID-specific components
│   ├── config/              # Application configuration
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Core libraries and theme
│   ├── styles/              # CSS custom properties for themes
│   └── utils/               # Clipboard and export utilities
├── docs/
│   └── marketplace/         # Marketplace listing assets
├── CHANGELOG.md
├── INSTALL.md
├── FAQ.md
├── SUPPORT.md
├── SECURITY.md
├── LICENSE
└── package.json
```

## Browser Support

| Browser          | Supported |
|------------------|-----------|
| Chrome (latest)  | ✓         |
| Firefox (latest) | ✓         |
| Safari (latest)  | ✓         |
| Edge (latest)    | ✓         |

## FAQ

See [FAQ.md](./FAQ.md) for frequently asked questions.

## Troubleshooting

See [INSTALL.md](./INSTALL.md) for setup troubleshooting.

## License

This project is a commercial product sold through Codester. See the [LICENSE](./LICENSE) file for details.

## Support

See [SUPPORT.md](./SUPPORT.md) for support options.

---

**Company:** NextGenAI Labs  
**Version:** 1.0.0  
**Marketplace:** [Codester](https://www.codester.com)
