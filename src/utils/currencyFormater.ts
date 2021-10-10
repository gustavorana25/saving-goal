export const currencyFormater = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    maximumFractionDigits: 0,
    currency: 'USD',
  }).format(amount);
};

export const codelessCurrentFormater = (amount: number): string => {
  return currencyFormater(amount).slice(1);
};

export const currencyStringToNumber = (amount: string): number => {
  const normalizedNumeric = amount.replace(/[^0-9]/gi, '');

  return Number(normalizedNumeric);
};
