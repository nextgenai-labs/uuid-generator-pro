# UUID Generator Pro

> A fast, modern, and developer-friendly UUID generator built with Next.js and TypeScript. Generate UUID v1, v4, and v7 with bulk support, clipboard integration, and file export.

---

## Features

- **UUID v1, v4, v7** — Generate UUIDs across three standard versions
- **Bulk generation** — Generate 1–100 UUIDs in a single click
- **Export to TXT / CSV** — Download results with date-based filenames
- **Clipboard integration** — Copy single or all UUIDs with success feedback
- **Dark mode** — Light and dark themes with system preference detection and zero FOUC
- **Responsive design** — Optimized for mobile, tablet, and desktop
- **Keyboard accessible** — Full keyboard navigation with visible focus rings
- **Rapid-click protection** — Built-in guard against duplicate generation

## Requirements

| Dependency | Minimum Version |
| ---------- | --------------- |
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

See [INSTALL.md](./INSTALL.md) for full setup instructions.

## Usage

1. **Select a UUID version** — Choose v1 (time-based), v4 (random), or v7 (Unix Epoch + random).
2. **Set quantity** — Enter a number between 1 and 100.
3. **Click Generate** — UUIDs are displayed instantly.
4. **Copy or export** — Copy individual UUIDs, copy all, or download as TXT / CSV.

## Supported UUID Versions

| Version | Description                   | Library Support |
| ------- | ----------------------------- | --------------- |
| v1      | Time-based (MAC + timestamp)  | ✓               |
| v4      | Random                        | ✓               |
| v7      | Unix Epoch timestamp + random | ✓               |

All versions are provided by the [uuid](https://www.npmjs.com/package/uuid) package (RFC 9562).

## Export Formats

| Format | Extension | Content                          |
| ------ | --------- | -------------------------------- |
| TXT    | `.txt`    | One UUID per line                |
| CSV    | `.csv`    | Header row `UUID` + one per line |

Filenames follow the pattern `uuids-YYYY-MM-DD.{ext}`.

## Project Structure

```
uuid-generator-pro/
├── public/                  # Static assets
├── src/
│   ├── app/                 # Next.js App Router pages and layout
│   ├── components/
│   │   ├── ui/              # Reusable UI primitives (Header, Footer, Card, etc.)
│   │   └── uuid/            # UUID-specific components
│   ├── config/              # Application configuration
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Core libraries and theme
│   ├── styles/              # CSS theme variables (light + dark)
│   └── utils/               # Utility functions (clipboard, export)
├── docs/
│   └── marketplace/         # Marketplace listing assets
├── .github/workflows/       # CI pipeline
├── CHANGELOG.md
├── INSTALL.md
├── README.md
├── LICENSE
└── package.json
```

## Browser Support

| Browser          | Supported |
| ---------------- | --------- |
| Chrome (latest)  | ✓         |
| Firefox (latest) | ✓         |
| Safari (latest)  | ✓         |
| Edge (latest)    | ✓         |

## FAQ

See [FAQ.md](./FAQ.md) for frequently asked questions.

## Troubleshooting

See [INSTALL.md](./INSTALL.md) for setup troubleshooting.

## License

This project is licensed for commercial use. See the [LICENSE](./LICENSE) file for details.

## Support

See [SUPPORT.md](./SUPPORT.md) for support options.

---

**Company:** NextGenAI Labs  
**Version:** 1.0.0  
**Marketplace:** [Codester](https://www.codester.com)
