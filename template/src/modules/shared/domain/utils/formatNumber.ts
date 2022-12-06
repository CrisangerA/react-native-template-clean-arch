export const fCurrency = (value: number) => {
  return new Intl.NumberFormat('es-CO', {
    currency: 'COP',
    style: 'currency',
    minimumFractionDigits: value <= 2 ? 2 : 0,
  }).format(value);
};

export const fPercent = (value: number) => {
  return new Intl.NumberFormat('es-CO', {
    maximumFractionDigits: 2,
  }).format(value);
};
