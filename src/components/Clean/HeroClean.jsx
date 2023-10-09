import React from "react";
import clean2 from "/images/clean2.png";

function HeroClean() {
  return (
    <div className="h-[418px] bg-[#FFE7F0] p-12 flex flex-col md:justify-center items-center md:items-start gap-1 md:gap-2.5 relative overflow-hidden">
      <span className="text-lg md:text-xl font-light font-['Petrona']">Colección</span>
      <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold z-10">Limpieza y Purificación</h2>
      <p className="font-light text-center md:text-left">La esencia de una piel limpia y radiante</p>
      <img
        src={clean2}
        alt="Collection"
        className="absolute lg:right-0 md:-right-12 md:bottom-0 -bottom-10 z-0 w-[19rem] md:w-[30rem]"
      />
    </div>
  );
}

export default HeroClean;
