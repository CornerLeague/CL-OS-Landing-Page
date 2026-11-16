# Corner League OS landing page

The marketing site for Corner League OS, league management software for organizers.

It is a static site with no build step: open `index.html` in a browser, or serve the folder with any static host.

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. (Opening the file directly also works, but some browsers block video autoplay from `file://`.)

## Deploy

Any static host works with the repository root as the site root:

- **GitHub Pages:** Settings → Pages → Deploy from a branch → `main` / root.
- **Netlify or Vercel:** import the repo, leave the build command empty and the output directory as the root.

## What's in here

| Path | Contents |
| --- | --- |
| `index.html` | Page shell: meta tags, fonts, scripts |
| `assets/styles.css` | All styles, including tablet and phone layouts |
| `assets/app.js` | Page markup and interactive behavior (live draft board, scoreboard, six-places board, FAQ, videos) |
| `assets/vendor/preact.min.js` | Preact 10.24.3, a small UI library the page runs on (MIT license) |
| `media/` | Hero and feature videos, posters, media images, favicon |

## Before launch

- Point the **Get Started**, **Create your league** and **Sign in** buttons at the real sign-up and sign-in pages (they are `href="#"` today; search `app.js` for `"href":"#"`).
- Fill in the FAQ answers marked in yellow brackets, then turn the highlight off by setting `highlightPlaceholders` to `false` at the bottom of `app.js`.
