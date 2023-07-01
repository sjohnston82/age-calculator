import React, { useContext } from "react";
import { AgeContext } from "../context/AgeContext";

const AgeOutputs = () => {
  const { days, months, years } = useContext(AgeContext);

  return (
    <div className="flex flex-col font-PoppinsBold w-[90%] mx-auto pt-12 italic">
      <div className="flex text-5xl">
        <p className="text-blue-600">{years ?? "--"}</p>{" "}
        <p className="">&#160;years</p>
      </div>
      <div className="flex text-5xl">
        <p className="text-blue-600">{months ?? "--"}</p>{" "}
        <p className="">&#160;months</p>
      </div>
      <div className="flex text-5xl">
        <p className="text-blue-600">{days ?? "--"}</p>{" "}
        <p className="">&#160;days</p>
      </div>
    </div>
  );
};

export default AgeOutputs;
