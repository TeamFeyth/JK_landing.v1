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

Los 5 campos visibles más: `source` (hero/popup/bottom), `stock`,
`page_url`, `referrer`, `submitted_at`, `fbc`, `fbp` y los 5 `utm_*`.

Todo va en un POST JSON a `PUBLIC_WEBHOOK_URL`. Ese webhook (Zapier/Make/n8n)
reparte a Neo CRM y al Google Sheet.

Al enviar, redirige a `/thank-you/?source=...`, y ahí se dispara el evento
`Lead` del Pixel. Un solo evento estándar con el origen como parámetro.

## Pendientes que bloquean producción

| Pendiente | De quién | Dónde entra |
|---|---|---|
| Logo PNG/SVG | Cliente | `src/components/Logo.astro` |
| Fotos de vehículos | Auto Action | `public/images/vehicles/` |
| Specs, precios, enganche, plazo, APR | Auto Action | `src/data/vehicles.ts` |
| Dataset/Pixel ID | Salem | `.env` |
| Endpoint del webhook | Noor + automatización | `.env` |
| Site key de reCAPTCHA | Cliente | `.env` |
| Hex de Lot Navy, Slate, Concrete, Approved, Caution | Feyth | `src/styles/tokens.css` |
| Disclaimer de financiamiento | Cliente | `src/data/copy.ts` |
| Foto de fondo del hero | Cliente | `src/components/Hero.astro` |

## Conflictos sin resolver en los documentos

1. **Teléfono.** La guía de marca dice `832.680.5892`, el copy dice
   `(832) 447-1511`. Se usa el segundo. Confirmar.
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
