import React from "react";
import { BottomContainer } from "./bottom_container/BottomContainer";
import { useClock } from "./context/ContextProvider";
import { TopContainer } from "./top_container/TopContainer";
import { CircularProgress } from "@material-ui/core";

export const Container = () => {
  const { more, background_icon, loading } = useClock();
  return (
    <>
      {loading ? (
        <div className="loading__container">
          <div className="loading">
            <CircularProgress />
            <p>Loading...</p>
          </div>
        </div>
      ) : (
        <div
          className="container"
          style={{ backgroundImage: `url(${background_icon.bg})` }}
        >
          <TopContainer />
          <BottomContainer />
        </div>
      )}
    </>
  );
};
