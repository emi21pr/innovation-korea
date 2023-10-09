import React from 'react'
import clean2 from "/images/clean2.png";
function HeroClean() {
    return (
        <div className="py-7 row-span-2 h-[418px] bg-[#FFE7F0] p-12 flex flex-col justify-center gap-2.5 relative overflow-hidden">
      <h2 className="text-5xl font-semibold z-10">Limpieza y Purificación</h2>
      <p className="font-light">La esencia de una piel limpia y radiante</p>
      <img
        src={clean2}
        alt="Collection"
        className="absolute right-14 bottom-0 z-0"
      />
    </div>
    )
}

export default HeroClean
