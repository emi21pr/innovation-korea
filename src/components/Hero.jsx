import React from "react";
import hero from "/images/corea.avif";
import logo from "/images/logo.svg";

function Hero() {
  return (
    <div className="w-full h-fit pb-24 border-b" id="hero">
      <div className="flex items-center justify-center relative">
        <div className="flex-1 flex flex-col justify-between h-screen">
          <div className="py-8 px-12 w-fit">
            <a href="/">
              <img src={logo} alt="Logo" className="w-8" />
            </a>
          </div>
          <div className="px-12 py-20 flex flex-col gap-6 w-[17rem]">
            <div>
              <p className="bebas-text text-2xl">
                &emsp;&emsp;Innovación en la Sociedad
              </p>
              <p className="text-xs font-light">
                Corea del Sur: Un gigante innovador emergiendo en el panorama
                global
              </p>
            </div>
            
            <div className="gap-5 flex bebas-text">
              <a href="/" className="underline text-3xl custom-a">
                DESCARGAR PDF
              </a>
            </div>
          </div>
        </div>
        <h1 className="absolute uppercase text-center hero-text m-96 text-[10rem] z-10 leading-none">
          Corea del Sur
        </h1>
        <div className="flex-1 w-full h-screen">
          <img
            src={hero}
            alt="Corea del Sur"
            className="h-full w-full object-cover filter grayscale-60 hover:grayscale-0 z-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
