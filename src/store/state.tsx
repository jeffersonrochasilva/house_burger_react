// state.ts
import { atom } from "recoil";

const initialCardData = atom({
  key: "countStateInitial",
  default: {
    loading: false,
    items: [
      {
        title: "Default Title",
        description: ["Default Description"],
        addItems: "",
        value: "0",
      },
    ],
  },
});

export const countState = atom({
  key: "countState",
  default: initialCardData,
});

export const valuesInitial = atom({
  key: "valuesInitial",
  default: {
    loading: false,
    image: "",
    title: "",
    descriptions: [],
  },
});

export const values = atom({
  key: "values",
  default: valuesInitial,
});
