# Workshop Website Builder Skill

## Purpose

Build and maintain a polished academic workshop website for:

AI Agents for Dynamic Healthcare: World Models, Reasoning, Simulation, and Evaluation in Human-Governed Systems

The website should be deployed using GitHub Pages.

The GitHub repository itself is the website root. Do not create an extra nested website directory.

Use these references:

* Visual and interaction inspiration: https://foundation-models-meet-embodied-agents.github.io/cvpr2026/
* Section/content organization inspiration: https://aim-fm-24.github.io/NeurIPS/

Do not copy source code, copyrighted assets, or exact implementation details from either reference site. Use them only as design inspiration.

## Required Sections

The single-page website must include these sections in this order:

1. Home
2. Overview
3. Topics
4. Schedule
5. Submissions
6. Speakers
7. Organizers
8. Contact

Each section must have a matching navigation anchor.

## Content Source Priority

Use the proposal PDF in proposal/AI_Agents_for_Dynamic_Healthcare.pdf as the source of truth.

When information is missing:

* Use “TBD” for dates, location, room, submission portal, final website URL, and finalized schedule.
* Do not invent facts.
* Do not invent speakers, deadlines, accepted papers, sponsors, awards, or venue details.

## Core Workshop Information

Title:
AI Agents for Dynamic Healthcare: World Models, Reasoning, Simulation, and Evaluation in Human-Governed Systems

Venue:
NeurIPS 2026 Workshop

Theme:
Clinical AI agents for dynamic healthcare, including world models, reasoning, simulation, longitudinal evaluation, human oversight, safety, auditability, privacy, and workflow integration.

## Topics

Include these topics:

* Clinical AI agents for dynamic healthcare
* Medical reasoning and planning in longitudinal care
* Clinical world models and patient simulation
* EHR/FHIR environments and clinical tool use
* Dynamic evaluation beyond static medical QA
* Safety, reliability, and bounded autonomy
* Human-agent collaboration and workflow integration
* Datasets, tools, and reproducibility
* Governance, regulation, and position papers

## Speakers

Use these invited speakers:

* James Zou — Stanford University
* Xiangliang Zhang — University of Notre Dame
* Alan Yuille — Johns Hopkins University
* Mahnaz Maddah — Broad Institute of MIT and Harvard
* Jonathan H. Chen — Stanford Medicine
* Daguang Xu — NVIDIA Research

For each speaker:

* Search for an official personal, institutional, lab, or company profile.
* Prefer official pages over third-party pages.
* Extract only verified information.
* Include name, affiliation, short title/bio, profile link, and image if appropriate.
* If no reliable photo is found or image usage is uncertain, use a local placeholder avatar.

## Organizers

Use these organizers:

* Yichen Wu — Mass General Brigham / Harvard Medical School — [yiwu6@mgh.harvard.edu](mailto:yiwu6@mgh.harvard.edu)
* Yuhan Liu — Mohamed bin Zayed University of Artificial Intelligence — [yuhan.liu@mbzuai.ac.ae](mailto:yuhan.liu@mbzuai.ac.ae)
* Xiang Li — Massachusetts General Hospital / Harvard Medical School — [xli60@mgh.harvard.edu](mailto:xli60@mgh.harvard.edu)
* Wengong Jin — Northeastern University / Broad Institute of MIT and Harvard — [w.jin@northeastern.edu](mailto:w.jin@northeastern.edu)
* Ruogu Fang — Vanderbilt University — [ruogu.fang@vanderbilt.edu](mailto:ruogu.fang@vanderbilt.edu)
* Marzyeh Ghassemi — MIT EECS and IMES — [mghassem@mit.edu](mailto:mghassem@mit.edu)

For each organizer:

* Search official or institutional profiles.
* Include photo, name, affiliation, profile link, and email where appropriate.
* Keep card layout consistent.

## Design Rules

* Build a single-page academic workshop website.
* Use a sticky navigation bar.
* Use smooth scrolling anchors.
* Highlight the active section in the nav.
* Implement responsive mobile navigation.
* Use the uploaded horizontal background image as the Home hero background.
* Recreate the dynamic background/text relationship of the visual reference site:

  * readable overlay text
  * dark or gradient overlay
  * subtle parallax or scroll-based background movement if feasible
* Use clean typography, generous spacing, modern cards, and accessible contrast.
* The visual identity should feel like AI + healthcare + academic workshop.
* Avoid generic or cliché medical stock styling.

## Hero Requirements

The Home section should include:

* Full workshop title
* “NeurIPS 2026 Workshop”
* Location/date/website fields if available; otherwise TBD
* CTA buttons:

  * Call for Papers
  * Submission Portal
  * Schedule

## Schedule Rules

Create a tentative one-day workshop schedule using the proposal format:

* Opening remarks
* Invited talks
* Contributed talks
* Poster session
* Demos or benchmark presentations
* Structured debate
* Panel
* Breakout discussions
* Awards / closing

Clearly label the schedule as tentative.

## Submissions Rules

Include:

* Call for papers
* Topics
* Paper types if available
* Reviewing policy if available
* Important dates table with TBD placeholders
* OpenReview submission portal placeholder if not finalized

Do not invent deadlines.

## Technical Rules

Use a simple static website structure unless the repository already contains a framework.

Preferred files:

* index.html
* style.css
* script.js
* assets/images/
* assets/data/people.js

Requirements:

* All internal navigation links must work.
* External links must use target="_blank" and rel="noopener noreferrer".
* Images must have alt text.
* Missing images must fall back gracefully.
* The website must work on GitHub Pages.
* README.md must include:

  * how to preview locally
  * how to deploy to GitHub Pages
  * how to update speakers, organizers, schedule, and submission dates

## Quality Checklist

Before finalizing:

* Verify all required sections are present.
* Verify proposal-derived content is faithful.
* Verify uncertain information is marked TBD.
* Verify mobile layout works.
* Verify hero background readability.
* Verify speaker and organizer cards render correctly.
* Verify there are no broken internal anchors.
* Verify README instructions are accurate.
