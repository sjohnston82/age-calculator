export function calculateElapsedTime(startDate: Date): {
  years: number;
  months: number;
  days: number;
} {
  const currentDate = new Date();
  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth();
  const startDay = startDate.getDate();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  let years = currentYear - startYear;
  let months = currentMonth - startMonth;
  let days = currentDay - startDay;

  // Adjust for negative months
  if (months < 0) {
    years--;
    months += 12;
  }

  // Adjust for negative days
  if (days < 0) {
    months--;
    const previousMonthDate = new Date(currentYear, currentMonth - 1, startDay);
    days = Math.floor(
      (currentDate.getTime() - previousMonthDate.getTime()) /
        (1000 * 60 * 60 * 24)
    );
  }

  return { years, months, days };
}
