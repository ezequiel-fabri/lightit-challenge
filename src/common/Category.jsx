import Arrow from "../assets/activo.png";

const Category = ({ name, onClick }) => {
  return (
    <div
      className="flex justify-between items-center w-full rounded-lg bg-white p-3 mb-3"
      onClick={onClick}
    >
      <span>{name}</span>
      <img src={Arrow} alt="see" className="w-4 rotate-180" />
    </div>
  );
};

export default Category;
