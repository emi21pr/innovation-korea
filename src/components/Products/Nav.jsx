import React from "react";
import logo from "/images/logo.svg";
function Nav() {
  return (
    <nav className="py-5 md:pl-14 pl-8 border-b justify-center items-center gap-10 lg:gap-14 flex w-full sticky top-0 bg-[#fcfcfc] z-50">
      <div className="items-center lg:gap-10 gap-4 flex">
        <a className="text-center lg:text-sm text-xs nav-link" href="/">
          Inicio
        </a>
      </div>
      <a href="/">
        <img src={logo} alt="FlawlessLook Logo" className="w-48" />
      </a>
      <div className="items-center lg:gap-10 gap-4 flex">
        <a className="text-center lg:text-sm text-xs nav-link" href="/collection-makeup">
          Colecciones
        </a>
      </div>
    </nav>
  );
}

export default Nav;
