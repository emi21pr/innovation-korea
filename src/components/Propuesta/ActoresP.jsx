import React from "react";
import time from "/images/time.jpg";
import money from "/images/money.jpg";

function ActoresP() {
  return (
    <div className="pb-12 pt-6 w-full h-fit border-b" id="actores">
      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-3xl">
          Actores del Ecosistema de Innovación
        </h2>
        <div className="flex gap-6 w-full h-fit items-center flex-col">
          <div className="flex custom-shadow flex-col p-10 gap-4 w-full h-80 empresa rounded-md">
            <h3 className=" font-semibold text-lg text-[#fcfcfc] ">
              Empresas Privadas socialmente responsables
            </h3>
            <p className=" text-justify text-[#e3e3e3] font-light">
              Compañías como Unicharm, Isetan, BeA Japón y Relief en China, que
              ya están involucradas en iniciativas relacionadas con la
              menstruación, podrían financiar "Flujo Libre" como parte de sus
              programas de responsabilidad social corporativa (RSC). A cambio,
              obtendrían visibilidad y posicionamiento como marcas comprometidas
              con causas sociales relevantes, además de potenciales
              oportunidades de negocio en nuevos mercados impactados por el
              proyecto.
            </p>
          </div>
          <div className="flex custom-shadow flex-col p-10 gap-4 w-full h-80 organizacion rounded-md">
            <h3 className=" font-semibold text-lg text-[#fcfcfc]">
              Organizaciones de la Sociedad Civil
            </h3>

            <p className=" text-justify text-[#e3e3e3] font-light">
              {" "}
              Organizaciones sin fines de lucro y fundaciones tales como Plan
              International, ONU Mujeres, China Alliance of Social Value
              Investment y fundaciones filantrópicas enfocadas en derechos de
              las mujeres, salud e igualdad de género, podrían aportar
              financiamiento a "Flujo Libre" al alinearse con sus misiones y
              objetivos. A cambio, tendrían una plataforma global innovadora
              para promover sus causas y ampliar su impacto.
            </p>
          </div>
          <div className="flex custom-shadow flex-col p-10 gap-4  w-full h-80 gobierno rounded-md">
            <h3 className=" font-semibold text-lg text-[#fcfcfc]">Gobiernos</h3>

            <p className=" text-justify text-[#e3e3e3] font-light">
              Dependencias gubernamentales enfocadas en temas de género, salud
              pública y desarrollo social, así como organismos internacionales
              como la ONU, podrían cofinanciar "Flujo Libre" al ser una
              iniciativa que contribuye a los Objetivos de Desarrollo
              Sostenible. A cambio, tendrían un aliado para implementar
              políticas públicas y programas en esta materia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActoresP;
