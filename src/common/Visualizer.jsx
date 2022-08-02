const Visualizer = ({ items, title, category, onBack }) => {
  return (
    <div className="container px-8">
      <span
        className="text-sm cursor-pointer font-medium text-slate-800 my-4 block"
        onClick={onBack}
      >
        {`< ${category}`}
      </span>
      <h2 className="font-medium text-xl">{title}</h2>
      <div className="container flex justify-between flex-wrap">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex basis-3/12 w-12 h-56 flex-col items-center justify-center my-4"
          >
            <img src={item.img} alt="item" className="w-full h-full" />
            <span className="text-slate-600 font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Visualizer;
