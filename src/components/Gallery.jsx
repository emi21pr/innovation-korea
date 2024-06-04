import React from "react";
import gallery1 from "/images/gallery1.avif";
import gallery2 from "/images/gallery2.avif";
import gallery3 from "/images/gallery3.avif";
import gallery4 from "/images/gallery4.avif";
import gallery5 from "/images/gallery5.avif";
import gallery6 from "/images/gallery6.avif";

function Gallery() {
  return (
    <div className="grid grid-cols-3 grid-rows-2">
      <div className="w-full h-96">
        <img src={gallery1} alt="Galeria" className="w-full h-full object-cover grayscale-60 hover:grayscale-0 transition-all" />
      </div>
      <div className="w-full h-96">
        <img src={gallery2} alt="Galeria" className="w-full h-full object-cover grayscale-60 hover:grayscale-0 transition-all" />
      </div>
      <div className="w-full h-96">
        <img src={gallery3} alt="Galeria" className="w-full h-full object-cover grayscale-60 hover:grayscale-0 transition-all" />
      </div>
      <div className="w-full h-96">
        <img src={gallery4} alt="Galeria" className="w-full h-full object-cover grayscale-60 hover:grayscale-0 transition-all" />
      </div>
      <div className="w-full h-96">
        <img src={gallery5} alt="Galeria" className="w-full h-full object-cover grayscale-60 hover:grayscale-0 transition-all" />
      </div>
      <div className="w-full h-96">
        <img src={gallery6} alt="Galeria" className="w-full h-full object-cover grayscale-60 hover:grayscale-0 transition-all" />
      </div>
    </div>
  );
}

export default Gallery;
