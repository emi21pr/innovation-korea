import React from "react";
import hero from "/images/HeroPhoto.png";
import cosmetics from "/images/cosmetics.svg";
function Hero() {
  return (
    <div className="py-7 justify-start items-center gap-12 flex w-full h-fit flex-wrap border-b">
      <div className="flex items-center gap-4 w-fit">
        <img src={hero} alt="Hero Image" />
        <img src={cosmetics} alt="Cosmetics Title" className="hidden lg:block" />
      </div>
      <div className="flex flex-col w-full flex-1 gap-12">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <div className="line"></div>
            <h1 className="text-xl font-light font-['Petrona']">
              Productos de Maquillaje
            </h1>
          </div>
          <p className="text-2xl  lg:text-4xl font-light uppercase leading-[150%] w-fit">
            UNA <span className="bg-[#FFCBEA] text-white px-1">PALETA</span> DE
            POSIBILIDADES, ILUMINA TU MENTE CON NUESTROS PRODUCTOS
          </p>
        </div>
        <a className=" px-10 py-2 border border-[#2c2c2c] w-fit button-hero" href="/products">
            VER PRODUCTOS
        </a>
      </div>
    </div>
  );
}

export default Hero;
