import React from "react";
import { useClock } from "../context/ContextProvider";
import { City } from "./City";
import { Clock } from "./Clock";
import { Greetings } from "./Greetings";
import { MoreLessButton } from "./MoreLessButton";
import { Quotes } from "./Quotes";

export const TopContainer = () => {
  const { background_icon, more } = useClock();
  return (
    <div className={`top__container ${more ? "h70" : "h100"}`}>
      <Quotes />
      <div className="top__container__bottom">
        <div>
          <Greetings />
          <Clock />
          <City />
        </div>
        <div>
          <MoreLessButton />
        </div>
      </div>
    </div>
  );
};
