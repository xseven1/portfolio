# Udayan Sharma — MS ADS ePortfolio

A clean, editorial Next.js portfolio built for the Syracuse University iSchool MS Applied Data Science program.

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** — custom design tokens, editorial color palette
- **Framer Motion** — page and element fade-in animations
- **Playfair Display** + **Source Serif 4** + **JetBrains Mono** — Google Fonts

## Local Development

```bash
# 1. Unzip and enter the directory
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Site Structure

```
/                   → Overview (PLOs, project list, PLO × Project matrix)
/projects           → Detailed project write-ups
/video              → Recorded presentation embed
/blog               → ~3,000 word program reflection
```

## Customizing Content

All content lives in one file:

```
lib/data.ts
```

Edit `projects` and `plos` arrays there — everything on the site pulls from that file automatically.

### Updating GitHub links
In `lib/data.ts`, replace `'https://github.com'` with your actual repo URLs per project.

### Adding your Loom video
In `app/video/page.tsx`, replace `YOUR_LOOM_ID_HERE` with your actual Loom video ID.

Example: if your Loom URL is `https://www.loom.com/share/abc123def456`, your embed URL is:
```
https://www.loom.com/embed/abc123def456
```

### Updating social links
In `app/layout.tsx`, update the GitHub and LinkedIn hrefs in the footer.

## Deploying to Vercel (when ready)

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main

# 2. Go to vercel.com → Import Project → connect your repo
# 3. Deploy — zero config needed for Next.js
```

You'll get a free `yourproject.vercel.app` URL you can put on your resume.

## Design System

| Token | Value |
|-------|-------|
| `ink` | `#1a1a18` — primary text |
| `paper` | `#faf9f6` — background |
| `muted` | `#6b6a65` — secondary text |
| `subtle` | `#e8e6df` — borders, dividers |
| `accent` | `#c84b31` — red accent (links, PLO codes, hover) |

Fonts load from Google Fonts via `globals.css`. No additional font setup needed.
