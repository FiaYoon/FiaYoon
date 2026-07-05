/* =========================================================
   Phase 5 — About scroll storytelling: progress rail
   ---------------------------------------------------------
   The About page already has parallax orbs (data-par), the
   IntersectionObserver reveals (data-ar), flip cards, and the
   space-themed closing starfield. What it lacked was any sense
   of *where you are* in a long vertical story.

   This adds a slim vertical progress rail with a node per
   chapter (chars → world → info → love). The fill tracks scroll
   depth, and the active node lights up as each .ab-sec crosses
   center — reinforcing the seed→bloom narrative structure.

   Pure DOM + one rAF-throttled scroll listener, only wired
   while About exists. No layout thrash (reads then writes).
   ========================================================= */

export function initAboutProgress() {
  const view = document.getElementById('v-about');
  if (!view) return;

  const secs = [...view.querySelectorAll('.ab-sec')];
  if (!secs.length) return;

  const LABELS = {
    'ab-chars': 'True & Love',
    'ab-world': 'Worldview',
    'ab-info': 'Artist',
    'ab-love': 'Love'
  };

  // Build the rail
  const rail = document.createElement('div');
  rail.className = 'ab-progress';
  rail.setAttribute('aria-hidden', 'true');
  const fill = document.createElement('div');
  fill.className = 'ab-progress-fill';
  rail.appendChild(fill);

  const nodes = secs.map((s) => {
    const dot = document.createElement('button');
    dot.className = 'ab-progress-node';
    dot.type = 'button';
    dot.dataset.target = s.id;
    const lbl = LABELS[s.id] || '';
    dot.innerHTML = `<span class="apn-dot"></span><span class="apn-label">${lbl}</span>`;
    dot.addEventListener('click', () => {
      s.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    rail.appendChild(dot);
    return dot;
  });

  view.appendChild(rail);

  let tick = false;
  function update() {
    tick = false;
    const st = view.scrollTop;
    const max = view.scrollHeight - view.clientHeight;
    const pct = max > 0 ? Math.min(st / max, 1) : 0;
    fill.style.transform = `scaleY(${pct.toFixed(3)})`;

    // active chapter = the section whose top is nearest above center
    const center = st + view.clientHeight * 0.45;
    let activeIdx = 0;
    secs.forEach((s, i) => {
      if (s.offsetTop <= center) activeIdx = i;
    });
    nodes.forEach((n, i) => n.classList.toggle('on', i === activeIdx));
  }

  view.addEventListener('scroll', () => {
    if (!tick) { tick = true; requestAnimationFrame(update); }
  }, { passive: true });

  // expose so the router can refresh it when About becomes active
  view._refreshProgress = update;
  update();
}
