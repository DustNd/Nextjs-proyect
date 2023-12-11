import React from "react";
import Image from "next/image";
import "../css/page.css";
import banner2 from "../assets/banner3.png";
import banner from "../assets/banner6.png";
import "../app/page.css";
import Nba from "@/components/Nba";
import Nav from "@/components/Nav";
import ContainerCards from "@/components/ContainerCards";
import Plus from "@/components/Plus";
import footer from "../assets/footer.png";
import Aaaa from "@/components/Aaaa";
import ContainerCarrusel from "@/components/ContainerCarrusel";
import Link from "next/link";

const cargarPaises = () => {
  return fetch("https://restcountries.com/v3.1/all").then((response) =>
    response.json()
  );
};

export default async function Home(props) {
  const paises = await cargarPaises();
  return (
    <main>
      <Nav />
      <div className="degree"></div>
      <Image src={banner} className="carousel-image" alt="" />
      <Nba />
      <div className="lero">
        <ContainerCards />
        <ContainerCarrusel />
        <ContainerCarrusel />
        <ContainerCarrusel />
      </div>
      <Image src={banner2} className="carousel-image" alt="" />
      <Plus />
      <Aaaa />
      <>
        {paises.map((valor, indice) => (
          <div key={indice}>
            <Link href={`${valor.name.common}`}>{valor.name.common}</Link>
          </div>
        ))}
      </>

      <footer class="footer">
        <Image src={footer} class="foot" alt="" />
      </footer>
    </main>
  );
}
