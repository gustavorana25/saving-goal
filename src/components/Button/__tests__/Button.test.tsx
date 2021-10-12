import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../../../utils/test/testHelpers';
import Button from '../Button';

describe('<Button />', () => {
  it('should render passed children', () => {
    renderWithTheme(<Button>buttonTestText</Button>);

    screen.getByText('buttonTestText');
  });

  it('should handle onClick', () => {
    const spy = jest.fn();
    renderWithTheme(<Button onClick={spy}>buttonTestText</Button>);

    userEvent.click(screen.getByText('buttonTestText'));

    expect(spy).toBeCalled();
  });

  it('should disable button', () => {
    const spy = jest.fn();
    renderWithTheme(
      <Button disabled onClick={spy}>
        buttonTestText
      </Button>
    );

    const button = screen.getByText('buttonTestText');
    userEvent.click(button);

    expect(button).toBeDisabled();
    expect(spy).not.toBeCalled();
  });
});
