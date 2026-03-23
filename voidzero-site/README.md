# VoidZero Website Clone

A pixel-perfect clone of [voidzero.dev](https://voidzero.dev) built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies.

## Project Structure

```
voidzero-site/
├── index.html     → Main HTML structure & all sections
├── styles.css     → All styles, CSS variables, animations, responsive layout
├── main.js        → All JavaScript: ISO animation, tabs, counters, marquee
└── README.md      → This file
```

## Features

- **Fixed glassmorphism navbar** with live server badge
- **Announcement bar** with Vite+ alpha announcement
- **Hero section** with radial glow + CSS grid background
- **Infinite logo marquee** (Shopify, OpenAI, Framer, Linear, etc.)
- **Isometric 3D Stack Animation** — cycles through Vite → Rolldown → Oxc → Vite+
  - Layer lift/explode with easing
  - Spinning dashed ring + counter-rotating tool icons
  - Active pill labels (left & right) with connector lines
  - Sublabel text per tool (build tool, bundler, etc.)
- **OSS section** with 5 interactive tabs + terminal code previews
- **Stats section** with animated bar chart + scroll-triggered counters
- **Mission, Investors, Blog (8 cards), Newsletter, Footer**
- Fully responsive down to mobile

## How to Run

Just open `index.html` in any browser — no server or build step needed.

```bash
# macOS
open index.html

# Windows
start index.html

# Or drag & drop into Chrome/Firefox/Edge
```

## Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, keyframe animations, grid, flexbox
- **Vanilla JS** — SVG manipulation, requestAnimationFrame loop, IntersectionObserver
- **Google Fonts** — DM Sans + DM Mono
