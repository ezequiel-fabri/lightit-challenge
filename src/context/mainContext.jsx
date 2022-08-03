import { createContext, useState, useCallback } from "react";

export const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClose = useCallback(() => setOpenDialog(false), []);
  const handleOpen = useCallback(() => setOpenDialog(true), []);
  const handleToggle = useCallback(
    () => setOpenDialog((prevValue) => !prevValue),
    []
  );

  return (
    <MainContext.Provider
      value={{ openDialog, handleClose, handleOpen, handleToggle }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
