import React from "react";
import Footer from "../components/Footer";
import NavbarP from "../components/NavbarP";
import HeroP from "../components/Propuesta/HeroP";
import Entorno from "../components/Propuesta/Entorno";

function Propuesta() {
  return (
    <div className="py-4 lg:px-28 px-8 gap-5 flex flex-col">
      <NavbarP />
      <HeroP/>
      <Entorno/>
      <Footer />
    </div>
  );
}

export default Propuesta;
