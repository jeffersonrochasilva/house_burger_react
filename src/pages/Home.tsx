import React from "react";
// Style
import "./Home.css";
// Components
import Cards from "../components/Commom/Cards";
const Home = () => {
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
