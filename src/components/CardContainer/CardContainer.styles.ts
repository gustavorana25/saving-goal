import styled from 'styled-components';

const CardContainer = styled.h1`
  background-color: ${(props) => props.theme.colors.white};
  padding: ${(props) =>
    `${props.theme.gutterSpace.large} ${props.theme.gutterSpace.xLarge} ${props.theme.gutterSpace.xLarge}`};
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08); //TODO: analisar colocar isso no tema
  border-radius: ${(props) => props.theme.borderRadius.medium};
  width: 100%;
  max-width: 560px;
  box-sizing: border-box;
`;

export default CardContainer;
