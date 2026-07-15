# DGCA Exam Bank

Plain HTML/CSS/JS CPL/ATPL question-bank practice site. No framework, no build step, no server required — open `index.html` in a browser, or host it anywhere static (GitHub Pages, Vercel, Netlify).

## Structure

```
index.html
css/style.css     → all styling
js/parser.js      → turns pasted question text into data (read this first)
js/app.js         → routing, quiz engine, timer, localStorage
data/*.js         → one file per subject — this is what you edit day-to-day
images/           → drop diagram images here
```

Subjects are flat: **Subject → Chapter → Questions**, no extra nesting.

## Adding questions — the fast way

Open the relevant file in `/data` (e.g. `data/air-navigation.js`) and paste a block like this straight from a PDF:

```js
registerChapterText("air-navigation", "great-circles", "Great Circles", `
1. What is the shortest distance between two points on a sphere?
a. Rhumb line
*b. Great circle
c. Loxodrome
d. Parallel of latitude
Explanation: A great circle is the shortest path between two points on a sphere's surface.

2. Next question...
a. ...
*b. ...
c. ...
d. ...
`);
```

**What you actually have to do by hand:**
- Put a `*` right before the letter of the correct option (that's the only edit beyond pasting).
- `Explanation:` line is optional — skip it if you don't have one, add it later.
- Wrap the whole block in one `registerChapterText("subject-id", "chapter-id", "Chapter Name", \`...\`)` call.

Save the file, refresh the browser — done. No JS object syntax, no manually counting array brackets.

### Adding an image to a question

Drop the image into `/images`, then add this line anywhere between the question text and its options:

```
[image: filename.png]
```

### If something doesn't parse

If a question is missing 4 options or has no `*` marked, it's skipped (or flagged) rather than breaking the app — you'll see a warning in the browser console, and the chapter list on the home page shows a red "N to fix" chip next to that chapter's name so you know exactly what needs attention.

## Adding a chapter

Add another `registerChapterText(...)` call in the same subject file — as many as you like.

## Adding a whole new subject

1. Duplicate any file in `/data`, e.g. `data/air-navigation.js`, rename it.
2. Change the `registerSubject("id", "Name")` line at the top.
3. Add one line in `index.html`:
   ```html
   <script src="data/your-new-subject.js"></script>
   ```
   It appears on the home page automatically with a live question count — nothing else to touch.

## Features included

- **Practice mode** — instant right/wrong feedback + explanation, question locks once answered.
- **Test mode** — CBT-style: no feedback until submit, question palette (answered/marked/unanswered), mark-for-review, free navigation, confirms before submitting with unanswered questions left.
- **Timer** — off / total countdown (auto-submits at zero) / per-question countdown (auto-advances at zero). Custom minutes.
- **Shuffle** — questions, and independently, the A/B/C/D order within each question.
- **Custom question count** — run a chapter with all questions or a subset.
- **Mistake bank** — every wrong answer (Practice or Test) is auto-saved for focused re-drilling; clears itself once you get it right.
- **Bookmarks** — star any question mid-quiz, revisit later as its own practice set.
- **Progress dashboard** — attempts, average/best score per chapter, recent attempt history, pass-mark tracking (70%).
- All data lives in `localStorage` on the device — nothing is sent anywhere.

## Ideas for what to add next

- Full mock exam mode — pull a fixed number of questions proportionally across every chapter in a subject.
- Negative marking toggle for stricter self-testing.
- Keyboard shortcuts (1–4 for options, arrows for next/prev).
- Search across a subject's questions by keyword.
- PWA/offline install.
- Access control — the same Vercel serverless `api/login.js` + EmailJS alert pattern from the RTR site will drop in here with minimal changes (empty `/api` folder included, ready for it).

## Deploying

Push this folder to a GitHub repo, then either enable GitHub Pages or import the repo into Vercel — no build settings needed, it's static.
