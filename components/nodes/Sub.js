import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import Draggable from '../Draggable';
import Selectable from '../Selectable';
import selectedNodeState from '../../state/selectedNode';



const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.blue1};
  border: 5px solid ${props => props.selected ? props.theme.blue2 : 'white'};
  border-radius: 16px;
  min-height: 80px;
  max-width: 160px;
  padding: 20px;
  margin: 0;
`;
const TextInput = styled.textarea`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubNode = ({ id }) => {
  const selectedNode = useRecoilValue(selectedNodeState);

  return (
    <Draggable id={id} >
      <Selectable id={id}>
        <Container selected={selectedNode === id} >
          <TextInput />
        </Container>
      </Selectable>
    </Draggable>
  );
}

export default SubNode;
