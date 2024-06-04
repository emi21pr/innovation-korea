import React, { useState } from "react";
import { history } from "../assets/data/HistoryData";

function Analisis() {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <div
      className="py-24 lg:px-12 w-full px-8 h-fit flex flex-col pb-24 gap-8"
      id="analisis"
    >
      <h1 className="bebas-text lg:text-6xl text-4xl">
        Análisis GII 2019-2023
      </h1>
      <div className="flex gap-14">
        <div className="flex-1 lg:block hidden">
          <div className="flex flex-col gap-4 w-full">
            {history.map((item, index) => (
              <div
                key={index}
                className={
                  index === current
                    ? "border-b-2 flex justify-between items-center"
                    : "font-md flex justify-between items-center border-b border-b-[#767676] cursor-pointer"
                }
                onClick={() => setCurrent(index)}
              >
                <h3
                  className={
                    index === current ? " font-bold py-2" : "font-light py-2"
                  }
                >
                  {item.title}
                </h3>
                <span
                  className={index === current ? " font-bold" : "font-light"}
                >
                  &#62;
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-4">
            <div className="text-xl py-2 uppercase bebas-text flex justify-between items-end border-b border-b-[#767676]">
              <h1>{history[current].title}</h1>
              <div className="flex gap-4">
                {current > 0 && (
                  <div onClick={() => prev()} className="text-sm cursor-pointer">
                    Anterior
                  </div>
                )}
                {current < history.length - 1 && (
                  <div onClick={() => next()} className="text-sm cursor-pointer">
                    Siguiente
                  </div>
                )}
              </div>
            </div>
            <p className="whitespace-pre-line font-light lg:text-sm text-base text-justify">
              {history[current].content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analisis;
