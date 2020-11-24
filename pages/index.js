import React from 'react';

import { SimpleView, Text } from '../styles/Fragment';
import Navigation from '../components/fragments/Navigation';



const HomePage = () => (
  <SimpleView>
    <Navigation page='/' />
    <Text>
      aplikacja służy do wsólnego tworzenia mapy wyśli i eydycji w czasie rzeczywistym
    </Text>
  </SimpleView>
);

export default HomePage;
