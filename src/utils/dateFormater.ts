import { format } from 'date-fns';

export const getMonthAndYearFromDate = (
  receivedDate: Date
): [month: string, year: number] => {
  const timestamp = new Date(receivedDate).getTime();
  const isInvalidDate = isNaN(timestamp);

  if (isInvalidDate) {
    throw new Error('invalid date format passed to getMonthAndYearFromDate');
  }

  const monthName = format(receivedDate, 'MMMM');
  return [monthName, receivedDate.getFullYear()];
};
