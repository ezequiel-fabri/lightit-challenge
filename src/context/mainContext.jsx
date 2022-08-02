import { createContext, useState } from "react";

export const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  return (
    <MainContext.Provider value={{ items }}>{children}</MainContext.Provider>
  );
};

export default MainProvider;
