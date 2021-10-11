import { FormEvent } from 'react';
import {
  codelessCurrentFormater,
  currencyStringToNumber,
} from '../../../utils/currencyFormater';
import { Label } from '../Label/Label.styles';
import { Input, InputContainer, Dolar } from './CurrencyInput.styles';
import { CurrencyInputProps } from './CurrencyInput.types';

function CurrencyInput(props: CurrencyInputProps): JSX.Element {
  const { label, name, value, setValue } = props;

  const handleChangeInput = (event: FormEvent<HTMLInputElement>) => {
    const normalizedNumber = currencyStringToNumber(event.currentTarget.value);

    if (!normalizedNumber) {
      return setValue('');
    }

    const formatedValue = codelessCurrentFormater(normalizedNumber);
    setValue(formatedValue);
  };

  return (
    <fieldset>
      <Label htmlFor={name}>{label}</Label>
      <InputContainer>
        <Dolar src="dolar.svg" />
        <Input
          value={value}
          onChange={handleChangeInput}
          type="text"
          name={name}
        />
      </InputContainer>
    </fieldset>
  );
}

export default CurrencyInput;
