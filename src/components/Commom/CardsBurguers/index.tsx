import React from "react";
import "./cardsBurgues.css";
import { Link } from "react-router-dom";

// Store
import { useSetRecoilState } from "recoil";
import { values } from "../../../store/state";

const CardsBurguers = (props: {
  image?: any;
  title?: string | undefined;
  value?: string | undefined;
  description?: string[] | undefined;
  item?: any;
  toGoRoute?: string | undefined;
}) => {
  const setSelectItem = useSetRecoilState(values);

  const getItem = (item: any): void => {
    setSelectItem((val) => ({
      ...val,
      title: "",
      descriptions: [],
      image: "",
    }));
    console.log(item, "item");
  };

  return (
    <Link to={"/selectItem"}>
      <div className="burguesContainer" onClick={() => getItem(props.item)}>
        <div className="cardsDescription">
          <span className="cardsTextTitle">{props.title}</span>
          <p className="cardsTextDescription">
            {props.description
              ? props.description
              : "Pão australiano, 2 hamburguer 150 gr, bacon, cheddar, mussarela, molho..."}
          </p>
          <p className="cardsValue">R$ {props.value}</p>
        </div>
        <img
          className="cardsImage"
          src={props.image}
          alt="texas_gril"
          title="hambubgueer"
        />
      </div>
    </Link>
  );
};

const Davi = () => {
  return <></>;
};

export { CardsBurguers };

export { Davi };
