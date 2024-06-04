import React from "react";
import hero from "/images/corea.avif";
import logo from "/images/logo.svg";

function Hero() {
  return (
    <div className="w-full h-fit pb-24 border-b" id="hero">
      <div className="flex lg:flex-row flex-col-reverse items-center justify-center relative pt-20 lg:pt-0">
        <div className="lg:flex-1 flex flex-col justify-between lg:h-screen h-96 items-center lg:items-start">
          <div className="lg:py-8 lg:px-12 w-fit absolute top-5  lg:relative">
            <a href="/">
              <img src={logo} alt="Logo" className="w-8" />
            </a>
          </div>
          <div className="lg:px-12 lg:py-20 py-44 text-center lg:text-left flex flex-col gap-6 lg:w-[17rem] px-8">
            <div>
              <p className="bebas-text lg:text-2xl text-3xl">
                Innovación en la Sociedad
              </p>
              <p className="lg:text-xs text-base font-light">
                Corea del Sur: Un gigante innovador emergiendo en el panorama
                global
              </p>
            </div>
            
            <div className="gap-5 flex bebas-text w-full items-center justify-center lg:justify-start">
              <a href="/" className="underline text-3xl custom-a">
                DESCARGAR PDF
              </a>
            </div>
          </div>
        </div>
        <h1 className="absolute uppercase text-center hero-text lg:m-96 mx-12 lg:text-[10rem] text-9xl z-10 leading-none">
          Corea del Sur
        </h1>
        <div className="lg:flex-1 w-full lg:h-screen h-96">
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
