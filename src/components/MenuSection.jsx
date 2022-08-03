import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Visualizer from "../common/Visualizer";
import Category from "../common/Category";

const MenuSection = ({ category = "Aberturas" }) => {
  const [data, isLoading] = useFetch(category, []);
  const [currentCategory, setCurrenCategory] = useState({});
  const resetCategory = () => setCurrenCategory({});

  useEffect(() => {
    // reset current selected category if user selects another item in the menu
    resetCategory();
  }, [category]);

  if (currentCategory.name)
    return (
      <Visualizer
        items={currentCategory.items}
        title={currentCategory.name}
        // fired when user click on breadcrumb
        onBack={resetCategory}
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

export default MenuSection;
