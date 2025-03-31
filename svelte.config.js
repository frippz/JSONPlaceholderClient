import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    alias: {
      $styles: 'src/styles',
      $types: 'src/types',
    },
    adapter: adapter(),
    csp: {
      directives: {
        'script-src': ['self'],
      },
      reportOnly: {
        'script-src': ['self'],
      },
    },
  },
};

export default config;
