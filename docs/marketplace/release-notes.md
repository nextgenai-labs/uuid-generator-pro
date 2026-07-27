# Release Notes

## Version 1.0.1 — 2026-07-27

### Added

- Centralized CSS custom property theme system (`src/styles/themes.css`) with 40+ tokens for light and dark modes
- Comprehensive CSS variable system covering backgrounds, text, borders, inputs, buttons, badges, dividers, rings, and shadows

### Changed

- All components migrated from Tailwind `dark:` classes to pure CSS variables for instant, no-FOUC theme switching
- `pnpm-workspace.yaml` inlined into `package.json` — single-package project simplification

### Removed

- All `dark:` Tailwind class modifiers — themes are fully CSS-var-driven
- `.env.example` (no env vars used)
- `pnpm-workspace.yaml` (single-package project, not needed with pnpm 11)
- Keyboard shortcuts section from README (feature was never implemented)

## Version 1.0.0 — 2026-07-27

### Added

- Production-ready commercial release
- Final quality audit and repository cleanup
- Version 1.0.0 stabilization

## Version 0.5.0 — 2026-07-27

### Added

- Professional documentation suite (README, INSTALL, FAQ, SUPPORT, CONTRIBUTING, CODE_OF_CONDUCT, SECURITY)
- Marketplace listing assets and copy
- Vercel deployment guide
- Commercial license placeholder

### Changed

- Updated all version references to 0.5.0

## Version 0.4.0 — 2026-07-27

### Added

- Export UUIDs as TXT and CSV files
- Clipboard fallback for unsupported browsers
- Duplicate click prevention for Generate button
- Export buttons in results section

## Version 0.3.0 — 2026-07-27

### Added

- Dark mode with theme toggle
- Empty state and card-based layout
- Fade-in animations and polished UI
- Accessibility improvements

## Version 0.2.0 — 2026-07-27

### Added

- UUID generation engine (v1, v4, v7)
- Bulk generation (1–100)
- Clipboard copy (single and all)
- Real-time validation

## Version 0.1.0 — 2026-07-27

### Added

- Project foundation and configuration
- Landing page and basic layout
- CI workflow and documentation
