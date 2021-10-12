import styled from 'styled-components';
import { device } from '../../../styles/device/device';
import SvgIcon from '../../SvgIcon/SvgIcon';

export const Input = styled.input`
  border: 1px solid ${(props) => props.theme.colors.blueGray50};
  border-radius: ${(props) => props.theme.borderRadius.small};
  padding: 13px 12px 13px 44px;
  outline: 0;
  width: 100%;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.blueGray600};
  font-family: ${(props) => props.theme.font.secondary};
  font-size: ${(props) => props.theme.fontSizes.xLarge};
  line-height: 120%;
  font-weight: 500;

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.brandColorSecondary};
  }

  ${device.mobile} {
    padding: 15px 16px 15px 44px;
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;

export const InputContainer = styled.div`
  position: relative;

  &:focus-within svg path {
    fill: ${(props) => props.theme.colors.brandColorSecondary};
  }
`;

export const Dolar = styled(SvgIcon)`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
`;
