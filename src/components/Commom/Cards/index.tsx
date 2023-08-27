import "./cards.css";
import { Link } from "react-router-dom";
// icons
import {
  FaCocktail,
  FaHamburger,
  FaGulp,
  FaDollarSign,
  // FaMoneyBillAlt,
} from "react-icons/fa";
import { IoMdBeer } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdDinnerDining } from "react-icons/md";
const Cards = (props: { title: string; route: any }) => {
  return (
    <Link className="cardLink" to={props.route}>
      <div className="container">
        {props.title === "Drinks" && (
          <FaCocktail style={{ color: "#303030", fontSize: 60 }} />
        )}
        {props.title === "Hamburger" && (
          <FaHamburger style={{ color: "#303030", fontSize: 60 }} />
        )}
        {props.title === "Refrigerantes" && (
          <FaGulp style={{ color: "#303030", fontSize: 60 }} />
        )}
        {props.title === "Promoções" && (
          <FaDollarSign style={{ color: "#303030", fontSize: 60 }} />
        )}
        {props.title === "Chopp" && (
          <IoMdBeer style={{ color: "#303030", fontSize: 60 }} />
        )}
        {props.title === "Combos" && (
          <IoFastFoodOutline style={{ color: "#303030", fontSize: 60 }} />
        )}
        {props.title === "Refeições" && (
          <MdDinnerDining style={{ color: "#303030", fontSize: 60 }} />
        )}
        <p className="title">{props.title}</p>
      </div>
    </Link>
  );
};

export default Cards;
