import React from "react";

function Participantes() {
  return (
    <div className="py-24 px-12 w-full h-fit flex flex-col gap-8 pb-24 border-b">
      <h1 className="bebas-text text-6xl">Integrantes</h1>
      <div className="w-full flex flex-col gap-5 font-light">
        <div className="border-b border-b-[#767676] py-2 text-sm">Doménica Benavides</div>
        <div className="border-b border-b-[#767676] py-2 text-sm">María Alejandra Duque</div>
        <div className="border-b border-b-[#767676] py-2 text-sm">Angela Ontaneda</div>
        <div className="border-b border-b-[#767676] py-2 text-sm">Lorena Paredes</div>
        <div className="border-b border-b-[#767676] py-2 text-sm">Emilia Parreño</div>
        <div className="border-b border-b-[#767676] py-2 text-sm">Karla Ramírez</div>
      </div>
    </div>
  );
}

export default Participantes;
