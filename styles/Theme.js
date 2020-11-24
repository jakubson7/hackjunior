import { ThemeProvider } from 'styled-components';

const theme = {
  blue0: '#91A0EC',
  blue1: '#A8B4F0',
  blue2: '#BEC7F4',

  gray0: '#000000',
  gray1: '#333333',
  gray2: '#666666',
  gray3: '#dddddd',
  gray4: '#eeeeee',
  gray5: '#ffffff'
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme} >
    { children }
  </ThemeProvider>
);

export default Theme;
