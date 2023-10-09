import React from "react";

function QR() {
  return (
    <div className="pt-12 pb-16 justify-start gap-14 flex flex-col w-full h-fit flex-wrap relative border-b">
      <div className="w-full p-24 h-fit bg-img items-center justify-between flex">
        <div className="flex flex-col flex-1 gap-4">
          <p className="text-3xl font-light leading-[150%]">
            5 Consejos sobre{" "}
            <span className="font-semibold text-4xl">SkinCare</span>
            <br /> que debes conocer
          </p>
          <p className="font-light">Escanea el código QR para verlos</p>
        </div>
        <div className="flex flex-1 justify-end">
          <img src="/images/qr.png" alt="QR" />
        </div>
      </div>
    </div>
  );
}

export default QR;
