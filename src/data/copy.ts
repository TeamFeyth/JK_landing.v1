/* Todo el texto de la pagina, en pares ingles / espanol.
   Ingles siempre primero. El espanol se renderiza debajo en italica.
   El copy en ingles viene tal cual del documento del cliente. */

export const copy = {
  meta: {
    title: 'Get Pre-Approved Today — No Bank, No Credit Score | John Kamal Cars',
    description:
      '100% in-house financing in Houston. Your job is your credit. No banks, no credit score needed. Get pre-approved in minutes.',
  },

  nav: {
    inventory: { en: 'Inventory', es: 'Inventario' },
    howItWorks: { en: 'How it works', es: 'Cómo funciona' },
    call: { en: 'Call', es: 'Llámanos' },
    skip: { en: 'Skip to form', es: 'Ir al formulario' },
  },

  hero: {
    headline: { en: 'Your job is your credit.', es: 'Aquí, tu trabajo es tu crédito.' },
    sub: {
      en: '100% in-house financing on cars, trucks & SUVs in Houston. No banks. No credit score needed.',
      es: 'Financiamiento 100% propio en autos, camionetas y SUVs en Houston. Sin bancos. Sin score de crédito.',
    },
    bullets: [
      { en: 'No credit check required', es: 'Sin revisión de crédito' },
      { en: 'Approved on your income, not your past', es: 'Aprobación por tus ingresos, no por tu pasado' },
      { en: 'Most applicants approved the same day', es: 'La mayoría recibe aprobación el mismo día' },
    ],
  },

  form: {
    heroHeadline: { en: 'Get pre-approved — no obligation', es: 'Solicita tu preaprobación, sin compromiso' },
    heroSub: {
      en: 'Takes about a minute. A specialist will reach out shortly.',
      es: 'Toma alrededor de un minuto. Un asesor te contactará en breve.',
    },
    bottomHeadline: { en: 'Ready to get approved?', es: '¿Listo para tu aprobación?' },
    bottomSub: {
      en: 'No banks. No pressure. Just a real conversation about what fits your budget.',
      es: 'Sin bancos. Sin presión. Una conversación real sobre lo que cabe en tu presupuesto.',
    },
    popupHeadline: { en: 'Wait — get pre-approved before you go', es: 'Espera, solicita tu preaprobación antes de irte' },
    popupSub: {
      en: 'Takes about a minute. No credit score needed.',
      es: 'Toma alrededor de un minuto. Sin score de crédito.',
    },

    fields: {
      name: { en: 'Name', es: 'Nombre' },
      phone: { en: 'Phone', es: 'Teléfono' },
      email: { en: 'Email', es: 'Correo electrónico' },
      openLoan: { en: 'Open auto loan on another vehicle?', es: '¿Tienes un préstamo abierto en otro vehículo?' },
      employed: { en: 'Employed in the last 6 months?', es: '¿Has trabajado en los últimos 6 meses?' },
      selectOne: { en: 'Select one', es: 'Selecciona una' },
      yes: { en: 'Yes', es: 'Sí' },
      no: { en: 'No', es: 'No' },
    },

    errors: {
      name: { en: 'Enter your full name.', es: 'Escribe tu nombre completo.' },
      phone: { en: 'Enter a 10-digit US phone number.', es: 'Escribe un teléfono de 10 dígitos.' },
      email: { en: 'Enter a valid email address.', es: 'Escribe un correo válido.' },
      select: { en: 'Pick one option.', es: 'Elige una opción.' },
      network: {
        en: "That didn't go through. Try again, or call us.",
        es: 'No se pudo enviar. Intenta de nuevo o llámanos.',
      },
    },

    submit: 'Get pre-approved',
    submitEs: 'Aplica hoy',
    sending: { en: 'Sending…', es: 'Enviando…' },

    consent: {
      en: 'By submitting, you agree to be contacted by call, text, or email about this request. Msg & data rates may apply.',
      es: 'Al enviar, aceptas que te contactemos por llamada, mensaje o correo sobre esta solicitud. Pueden aplicar tarifas de mensajes y datos.',
    },
  },

  trust: [
    { en: 'No credit check', es: 'Sin revisión de crédito', subEn: 'Your income is what matters', subEs: 'Lo que cuenta son tus ingresos', icon: 'shield' },
    { en: 'Fast approval', es: 'Aprobación rápida', subEn: 'Most applicants approved same day', subEs: 'La mayoría aprueba el mismo día', icon: 'clock' },
    { en: 'Transparent pricing', es: 'Precios claros', subEn: 'No hidden numbers, no surprises', subEs: 'Sin números escondidos, sin sorpresas', icon: 'tag' },
    { en: '25+ years in Houston', es: 'Más de 25 años en Houston', subEn: 'Licensed, local, accountable', subEs: 'Con licencia, locales, responsables', icon: 'pin' },
  ],

  vehicles: {
    headline: { en: 'Browse our inventory', es: 'Explora nuestro inventario' },
    sub: { en: '100+ vehicles in stock — model years 2016–2025.', es: 'Más de 100 vehículos disponibles, modelos 2016 a 2025.' },
    viewDetails: 'View details',
    financeMe: 'Finance me',
    cardActionsEs: 'Ver detalles · Financiar',
    viewAll: 'View all vehicles',
    viewAllEs: 'Ver todo el inventario',
    prev: { en: 'Previous vehicles', es: 'Vehículos anteriores' },
    next: { en: 'Next vehicles', es: 'Vehículos siguientes' },
    labels: {
      down: { en: 'Down payment', es: 'Enganche' },
      payment: { en: 'Payment', es: 'Pago' },
      price: { en: 'Price', es: 'Precio' },
      mileage: { en: 'Mileage', es: 'Millaje' },
      stock: { en: 'Stock', es: 'Stock' },
      term: { en: 'Term', es: 'Plazo' },
      apr: { en: 'APR', es: 'Tasa' },
    },
  },

  how: {
    headline: { en: 'From apply to drive home in 3 steps', es: 'De la solicitud al volante en 3 pasos' },
    steps: [
      {
        title: { en: 'Apply', es: 'Aplica' },
        body: {
          en: 'Fill out our quick form — takes about a minute. No credit score needed.',
          es: 'Llena el formulario, toma alrededor de un minuto. Sin score de crédito.',
        },
      },
      {
        title: { en: 'Get approved', es: 'Recibe tu aprobación' },
        body: {
          en: 'We review your income and job stability, not your credit history. Most applicants hear back the same day.',
          es: 'Revisamos tus ingresos y tu estabilidad laboral, no tu historial de crédito. La mayoría recibe respuesta el mismo día.',
        },
      },
      {
        title: { en: 'Drive home', es: 'Maneja a casa' },
        body: {
          en: 'Pick your car, bring your documents, and drive home today.',
          es: 'Elige tu auto, trae tus documentos y maneja a casa hoy mismo.',
        },
      },
    ],
  },

  footer: {
    hours: { en: 'Hours of operation', es: 'Horario de atención' },
    directions: { en: 'Get directions', es: 'Cómo llegar' },
    privacy: { en: 'Privacy policy', es: 'Aviso de privacidad' },
    terms: { en: 'Terms of service', es: 'Términos del servicio' },
    closed: { en: 'Closed', es: 'Cerrado' },
    /* PENDIENTE: el cliente debe entregar el disclaimer exacto de financiamiento. */
    disclaimer: {
      en: 'Financing terms and approval are subject to review. Down payment, payment amount, and term vary by vehicle and applicant.',
      es: 'Los términos de financiamiento y la aprobación están sujetos a revisión. El enganche, el pago y el plazo varían según el vehículo y el solicitante.',
    },
  },

  floatingCall: { en: 'Call now', es: 'Llama ahora' },

  cookies: {
    body: {
      en: 'We use cookies to measure how our ads perform. You can decline and keep browsing.',
      es: 'Usamos cookies para medir el desempeño de nuestros anuncios. Puedes rechazarlas y seguir navegando.',
    },
    accept: 'Accept',
    acceptEs: 'Aceptar',
    decline: 'Decline',
    declineEs: 'Rechazar',
  },

  thanks: {
    title: "Thanks, We've Got Your Info | John Kamal Cars",
    headline: { en: "You're in! A specialist will reach out shortly.", es: '¡Listo! Un asesor te contactará en breve.' },
    sub: {
      en: 'Thanks for applying. One of our team members will call or text you shortly to walk you through next steps.',
      es: 'Gracias por aplicar. Alguien de nuestro equipo te llamará o te escribirá pronto para explicarte los siguientes pasos.',
    },
    back: 'Back to home',
    backEs: 'Volver al inicio',
  },
};
