import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { noop, renderWithTheme } from '../../../../utils/test/testHelpers';
import MonthNavigation from '../MonthNavigation';

describe('<MonthNavigation />', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern').setSystemTime(new Date(2021, 9, 1));
  });

  it('should render passed value and label', () => {
    renderWithTheme(
      <MonthNavigation
        handleChange={noop}
        name="month-navigation"
        label="MonthNavigationLabel"
        value={new Date(2021, 9, 10)}
      />
    );

    screen.getByText(/monthnavigationlabel/i);
    screen.getByRole('heading', { name: /october/i });
    screen.getByText(/2021/i);
  });

  it('should handle click navigation', () => {
    const spy = jest.fn();
    renderWithTheme(
      <MonthNavigation
        handleChange={spy}
        name="month-navigation"
        label="MonthNavigationLabel"
        value={new Date(2021, 9, 10)}
      />
    );

    const [leftArrow, rightArrow] = screen.getAllByTestId(
      '/assets/icons/arrow-left.svg'
    );

    userEvent.click(rightArrow);
    expect(spy).toBeCalledTimes(1);

    userEvent.click(leftArrow);
    expect(spy).toBeCalledTimes(2);
  });

  it('should handle keyboard navigation only on focus', () => {
    const spy = jest.fn();
    renderWithTheme(
      <MonthNavigation
        handleChange={spy}
        name="month-navigation"
        label="MonthNavigationLabel"
        value={new Date(2021, 9, 10)}
      />
    );

    fireEvent.keyDown(window, { key: 'ArrowRight', code: 'ArrowRight' });
    expect(spy).not.toBeCalled();

    const container = screen.getByTestId('month-navigation');
    userEvent.click(container);
    expect(container).toHaveFocus();
    fireEvent.keyDown(window, { key: 'ArrowRight', code: 'ArrowRight' });
    fireEvent.keyDown(window, { key: 'ArrowLeft', code: 'ArrowLeft' });
    expect(spy).toBeCalledTimes(2);

    userEvent.tab();
    expect(container).not.toHaveFocus();
    fireEvent.keyDown(window, { key: 'ArrowRight', code: 'ArrowRight' });
    expect(spy).toBeCalledTimes(2);
  });
});
