import React, { createContext, useState, useContext } from "react";

export const BooleanContext = createContext();

const BooleanContextProvider = ({ children }) => {
  const [isShow, setIsShow] = useState(true);

  return (
    <BooleanContext.Provider value={{ isShow, setIsShow }}>
      {children}
    </BooleanContext.Provider>
  );
};

export const useShow = () => {
  const context = useContext(BooleanContext);
  return context;
};

export default BooleanContextProvider;
