# Marketplace Assets

This directory contains assets for the Codester marketplace listing.

## Included Assets

| Asset | Format | Description |
|-------|--------|-------------|
| `banner.svg` | SVG | Main listing banner (1600×800) |
| `icon.svg` | SVG | Application icon (200×200) |
| `home-light.png` | PNG | Home page in light theme |
| `home-dark.png` | PNG | Home page in dark theme |
| `uuid-v1.png` | PNG | UUID v1 generation |
| `uuid-v4.png` | PNG | UUID v4 generation |
| `uuid-v7.png` | PNG | UUID v7 generation |
| `export-features.png` | PNG | Export and copy features |
| `empty-state.png` | PNG | Empty state display |

## Guidelines

- Use clear, high-contrast imagery.
- Convert SVGs to PNG at the required dimensions before uploading to Codester.
- Keep file sizes small for fast page loading.

## Conversion Notes

To convert SVGs to PNG for Codester:

```bash
# Banner (requires librsvg or Inkscape)
rsvg-convert -w 1600 -h 800 banner.svg -o banner.png

# Icon
rsvg-convert -w 200 -h 200 icon.svg -o icon.png
```
