<!-- a8806eab-4ecc-4e7e-b1a0-7df5c8e2cd1b 2b4a44ab-8146-4afc-a05b-b47932bedb14 -->
# Convert Django Site to Static and Deploy to GitHub Pages

## Target output structure

- Root files: `index.html`, `projects.html`, optional per-project pages under `projects/`
- Keep assets: `static/` and `media/` as-is for images, CSS, JS
- Add root files: `.nojekyll`, optional `CNAME`, `404.html`

## Map templates → static HTML

- `templates/homepage.html` → `index.html`
- `templates/projects.html` → `projects.html`
- Optional: `templates/project_detail.html` → `projects/<slug>.html` for each project you want public

## Flatten Django templating

- Remove `{% load static %}`, `{% block %}`/`{% endblock %}`, `{% extends %}`
- Merge `templates/base.html` head/nav/footer into each page so each is a complete HTML document

Example replacements:

```html
<!-- CSS: from -->
<link rel="stylesheet" href="{% static 'css/main.css' %}">
<!-- to -->
<link rel="stylesheet" href="./static/css/main.css">

<!-- Links: from -->
<a href="{% url 'projects' %}">Projects</a>
<!-- to -->
<a href="./projects.html">Projects</a>

<!-- Images: from -->
<img src="{% static 'images/coolpic.jpeg' %}" alt="...">
<!-- to -->
<img src="./static/images/coolpic.jpeg" alt="...">
```

## Assets and paths

- Use relative paths (e.g., `./static/...`, `./media/...`) to work both locally and on GitHub Pages project URLs
- Reuse compiled CSS in `static/css/*.css` (skip SCSS for now). If you later want SCSS in CI, we can add a small Action

## Contact form (optional)

- Replace Django form action with a third‑party endpoint (Formspree/Getform). Example:
```html
<form action="https://formspree.io/f/yourid" method="POST">
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```


## 404 and deep links

- Add a simple `404.html` so GitHub Pages serves it for bad/deep links
- Keep all links relative; avoid leading slashes

## GitHub Pages deployment

1. Create a new repo (e.g., `benfolio-static`) and copy the static output: `index.html`, `projects.html`, optional `projects/`, plus `static/` and `media/`
2. Add an empty `.nojekyll` file at the repo root
3. Commit and push to `main`
4. Repo Settings → Pages → Build and deployment → Source: `Deploy from a branch`; Branch: `main` (root)
5. Wait for publish; test URLs. If using a custom domain: add `CNAME` file with domain and set DNS `CNAME` to `username.github.io`

## Optional enhancements (later)

- GitHub Action to compile SCSS to `static/css/`
- Move project data to a small `projects.json` and render with JS for easier maintenance

### To-dos

- [ ] Create new static repo structure with root HTML and assets
- [ ] Convert templates/homepage.html to index.html with base merged
- [ ] Convert templates/projects.html to projects.html with base merged
- [ ] Create optional per-project pages under projects/ with content
- [ ] Copy static/ and media/ folders; remove unused server files
- [ ] Replace Django tags/URLs with relative asset and page paths
- [ ] Wire contact form to third-party endpoint (optional)
- [ ] Add 404.html and .nojekyll at repo root
- [ ] Push to GitHub and enable Pages from main root