# Abhi Thiagarajan — Portfolio (Minecraft main-menu style)

A static, no-build-step site styled like a Minecraft main menu — chunky pixel buttons, blocky title, "Enchant" skills page, and a project-select screen.

## Files
- `index.html` — Home / main menu (Experience, Projects, About Me, Skills, GitHub, LinkedIn, Resume)
- `experience.html` — Experience timeline
- `projects.html` — Select Project screen (with live search)
- `about.html` — About Me (your photo, stats, "Right now" panel)
- `skills.html` — Skills as an "Enchant" grimoire (click a category to see its skills)
- `mc-style.css` — shared styles for every page
- `images/profile.jpg` — your headshot

## Put this in your GitHub repo
1. Delete the current contents of your repo (the old Next.js/v0 project — not needed anymore).
2. Copy all the files above (keeping the `images/` folder) into the root of the repo.
3. Commit and push:
   ```
   git add .
   git commit -m "Redesign: Minecraft-menu-style multi-page portfolio"
   git push
   ```
4. Vercel auto-redeploys and abhithiaga.com updates — no extra config needed.

## To add your resume
Drop your resume PDF into the repo root and either rename it to `Abhirami-Thiagarajan-Resume.pdf`, or open `index.html` and change that filename in the "Resume" button link to match your actual file.

## Editing content
- **Experience**: edit the `exp_entry(...)` calls inside your build, or just edit the HTML directly in `experience.html` — each entry is a `.exp-entry` block with date, role, bullets, and tags.
- **Projects**: same idea in `projects.html` — each is a `.proj-row` link block.
- **About "Right now" panel**: these are placeholder fun facts based on what you mentioned (F1, national parks, food trucks, volleyball) — edit the `.about-now-row` blocks in `about.html` to whatever's actually true for you day to day.
- **Skills**: category data lives in a small JS object at the bottom of `skills.html` — edit the emoji/skill list there to add or remove skills.
