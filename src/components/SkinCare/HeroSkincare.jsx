import React from 'react'
import skin2 from "/images/skin2.png";

function HeroSkincare() {
    return (
        <div className="py-7 row-span-2 h-[418px] bg-[#FFE7F0] p-12 flex flex-col justify-center gap-2.5 relative overflow-hidden">
        <h2 className="text-5xl font-semibold z-10">Cuidado de la Piel</h2>
        <p className="font-light">Productos de cuidado de la piel que revelan tu luminosidad interior.</p>
        <img
          src={skin2}
          alt="Collection"
          className="absolute right-0 -bottom-50 z-0"
        />
      </div>
    )
}

export default HeroSkincare
