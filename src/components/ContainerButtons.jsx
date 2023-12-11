import React from "react";
import Image from "next/image";
import "../css/nav.css";
import lupa from "../assets/lupa.svg"
import logo from "../assets/logo.svg";

export default function ContainerButtons() {
  return (
    <div className="container-tres">
      <div className="contenedor">
      <Image src={logo} className="logo" />

        <button className="botones">Juegos</button>
        <button className="botones">PS5</button>
        <button className="botones">Servicios</button>
        <button className="botones">Accesorios</button>
        <button className="botones">Noticias</button>
        <button className="botones">TIenda</button>
        <button className="botones">Asistencia</button>
      </div>
      <div className="contenedor-2">
        <button className="boton-sesion">Iniciar sesión</button>
        <Image src={lupa} className="lupa"/>
      </div>
    </div>
  );
}
