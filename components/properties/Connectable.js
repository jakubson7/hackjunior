import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { NodeState, NodeListState } from '../../state/MindMap';



const Connectable = ({ id, children, sub }) => {
  const setNode = useSetRecoilState(NodeState(id));
  const setNodeList = useSetRecoilState(NodeListState);

  useEffect(() => {
    setNode(node => ({
      ...node,
      path: [...node.connections, id],
      connections: []
    }));
  }, []);

  const handleConnect = type => () => {
    const newNode = {
      id: Math.random(),
      type
    };

    setNodeList(nodeList => [ ...nodeList, newNode ]);
    setNode(node => ({
      ...node,
      connections: [ ...node.connections, newNode.id ]
    }));
  }
  
  return (
    <div>
      { children }
      { sub && <button onClick={handleConnect('free')} ></button> }
    </div>
  );
}

export default Connectable;
