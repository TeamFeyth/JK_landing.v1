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

const STORE_KEY = 'jk_attr';

interface Attribution {
  fbclid: string;
  clickedAt: number; // momento real de la llegada, no del envio
  utms: Record<string, string>;
}

function readStore(): Attribution | null {
  try {
    const raw = sessionStorage.getItem(STORE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : null;
  } catch {
    return null;
  }
}

/* Se llama una vez por carga de pagina, lo antes posible.
   Solo escribe si hay algo nuevo: la primera llegada es la que atribuye. */
export function captureAttribution(): void {
  const params = new URLSearchParams(window.location.search);
  const fbclid = params.get('fbclid') ?? '';

  const utms: Record<string, string> = {};
  let hasUtm = false;
  for (const key of UTM_KEYS) {
    const v = params.get(key) ?? '';
    utms[key] = v;
    if (v) hasUtm = true;
  }

  if (!fbclid && !hasUtm) return; // nada que guardar
  if (readStore()) return; // ya hay una primera llegada

  try {
    sessionStorage.setItem(
      STORE_KEY,
      JSON.stringify({ fbclid, clickedAt: Date.now(), utms } satisfies Attribution),
    );
  } catch {
    /* modo privado: se sigue sin persistencia */
  }
}

export function getCookie(name: string): string {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : '';
}

/* _fbc identifica el clic del anuncio. Si Meta aun no puso la cookie
   (por ejemplo porque el pixel espera al consentimiento), se arma a mano.
   El timestamp debe ser el de la llegada: Meta lo usa para la ventana
   de atribucion. */
export function getFbc(): string {
  const cookie = getCookie('_fbc');
  if (cookie) return cookie;

  const stored = readStore();
  if (stored?.fbclid) return `fb.1.${stored.clickedAt}.${stored.fbclid}`;

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
  const stored = readStore();
  const out: Record<string, string> = {};
  for (const key of UTM_KEYS) {
    out[key] = params.get(key) || stored?.utms?.[key] || '';
  }
  return out;
}

/* Identificador unico del evento. El mismo valor lo manda el Pixel como
   eventID y la CAPI como event_id; asi Meta cuenta un solo Lead en vez
   de dos. Sin esto, Pixel y CAPI se duplican. */
export function newEventId(): string {
  const c = globalThis.crypto;
  if (c && typeof c.randomUUID === 'function') return c.randomUUID();
  return `lead-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

/* Todo lo que acompana al lead ademas de los 5 campos visibles. */
export function collectContext(source: string, stock: string, eventId: string) {
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
