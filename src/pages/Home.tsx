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
      <Cards title="Hamburger" route="hamburger?query=burger" />
      {/* <Cards title="Refeições" route="meals" /> */}
      <Cards title="Refrigerantes" route="hamburger?query=refrigerat" />
      <Cards title="Chopp" route="hamburger?query=chopp" />
      {/* <Cards title="Drinks" route="drinks" /> */}
    </div>
  );
};

export default Home;
