import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { noop, renderWithTheme } from '../../../../utils/test/testHelpers';
import CurrencyInput from '../CurrencyInput';

describe('<CurrencyInput />', () => {
  it('should render passed value and label', () => {
    renderWithTheme(
      <CurrencyInput
        value="1,000"
        label="InputLabelTest"
        name="input-name"
        setValue={noop}
      />
    );

    screen.getByText(/inputlabeltest/i);
    expect(screen.getByRole('textbox')).toHaveValue('1,000');
  });

  it('should not call setValue when type not number', () => {
    const spy = jest.fn();
    renderWithTheme(
      <CurrencyInput
        value=""
        label="InputLabelTest"
        name="input-name"
        setValue={spy}
      />
    );

    const input = screen.getByRole('textbox');
    userEvent.type(input, 'a:b!1');

    expect(spy).toBeCalledTimes(5);
    expect(spy.mock.calls[0][0]).toBe('');
    expect(spy.mock.calls[1][0]).toBe('');
    expect(spy.mock.calls[2][0]).toBe('');
    expect(spy.mock.calls[3][0]).toBe('');
    expect(spy.mock.calls[4][0]).toBe('1');
  });

  it('should format currency', () => {
    const spy = jest.fn();
    renderWithTheme(
      <CurrencyInput
        value="321"
        label="InputLabelTest"
        name="input-name"
        setValue={spy}
      />
    );

    const input = screen.getByRole('textbox');
    userEvent.paste(input, '7');

    expect(spy).toBeCalledWith('3,217');
  });

  it('should format currency when paste value', () => {
    const spy = jest.fn();
    renderWithTheme(
      <CurrencyInput
        value=""
        label="InputLabelTest"
        name="input-name"
        setValue={spy}
      />
    );

    const input = screen.getByRole('textbox');
    userEvent.paste(input, '1234567');

    expect(spy).toBeCalledWith('1,234,567');
  });
});
