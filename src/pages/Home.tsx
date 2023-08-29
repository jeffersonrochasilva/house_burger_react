// Style
import { Container } from "./style";
// Components
import Cards from "../components/Commom/Cards";

const Home = () => {
  return (
    <Container>
      <Cards title="Promoções" route="promotions" />
      <Cards title="Combos" route="hamburger?query=combos" />
      <Cards title="Hamburger" route="hamburger?query=burger" />
      <Cards title="Refeições" route="hamburger?query=meals" />
      <Cards title="Refrigerantes" route="hamburger?query=refrigerat" />
      <Cards title="Chopp" route="hamburger?query=chopp" />
      <Cards title="Drinks" route="hamburger?query=drinks" />
    </Container>
  );
};

export default Home;
