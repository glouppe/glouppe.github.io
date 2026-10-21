# CLAUDE.md — glouppe.github.io

Personal academic website of Gilles Louppe (ULiège, Science with AI Lab). Jekyll site
adapted from al-folio; served at https://glouppe.github.io.

## Repository and deployment

- Push to the **`website`** remote (`git push website main`, = github.com/glouppe/glouppe.github.io).
  `origin` is the upstream al-folio template and rejects pushes. Local `main` tracks `origin/main`,
  so a bare `git push` fails.
- Pushing to `main` runs `.github/workflows/deploy.yml` ("Deploy site"), which builds into the
  `gh-pages` branch; GitHub Pages then serves it (`pages-build-deployment`). It is the only workflow,
  on purpose. Check with `gh run list -R glouppe/glouppe.github.io`.
- Commit and push only when Gilles asks. Untracked `scripts/` and `_data/publications.json` are his
  own work in progress (ORCID fetch / auto-rendered publication list): never commit or delete them.

## Local build and preview

Native bundler lacks permissions; use the al-folio docker image (≈3 min per build):

```
docker run --rm -v $PWD:/srv/jekyll -v <outdir>:/out -e JEKYLL_ENV=production \
  --entrypoint bash amirpourmand/al-folio:v0.14.6 -c "cd /srv/jekyll && bundle exec jekyll build -d /out"
```

Serve `<outdir>` with `python3 -m http.server` and screenshot with headless Chrome
(`google-chrome --headless=new --screenshot=... --virtual-time-budget=...`). Headless Chrome reports
no hover; to see a page scrolled, load it in an iframe and `scrollTo` from a helper page.
Interactive preview for Gilles: `docker compose up` → http://localhost:8080.

## Content conventions

- **News**: `_news/announcement_NNN.md`, front matter `layout: post`, `date: YYYY-MM-DD 09:00:00+0100`,
  `inline: true`, `related_posts: false`; one or two plain sentences. Date = when it happened.
- **Publications**: hand-curated in `_pages/publications.md` (not the bib; jekyll-scholar is unused).
  One entry per paragraph:
  ```
  **Title**
  [paper](url){:.pub-link} [code](url){:.pub-link}<br>
  Full Name, <span class="author-me">Gilles Louppe</span>, Full Name.<br>
  <span class="badge badge-{preprint|conference|workshop|journal|misc}">Venue</span>
  ```
  Year headings are `## YYYY` followed by `{:.pub-year}` (sticky). Within a year, accepted papers come
  before pre-prints. Take full author names from arXiv/Crossref, not Google Scholar initials.
  Conference abstracts, theses of students, software releases and lecture notes are left out.
- **People**: `_pages/sail.md`, one `person.liquid` include per member; `url=` adds the 🏠 link.
  Portraits in `assets/img/faces/` (square JPEG, 720 px).
- **Writing voice**: compact, direct, no marketing (see the `louppe-prose` skill for longer text).

## Look ("lab notebook" skin)

- All custom styling is in `_sass/_notebook.scss` (imported last in `assets/css/main.scss`).
  IBM Plex Sans/Mono, `#`/`##` heading prefixes, ISO dates, white/black with one blue accent,
  colour-coded venue badges (Gilles likes them), dark mode via `html[data-theme="dark"]`.
- Homepage hero: `_layouts/about.liquid` + `assets/js/hero.js`. A Kolmogorov flow (512² grid, Re 4000)
  shown block-averaged as an observation y; a cursor lens reveals x with a fading trail; legend top
  right. Clips `assets/video/flow-{dark,light}.mp4` use the icefire / vlag colormaps.
- **Minifier pitfalls** (the build minifies CSS): white `rgba(255,255,255,a)` becomes invalid `hsla()`
  → write colours through `unquote("rgba(...)")`; spaces around `+` inside `calc()` are dropped →
  fold constants in Sass (`calc(50vw - #{$w / 2 - 15px})`). Always check the built `main.css`.
- Footer (`_includes/footer.liquid`): text left, small social icons right (order = `_data/socials.yml`).

## Tried and dropped

- Animated per-paper thumbnails on the publications page (toy reimplementation of each paper's idea,
  looping clip next to the entry): built for Predict-Project-Renoise in Oct 2026, Gilles found it did
  not look good and asked for a full rollback. Do not reintroduce without being asked.

## Compute

`ssh alan`: SLURM cluster (`sbatch`/`srun`, partitions main/cpu, nodes compute-01..15 with 3–8 GPUs
each), `uv` available, 11 TB home. Any model training for the site runs there, not on the laptop
(Gilles' instruction); run it with `srun --gres=gpu:1`, using a uv env with the CUDA build of torch.

## Related folders (do not modify unless asked)

Talks live in `~/Documents/research/talks/` (e.g. `2026 - AI4Sci Mainz/`, source of the hero flow).
