import React from "react";

function Participantes() {
  return (
    <div className="py-24 lg:px-12 px-8 w-full h-fit flex flex-col gap-8 pb-24 border-b">
      <h1 className="bebas-text lg:text-6xl text-4xl">Integrantes</h1>
      <div className="w-full flex flex-col gap-4 font-light">
        <div className="border-b border-b-[#767676] py-2 text-base">Doménica Benavides</div>
        <div className="border-b border-b-[#767676] py-2 text-base">María Alejandra Duque</div>
        <div className="border-b border-b-[#767676] py-2 text-base">Angela Ontaneda</div>
        <div className="border-b border-b-[#767676] py-2 text-base">Lorena Paredes</div>
        <div className="border-b border-b-[#767676] py-2 text-base">Emilia Parreño</div>
        <div className="border-b border-b-[#767676] py-2 text-base">Karla Ramírez</div>
      </div>
    </div>
  );
}

export default Participantes;
