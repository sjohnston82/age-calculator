import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { calculateElapsedTime } from "../helpers/calculateElapsedTime";
import DownArrow from "./DownArrow";
import { AgeContext } from "../context/AgeContext";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface DateInputProps {
  day: number;
  month: number;
  year: number;
}

const DateForm = () => {
  const { register, handleSubmit, reset } = useForm<DateInputProps>();
  const { setDays, setMonths, setYears } = useContext(AgeContext);
  const [dayInvalid, setDayInvalid] = useState(false);
  const [monthInvalid, setMonthInvalid] = useState(false);
  const [yearInvalid, setYearInvalid] = useState(false);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  function isDateValid(year: number, month: number, day: number): boolean {
    if (month < 1 || month > 12) {
      setMonthInvalid(true);
      return false;
    }

    if (year > currentYear) {
      setYearInvalid(true);
      return false;
    }

    const maxDaysInMonth = new Date(year, month, 0).getDate();
    return day <= maxDaysInMonth;
  }

  const resetFormValidity = () => {
    setDayInvalid(false);
    setMonthInvalid(false);
    setYearInvalid(false);
  };

  const onSubmit = (data: DateInputProps) => {
    // validation of day
    const isDayValid = isDateValid(data.year, data.month, data.day);
    if (!isDayValid) {
      // reset();
      setDayInvalid(true);
      setDays(null);
      setMonths(null);
      setYears(null);
    } else {
      const startDate = new Date(data.year, data.month - 1, data.day);
      const elapsedTime = calculateElapsedTime(startDate);
      // console.log(elapsedTime);
      setDays(elapsedTime.days);
      setMonths(elapsedTime.months);
      setYears(elapsedTime.years);
    }
  };
  return (
    <div className="w-full  lg:w-4/5  lg:pb-12 lg:mx-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pt-8 mx-auto pb-8 gap-3 font-Poppins flex justify-around w-4/5 lg:w-3/4 lg:mt-10  lg:gap-6">
          <div className="flex flex-col w-1/3 gap-1  lg:w-1/3 lg:gap-2">
            <p className="text-xs tracking-widest lg:text-sm font-PoppinsBold text-gray-600">
              DAY
            </p>
            <input
              type="text"
              placeholder="DD"
              name="day"
              id="day"
              className="border rounded-lg p-3 lg:py-4 lg:px-6 caret focus:caret-blue-600 font-extrabold focus:border-blue-600 outline-none font-PoppinsBold lg:text-4xl cursor-pointer"
              {...register("day")}
              onChange={resetFormValidity}
            />
            {dayInvalid && (
              <p className="text-xs text-red-500">Must be a valid day.</p>
            )}
          </div>
          <div className="flex flex-col gap-1 w-1/3 lg:w-1/3 lg:gap-2">
            <p className="text-xs tracking-widest lg:text-sm font-PoppinsBold text-gray-600">
              MONTH
            </p>
            <input
              type="text"
              placeholder="MM"
              name="month"
              id="month"
              {...register("month")}
              onChange={resetFormValidity}
              className="border p-3 rounded-lg lg:py-4 lg:px-6 focus:caret-blue-600 font-extrabold focus:border-blue-600 outline-none font-PoppinsBold lg:text-4xl cursor-pointer"
            />
            {monthInvalid && (
              <p className="text-xs text-red-500">Must be a valid month.</p>
            )}
          </div>
          <div className="flex flex-col gap-1 w-1/3 lg:w-1/3 lg:gap-2">
            <p className="text-xs tracking-widest lg:text-sm font-PoppinsBold text-gray-600">
              YEAR
            </p>
            <input
              type="text"
              placeholder="YYYY"
              name="year"
              id="year"
              {...register("year")}
              onChange={resetFormValidity}
              className="border p-3 rounded-lg lg:py-4 lg:px-6 focus:caret-blue-600 font-extrabold focus:border-blue-600 outline-none font-PoppinsBold lg:text-4xl cursor-pointer"
            />
            {yearInvalid && (
              <p className="text-sm text-red-500">Must be in the past.</p>
            )}
          </div>
        </div>
      </form>
      <DownArrow handleSubmit={handleSubmit} onSubmit={onSubmit} />
    </div>
  );
};

export default DateForm;
