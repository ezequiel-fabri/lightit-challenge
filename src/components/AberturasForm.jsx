import { useEffect, useState } from "react";
import { getAberturas, getEquipamientos, getTerminaciones } from "../service";
import { useFetch } from "../hooks/useFetch";
import Arrow from "../assets/activo.png";

const services = {
  Aberturas: getAberturas,
  Equipamiento: getEquipamientos,
  Terminaciones: getTerminaciones,
};

const Visualizer = ({ items, title, category, onBack }) => {
  console.log(category);
  return (
    <div className="container">
      <span
        className="text-sm cursor-pointer"
        onClick={onBack}
      >{`< ${category}`}</span>
      <h2 className="font-medium text-xl">{title}</h2>
      <div className="container flex jusify-between flex-wrap">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex basis-1/3 w-12 h-56 flex-col items-center justify-center my-4"
          >
            <img src={item.img} alt="item" className="w-full h-full" />
            <span className="text-slate-600 font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

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

const AberturasForm = ({ category = "Aberturas" }) => {
  const [data, isLoading] = useFetch(category, []);
  const [currentCategory, setCurrenCategory] = useState({});

  if (currentCategory.name)
    return (
      <Visualizer
        items={currentCategory.items}
        title={currentCategory.name}
        onBack={() => setCurrenCategory({})}
        category={category}
      />
    );

  return (
    <div className="container w-full p-5">
      <h3 className="text-gray-800 font-semibold text-xl mb-5">{category}</h3>
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="container text-slate-800">
          {data.map((category) => (
            <Category
              key={category.name}
              name={category.name}
              items={category.items}
              onClick={() => setCurrenCategory(category)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AberturasForm;
