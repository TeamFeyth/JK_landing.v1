/* Validacion de los campos del formulario. */

/* Deja solo digitos y quita el 1 inicial de pais si viene. */
export function digitsOnly(value: string): string {
  const d = value.replace(/\D/g, '');
  return d.length === 11 && d.startsWith('1') ? d.slice(1) : d;
}

/* Da formato en vivo: (713) 555-0123 */
export function formatPhone(value: string): string {
  const d = digitsOnly(value).slice(0, 10);
  if (d.length === 0) return '';
  if (d.length < 4) return `(${d}`;
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

/* Numero de EE.UU. valido: 10 digitos, y ni el area ni el prefijo
   pueden empezar en 0 o 1. */
export function isValidUsPhone(value: string): boolean {
  return /^[2-9]\d{2}[2-9]\d{6}$/.test(digitsOnly(value));
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(value.trim());
}

export function isValidName(value: string): boolean {
  return value.trim().length >= 2;
}
