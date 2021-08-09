import React, { createContext, useContext, useState, useEffect } from "react";

const clockContext = createContext();

export function useClock() {
  return useContext(clockContext);
}
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export const ContextProvider = ({ children }) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [quote, setQuote] = useState({ content: "", author: "" });

  const [background_icon, setBackground_icon] = useState({
    bg: "/assets/mobile/bg-image-daytime.jpg",
    icon: "/assets/desktop/icon-sun.svg",
  });

  const [time, setTime] = useState("");
  const [additionalData, setAdditionalData] = useState({});
  const [city, setCity] = useState("");
  const [greeting, setGreeting] = useState("");
  const [more, setMore] = useState(false);
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);

  //Set window dimensions
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    getQuote();
    getTime();
    getCity();
  }, []);

  useEffect(() => {
    decideBackground();
  }, [windowDimensions, time]);

  const decideBackground = () => {
    const { width } = windowDimensions;
    if (time > "05:00" && time < "18:00") {
      setDark(false);
    } else {
      setDark(true);
    }

    if (width > 375 && width < 769) {
      time > "05:00" && time < "18:00"
        ? setBackground_icon({
            bg: "/assets/tablet/bg-image-daytime.jpg",
            icon: "/assets/desktop/icon-sun.svg",
          })
        : setBackground_icon({
            bg: "/assets/tablet/bg-image-nighttime.jpg",
            icon: "/assets/desktop/icon-moon.svg",
          });
    } else if (width >= 769) {
      time > "05:00" && time < "18:00"
        ? setBackground_icon({
            bg: "/assets/desktop/bg-image-daytime.jpg",
            icon: "/assets/desktop/icon-sun.svg",
          })
        : setBackground_icon({
            bg: "/assets/desktop/bg-image-nighttime.jpg",
            icon: "/assets/desktop/icon-moon.svg",
          });
    } else {
      time > "05:00" && time < "18:00"
        ? setBackground_icon({
            bg: "/assets/mobile/bg-image-daytime.jpg",
            icon: "/assets/desktop/icon-sun.svg",
          })
        : setBackground_icon({
            bg: "/assets/mobile/bg-image-nighttime.jpg",
            icon: "/assets/desktop/icon-moon.svg",
          });
    }
  };

  const getQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    const { author, content } = data;
    setQuote({
      author,
      content,
    });
  };
  const getTime = async () => {
    const response = await fetch("https://worldtimeapi.org/api/ip");
    const data = await response.json();

    const { unixtime, day_of_week, week_number, day_of_year, timezone } = data;

    setAdditionalData({
      weekDay: day_of_week,
      weekNum: week_number,
      yearDay: day_of_year,
      timezone,
    });

    const date = new Date(unixtime * 1000);
    const hours =
      date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const minutes = "0" + date.getMinutes();

    const formattedTime = hours + ":" + minutes.substr(-2);
    if (formattedTime > "05:00" && formattedTime <= "12:00") {
      setGreeting("Good Morning");
    } else if (formattedTime > "12:00" && formattedTime <= "18:00") {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
    setLoading(false);
    return setTime(formattedTime);
  };

  const getCity = async () => {
    const response = await fetch("https://freegeoip.app/json/");
    const data = await response.json();

    const { city, country_code, country_name } = data;
    city === ""
      ? setCity(`in ${country_name}`)
      : setCity(`in ${city}, ${country_code}`);
  };

  const values = {
    loading,
    quote,
    background_icon,
    time,
    city,
    greeting,
    more,
    setMore,
    dark,
    additionalData,
    getQuote,
    windowDimensions,
  };
  return (
    <clockContext.Provider value={values}>{children}</clockContext.Provider>
  );
};
