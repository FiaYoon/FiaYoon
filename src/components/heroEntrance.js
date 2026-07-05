/* =========================================================
   Phase 2 — Hero entrance animation (v-hello)
   Fires once, right as the intro veil lifts. Split into its
   own module so main.js (ported from the original prototype)
   stays untouched and this can be iterated on independently.
   ========================================================= */
import gsap from 'gsap';

export function initHeroEntrance() {
  const hi = document.querySelector('.hero .hi');
  const role = document.querySelector('.hero .role');
  const btn = document.getElementById('moreBtn');
  const ftext = document.querySelector('#fishWindow .ftext');
  const veil = document.getElementById('veil');

  if (!hi || !role || !btn) return;

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Set the starting (hidden) state immediately so there's no flash
  // of the fully-visible text before the timeline runs.
  gsap.set([hi, role, btn], { opacity: 0, y: reduced ? 0 : 28 });
  if (ftext) gsap.set(ftext, { opacity: 0 });

  function playEntrance() {
    if (reduced) {
      gsap.set([hi, role, btn, ftext].filter(Boolean), { opacity: 1, y: 0 });
      return;
    }
    const tl = gsap.timeline({ defaults: { ease: 'back.out(1.6)' } });
    tl.to(ftext, { opacity: 1, duration: 1.1, ease: 'power2.out' }, 0)
      .to(hi, { opacity: 1, y: 0, duration: 0.7 }, 0.15)
      .to(role, { opacity: 1, y: 0, duration: 0.85 }, 0.32)
      .fromTo(
        btn,
        { opacity: 0, y: 28, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7 },
        0.6
      )
      .from(
        btn.querySelector('.arr'),
        { x: -6, opacity: 0, duration: 0.4, ease: 'power2.out' },
        0.95
      );
  }

  // The existing prototype removes the loading veil ~900ms after
  // window `load` (see main.js bottom). We hook the same moment so
  // the hero animates in exactly as the veil clears, instead of
  // firing independently and risking a mistimed overlap.
  if (veil) {
    const obs = new MutationObserver(() => {
      if (veil.classList.contains('gone')) {
        playEntrance();
        obs.disconnect();
      }
    });
    obs.observe(veil, { attributes: true, attributeFilter: ['class'] });
    // Fallback in case the veil never gets the class (e.g. this
    // module loads after it already fired).
    setTimeout(() => {
      if (veil.classList.contains('gone')) return;
      playEntrance();
      obs.disconnect();
    }, 1600);
  } else {
    playEntrance();
  }
}
