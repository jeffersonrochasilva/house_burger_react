import React, { useState } from "react";
import "./refrigerator.css";

import { CardsBurguers } from "../../../components/Commom/CardsBurguers";

import coca_zero from "../../../assets/refrigerantes/coca_zero.png";
import coca_cola from "../../../assets/refrigerantes/coca_cola.jpg";
import fanta_laranje from "../../../assets/refrigerantes/fanta_laraja.jpg";
import fanta_uva from "../../../assets/refrigerantes/fanta_uva.webp";
import guarana_jesus from "../../../assets/refrigerantes/guarana_jesus.webp";
import pepsi_zero from "../../../assets/refrigerantes/pepsi_zero.jpeg";
import pepsi from "../../../assets/refrigerantes/pepsi.webp";

const Refrigerator = () => {
  const [data] = useState([
    {
      image: coca_zero,
      title: "Coca Zero",
      description: ["350 ml"],
      value: "4,50",
      id: 1,
    },
    {
      image: coca_cola,
      title: "Coca Cola",
      description: ["280 ml"],
      value: "3,20",
      id: 2,
    },
    {
      image: fanta_laranje,
      title: "Fanta Laranja",
      description: ["280 ml"],
      value: "3,50",
      id: 3,
    },
    {
      image: fanta_uva,
      title: "Fanta Uva",
      description: ["280 ml"],
      value: "3,50",
      id: 4,
    },
    {
      image: guarana_jesus,
      title: "Guaraná Jesus",
      description: ["280 ml"],
      value: "3,50",
      id: 5,
    },
    {
      image: pepsi_zero,
      title: "Pepsi Zero",
      description: ["350 ml"],
      value: "4,555",
      id: 6,
    },
    {
      image: pepsi,
      title: "Pepsi",
      description: ["350 ml"],
      value: "4,00",
      id: 7,
    },
  ]);
  const list = data.map((item) => (
    <div key={item.id}>
      <CardsBurguers
        image={item.image}
        title={item.title}
        value={item.value}
        description={item.description}
      />
    </div>
  ));
  return (
    <div>
      <h1 className="refrigeratorTitle">Refrigerantes</h1>
      {list}
    </div>
  );
};
export default Refrigerator;
