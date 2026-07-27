# UUID Generator Pro

A fast, modern, and customizable UUID Generator built with Next.js and TypeScript.

---

## Current Features

### UUID Generation

- **UUID v1** — Time-based UUID generation
- **UUID v4** — Random UUID generation
- **UUID v7** — Unix Epoch timestamp + random UUID generation
- **Bulk generation** — Generate 1–100 UUIDs at once
- **Duplicate click prevention** — Rapid-click guard on generation

### Export

- **Export as TXT** — Download UUIDs as a plain text file (`.txt`)
- **Export as CSV** — Download UUIDs as a CSV file (`.csv`) with header row
- **Meaningful filenames** — Files are named `uuids-YYYY-MM-DD.txt` / `uuids-YYYY-MM-DD.csv`

### Clipboard

- **Copy single UUID** — Copy any individual UUID to clipboard
- **Copy all UUIDs** — Copy all generated UUIDs at once (newline-separated)
- **Copy success feedback** — Visual "Copied!" confirmation
- **Graceful fallback** — Falls back to `document.execCommand("copy")` if the Clipboard API is unavailable

### Validation

- **Real-time quantity validation** — Validates input range (1–100) before generation
- **Clear error messages** — Descriptive validation messages

### User Interface

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

## Export Formats

| Format | Extension | Content                          |
| ------ | --------- | -------------------------------- |
| TXT    | `.txt`    | One UUID per line                |
| CSV    | `.csv`    | Header row `UUID` + one per line |

## Theme

The application supports light and dark themes. It respects the system preference on first load and persists the user's choice in localStorage. Toggle the theme using the sun/moon icon in the header.

## License

All rights reserved. This project is not open source.
