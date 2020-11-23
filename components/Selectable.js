import React from 'react';
import { useSetRecoilState } from 'recoil';

import selectedNodeState from '../state/selectedNode';



const Selectable = ({ id, children }) => {
  const setSelectedNode = useSetRecoilState(selectedNodeState);

  const handleSelectNode = () => {
    setSelectedNode(values => ({ ...values, id }));
  }
  const handleSelectTree = () => {
    console.log('abc');
  }

  return (
    <div onClick={handleSelectNode} onDoubleClick={handleSelectTree} >
      {children}
    </div>
  );
}

export default Selectable;
