import { createGlobalStyle } from 'styled-components';
import { Theme } from '../theme/theme.types';

const GlobalStyle = createGlobalStyle<Theme>`
  html{
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body,
  h1, h2, h3, h4, h5, h6,
  blockquote, p, pre,
  dl, dd, ol, ul,
  figure,
  hr,
  fieldset, legend {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.font.primary};
    text-rendering: optimizeLegibility;
  }
  
  body{
    font-size: 1.6rem;
    font-weight: normal;
    background-color: ${(props) => props.theme.colors.blueGray10};
  }

  li > {
    ol,
    ul {
      margin-bottom: 0;
    }
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  fieldset {
    min-width: 0;
    border: 0;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;