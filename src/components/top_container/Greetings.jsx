import React from "react";
import { useClock } from "../context/ContextProvider";

export const Greetings = () => {
  const { background_icon, greeting, windowDimensions } = useClock();

  const { width } = windowDimensions;

  return (
    <div className="greetings__container">
      <img src={background_icon.icon} alt="icon-sun" />
      <p>{width > 375 ? `${greeting}, it´s currently` : greeting}</p>
    </div>
  );
};
