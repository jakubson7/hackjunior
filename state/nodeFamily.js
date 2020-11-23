import { atomFamily } from 'recoil';



const nodeFamily = atomFamily({
  key: 'element-family',
  default: {
    x: 100,
    y: 100,
    type: 'main',
    connections: []
  }
})

export default nodeFamily;
