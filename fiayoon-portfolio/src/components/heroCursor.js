/* =========================================================
   Phase 2 — Custom cursor, intro-section behavior
   The base fish cursor + its generic .big hover state already
   exist in main.js. This layers two extra states that only
   apply while inside #v-hello, so the cursor visibly reacts
   differently in the intro versus the rest of the site:

     .in-hero   — soft blue "water ripple" halo behind the fish,
                  active anywhere inside the hero section.
     .on-read   — small "Dive In" bubble label next to the
                  cursor, active specifically over the Read Now
                  button (layers on top of the existing .big state).
   ========================================================= */

export function initHeroCursor() {
  const cur = document.getElementById('cur');
  const hero = document.getElementById('v-hello');
  const btn = document.getElementById('moreBtn');
  if (!cur || !hero) return;

  // Reuse one label element instead of creating/removing nodes on
  // every hover, to keep pointermove-adjacent work cheap.
  const label = document.createElement('span');
  label.className = 'cur-label';
  label.textContent = 'Dive in';
  cur.appendChild(label);

  hero.addEventListener('pointerenter', () => cur.classList.add('in-hero'));
  hero.addEventListener('pointerleave', () => cur.classList.remove('in-hero'));

  if (btn) {
    btn.addEventListener('pointerenter', () => cur.classList.add('on-read'));
    btn.addEventListener('pointerleave', () => cur.classList.remove('on-read'));
  }
}
