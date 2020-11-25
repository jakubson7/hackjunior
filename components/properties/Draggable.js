import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { DraggableCore } from 'react-draggable';

import { NodeState, NodeTreeStateSync } from '../../state/MindMap';



const Draggable = ({ id, children }) => {
  const { position } = useRecoilValue(NodeState(id));
  const setNodeTree = useSetRecoilState(NodeTreeStateSync(id));

  const handleDrag = ({ movementX, movementY }) => {
    setNodeTree(node => ({
      ...node,
      position: {
        x: node.position.x + movementX,
        y: node.position.y + movementY
      }
    }));
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
