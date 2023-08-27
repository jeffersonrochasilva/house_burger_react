import React, { useState } from "react";

import texas_bacon from "../../../assets/texas_bacon.jpeg";
import texas_barbie from "../../../assets/texas_barbie.jpeg";
import texas_black from "../../../assets/texas_black.jpeg";
import texas_bravo from "../../../assets/texas_bravo.jpeg";
import texas_burguer from "../../../assets/texas_burguer.jpeg";
import texas_cheddar from "../../../assets/texas_cheddar.jpeg";
import texas_chiken from "../../../assets/texas_chiken.jpeg";
import texas_double from "../../../assets/texas_double_urso.jpeg";
import texas_gourmet from "../../../assets/texas_gourmet.jpeg";
import texas_junior from "../../../assets/texas_junior.jpeg";
import texas_original from "../../../assets/texas_original.jpeg";
import texas_peppa from "../../../assets/texas_peppa.jpeg";
import texas_pepperone from "../../../assets/texas_pepperone.jpeg";
import texas_smash from "../../../assets/texas_smash.jpeg";
import texas_urso from "../../../assets/texas_urso.jpeg";

// Components
import { CardsBurguers } from "../../../components/Commom/CardsBurguers";

const Hamburger = () => {
  const [data] = useState([
    {
      image: texas_bacon,
      title: "Texas bacon",
      value: "24,90",
      id: 1,
      description: [
        "Pão australiano",
        "2 hamburguer 150 gr",
        "bacon",
        "cheddar",
        "mussarela",
        "molho",
      ],
    },
    {
      image: texas_barbie,
      title: "Texas barbie",
      value: "24,90",
      id: 2,
      description: [
        "Pão australiano",
        "2 hamburguer 150 gr",
        "bacon",
        "cheddar",
        "mussarela",
        "molho",
      ],
    },
    {
      image: texas_black,
      title: "Texas black",
      value: "25,90",
      id: 3,
      description: [
        "Pão australiano",
        "2 hamburguer 150 gr",
        "bacon",
        "cheddar",
        "mussarela",
        "molho",
      ],
    },
    {
      image: texas_bravo,
      title: "Texas bravo",
      value: "34,60",
      id: 4,
      description: [
        "Pão australiano",
        "2 hamburguer 150 gr",
        "bacon",
        "cheddar",
        "mussarela",
        "molho",
      ],
    },
    {
      image: texas_chiken,
      title: "texas chiken",
      value: "45,90",
      id: 5,
      description: [
        "Pão australiano",
        "2 hamburguer 150 gr",
        "bacon",
        "cheddar",
        "mussarela",
        "molho",
      ],
    },
    {
      image: texas_cheddar,
      title: "Texas cheddar",
      value: "15,90",
      id: 6,
      description: [
        "Pão australiano",
        "2 hamburguer 150 gr",
        "bacon",
        "cheddar",
        "mussarela",
        "molho",
      ],
    },
    {
      image: texas_burguer,
      title: "Texas Burguer",
      value: "20,90",
      id: 7,
      description: [
        "Pão australiano",
        "2 hamburguer 150 gr",
        "bacon",
        "cheddar",
        "mussarela",
        "molho",
      ],
    },
    {
      image: texas_double,
      title: "Texas double",
      value: "26,90",
      id: 8,
      description: [
        "Pão australiano",
        "2 hamburguer 150 gr",
        "bacon",
        "cheddar",
        "mussarela",
        "molho",
      ],
    },
    {
      image: texas_gourmet,
      title: "Texas gourmet",
      value: "35,90",
      id: 9,
      description: [
        "Pão australiano",
        "2 hamburguer 150 gr",
        "bacon",
        "cheddar",
        "mussarela",
        "molho",
      ],
    },
    {
      image: texas_junior,
      title: "Texas junior",
      value: "45,90",
      id: 10,
      description: [
        "Pão australiano",
        "2 hamburguer 150 gr",
        "bacon",
        "cheddar",
        "mussarela",
        "molho",
      ],
    },
    {
      image: texas_original,
      title: "Textas original",
      value: "45,80",
      id: 11,
      description: [
        "Pão australiano",
        "2 hamburguer 150 gr",
        "bacon",
        "cheddar",
        "mussarela",
        "molho",
      ],
    },
    {
      image: texas_peppa,
      title: "Texas peppa",
      value: "25,90",
      id: 12,
      description: [
        "Pão australiano",
        "2 hamburguer 150 gr",
        "bacon",
        "cheddar",
        "mussarela",
        "molho",
      ],
    },
    {
      image: texas_pepperone,
      title: "Texas pepperone",
      value: "26,90",
      id: 13,
      description: [
        "Pão australiano",
        "2 hamburguer 150 gr",
        "bacon",
        "cheddar",
        "mussarela",
        "molho",
      ],
    },
    {
      image: texas_smash,
      title: "Texas smash",
      value: "30,90",
      id: 14,
      description: [
        "Pão australiano",
        "2 hamburguer 150 gr",
        "bacon",
        "cheddar",
        "mussarela",
        "molho",
      ],
    },
    {
      image: texas_urso,
      title: "Texas urso",
      value: "40,90",
      id: 15,
      description: [
        "Pão australiano",
        "2 hamburguer 150 gr",
        "bacon",
        "cheddar",
        "mussarela",
        "molho",
      ],
    },
  ]);
  const [toGoRoute] = useState("selectHamburger");
  const getItem = (item: any) => {
    console.log(item, "item");
  };
  const listItem = data.map((item) => (
    <div key={item.id}>
      <CardsBurguers
        image={item.image}
        title={item.title}
        value={item.value}
        item={item}
        toGoRoute={toGoRoute}
        description={item.description}
      />
    </div>
  ));
  return (
    <div>
      <h1>Hambúrguers</h1>
      <div>{listItem}</div>
    </div>
  );
};

export default Hamburger;
