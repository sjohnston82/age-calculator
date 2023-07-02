import React, { useContext } from "react";
import { AgeContext } from "../context/AgeContext";
import { cn } from "../helpers/cn";

const AgeOutputs = () => {
  const { days, months, years } = useContext(AgeContext);

  return (
    <div className="flex flex-col font-PoppinsExtraBoldItalic w-[90%] mx-auto py-12 italic">
      <div className="flex text-5xl lg:text-8xl">
        <p
          className={cn("text-indigo-600", {
            "tracking-widest": months === null,
          })}
        >
          {years ?? "--"}
        </p>{" "}
        <p className="">&#160;{years === 1 ? "year" : "years"}</p>
      </div>
      <div className="flex text-5xl lg:text-8xl">
        <p
          className={cn("text-indigo-600", {
            "tracking-widest": months === null,
          })}
        >
          {months ?? "--"}
        </p>{" "}
        <p className="">&#160;{months === 1 ? " month" : "months"}</p>
      </div>
      <div className="flex text-5xl lg:text-8xl ">
        <p
          className={cn("text-indigo-600", {
            "tracking-widest": months === null,
          })}
        >
          {days ?? "--"}
        </p>{" "}
        <p className="">&#160;{days === 1 ? "day" : "days"}</p>
      </div>
    </div>
  );
};

export default AgeOutputs;
