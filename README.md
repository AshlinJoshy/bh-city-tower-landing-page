# City Tower — landing page

A landing page for the **City Tower** development on Sheikh Zayed Road,
built from the [Figma design](https://www.figma.com/design/EjgydIbUMYLXYtgKfCHvxM/City-Tower?node-id=6001-625).

Stack: **Vite + React + TypeScript + Tailwind CSS**.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in /dist
npm run preview  # preview the production bundle
```

## What's where

```
public/
├─ fonts/        ← drop PP Museum + Graphik woff2 files here (see fonts/README.md)
└─ images/       ← placeholder SVGs; swap with real Figma exports (see IMAGES_TO_REPLACE.md)
scripts/
└─ make-placeholders.mjs   ← regenerate placeholder SVGs
src/
├─ components/   ← one .tsx per page section
├─ App.tsx       ← page composition
├─ main.tsx      ← React entrypoint
└─ index.css     ← Tailwind + @font-face declarations
```

## Next steps

1. **Real images** — see `IMAGES_TO_REPLACE.md` for which Figma layer
   maps to which placeholder file.
2. **Real fonts** — see `public/fonts/README.md` for filenames.
3. **Animations** — to be defined.
