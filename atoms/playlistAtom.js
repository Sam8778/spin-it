import { atom } from "recoil";

export const playlistState = atom ({
    key: "playlistState",
    default: null
});

export const playlistIdState = atom({
  key: 'playlistIdState',
  default: '0xev9Iu5toHJc1L1PthrpW',
});