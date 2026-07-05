/* =========================================================
   Phase 3 — Carousel center-card pointer tilt
   The 3D LP carousel (build/layout/go/next/prev, wheel, drag,
   dots, keyboard) already lives in main.js. This adds a
   floating parallax tilt on the *centered* card that follows
   the pointer, giving the front card a sense of physical
   presence in the perspective scene.

   It layers a CSS custom-property rotation the card's own
   transform reads, so it never fights the layout() transform
   that positions every card.
   ========================================================= */

export function initCarouselTilt() {
  const stage = document.getElementById('lpStage');
  if (!stage) return;

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;

  let raf = null;
  let tx = 0, ty = 0;      // target tilt
  let cx = 0, cy = 0;      // current (eased) tilt

  function apply() {
    cx += (tx - cx) * 0.12;
    cy += (ty - cy) * 0.12;
    const center = stage.querySelector('.lp-card.center');
    if (center) {
      center.classList.add('tilting');
      center.style.setProperty('--tiltX', cy.toFixed(2) + 'deg');
      center.style.setProperty('--tiltY', cx.toFixed(2) + 'deg');
    }
    if (Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05) {
      raf = requestAnimationFrame(apply);
    } else {
      raf = null;
      // settled back to rest: drop the class so the next slide change animates
      if (center && tx === 0 && ty === 0) center.classList.remove('tilting');
    }
  }

  function schedule() {
    if (!raf) raf = requestAnimationFrame(apply);
  }

  stage.addEventListener('pointermove', (e) => {
    const r = stage.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;   // -0.5..0.5
    const py = (e.clientY - r.top) / r.height - 0.5;
    tx = px * 12;   // horizontal pointer → rotateY
    ty = -py * 10;  // vertical pointer → rotateX
    schedule();
  }, { passive: true });

  stage.addEventListener('pointerleave', () => {
    tx = 0; ty = 0;
    schedule();
  });
}
