import React from "react";

function Instagram() {
  const images = [
    {
      image: "/images/ig1.png",
    },
    {
      image: "/images/ig2.png",
    },
    {
      image: "/images/ig3.png",
    },
    {
      image: "/images/ig4.png",
    },
    {
      image: "/images/ig5.png",
    },
    {
      image: "/images/ig6.png",
    },
  ];

  return (
    <div className="pt-12 pb-16 justify-start gap-14 flex flex-col w-full h-fit flex-wrap relative border-b">
      <div className="items-center flex flex-col gap-5">
        <div className="flex items-center gap-2 w-full">
          <div className="line-2"></div>
          <h1 className="text-xl font-light font-['Petrona']">Síguenos</h1>
          <div className="line-2"></div>
        </div>
        <p className="font-['Petrona']">
          Nuestro{" "}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="nav-link"
          >
            Instagram
          </a>
        </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-5 w-full h-fit">
        {images.map((item,index)=>{
            return(
                <img src={item.image} alt="Instagram Image" key={index} className="w-full" />
            )
        })}
      </div>
    </div>
  );
}

export default Instagram;
