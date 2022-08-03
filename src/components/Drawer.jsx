import { useState } from "react";
import { useMainContext } from "../hooks/useMainContext";
import Arrow from "../assets/activo.png";

const Button = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-7 h-16 -right-7 absolute top-2/4 -translate-y-2/4 bg-neutral-50 rounded-r-lg flex items-center justify-center cursor-pointer"
    >
      <img src={Arrow} className="w-5" />
    </button>
  );
};

const Drawer = ({ onClose = () => null, children }) => {
  // onToggle and onClose functions are optional since the component doesn't need to be controlled
  const { openDialog, handleClose } = useMainContext();

  const handleCloseDialog = () => {
    handleClose();
    onClose();
  };

  return (
    <div
      className={`w-full max-w-2xl bg-neutral-50 absolute bottom-0 top-20 left-24 transition-all z-1 ${
        !openDialog && "-translate-x-full"
      }`}
    >
      {children}
      {openDialog && <Button onClick={handleCloseDialog} />}
    </div>
  );
};

export default Drawer;
