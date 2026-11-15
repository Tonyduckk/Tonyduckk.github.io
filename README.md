# Zhou Yiu Tak — Personal Website

A minimal, monochrome portfolio built with HTML, CSS, and vanilla JavaScript. No build step, package installation, external fonts, or third-party scripts are required.

## Files

- `index.html`: all visible content, contact information, project link placeholders, and a commented-out Work Experience section.
- `styles.css`: responsive layout, typography, color tokens, focus states, reduced-motion support, and print styles.
- `script.js`: active navigation, the current copyright year, and optional email copying.
- `favicon.svg`: a simple monochrome favicon.
- `.nojekyll`: lets GitHub Pages serve the files directly.

## Preview locally

Open `index.html` directly in a browser, or serve the folder with Python:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8000`. The layout, navigation, and coursework disclosure work without JavaScript. The optional Copy email button appears only when the browser provides a secure clipboard API.

## Publish on GitHub Pages

1. Under [Tonyduckk](https://github.com/Tonyduckk), create a repository named `Tonyduckk.github.io` for a personal site. You can also use any repository name for a project site.
2. Upload `index.html`, `styles.css`, `script.js`, `favicon.svg`, and `.nojekyll` to the repository root. `README.md` is optional. The local `tmp/` and `output/` folders are not needed.
3. In the repository, open **Settings → Pages**. Select **Deploy from a branch**, choose your branch (usually `main`), and choose **/ (root)**. Save.
4. GitHub will display the published URL when deployment finishes. With the `Tonyduckk.github.io` repository, the personal site URL will be `https://tonyduckk.github.io/`. A project site uses `https://tonyduckk.github.io/<repository-name>/`.

All asset paths are relative, so both URL formats work. There are no API keys, backend services, or environment variables to configure.

GitHub reference: [Publishing from a branch](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch).

## Customize

### Add project links

Search for `PROJECT LINK` in `index.html`. Each project contains a commented anchor. Replace `YOUR_PROJECT_URL` with your URL, uncomment the anchor, and remove the adjacent `project-status` span. Keep `(ongoing)` in the heading until you want to change the project status.

### Add work experience

Search for `WORK EXPERIENCE` in `index.html`. Remove the outer HTML comment markers around the entire section, replace the example role and bullet points, and uncomment the Experience navigation link near the top of the file. Duplicate the article for more roles. The styling is already included.

### Update your details

- Edit your biography, degree, skills, and coursework directly in `index.html`.
- If you change your email, update both `mailto:` links (beside your name and in Contact), the visible address, and the copy button's `data-email` value together.
- The icons beside your name link directly to your email and GitHub profile. The GitHub icon opens in a new tab.
- The Contact section links to `https://github.com/Tonyduckk`. An optional LinkedIn anchor is commented out beside it.
- Adjust the design tokens at the top of `styles.css` to change the appearance.

## Content notes

Education, languages, and the initial skill list are based on the supplied resume and transcript. Fall 2026 coursework and learning topics were added from the local course materials. Current courses are labeled in progress, and coursework topics are described as learning foundations rather than proficiency claims. Course names and codes appear only in Education, not in Projects.

Both projects remain marked `(ongoing)`. The HKUST Marketplace contribution statement follows the owner's clarification: requirements capture, application architecture design, and testing were part of the owner's work; class and use-case diagrams were created with a teammate, while use-case specifications for Buyer, Seller, and Admin were written independently. Codex handled all code implementation and debugging. Project technology tags describe the application stack rather than claiming personal implementation work.

Course titles for COMP4471 and COMP3111H were checked against the [HKUST CSE course list](https://cse.hkust.edu.hk/ug/courses/). The original resume and transcript are not included in the public site.
