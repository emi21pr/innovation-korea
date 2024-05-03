import React from "react";
import time from "/images/time.jpg";
import money from "/images/money.jpg";

function Tiempo() {
  return (
    <div className="pb-12 pt-6 w-full h-fit border-b" id="tiempo">
      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-3xl">
          Tiempo de Implementación y Costo Estimado
        </h2>
        <div className="flex gap-16 w-full h-fit items-center lg:flex-row flex-col">
          <div className="flex-1 flex">
            <p className="text-justify text-[#565656] font-light">
              Para estimar el presupuesto y el tiempo requeridos para la
              implementación de la propuesta inmersiva "Flujo Libre", se ha
              realizado un análisis tomando como referencia el exitoso proyecto
              "Body Worlds", una exposición itinerante de cadáveres plastinados
              con alcance mundial. <br />
              <br />
              Se han considerado los datos proporcionados por el creador de
              "Body Worlds", Gunther von Hagens, quien informó una inversión de
              $80 millones exclusivamente en los gastos de giras durante un
              período de 6 años, con un presupuesto anual de aproximadamente $5
              millones destinados a campañas de marketing. <br/><br/>Considerando la
              naturaleza similar de "Flujo Libre", que incluye una experiencia
              física itinerante a gran escala con componentes digitales e
              inmersivos adicionales, se estima prudente asignar un presupuesto
              inicial de alrededor de $25 millones, con un tiempo de desarrollo
              de 18 meses previos al lanzamiento piloto.
              <br />
              <br /> Esta estimación se fundamenta en el modelo de
              implementación gradual y expansión global utilizado por "Body
              Worlds", el cual ha demostrado eficacia en proyectos de naturaleza
              similar. Es importante señalar que este presupuesto y tiempo de
              implementación son estimaciones iniciales y podrían estar sujetos
              a ajustes conforme avance el desarrollo del proyecto y se realicen
              análisis más detallados de los requerimientos específicos.
            </p>
          </div>
          <div className="flex-1 flex gap-4 w-full h-full flex-col">
            <img src={time} alt="Time" className="h-80 object-cover rounded-md" />
            <img src={money} alt="Money" className="h-80 object-cover rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tiempo;
