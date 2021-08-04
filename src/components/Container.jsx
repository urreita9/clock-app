import React from "react";
import { BottomContainer } from "./bottom_container/BottomContainer";
import { TopContainer } from "./top_container/TopContainer";

export const Container = () => {
  return (
    <div className="container">
      <TopContainer />
      {/* <BottomContainer/> */}
    </div>
  );
};
