import React from "react";
import Image from "next/image";
import "../css/nav.css";
import ContainerButtons from "./ContainerButtons";
import sony from "../assets/sonywhite.svg";
import Store from "./Store";

export default function Nav() {
  return (
    <div>
      <div className="container">
        <Image src={sony} className="sony-logo" alt="sony" />
      </div>
      <div className="container-dos">
        <ContainerButtons />
      </div>
      <div>
        <Store/>
      </div>
    </div>
  );
}
