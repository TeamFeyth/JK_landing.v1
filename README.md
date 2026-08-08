# John Kamal Cars — Landing Page

Astro estático. Salida a Cloudflare Pages.

## Arrancar

```bash
npm install
cp .env.example .env    # llenar cuando lleguen las credenciales
npm run dev             # http://localhost:4321
```

Otros comandos: `npm run build`, `npm run preview`, `npm run check`.

## VS Code

Al abrir la carpeta, VS Code ofrece instalar las extensiones recomendadas.
La única indispensable es **Astro** (`astro-build.astro-vscode`).

## Despliegue en Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Variables de entorno: las de `.env.example`, con el prefijo `PUBLIC_`

## Dónde tocar qué

| Necesitas cambiar | Archivo |
|---|---|
| Colores, tipografía, espaciado | `src/styles/tokens.css` |
| Botones y campos de formulario | `src/styles/components.css` |
| Textos EN/ES | `src/data/copy.ts` |
| Dirección, teléfono, horario | `src/data/site.ts` |
| Vehículos destacados | `src/data/vehicles.ts` |
| Lógica del formulario | `src/components/LeadForm.astro` |
| Pixel de Meta | `src/components/MetaPixel.astro` |

Los tres formularios (hero, popup, bottom) son el **mismo componente**.
Cambiar un campo se hace en un solo lugar.

## Qué manda el formulario

Los 5 campos visibles más: `source` (hero/popup/bottom), `stock`, `event_id`,
`page_url`, `referrer`, `submitted_at`, `fbc`, `fbp` y los 5 `utm_*`.

`event_id` es lo que permite deduplicar. El Pixel lo manda como `eventID` y la
CAPI tiene que reenviar **el mismo valor** como `event_id`. Sin eso cada lead
se cuenta dos veces.

Todo va en un POST JSON a `PUBLIC_WEBHOOK_URL`. Ese webhook (Zapier/Make/n8n)
reparte a Neo CRM y al Google Sheet.

Al enviar, redirige a `/thank-you/?source=...`, y ahí se dispara el evento
`Lead` del Pixel. Un solo evento estándar con el origen como parámetro.

## Pendientes que bloquean producción

| Pendiente | De quién | Dónde entra |
|---|---|---|
| **Enganche de 5 de los 6 autos** | Cliente / Feyth | `src/data/vehicles.ts` |
| **Millaje del Passat** (56,825 vs "107k") | Cliente / Feyth | `src/data/vehicles.ts` |
| Endpoint del webhook | Noor + automatización | `.env` |
| Dataset/Pixel ID | Salem | `.env` |
| Site key de reCAPTCHA | Cliente | `.env` |
| Hex de Lot Navy, Slate, Concrete, Approved, Caution | Feyth | `src/styles/tokens.css` |
| Disclaimer de financiamiento | Cliente | `src/data/copy.ts` |
| Foto de fondo del hero + imagen og | Cliente | `Hero.astro` · `site.ts` |

Los datos y las fotos de los 6 vehículos ya están cargados, leídos del DMS del
cliente el 07/08/2026. **No hay conexión al DMS**: son estáticos, por orden de
Feyth.

Las fotos se sirven desde el CDN del DMS. Antes de encender pauta conviene
bajarlas a `public/images/vehicles/`: si el DMS activa protección de hotlinking
o el auto se vende, la tarjeta se queda sin imagen.

## Conflictos sin resolver en los documentos

1. **Teléfono. RESUELTO** — los dos números existen y son distintos.
   `(832) 447-1511` es el oficial del negocio (encabezado y pie del sitio del
   cliente) y es el que usa la landing. `832-680-5892` es la línea de ventas
   por llamada y texto, y aparece dentro de la descripción de cada vehículo.
   Falta que Feyth decida a cuál deben entrar los leads de la pauta.
2. **Switch EN/ES.** La guía pide un selector de idioma en el nav, pero la
   decisión del proyecto es mostrar los dos idiomas siempre. No se incluyó
   el switch porque se contradicen.
3. **Dos primarios en el hero.** El copy lista un CTA "Get Pre-Approved" y
   además el submit del formulario. La guía prohíbe dos primarios en una
   vista. Se dejó solo el submit.
4. **Campos de la tarjeta.** La versión nueva del documento quitó precio,
   pago, plazo y APR. Están soportados en el código y se pintan solos
   cuando dejen de ser `null`.
"# JK_Landing" 
