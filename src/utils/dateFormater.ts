export const getMonthAndYearFromDate = (
  receivedDate: Date
): [month: string, year: number] => {
  const monthName = receivedDate.toLocaleString('default', { month: 'long' });
  return [monthName, receivedDate.getFullYear()];
};
