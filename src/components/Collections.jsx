import React from "react";
import facial from "/images/facial.png";
import skin from "/images/skin.png";
import clean from "/images/clean.png";
function Collections() {
  return (
    <div
      id="collections"
      className="pt-12 pb-16 justify-start gap-14 flex flex-col w-full h-fit flex-wrap border-b relative"
    >
      <div className="flex items-center gap-2">
        <div className="line"></div>
        <h1 className="text-xl font-light font-['Petrona']">Colecciones</h1>
      </div>
      <div className="w-full grid lg:grid-cols-2 gap-4">
        <div className="lg:row-span-2 lg:h-[418px] h-[256px] bg-[#FFE7F0] p-12 flex flex-col justify-center gap-2.5 relative overflow-hidden">
          <h2 className="text-lg md:text-2xl font-semibold z-10 ">
            Maquillaje Facial
          </h2>
          <a href="/collection-makeup" className="w-fit z-10 collection-link">
            Ver Colección
          </a>
          <img
            src={facial}
            alt="Collection"
            className="absolute -right-28 bottom-0 z-0"
          />
        </div>
        <div className="bg-[#FFE7F0] p-12 flex flex-col justify-center gap-2.5 relative overflow-hidden">
          <h2 className="text-lg md:text-2xl font-semibold z-10">
            Cuidado de la Piel
          </h2>
          <a href="/collection-skincare" className="w-fit z-10 collection-link">
            Ver Colección
          </a>
          <img
            src={skin}
            alt="Collection"
            className="absolute -right-24 md:right-0 bottom-0 z-0"
          />
        </div>
        <div className="bg-[#FFE7F0] p-12 flex flex-col justify-center gap-2.5 relative overflow-hidden">
          <h2 className="text-lg md:text-2xl font-semibold z-10 w">
            Limpieza y<br className="md:hidden lg:block block"/> Purificación
          </h2>
          <a
            href="/collection-clean-purification"
            className="w-fit z-10 collection-link"
          >
            Ver Colección
          </a>
          <img
            src={clean}
            alt="Collection"
            className="absolute -right-28 md:right-0 bottom-0 z-0 w-[20rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default Collections;
