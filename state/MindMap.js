import { atom, atomFamily, selectorFamily } from 'recoil';



export const NodeListState = atom({
  key: 'node-list',
  default: []
});

export const NodeState = atomFamily({
  key: 'node',
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
    basePosition: get(NodeState(base)).position,
    targetPosition: get(NodeState(target)).position
  })
});

export const NodeConnectionTreePoistionState = selectorFamily({
  key: 'node-connection-list--position',
  set: base => ({ set, get }, { movementX, movementY }) => {
    const baseNode = get(NodeState(base));

    set(NodeState(base), node => ({
      ...node,
      position: {
        x: node.position.x + movementX,
        y: node.position.y + movementY
      }
    }));
    baseNode.connections.forEach(target => set(NodeConnectionTreePoistionState(target), { movementX, movementY }));
  }
});
