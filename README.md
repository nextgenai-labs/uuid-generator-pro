# UUID Generator Pro

A fast, modern, and customizable UUID Generator built with Next.js and TypeScript.

---

## Current Features

- **UUID v1** — Time-based UUID generation
- **UUID v4** — Random UUID generation
- **UUID v7** — Unix Epoch timestamp + random UUID generation
- **Bulk generation** — Generate 1–100 UUIDs at once
- **Copy individual UUID** — Copy a single UUID to your clipboard
- **Copy all UUIDs** — Copy all generated UUIDs at once (newline-separated)
- **Real-time quantity validation** — Validates input range before generation

## Tech Stack

- **Next.js** — React framework with App Router
- **React** — UI library
- **TypeScript** — Type-safe JavaScript
- **Tailwind CSS** — Utility-first styling
- **uuid** — RFC 9562 UUID library
- **ESLint** — Code quality
- **Prettier** — Code formatting

## Getting Started

See [INSTALL.md](./INSTALL.md) for setup instructions.

## Supported UUID Versions

| Version | Description                   | Library Support |
| ------- | ----------------------------- | --------------- |
| v1      | Time-based (MAC + timestamp)  | ✓               |
| v4      | Random                        | ✓               |
| v7      | Unix Epoch timestamp + random | ✓               |

All versions are provided by the [uuid](https://www.npmjs.com/package/uuid) package (RFC 9562).

## License

All rights reserved. This project is not open source.
