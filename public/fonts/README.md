# Custom fonts

Drop the licensed font files here using exactly these names:

```
PPMuseum-Thin.woff2
PPMuseum-Regular.woff2
Graphik-Light.woff2
Graphik-Regular.woff2
```

They are wired up in `src/index.css` via `@font-face`. Until those
files are present, the page falls back to:

- **Cormorant Garamond** (display) — close in feel to PP Museum
- **Inter** (body) — close in feel to Graphik

Both fallbacks are loaded from Google Fonts in `index.html`.
