import React, { useState } from "react";
import { history } from "../assets/data/HistoryData";

function Analisis() {
  const [current, setCurrent] = useState(0);
  return (
    <div
      className="py-24 px-12 w-full h-fit flex flex-col pb-24 gap-8"
      id="analisis"
    >
      <h1 className="bebas-text text-6xl">Análisis GII 2019-2023</h1>
      <div className="flex gap-14">
        <div className="flex-1">
          <div className="flex flex-col gap-5 w-full">
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
          <div className="flex flex-col gap-2">
            <div className=" text-xl py-2 uppercase bebas-text">{history[current].title}</div>
            <p className="whitespace-pre-line font-light text-sm">{history[current].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analisis;
