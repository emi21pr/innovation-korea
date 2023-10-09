import React from "react";
import logo from "/images/logo.svg";
function Navbar() {
  return (
    <nav className="py-5 border-b justify-center items-center gap-10 lg:gap-14 flex w-full sticky top-0 bg-[#fcfcfc] z-50">
      <div className="items-center lg:gap-10 gap-4 md:flex hidden">
        <a className="text-center lg:text-sm text-xs nav-link" href="#hero">
          Inicio
        </a>
        <a className="text-center lg:text-sm text-xs nav-link" href="#about">
          Sobre Nosotros
        </a>
        <a className="text-cente lg:text-sm text-xs nav-link" href="#collections">
          Colecciones
        </a>
      </div>
      <a href="/">
        <img src={logo} alt="FlawlessLook Logo" className="w-48" />
      </a>
      <div className="items-center lg:gap-10 gap-4 md:flex hidden">
        <a className="text-center lg:text-sm text-xs nav-link" href="#products">
          Productos
        </a>
        <a className="text-center lg:text-sm text-xs nav-link" href="#offers">
          Ofertas
        </a>
        <a className="text-cente lg:text-sm text-xs nav-link" href="#testimonials">
          Testimonios
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
