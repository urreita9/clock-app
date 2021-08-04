import React, { createContext, useContext, useState, useEffect } from "react";

const clockContext = createContext();

export function useClock() {
  return useContext(clockContext);
}

export const ContextProvider = ({ children }) => {
  const [quote, setQuote] = useState({ content: "", author: "" });

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    const { author, content } = data;
    setQuote({
      author,
      content,
    });
  };

  const values = { quote };
  return (
    <clockContext.Provider value={values}>{children}</clockContext.Provider>
  );
};
