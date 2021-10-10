import styled from 'styled-components';

export const GeneralMonthlyAmount = styled.div`
  border-radius: ${(props) => props.theme.borderRadius.medium};
  border: 1px solid ${(props) => props.theme.colors.blueGray50};
  margin-top: ${(props) => props.theme.gutterSpace.xMedium};
`;

export const TopContent = styled.div`
  padding: ${(props) =>
    `${props.theme.gutterSpace.xMedium} ${props.theme.gutterSpace.large} ${props.theme.gutterSpace.medium}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.blueGray900};
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: normal;
  line-height: 120%;
`;

export const AmountPerMonth = styled.h4`
  font-family: ${(props) => props.theme.font.secondary};
  color: ${(props) => props.theme.colors.brandColorSecondary};
  font-size: ${(props) => props.theme.fontSizes.xxLarge};
  font-weight: 500;
  line-height: 120%;
`;

export const BottomContent = styled.div`
  border-radius: ${(props) =>
    `0 0 ${props.theme.borderRadius.medium} ${props.theme.borderRadius.medium}`};
  padding: ${(props) =>
    `${props.theme.gutterSpace.xMedium} ${props.theme.gutterSpace.large}`};
  background: ${(props) => props.theme.colors.blueGray10};
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.blueGray900};
  font-size: ${(props) => props.theme.fontSizes.xSmall};
  line-height: 130%;
  font-weight: normal;
`;
