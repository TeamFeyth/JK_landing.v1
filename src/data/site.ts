/* Datos del negocio (NAP). Un solo lugar para cambiarlos. */

export const site = {
  name: 'John Kamal Cars',
  domain: 'https://jkamalcars.com',

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
  heroImage: '/images/brand/hero_image_desktop.webp',
  heroImageSmall: '/images/brand/hero_image_mobile.webp',

  /* Imagen que se ve al compartir el enlace en WhatsApp o Facebook. */
  ogImage: '/images/brand/hero_image_desktop.webp' as string | null,

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
