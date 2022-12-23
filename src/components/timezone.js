import React, { useState, useEffect } from "react";
import sun from "../assets/desktop/icon-sun.svg";
import moon from "../assets/desktop/icon-moon.svg";
export default function Timezone() {
  // const [data, setData] = useState(null);
  // async function location() {
  //   try {
  //     const response = await fetch(
  //       "https://api.ipbase.com/v2/info?apikey=Fu4OO0gEkV1F04PMZZDO5YkWtqumcftvZKtlWzd6"
  //     );
  //     const { statusCode, statusMessage, ...data } = await response.json();
  //     if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
  //     setData(data);
  //   } catch (error) {
  //     console.error(error);
  //     setData({ content: "Opps... Something went wrong" });
  //   }
  // }
  // useEffect(() => {
  //   location();
  // }, []);

  // if (!data) return null;

  //date
  const [time, setTime] = useState();

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

  //gmt
  const now = new Date();
  const gmt = new Intl.DateTimeFormat("en-US", {
    timeZoneName: "short",
  }).format(now);
  let newGmt = gmt.slice(12, 15);

  return (
    <div className="flex flex-col gap-4 m-0 mt-[250px] px-6 md:px-16 ">
      <div className="flex flex-row gap-4 align-middle m-0">
        <img
          src={hours >= 5 && hours < 18 ? sun : moon}
          alt=""
          className="m-0"
        ></img>
        <p className="text-sm tracking-[3px]">{greeting()}</p>
      </div>
      <div className="flex flex-row m-0 items-center h-[100px] ">
        <span className="text-[100px] font-bold m-0 tracking-[-2.5px]">
          {time}
        </span>
        <p className="text-sm tracking-[3px] m-0 self-end relative bottom-4 left-2">
          {newGmt}
        </p>
      </div>
      <p className="text-sm tracking-[3px]">
        {/* {data.data.location.city.name_translated},{" "}
    {data.data.location.country.alpha2} */}
        IN TBILISI, GE
      </p>
    </div>
  );
}
