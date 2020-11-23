import { selector } from 'recoil';

import selectedNodeState from './selectedNode';
import nodeFamily from './nodeFamily';



const selectedNodeSelector = selector({
  key: 'selected-node-selector',
  get({ get }) {
    const id = get(selectedNodeState);
    if(id !== null) return get(nodeFamily(id));
  },
  set({ set, get }, values) {
    const id = get(selectedNodeState);
    if(id !== null) set(nodeFamily(id), values);
  }
}); 

export default selectedNodeSelector;
