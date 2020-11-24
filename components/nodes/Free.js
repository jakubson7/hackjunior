import React from 'react';
import { useRecoilValue } from 'recoil';

import Draggable from '../properties/Draggable';
import Selectable from '../properties/Selectable';
import Connectable from '../properties/Connectable';
import { NodeState, SelectedNodeState } from '../../state/MindMap';



const FreeNode = ({ id }) => {
  const node = useRecoilValue(NodeState(id));
  const selectedNode = useRecoilValue(SelectedNodeState);

  return (
    <Draggable id={id}>
      <Selectable id={id}>
        <Connectable id={id} sub >
          <div style={{ color: node.path.includes(selectedNode.id) ? 'blue': 'black' }} >
            { node.value }
          </div>
        </Connectable>
      </Selectable>
    </Draggable>
  );
}

export default FreeNode;
