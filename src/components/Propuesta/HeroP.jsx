import React from "react";
import herop from "/images/herop.mp4";
function HeroP() {
  return (
    <div className="pb-6 w-full h-fit border-b">
      <div className="flex flex-col gap-6">
        <div className=" gap-4 flex flex-col">
          <h1 className="font-semibold text-4xl leading-snug text-justify">
            "Flujo Libre" | Una experiencia inmersiva de educación menstrual
          </h1>
        </div>
        <div className="w-full h-[39rem]">
          <div className="h-full rounded-md">
            <video loop autoPlay muted className="w-full h-full rounded-md object-cover">
              <source
                src={herop}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroP;
