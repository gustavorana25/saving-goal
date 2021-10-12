import { GeneralButton } from './Button.styles';
import { ButtonProps } from './Button.types';

function Button(props: ButtonProps): JSX.Element {
  const { children, ...restProps } = props;
  return <GeneralButton {...restProps}>{children}</GeneralButton>;
}

export default Button;
