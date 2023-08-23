// Image
import fejoada from "../../../assets/refeicoes/fejoada2.jpg";
import fejoada_media from "../../../assets/refeicoes/feijoada_media.jpg";
import fejoada_grande from "../../../assets/refeicoes/fejoada_grande.webp";
import frango_parmejiana from "../../../assets/refeicoes/frango_parmejiana.png";

// Components
import CardsBurguers from "../../../components/Commom/CardsBurguers";
const Meals = () => {
  return (
    <div>
      <h1
        style={{
          marginTop: 0,
        }}
      >
        Refeições
      </h1>
      <CardsBurguers
        image={fejoada}
        value="35,00"
        description="Fejoada Pequena"
        title="Fejoada Pequena"
      />
      <CardsBurguers
        image={fejoada_media}
        value="65,00"
        description="Fejoada Media"
        title="Fejoada Media"
      />{" "}
      <CardsBurguers
        image={fejoada_grande}
        value="85,00"
        description="Fejoada Grande"
        title="Fejoada Grande"
      />
      <CardsBurguers
        image={frango_parmejiana}
        value="25,90"
        description="Frango Parmejiana"
        title="Frango Parmejiana"
      />
    </div>
  );
};

export default Meals;
