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

const dateSchema = z.object({
  day: z.coerce.number().min(1, { message: "Day cannot be blank." }),
  month: z.coerce.number().min(1, { message: "Month cannot be blank" }),
  year: z.coerce.number().min(1, { message: "Year cannot be blank" }),
});

const DateForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DateInputProps>({ resolver: zodResolver(dateSchema) });
  const { setDays, setMonths, setYears } = useContext(AgeContext);
  const [dayInvalid, setDayInvalid] = useState(false);
  const [monthInvalid, setMonthInvalid] = useState(false);
  const [yearInvalid, setYearInvalid] = useState(false);
  const [yearBlank, setYearBlank] = useState(false);

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
    // setYearBlank(false);
  };

  const onSubmit = (data: DateInputProps) => {
    // validation of day
    const isDayValid = isDateValid(data.year, data.month, data.day);
    // if (data.year === "") {
    //   setYearBlank(true);
    // }
    if (!isDayValid) {
      setDayInvalid(true);
      setDays(null);
      setMonths(null);
      setYears(null);
    } else {
      const startDate = new Date(data.year, data.month - 1, data.day);
      const elapsedTime = calculateElapsedTime(startDate);
      setDays(elapsedTime.days);
      setMonths(elapsedTime.months);
      setYears(elapsedTime.years);
    }
  };
  return (
    <div className="w-full   ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pt-8 mx-auto pb-8 w-4/5 gap-3 font-Poppins flex justify-around lg:w-2/3 lg:mx-0 lg:pl-16 lg:pt-12">
          <div className="flex flex-col w-1/3 gap-1  lg:w-1/3 lg:gap-2">
            <p className="text-xs tracking-widest lg:text-sm font-PoppinsBold text-gray-500">
              DAY
            </p>
            <input
              type="number"
              placeholder="DD"
              name="day"
              id="day"
              className="border rounded-lg p-3 lg:py-4 lg:px-6 caret focus:caret-blue-600 font-extrabold focus:border-blue-600 outline-none font-PoppinsBold lg:text-4xl cursor-pointer"
              {...register("day", {
                setValueAs: (v) => (v === "" ? null : v),
              })}
              onChange={resetFormValidity}
            />
            {dayInvalid && (
              <p className="text-xs text-red-500">Must be a valid day.</p>
            )}
            {errors.day?.message && (
              <p className="text-sm italic text-red-500">
                {errors.day?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1 w-1/3 lg:w-1/3 lg:gap-2">
            <p className="text-xs tracking-widest lg:text-sm font-PoppinsBold text-gray-500">
              MONTH
            </p>
            <input
              type="number"
              placeholder="MM"
              name="month"
              id="month"
              {...register("month", {
                setValueAs: (v) => (v === "" ? null : v),
              })}
              onChange={resetFormValidity}
              className="border p-3 rounded-lg lg:py-4 lg:px-6 focus:caret-blue-600 font-extrabold focus:border-blue-600 outline-none font-PoppinsBold lg:text-4xl cursor-pointer"
            />
            {monthInvalid && (
              <p className="text-xs text-red-500">Must be a valid month.</p>
            )}
            {errors.month?.message && (
              <p className="text-sm italic text-red-500">
                {errors.month?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1 w-1/3 lg:w-1/3 lg:gap-2">
            <p className="text-xs tracking-widest lg:text-sm font-PoppinsBold text-gray-500">
              YEAR
            </p>
            <input
              type="number"
              placeholder="YYYY"
              name="year"
              id="year"
              {...register("year", {
                setValueAs: (v) => (v === "" ? null : v),
              })}
              onChange={resetFormValidity}
              className="border p-3 rounded-lg lg:py-4 lg:px-6 focus:caret-blue-600 font-extrabold focus:border-blue-600 outline-none font-PoppinsBold lg:text-4xl cursor-pointer"
            />
            {yearInvalid && (
              <p className="text-sm text-red-500">Must be in the past.</p>
            )}
            {errors.year?.message && (
              <p className="text-sm italic text-red-500">
                {errors.year?.message}
              </p>
            )}
          </div>
        </div>
      </form>
      <DownArrow handleSubmit={handleSubmit} onSubmit={onSubmit} />
    </div>
  );
};

export default DateForm;
