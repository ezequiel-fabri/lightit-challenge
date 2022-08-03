import { useState } from "react";
import { dropdownOptions } from "../constants";
import Logo from "../common/Logo";
import Chevron from "../assets/activo.png";

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
        <div className="flex rounded-md justify-between bg-white divide-x w-52 relative py-2">
          <div className="flex items-center justify-center px-2 basis-4/5">
            {optionSelected}
          </div>
          <button
            className="flex items-center justify-center basis-1/5 cursor-pointer"
            onClick={() => setOpenMenu((prevValue) => !prevValue)}
          >
            <img src={Chevron} alt="view-options" className="-rotate-90 w-4" />
          </button>
          {openMenu && (
            <div className="grid grid-cols-1 divide-y absolute left-0 right-0 top-[110%] bg-white rounded-b-md">
              {dropdownOptions.map((option) => (
                <div
                  className="p-2 cursor-pointer"
                  key={option.name}
                  onClick={() => handleSelect(option.name)}
                >
                  {option.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
