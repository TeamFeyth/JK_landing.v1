/* Datos del negocio (NAP). Un solo lugar para cambiarlos. */

import { dmsPhoto } from './vehicles';

/* Foto de fondo del hero. Se eligio la primera del Nissan Frontier: los
   fotografos del lote suelen disparar el tres cuartos frontal de primero,
   que es justo el encuadre que pide la guia, y ese vehiculo tiene sesion
   completa (13 fotos), señal de que quedo bien tomada.
   Para cambiarla basta con poner otro id de vehiculo y otro archivo; los
   nombres de archivo estan en vehicles.ts. */
const HERO_VEHICLE = '8696803';
const HERO_FILE = '459851741707547.jpg';

export const site = {
  name: 'John Kamal Cars',
  domain: 'https://jkamalcars.com',

  /* CONFLICTO RESUELTO (verificado en jkamalcars.com el 07/08/2026):
     los DOS numeros son reales y cumplen funciones distintas.
     - (832) 447-1511 es el numero oficial del negocio: encabezado, pie de
       pagina y ficha de contacto del sitio. Es el que usa la landing.
     - 832-680-5892 aparece dentro de la descripcion de cada vehiculo como
       linea de llamadas y mensajes de texto de ventas.
     Confirmar con Feyth a cual quiere que entren los leads de la pauta. */
  phoneDisplay: '(832) 447-1511',
  phoneHref: '+18324471511',
  salesTextPhone: '(832) 680-5892',
  salesTextHref: '+18326805892',

  email: 'johnkamalcars@gmail.com',

  social: [
    'https://www.instagram.com/john_kamal_cars1/',
    'https://www.facebook.com/johnkamalcars',
    'https://www.youtube.com/channel/UCzR8ANPcnpOw7KpQppUdvNQ',
  ],

  /* Fondo del hero. Dos tamanos: el grande para desktop y uno liviano para
     movil, porque este archivo entra en el LCP y el LCP pesa en la
     calificacion de la landing en Meta. */
  heroImage: dmsPhoto(HERO_VEHICLE, HERO_FILE, 1920, 1080),
  heroImageSmall: dmsPhoto(HERO_VEHICLE, HERO_FILE, 900, 600),

  /* Imagen que se ve al compartir el enlace en WhatsApp o Facebook. 1200x630. */
  ogImage: dmsPhoto(HERO_VEHICLE, HERO_FILE, 1200, 630) as string | null,

  address: {
    street: '13141 Bissonnet St #C',
    city: 'Houston',
    state: 'TX',
    zip: '77099',
  },

  /* Enlace de direcciones. Se genera de la direccion de arriba. */
  get directionsUrl() {
    const q = `${this.address.street}, ${this.address.city}, ${this.address.state} ${this.address.zip}`;
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`;
  },

  hours: [
    { en: 'Monday', es: 'Lunes', time: '9:00 AM – 7:00 PM' },
    { en: 'Tuesday', es: 'Martes', time: '9:00 AM – 7:00 PM' },
    { en: 'Wednesday', es: 'Miércoles', time: '9:00 AM – 7:00 PM' },
    { en: 'Thursday', es: 'Jueves', time: '9:00 AM – 7:00 PM' },
    { en: 'Friday', es: 'Viernes', time: '9:00 AM – 7:00 PM' },
    { en: 'Saturday', es: 'Sábado', time: '9:00 AM – 5:00 PM' },
    { en: 'Sunday', es: 'Domingo', time: 'Closed', closed: true },
  ],

  legal: {
    /* CORRECCION: el cliente dijo que la politica de privacidad cubria los
       terminos, pero el sitio publica una pagina de Terms of Service aparte.
       Se enlazan las dos. */
    privacyUrl: 'https://jkamalcars.com/privacy-policy/',
    termsUrl: 'https://jkamalcars.com/terms-of-service/',
    /* El menu del cliente apunta a /all-inventory/. /vehicles/ es la ficha
       de un auto suelto, no el listado. */
    inventoryUrl: 'https://jkamalcars.com/all-inventory/',
  },
};
