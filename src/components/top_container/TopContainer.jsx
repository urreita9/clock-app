import React from "react";
import { useClock } from "../context/ContextProvider";
import { City } from "./City";
import { Clock } from "./Clock";
import { Greetings } from "./Greetings";
import { MoreLessButton } from "./MoreLessButton";
import { Quotes } from "./Quotes";

export const TopContainer = () => {
  const { background_icon } = useClock();
  return (
    <div
      className="top__container"
      style={{ backgroundImage: `url(${background_icon.bg})` }}
    >
      <Quotes />
      <div className="top__container__bottom">
        <Greetings />
        <Clock />
        <City />
        <MoreLessButton />
      </div>
    </div>
  );
};
