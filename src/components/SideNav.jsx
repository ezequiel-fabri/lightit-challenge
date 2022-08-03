import { useState } from "react";
import { menu } from "../constants";
import { useMainContext } from "../hooks/useMainContext";
import Drawer from "./Drawer";
import MenuSection from "./MenuSection";
import NavItem from "../common/NavItem";

const SideNav = () => {
  const { openDialog, handleToggle, handleOpen } = useMainContext();
  const [buttonClicked, setButtonClicked] = useState("");

  const onCloseDialog = () => {
    setButtonClicked("");
  };

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
                handleOpen();
                setButtonClicked(navItem.name);
              }}
            />
          ))}
        </nav>
      </div>
      <Drawer onToggle={handleToggle} onClose={onCloseDialog}>
        {openDialog && <MenuSection category={buttonClicked} />}
      </Drawer>
    </>
  );
};

export default SideNav;
