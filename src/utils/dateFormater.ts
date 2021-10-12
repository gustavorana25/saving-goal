import { format } from 'date-fns/esm';

export const getMonthAndYearFromDate = (
  receivedDate: Date
): [month: string, year: number] => {
  const monthName = format(receivedDate, 'MMMM');
  return [monthName, receivedDate.getFullYear()];
};
