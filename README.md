# Sameer Walke — Portfolio Website

A modern, responsive personal portfolio built with plain **HTML, CSS, and JavaScript** — no build step, no dependencies. Ready to host free on GitHub Pages and share on LinkedIn.

**Live sections:** About · Skills · Experience · Education · Certifications · Projects · Contact
**Features:** Dark/Light theme (remembered), scroll animations, animated skill bars, CI/CD workflow diagram, fully mobile-responsive.

---

## 📁 Project structure

```
portfolio/
├── index.html        # All page content
├── css/
│   └── style.css     # Styling + light/dark themes
├── js/
│   └── script.js     # Theme toggle, menu, scroll effects, contact form
├── assets/
│   ├── Sameer_Walke_Resume.pdf   # Downloadable resume
│   ├── favicon.svg               # Browser-tab icon (SW monogram)
│   └── profile.jpg               # Your hero photo — ADD THIS FILE
└── README.md
```

> ⚠️ When uploading to GitHub, include the **`assets`** folder too — the "Download Resume" button links to `assets/Sameer_Walke_Resume.pdf`.

---

## 🚀 Put it on GitHub + get a live link (step by step)

### 1. Create the repository
1. Go to <https://github.com/new>
2. Repository name: **`sameerwalke1.github.io`** *(exact — using your username makes the site live at that URL automatically)*
3. Set to **Public** → click **Create repository**.

### 2. Upload the files
Easiest way (no commands):
1. Open your new repo → click **“uploading an existing file”**.
2. Drag the **contents** of the `portfolio` folder in (`index.html`, and the `css`, `js`, and `assets` folders). ⚠️ Upload the files *inside* `portfolio`, not the `portfolio` folder itself — `index.html` must be at the top level of the repo.
3. Click **Commit changes**.

Prefer Git? From inside the `portfolio` folder:

```bash
git init
git add .
git commit -m "Add portfolio website"
git branch -M main
git remote add origin https://github.com/sameerwalke1/sameerwalke1.github.io.git
git push -u origin main
```

### 3. Turn on GitHub Pages
1. Repo → **Settings** → **Pages** (left sidebar).
2. Under **Source**, choose **Deploy from a branch**.
3. Branch: **`main`**, folder: **`/ (root)`** → **Save**.
4. Wait ~1 minute. Your site goes live at:

```
https://sameerwalke1.github.io
```

> If you named the repo something else (e.g. `portfolio`), the link will be
> `https://sameerwalke1.github.io/portfolio/` instead.

---

## 💼 Add it to LinkedIn
1. LinkedIn → **Me** → **View Profile** → **Edit intro** (pencil icon).
2. Scroll to **Website** → **Add website** → paste `https://sameerwalke1.github.io`.
3. Also great: pin it in the **Featured** section (Add profile section → Featured → Add a link) with a short caption like *“My developer portfolio.”*

---

## 🖼️ Add your profile photo
The hero circle shows an "SW" monogram until you add a photo. To use your headshot:
1. Save your photo as **`profile.jpg`** inside the **`assets/`** folder.
2. Refresh — it appears automatically (square images ~500×500px look best; a circle crop is applied for you).

If the file is missing or misnamed, the site safely falls back to the "SW" monogram — nothing breaks.

The **favicon** (browser-tab icon) is `assets/favicon.svg` — an SW monogram in the site's gradient. Replace that file to change it.

---

## 📨 About the contact form
The contact form works out of the box with **no signup or backend** — when a visitor clicks *Send Message*, it opens their email app with the message pre-filled and addressed to you. If nothing opens, the visitor is shown your email to reach you directly.

**Optional upgrade** — to receive form messages as regular emails (without the visitor's email app opening):
1. Sign up free at <https://formspree.io> and create a form; copy your endpoint (e.g. `https://formspree.io/f/abcd1234`).
2. In `index.html`, change the form tag to `<form ... action="https://formspree.io/f/abcd1234" method="POST">`.
3. In `js/script.js`, replace the `window.location.href = mailto;` line with a `fetch(form.action, {...})` submit. (Ask if you'd like this wired up.)

To change where messages go, edit the `RECIPIENT` value near the top of the contact-form section in `js/script.js`.

---

## ✏️ How to update content later
- **Text, links, projects:** edit `index.html`.
- **Colors, fonts, spacing:** edit the `:root` variables at the top of `css/style.css`.
- **Skill bar percentages:** in `index.html`, change `data-level="88"` values.
- After any edit, re-upload the changed file to GitHub (or `git commit` + `git push`). The live site refreshes within a minute.

---

## ✅ Test it locally before uploading
Just double-click `index.html` — it opens in your browser and works fully offline.

---

Built for **Sameer Walke** · Software Test Engineer (SDET) · Nashik, India
