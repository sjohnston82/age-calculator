import React from "react";
import DateForm from "./DateForm";
import DownArrow from "./DownArrow";
import AgeOutputs from "./AgeOutputs";

const Container = () => {
  return (
    <div className="relative h-3/4 mt-16 w-[90%] bg-white rounded-[24px] lg:rounded-[30px] rounded-br-[100px] lg:rounded-br-[200px] lg:w-3/5 lg:h-4/5 ">
      <DateForm />
      {/* <DownArrow /> */}
      <AgeOutputs />
    </div>
  );
};

export default Container;
