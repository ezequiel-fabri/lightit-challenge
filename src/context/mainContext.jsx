import { createContext, useState } from "react";

export const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((prev) => !prev);

  return (
    <MainContext.Provider value={{ handleToggle, open }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
