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
- **Dark mode** — Light and dark theme with system preference detection and manual toggle
- **Responsive design** — Optimized for mobile, tablet, desktop, and large screens
- **Keyboard accessible** — Full keyboard navigation with visible focus indicators
- **Polished UI** — Smooth transitions, hover effects, professional color palette

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

## Theme

The application supports light and dark themes. It respects the system preference on first load and persists the user's choice in localStorage. Toggle the theme using the sun/moon icon in the header.

## License

All rights reserved. This project is not open source.
