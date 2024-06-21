import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  site: 'https://dmrompav.github.io',
  base: '/pavlov',

  integrations: [
    UnoCSS({
      injectReset: '@unocss/reset/tailwind.css'
    }),
  ],

  vite: {
    resolve: {
      alias: {
        '@': path.resolve(path.dirname('./'), 'src')
      }
    }
  }
});
