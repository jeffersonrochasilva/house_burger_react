// Components
import CardsBurguers from "../../../components/Commom/CardsBurguers";

// images
import caipirinha_de_limao from "../../../assets/drinks/caipirinha-de-limao.jpg";
import drink_gin from "../../../assets/drinks/drink_gin.jpg";
import drink_maracuja from "../../../assets/drinks/drink_maracuja.jpg";
import drink_azul from "../../../assets/drinks/drink-lagoa-azul.webp";
import drink_morango from "../../../assets/drinks/drinks-de-morango.webp";
const Drinks = () => {
  return (
    <div>
      <h1
        style={{
          marginTop: 0,
        }}
      >
        Drinks
      </h1>
      <CardsBurguers
        image={drink_morango}
        value="22,90"
        description="Caipirinha de Morango com vodica"
        title="Caipirinha de Morango"
      />
      <CardsBurguers
        image={caipirinha_de_limao}
        value="45,90"
        description="Caipirinha de limão com vodica"
        title="Caipirinha"
      />
      <CardsBurguers
        image={drink_azul}
        value="46,90"
        description="Caipirinha de limão com vodica"
        title="Drink Lagoa Azul"
      />
      <CardsBurguers
        image={drink_gin}
        value="28,90"
        description="Gin com agua tonica"
        title="Drink Gin"
      />
      <CardsBurguers
        image={drink_maracuja}
        value="78,90"
        description="drink de maracujá"
        title="Drink Maracujá"
      />
    </div>
  );
};

export default Drinks;
