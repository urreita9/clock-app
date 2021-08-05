import React from "react";
import { useClock } from "../context/ContextProvider";

export const City = () => {
  const { city } = useClock();
  return (
    <div className="city__container">
      <p>{city}</p>
    </div>
  );
};
