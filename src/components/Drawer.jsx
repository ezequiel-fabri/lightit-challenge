import { useState } from "react";
import Arrow from "../assets/activo.png";

const Button = ({ onClick }) => {
  return (
    <span
      onClick={onClick}
      className="w-7 h-16 -right-7 absolute top-2/4 -translate-y-2/4 bg-neutral-50 rounded-r-lg flex items-center justify-center cursor-pointer"
    >
      <img src={Arrow} className="w-5" />
    </span>
  );
};

const Drawer = ({ open = false, onToggle, onClose, children }) => {
  const [isOpen, setIsOpen] = useState(open);
  const openDialog = typeof onToggle === "function" ? open : isOpen;

  const handleClick = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  const handleToggle = () => {
    if (openDialog) onClose();
    if (typeof onToggle === "function") onToggle();
    else handleClick();
  };

  return (
    <div
      className={`w-full max-w-2xl bg-neutral-50 absolute bottom-0 top-20 left-24 transition-all z-1 ${
        !openDialog && "-translate-x-full"
      }`}
    >
      {children}
      {openDialog && <Button onClick={handleToggle} />}
    </div>
  );
};

export default Drawer;
