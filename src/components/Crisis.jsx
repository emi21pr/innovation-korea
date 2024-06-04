import React from "react";
import covid from "/images/covid.avif"

function Crisis() {
  return (
    <div className="py-24 pr-12 w-full h-fit flex pb-24 gap-14 items-center border-b" id="crisis">
      <div className="flex-1 flex justify-start">
        <img
          src={covid}
          alt="Covid"
          className="w-full object-cover h-[38rem]"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="bebas-text text-6xl">Crisis Sanitaria</h1>
          <h2 className="bebas-text text-3xl"> Impacto COVID-19</h2>
        </div>
        <p className="font-light text-sm text-justify">
          Los desafíos sin precedentes de la pandemia de COVID-19 no lograron
          menoscabar de inmediato la capacidad innovadora de Corea del Sur. En
          los años 2020 y 2021, este país mantuvo un desempeño destacado gracias
          a su respuesta ágil, los ajustes operativos realizados y las medidas
          de respaldo implementadas por el gobierno; los efectos adversos se
          hicieron presentes a partir de 2022. Las disrupciones en las cadenas
          de suministro globales afectaron industrias clave como la electrónica
          y automotriz, generando escasez de insumos que obligó a las empresas a
          redirigir recursos, frenando la producción y mermando la innovación.<br/><br/>
          Paralelamente, la recesión económica mundial redujo la demanda
          internacional de productos y servicios coreanos, impactando
          especialmente a las PYMES. A esta situación se sumó un clima de
          incertidumbre que afectó negativamente la confianza de los inversores,
          disminuyendo la propensión a asumir riesgos, la inversión en
          innovación y el financiamiento para startups. Como resultado, Corea
          cayó del 6° lugar en 2022 al 10° en 2023 en el GII.
        </p>
      </div>
    </div>
  );
}

export default Crisis;
