# CLAUDE.md — Context for Claude

> This file is loaded automatically when Claude works in this repository. It carries forward project context between sessions and between collaborators using Claude.

---

## What This Project Is

**VFilm** is a web app for **Vanguard Legacy**, a business that guides young athletes on the path to a professional career. It connects three user types:

1. **Young Athletes** (grade 9 through end of college) — build recruiting profiles, share film, ask pros questions
2. **Professionals** — active pros, retired pros, current pro coaches, former pro coaches — mentor youth, critique film, answer questions
3. **Fans** (13+): ask verified pros questions (submitted questions are moderated, and pros choose which to answer), join live Q&A sessions, vote on Q&A, follow athletes

**Sport at launch:** basketball only. Football, baseball, soccer are scaffolded in the backend data model with a `sport` field but gated off in the UI until rollout.

**Founder:** Isaiah Crawford.

## Current Phase

**Phase 1 — Marketing-site prototype.** All pages are static HTML/CSS/JS — no backend, no auth, no database. Forms collect input but don't submit anywhere real. The "real" build (Next.js + Supabase + Claude API) starts in Phase 2.

## Build Phases

| Phase | Deliverable | Status |
|---|---|---|
| 1 | Marketing site + waitlist + visual prototype | ✅ Done |
| 2 | Next.js + Supabase: real auth, three signup flows with verification, young athlete dashboard, pro/coach dashboard | Not started |
| 3 | AI Mentor Match (Claude API), Q&A posting + voting backend, notifications | Not started |
| 4 | Film splitter (integrate with AWS Rekognition Video, Hudl API, or similar third-party — do NOT build from scratch) | Not started |
| 5 | Mobile wrapper (Capacitor or Expo) | Not started |

## Key Decisions Already Made — Don't Re-Litigate

- **Tech stack:** Next.js + Supabase + Claude API.
- **Video splitter approach:** integrate with a third-party API. Building custom ML was explicitly ruled out (too slow, too expensive).
- **Age policy:** Fan accounts must be 13+ at signup. Young athletes under 18 require a parent/guardian email on file with a confirmation link.
- **Verification:** Persona is the leading candidate for ID verification. Coach/AD email confirmation for roster status. Final method to be locked before Phase 2.
- **Design palette:** navy `#0A1E3F`, dark blue `#122E54`, white `#FFFFFF`, gold `#D4A02A`. Inspired by [VScout](https://getvscout.com/). Don't drift from this.
- **Typography:** Oswald (display) + Inter (body), loaded from Google Fonts.

## File Map (Phase 1)

```
index.html       Home page: nav, hero+stats, AI match CTA (locked), young athlete
                 success carousel, popular Q&A with voting, pro athlete carousel,
                 waitlist signup, footer. Login + feedback modals included.

about.html       About page: founder story (Isaiah), Vanguard
                 Legacy values, 4-step "How It Works" flow.

signup.html      Three-card account type selector (young / pro / fan) that opens
                 differentiated forms. Young athlete form includes
                 parent/guardian fields for minors. Pro form includes the four
                 subtypes (active, retired, current coach, former coach).
                 Verification placeholder blocks call out the methods
                 under consideration.

dashboard.html   Young-athlete dashboard PREVIEW (no real data). Shows the section
                 structure: story, diet, physical makeup, on-field, academics,
                 film, goals. Sidebar nav + metrics row + section preview cards.

video.html       Film Tool placeholder — "Coming Soon" page explaining the
                 calibrate → upload → review → file flow. Notes the integration
                 approach (third-party sports-AI service).

styles.css       Full design system. CSS custom properties at the top control
                 the whole palette + radii + shadows. All components scoped by
                 BEM-ish classes (.btn, .nav, .hero, .qa-card, .story-card, etc.).
                 Responsive breakpoints at 900px and 600px.

script.js       Vanilla JS — no framework. Handles modal open/close,
                 carousel auto-rotate + dot nav, Q&A like/dislike toggling,
                 waitlist form submission (front-end only), and toast notices.
```

## Coding Conventions (For This Phase)

- **Pure HTML/CSS/JS** — no build step, no bundler. Open `index.html` and it works.
- **No external JS dependencies** beyond Google Fonts loaded via CSS `@import`.
- **Inline event handlers (`onclick="..."`)** are intentional for prototype clarity — fine to refactor in Phase 2.
- **Color tokens come from CSS variables** in `:root`. Don't hardcode hex values inside components.
- **All copy uses the Vanguard Legacy voice:** direct, honest, anti-hype. "Know where you stand." "Path > Spotlight." Don't soften the message.

## What Should NOT Be Done Without Asking Isaiah First

- Adding analytics, tracking pixels, or third-party scripts.
- Changing the color palette or fonts.
- Building real auth before Phase 2 starts.
- Implementing a custom video splitter ML pipeline.
- Adding any feature that collects data from minors before COPPA review.
- Pushing to `main` directly — always work on a branch and open a PR (see `CONTRIBUTING.md`).

## Open Items for Future Sessions

- **Founder story** — short version is live in `about.html`. Expand with Isaiah's full story.
- **Hero stats** — currently feature/status callouts, not user counts. Only show real numbers once they exist.
- **Verification vendor lock-in** — Persona vs Stripe Identity vs manual review.
- **Repo ownership** — `vscoutvaa` (Isaiah) owns the repo. Collaborators use the branch + PR workflow.

## Repository

- **GitHub:** https://github.com/vscoutvaa/VFilm
- **Owner:** vscoutvaa
- **Founder / owner:** Isaiah Crawford
- **Workflow:** branches → PR → review → merge. See `CONTRIBUTING.md`.
