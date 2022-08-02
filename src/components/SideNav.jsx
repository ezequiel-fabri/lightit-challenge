import { useState } from "react";
import { menu } from "../constants";
import Drawer from "./Drawer";
import MenuSection from "./MenuSection";
import NavItem from "../common/NavItem";

const SideNav = () => {
  const [open, setOpen] = useState(false);
  const [buttonClicked, setButtonClicked] = useState("");
  const toggleDialog = () => setOpen((prevValue) => !prevValue);

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
        {open && <MenuSection category={buttonClicked} />}
      </Drawer>
    </>
  );
};

export default SideNav;
