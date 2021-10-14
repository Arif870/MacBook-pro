import React, { createContext } from "react";
import useFoods from "../Hooks/useFoods";

export const MyContext = createContext();

export default function ContextProvider({ children }) {
  const allFoodContext = useFoods();
  return (
    <MyContext.Provider value={allFoodContext}>{children}</MyContext.Provider>
  );
}
