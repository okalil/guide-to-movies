import { ThemeProvider } from 'styled-components';
import { SearchContextProvider } from '../contexts/SearchContext';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SearchContextProvider>
        <Component {...pageProps} />
      </SearchContextProvider>
    </ThemeProvider>
  );
}
