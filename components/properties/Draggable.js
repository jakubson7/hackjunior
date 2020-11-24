import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { DraggableCore } from 'react-draggable';

import { NodeState, NodeConnectionTreePoistionState } from '../map/state';



const Draggable = ({ id, children }) => {
  const { position } = useRecoilValue(NodeState(id));
  const setNodeTree = useSetRecoilState(NodeConnectionTreePoistionState(id));

  const handleDrag = ({ movementX, movementY }) => {
    setNodeTree({ movementX, movementY })
  }

  return (
    <DraggableCore onDrag={handleDrag}>
      <div style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>
        { children }
      </div>
    </DraggableCore>
  );
}

export default Draggable;
