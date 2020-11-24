import { createGlobalStyle } from 'styled-components';



const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    display: flex

    min-width: 100vw;
    min-width: 100vh;
    margin: 0;
    padding: 0;

    background-color: ${({ theme }) => theme.gray4};
  }
`;

export default GlobalStyles;
