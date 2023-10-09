import React from "react";
import facial from "/images/facial.png";

function HeroMakeup() {
  return (
    <div className="py-7 row-span-2 h-[418px] bg-[#FFE7F0] p-12 flex flex-col justify-center gap-2.5 relative overflow-hidden">
      <h2 className="text-5xl font-semibold z-10">Maquillaje Facial</h2>
      <p className="font-light">Maquillaje facial que potencia tu belleza natural</p>
      <img
        src={facial}
        alt="Collection"
        className="absolute -right-52 -bottom-20 z-0"
      />
    </div>
  );
}

export default HeroMakeup;
