import styled from 'styled-components';
import { device } from '../../styles/device/device';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${(props) =>
    `${props.theme.gutterSpace.large} 0 ${props.theme.gutterSpace.xxLarge}`};
  height: 100%;
`;

export const Container = styled.div`
  ${device.mobile} {
    padding: 0 ${(props) => props.theme.gutterSpace.xSmall};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 272px auto;
  grid-column-gap: ${(props) => props.theme.gutterSpace.medium};
  grid-row-gap: ${(props) => props.theme.gutterSpace.medium};

  ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const ButtonContainer = styled.div`
  max-width: 320px;
  margin: ${(props) => props.theme.gutterSpace.large} auto 0;

  ${device.mobile} {
    max-width: 100%;
  }
`;
