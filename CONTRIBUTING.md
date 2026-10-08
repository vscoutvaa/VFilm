# Contributing to VFilm

Welcome. This doc covers how to make changes to the VFilm repo safely — especially important since the project has multiple collaborators and is in active prototype-to-product transition.

## Repository Roles

- **Owner:** `vscoutvaa` — has merge rights to `main` and admin settings.
- **Collaborators** (incl. Jeffrey Nuez): can create branches, push to those branches, open PRs. **Cannot push directly to `main`.**

## Branching Strategy

We use a simple **feature-branch** model:

```
main              ← protected; only PR merges land here
├── feature/...   ← new features
├── fix/...       ← bug fixes
├── docs/...      ← documentation-only changes
└── prototype/... ← experimental work, may not merge
```

**Branch naming examples:**
- `feature/young-athlete-dashboard`
- `feature/ai-match-button-state`
- `fix/carousel-mobile-overflow`
- `docs/update-readme`
- `prototype/film-splitter-mockup`

Keep branch names short, lowercase, hyphen-separated, and prefixed by type.

## The PR Workflow (Step by Step)

### 1. Create a branch (in GitHub Desktop)

1. Open **GitHub Desktop**.
2. Make sure **Current Repository** at the top says `VFilm`.
3. Make sure **Current Branch** says `main` and you're up to date (click **Fetch origin** → **Pull origin** if there are updates).
4. Click **Current Branch** → **New Branch**.
5. Type your branch name (e.g. `feature/dashboard-diet-section`).
6. Click **Create branch**. GitHub Desktop will switch to it.

### 2. Make your changes

Edit files locally in your editor. Save them. GitHub Desktop will show changed files in the left sidebar.

### 3. Commit

1. In GitHub Desktop, review the diff in the right panel.
2. In the bottom-left, write a **Summary** (e.g. `Add diet-tracking section to young athlete dashboard`).
3. Optionally add a **Description** with more detail.
4. Click **Commit to <branch-name>**.

**Good commit messages:**
- Imperative mood: "Add", "Fix", "Update" — not "Added" or "Adding"
- One thing per commit when possible
- Reference an issue if relevant (`Fixes #12`)

### 4. Push to GitHub

Click **Publish branch** (first push) or **Push origin** (subsequent pushes) in GitHub Desktop.

### 5. Open a Pull Request

1. In GitHub Desktop, after pushing, click the blue **Create Pull Request** button. This opens GitHub in your browser.
2. Fill in the PR template (it should appear pre-filled). Cover:
   - What changed
   - Why (link issue if any)
   - Screenshots if visual
   - How to test
3. Click **Create Pull Request**.

### 6. Wait for review

The repo owner (or designated reviewer) will look it over. They may:
- ✅ Approve → merge it
- 💬 Request changes → push more commits to the same branch, the PR updates automatically
- ❌ Close it → discuss before reopening

### 7. After merge

1. In GitHub Desktop, switch back to `main` (**Current Branch** → `main`).
2. **Fetch origin** → **Pull origin** to bring the merged changes down.
3. Delete the old feature branch (**Branch** menu → **Delete...**).

## Recommended Repo Settings (for the owner to enable)

> These are for `vscoutvaa` to configure in **GitHub → Settings → Branches → Branch protection rules** for `main`.

- ✅ **Require a pull request before merging**
- ✅ **Require approvals** (set to at least 1)
- ✅ **Dismiss stale pull request approvals when new commits are pushed**
- ✅ **Do not allow bypassing the above settings**
- ⚠️ Leave **force pushes** disabled (default)
- ⚠️ Leave **deletions** disabled (default)

These prevent accidental direct pushes to `main` and enforce review.

## GitHub Pages (Free Hosting for the Prototype)

To make the prototype accessible from any device with a browser (iPad, phone, anyone you share a link with):

1. Push the prototype files to `main`.
2. Owner (`vscoutvaa`) goes to **Settings → Pages** in the GitHub repo.
3. **Source:** Deploy from a branch.
4. **Branch:** `main` / `/ (root)`.
5. Click **Save**. After ~1 minute, the site is live at:
   **`https://vscoutvaa.github.io/VFilm/`**

Anyone can visit that URL from any device. No login required (this is a public-facing prototype). Updates to `main` deploy automatically.

> For private/early-stage testing where you don't want the prototype publicly indexed, consider Vercel or Netlify instead — both have a "preview, only with the URL" mode.

## Working With Claude on Future Changes

If you're using Claude (in Cowork or another setup) to make changes to this repo:

1. **Always start a feature branch first** — Claude can do this for you in the chat.
2. **Have Claude read `CLAUDE.md`** before doing real work — it has all the project context.
3. **Review the diff before committing.** Claude can write code fast; you still need to look at what it produced before pushing.
4. **Don't let Claude force-push or commit directly to `main`.**

## Style Notes (Phase 1 Prototype)

- HTML: 2-space indent. Use semantic tags (`<nav>`, `<section>`, `<footer>`).
- CSS: design tokens live in `:root` in `styles.css` — use the variables, don't hardcode.
- JS: vanilla, no framework, no build step. Functions are global by design for now.
- Copy voice: direct, honest, anti-hype. Match the existing tone.

## Questions

Contact Isaiah or open a GitHub issue if anything's unclear.
