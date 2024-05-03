import React from "react";
import hero from "/images/hero.jpg";
import pdf from "/images/icons/pdf.svg";
import pencil from "/images/icons/pencil.svg";
import date from "/images/icons/date.svg";

function Hero() {
  return (
    <div className="pb-6 w-full h-fit border-b">
      <div className="flex flex-col items-center gap-6">
        <div className=" gap-4 flex flex-col">
          <h1 className="font-semibold lg:text-6xl text-3xl leading-snug text-center lg:text-justify">
            Poner fin a la vergüenza y a la pobreza menstrual en Asia
          </h1>
          <div className="w-full flex justify-between border-b border-t p-2 ">
            <div className="flex gap-2 items-center">
              <img src={pencil} alt="Date icon" className="w-4" />
              <p className="text-[#565656] font-light text-md">
                Emilia Parreño
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={date} alt="Date icon" className="w-4" />
              <p className="text-[#565656] font-light text-md">Mayo 2, 2024</p>
            </div>
          </div>
          
        </div>
        <div className="w-full h-[34rem]">
          <div className="h-full hero-container rounded-md">
            <img
              src={hero}
              alt="Hero"
              className="w-full h-full rounded-md object-cover"
            />
          </div>
        </div>
        <div className="flex justify-between items-center w-full flex-wrap gap-4">
            <div className="flex gap-4 font-medium">
              <p className="text-md text-[#ffffffec] px-4 py-2 bg-[#202020] w-fit">
                Innovación
              </p>
              <p className="text-md text-[#ffffffec] px-4 py-2 bg-[#202020] w-fit">
                Activismo
              </p>
              <p className="text-md text-[#ffffffec] px-4 py-2 bg-[#202020] w-fit hidden md:block">
                Organizaciones
              </p>
              <p className="text-md text-[#ffffffec] px-4 py-2 bg-[#202020] w-fit hidden lg:block">
                Movimiento
              </p>
            </div>
            <div>
              <a href="/documents/PDF_Flujo.pdf" className="font-semibold text-md text-[#ffffffec] px-4 py-2 bg-[#b43331] flex gap-2" target="_blank">
                <img src={pdf} alt="Pdf" className="w-6" />
                Descargar PDF
              </a>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Hero;
