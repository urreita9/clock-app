import React from "react";
import { useClock } from "../context/ContextProvider";

export const Greetings = () => {
  const { background_icon, greeting } = useClock();

  return (
    <div className="greetings__container">
      <img src={background_icon.icon} alt="icon-sun" />
      <p>{greeting}, it´s currently</p>
    </div>
  );
};
