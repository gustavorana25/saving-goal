import { addMonths, startOfMonth, differenceInMonths } from 'date-fns';

export const changeMonthOnlyInFutureDates = (
  currentDate: Date,
  diff: number
): Date => {
  const newDate = addMonths(currentDate, diff);
  const startOfMonthDate = startOfMonth(new Date());
  const diffInMonths = differenceInMonths(newDate, startOfMonthDate);
  const isFutureDate = diffInMonths > 0;
  if (isFutureDate) {
    return newDate;
  }

  return currentDate;
};
