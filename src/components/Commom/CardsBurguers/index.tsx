import "./cardsBurgues.css";
import { Link } from "react-router-dom";

interface IProps {
  item?: any;
  Ingredients?: string;
  onpress?: any;
}

const CardsBurguers = ({ item, Ingredients, onpress }: IProps) => {
  return (
    <Link to={"/selectItem"} onClick={() => onpress(item)}>
      <div className="burguesContainer">
        <div className="cardsDescription">
          <span className="cardsTextTitle">{item.title}</span>
          <p className="cardsTextDescription">{Ingredients}</p>
          <p className="cardsValue">R$ {item.value}</p>
        </div>
        <img
          className="cardsImage"
          src={item.image}
          alt="texas_gril"
          title="hambubgueer"
        />
      </div>
    </Link>
  );
};

export { CardsBurguers };
