import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import Draggable from '../Draggable';
import Connectable from '../Connectable';
import Selectable from '../Selectable';
import selectedNodeState from '../../state/selectedNode';



const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.blue0};
  border: 5px solid ${props => props.selected ? props.theme.blue2 : 'white'};
  border-radius: 20px;
  min-height: 100px;
  max-width: 200px;
  padding: 20px;
  margin: 0;
`;
const TextInput = styled.textarea`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainNode = ({ id }) => {
  const selectedNode = useRecoilValue(selectedNodeState);

  return (
    <Draggable id={id}>
      <Connectable id={id} sub>
        <Selectable id={id}>
          <Container selected={selectedNode === id} >
            <TextInput type='text' />
          </Container>
        </Selectable>
      </Connectable>
    </Draggable>
  );
}

export default MainNode;
