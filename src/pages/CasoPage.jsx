import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Caso from "../components/Caso";
import NavbarP from "../components/NavbarP";
import Papel from "../components/Papel";

function CasoPage() {
  return (
    <div className="flex flex-col scroll-smooth justify-center items-center">
      <NavbarP/>
      <Caso/>
      <Papel/>
      <Footer />
    </div>
  );
}

export default CasoPage;
