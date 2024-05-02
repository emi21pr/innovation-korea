import React from "react";
import swap from "/images/icons/swap.svg";

function Repertorios() {
  return (
    <div className="pb-12 pt-6 w-full h-fit border-b" id="repertorios">
      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-3xl">Repertorios</h2>
        <div className="flex gap-16 w-full h-fit flex-wrap">
          <div className="flex flex-col gap-4 w-full flex-1 h-fit">
            <div className="flex custom-shadow flex-col rounded-md p-16 gap-2">
              <h3 className=" font-semibold text-lg ">
                Canales de participación institucionales
              </h3>
              <p className=" text-justify text-[#565656] font-light">
                Han participado en consultas públicas gubernamentales, como la
                revisión del "Esquema de Desarrollo de la Mujer en China" por
                parte de Period Pride, para incidir con propuestas de políticas
                públicas.
              </p>
            </div>
            <div className="flex custom-shadow flex-col rounded-md p-16 gap-2">
              <h3 className=" font-semibold text-lg ">Lobbie</h3>
              <p className=" text-justify text-[#565656] font-light">
                Han realizado reuniones directas ante legisladoras como Sayaka
                Sasaki y Renhō Saitō en Japón para impulsar iniciativas como la
                distribución gratuita de productos menstruales y la derogación
                de impuestos.
              </p>
            </div>
            <div className="flex custom-shadow flex-col rounded-md p-16 gap-2">
              <h3 className=" font-semibold text-lg ">
                {" "}
                Protestas y campañas en arenas digitales alternativas
              </h3>
              <p className=" text-justify text-[#565656] font-light">
                Han lanzado campañas virales desafiantes en redes sociales como
                #NoBagForMe, #NothingToBeAshamedOf, utilizando narrativas
                audiovisuales impactantes para visibilizar el estigma menstrual.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <iframe
              className="w-full h-full rounded-md"
              src="https://youtube.com/embed/CpfgmiDJKbs?si=HXdg0XYFSTBCpjiT"
              title="YouTube video player"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Repertorios;
