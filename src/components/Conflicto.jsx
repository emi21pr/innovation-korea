import React from "react";
import war from "/images/war.avif";

function Conflicto() {
  return (
    <div
      className="py-24 pl-12 w-full h-fit flex pb-24 gap-14 items-center border-b"
      id="conflicto"
    >
      
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="bebas-text text-6xl">Conflicto Armado</h1>
          <h2 className="bebas-text text-3xl">Impacto Guerra Ucrania-Rusia</h2>
        </div>
        <p className="font-light text-sm text-justify">
          La guerra en Ucrania tuvo un impacto económico significativo en Corea
          del Sur, que se extendió de 2022 a 2023. En 2022, la dependencia de
          importaciones de energía y materias primas de Rusia, junto con la
          subida de sus precios, provocó una alta inflación del 5,1% y el
          debilitamiento del won, erosionando los márgenes de las empresas
          coreanas. Esto contrajo la inversión en activos fijos en un 0,4% en el
          primer trimestre.  <br />
          <br />En 2023, las disrupciones en las cadenas de
          suministro y el alza sostenida de costos de energía, así como, en
          materias primas debilitaron la competitividad, particularmente en
          sectores tecnológicos e innovadores. Además del endurecimiento de la
          política monetaria global que elevó los costos de financiamiento, se
          observó una desaceleración del crecimiento económico de 2,6% en 2022 a
          1,8% en 2023, afectando la inversión en innovación del país.
        </p>
        
      </div>
      <div className="flex-1 flex justify-end">
        <img
          src={war}
          alt="Covid"
          className="w-full object-cover h-[38rem]"
        />
      </div>
    </div>
  );
}

export default Conflicto;
