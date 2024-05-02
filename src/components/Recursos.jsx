import React from "react";
import resources from "/images/resources.jpg";

function Recursos() {
  return (
    <div className="pb-12 pt-6 w-full h-fit border-b" id="recursos">
      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-3xl">Recursos</h2>
        <div className="flex flex-row-reverse gap-6 w-full h-full">
          <p className=" text-justify text-[#565656] font-light flex-1">
            A nivel de recursos materiales, han logrado recaudar fondos a través
            de campañas de micro financiamiento colectivo (crowdfunding) y
            alianzas con empresas y organizaciones sin fines de lucro. <br />
            <br />
            En cuanto a recursos humanos, aprovechan el liderazgo, creatividad y
            compromiso de las mujeres jóvenes activistas que conforman el núcleo
            de sus movimientos. También han sumado el respaldo de celebridades,
            influencers, académicas y legisladoras aliadas a su causa.
            <br />
            <br /> Un recurso clave ha sido el poder de convocatoria y difusión
            de las plataformas y redes sociales digitales, que les han permitido
            organizar acciones descentralizadas y multiplicar el alcance de sus
            mensajes a bajo costo.
            <br />
            <br /> Para finalizar, un recurso invaluable es su capital simbólico
            y narrativo: las historias personales, expresiones artísticas y
            voces auténticas de niñas y mujeres que han experimentado la
            menstruación y sus desafíos asociados. Esto les ha dado legitimidad
            y capacidad de conexión emocional con su audiencia.
          </p>
          <div className="flex gap-2 flex-1">
            <div className="w-full h-full ">
              <img
                src={resources}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recursos;
