import React from "react";
import { useClock } from "../context/ContextProvider";

export const MoreLessButton = () => {
  const { more, setMore } = useClock();
  return (
    <div className="button__container" onClick={() => setMore(!more)}>
      <div className="button__left">{more ? "LESS" : "MORE"}</div>
      <div className="button__right">
        <img
          src="/assets/desktop/icon-arrow-up.svg"
          alt=""
          className={more ? "" : "rotateImg"}
        />
      </div>
    </div>
  );
};
