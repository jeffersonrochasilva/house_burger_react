import React, { useState } from "react";
/* eslint-disable jsx-a11y/alt-text */
import "./selectItem.css";

// State
import { useRecoilState } from "recoil";
import { countState, values } from "../../../store/state";

const SelectItem = () => {
  const [selectItem, setSelectItem] = useRecoilState(countState);
  const [value, setValue] = useRecoilState(values);

  const [inputValue, setInputValue] = useState("");
  const [observation, setObservation] = useState("");

  interface IProps {
    title: string;
    addItems: string;
    description: any[];
    value: string;
  }

  const createShoppingCar = () => {
    const car = {
      title: "",
      addItems: "",
      description: [""],
      value: "",
    };
    setSelectItem((val) => ({ ...val, items: [...val.items, car] }));

    alert("chamou");
  };

  return (
    <div className="selectItempage">
      <div className="selectContainer">
        <img className="selectImg" src={value.image} />
        <h1>{value.title}</h1>
        <span>
          {value?.descriptions &&
            value?.descriptions.map((item) => (
              <div className="selectDescription" key={item}>
                <span>{item}</span>
                <input
                  value={item}
                  onChange={(event) => setInputValue(event.target.value)}
                  type="checkbox"
                  color="red"
                />
              </div>
            ))}
        </span>
      </div>
      <textarea
        className="selectTextArea"
        placeholder="Digite sua observação"
        value={observation}
        onChange={(event) => setObservation(event.target.value)}
      ></textarea>
      <span>{observation}</span>
      <span>{inputValue}</span>
      <button onClick={createShoppingCar} className="buttonSelectItem">
        ADICIONAR
      </button>
    </div>
  );
};
export default SelectItem;
