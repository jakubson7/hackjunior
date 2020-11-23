import { atom } from 'recoil';



const selectedNodeState = atom({
  key: 'selected-nodes',
  default: 0
});

export default selectedNodeState;
