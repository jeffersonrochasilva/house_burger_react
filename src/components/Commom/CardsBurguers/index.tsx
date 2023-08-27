import "./cardsBurgues.css";
import { Link } from "react-router-dom";

// Store
import { useSetRecoilState } from "recoil";
import { values } from "../../../store/state";

interface IProps {
  image?: string;
  title?: string;
  value?: string;
  description?: string[];
  item?: any;
  toGoRoute?: string;
}

const CardsBurguers = ({
  image,
  title,
  description,
  value,
  item,
  toGoRoute,
}: IProps) => {
  const setSelectItem = useSetRecoilState(values);

  const getItem = (item: any): void => {
    setSelectItem((val: any) => ({
      ...val,
      title: title,
      descriptions: description,
      image: image,
    }));
    console.log(item, "item");
  };

  return (
    <Link to={"/selectItem"}>
      <div className="burguesContainer" onClick={() => getItem(item)}>
        <div className="cardsDescription">
          <span className="cardsTextTitle">{title}</span>
          <p className="cardsTextDescription">
            {description
              ? description
              : "Pão australiano, 2 hamburguer 150 gr, bacon, cheddar, mussarela, molho..."}
          </p>
          <p className="cardsValue">R$ {value}</p>
        </div>
        <img
          className="cardsImage"
          src={image}
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
