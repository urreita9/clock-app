import React, { useContext } from "react";
import { useClock } from "../context/ContextProvider";

export const Quotes = () => {
  const { quote, more, getQuote } = useClock();
  return (
    <div className={more ? "none" : "quotes__container"}>
      <div className="text__container">
        <p>{quote.content}</p>
        <strong>{quote.author}</strong>
      </div>
      <img
        src="/assets/desktop/icon-refresh.svg"
        alt="refresh_quote"
        className="refresh__quote"
        onClick={() => getQuote()}
      />
    </div>
  );
};
