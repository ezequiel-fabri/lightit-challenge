import Arrow from "../assets/activo.png";

const AberturasForm = () => {
  return (
    <div className="container w-full p-5">
      <h3 className="text-gray-800 font-semibold text-xl mb-5">Aberturas</h3>
      <div className="container text-slate-800">
        <div className="flex justify-between items-center w-full rounded-lg bg-white p-3 mb-3">
          <span>Puertas</span>
          <img src={Arrow} alt="see" className="w-4 rotate-180" />
        </div>
        <div className="flex justify-between items-center w-full rounded-lg bg-white p-3">
          <span>Ventanas</span>
          <img src={Arrow} alt="see" className="w-4 rotate-180" />
        </div>
      </div>
    </div>
  );
};

export default AberturasForm;
