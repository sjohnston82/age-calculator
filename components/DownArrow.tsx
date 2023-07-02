import React, { useState } from "react";
import IconArrow from "../assets/images/icon-arrow.svg";
import Image from "next/image";
import { cn } from "../helpers/cn";

interface DownArrowButtonProps {
  handleSubmit: () => void;
  onSubmit: () => void;
}

const DownArrow = ({ handleSubmit, onSubmit }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="relative w-[90%] mx-auto">
      <div className="relative w-full h-16 ">
        <Image
          src={IconArrow}
          alt="icon arrow"
          className={cn(
            "h-16 w-16 left-0 right-0 m-auto rounded-full p-4 absolute cursor-pointer bg-indigo-600",
            { "bg-black": isClicked }
          )}
          onClick={handleSubmit(onSubmit)}
          onMouseDown={() => setIsClicked(true)}
          onMouseUp={() => setIsClicked(false)}
        />
        <div className="h-8 border-b-2 border-gray-100"></div>
      </div>
    </div>
  );
};

export default DownArrow;
