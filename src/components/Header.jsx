import { useState } from "react";
import { dropdownOptions } from "../constants";
import Logo from "../common/Logo";
import Dropdown from "../common/Dropdown";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [optionSelected, setOptionSelected] = useState(dropdownOptions[0].name);

  const handleSelect = (option) => {
    setOpenMenu(false);
    setOptionSelected(option);
  };

  return (
    <div className="bg-zinc-900 w-full h-20">
      <div className="container md mx-auto flex justify-between items-center p-4">
        <div className="flex-none text-slate-300">
          <div className="flex items-center cursor-pointer">
            <Logo />
            <span className="text-lg">Home</span>
          </div>
        </div>
        <Dropdown
          options={dropdownOptions}
          value={optionSelected}
          open={openMenu}
          onToggle={() => setOpenMenu((prev) => !prev)}
          onClick={handleSelect}
        />
      </div>
    </div>
  );
};

export default Header;
