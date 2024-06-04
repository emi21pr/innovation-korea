import React from "react";
import panorama from "/images/panorama.avif"

function Panorama() {
  return (
    <div
      className="py-24 pl-12 w-full h-fit flex pb-24 border-b gap-14 items-center"
      id="panorama"
    >
      <div className="flex flex-col gap-4 flex-1">
        <h1 className="bebas-text text-7xl">Panorama general GII</h1>
        <div className="flex gap-2">
          <span className=" bg-[#260b0b] text-[#ba3939] px-4 py-2 rounded-full text-xs">
            Medición de la Innovación
          </span>
          <span className=" bg-[#081e09] text-[#39ba39] px-4 py-2 rounded-full text-xs">
            Índice Mundial de Innovación (GII)
          </span>
        </div>
        <p className=" font-light text-sm text-justify">
          Corea del Sur se ha mantenido consistentemente en el top 15 del
          ranking general de innovación durante los últimos 5 años, demostrando
          su fortaleza en este ámbito. El país alcanzó su mejor posición en el
          2021, ubicándose en el 5º lugar a nivel mundial. <br/><br/>Para el 2023, Corea
          del Sur descendió al 10º puesto, pero a pesar de este retroceso, sigue
          siendo un referente en innovación a nivel global, con fortalezas en
          aspectos como la inversión en investigación y desarrollo, la formación
          de talento humano y la producción de activos intangibles.
        </p>
      </div>
      <div className="flex-1 flex justify-end"><img src={panorama} alt="Panorama" className="w-full object-cover h-[38rem]" /></div>
    </div>
  );
}

export default Panorama;
