import React, { useState } from "react";
import combo_texas_bacon from "../../../assets/combos/combo_texas_bacon.jpeg";
import combo_texas_bacon3 from "../../../assets/combos/combo_texas_bacon3.jpeg";
import combo_texas_bravo from "../../../assets/combos/combo_texas_bravo.jpeg";
import combo_texas_burguer from "../../../assets/combos/combo_texas_burguer.jpeg";
import combo_texas_cheddar3 from "../../../assets/combos/combo_texas_cheddar3.jpeg";
import combo_texas_gril from "../../../assets/combos/combo_texas_gril.jpeg";
import combo_texas_gurmet from "../../../assets/combos/combo_texas_gurmet.jpeg";
import combo_texas_junior from "../../../assets/combos/combo_texas_junior.jpeg";
import combo_texas_urso from "../../../assets/combos/combo_texas_urso.jpeg";
import combo_texas_urso3 from "../../../assets/combos/combo_texas_urso3.jpeg";

import CardsBurguers from "../../../components/Commom/CardsBurguers";
import "./combos.css";
const Combos = () => {
  const [data, setData] = useState([
    {
      image: combo_texas_bacon,
      title: "Combo Texas Bacon - Lanche + Batata P + Refrigerante P",
      value: "30,90",
      id: 1,
      description: "Texas bacon + batata p + refrigerante 220ml",
    },
    // {
    //   image: combo_texas_bacon3,
    //   title: "Combo: 3 Texas Bacon + 1 Porção Batata + Refrigerante 1L",
    //   value: "85,90",
    //   id: 2,
    //   description: "Combo 3 texas bacon + porção de batata p + refrigerante 1l",
    // },
    {
      image: combo_texas_bravo,
      title: "Combo Texas Bravo - Lanche + Batata P + Refrigerante P",
      value: "27,90",
      id: 3,
      description: "Texas bravo + batata p + refrigerante 269ml",
    },
    {
      image: combo_texas_burguer,
      title: "Combo Texas Burguer - Lanche + Batata P + Refrigerante P",
      value: "29,90",
      id: 4,
      description: "Texas burguer + batata p + refrigerante 269ml",
    },
    {
      image: combo_texas_cheddar3,
      title: "Combo Texas Burguer - Lanche + Batata P + Refrigerante P",
      value: "29,90",
      id: 5,
      description: "Texas burguer + batata p + refrigerante 269ml",
    },
    {
      image: combo_texas_gril,
      title: "Combo Texas Grill - Lanche + Batata P + Refrigerante P",
      value: "31,90",
      id: 6,
      description:
        "Pão tipo parmesão, hambúrguer 150g, queijo, tomate, alface e molho grill",
    },
    {
      image: combo_texas_gurmet,
      title: "Combo Texas Gourmet - Lanche + Batata P + Refrigerante P",
      value: "28,90",
      id: 7,
      description: "Texas goumet + batata p + refrigerante 220ml",
    },
    {
      image: combo_texas_junior,
      title: "Combo Texas Gourmet - Lanche + Batata P + Refrigerante P",
      value: "28,90",
      id: 8,
      description: "Texas goumet + batata p + refrigerante 220ml",
    },
    {
      image: combo_texas_urso,
      title: "Combo Texas Gourmet - Lanche + Batata P + Refrigerante P",
      value: "28,90",
      id: 9,
      description: "Texas goumet + batata p + refrigerante 220ml",
    },
    {
      image: combo_texas_urso3,
      title: "Combo Texas Gourmet - Lanche + Batata P + Refrigerante P",
      value: "28,90",
      id: 10,
      description: "Texas goumet + batata p + refrigerante 220ml",
    },
  ]);

  const list = data.map((item) => (
    <div key={item.id}>
      <CardsBurguers value={item.value} image={item.image} title={item.title} />
    </div>
  ));
  return (
    <div>
      <h1 className="combosTitle">Combos</h1>
      {list}
    </div>
  );
};

export default Combos;
