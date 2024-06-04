import React from "react";
import logo from "/images/vite.svg";

function NavbarP() {
  return (
    <nav className="fixed bottom-6 w-fit z-10 ">
      <div className="md:h-12 h-16 flex bg-[#0000004a] items-center md:gap-10 backdrop-blur rounded-md shadow-lg">
        <div className="w-[48px]">
          <a href="#hero2">
            <img src={logo} alt="Logo" className="w-12" />
          </a>
        </div>
        <div className="md:gap-4 gap-1 flex px-4 md:px-0">
          <a
            className="text-center text-sm p-2"
            href="#papel"
          >
            Papel
          </a>
          <a
            className="text-center text-sm p-2"
            href="#tipos"
          >
            Tipos
          </a>
          <a
            className="text-center text-sm p-2"
            href="#impacto"
          >
            Impacto
          </a>
        </div>
        <div className="bg-[#00000033]  h-full flex items-center px-4 rounded-r-md border-l cursor-pointer">
          <a
            className="text-center text-sm flex items-center gap-2"
            href="/"
          >
            Regresar
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavbarP;
