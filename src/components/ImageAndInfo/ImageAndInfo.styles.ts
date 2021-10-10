import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.gutterSpace.xMedium};
`;

export const TextContent = styled.div`
  margin-left: ${(props) => props.theme.gutterSpace.medium};
`;

export const Title = styled.h3`
  font-family: ${(props) => props.theme.font.secondary};
  color: ${(props) => props.theme.colors.blueGray900};
  font-size: ${(props) => props.theme.fontSizes.xLarge};
  line-height: 120%;
  font-weight: 500;
  margin-bottom: ${(props) => props.theme.gutterSpace.xSmall};
`;

export const Description = styled.h4`
  color: ${(props) => props.theme.colors.blueGray400};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: normal;
  line-height: 150%;
`;
