import React from "react";
import { useClock } from "../context/ContextProvider";

export const BottomContainer = () => {
  const { additionalData, more, dark } = useClock();
  return (
    <div
      className={`${more} ? "bottom__container" : "none" ${dark}?'bg__dark':'bg__light'`}
    >
      <div className="timeData__container">
        <div className="timeData__top__container">
          <div className="time__data">
            <h6 className="time__data__left">Current Timezone</h6>
            <h5 className="time__data__right">{additionalData.timezone}</h5>
          </div>
          <div className="time__data">
            <h6 className="time__data__left">Day of the year</h6>
            <h5 className="time__data__right">{additionalData.yearDay}</h5>
          </div>
        </div>
        <div className="timeData__bottom__container">
          <div className="time__data">
            <h6 className="time__data__left">Day of the week</h6>
            <h5 className="time__data__right">{additionalData.weekDay}</h5>
          </div>
          <div className="time__data">
            <h6 className="time__data__left">Week number</h6>
            <h5 className="time__data__right">{additionalData.weekNum}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
