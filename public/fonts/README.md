# Custom fonts

This folder holds the licensed font files used by the page. Every face
is wired through `@font-face` in `src/index.css`, so adding a new
weight is just two steps:

1. Drop the file in here.
2. Add a `@font-face` block in `src/index.css` pointing to it.

## What's currently wired up

| Family | Weight | Style | File |
| --- | --- | --- | --- |
| PP Museum | 100 (Thin) | normal | `PPMuseum-Thin.otf` |
| PP Museum | 300 (Light) | normal | `ppmuseum-light.otf` |
| PP Museum | 300 (Light) | italic | `ppmuseum-lightitalic.otf` |
| PP Museum | 400 (Regular) | normal | `ppmuseum-regular.otf` |
| PP Museum | 400 (Regular) | italic | `ppmuseum-regularitalic.otf` |
| PP Museum | 800 (Ultrabold) | normal | `ppmuseum-ultrabold.otf` |
| Graphik | 100 (Thin) | normal | `Graphik-Thin.ttf` |
| Graphik | 200 (Extralight) | normal | `Graphik-Extralight.ttf` |
| Graphik | 300 (Light) | normal | `Graphik-Light.otf` (`+ .ttf` fallback) |
| Graphik | 300 (Light) | italic | `Graphik-LightItalic.ttf` |
| Graphik | 400 (Regular) | normal | `Graphik-Regular.otf` (`+ .ttf` fallback) |
| Graphik | 400 (Regular) | italic | `Graphik-RegularItalic.ttf` |
| Graphik | 500 (Medium) | normal | `Graphik-Medium.otf` (`+ .ttf` fallback) |
| Graphik | 600 (Semibold) | normal | `Graphik-Semibold.ttf` |
| Graphik | 700 (Bold) | normal | `Graphik-Bold.ttf` |
| Graphik | 900 (Black) | normal | `Graphik-Black.ttf` |

## How they're used

- `font-family: 'PP Museum'` (Tailwind: `font-display` or the
  `.font-display` utility) — large display headings, hero copy.
- `font-family: 'Graphik'` (Tailwind default `font-sans`, also the
  body default) — paragraphs, nav, buttons, lists.

## Fallbacks

If a font file 404s, the browser falls back to:
- **Cormorant Garamond** for PP Museum
- **Inter** for Graphik

both loaded from Google Fonts in `index.html`.
