import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const theme = {
 blue0: '#91A0EC',
 blue1: '#A8B4F0',
 blue2: '#BEC7F4',

 gray0: '#000000',
 gray1: '#222222'
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme} >
    { children }
    <GlobalStyles />
  </ThemeProvider>
)

export default Theme;
