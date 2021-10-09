import SvgIcon from '../SvgIcon/SvgIcon';
import { GeneralHeader } from './Header.styles';

function Header(): JSX.Element {
  return (
    <GeneralHeader>
      <SvgIcon src="logo.svg" />
    </GeneralHeader>
  );
}

export default Header;
