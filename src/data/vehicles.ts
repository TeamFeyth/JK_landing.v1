/* Vehiculos destacados.
   Fuente: DMS del cliente (Autodealers.Digital), leido de jkamalcars.com
   el 07/08/2026. El id es el mismo del registro en el DMS.

   FOTOS: descargadas y optimizadas en /public/images/vehicles/ (webp 800x600).
   Ya no dependen del CDN del DMS, asi no se caen si activan hotlinking.
   dmsPhoto() se conserva como referencia por si hay que re-tirar del DMS.

   ENGANCHES: confirmados por Feyth el 07/08/2026. Mandan sobre lo que
   publica el sitio del cliente, que traia cifras contradictorias.

   ORDEN: de menor a mayor enganche. El visitante ve primero lo mas
   alcanzable, que es como compra la gente en Buy Here Pay Here. */

const CDN = 'https://cdn-thumbor.autodealersdigital.com/unsafe/fit-in';
const FILTERS =
  'filters:upscale():max_bytes(500000):quality(100):fill(blur):sharpen(0.7,0.5,true):format(jpg)';
const DEALER_ID = '104878';

/* Arma la URL de una foto del DMS al tamano pedido. 4:3 para tarjetas. */
export function dmsPhoto(vehicleId: string, file: string, w = 800, h = 600): string {
  return `${CDN}/${w}x${h}/${FILTERS}/${DEALER_ID}/${vehicleId}/${file}`;
}

export interface Vehicle {
  id: string;              // ID del registro en el DMS
  year: number;
  make: string;
  model: string;
  trim: string | null;
  mileage: number | null;
  stock: string | null;
  downPayment: number | null;
  payment: number | null;
  paymentFrequency: 'bi-weekly' | 'monthly' | null;
  price: number | null;
  termMonths: number | null;
  apr: number | null;
  photo: string | null;    // URL completa lista para el <img>
  photoFile: string | null; // nombre del archivo, para armar el srcset
  photoAlt: string | null;
  detailUrl: string;
}

export const vehicles: Vehicle[] = [
  {
    /* Enganche confirmado por Feyth. */
    id: '5730951',
    year: 2014, make: 'Chevrolet', model: 'Malibu', trim: 'LS',
    mileage: 149035, stock: '279227',
    downPayment: 1000, payment: null, paymentFrequency: null,
    price: null, termMonths: null, apr: null,
    photo: '/images/vehicles/chevrolet-malibu-279227.webp',
    photoFile: '5730951_1.jpg',
    photoAlt: '2014 Chevrolet Malibu LS blanco en el lote de John Kamal Cars',
    detailUrl: 'https://jkamalcars.com/vehicles/5730951-2014-Chevrolet-Malibu/',
  },
  {
    /* Enganche confirmado por Feyth. */
    id: '9498431',
    year: 2016, make: 'Cadillac', model: 'SRX', trim: 'FWD 4dr Base',
    mileage: 84593, stock: '580523',
    downPayment: 1000, payment: null, paymentFrequency: null,
    price: null, termMonths: null, apr: null,
    photo: '/images/vehicles/cadillac-srx-580523.webp',
    photoFile: '659881776522944.jpg',
    photoAlt: '2016 Cadillac SRX blanca en el lote de John Kamal Cars',
    detailUrl: 'https://jkamalcars.com/vehicles/9498431-2016-Cadillac-SRX/',
  },
  {
    /* Enganche confirmado por Feyth. */
    id: '7469809',
    year: 2016, make: 'Acura', model: 'ILX', trim: '4dr Sdn',
    mileage: 104742, stock: '023616',
    downPayment: 1500, payment: null, paymentFrequency: null,
    price: null, termMonths: null, apr: null,
    photo: '/images/vehicles/acura-ilx-023616.webp',
    photoFile: '122551762366694.jpg',
    photoAlt: '2016 Acura ILX azul en el lote de John Kamal Cars',
    detailUrl: 'https://jkamalcars.com/vehicles/7469809-2016-Acura-ILX/',
  },
  {
    /* Millaje: se usa el alto (107k del anuncio) por indicacion de Feyth.
       El odometro del DMS marca 56,825 mi. Es una cifra redondeada; si
       aparece el numero exacto del odometro, cambiarlo aqui. */
    id: '5732699',
    year: 2017, make: 'Volkswagen', model: 'Passat', trim: '1.8T SE',
    mileage: 107000, stock: '035985',
    downPayment: 1500, payment: null, paymentFrequency: null,
    price: null, termMonths: null, apr: null,
    photo: '/images/vehicles/volkswagen-passat-035985.webp',
    photoFile: '179541761596051.jpg',
    photoAlt: '2017 Volkswagen Passat negro en el lote de John Kamal Cars',
    detailUrl: 'https://jkamalcars.com/vehicles/5732699-2017-Volkswagen-Passat/',
  },
  {
    /* Enganche confirmado por Feyth. */
    id: '8696803',
    year: 2020, make: 'Nissan', model: 'Frontier', trim: 'King Cab 4x2 S',
    mileage: 77489, stock: '706452',
    downPayment: 2000, payment: null, paymentFrequency: null,
    price: null, termMonths: null, apr: null,
    photo: '/images/vehicles/nissan-frontier-706452.webp',
    photoFile: '459851741707547.jpg',
    photoAlt: '2020 Nissan Frontier King Cab plateada en el lote de John Kamal Cars',
    detailUrl: 'https://jkamalcars.com/vehicles/8696803-2020-Nissan-Frontier/',
  },
  {
    /* Enganche confirmado por Feyth. El sitio del cliente publica $2,800. */
    id: '11713907',
    year: 2017, make: 'Honda', model: 'Accord', trim: 'LX CVT',
    mileage: 84325, stock: '212255',
    downPayment: 2500, payment: null, paymentFrequency: null,
    price: null, termMonths: null, apr: null,
    photo: '/images/vehicles/honda-accord-212255.webp',
    photoFile: '420741776533779.jpg',
    photoAlt: '2017 Honda Accord LX gris en el lote de John Kamal Cars',
    detailUrl: 'https://jkamalcars.com/vehicles/11713907-2017-Honda-Accord/',
  },
];

export function money(n: number | null): string | null {
  if (n === null) return null;
  return '$' + n.toLocaleString('en-US');
}

export function miles(n: number | null): string | null {
  if (n === null) return null;
  return n.toLocaleString('en-US');
}
