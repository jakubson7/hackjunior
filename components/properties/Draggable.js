import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { DraggableCore } from 'react-draggable';

import { NodeState, NodeTreeState } from '../../state/MindMap';
import socket from '../../utils/socket';



const Draggable = ({ id, children }) => {
  const { position } = useRecoilValue(NodeState(id));
  const setNodeTree = useSetRecoilState(NodeTreeState(id));

  const handleDrag = ({ movementX, movementY }) => {
    setNodeTree({ movementX, movementY });
    socket.emit('send-node-tree-movement', 0, { id, movementX, movementY });
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
