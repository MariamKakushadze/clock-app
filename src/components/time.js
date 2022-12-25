import React, { useState, useEffect } from "react";
import sun from "../assets/desktop/icon-sun.svg";
import moon from "../assets/desktop/icon-moon.svg";

export default function Time() {
  const [time, setTime] = useState();
  //time
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const currentTime = date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      });
      setTime(currentTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  //gmt
  const now = new Date();
  const gmt = new Intl.DateTimeFormat("en-US", {
    timeZoneName: "short",
  }).format(now);
  let newGmt = gmt.slice(12, 15);

  //greeting
  let hours = new Date().getHours();
  const greeting = function () {
    if (hours >= 5 && hours < 12) {
      return "GOOD MORNING";
    } else if (hours >= 12 && hours < 18) {
      return "GOOD AFTERNOON";
    } else {
      return "GOOD EVENING";
    }
  };
  return (
    <>
      <div className="flex flex-row gap-4 align-middle m-0">
        <img
          src={hours >= 5 && hours < 18 ? sun : moon}
          alt=""
          className="m-0"
        ></img>
        <p className="text-sm tracking-[3px] md:text-lg xl:text-[20px]">
          {greeting()}
        </p>
        <p className="hidden md:flex ml-[-17px] text-sm tracking-[3px] md:text-lg xl:text-[20px]">
          , IT’S CURRENTLY
        </p>
      </div>
      <div className="flex flex-row m-0 items-center h-[100px] ">
        <span className="text-[100px] font-bold m-0 tracking-[-2.5px] md:text-[175px] xl:text-[200px] xl:tracking-[-5px]">
          {time}
        </span>
        <p className="text-sm tracking-[3px] m-0 self-end relative bottom-4 left-2 md:text-lg md:bottom-0 xl:text-[40px]">
          {newGmt}
        </p>
      </div>
    </>
  );
}
