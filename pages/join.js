import React from 'react';
import { RecoilRoot } from 'recoil';

import GlobalStyles from '../styles/GlobalStyles';
import { SimpleView, Text } from '../styles/Fragment';
import Navigation from '../components/Navigation';



const JoinPage = () => (
  <RecoilRoot>
    <SimpleView>
      <Navigation page='/join' />
      <Text>
        join
      </Text>
    </SimpleView>
    <GlobalStyles />
  </RecoilRoot>
);

export default JoinPage;
