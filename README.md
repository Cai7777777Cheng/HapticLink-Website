# HapticLink

Project detail page for HapticLink.

Helps visually impaired individuals experience mainstream visual games.

Project site: [https://cai7777777cheng.github.io/HapticLink-Website/](https://cai7777777cheng.github.io/HapticLink-Website/)

## Local

```bash
npm install
npm run dev
```

Dev server: [http://127.0.0.1:4732](http://127.0.0.1:4732).

```bash
npm run build
npm run preview
```

Preview: [http://127.0.0.1:4733](http://127.0.0.1:4733). The build is in `dist/`.

## GitHub Pages

- User site `https://<user>.github.io/`: `npm run build`.
- Project site `https://<user>.github.io/HapticLink-Website/`:

```bash
VITE_BASE_PATH=/HapticLink-Website/ npm run build
```

`vite.config.ts` reads `VITE_BASE_PATH` and copies `index.html` to `404.html` so a project-site refresh still opens the page. `.github/workflows/pages.yml` builds with that base when GitHub Pages is enabled.

## Photos and copy

The hero is `public/hero.jpg`, shown in full at its own aspect ratio. Product bands use `public/board-12.png`, `board-13.png`, `board-14.png`, and `board-15.png`. Wearing guidance uses crops of the product photos on `board-10.png`.
