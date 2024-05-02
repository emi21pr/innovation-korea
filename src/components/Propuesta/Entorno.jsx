import React from "react";
import location from "/images/icons/location.svg";

function Entorno() {
  return (
    <div className="pb-12 pt-6 w-full h-fit border-b" id="entorno">
      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-3xl">Entorno</h2>
        <div className="flex gap-6 w-full h-[42rem] items-center">
          <div className="flex custom-shadow flex-col p-10 gap-4 h-full">
            <div className="flex justify-between">
              <div></div>
              <h3 className=" font-semibold text-lg ">India</h3>
              <img src={location} alt="Location" className="w-6" />
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6403335.365099147!2d76.25996199861665!3d21.26319412029355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1ses!2sec!4v1714688140454!5m2!1ses!2sec"
              width="auto"
              className="h-60"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className=" text-justify text-[#565656] font-light">
              Con una población femenina de más de 600 millones, India enfrenta
              desafíos significativos en cuanto al estigma menstrual y la
              pobreza menstrual, especialmente en zonas rurales y comunidades
              desfavorecidas. Según cifras de ONG WASH United, solo el 12% de
              las mujeres indias tienen acceso a productos de higiene menstrual,
              y el 50% sabe nada o muy poco sobre el periodo.
            </p>
          </div>
          <div className="flex custom-shadow flex-col rounded-md p-10 gap-4 h-full">
            <div className="flex justify-between">
              <div></div>
              <h3 className=" font-semibold text-lg ">Kenia y Etiopía</h3>
              <img src={location} alt="Location" className="w-6" />
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5761004.091799618!2d35.74901621731109!3d4.379424282931325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1635d0cedd6cfd2b%3A0x7bf6a67f5348c55a!2zRXRpb3DDrWE!5e0!3m2!1ses!2sec!4v1714688573258!5m2!1ses!2sec"
              width="auto"
              className="h-60"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className=" text-justify text-[#565656] font-light">
              Estas naciones ilustran los retos que enfrentan muchos países
              africanos. En Kenia, cerca del 32% de las escuelas rurales cuentan
              con un lugar privado de saneamiento para que las niñas pueden
              cambiarse las compresas. En cambio, en Etiopía, según un estudio
              realizado por UNICEF en 2017, el 46% de las adolescentes faltan a
              la escuela debido a la menstruación .
            </p>
          </div>
          <div className="flex custom-shadow flex-col rounded-md p-10 gap-4 h-full">
            <div className="flex justify-between">
              <div></div>
              <h3 className=" font-semibold text-lg ">Perú</h3>
              <img src={location} alt="Location" className="w-6" />
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2394850.3895197543!2d-76.39181801470225!3d-9.66015092948827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c850c05914f5%3A0xf29e011279210648!2zUGVyw7o!5e0!3m2!1ses!2sec!4v1714688624744!5m2!1ses!2sec"
              width="auto"
              className="h-60"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className=" text-justify text-[#565656] font-light">
              Representan los desafíos de la región latinoamericana, donde la
              pobreza menstrual afecta principalmente a comunidades indígenas y
              rurales. En Perú, según un estudio realizado por UNICEF tres de
              cada cinco colegios en las zonas rurales tienen problemas de
              acceso a agua o saneamiento, por lo que alrededor del 85% de las
              niñas y adolescentes indican que no se sienten cómodas con los
              baños de sus colegios.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entorno;
