import React from 'react'
import skin2 from "/images/skin2.png";

function HeroSkincare() {
    return (
        <div className="h-[418px] bg-[#FFE7F0] p-12 flex flex-col md:justify-center items-center md:items-start gap-1 md:gap-2.5 relative overflow-hidden">
          <span className="text-lg md:text-xl font-light font-['Petrona']">Colección</span>
        <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold z-10">Cuidado de la Piel</h2>
        <p className="font-light text-center md:text-left">Productos de cuidado de la piel que revelan tu<br className='md:block hidden'/> luminosidad interior.</p>
        <img
          src={skin2}
          alt="Collection"
          className="absolute xl:right-0 lg:-right-28 md:-right-48 -bottom-60 md:-bottom-96 z-0"
        />
      </div>
    )
}

export default HeroSkincare
