import React from "react";
import logo from "/images/vite.svg";
import qr from "/images/icons/qr.svg";
function NavbarP(props) {
  return (
    <nav className="fixed bottom-6 w-fit z-10 ">
      <div className="h-12 flex bg-[#0000004a] items-center gap-10 backdrop-blur rounded-md shadow-lg">
        <div className="w-[48px]">
          <a href="/">
            <img src={logo} alt="Logo" className="w-12" />
          </a>
        </div>
        <div className="gap-4 md:flex hidden">
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
