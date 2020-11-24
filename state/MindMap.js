import { atom, selector, atomFamily, selectorFamily } from 'recoil';

import socket from '../utils/socket';
import { RoomState } from './Room';



const __NodeListState = atom({
  key: '__node-list',
  default: []
});
export const NodeListState = selector({
  key: 'node-list',
  get: ({ get }) => get(__NodeListState),
  set:  ({ set, get }, setter) => {
    const { name } = get(RoomState);
    const nodeList = get(__NodeListState);

    set(__NodeListState, setter);
    socket.emit('send-node-list', name, nodeList);
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
    const node = get(__NodeState(id));

    set(__NodeState(id), setter);
    socket.emit('send-node-list', name, { id, node });
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

export const NodeConnectionTreePoistionState = selectorFamily({
  key: 'node-connection-list--position',
  set: base => ({ set, get }, { movementX, movementY }) => {
    const baseNode = get(__NodeState(base));
    const { name } = get(RoomState);

    set(__NodeState(base), node => ({
      ...node,
      position: {
        x: node.position.x + movementX,
        y: node.position.y + movementY
      }
    }));
    baseNode.connections.forEach(target => set(NodeConnectionTreePoistionState(target), { movementX, movementY }));
    socket.emit('send-node-tree-movement', name, { 
      id: base,
      movementX,
      movementY 
    });
  }
});
