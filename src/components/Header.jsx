const Header = () => {
  return (
    <div className="bg-zinc-900 w-full h-20">
      <div className="container md mx-auto flex justify-between p-4">
        <div className="flex-none text-slate-300">
          <div className="logo">Logo</div>
          <div className="edit">Editar medidas</div>
        </div>
        <div className="flex-none text-slate-300">
          <div className="new">Nuevo proyecto</div>
          <div className="edit">Guardar y salir</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
