import React from "react";
import Image from "next/image";
import "../css/store.css"
import logostore from "../assets/logostore.webp";

export default function Store() {
  return (
    <div className="store-container">
      <Image src={logostore} className="logostore" />
      <div className="content">
        <button className="buttons">Más recientes</button>
        <button className="buttons">Colecciones</button >
        <button className="buttons">Ofertas</button>
        <button className="buttons">Suscripciones</button>
        <button className="buttons">País</button>
      </div>
    </div>
  );
}
