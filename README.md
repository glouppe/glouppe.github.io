# glouppe.github.io

Personal website of Gilles Louppe, served at <https://glouppe.github.io>.
The theme is adapted from [al-folio](https://github.com/alshedivat/al-folio) (MIT licence, see `LICENSE`).

- Content: `_pages/` (about, people, publications, teaching, MSc topics) and `_news/`.
- Look: `_sass/_notebook.scss`; landing-page hero in `assets/js/hero.js`.
- Local preview: `docker compose up`, then open <http://localhost:8080>.
- Deployment: pushing to `main` builds the site into the `gh-pages` branch (`.github/workflows/deploy.yml`).
