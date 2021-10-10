import styled from 'styled-components';

export const GeneralButton = styled.button`
  padding: 18px 32px;
  border-radius: ${(props) => props.theme.borderRadius.large};
  width: 100%;
  border: 0;
  background-color: ${(props) => props.theme.colors.brandColorPrimary};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 600;
  line-height: 125%;
  color: white;
  outline: 0;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.brandColorSecondary};
  }
`;
