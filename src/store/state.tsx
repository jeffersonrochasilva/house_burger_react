// state.ts
import { atom } from "recoil";

const initialCardData = atom({
  key: "countStateInitial",
  default: {
    loading: false,
    items: [
      {
        description: "Default Description",
        value: "0",
        options: [],
        id: "",
        qtd: 0,
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
    description: "",
    options: [],
    value: "",
  },
});

export const values = atom({
  key: "values",
  default: valuesInitial,
});
