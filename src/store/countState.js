import { atom } from "recoil";

export const countState = atom({
  key: "countState",
  default: 0,
});

export const countLogState = atom({
  key: "countLogState",
  default: [],
});
