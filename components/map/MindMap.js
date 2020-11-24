import React from 'react';

import { useRecoilState } from 'recoil';
import { NodeListState } from './state';
import FreeNode from '../nodes/Free';



const MindMap = () => {
  const [nodeList, setNodeList] = useRecoilState(NodeListState);

  return (
    <div>
      <button onClick={() => setNodeList(nodeList => [
        ...nodeList,
        { id: Math.random(), type: 'free' }
      ])}>add free node</button>
      { nodeList.map(node => {
        switch(node.type) {
          case 'free': return <FreeNode id={node.id} key={node.id} />;
          default: return;
        }
      }) }
    </div>
  );
}

export default MindMap;
