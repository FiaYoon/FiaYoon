import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0, // never inline images as base64 — keep them as real files
    sourcemap: true,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        // Split heavy libraries into their own cacheable chunks. Three.js
        // is already dynamically imported (aquarium-only); this keeps gsap
        // and the core app separated so a change to one doesn't bust the
        // other's cache.
        manualChunks(id) {
          if (id.includes('node_modules/three')) return 'three';
          if (id.includes('node_modules/gsap')) return 'gsap';
        }
      }
    }
  },
  server: {
    port: 5173,
    open: true
  }
});
