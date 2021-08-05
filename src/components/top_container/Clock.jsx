import React from "react";
import { useClock } from "../context/ContextProvider";

export const Clock = () => {
  const { time } = useClock();
  return (
    <div className="clock__container">
      <h1 className="clock">{time}</h1>
      <span>BST</span>
    </div>
  );
};
