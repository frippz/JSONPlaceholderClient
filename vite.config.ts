import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 4444,
  },
  css: {
    devSourcemap: true,
  },
  plugins: [sveltekit()],
});
