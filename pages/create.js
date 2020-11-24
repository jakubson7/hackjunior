import React from 'react';
import { RecoilRoot } from 'recoil';

import GlobalStyles from '../styles/GlobalStyles';
import { SimpleView } from '../styles/Fragment';
import { FormContainer, TextInput, ButtonInput } from '../styles/Form';
import Navigation from '../components/Navigation';



const CreatePage = () => (
  <RecoilRoot>
    <SimpleView>
      <Navigation page='/create' />
      <FormContainer>
        <TextInput role='textbox' contentEditable />
        <ButtonInput>rozpocznij sesje</ButtonInput>
      </FormContainer>
    </SimpleView>
    <GlobalStyles />
  </RecoilRoot>
);

export default CreatePage;
