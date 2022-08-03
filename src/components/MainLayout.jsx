import { useMainContext } from "../hooks/useMainContext";
import PlusIcon from "../assets/plus.png";
import MinusIcon from "../assets/minus.png";
import ArrowIcon from "../assets/Flecha.png";
const Actions = () => {
  return (
    <div className={`container absolute top-5 right-5 flex justify-end`}>
      <button className="bg-white p-2 rounded-lg w-24 mr-4">Fijar</button>
      <button className="bg-white p-2 rounded-lg w-24">Borrar</button>
    </div>
  );
};

const Arrow = ({ position, rotate }) => {
  return (
    <button className="flex basis-1/2 relative">
      <span className={`w-4 absolute ${position}`}>
        <img src={ArrowIcon} alt="go" className={rotate} />
      </span>
    </button>
  );
};

const Explorer = () => {
  return (
    <div className="container flex fixed bottom-3.5 right-5 justify-end">
      <div className="w-7 h-16 bg-white flex flex-col items-center justify-between rounded-md p-1">
        <span>
          <img src={MinusIcon} alt="less" />
        </span>
        <hr className="w-full" />
        <span>
          <img src={PlusIcon} alt="more" />
        </span>
      </div>
      <div className="flex w-16 h-16 bg-white rounded-md ml-5 flex-wrap">
        <Arrow position="-right-2 top-2" />
        <Arrow position="-bottom-2 left-2" rotate="rotate-90" />
        <Arrow position="-top-2 right-2" rotate="-rotate-90" />
        <Arrow position="-left-2 top-2" rotate="rotate-180" />
      </div>
    </div>
  );
};

const MainLayout = ({ children }) => {
  const { openDialog } = useMainContext();
  return (
    <div className="w-full pl-24 relative">
      <Explorer />
      {openDialog && <Actions />}
      {children}
    </div>
  );
};

export default MainLayout;
