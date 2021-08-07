import React from "react";
import { BottomContainer } from "./bottom_container/BottomContainer";
import { useClock } from "./context/ContextProvider";
import { TopContainer } from "./top_container/TopContainer";

export const Container = () => {
  const { more } = useClock();
  return (
    <div className="container">
      <TopContainer />
      <BottomContainer />
    </div>
  );
};
