import React from "react";
import "./cardsBurgues.css";
const CardsBurguers = (props: { image: any; title: string; value: string }) => {
  return (
    <div className="burguesContainer">
      <div className="cardsDescription">
        <span className="cardsTextTitle">{props.title}</span>
        <p className="cardsTextDescription">
          Pão australiano, 2 hamburguer 150 gr, bacon, cheddar, mussarela,
          molho...
          {/* especial e cebola crispy (crocante). */}
        </p>
        <p className="cardsValue">R$ {props.value}</p>
      </div>
      <img
        className="cardsImage"
        src={props.image}
        alt="texas_gril"
        title="hambubgueer"
      />
    </div>
  );
};

export default CardsBurguers;
