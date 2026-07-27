# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] — 2026-07-27

### Added

- Separate `src/styles/themes.css` — centralized CSS custom properties for light and dark themes
- Comprehensive CSS variable system (40+ tokens) covering backgrounds, text, borders, inputs, buttons, badges, dividers, rings, and shadows

### Changed

- Migrated all UI components from Tailwind `dark:` classes to pure CSS variables — theme switching is instant with zero class toggling overhead
- Theme toggle now reads/writes `<html>.dark` class only; no `dark:` variants needed in any component

### Removed

- All `dark:` Tailwind class modifiers across every component — themes are now CSS-var-driven
- Unused CSS variables `--btn-secondary-hover-border` and `--btn-secondary-hover-text` from theme definitions
- `.env.example` — no environment variables are consumed by the application
- `.npmrc` — replaced by `pnpm-workspace.yaml` with proper `allowBuilds` and `overrides` config
- "Keyboard Shortcuts" section from README — feature was documented but never implemented

### Fixed

- Zero FOUC on hard reload — inline script sets `.dark` before first paint, all colors come from CSS variables

## [1.0.0] — 2026-07-27

### Added

- Professional empty-state card with document icon, title, and description
- Loading spinner on Generate button during UUID generation

### Changed

- Standardized all button heights to 36px (h-9) with consistent padding and styling
- Extended copy feedback timeout from 1.5s to 2s
- Reduced UUID card vertical padding for tighter spacing
- Improved UUID card hover effect with subtle active scale
- Card entrance animation now uses staggered delay per row
- Updated project version to 1.0.0

### Fixed

- Theme toggle hydration: ThemeProvider now syncs state from DOM after hydration, preventing inline script's dark class from being overwritten
- Quantity input no longer displays leading zeros (e.g., "09" → "9")
- `copySingle`, `copyAll`, `exportTxt`, `exportCsv` callbacks now have stable references using refs, eliminating cascading re-renders of all UUID cards on every generation
- UUID card text now uses `break-all` to prevent overflow on small viewports

### Performance

- `copySingle` callback is now stable (empty deps) via ref pattern, preventing all UUID cards from re-rendering on each UUID array change
- UUID cards use `useCallback` for the copy handler to maintain memoization

### Accessibility

- Added `aria-label` on Generate button (descriptive of current state)
- Added `aria-label` on Clear button
- Added `aria-live="polite"` to results count area

### Added

- Version 1.0.0 release — production-ready commercial release

### Changed

- Updated project version to 1.0.0
- Updated all version references to 1.0.0
- Cleaned up repository for final packaging

### Security

- Clarified security disclosure channel in SECURITY.md

## [0.5.0] — 2026-07-27

### Added

- Professional README with full feature overview, requirements, quick start, usage, project structure, browser support, and FAQ
- Comprehensive INSTALL guide with troubleshooting section
- FAQ.md — frequently asked questions
- SUPPORT.md — support channels and response policy
- CONTRIBUTING.md — contribution guidelines
- CODE_OF_CONDUCT.md — contributor behavior standards
- SECURITY.md — vulnerability reporting process
- LICENSE — commercial use placeholder
- `docs/marketplace/` — Codester marketplace listing assets
  - `description.md` — product description copy
  - `features.md` — detailed feature breakdown
  - `requirements.md` — technical requirements
  - `installation.md` — Marketplace-specific install guide
  - `faq.md` — marketplace FAQ
  - `release-notes.md` — version history for marketplace
  - `support.md` — marketplace support policy
  - `demo.md` — Vercel deployment guide
- `docs/marketplace/assets/` — asset placeholders (banner, icon, screenshots)

### Changed

- Updated project version to 0.5.0
- Updated all version references (`package.json`, `appVersion.ts`, headers, footers)
- Replaced generic "All rights reserved" with commercial license placeholder
- Converted CHANGELOG to Keep a Changelog format with release dates

## [0.4.0] — 2026-07-27

### Added

- Export UUIDs as TXT file download
- Export UUIDs as CSV file download with header row
- Meaningful filenames using date-based format (`uuids-YYYY-MM-DD`)
- Reusable export utilities (`exportTxt`, `exportCsv`, `downloadFile`, `formatFilename`)
- Clipboard fallback using `document.execCommand("copy")` when Clipboard API is unavailable
- Duplicate generation click guard to prevent rapid-click issues
- Export TXT and Export CSV buttons in results section
- `ActionButton` reusable styling component

### Changed

- Updated project version to 0.4.0

## [0.3.0] — 2026-07-27

### Added

- Dark mode with system preference detection and manual theme toggle
- Theme persistence using localStorage
- Professional header with title and version badge
- Card container for generator controls
- Empty state UI when no UUIDs are generated
- Smooth fade-in animations on generated UUIDs
- Inline SVG icons for theme toggle
- `animate-fade-in` utility animation

### Changed

- Refactored page layout with Header, main content, and Footer components
- Replaced media query dark mode with class-based `.dark` toggle
- Upgraded root layout with `suppressHydrationWarning` and inline theme script
- Improved VersionSelector with hover states and focus ring
- Improved QuantityInput with error styling and focus ring
- Improved CopyButton with green success state and focus ring
- Improved UUIDCard with hover effect and shadow
- Improved UUIDList with fade-in animation per item
- Updated all buttons with consistent rounded-lg and transition durations
- Updated project version to 0.3.0

## [0.2.0] — 2026-07-27

### Added

- UUID generation engine supporting versions 1, 4, and 7
- Bulk UUID generation (1–100 UUIDs)
- UUID version selector (radio group)
- Quantity input with real-time validation
- Generate and Clear buttons
- Copy individual UUID to clipboard
- Copy all UUIDs to clipboard
- Functional application page with header, main content, and footer
- `uuid` library dependency (RFC 9562)

### Changed

- Replaced placeholder landing page with functional UUID generator
- Updated project version to 0.2.0

## [0.1.0] — 2026-07-27

### Added

- Project foundation with Next.js, TypeScript, and Tailwind CSS
- Landing page with basic layout
- ESLint and Prettier configuration
- GitHub Actions CI workflow
- Project documentation
