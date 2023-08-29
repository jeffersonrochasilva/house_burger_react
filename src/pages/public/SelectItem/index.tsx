/* eslint-disable jsx-a11y/alt-text */
import "./selectItem.css";

// State
import { useRecoilState } from "recoil";
import { values } from "../../../store/state";

const SelectItem = () => {
  const [value, setValue] = useRecoilState(values);

  const getItem = () => {
    const obj = {
      title: value?.title,
      options: value?.options,
      description: value?.description,
    };
    console.log("obj", obj);
  };

  return (
    <div className="selectItempage">
      <div className="selectContainer">
        <img className="selectImg" src={value?.image} />
        <h1>{value?.title}</h1>

        {value?.options.length ? (
          <span>
            {value?.options &&
              value?.options.map((item: any) => (
                <div className="selectDescription" key={item.id}>
                  <span>{item.title}</span>
                  <input
                    value={item.id}
                    onChange={(event) => null}
                    type="checkbox"
                    color="red"
                  />
                </div>
              ))}
          </span>
        ) : null}
      </div>
      <textarea
        className="selectTextArea"
        placeholder="Digite sua observação"
        value={value?.description}
        onChange={(description) =>
          setValue((val: any) => ({ ...val, description }))
        }
      />
      <button className="buttonSelectItem" onClick={getItem}>
        ADICIONAR
      </button>
    </div>
  );
};
export default SelectItem;
