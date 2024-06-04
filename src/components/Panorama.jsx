import React from "react";
import panorama from "/images/panorama.avif";

function Panorama() {
  return (
    <div
      className="py-24 md:pl-8 lg:pl-12 px-8 md:px-0 w-full h-fit flex md:flex-row flex-col pb-24 border-b lg:gap-14 gap-8 items-center"
      id="panorama"
    >
      <div className="flex flex-col gap-4 flex-1">
        <h1 className="bebas-text lg:text-6xl text-4xl">
          Panorama general GII
        </h1>
        <div className="flex gap-2 flex-col lg:flex-row">
          <span className=" bg-[#260b0b] text-[#ba3939] px-4 py-2 rounded-full lg:text-xs text-sm w-fit">
            Medición de la Innovación
          </span>
          <span className=" bg-[#081e09] text-[#39ba39] px-4 py-2 rounded-full lg:text-xs text-sm w-fit">
            Índice Mundial de Innovación (GII)
          </span>
        </div>
        <p className=" font-light lg:text-sm text-base text-justify">
          Corea del Sur se ha mantenido consistentemente en el top 15 del
          ranking general de innovación durante los últimos 5 años, demostrando
          su fortaleza en este ámbito. El país alcanzó su mejor posición en el
          2021, ubicándose en el 5º lugar a nivel mundial. <br />
          <br />
          Para el 2023, Corea del Sur descendió al 10º puesto, pero a pesar de
          este retroceso, sigue siendo un referente en innovación a nivel
          global, con fortalezas en aspectos como la inversión en investigación
          y desarrollo, la formación de talento humano y la producción de
          activos intangibles.
        </p>
      </div>
      <div className="flex-1 flex justify-end w-full">
        <div className="w-full md:h-[38rem] h-80">
          <img
            src={panorama}
            alt="Panorama"
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </div>
  );
}

export default Panorama;
