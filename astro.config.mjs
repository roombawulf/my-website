import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import glsl from 'vite-plugin-glsl';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [glsl()]
  }
});