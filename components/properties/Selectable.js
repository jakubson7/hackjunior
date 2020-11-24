import React from 'react';
import { useSetRecoilState } from 'recoil';

import { SelectedNodeState } from '../map/state';



const Selectable = ({ id, children }) => {
  const setSelectedNode = useSetRecoilState(SelectedNodeState);

  const handleSingleSelect = () => {
    setSelectedNode({ id, single: true });
  }
  const handleTreeSelect = () => {
    setSelectedNode({ id, single: false });
  }

  return (
    <div onClick={handleSingleSelect} onDoubleClick={handleTreeSelect} >
      { children }
    </div>
  );
}

export default Selectable;
