import React from "react";
import swap from "/images/icons/swap.svg";

function Discurso() {
  return (
    <div className="pb-12 pt-6 w-full h-fit border-b" id="discurso">
      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-3xl">Discurso</h2>
        <div className="flex gap-6 w-full h-fit flex-wrap items-center">
          <div className="flex-1 flex custom-shadow flex-col rounded-md p-16 gap-2">
            <h3 className=" font-semibold text-lg ">Problema</h3>
            <p className=" text-justify text-[#565656] font-light">
              Se movilizan para visibilizar y combatir dos grandes problemas
              interconectados: el estigma y la vergüenza en torno a la
              menstruación, y la pobreza menstrual. <br /> <br />
              El primero se refiere a los tabúes, mitos y creencias negativas
              arraigadas culturalmente que rodean al periodo menstrual,
              perpetuando la discriminación y afectando la dignidad de las
              mujeres.
              <br /> <br /> El segundo problema, la pobreza menstrual, implica
              la falta de acceso a productos de higiene menstrual asequibles y
              de calidad, así como a instalaciones sanitarias adecuadas y
              educación integral sobre salud menstrual.
              <br />
              <br />
              Este problema afecta especialmente a mujeres de bajos recursos en
              Japón, China y otros países, impactando su salud, bienestar y
              oportunidades tanto educativas como laborales.
            </p>
          </div>
          <div><img src={swap} alt="Swap" className="w-8" /></div>
          <div className="flex-1 flex custom-shadow flex-col rounded-md p-16 gap-2">
            <h3 className=" font-semibold text-lg ">Reivindicación</h3>
            <p className=" text-justify text-[#565656] font-light">
              Su reivindicación principal es eliminar por completo el estigma
              asociado a la menstruación en la sociedad, al buscar que sea vista
              y tratada como un proceso natural, digno y sin vergüenza. Además,
              exigen el acceso universal y asequible a productos de higiene
              menstrual seguros, de calidad y ecológicos, así como a
              instalaciones sanitarias adecuadas en espacios públicos y
              privados.<br /><br /> Otra de sus demandas clave es la implementación de
              políticas públicas integrales que aborden la pobreza menstrual,
              tales como subsidios, exenciones de impuestos y programas de
              distribución gratuita de productos menstruales para mujeres en
              situación de vulnerabilidad económica. Finalmente, exigen la
              incorporación obligatoria de educación integral sobre la
              menstruación y la salud menstrual en los planes de estudio
              escolares, desde los niveles básicos hasta la educación superior.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discurso;
