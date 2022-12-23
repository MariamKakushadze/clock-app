import React, { useState, useEffect } from "react";
import arrowDown from "../assets/desktop/icon-arrow-down.svg";
import arrowUp from "../assets/desktop/icon-arrow-up.svg";

export default function MoreInfo(props) {
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

  function handleClick() {
    props.setMoreInfo(!props.moreInfo);
  }

  return (
    <div className=" mt-12 md:mt-20">
      <div
        className="mx-6 md:mx-16 flex w-[115px] h-[39px] md:w-[146px] md:h-[56px] bg-white rounded-[28px] justify-between  text-center m-0 content-center pl-4 pr-1 md:pl-5 md:pr-2 cursor-pointer"
        onClick={handleClick}
      >
        <p className="text-black text-opacity-50 self-center md:text-md">
          {props.moreInfo ? "LESS" : "MORE"}
        </p>
        <div className="bg-[#303030] rounded-[50%] w-8 h-8 md:w-10 md:h-10 self-center m-0">
          <img
            src={props.moreInfo ? arrowUp : arrowDown}
            alt=""
            style={{ paddingTop: props.moreInfo ? "0" : "12px" }}
          ></img>
        </div>
      </div>
      <div
        className={` flex-col gap-4 bg-opacity-75 backdrop-blur-[20.3871px] w-screen py-[44px] px-[26px] md:py-[119px] md:px-[64px] mt-11`}
        style={{
          display: props.moreInfo ? "flex" : "none",
          fontColor: props.daytime ? "white" : "#303030",
          background: props.daytime ? "white" : "black",
          opacity: 0.85,
        }}
      >
        <div className="flex flex-row md:flex-col m-0 justify-between md:justify-center">
          <p className="text-[10px] tracking-[2px] self-center">
            CURRENT TIMEZONE
          </p>
          <p className="text-[20px] text-bold"> {timezone}</p>
        </div>
        <div className="flex flex-row  md:flex-col m-0 justify-between">
          <p className="text-[10px] tracking-[2px] self-center">
            DAY OF THE YEAR
          </p>
          <p className="text-[20px] text-bold"> {dayOfYear} </p>
        </div>
        <div className="flex flex-row md:flex-col m-0 justify-between">
          <p className="text-[10px] tracking-[2px] self-center">
            DAY OF THE WEEK
          </p>
          <p className="text-[20px] text-bold"> {dayOfWeek} </p>
        </div>
        <div className="flex flex-row md:flex-col m-0 justify-between">
          <p className="text-[10px] tracking-[2px] self-center">WEEK NUMBER</p>
          <p className="text-[20px] text-bold"> {weekNumber} </p>
        </div>
      </div>
    </div>
  );
}
