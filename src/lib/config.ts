/* Configuracion del navegador. Los valores por defecto son los que dejan la
   landing funcionando sin tocar nada en Cloudflare; cada uno se sobreescribe
   con su variable PUBLIC_. */

/* Llave publica de prueba de Cloudflare Turnstile: siempre aprueba. */
const TEST_TURNSTILE_SITE_KEY = '1x00000000000000000000AA';

export const LANDING_ID = 'lp1';

/* Sin fallback a proposito. Antes habia un pixel de prueba por defecto y eso
   escondio durante semanas que PUBLIC_META_PIXEL_ID no estuviera surtiendo
   efecto: los eventos salian igual, pero a un dataset que no era el de la
   cuenta publicitaria. Un cero en Events Manager se detecta el primer dia;
   datos en el dataset equivocado, no. */
export const META_PIXEL_ID = import.meta.env.PUBLIC_META_PIXEL_ID ?? '';

/* Dominio publico de ESTE despliegue. El pixel solo carga aqui, para que los
   deploys de preview (*.pages.dev) y localhost no escriban en el dataset de
   produccion. */
export const SITE_URL = import.meta.env.PUBLIC_SITE_URL ?? '';

/* Token de verificacion de dominio de Meta.
   Necesario para configurar los 8 eventos priorizados de Aggregated Event
   Measurement. Sin eso, el trafico de iOS con ATT no atribuye, y la mayoria
   de estos leads llegan de m.facebook.com en movil.

   El token lo genera el equipo de ads en Business Settings -> Brand Safety ->
   Domains, en el portafolio que es DUENO del dataset (Feyth Marketing). Cada
   dominio tiene el suyo, asi que este valor NO es el mismo en los dos
   proyectos. Se pega en Cloudflare y listo, no hace falta tocar codigo. */
export const FB_DOMAIN_VERIFICATION = import.meta.env.PUBLIC_FB_DOMAIN_VERIFICATION ?? '';

/* Nombre de evento propio de esta landing.
   Las dos landings mandan el mismo evento estandar Lead al mismo dataset, y
   hasta ahora solo se distinguian por la URL o por un parametro personalizado.
   Meta descarta ambas cosas en datasets con restricciones de categoria, asi
   que ese criterio dejo de funcionar. El NOMBRE del evento si sobrevive. */
export const LEAD_EVENT_NAME = `${LANDING_ID}_lead`;

export const REQUIRE_COOKIE_CONSENT =
  (import.meta.env.PUBLIC_REQUIRE_COOKIE_CONSENT ?? 'true') === 'true';

/* El formulario habla con la funcion del mismo dominio. Ahi se verifica el
   captcha y se arma el ADF que Neo CRM importa. */
export const LEAD_ENDPOINT = import.meta.env.PUBLIC_LEAD_ENDPOINT || '/api/lead';

export const CAPTCHA_PROVIDER = (import.meta.env.PUBLIC_CAPTCHA_PROVIDER ||
  'turnstile') as 'turnstile' | 'recaptcha' | 'none';

export const TURNSTILE_SITE_KEY =
  import.meta.env.PUBLIC_TURNSTILE_SITE_KEY || TEST_TURNSTILE_SITE_KEY;

export const RECAPTCHA_SITE_KEY = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY ?? '';
