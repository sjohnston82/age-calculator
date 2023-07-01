import React, { createContext, useState } from "react";

type AgeContextTypes = {
  days: number | null;
  setDays: React.Dispatch<React.SetStateAction<number | null>>;
  months: number | null;
  setMonths: React.Dispatch<React.SetStateAction<number | null>>;
  years: number | null;
  setYears: React.Dispatch<React.SetStateAction<number | null>>;
};

export const AgeContext = createContext<AgeContextTypes>(
  null as unknown as AgeContextTypes
);

export const AgeContextProvider = ({ children }: React.PropsWithChildren) => {
  const [days, setDays] = useState<number | null>(null);
  const [months, setMonths] = useState<number | null>(null);
  const [years, setYears] = useState<number | null>(null);

  return (
    <AgeContext.Provider
      value={{
        days,
        setDays,
        months,
        setMonths,
        years,
        setYears,
      }}
    >
      {children}
    </AgeContext.Provider>
  );
};
