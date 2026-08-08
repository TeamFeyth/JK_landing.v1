/* robots.txt generado, no estatico, para que dependa de la misma variable
   que el noindex de Base.astro. Asi no quedan en contradiccion.

   Por defecto bloquea: mientras la landing viva en el subdominio de pruebas
   no debe indexarse. Se abre poniendo PUBLIC_ALLOW_INDEXING=true en
   Cloudflare, el dia del lanzamiento.

   Nota: si alguna vez hay que sacar de Google una URL YA indexada, hay que
   dejar el rastreo abierto para que el robot alcance a leer el noindex. Un
   Disallow le impide entrar y la URL se queda en el indice. */
import type { APIRoute } from 'astro';

const allowIndexing = import.meta.env.PUBLIC_ALLOW_INDEXING === 'true';

export const GET: APIRoute = () => {
  const body = allowIndexing
    ? ['User-agent: *', 'Allow: /', ''].join('\n')
    : ['User-agent: *', 'Disallow: /', ''].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
