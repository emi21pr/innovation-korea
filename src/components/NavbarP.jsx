import React from "react";
import logo from "/images/logo.svg";
function NavbarP() {
  return (
    <nav className="py-4 justify-between items-center gap-10 flex w-full border-b lg:flex-row flex-col">
      <div className="flex gap-2 justify-center">
        <img src={logo} alt="Logo" className="w-6" /> <p className="font-bold text-3xl">PROPUESTA</p>
      </div>
      <div className="lg:gap-10 gap-4 md:flex hidden">
        <a
          className="text-center text-md hover:-translate-y-1 transition p-2"
          href="#entorno"
        >
          Entorno
        </a>
        <a
          className="text-center text-md hover:-translate-y-1 transition p-2"
          href="#tiempo"
        >
          Tiempo y Costo
        </a>
        <a
          className="text-center text-md hover:-translate-y-1 transition p-2"
          href="#actores"
        >
          Actores
        </a>
        <a
          className="text-center text-md hover:-translate-y-1 transition p-2"
          href="#descripcion"
        >
          Descripción
        </a>
        <a
          className="font-semibold text-center text-md hover:bg-[#494949] transition px-4 py-2 text-white bg-[#202020]"
          href="/"
        >
          Regresar
        </a>
      </div>
    </nav>
  );
}

export default NavbarP;
