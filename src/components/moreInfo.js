import React, { useState, useEffect } from "react";

export default function MoreInfo() {
  //get timezone
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  //get day of year
  const [dayOfYear, setDayOfYear] = useState(0);
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [weekNumber, setWeekNumber] = useState(0);

  useEffect(() => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);

    const weekday = now.getDay();

    const firstDayOfYear = new Date(now.getFullYear(), 0, 1);
    const pastDaysOfYear = (now - firstDayOfYear) / 86400000;

    setWeekNumber(
      Math.floor((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7)
    );

    setDayOfYear(day);
    setDayOfWeek(weekday);
  }, []);
  return (
    <>
      <p> {timezone}</p>
      <p> {dayOfYear} </p>
      <p> {dayOfWeek} </p>
      <p> {weekNumber} </p>
    </>
  );
}
