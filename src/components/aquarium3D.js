/* =========================================================
   Phase 4 — TRUE AQUARIUM · Three.js 3D scene (boilerplate)
   ---------------------------------------------------------
   The existing 2D aquarium (drag fish, drop pellets, bubbles,
   hearts, multi-fish, download) lives in main.js and is fully
   working. This adds a WebGL depth layer *behind* that 2D play
   layer:

     • a slow-drifting field of 3D bubbles + caustic light,
     • a placeholder 3D goldfish (built from primitives) that
       idles and bobs, standing in until a real model arrives,
     • a documented `loadModel(url)` hook so you can drop in the
       .glb exported from your TRUE_3D / LOVE_3D references (or a
       Spline export) with one call — no other wiring needed.

   It only spins up when the aquarium view is active, and tears
   the render loop down on exit, so it costs nothing elsewhere.
   Honors prefers-reduced-motion (renders a single static frame).
   ========================================================= */
import * as THREE from 'three';

export function createAquarium3D(mountEl) {
  if (!mountEl) return { start() {}, stop() {}, loadModel() {} };

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  let renderer, scene, camera, raf = 0, running = false;
  let placeholder, bubbles = [], model = null, clock;
  let mountObserverDone = false;

  // WebGL can be unavailable (older devices, blocked contexts). If so we
  // silently no-op — the 2D aquarium still works on its own.
  function supported() {
    try {
      const c = document.createElement('canvas');
      return !!(c.getContext('webgl2') || c.getContext('webgl'));
    } catch (e) { return false; }
  }

  function build() {
    if (scene) return;
    scene = new THREE.Scene();

    const w = mountEl.clientWidth || window.innerWidth;
    const h = mountEl.clientHeight || window.innerHeight;

    camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.set(0, 0, 9);

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio = renderer.setPixelRatio || function () {};
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.domElement.style.cssText =
      'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0';
    mountEl.appendChild(renderer.domElement);

    // ----- lighting: soft top light + cool underwater fill -----
    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(2, 5, 4);
    scene.add(key);
    scene.add(new THREE.AmbientLight(0x5aa0d6, 0.55));
    const fill = new THREE.PointLight(0x8fd6ff, 0.8, 40);
    fill.position.set(-4, -2, 6);
    scene.add(fill);

    buildPlaceholderFish();
    buildBubbleField();

    clock = new THREE.Clock();
  }

  // ---- placeholder goldfish from primitives (swappable via loadModel) ----
  function buildPlaceholderFish() {
    placeholder = new THREE.Group();

    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0xff7a2d, roughness: 0.35, metalness: 0.1,
      emissive: 0xff5a1a, emissiveIntensity: 0.15
    });
    const finMat = new THREE.MeshStandardMaterial({
      color: 0xffa24d, roughness: 0.5, transparent: true, opacity: 0.85,
      side: THREE.DoubleSide
    });

    const body = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 24), bodyMat);
    body.scale.set(1.3, 0.95, 0.8);
    placeholder.add(body);

    // tail — a flattened cone
    const tail = new THREE.Mesh(new THREE.ConeGeometry(0.9, 1.4, 20), finMat);
    tail.scale.set(1, 1, 0.25);
    tail.rotation.z = Math.PI / 2;
    tail.position.x = -1.7;
    placeholder.add(tail);

    // top fin
    const topFin = new THREE.Mesh(new THREE.ConeGeometry(0.45, 0.9, 16), finMat);
    topFin.scale.set(1, 1, 0.2);
    topFin.position.set(0.1, 0.95, 0);
    placeholder.add(topFin);

    // eyes
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0x101010, roughness: 0.2 });
    const eyeGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
    eyeL.position.set(1.0, 0.25, 0.42);
    const eyeR = eyeL.clone(); eyeR.position.z = -0.42;
    placeholder.add(eyeL, eyeR);

    placeholder.rotation.y = -0.35;
    scene.add(placeholder);
  }

  function buildBubbleField() {
    const geo = new THREE.SphereGeometry(0.08, 10, 10);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xcdeeff, transparent: true, opacity: 0.35,
      roughness: 0, metalness: 0
    });
    for (let i = 0; i < 40; i++) {
      const b = new THREE.Mesh(geo, mat);
      b.position.set(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 6 - 2
      );
      const s = 0.4 + Math.random() * 1.6;
      b.scale.setScalar(s);
      b.userData.speed = 0.4 + Math.random() * 0.8;
      b.userData.drift = Math.random() * Math.PI * 2;
      scene.add(b);
      bubbles.push(b);
    }
  }

  function resize() {
    if (!renderer) return;
    const w = mountEl.clientWidth || window.innerWidth;
    const h = mountEl.clientHeight || window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  function render() {
    const t = clock.getElapsedTime();

    const swimmer = model || placeholder;
    if (swimmer) {
      swimmer.position.y = Math.sin(t * 0.9) * 0.4;
      swimmer.position.x = Math.sin(t * 0.5) * 1.2;
      swimmer.rotation.z = Math.sin(t * 0.9) * 0.08;
      swimmer.rotation.y = -0.35 + Math.sin(t * 0.5) * 0.25;
    }

    for (const b of bubbles) {
      b.position.y += b.userData.speed * 0.01;
      b.position.x += Math.sin(t + b.userData.drift) * 0.002;
      if (b.position.y > 6.5) b.position.y = -6.5;
    }

    renderer.render(scene, camera);
    if (running && !reduced) raf = requestAnimationFrame(render);
  }

  /* -----------------------------------------------------------
     Public: load a real model when you have one.

     Usage (later, once you export a .glb):
        aq3d.loadModel('/assets/models/true.glb');

     Requires the GLTFLoader, imported lazily so it isn't in the
     bundle until you actually call this. Drop your exported file
     in public/assets/models/ and pass its path.
  ----------------------------------------------------------- */
  async function loadModel(url) {
    if (!scene) build();
    try {
      const { GLTFLoader } = await import(
        'three/examples/jsm/loaders/GLTFLoader.js'
      );
      const loader = new GLTFLoader();
      loader.load(url, (gltf) => {
        if (placeholder) { scene.remove(placeholder); placeholder = null; }
        model = gltf.scene;
        // normalize scale to roughly fill the same footprint as the placeholder
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        model.scale.setScalar(3 / maxDim);
        scene.add(model);
      }, undefined, (err) => {
        console.warn('[aquarium3D] model load failed, keeping placeholder:', err);
      });
    } catch (e) {
      console.warn('[aquarium3D] GLTFLoader unavailable:', e);
    }
  }

  function start() {
    if (running || !supported()) return;
    build();
    resize();
    running = true;
    if (!mountObserverDone) {
      window.addEventListener('resize', resize);
      mountObserverDone = true;
    }
    if (reduced) {
      renderer.render(scene, camera); // single static frame
    } else {
      raf = requestAnimationFrame(render);
    }
  }

  function stop() {
    running = false;
    cancelAnimationFrame(raf);
  }

  return { start, stop, loadModel };
}
