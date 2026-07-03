# 📋 Project State — Personal Portfolio Site

> Last updated: 2026-07-03
> Location: `E:\project\personal-site\`

---

## 🎯 Project Overview

| Field | Value |
|-------|-------|
| **Name** | Personal Portfolio Site (个人主页) |
| **Type** | Next.js 15 + TypeScript + MDX + i18n |
| **Positioning** | AI Indie Hacker & Builder — showcasing indie projects, blog, and personal brand |
| **Target Audience** | Global users (English primary), Chinese secondary |
| **Business Context** | AI-powered indie hacking: tool sites, info sites, game sites for overseas markets |
| **Architecture** | Multi-page (Phase B) — Next.js App Router with i18n routing |

---

## 🎨 Design Decisions

| Decision | Choice |
|----------|--------|
| **Style** | Minimalist black & white (黑白极简) |
| **Theme** | Light mode default, respects `prefers-color-scheme` for dark |
| **Typography** | Inter + Noto Sans SC + JetBrains Mono (via `next/font`) |
| **Layout** | Responsive (mobile + desktop) via Tailwind CSS v4 |
| **i18n Approach** | `next-intl` with locale routing (`/en`, `/zh`) |
| **Content** | MDX for blog posts, JSON messages for translations |

---

## 📁 Current Files

| File | Path | Status | Notes |
|------|------|--------|-------|
| `package.json` | `./package.json` | ✅ | Next.js 15 + dependencies |
| `next.config.ts` | `./next.config.ts` | ✅ | MDX + next-intl + static export |
| `tailwind.config.ts` | `./tailwind.config.ts` | ✅ | B&W theme, font variables |
| `tsconfig.json` | `./tsconfig.json` | ✅ | TypeScript config |
| `middleware.ts` | `./middleware.ts` | ✅ | next-intl locale routing |
| `wrangler.toml` | `./wrangler.toml` | ✅ | Cloudflare Pages config |
| `postcss.config.js` | `./postcss.config.js` | ✅ | Tailwind v4 PostCSS |
| `src/app/globals.css` | `./src/app/globals.css` | ✅ | Theme CSS variables |
| `src/app/[locale]/layout.tsx` | `./src/app/[locale]/layout.tsx` | ✅ | Root layout with fonts + i18n |
| `src/app/[locale]/page.tsx` | `./src/app/[locale]/page.tsx` | ✅ | Home (Hero + Stats + Project + Pipeline + Newsletter) |
| `src/app/[locale]/projects/page.tsx` | `./src/app/[locale]/projects/page.tsx` | ✅ | Projects list + Roadmap |
| `src/app/[locale]/blog/page.tsx` | `./src/app/[locale]/blog/page.tsx` | ✅ | Blog list with 3 placeholder posts |
| `src/app/[locale]/blog/[slug]/page.tsx` | `./src/app/[locale]/blog/[slug]/page.tsx` | ✅ | Blog post template (placeholder) |
| `src/app/[locale]/about/page.tsx` | `./src/app/[locale]/about/page.tsx` | ✅ | About + Tech Stack + Contact |
| `src/components/Navbar.tsx` | `./src/components/Navbar.tsx` | ✅ | Sticky nav with locale links |
| `src/components/Footer.tsx` | `./src/components/Footer.tsx` | ✅ | 3-column footer |
| `src/components/LanguageSwitch.tsx` | `./src/components/LanguageSwitch.tsx` | ✅ | EN/中文 toggle button |
| `src/i18n/routing.ts` | `./src/i18n/routing.ts` | ✅ | Locale config |
| `src/i18n/request.ts` | `./src/i18n/request.ts` | ✅ | Message loading |
| `messages/en.json` | `./messages/en.json` | ✅ | English translations |
| `messages/zh.json` | `./messages/zh.json` | ✅ | Chinese translations |

---

## 🏗️ Tech Stack (Phase B — Next.js)

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 |
| **i18n** | next-intl (locale routing `/en`, `/zh`) |
| **Content** | MDX (blog posts) + JSON (translations) |
| **Deployment** | Cloudflare Pages (via Wrangler) |
| **Domain** | TBD |

---

## ✅ Completed Tasks

- [x] Website architecture & page planning (4 pages)
- [x] Initial design (dark theme, purple accent)
- [x] Redesign to black & white minimalist
- [x] Bilingual support (EN/ZH toggle) — Phase A (static HTML)
- [x] Phase A: All 4 pages built as static HTML
- [x] Phase B: Migrated to Next.js 15 + TypeScript
- [x] Phase B: i18n routing with next-intl (`/en`, `/zh`)
- [x] Phase B: MDX blog system configured
- [x] Phase B: Cloudflare Pages configuration (`wrangler.toml`)
- [x] Phase B: Project migrated to `E:\project\personal-site\`
- [x] Project state file created

---

## 🚧 Pending / TODO

### Content (High Priority)
- [ ] Replace `yourname` with real name/brand across all files
- [ ] Replace `hello@yourname.dev` with real email
- [ ] Add real project name, description, and link for the launched tool site
- [ ] Add real project screenshots to the featured project section
- [ ] Update social media links (X/Twitter, GitHub, YouTube)
- [ ] Write first real blog post (replace placeholder MDX content)

### Deployment
- [ ] Run `npm install` to install all dependencies
- [ ] Run `npm run build` to verify build succeeds
- [ ] Provide Cloudflare API Token
- [ ] Create Cloudflare Pages project
- [ ] Deploy via `npx wrangler pages deploy`
- [ ] Configure custom domain (if available)
- [ ] Set up automatic redeploy on Git push

### Future Enhancements
- [ ] Add real MDX blog articles
- [ ] Add analytics (Google Analytics / Plausible)
- [ ] Add SEO meta tags (Open Graph, Twitter Card)
- [ ] Add favicon
- [ ] Add sitemap.xml + robots.txt
- [ ] Add newsletter integration (Resend / Mailchimp)
- [ ] CMS integration (Sanity/Contentful) when content grows

---

## 📝 Content Placeholders to Replace

| Placeholder | Current Value | Target |
|-------------|---------------|--------|
| Brand name | `AI Indie Builder` | *(your real name or brand)* |
| Email | `hello@yourname.dev` | *(your real email)* |
| Twitter/X | `@yourhandle` | *(your real handle)* |
| GitHub | `github.com/yourname` | *(your real profile)* |
| Project name | "AI Tool Site #1" | *(real project name)* |
| Project URL | `#` | *(real project URL)* |
| Hero avatar | 👨‍💻 emoji | *(real photo or custom avatar)* |
| Project screenshot | Placeholder | *(real screenshot)* |

---

## 🔄 Architecture Path

| Phase | Architecture | Status |
|-------|-------------|--------|
| **Phase 1** (Original) | Static HTML | ✅ Complete → Superseded |
| **Phase 2** (Current) | Next.js + MDX + Tailwind + i18n | ✅ Complete |
| **Phase 3** | CMS integration (Sanity/Contentful) | ⏳ When content grows |
| **Phase 4** | Monetization (Stripe, ads) | ⏳ When traffic arrives |

---

## 🗂️ Notes

- **Project location moved** from `C:\Users\18807\WorkBuddy\2026-07-03-09-52-40\` to `E:\project\personal-site\`
- **Ardot MCP was unavailable** during initial design, so design was generated as HTML directly
- **next-intl** provides proper SEO-friendly i18n (each language has its own URL)
- **MDX support** is configured — drop `.mdx` files into `src/content/blog/` to create posts
- **Dark mode** auto-detects system preference via `prefers-color-scheme`
