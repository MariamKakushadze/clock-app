import React, { useState, useEffect } from "react";
import refresh from "../assets/desktop/icon-refresh.svg";

export default function Quotes() {
  //   const [data, setData] = useState(null);
  //   async function updateQuote() {
  //     try {
  //       const response = await fetch(
  //         "https://api.quotable.io/random?minLength=110&maxLength=140"
  //       );
  //       const { statusCode, statusMessage, ...data } = await response.json();
  //       if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
  //       setData(data);
  //     } catch (error) {
  //       console.error(error);
  //       setData({ content: "Opps... Something went wrong" });
  //     }
  //   }
  //   useEffect(() => {
  //     updateQuote();
  //   }, []);
  //   if (!data) return null;

  return (
    <div className="flex flex-col gap-2 relative max-w-[90%] md:max-w-[80%] m-0 px-6 md:px-16">
      <span className="text-xs md:text-lg tracking-wider  m-0">
        “{/* {data.content || */}
        `The science of operations, as derived from mathematics more especially,
        is a science of itself, and has its own abstract truth and value.` ”
      </span>
      <p className="text-xs font-bold tracking-wider md:text-lg">
        {/* {data.author ||  */}
        Ada Lovelace
      </p>
      <img
        src={refresh}
        alt=""
        className="absolute right-0 cursor-pointer md:top-2"
        // onClick={updateQuote}
      />
    </div>
  );
}
