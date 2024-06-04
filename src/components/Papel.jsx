import React from "react";

function Papel() {
  return (
    <div
      className="py-24 px-12 w-full h-fit flex flex-col pb-24 gap-14 border-b"
      id="papel"
    >
      <div className="flex flex-col gap-4">
        <h1 className="bebas-text text-6xl">Papel en Corea</h1>
        <p className="font-light text-sm text-justify">
          Samsung Electronics ha sido un pilar esencial de la economía
          surcoreana, debido a que impulsa el avance tecnológico con su
          especialización en dispositivos digitales, semiconductores, memorias e
          integración de sistemas. En 2020, los ingresos de esta empresa
          representaron el 20% del PIB de la República de Corea. De igual forma,
          realiza inversiones en investigación y desarrollo (I+D). Por ejemplo,
          en 2022 la compañía destinó 24,92 billones de wones surcoreanos
          (aproximadamente 19,75 mil millones de dólares estadounidenses) para
          I+D; enfocándose en semiconductores, pantallas, inteligencia
          artificial y 5G.
        </p>
      </div>
      <div className="flex flex-col gap-4" id="tipos">
        <h1 className="bebas-text text-6xl">Tipos de Innovación</h1>
        <p className="font-light text-sm text-justify">
          <span className="font-bold">Innovación de Producto:</span> Samsung ha
          implementado diversas innovaciones de producto como el smartphone
          Galaxy Fold en 2019, el primer teléfono móvil con pantalla plegable
          del mercado. Además, en 2021, presentó los televisores Neo QLED, que
          incorporan la tecnología Quantum Mini LED para mejorar la calidad de
          imagen y la experiencia. Estas innovaciones le han permitido ofrecer
          productos únicos y diferenciados, aumentando así la demanda y su cuota
          de mercado en segmentos altamente competitivos. <br /> <br />
          <span className="font-bold">Innovación de Proceso:</span> Este gigante
          tecnológico también ha implementado innovaciones de proceso. En 2020,
          adoptó un sistema de monitoreo y control en tiempo real basado en
          inteligencia artificial en sus fábricas de semiconductores, mejorando
          la eficiencia y la calidad de los procesos de fabricación. En 2023, la
          organización implementó un sistema de gestión de la cadena de
          suministro basado en blockchain, mejorando la trazabilidad y
          transparencia en el seguimiento de los productos. Estas innovaciones
          le han facilitado la reducción de sus costos unitarios de producción y
          han mejorado su eficiencia en la distribución de sus productos.
          <br /> <br />
          <span className="font-bold">Innovación Organizativa:</span> A su vez,
          ha introducido innovaciones organizativas significativas, como el
          programa ‘Work from Anywhere’, promoviendo la flexibilidad y la
          colaboración entre equipos. Asimismo, ha establecido colaboraciones
          con socios externos para avanzar en tecnologías emergentes como la IA
          y las redes 6G, participando en la AI-RAN Alliance y planeando una
          inversión de 450 trillones de wones en I+D de 6G hasta 2027, en
          asociación con universidades y centros de investigación globales. Esta
          estrategia de innovación colaborativa refleja el compromiso de Samsung
          por mantenerse en el liderazgo tecnológico de las redes de próxima
          generación.
        </p>
      </div>
      <div className="flex flex-col gap-4" id="impacto">
        <h1 className="bebas-text text-6xl">Impacto GII</h1>
        <p className="font-light text-sm text-justify">
          Las innovaciones de producto, proceso y organizativas implementadas
          por Samsung han sido determinantes en el ascenso de Corea del Sur al
          top cinco del Índice Mundial de Innovación en 2021, destacando en los
          pilares de Sofisticación Empresarial y en el de Producción de
          Conocimiento y Difusión Tecnológica. En el primero, ha fomentado la
          inversión en I+D y la generación de patentes, fortaleciendo la
          innovación en el sector privado. En el segundo, ha liderado la
          generación de conocimiento y la exportación de productos de alta
          tecnología, mejorando la competitividad internacional del país.
        </p>
      </div>
    </div>
  );
}

export default Papel;
