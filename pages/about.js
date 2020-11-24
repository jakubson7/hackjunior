import React from 'react';

import { SimpleView, Text } from '../styles/Fragment';
import Navigation from '../components/fragments/Navigation';



const AboutPage = () => (
  <SimpleView>
    <Navigation page='/about' />
    <Text>
      about
    </Text>
  </SimpleView>
);

export default AboutPage;
