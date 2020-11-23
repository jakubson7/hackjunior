import React from 'react';
import { useRecoilState } from 'recoil';
import { DraggableCore } from 'react-draggable';

import nodeFamily from '../state/nodeFamily';



const Draggable = ({ id, children }) => {
  const [{ x, y }, setNode] = useRecoilState(nodeFamily(id));

  const handleDrag = ({ movementX, movementY }) => {
    setNode(values => ({
      ...values,
      x: values.x + movementX,
      y: values.y + movementY
    }));
  }

  return (
    <DraggableCore onDrag={handleDrag} >
      <div style={{ transform: `translate(${x}px, ${y}px)` }} >
        { children }
      </div>
    </DraggableCore>
  );
}

export default Draggable;
