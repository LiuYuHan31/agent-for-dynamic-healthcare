# AI Agents for Dynamic Healthcare Workshop Website

This repository is the GitHub Pages root for the NeurIPS 2026 workshop website:

**AI Agents for Dynamic Healthcare: World Models, Reasoning, Simulation, and Evaluation in Human-Governed Systems**

The site is a simple static website built from `index.html`, `style.css`, `script.js`, and `assets/data/people.js`.

## Local Preview

From the repository root, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

You can also open `index.html` directly in a browser, but a local HTTP server better matches GitHub Pages behavior.

## Deploy to GitHub Pages

1. Commit and push changes to the default branch.
2. Open the repository on GitHub.
3. Go to **Settings** > **Pages**.
4. Set **Build and deployment** to deploy from a branch.
5. Select the default branch and `/ (root)` as the source.
6. Save. GitHub Pages will publish the static site from the repository root.

## Update Speakers and Organizers

Edit `assets/data/people.js`.

Each visible person card supports:

- `name`
- `affiliation`
- `image`
- `imageAlt`

The speaker and organizer cards intentionally show only the photo, name, and affiliation. Use `assets/images/avatar-placeholder.svg` when photo usage rights are unclear.

## Update Schedule

Edit the `#schedule` section in `index.html`. Keep the schedule labeled tentative until the workshop date, room, and final timing are confirmed.

## Update Submissions

Edit the `#submissions` section in `index.html`.

Use `TBD` for unconfirmed deadlines, page limits, submission portal, reviewer self-nomination dates, notification dates, camera-ready dates, and the final workshop date.

## Update Assets

- Hero background: replace `assets/images/hero-background.png`.
- Proposal PDF: replace `proposal/AI_Agents_for_Dynamic_Healthcare.pdf`.
- Speaker or organizer images: add files under `assets/images/speakers/` or `assets/images/organizers/`, then update the matching `image` field in `assets/data/people.js`.
