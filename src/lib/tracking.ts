/* Recoleccion de datos de atribucion en el navegador.
   Todo esto viaja en campos ocultos del formulario hacia el webhook,
   y de ahi a Neo CRM. La CAPI los necesita despues para atribuir la
   conversion al anuncio correcto. */

import { LANDING_ID } from './config';

export const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
] as const;

export function getCookie(name: string): string {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : '';
}

/* _fbc identifica el clic del anuncio. Si Meta aun no puso la cookie,
   se arma a partir del parametro fbclid de la URL. */
export function getFbc(): string {
  const cookie = getCookie('_fbc');
  if (cookie) return cookie;

  const fbclid = new URLSearchParams(window.location.search).get('fbclid');
  if (!fbclid) return '';
  return `fb.1.${Date.now()}.${fbclid}`;
}

/* _fbp identifica el navegador. Solo existe si el pixel ya cargo. */
export function getFbp(): string {
  return getCookie('_fbp');
}

/* Identificador unico del envio. El pixel lo manda como eventID y la funcion
   lo pone en el ADF, para que la CAPI pueda deduplicar despues. */
export function newEventId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `jk-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function getUtms(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const out: Record<string, string> = {};
  for (const key of UTM_KEYS) {
    out[key] = params.get(key) ?? '';
  }
  return out;
}

/* Todo lo que acompana al lead ademas de los 5 campos visibles. */
export function collectContext(source: string, stock: string) {
  return {
    landing: LANDING_ID,
    source,
    stock,
    event_id: newEventId(),
    page_url: window.location.href,
    landing_url: window.location.href,
    referrer: document.referrer,
    submitted_at: new Date().toISOString(),
    fbc: getFbc(),
    fbp: getFbp(),
    fbclid: new URLSearchParams(window.location.search).get('fbclid') ?? '',
    ...getUtms(),
  };
}
