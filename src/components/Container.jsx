import React from "react";
import { BottomContainer } from "./bottom_container/BottomContainer";
import { useClock } from "./context/ContextProvider";
import { TopContainer } from "./top_container/TopContainer";

export const Container = () => {
  const { more, background_icon } = useClock();
  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${background_icon.bg})` }}
    >
      <TopContainer />
      <BottomContainer />
    </div>
  );
};
