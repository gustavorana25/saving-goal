import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.gutterSpace.xxLarge};
  height: 100%;
`;
