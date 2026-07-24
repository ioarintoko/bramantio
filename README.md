# Bramantio Galih Arintoko — Portfolio

Static site, dark theme, built to match the IBake design mockups. No build step —
plain HTML/CSS/JS, so it deploys straight to GitHub Pages.

## Structure

```
index.html            Home
project.html           Project grid
project-detail.html    Project detail (?id=sportmusik, alyucado, akuntansisma, chatbot, messager, bramantio)
article.html            Article list
article-detail.html    Article detail (?id=player-coach, ocr-pipeline, bramley)
contact.html            Contact form (client-side only for now — no backend yet)
profile.html            About / profile page
css/style.css           All styling + design tokens
js/data.js               Project & article content — edit this to add/update content
js/main.js               Nav + form interaction logic
assets/                  Images (dark illustrations + per-project screenshots)
```

## Preview locally

No install needed. From this folder, run:

```
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Deploy to GitHub Pages

1. Create a new repo (or use an existing one), e.g. `bramantio.github.io` for a
   user-site, or any repo name for a project site.
2. Push these files to the repo root (or to a `docs/` folder — your choice).
3. In the repo: **Settings → Pages → Source** → pick the branch (and `docs/` folder
   if used) → Save.
4. GitHub gives you a live URL in a minute or two.

No `npm install`, no build — it's already deploy-ready.

## Next steps (when you have time/energy)

- Contact form currently just shows a success message locally — no message is
  actually sent anywhere. When the Go backend is live, wire the form's `fetch()`
  call to your API endpoint (see `handleContactSubmit` in `js/main.js`).
- Articles are hardcoded in `js/data.js`. Once the backend + admin panel are live,
  this can be swapped for a fetch call to the articles API instead.
- Add real content for Fashnid / other newer projects once you have screenshots.
