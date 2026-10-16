# NOIRÉ Fragrance House

A multi-page luxury fragrance e-commerce concept built for the FORM11 TECH STUDIOS portfolio. NOIRÉ is fictional; products, pricing, and brand story are concept content. The cart is local-only and checkout does not take payments or place orders.

## Pages
- `index.html` — editorial homepage, featured fragrances, philosophy, campaign, discovery and demo newsletter.
- `shop.html` — eight fragrances, working family filters and sorting.
- `product.html?id=velvet-static` — query-driven product detail pages, size and quantity selection, add-to-bag interaction. Use `?id=the-discovery` for the discovery set.
- `story.html` — brand story and craft narrative.
- `bag.html` — persistent local cart, quantity updates, removal and honest demo checkout state.
- `404.html` — GitHub Pages fallback.

## Run locally
Requires Python 3, no npm install or build step:

```bash
python -m http.server 8000
```

Open `http://localhost:8000/` from this folder.

## GitHub Pages deployment
Create a repository named `noire-fragrance`, then from this folder:

```bash
git init
git add .
git commit -m "Build NOIRÉ fragrance house concept"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/noire-fragrance.git
git push -u origin main
```

In GitHub, go to **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/(root)`, then save. Project pages are compatible with the repository path because internal assets and navigation use relative URLs. Product details use query-string URLs rather than server-side routes, so direct refreshes work on GitHub Pages.

## Asset note
Photography and Google Fonts are remotely hosted and need an internet connection. A CSS/system-font fallback is provided, and product images include an error fallback. Check the browser Network panel after deployment to confirm remote image/font delivery in your hosting environment.

## QA
Run the included static checks with:

```bash
node tests/qa.mjs
```

These checks validate key files, product data, path conventions and core cart logic. They do not replace a live browser audit of third-party image/font requests or real GitHub Pages deployment.
