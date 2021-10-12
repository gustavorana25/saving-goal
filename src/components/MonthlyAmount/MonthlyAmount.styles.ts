import styled from 'styled-components';
import { device } from '../../styles/device/device';

export const GeneralMonthlyAmount = styled.div`
  border-radius: ${(props) => props.theme.borderRadius.medium};
  border: 1px solid ${(props) => props.theme.colors.blueGray50};
  margin-top: ${(props) => props.theme.gutterSpace.xxMedium};
`;

export const TopContent = styled.div`
  padding: ${(props) =>
    `${props.theme.gutterSpace.xxMedium} ${props.theme.gutterSpace.large} ${props.theme.gutterSpace.medium}`};
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${device.mobile} {
    padding: ${(props) => props.theme.gutterSpace.xxMedium};
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.blueGray900};
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: normal;
  line-height: 120%;

  ${device.mobile} {
    font-size: ${(props) => props.theme.fontSizes.xMedium};
  }
`;

export const AmountPerMonth = styled.h4`
  font-family: ${(props) => props.theme.font.secondary};
  color: ${(props) => props.theme.colors.brandColorSecondary};
  font-size: ${(props) => props.theme.fontSizes.xxLarge};
  font-weight: 500;
  line-height: 120%;

  ${device.mobile} {
    font-size: ${(props) => props.theme.fontSizes.xLarge};
  }
`;

export const BottomContent = styled.div`
  border-radius: ${(props) =>
    `0 0 ${props.theme.borderRadius.medium} ${props.theme.borderRadius.medium}`};
  padding: ${(props) =>
    `${props.theme.gutterSpace.xxMedium} ${props.theme.gutterSpace.large}`};
  background: ${(props) => props.theme.colors.blueGray10};
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.blueGray900};
  font-size: ${(props) => props.theme.fontSizes.xSmall};
  line-height: 130%;
  font-weight: normal;

  ${device.mobile} {
    text-align: center;
  }
`;
