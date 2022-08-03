const NavItem = ({ img, name, isClicked, onClick, ...rest }) => {
  return (
    <div
      role="button"
      className={`w-full flex flex-col items-center justify-center my-2 cursor-pointer p-4 ${
        isClicked && "bg-neutral-50"
      }`}
      onClick={onClick}
      {...rest}
    >
      <img className="w-9" src={img} alt="nav-item" />
      <span className="text-sm">{name}</span>
    </div>
  );
};

export default NavItem;
