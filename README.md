# CSE5006 Assessment 1 — RSS Server Frontend

A usability-focused frontend for an RSS Server that will feed content into a
Learning Management System (LMS). This assessment covers the **frontend only** —
sample blog posts stand in for RSS feed items so the focus stays on layout,
navigation, usability, and responsive design. Backend and live RSS processing
are added in later assessments.

**Author:** Erdi Erden Kekec — Student Number 22555388

**Repository:** https://github.com/eek22555388/cse5006-assignment1

## Tech stack

- **Next.js** (App Router) — bootstrapped with `npx create-next-app`
- **React** — component-based UI
- **TypeScript** — type-safe components
- **Tailwind CSS** — styling, responsive design, and theming

## Features

- Home, About, Feeds, and Settings pages with shared header, footer, and navigation
- Light and dark themes, saved in the browser (localStorage) so they persist
- Responsive hamburger menu for compact screens, with an animated open/close
- Feeds page showing posts as cards (title, date, summary, category, image)
- Search to filter posts by title
- Create and delete your own posts, saved in localStorage
- Dynamic post pages with breadcrumb navigation
- Adjustable feed layout (grid or list), also saved in the browser
- Accessible markup: semantic HTML, ARIA labels, and alt text on images

## Getting started

Requires Node.js v22 or newer.

​```bash
npm install
npm run dev
​```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

​```
app/
  layout.tsx      Shared layout (header, nav, footer, providers)
  page.tsx        Home page
  about/          About page
  feeds/          Feeds list, create page, and dynamic [slug] post pages
  settings/       Theme and layout preferences
  components/     Reusable UI (Header, Footer, NavBar, PostCard, etc.)
  context/        Theme and Posts state (React Context + localStorage)
  data/           Sample posts and navigation links
​```