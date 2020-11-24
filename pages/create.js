import React, { useState } from 'react';
import { useRouter } from 'next/router';

import socket from '../utils/socket';
import { SimpleView } from '../styles/Fragment';
import { FormContainer, TextInput, ButtonInput } from '../styles/Form';
import Navigation from '../components/fragments/Navigation';



const CreatePage = () => {
  const [userName, setUserName] = useState('');
  const [roomName, setRoomName] = useState('');
  const router = useRouter();

  const handleMindMapConnection = async () => {
    await socket.emit('mind-map-connection', roomName, {
      name: userName
    });
    await router.push('/');
  }

  return (
    <SimpleView>
      <Navigation page='/create' />
      <FormContainer>
        <TextInput
          role='textbox'
          placeholder='user name'
          onKeyUp={event => setUserName(event.target.innerText)}
          defaultValue={userName}
          contentEditable
        />
        <TextInput
          role='textbox'
          placeholder='room name'
          onKeyUp={event => setRoomName(event.target.innerText)}
          defaultValue={roomName}
          contentEditable
        />
        <ButtonInput onClick={handleMindMapConnection}>rozpocznij sesje</ButtonInput>
      </FormContainer>
    </SimpleView>
  );
}

export default CreatePage;
