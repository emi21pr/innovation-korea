import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Caso from "../components/Caso";
import NavbarP from "../components/NavbarP";

function CasoPage() {
  return (
    <div className="flex flex-col scroll-smooth justify-center items-center">
      <NavbarP/>
      <Caso/>
      <Footer />
    </div>
  );
}

export default CasoPage;
