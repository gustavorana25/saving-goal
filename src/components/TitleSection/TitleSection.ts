import styled from 'styled-components';
import { device } from '../../styles/device/device';

const TitleSection = styled.h1`
  color: ${(props) => props.theme.colors.brandColorPrimary};
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: normal;
  line-height: 120%;
  margin-bottom: ${(props) => props.theme.gutterSpace.xxMedium};

  ${device.mobile} {
    font-size: ${(props) => props.theme.fontSizes.xMedium};
  }
`;

export default TitleSection;
