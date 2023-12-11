import React from "react";
import "../css/carrusel.css";
import Carruselcards from "./Carruselcards";

export default function ContainerCarrusel() {
  return (
    <div className="lel">
      <h3 className="titulocarru">titulo</h3>
      <div className="contenido">
        <div className="carruselcards">
          <Carruselcards />
          <Carruselcards />
          <Carruselcards />
          <Carruselcards />
          <Carruselcards />
        </div>
      </div>
    </div>
  );
}
