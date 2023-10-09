import React from "react";
import weekly from "/images/weekly.png";
import monthly from "/images/month.png";
function Offers() {
  return (
    <div
      id="offers"
      className="pt-12 pb-16 justify-start gap-14 flex flex-col w-full h-fit flex-wrap relative"
    >
      <div className="flex items-center gap-2 w-full">
        <div className="line-2"></div>
        <h1 className="text-xl font-light font-['Petrona']">Ofertas</h1>
        <div className="line-2"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:gap-12 gap-8 w-full h-fit">
        <div className="md:flex-col flex-col-reverse flex md:gap-10 gap-4">
          <img
            src={weekly}
            loading="lazy"
            alt="Weekly Offer"
            className="h-[600px] object-cover"
          />
          <div className="gap-2.5">
            <p className="font-light">Oferta de la Semana</p>
            <p className="text-2xl font-semibold">
              10% de Descuento en Lip Gloss
            </p>
          </div>
        </div>
        <div className="flex-col flex md:gap-10 gap-4">
          <div className="gap-2.5">
            <p className="font-light">Oferta del Mes</p>
            <p className="text-2xl font-semibold">
              30% de Descuento en Set de Brochas de Maquillaje
            </p>
          </div>
          <img
            src={monthly}
            loading="lazy"
            alt="Monthly Offer"
            className="h-[600px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Offers;
