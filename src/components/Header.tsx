import { Menu } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div>
      <header className="bg-slate-400 flex gap-5">
        <button type="button" onClick={handleOpenMenu} className="z-10 space-y-2 ml-3 my-3">
          <Menu />
        </button>
        <h1 className="text-2xl font-bold italic my-3">Shimoyama Shoki</h1>
        <nav className="mt-4 text-gray-800 flex gap-4 ml-auto mr-6">
          <a href="#aboutme">About Me</a>
          <a href="#career">Career</a>
          <a href="#skills">Skills</a>
          <a href="#project">Project</a>
        </nav>
      </header>
      {openMenu ? (
        <div className="absolute z-10 top-0 right-0  min-h-fit min-w-full">
          <div className="basis-1/2"></div>

          <nav className="flex flex-col basis-1/2 bg-white">
            <a href="#aboutme">About Me</a>
            <a href="#career">Career</a>
            <a href="#skills">Skills</a>
            <a href="#project">Project</a>
          </nav>
        </div>
      ) : undefined}
    </div>
  );
};

export default Header;
