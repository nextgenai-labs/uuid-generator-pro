# Features

## UUID Generation

- **UUID v1** — Time-based UUID generation using MAC address and timestamp
- **UUID v4** — Cryptographically random UUID generation
- **UUID v7** — Unix Epoch timestamp with random suffix (RFC 9562)
- **Bulk generation** — Generate 1–100 UUIDs in one click
- **Rapid-click protection** — Built-in guard prevents accidental duplicate generation

## Export

- **TXT export** — Download UUIDs as a plain text file (`.txt`), one per line
- **CSV export** — Download UUIDs as a CSV file (`.csv`) with header row
- **Meaningful filenames** — Automatic date-based naming: `uuids-YYYY-MM-DD.{ext}`

## Clipboard

- **Copy single UUID** — Copy any individual UUID to the clipboard
- **Copy all UUIDs** — Copy all generated UUIDs at once (newline-separated)
- **Visual feedback** — "Copied!" confirmation appears momentarily
- **Graceful fallback** — Works even when the Clipboard API is unavailable

## User Interface

- **Light and dark themes** — Manual toggle with system preference detection, zero FOUC, and instant CSS-var-based switching
- **Theme persistence** — Choice saved to localStorage, restored before first paint
- **Responsive layout** — Optimized for mobile, tablet, desktop, and large screens
- **Empty state** — Clear guidance when no UUIDs have been generated
- **Fade-in animations** — Smooth transitions for generated results
- **Professional typography** — Clean, readable font stack

## Accessibility

- **Keyboard navigation** — Full keyboard support with visible focus indicators
- **Semantic HTML** — Proper landmarks, headings, and ARIA attributes
- **Screen reader friendly** — Labels and roles on all interactive elements
- **Color contrast** — Meets WCAG contrast requirements in both themes

## Validation

- **Real-time validation** — Quantity input validated on every change
- **Clear error messages** — Descriptive feedback for out-of-range values
- **Disabled states** — Generate button disabled while input is invalid

## Performance

- **Memoized components** — Optimized rendering with React.memo
- **Efficient state management** — Local React state only; no external state libraries
- **Small bundle size** — Minimal dependencies beyond Next.js and uuid
