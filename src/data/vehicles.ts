/* Vehiculos destacados.
   Fuente: URLs entregadas por el cliente. El numero de la URL es el ID del
   registro en el DMS de Auto Action.

   PENDIENTE: trim, millaje, stock, enganche, pago, precio, plazo y APR estan
   en null hasta que Auto Action mande los datos. La tarjeta oculta cualquier
   campo en null, asi que la pagina compila igual.

   PENDIENTE: las fotos van en /public/images/vehicles/. Si las URLs del DMS
   resultan publicas y estables, se puede cambiar `photo` por la URL remota. */

export interface Vehicle {
  id: string;              // ID del registro en Auto Action
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
  photo: string | null;    // ruta local o URL del DMS
  photoAlt: string | null;
  detailUrl: string;
}

export const vehicles: Vehicle[] = [
  {
    id: '11713907',
    year: 2017, make: 'Honda', model: 'Accord', trim: null,
    mileage: null, stock: null,
    downPayment: null, payment: null, paymentFrequency: null,
    price: null, termMonths: null, apr: null,
    photo: null, photoAlt: null,
    detailUrl: 'https://jkamalcars.com/vehicles/11713907-2017-Honda-Accord/',
  },
  {
    id: '8696803',
    year: 2020, make: 'Nissan', model: 'Frontier', trim: null,
    mileage: null, stock: null,
    downPayment: null, payment: null, paymentFrequency: null,
    price: null, termMonths: null, apr: null,
    photo: null, photoAlt: null,
    detailUrl: 'https://jkamalcars.com/vehicles/8696803-2020-Nissan-Frontier/',
  },
  {
    id: '5732699',
    year: 2017, make: 'Volkswagen', model: 'Passat', trim: null,
    mileage: null, stock: null,
    downPayment: null, payment: null, paymentFrequency: null,
    price: null, termMonths: null, apr: null,
    photo: null, photoAlt: null,
    detailUrl: 'https://jkamalcars.com/vehicles/5732699-2017-Volkswagen-Passat/',
  },
  {
    id: '7469809',
    year: 2016, make: 'Acura', model: 'ILX', trim: null,
    mileage: null, stock: null,
    downPayment: null, payment: null, paymentFrequency: null,
    price: null, termMonths: null, apr: null,
    photo: null, photoAlt: null,
    detailUrl: 'https://jkamalcars.com/vehicles/7469809-2016-Acura-ILX/',
  },
  {
    id: '9498431',
    year: 2016, make: 'Cadillac', model: 'SRX', trim: null,
    mileage: null, stock: null,
    downPayment: null, payment: null, paymentFrequency: null,
    price: null, termMonths: null, apr: null,
    photo: null, photoAlt: null,
    detailUrl: 'https://jkamalcars.com/vehicles/9498431-2016-Cadillac-SRX/',
  },
  {
    id: '5730951',
    year: 2014, make: 'Chevrolet', model: 'Malibu', trim: null,
    mileage: null, stock: null,
    downPayment: null, payment: null, paymentFrequency: null,
    price: null, termMonths: null, apr: null,
    photo: null, photoAlt: null,
    detailUrl: 'https://jkamalcars.com/vehicles/5730951-2014-Chevrolet-Malibu/',
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
