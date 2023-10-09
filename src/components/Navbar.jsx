import React from "react";
import logo from "/images/logo.svg";
function Navbar() {
  return (
    <nav className="py-5 border-b justify-center items-center gap-14 flex w-full sticky top-0 bg-[#fcfcfc] z-50">
      <div className="self-stretch justify-start items-center gap-10 flex">
        <a className="text-center text-sm nav-link" href="#hero">
          Inicio
        </a>
        <a className="text-center text-sm nav-link" href="#about">
          Sobre Nosotros
        </a>
        <a className="text-cente text-sm nav-link" href="#collections">
          Colecciones
        </a>
      </div>
      <a href="/">
        <img src={logo} alt="FlawlessLook Logo" />
      </a>
      <div className="self-stretch justify-start items-center gap-10 flex">
        <a className="text-center text-sm nav-link" href="#products">
          Productos
        </a>
        <a className="text-center text-sm nav-link" href="#offers">
          Ofertas
        </a>
        <a className="text-cente text-sm nav-link" href="#testimonials">
          Testimonios
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
