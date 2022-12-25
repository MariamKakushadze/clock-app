import React, { useState, useEffect } from "react";

import Time from "./time";
export default function Timezone() {
  const [data, setData] = useState(null);

  async function location() {
    try {
      const response = await fetch(
        "https://api.ipbase.com/v2/info?apikey=Fu4OO0gEkV1F04PMZZDO5YkWtqumcftvZKtlWzd6"
      );
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      setData(data);
    } catch (error) {
      console.error(error);
      setData({ content: "Opps... Something went wrong" });
    }
  }
  useEffect(() => {
    location();
  }, []);

  if (!data) return null;

  return (
    <div className="flex flex-col gap-4 m-0 mt-[70px] px-6 md:px-16  md:gap-8 xl:pl-[165px] xl:mt-0 xl:gap-14">
      <Time />
      <p className="text-sm tracking-[3px] md:text-lg xl:text-[24px] xl:tracking-[4.8px]">
        {data.data.location.city.name_translated},{" "}
        {data.data.location.country.alpha2}
      </p>
    </div>
  );
}
