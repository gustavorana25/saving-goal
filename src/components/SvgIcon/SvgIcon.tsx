import SVG from 'react-inlinesvg';
import { SvgIconProps } from './SvgIcon.types';

function SvgIcon(props: SvgIconProps): JSX.Element {
  const { src, ...restProps } = props;
  return (
    <SVG src={`${process.env.PUBLIC_URL}/assets/icons/${src}`} {...restProps} />
  );
}

export default SvgIcon;
