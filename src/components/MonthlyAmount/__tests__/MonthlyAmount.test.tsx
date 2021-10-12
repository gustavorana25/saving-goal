import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../../utils/test/testHelpers';
import MonthlyAmount from '../MonthlyAmount';

describe('<MonthlyAmount />', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern').setSystemTime(new Date(2021, 9, 1));
  });
  it('should render correct data', () => {
    renderWithTheme(
      <MonthlyAmount reachDate={new Date(2031, 9, 1)} totalAmount={120000} />
    );

    screen.getByText(/\$1,000/i);
    screen.getByText(/120 monthly deposits/i);
    screen.getByText(/october 2031/i);
    expect(screen.getByTestId('amountPerMonthText').textContent).toBe(
      'You’re planning 120 monthly deposits to reach your $120,000 goal by October 2031.'
    );
  });

  it('should handle 0 amount', () => {
    renderWithTheme(
      <MonthlyAmount reachDate={new Date(2031, 9, 1)} totalAmount={0} />
    );

    screen.getByRole('heading', { name: /\$0/i });
    screen.getByText(/120 monthly deposits/i);
    screen.getByText(/october 2031/i);

    expect(screen.getByTestId('amountPerMonthText').textContent).toBe(
      'You’re planning 120 monthly deposits to reach your $0 goal by October 2031.'
    );
  });

  it('should not render component when reach date isnt in future', () => {
    const { container } = renderWithTheme(
      <MonthlyAmount reachDate={new Date(2020, 2, 15)} totalAmount={0} />
    );

    expect(container.innerHTML).toBe('');
  });
});
