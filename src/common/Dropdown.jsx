import Chevron from "../assets/activo.png";

const Dropdown = ({ options, value, open, onClick, onToggle }) => {
  return (
    <div className="flex rounded-md justify-between bg-white divide-x w-52 relative py-2">
      <div className="flex items-center justify-center px-2 basis-4/5">
        {value}
      </div>
      <button
        className="flex items-center justify-center basis-1/5 cursor-pointer"
        onClick={onToggle}
      >
        <img src={Chevron} alt="view-options" className="-rotate-90 w-4" />
      </button>
      {open && (
        <div className="grid grid-cols-1 divide-y absolute left-0 right-0 top-[110%] bg-white rounded-b-md">
          {options.map((option) => (
            <div
              className="p-2 cursor-pointer"
              key={option.name}
              onClick={() => onClick(option.name)}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
