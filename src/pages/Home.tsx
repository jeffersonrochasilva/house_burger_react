import React from "react";
import { useRecoilState } from "recoil";
import { countState } from "../store/state";
// Style
import "./Home.css";

// Components
import Cards from "../components/Commom/Cards";

const Home = () => {
  const [shoppingCart, setShoppingCart] = useRecoilState(countState);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      <Cards title="Promoções" route="promotions" />
      <Cards title="Combos" route="combos" />
      <Cards title="Hamburger" route="hamburger" />
      <Cards title="Refeições" route="meals" />
      <Cards title="Refrigerantes" route="refrigerator" />
      <Cards title="Shop" route="shop" />
      <Cards title="Drinks" route="drinks" />
    </div>
  );
};

export default Home;
