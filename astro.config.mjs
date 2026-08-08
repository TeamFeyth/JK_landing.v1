import { defineConfig } from 'astro/config';

/* URL publica donde vive ESTE despliegue. De aqui salen el canonical y la
   URL absoluta del og:image.

   Ojo: no es el dominio del cliente. Mientras la landing viva en el
   subdominio de Cloudflare, apuntar esto a jkamalcars.com hacia dos cosas
   mal: declaraba que la pagina buena era la home del cliente, y armaba el
   og:image contra un dominio donde el archivo no existe (404, o sea que
   el enlace compartido en WhatsApp salia sin imagen).

   Se cambia en un solo lugar el dia que salga el subdominio real. */
const siteUrl = process.env.PUBLIC_SITE_URL;

if (!siteUrl) {
  console.warn(
    '\n  AVISO: PUBLIC_SITE_URL sin definir.\n' +
      '  El canonical y el og:image van a apuntar a jkamalcars.com, que no es\n' +
      '  donde vive este despliegue. Definirla en Cloudflare (Production y\n' +
      '  Preview por separado) antes de compartir el enlace.\n',
  );
}

export default defineConfig({
  site: siteUrl || 'https://jkamalcars.com',
  output: 'static',
  build: {
    // Inserta el CSS critico en linea. Menos peticiones = mejor LCP.
    inlineStylesheets: 'auto',
  },
  devToolbar: { enabled: false },
});
