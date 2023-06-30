import React from "react";

const DateForm = () => {
  return (
    <div className=" border-b-2 w-4/5  pb-12 lg:mx-12">
      <div className="font-Poppins flex lg:w-3/4 lg:mt-10  lg:gap-6">
        <div className="flex flex-col w-1/3 lg:gap-2">
          <p className="text-sm font-bold text-gray-600">DAY</p>
          <input
            type="text"
            name="day"
            id="day"
            className="border rounded lg:py-4 lg:px-6 caret focus:caret-blue-600 font-extrabold focus:border-blue-600 outline-none font-PoppinsBold lg:text-4xl cursor-pointer"
          />
        </div>
        <div className="flex flex-col w-1/3 lg:gap-2">
          <p className="text-sm font-bold text-gray-600">MONTH</p>
          <input
            type="text"
            name="month"
            id="month"
            className="border rounded lg:py-4 lg:px-6 focus:caret-blue-600 font-extrabold focus:border-blue-600 outline-none font-PoppinsBold lg:text-4xl cursor-pointer"
          />
        </div>
        <div className="flex flex-col w-1/3 lg:gap-2">
          <p className="text-sm font-bold text-gray-600">YEAR</p>
          <input
            type="text"
            name="year"
            id="year"
            className="border rounded lg:py-4 lg:px-6 focus:caret-blue-600 font-extrabold focus:border-blue-600 outline-none font-PoppinsBold lg:text-4xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default DateForm;
