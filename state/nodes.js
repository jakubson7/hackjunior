import { atom } from 'recoil';



const nodesState = atom({
  key: 'nodes',
  default: []
});

export default nodesState;
