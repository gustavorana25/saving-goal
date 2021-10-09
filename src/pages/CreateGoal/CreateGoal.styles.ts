import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: ${(props) => props.theme.gutterSpace.xLarge};
  height: 100%;
`;
