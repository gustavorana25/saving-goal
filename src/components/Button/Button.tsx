import { GeneralButton } from './Button.styles';
import { ButtonProps } from './Button.types';

function Button(props: ButtonProps): JSX.Element {
  const { children } = props;
  return <GeneralButton>{children}</GeneralButton>;
}

export default Button;
