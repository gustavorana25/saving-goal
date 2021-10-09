import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/globalStyle/GlobalStyle';
import { theme } from '../../styles/theme/theme';
import { LayoutProps } from './Layout.types';

function Layout(props: LayoutProps): JSX.Element {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default Layout;
