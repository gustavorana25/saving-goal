import styled from 'styled-components';
import { device } from '../../styles/device/device';

export const GeneralHeader = styled.header`
  padding: ${(props) =>
    `${props.theme.gutterSpace.xMedium} ${props.theme.gutterSpace.xxLarge}`};
  background-color: ${(props) => props.theme.colors.white};

  svg path {
    fill: ${(props) => props.theme.colors.blueGray900};
  }

  ${device.mobile} {
    padding: ${(props) => props.theme.gutterSpace.medium};

    svg {
      width: 75px;
      height: 24px;
    }
  }
`;
