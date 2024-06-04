import React from "react";
import samsung from "/images/samsung.jpg"

function Caso() {
  return (
    <div className="py-12 px-12 w-full h-fit flex flex-col pb-24 gap-14 items-center border-b">
      <h1 className="bebas-text text-6xl">
        Caso: Samsung Electronics "Motor de la innovación"
      </h1>
      <img src={samsung} alt="Samsung" />
    </div>
  );
}

export default Caso;
