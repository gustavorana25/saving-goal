export const currencyFormater = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    maximumFractionDigits: 0,
    currency: 'USD',
  }).format(amount);
};
