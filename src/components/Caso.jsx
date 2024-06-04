import React from "react";
import samsung from "/images/samsung.jpg";

function Caso() {
  return (
    <div className="py-12 px-12 w-full h-fit flex flex-col pb-24 gap-14 items-center border-b">
      <h1 className="bebas-text text-6xl">
        Caso: Samsung Electronics "Motor de la innovación"
      </h1>
      <div className="w-full h-[37rem]">
        <img
          src={samsung}
          alt="Samsung"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

export default Caso;
