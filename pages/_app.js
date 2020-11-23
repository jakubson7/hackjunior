import React from 'react';

import Theme from '../ui/Theme';



const ApplicationOutlet = ({ Component, pageProps }) => (
  <Theme>
    <Component {...pageProps} />
  </Theme>
);

export default ApplicationOutlet;
