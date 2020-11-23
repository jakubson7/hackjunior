import { selector } from 'recoil';

import nodeFamily from './nodeFamily';



const nodeSelector = selector({
  key: 'node-selector',
  get({ get }, id) {
    return get(nodeFamily(id));
  }
});

export default nodeSelector;
