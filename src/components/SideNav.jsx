import { useState } from "react";
import Drawer from "./Drawer";
import Item1 from "../assets/Aberturas.png";
import Item2 from "../assets/Equipamiento.png";
import Item3 from "../assets/Terminaciones.png";
import AberturasForm from "./AberturasForm";

const NavItem = ({ img, name, isClicked, onClick, ...rest }) => {
  return (
    <div
      className={`w-full flex flex-col items-center justify-center my-2 cursor-pointer p-4 ${
        isClicked && "bg-neutral-50"
      }`}
      onClick={onClick}
      {...rest}
    >
      <img className="w-9" src={img} />
      <span className="text-sm">{name}</span>
    </div>
  );
};

const menu = [
  { name: "Aberturas", id: 0, icon: Item1 },
  { name: "Equipamiento", id: 1, icon: Item2 },
  { name: "Terminaciones", id: 2, icon: Item3 },
];

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
          {menu.map((navItem) => (
            <NavItem
              key={navItem.id}
              name={navItem.name}
              img={navItem.icon}
              isClicked={buttonClicked === navItem.name}
              onClick={() => {
                setOpen(true);
                setButtonClicked(navItem.name);
              }}
            />
          ))}
        </nav>
      </div>
      <Drawer open={open} onToggle={toggleDialog} onClose={onCloseDialog}>
        {open && <AberturasForm category={buttonClicked} />}
      </Drawer>
    </>
  );
};

export default SideNav;
