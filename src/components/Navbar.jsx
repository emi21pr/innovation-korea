import React from "react";
import logo from "/images/logo.svg";
function Navbar() {
  return (
    <nav className="py-4 justify-between items-center gap-10 flex w-full border-b">
      <a href="/">
        <img src={logo} alt="Logo" className="w-12" />
      </a>
      <div className="lg:gap-10 gap-4 md:flex hidden">
        <a
          className="text-center text-md hover:-translate-y-1 transition p-2"
          href="#actor"
        >
          Actor Colectivo
        </a>
        <a
          className="text-center text-md hover:-translate-y-1 transition p-2"
          href="#discurso"
        >
          Discurso
        </a>
        <a
          className="text-center text-md hover:-translate-y-1 transition p-2"
          href="#repertorios"
        >
          Repertorios
        </a>
        <a
          className="text-center text-md hover:-translate-y-1 transition p-2"
          href="#testimonials"
        >
          Recursos
        </a>
        <a
          className="font-semibold text-center text-md hover:bg-[#494949] transition p-2 text-white bg-[#202020]"
          href="#testimonials"
        >
          Propuesta
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
