import MoreInfo from "./components/moreInfo";
import Quotes from "./components/quotes";
import Timezone from "./components/timezone";
import { useState, useEffect } from "react";

function App() {
  const [daytime, setDaytime] = useState(false);

  useEffect(() => {
    let hours = new Date().getHours();
    const setTime = () => {
      if (hours >= 5 && hours < 18) {
        setDaytime(true);
      }
    };
    setTime();
  }, []);

  return (
    <div
      className={`${
        daytime
          ? "bg-[url('./assets/mobile/bg-image-daytime.jpg')] md:bg-[url('./assets/tablet/bg-image-daytime.jpg')] xl:bg-[url('./assets/desktop/bg-image-daytime.jpg')]"
          : "bg-[url('./assets/mobile/bg-image-nighttime.jpg')] md:bg-[url('./assets/tablet/bg-image-nighttime.jpg')] xl:bg-[url('./assets/desktop/bg-image-nighttime.jpg')]"
      }
      md:${
        daytime
          ? "bg-[url('./assets/tablet/bg-image-daytime.jpg')]"
          : "bg-[url('./assets/tablet/bg-image-nighttime.jpg')]"
      }
       bg-[#D8D8D8] bg-no-repeat bg-cover h-screen w-full bg-blend-multiply py-8 md:py-16`}
    >
      <Quotes />
      <Timezone />
      <MoreInfo />
    </div>
  );
}

export default App;
