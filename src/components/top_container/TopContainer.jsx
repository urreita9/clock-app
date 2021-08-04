import React from "react";
import { City } from "./City";
import { Clock } from "./Clock";
import { Greetings } from "./Greetings";
import { MoreLessButton } from "./MoreLessButton";
import { Quotes } from "./Quotes";

export const TopContainer = () => {
  return (
    <div
      className="top__container"
      style={{ backgroundImage: "url(/assets/mobile/bg-image-daytime.jpg)" }}
    >
      <Quotes />
      <Greetings />
      <Clock />
      <City />
      <MoreLessButton />
    </div>
  );
};
