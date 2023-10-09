import React from "react";
import testimonial1 from "/images/testimonial1.png";
import testimonial2 from "/images/testimonial2.png";
function Testimonials() {
  return (
    <div
      id="testimonials"
      className="pt-12 pb-16 justify-start gap-14 flex flex-col w-full h-fit flex-wrap relative"
    >
      <div className="flex items-center gap-2 w-full">
        <div className="line-2"></div>
        <h1 className="text-xl font-light font-['Petrona']">Testimonios</h1>
        <div className="line-2"></div>
      </div>

      <div className="grid grid-cols-2 gap-12 w-full h-fit">
        <div className="flex-col flex gap-10 custom-shadow p-10 items-center justify-between">
          <p className="text-center text-xl font-light leading-[150%]">
            “Los productos de FlawlessLook realmente han transformado mi rutina
            de belleza. Desde que empecé a usar sus productos, mi piel se ve más
            radiante y saludable. ¡Estoy enamorada de su gama de colores y
            texturas!”
          </p>
          <div className="flex flex-col gap-2.5 items-center">
            <h2 className="text-center font-medium text-xl">María G.</h2>
            <span className="text-center font-light text-sm">Modelo</span>
            <img
              src={testimonial1}
              alt="Testimonio 1"
              loading="lazy"
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>
        </div>
        <div className="flex-col flex gap-10 custom-shadow p-10 items-center justify-between">
          <p className="text-center text-xl font-light leading-[150%]">
            "Como maquillador profesional, confío en FlawlessLook para obtener
            resultados impecables en mis clientes. Sus productos son de alta
            calidad y fáciles de aplicar, lo que hace que mi trabajo sea más
            fácil y efectivo."
          </p>
          <div className="flex flex-col gap-2.5 items-center">
            <h2 className="text-center font-medium text-xl">Carlos M.</h2>
            <span className="text-center font-light text-sm">Maquillista Profesional</span>
            <img
              src={testimonial2}
              alt="Testimonio 1"
              loading="lazy"
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
