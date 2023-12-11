import React from "react";
import Cards from "./Cards";
import "../css/card.css"

export default function ContainerCards() {
  return (
    <div>
      <div className="container-cards">
        <div className="cards-container">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
        <div className="cards-container">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
      <div className="container-carrusel"></div>
    </div>
  );
}
