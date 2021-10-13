import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../../../utils/test/testHelpers';
import CreateGoalPage from '../CreateGoal';

describe('<CreateGoalPage />', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern').setSystemTime(new Date(2021, 9, 1));
  });

  it('should render initial data', () => {
    renderWithTheme(<CreateGoalPage />);

    const monthNavigator = within(screen.getByTestId('month-navigation'));
    const input = screen.getByRole('textbox');

    monthNavigator.getByText(/november/i);
    monthNavigator.getByText('2021');
    expect(input).toHaveValue('');

    expect(screen.getByTestId('amountPerMonthText').textContent).toBe(
      'You’re planning 1 monthly deposits to reach your $0 goal by November 2021.'
    );
  });

  it('should calculate amount value per month', () => {
    renderWithTheme(<CreateGoalPage />);

    const monthNavigator = within(screen.getByTestId('month-navigation'));
    const input = screen.getByRole('textbox');
    const [leftArrow, rightArrow] = screen.getAllByTestId(
      '/assets/icons/arrow-left.svg'
    );

    userEvent.type(input, '10000');

    expect(input).toHaveValue('10,000');

    for (let i = 0; i < 9; i++) {
      userEvent.click(rightArrow);
    }

    monthNavigator.getByText(/august/i);
    monthNavigator.getByText('2022');

    expect(screen.getByTestId('amountPerMonthTitle').textContent).toBe(
      '$1,000'
    );
    expect(screen.getByTestId('amountPerMonthText').textContent).toBe(
      'You’re planning 10 monthly deposits to reach your $10,000 goal by August 2022.'
    );

    userEvent.click(leftArrow);

    monthNavigator.getByText(/july/i);
    monthNavigator.getByText('2022');

    expect(screen.getByTestId('amountPerMonthTitle').textContent).toBe(
      '$1,112'
    );
    expect(screen.getByTestId('amountPerMonthText').textContent).toBe(
      'You’re planning 9 monthly deposits to reach your $10,000 goal by July 2022.'
    );
  });

  it('should not navigate to past date', () => {
    renderWithTheme(<CreateGoalPage />);

    const monthNavigator = within(screen.getByTestId('month-navigation'));
    monthNavigator.getByText(/november/i);
    monthNavigator.getByText('2021');

    const [leftArrow, rightArrow] = screen.getAllByTestId(
      '/assets/icons/arrow-left.svg'
    );

    userEvent.click(leftArrow);
    monthNavigator.getByText(/november/i);
    monthNavigator.getByText('2021');

    userEvent.click(rightArrow);
    monthNavigator.getByText(/december/i);
    monthNavigator.getByText('2021');

    userEvent.click(leftArrow);
    userEvent.click(leftArrow);
    monthNavigator.getByText(/november/i);
    monthNavigator.getByText('2021');
  });

  it('input only should accept numbers and format', () => {
    renderWithTheme(<CreateGoalPage />);

    const input = screen.getByRole('textbox');
    userEvent.type(input, '1lis42-0skç[0]`');

    expect(input).toHaveValue('14,200');
  });
});
