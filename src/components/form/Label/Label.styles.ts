import styled from 'styled-components';
import { device } from '../../../styles/device/device';

export const Label = styled.label`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.blueGray900};
  line-height: 150%;
  display: block;
  font-weight: normal;
  margin-bottom: ${(props) => props.theme.gutterSpace.xSmall};

  ${device.mobile} {
    font-size: ${(props) => props.theme.fontSizes.xSmall};
  }
`;
