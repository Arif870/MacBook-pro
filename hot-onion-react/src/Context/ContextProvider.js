import React, { createContext } from "react";
import useAuth from "../Hooks/useAuth";
import useFoods from "../Hooks/useFoods";

export const MyContext = createContext();

export default function ContextProvider({ children }) {
  const allFoodContext = useFoods();
  const allAuth = useAuth();
  return (
    <MyContext.Provider value={(allFoodContext, allAuth)}>
      {children}
    </MyContext.Provider>
  );
}
