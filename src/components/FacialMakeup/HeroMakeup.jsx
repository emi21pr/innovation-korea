import React from "react";
import facial from "/images/facial.png";

function HeroMakeup() {
  return (
    <div className="h-[418px] bg-[#FFE7F0] p-12 flex flex-col md:justify-center items-center md:items-start gap-1 md:gap-2.5 relative overflow-hidden">
      <span className="text-lg md:text-xl font-light font-['Petrona']">Colección</span>
      <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold z-10">Maquillaje Facial</h2>
      <p className="font-light text-center md:text-left">Maquillaje facial que potencia tu belleza natural</p>
      <img
        src={facial}
        alt="Collection"
        className="absolute lg:right-0 md:-right-48 bottom-0 z-0 w-[43rem]"
      />
    </div>
  );
}

export default HeroMakeup;
