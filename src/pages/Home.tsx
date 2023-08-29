// Style
import { Container } from "./style";
// Components
import Cards from "../components/Commom/Cards";

const Home = () => {
  return (
    <Container>
      <Cards title="Promoções" route="promotions" />
      <Cards title="Combos" route="itemselectionarea?query=combos" />
      <Cards title="Hamburger" route="itemselectionarea?query=burger" />
      <Cards title="Refeições" route="itemselectionarea?query=meals" />
      <Cards title="Refrigerantes" route="itemselectionarea?query=refrigerat" />
      <Cards title="Chopp" route="itemselectionarea?query=chopp" />
      <Cards title="Drinks" route="itemselectionarea?query=drinks" />
    </Container>
  );
};

export default Home;
