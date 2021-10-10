import styled from 'styled-components';

export const Label = styled.label`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.blueGray900};
  line-height: 150%;
  display: block;
  margin-bottom: ${(props) => props.theme.gutterSpace.xSmall};
`;
