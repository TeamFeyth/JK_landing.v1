/* Datos del negocio (NAP). Un solo lugar para cambiarlos. */

export const site = {
  name: 'John Kamal Cars',
  domain: 'https://jkamalcars.com',

  /* CONFLICTO PENDIENTE: la guia de marca dice 832.680.5892, el documento de
     copy dice (832) 447-1511. Se usa el del copy por ser mas reciente.
     Confirmar con Feyth cual es el correcto. */
  phoneDisplay: '(832) 447-1511',
  phoneHref: '+18324471511',

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
    /* La politica de privacidad cubre tambien los terminos, segun el cliente. */
    privacyUrl: 'https://jkamalcars.com/privacy-policy/',
    inventoryUrl: 'https://jkamalcars.com/vehicles/',
  },
};
