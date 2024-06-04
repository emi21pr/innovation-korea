import React from "react";
import samsung from "/images/samsung.jpg";

function Caso() {
  return (
    <div className="py-24 px-8 md:px-12  w-full h-fit flex flex-col pb-24 gap-14 items-center border-b" id="hero2">
      <h1 className="bebas-text md:text-6xl text-4xl text-center sm:text-left">
        Caso: Samsung Electronics "Motor de la innovación"
      </h1>
      <div className="w-full md:h-[37rem] h-[39rem]">
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
