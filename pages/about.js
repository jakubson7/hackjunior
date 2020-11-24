import React from 'react';
import { RecoilRoot } from 'recoil';

import GlobalStyles from '../styles/GlobalStyles';
import { SimpleView, Text } from '../styles/Fragment';
import Navigation from '../components/Navigation';



const AboutPage = () => (
  <RecoilRoot>
    <SimpleView>
      <Navigation page='/about' />
      <Text>
        about
      </Text>
    </SimpleView>
    <GlobalStyles />
  </RecoilRoot>
);

export default AboutPage;
