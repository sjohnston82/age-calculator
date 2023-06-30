import React from "react";
import DateForm from "./DateForm";
import IconArrow from "../assets/images/icon-arrow.svg";
import Image from "next/image";

const Container = () => {
  return (
    <div className="relative h-3/5 mt-12 w-[90%] bg-white lg:rounded-[30px] lg:rounded-br-[200px] lg:w-3/5 lg:h-4/5 ">
      <DateForm />
      <Image
        src={IconArrow}
        className="bg-blue-600 cursor-pointer rounded-full p-8 absolute top-[142px] right-16"
        width={100}
        height={100}
        alt="icon arrow"
      />
    </div>
  );
};

export default Container;
