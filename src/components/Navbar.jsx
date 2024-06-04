import React from "react";
import logo from "/images/vite.svg";
import qr from "/images/icons/qr.svg";
function Navbar(props) {
  return (
    <nav className="fixed bottom-6 w-fit z-10 ">
      <div className="md:h-12 h-16 flex bg-[#0000004a] items-center md:gap-10 backdrop-blur rounded-md shadow-lg">
        <div className="w-[48px] hidden sm:block">
          <a href="#hero">
            <img src={logo} alt="Logo" className="w-12" />
          </a>
        </div>
        <div className="md:gap-4 gap-1 flex px-4 md:px-0">
          <a
            className="text-center text-sm p-2"
            href="#panorama"
          >
            Panorama
          </a>
          <a
            className="text-center text-sm p-2"
            href="#analisis"
          >
            Análisis
          </a>
          <a
            className="text-center text-sm p-2"
            href="#crisis"
          >
            Crisis
          </a>
          <a
            className="text-center text-sm p-2"
            href="#conflicto"
          >
            Conflicto
          </a>
          <a
            className="text-center text-sm p-2"
            href="/blog"
          >
            Blog
          </a>
        </div>
        <div className="bg-[#00000033] h-full items-center px-4 rounded-r-md border-l cursor-pointer hidden md:flex">
          <a
            className="text-center text-sm flex items-center gap-2"
            onClick={()=>props.setActive(true)}
          ><img src={qr} alt="QR" className=" filter-white w-8"/>
            Escanear QR
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
