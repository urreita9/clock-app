import React, { useContext } from "react";
import { useClock } from "../context/ContextProvider";

export const Quotes = () => {
  const { quote } = useClock();
  return (
    <div className="quotes__container">
      <div>
        <p>{quote.content}</p>
        <strong>{quote.author}</strong>
      </div>
    </div>
  );
};
