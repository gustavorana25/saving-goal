import styled from 'styled-components';
import SvgIcon from '../../SvgIcon/SvgIcon';

export const Input = styled.input`
  border: 1px solid ${(props) => props.theme.colors.blueGray50};
  border-radius: ${(props) => props.theme.borderRadius.small};
  padding: 14px 12px 13px 44px;
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
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const Dolar = styled(SvgIcon)`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
`;
