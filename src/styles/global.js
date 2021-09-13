import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.bgGeneral};
    font: 400 1rem 'Open Sans', sans-serif;
  }
`;

export default GlobalStyle;
