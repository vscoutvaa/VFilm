# VFilm — Vanguard Legacy

> The path-to-pro app for young basketball players. Connecting young athletes to verified professional athletes and coaches for mentorship, film review, and real-world guidance.

## 🏀 What This Is

VFilm is the flagship product of **Vanguard Legacy**, a business focused on guiding young athletes on a successful path to a professional career. The app supports three user types:

- **Young Athletes** (9th grade – college): build their recruiting profile, share film, get matched with pro mentors
- **Professionals** (active pros, retired pros, professional coaches): mentor young athletes, answer questions, critique film
- **Fans** (13+): follow verified athletes, get notifications, vote on community Q&A

**Launch focus:** basketball-only at v1. Football, baseball, soccer scaffolded in the codebase, gated off until rollout.

## 🎯 Core Features

| Feature | Status |
|---|---|
| Marketing site (home, about, signup, dashboard preview) | ✅ Phase 1 Prototype |
| Three-role signup flow with verification placeholders | ✅ Phase 1 Prototype |
| AI Mentor Match (auth-gated) | 🟡 Phase 3 — UI built, AI not wired |
| Q&A with like/dislike voting | 🟡 Phase 3 — UI built, no backend |
| Young athlete dashboard with profile sections | 🟡 Phase 2 — preview only |
| AI Film Splitter (Opus-Clips-style) | 🔴 Phase 4 — placeholder page |
| Auth & verified accounts (Supabase) | 🔴 Phase 2 — not started |
| Notifications, follows, subscriptions | 🔴 Phase 2/3 — not started |

## 🎨 Design System

Inspired by the [VScout](https://getvscout.com/) athletic-advisory aesthetic.

- **Palette:** Navy `#0A1E3F` · Dark Blue `#122E54` · White `#FFFFFF` · Gold `#D4A02A`
- **Typography:** Oswald (display) + Inter (body), loaded from Google Fonts
- **Style:** strong uppercase headlines, thin gold accent lines, dark/light section alternation

## 📂 Project Structure

```
VFilm/
├── index.html         # Home page — hero, AI match CTA, stories, Q&A, waitlist
├── about.html         # About page — founder story (placeholder), values, how-it-works
├── signup.html        # Three-card account type selector + role-specific forms
├── dashboard.html     # Preview of young athlete profile dashboard
├── video.html         # Film Tool placeholder (Phase 4)
├── styles.css         # Full design system — colors, typography, components
├── script.js          # Modals, carousels, voting, waitlist, toast notifications
├── README.md          # You are here
├── CLAUDE.md          # Context for Claude when working on this repo
├── CONTRIBUTING.md    # Branch + PR workflow for collaborators
└── .github/
    └── PULL_REQUEST_TEMPLATE.md
```

## 🚀 Running Locally

This is a **static prototype** — no build step, no server required.

**Option 1: Open directly**
Double-click `index.html` from File Explorer / Finder. Opens in your default browser.

**Option 2: Run a quick local server (recommended for development)**

```bash
# If you have Python installed:
cd VFilm
python -m http.server 8000
# Then visit http://localhost:8000 in your browser

# If you have Node installed:
npx serve .
```

## 📱 Viewing on iPad / Mobile

The prototype is fully responsive and works on any device with a modern browser. To view on iPad:

1. **Easiest path:** Push to GitHub and enable **GitHub Pages** (free static hosting). The site becomes accessible at `https://vscoutvaa.github.io/VFilm/` — open it in iPad Safari from anywhere. See `CONTRIBUTING.md` for setup steps.
2. **Quick share:** Copy the entire VFilm folder to iCloud Drive or Dropbox. Open `index.html` from the Files app on iPad — it'll render in Safari.
3. **AirDrop:** From a Mac, AirDrop the folder to your iPad. Open `index.html` in Files.

## 🗺 Roadmap

- **Phase 1 — Marketing Site** ✅ Complete
- **Phase 2 — Auth + Dashboards (Next.js + Supabase):** real signup, verification flows, young athlete profile sections (story, diet, physicals, on-field, academics, film, milestones), pro/coach profiles
- **Phase 3 — AI Match + Q&A engine:** Claude API integration for mentor matching, full Q&A posting/voting system, notifications
- **Phase 4 — Film Splitter:** integration with AWS Rekognition Video / Hudl-class API for player identification and auto-clipping
- **Phase 5 — Mobile wrapping:** Capacitor or Expo wrapper for App Store / Play Store distribution

## ⚠️ Important Decisions Made

- **Tech stack (planned):** Next.js + Supabase + Claude API
- **Verification:** Likely Persona for ID verification + manual review for roster confirmation
- **Age gate:** Fan accounts require 13+ at signup (industry standard, avoids COPPA complications)
- **Sport launch:** Basketball first; codebase already supports a "sport" field for future activation

## 👥 Maintainers

- **Isaiah Crawford** — Founder, Vanguard Legacy
- Built with collaboration support from Claude (Anthropic)

## 📄 License

Proprietary — © 2026 Vanguard Legacy. All rights reserved.
