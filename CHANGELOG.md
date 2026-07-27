# Changelog

## 0.4.0 (Unreleased)

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

## 0.3.0 (Unreleased)

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

## 0.2.0 (Unreleased)

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

## 0.1.0 (Unreleased)

### Added

- Project foundation with Next.js, TypeScript, and Tailwind CSS
- Landing page with basic layout
- ESLint and Prettier configuration
- GitHub Actions CI workflow
- Project documentation
