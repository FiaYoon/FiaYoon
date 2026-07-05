# FiaYoon Portfolio — Vite Project (Phases 1–6 complete)

An immersive portfolio for goldfish artist **FiaYoon**, built on your original
prototype and restructured into a real, buildable Vite project with the six
requested phases layered on top.

```
fiayoon-portfolio/
├── index.html                    # slim shell: markup + SVG water filters + module tags
├── vite.config.js                # code-splitting (three/gsap), no base64 inlining
├── package.json                  # gsap + three
├── src/
│   ├── styles/global.css         # all :root vars, keyframes, view styles (+ phase CSS)
│   ├── scripts/main.js           # ported prototype logic + phase wiring
│   └── components/
│       ├── heroEntrance.js       # Phase 2 — GSAP intro entrance
│       ├── heroCursor.js         # Phase 2 — intro-specific cursor states
│       ├── carouselTilt.js       # Phase 3 — 3D carousel pointer tilt
│       ├── aquarium3D.js         # Phase 4 — Three.js scene + GLB hook (lazy-loaded)
│       └── aboutProgress.js      # Phase 5 — scroll progress rail
└── public/assets/
    ├── img/                      # 109 images (extracted from inline base64)
    └── video/                    # 4 reference clips (TRUE_3D, LOVE_3D, etc.)
```

## Run

```bash
npm install
npm run dev      # dev server with hot reload
npm run build    # production build → dist/
npm run preview  # serve the built dist/
```

## What each phase did

**Phase 1 — Environment.** Extracted 109 inline base64 images to real files
(9.8MB single file → ~120KB of code), split the monolith into global.css +
main.js, scaffolded Vite. Your CSS variables, keyframes, fonts, SPA router,
and all view logic were preserved, not rewritten.

**Phase 2 — Intro.** heroEntrance.js runs a GSAP timeline (water text →
greeting → name → button → arrow) timed to the loading-veil lift. heroCursor.js
adds two intro-only cursor states: a blue water-ripple halo inside the hero, and
a "Dive in" bubble label over Read Now. The feTurbulence/feDisplacementMap
water effect on the hero was already present and is preserved.

**Phase 3 — Artwork 3D.** The prototype already had a preserve-3d /
perspective carousel with prev/next, wheel, drag, dots, keyboard, and the
cardpop detail modal. Added genuine Z-axis depth (translateZ) so side cards
physically recede, plus carouselTilt.js for pointer-follow tilt on the
centered card.

**Phase 4 — True Aquarium.** The 2D layer (drag fish, drop pellets, bubbles,
hearts, multi-fish, photo download) was already complete. Added aquarium3D.js:
a Three.js depth layer behind the 2D fish with drifting 3D bubbles, caustic
light, and a placeholder goldfish built from primitives. It exposes
loadModel(url) — drop a .glb (exported from your TRUE_3D / LOVE_3D refs or
Spline) into public/assets/models/ and call it; the placeholder swaps out
automatically. See the commented line in main.js.

**Phase 5 — About storytelling.** Parallax orbs (data-par), IntersectionObserver
reveals (data-ar), flip cards with cross-browser backface-visibility, and the
space-themed starfield were already there. Added aboutProgress.js: a vertical
progress rail with a clickable node per chapter (True&Love → Worldview → Artist →
Love) that fills with scroll depth and highlights the active section.

**Phase 6 — Performance.**
- Code-split Three.js: it now loads only when TRUE AQUARIUM is first opened,
  via dynamic import(). Initial load dropped from ~180KB → ~57KB gzipped.
  three and gsap are split into separate cacheable chunks.
- Lazy images: loading="lazy" + decoding="async" on carousel, series,
  works grid, and palette images.
- Water filter gated: the costly per-frame feDisplacementMap recompute now
  runs only while the hero is on screen, and is skipped entirely under
  reduced-motion.
- Reduced-motion: honored in CSS (blanket rule) and in every JS module.
- will-change:transform/opacity was already applied across animated elements.

## Build output (gzipped)
- Initial: index.js ~19KB + gsap ~28KB + CSS ~11KB
- On aquarium open: three ~144KB + aquarium3D ~1.7KB (deferred)

## Adding your real 3D model later
1. Export a .glb from your TRUE_3D reference (or Spline → glTF).
2. Put it at public/assets/models/true.glb
3. In main.js, uncomment  // aqua3d.loadModel('/assets/models/true.glb');
   inside ensureAqua3D().
That's the only change needed — the loader and scene are already wired.
