import React from 'react';
import { useSetRecoilState } from 'recoil';

import nodeFamily from '../state/nodeFamily';
import nodesState from '../state/nodes';
import selectedNodeState from '../state/selectedNode';
import selectedNodeselector from '../state/selectedNodeSelector';



const Connectable = ({ id, sub, children }) => {
  const setNode = useSetRecoilState(nodeFamily(id));
  const setNodes = useSetRecoilState(nodesState);
  const setSelectedNodeId = useSetRecoilState(selectedNodeState);
  const setSelectedNodeState = useSetRecoilState(selectedNodeselector);

  const handleAddConnection = type => {
    const id = Math.random();

    setNode(node => ({
      ...node,
      connections: [...node.connections, id]
    }));
    setNodes(nodes => [...nodes, { id, type }]);

    setSelectedNodeId(id);
    setSelectedNodeState(node => ({
      ...node,
      type
    }));
  }

  return (
    <div>
      { sub && <button onClick={() => handleAddConnection('sub')}>add sub-node</button> }
      { children }
    </div>
  );
}

export default Connectable;
