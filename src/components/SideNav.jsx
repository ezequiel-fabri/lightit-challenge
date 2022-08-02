import { useState } from "react";
import Drawer from "./Drawer";
import Item1 from "../assets/Aberturas.png";
import Item2 from "../assets/Equipamiento.png";
import Item3 from "../assets/Terminaciones.png";
import AberturasForm from "./AberturasForm";

const SideNav = () => {
  const [open, setOpen] = useState(false);
  const [buttonClicked, setButtonClicked] = useState("");
  const toggleDialog = () => setOpen((prevValue) => !prevValue);

  const handleClick = (event) => {
    setOpen(true);
    setButtonClicked(event.currentTarget.id);
  };

  const onCloseDialog = () => setButtonClicked("");

  return (
    <>
      <div className="flex w-24 bg-white fixed bottom-0 top-20 z-10">
        <nav className="flex flex-col items-center justify-center w-full text-slate-400">
          <div
            id="0"
            className={`w-full flex flex-col items-center justify-center my-2 cursor-pointer p-4 ${
              buttonClicked === "0" && "bg-neutral-50"
            }`}
            onClick={handleClick}
          >
            <img className="w-9" src={Item1} />
            <span className="text-sm">Aberturas</span>
          </div>
          <div
            id="1"
            className={`w-full flex flex-col items-center justify-center my-2 cursor-pointer p-4 ${
              buttonClicked === "1" && "bg-neutral-50"
            }`}
            onClick={handleClick}
          >
            <img className="w-9" src={Item2} />
            <span className="text-sm">Equipamiento</span>
          </div>
          <div
            id="2"
            className={`w-full flex flex-col items-center justify-center my-2 cursor-pointer p-4 ${
              buttonClicked === "2" && "bg-neutral-50"
            }`}
            onClick={handleClick}
          >
            <img className="w-9" src={Item3} />
            <span className="text-sm">Terminaciones</span>
          </div>
        </nav>
      </div>
      <Drawer open={open} onToggle={toggleDialog} onClose={onCloseDialog}>
        <AberturasForm />
      </Drawer>
    </>
  );
};

export default SideNav;
