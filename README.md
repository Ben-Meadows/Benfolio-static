## Static Portfolio (GitHub Pages)

This is a fully static export of the Django portfolio. It uses plain HTML/CSS/JS with relative paths so it works locally and on GitHub Pages.

### Structure
- Root pages: `index.html`, `projects.html`, `contact.html`
- Optional case studies: `projects/*.html`
- Assets: `static/` and `media/` preserved
- Support files: `.nojekyll`, `404.html`

### Local preview
- Using Python (Windows PowerShell):
  ```powershell
  py -m http.server 8080
  ```
  Then open `http://localhost:8080/`

- Or using Node:
  ```powershell
  npx serve@latest -s .
  ```

### Contact form
This site is static; use a third‑party form backend (e.g., Formspree).
- Replace the placeholder in `contact.html`:
  ```html
  <form action="https://formspree.io/f/yourid" method="POST">
  ```
  with your actual Formspree endpoint ID.

### Deploy to GitHub Pages
1. Create a new repo (e.g., `benfolio-static`) and copy this entire folder.
2. Ensure `.nojekyll` exists at the repository root.
3. Commit and push to `main`.
4. In GitHub: Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` (root).
5. After publish, your site will be live. Add a `CNAME` file if using a custom domain.

### Notes
- All links/assets use relative paths (`./static/...`, `./media/...`) to work from both root and subpaths.
- The original Django templates are kept under `templates/` for reference. They’re not used by this static build.


