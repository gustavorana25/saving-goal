import styled from 'styled-components';
import { device } from '../../styles/device/device';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.gutterSpace.xxLarge};
  height: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-column-gap: ${(props) => props.theme.gutterSpace.medium};
  grid-row-gap: ${(props) => props.theme.gutterSpace.medium};

  ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const ButtonContainer = styled.div`
  max-width: 320px;
  margin: ${(props) => props.theme.gutterSpace.large} auto 0;
`;
