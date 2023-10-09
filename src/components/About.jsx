import React from "react";
function About() {
  return (
    <div id="about" className=" py-16 justify-start items-center gap-14 flex w-full h-fit flex-wrap border-b relative">
      <div className=" flex w-full about-left">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <div className="line"></div>
            <h1 className="text-xl font-light font-['Petrona']">
              Sobre Nosotros
            </h1>
          </div>
          <p className="text-xl font-light leading-[150%] w-fit text-justify">
            Más que maquillaje, es la personificación de la{" "}
            <span className="bg-[#FFCBEA] text-white px-1">autoconfianza</span>.
            Nuestros productos de belleza realzan tu individualidad y revelan tu
            verdadera esencia. Cada tono, cada textura, es una herramienta para
            la autoexpresión en tu propio estilo.
          </p>
        </div>
      </div>
      <div className=" flex w-full about-right px-6">
        <iframe
          width="460"
          height="315"
          src="https://www.youtube.com/embed/eikRkL_kWmQ?si=jZckYfH9iFFXtKn6"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="z-10"
        />
        <div className="w-64 h-[22rem] border border-neutral-300 absolute right-0 top-12 z-0" />
      </div>
    </div>
  );
}

export default About;
