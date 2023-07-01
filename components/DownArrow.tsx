import React from "react";
import IconArrow from "../assets/images/icon-arrow.svg";
import Image from "next/image";

interface DownArrowButtonProps {
  handleSubmit: () => void;
  onSubmit: () => void;
}

const DownArrow = ({ handleSubmit, onSubmit }) => {
  return (
    <div className="relative w-[90%] mx-auto">
      <div className="relative w-full h-16 ">
        <Image
          src={IconArrow}
          alt="icon arrow"
          className="h-16 w-16 left-0 right-0 m-auto rounded-full p-4 absolute  bg-blue-600"
          onClick={handleSubmit(onSubmit)}
        />
        <div className="h-8 border-b-2 border-gray-100"></div>
      </div>
    </div>
  );
};

export default DownArrow;
