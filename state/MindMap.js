import { atom, selector, atomFamily, selectorFamily } from 'recoil';

import socket from '../utils/socket';
import { RoomState } from './Room';



export const __NodeListState = atom({
  key: '__node-list',
  default: []
});
export const NodeListState = selector({
  key: 'node-list',
  get: ({ get }) => get(__NodeListState),
  set: ({ set, get }, setter) => {
    const { name } = get(RoomState);

    set(__NodeListState, setter);
    socket.emit('send-node-list', name, setter);
  }
});



const __NodeState = atomFamily({
  key: '__node',
  default: {
    position: {
      x: 100,
      y: 100
    },
    connections: [],
    path: [],
    color: 'blue0',
    value: 'value',
    type: 'free',
    selected: false
  }
});
export const NodeState = selectorFamily({
  key: 'node',
  get: id => ({ get }) => get(__NodeState(id)),
  set: id => ({ set, get }, setter) => {
    const { name } = get(RoomState);

    set(__NodeState(id), setter);
    socket.emit('send-node', name, { id, node: setter });
  }
});



export const SelectedNodeState = atom({
  key: 'selected-node',
  default: {
    id: 10,
    single: true
  }
});

export const NodeConnectionPairPositionState = selectorFamily({
  key: 'node-connection-pair-position',
  get: (base, target) => ({ get }) => ({
    basePosition: get(__NodeState(base)).position,
    targetPosition: get(__NodeState(target)).position
  })
});

export const NodeTreeState = selectorFamily({
  key: 'node-tree-state',
  set: id => ({ set, get }, { movementX, movementY }) => {
    const node = get(__NodeState(id))

    set(__NodeState(id), node => ({
      ...node,
      position: {
        x: node.position.x + movementX,
        y: node.position.y + movementY
      }
    }));
    node.connections.forEach(target => {
      console.log('node-tree-connection-data: ', target);
      set(NodeTreeState(target), { movementX, movementY })
    });
  },
  get: id => ({ get }) => get(__NodeState(id))
});

export const NodeTreeByIdState = selector({
  key: 'node-tree-by-id',
  set: ({ set }, { id, movementX, movementY }) => {
    set(NodeTreeState(id), { movementX, movementY });
  } 
});

export const NodeByIdState = selector({
  key: 'node-by-id',
  set: ({ set }, { id, node }) => {
    set(__NodeState(id), node);
  }
});
