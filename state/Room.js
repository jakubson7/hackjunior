import { atom } from 'recoil';



export const UserState = atom({
  key: 'user',
  default: {
    name: 'foo'
  }
});

export const UserListState = atom({
  key: 'user-list',
  default: [
    { name: 'bot0' },
    { name: 'bot1' },
    { name: 'bot2' }
  ]
});

export const RoomState = atom({
  key: 'room',
  default: {
    name: 'abc'
  }
});
