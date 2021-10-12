import { changeMonthOnlyInFutureDates } from '../changeMonthOnlyInFutureDates';

describe('changeMonthOnlyInFutureDates.test', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern').setSystemTime(new Date(2021, 9, 1));
  });

  it('should return currentDate when new date is in past', () => {
    expect(
      changeMonthOnlyInFutureDates(new Date(2021, 9, 1), -1)
    ).toStrictEqual(new Date(2021, 9, 1));

    expect(
      changeMonthOnlyInFutureDates(new Date(2021, 10, 1), -3)
    ).toStrictEqual(new Date(2021, 10, 1));
  });

  it('should return new date when in future', () => {
    expect(
      changeMonthOnlyInFutureDates(new Date(2021, 11, 1), -1)
    ).toStrictEqual(new Date(2021, 10, 1));

    expect(changeMonthOnlyInFutureDates(new Date(2021, 9, 1), 3)).toStrictEqual(
      new Date(2022, 0, 1)
    );
  });
});
