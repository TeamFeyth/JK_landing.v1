import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jkamalcars.com',
  output: 'static',
  build: {
    // Inserta el CSS critico en linea. Menos peticiones = mejor LCP.
    inlineStylesheets: 'auto',
  },
  devToolbar: { enabled: false },
});
