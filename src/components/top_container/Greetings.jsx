import React from "react";
import { useClock } from "../context/ContextProvider";

export const Greetings = () => {
  const { background_icon, time } = useClock();
  console.log(typeof time);
  const greet = {
    m: "Good Morning",
    a: "Good Afternoon",
    e: "Good Evening",
  };
  return (
    <div className="greetings__container">
      <img src={background_icon.icon} alt="icon-sun" />
      <p>
        {time > "05:00" && time <= "12:00"
          ? greet.m
          : time > "12:00" && time <= "18:00"
          ? greet.a
          : time > "18:00" && time <= "05:00"
          ? greet.e
          : null}
      </p>
    </div>
  );
};
