import React from "react";
import DateForm from "./DateForm";
import DownArrow from "./DownArrow";
import AgeOutputs from "./AgeOutputs";

const Container = () => {
  return (
    <div className="relative h-full overflow-none lg:pb-8 mt-16 w-[90%] bg-white rounded-[24px] lg:rounded-[30px] rounded-br-[100px] lg:rounded-br-[200px] lg:w-[58%] lg:h-full ">
      <DateForm />
      {/* <DownArrow /> */}
      <AgeOutputs />
    </div>
  );
};

export default Container;
