import { Label } from '../Label/Label.styles';
import { Input, InputContainer, Dolar } from './CurrencyInput.styles';
import { CurrencyInputProps } from './CurrencyInput.types';

function CurrencyInput(props: CurrencyInputProps): JSX.Element {
  const { label, name } = props;
  return (
    <fieldset>
      <Label htmlFor={name}>{label}</Label>
      <InputContainer>
        <Dolar src="dolar.svg" />
        <Input type="text" name={name} />
      </InputContainer>
    </fieldset>
  );
}

export default CurrencyInput;
