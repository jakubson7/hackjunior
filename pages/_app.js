import React from 'react';
import { RecoilRoot } from 'recoil';

import Theme from '../styles/Theme';
import GlobalStyles from '../styles/GlobalStyles';



const ApplicationOutlet = ({ Component, pageProps }) => (
  <RecoilRoot>
    <Theme>
      <Component {...pageProps} />
      <GlobalStyles />
    </Theme>
  </RecoilRoot>
);

export default ApplicationOutlet;
