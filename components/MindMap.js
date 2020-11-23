import React from 'react';
import { useRecoilState } from 'recoil';

import nodesState from '../state/nodes';
import MainNode from './nodes/Main';
import SubNode from './nodes/Sub';



const MindMap = () => {
  const [nodes, setNodes] = useRecoilState(nodesState);

  return (
    <div>
      <button onClick={() => setNodes(nodes => [...nodes, { id: Math.random(), type: 'main' }])}>add node</button>
        { nodes.map(({ id, type }) => {
          switch(type) {
            case 'main':  return <MainNode  id={id} key={id} />
            case 'sub':   return <SubNode   id={id} key={id} />
        }
      })}
    </div>
  );
}

export default MindMap;
