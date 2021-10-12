import { getMonthAndYearFromDate } from '../dateFormater';

describe('getMonthAndYearFromDate', () => {
  it('should format month and year correctly', () => {
    expect(getMonthAndYearFromDate(new Date(2021, 10, 10))).toStrictEqual([
      'November',
      2021,
    ]);

    expect(getMonthAndYearFromDate(new Date(2020, 0, 10))).toStrictEqual([
      'January',
      2020,
    ]);
  });

  it('should throw error on invalida date', () => {
    expect(() =>
      getMonthAndYearFromDate(new Date('invalidString'))
    ).toThrowError('invalid date format passed to getMonthAndYearFromDate');
  });
});
