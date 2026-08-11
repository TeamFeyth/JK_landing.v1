/* Configuracion del navegador. Los valores por defecto son los que dejan la
   landing funcionando sin tocar nada en Cloudflare; cada uno se sobreescribe
   con su variable PUBLIC_. */

/* Pixel de prueba entregado por Feyth. */
const TEST_PIXEL_ID = '1042412788159075';

/* Llave publica de prueba de Cloudflare Turnstile: siempre aprueba. */
const TEST_TURNSTILE_SITE_KEY = '1x00000000000000000000AA';

export const LANDING_ID = 'lp1';

export const META_PIXEL_ID = import.meta.env.PUBLIC_META_PIXEL_ID || TEST_PIXEL_ID;

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
