import React from "react";
import protest2 from "/images/protest2.jpg";
import car1 from "/images/car1.jpg";
import car2 from "/images/car2.jpg";
import car3 from "/images/car3.jpg";
import car4 from "/images/car4.jpg";
import car5 from "/images/car5.jpg";
import car6 from "/images/car6.jpg";
import car7 from "/images/car7.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Actor() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 664 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="pb-12 pt-6 w-full h-fit border-b" id="actor">
      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-3xl">Actor Colectivo</h2>
        <div className="flex gap-16 w-full h-[21rem] flex-wrap">
          <div className=" flex-1">
            <p className=" font-light text-justify text-[#565656]">
              El actor colectivo principal son las organizaciones y movimientos
              liderados por mujeres jóvenes en Japón y China, como Period Pride
              en China y #EveryonesPeriod en Japón. Estas agrupaciones están
              conformadas por activistas, estudiantes universitarias,
              emprendedoras, profesionales de diversos ámbitos y líderes
              comunitarias.<br/> <br/>
              Sin embargo, a medida que su causa va ganando fuerza, han logrado
              articular una red más amplia de actores que incluye empresas
              socialmente responsables (Unicharm, BeA Japón, Relief),
              legisladoras (Sayaka Sasaki, Renhō Saitō), organizaciones sin
              fines de lucro (Plan International Japan, China Alliance of Social
              Value Investment), académicas y expertas en género. Esta
              diversidad de actores les ha permitido incidir en diferentes
              espacios y sumar más voces a su movimiento.
            </p>
          </div>
          <div className="flex-1 h-full">
            <img src={protest2} alt="Protest" className="h-full w-full object-cover rounded-md" />
          </div>
        </div>
        <div className="h-[27rem]">
          <Carousel
            responsive={responsive}
            className="h-full w-full"
            infinite={true}
            autoPlay={true}
          >
            <div className="actor-container w-72 h-96 rounded-md ">
              <img
                src={car1}
                alt=""
                className="w-full h-full rounded-md object-cover"
              />
            </div>
            <div className="actor-container w-72 h-96 rounded-md">
              <img
                src={car2}
                alt=""
                className="w-full h-full rounded-md object-cover"
              />
            </div>
            <div className="actor-container w-72 h-96 rounded-md">
              <img
                src={car3}
                alt=""
                className="w-full h-full rounded-md object-cover"
              />
            </div>
            <div className="actor-container w-72 h-96 rounded-md custom-shadow">
              <img
                src={car4}
                alt=""
                className="w-full h-full rounded-md object-cover"
              />
            </div>
            <div className="actor-container w-72 h-96 rounded-md">
              <img
                src={car5}
                alt=""
                className="w-full h-full rounded-md object-cover"
              />
            </div>
            <div className="actor-container w-72 h-96 rounded-md">
              <img
                src={car6}
                alt=""
                className="w-full h-full rounded-md object-cover"
              />
            </div>
            <div className="actor-container w-72 h-96 rounded-md custom-shadow">
              <img
                src={car7}
                alt=""
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Actor;
