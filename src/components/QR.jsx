import React from "react";

function QR() {
  return (
    <div className="pt-12 pb-16 justify-start gap-14 flex flex-col w-full h-fit flex-wrap relative border-b">
      <div className="w-full lg:p-24 p-12 h-fit bg-img lg:items-center md:items-start justify-between flex lg:flex-row flex-col items-center gap-4">
        <div className="flex flex-col flex-1 lg:gap-4">
          <p className="md:text-3xl text-lg font-light leading-[150%] text-center md:text-left">
            5 Consejos sobre{" "}
            <span className="font-semibold md:text-4xl text-xl">SkinCare</span>
            <br /> que debes conocer
          </p>
          <p className="font-light">Escanea el código QR para verlos</p>
        </div>
        <div className="flex flex-1 lg:justify-end">
          <img src="/images/qr.png" alt="QR" className="rounded-md lg:w-40 w-36" />
        </div>
      </div>
    </div>
  );
}

export default QR;
