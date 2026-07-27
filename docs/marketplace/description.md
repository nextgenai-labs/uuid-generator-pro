# Product Description

## Short Description

A fast, modern UUID generator built with Next.js and TypeScript. Generate UUID v1, v4, and v7 with bulk support, one-click clipboard copy, and TXT/CSV export. Light and dark themes included.

---

## Overview

UUID Generator Pro is a professional web application for generating universally unique identifiers (UUIDs). Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4, it delivers a clean, responsive interface for generating UUIDs in versions 1, 4, and 7 — all running entirely in the browser with zero server dependencies.

Whether you are a developer seeding test databases, a QA engineer generating test data, or a system administrator assigning identifiers, UUID Generator Pro streamlines your workflow with bulk generation, one-click clipboard operations, and file export.

---

## Features

### UUID Generation

- **UUID v1** — Time-based UUID using MAC address and timestamp (RFC 9562)
- **UUID v4** — Cryptographically random UUID — the most common variant
- **UUID v7** — Unix Epoch timestamp with random suffix — time-ordered, privacy-safe
- **Bulk generation** — Generate 1–100 UUIDs in a single click
- **Rapid-click protection** — Built-in throttle prevents accidental duplicate generation

### Export & Clipboard

- **Copy single UUID** — One click copies any individual UUID to the clipboard
- **Copy all UUIDs** — Copy all generated UUIDs at once (newline-separated)
- **TXT export** — Download UUIDs as a plain text file, one per line
- **CSV export** — Download UUIDs with a header row for spreadsheet import
- **Meaningful filenames** — Date-based naming: `uuids-YYYY-MM-DD.{ext}`
- **Visual feedback** — "Copied!" confirmation appears momentarily
- **Graceful fallback** — Works even when the Clipboard API is unavailable

### User Interface

- **Light and dark themes** — Toggle manually or follow system preference with zero flash of unstyled content (FOUC)
- **Theme persistence** — Choice saved to localStorage and restored before first paint
- **Responsive layout** — Fully optimized for mobile, tablet, desktop, and large screens
- **Empty state** — Clear guidance shown when no UUIDs have been generated
- **Fade-in animations** — Smooth staggered transitions for generated results
- **Professional typography** — Clean, readable system font stack

### Accessibility

- **Keyboard navigation** — Full keyboard support with visible focus indicators
- **Semantic HTML** — Proper landmarks, headings, and ARIA attributes throughout
- **Screen reader friendly** — Descriptive labels on all interactive elements
- **Color contrast** — Meets WCAG contrast requirements in both light and dark themes
- **Focus rings** — Custom-styled focus indicators using CSS custom properties

### Validation

- **Real-time validation** — Quantity input validated on every keystroke
- **Clear error messages** — Descriptive feedback for out-of-range values
- **Disabled states** — Generate button disabled while input is invalid

### Performance

- **Memoized components** — Optimized rendering with React.memo and useCallback
- **Small bundle size** — Minimal dependencies beyond Next.js and the uuid library
- **Zero external API calls** — All UUIDs generated client-side; no data transmitted

---

## Why Choose UUID Generator Pro

| Benefit | Detail |
|---------|--------|
| Three UUID versions | v1, v4, and v7 — all RFC 9562 compliant |
| Modern tech stack | Next.js 16, React 19, TypeScript, Tailwind CSS v4 |
| Lightweight | ~50 KB of source code; minimal dependencies |
| Privacy-first | Runs entirely in the browser — no data leaves your device |
| Dark mode | Full light/dark theme with instant CSS-var-based switching |
| Professional UI | Clean, accessible, responsive design |
| Easy to deploy | One-click deploy to Vercel or any Node.js host |
| Commercial license | Included with your Codester purchase |

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 + CSS Custom Properties |
| Package Manager | pnpm 9+ |
| UUID Engine | uuid (npm) — RFC 9562 |

---

## Requirements

### Development

| Dependency | Minimum Version |
|------------|----------------|
| Node.js | 20.x |
| pnpm | 9.x |

### Browser Support

| Browser | Supported |
|---------|-----------|
| Chrome | Latest 2 major versions |
| Firefox | Latest 2 major versions |
| Safari | Latest 2 major versions |
| Edge | Latest 2 major versions |

### Hosting

Deploy to any platform that supports Node.js applications: Vercel (recommended), Netlify, Railway, DigitalOcean App Platform, or any VPS with Node.js 20+.

No database required. No external API keys needed.

---

## Quick Start

```bash
# Extract the package
unzip uuid-generator-pro.zip
cd uuid-generator-pro

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Usage

1. **Select a UUID version** — Choose v1 (time-based), v4 (random), or v7 (Unix Epoch + random)
2. **Set quantity** — Enter a number between 1 and 100
3. **Click Generate** — UUIDs are displayed instantly with fade-in animation
4. **Copy or export** — Copy individual UUIDs, copy all, or download as TXT / CSV

---

## Included Files

```
uuid-generator-pro/
├── src/                     # Application source code
│   ├── app/                 # Next.js App Router (pages, layout, styles)
│   ├── components/
│   │   ├── ui/              # Reusable UI primitives
│   │   └── uuid/            # UUID-specific components
│   ├── config/              # Application configuration
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Core libraries and theme
│   ├── styles/              # CSS theme variables
│   └── utils/               # Clipboard and export utilities
├── docs/
│   └── marketplace/         # Listing assets and documentation
├── CHANGELOG.md             # Version history
├── INSTALL.md               # Detailed installation guide
├── FAQ.md                   # Frequently asked questions
├── SUPPORT.md               # Support policy
├── SECURITY.md              # Security policy
├── LICENSE                  # Commercial license
├── README.md                # Project overview
└── package.json
```

---

## Support

- **Response time:** Within 48 hours (business days)
- **Coverage:** Installation assistance, bug verification, usage guidance
- **Channel:** Codester purchase page or GitHub issue tracker

Full details in [SUPPORT.md](./support.md).

---

## Version

**1.0.0** — Production-ready commercial release.

---

## License

This project is a commercial product sold through Codester. A standard commercial license is included with your purchase. Unauthorized copying, distribution, or modification is prohibited.
