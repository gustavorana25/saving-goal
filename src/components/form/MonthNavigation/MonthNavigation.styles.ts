import styled, { css } from 'styled-components';
import { device } from '../../../styles/device/device';
import SvgIcon from '../../SvgIcon/SvgIcon';
import { ArrowProps } from './MonthNavigation.types';

export const Container = styled.div`
  border: 1px solid ${(props) => props.theme.colors.blueGray50};
  border-radius: ${(props) => props.theme.borderRadius.small};
  padding: 3px 12px 3px;
  outline: 0;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.brandColorSecondary};

    svg path {
      fill: ${(props) => props.theme.colors.brandColorSecondary};
    }
  }

  ${device.mobile} {
    padding: 6px 12px 6px;
  }
`;

export const Month = styled.h5`
  color: ${(props) => props.theme.colors.blueGray900};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 600;
  line-height: 150%;
  text-transform: capitalize;

  ${device.mobile} {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

export const Year = styled.p`
  color: ${(props) => props.theme.colors.blueGray600};
  font-size: ${(props) => props.theme.fontSizes.medium};
  line-height: 150%;
  font-weight: normal;

  ${device.mobile} {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

export const Arrow = styled(SvgIcon)<ArrowProps>`
  position: absolute;
  top: 50%;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color ease-in-out 0.2s;
  padding: 3px 4px 3px 3px;

  &:hover {
    background-color: ${(props) => props.theme.colors.blueGray50};
  }

  ${(props) =>
    props.$isRightArrow &&
    css`
      right: 12px;
      transform: translateY(-50%) rotate(180deg);
    `}

  ${(props) =>
    !props.$isRightArrow &&
    css`
      left: 12px;
      transform: translateY(-50%);
    `}
`;
