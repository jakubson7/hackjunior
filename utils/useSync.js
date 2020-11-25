import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import socket from './socket';
import { __NodeListState, NodeByIdState, NodeTreeByIdState } from '../state/MindMap';



const useSync = () => {
  const setNodeList = useSetRecoilState(__NodeListState);
  const setNodeById = useSetRecoilState(NodeByIdState);
  const setNodeTreeById = useSetRecoilState(NodeTreeByIdState);

  useEffect(() => {
    socket.on('change-node-list', setNodeList);
    socket.on('change-node', setNodeById);
    socket.on('change-node-tree', data => {
      console.log('change-node-tree event');
      setNodeTreeById(data);
    });
  }, []);
}

export default useSync;
