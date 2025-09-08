import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <div>
      <header className="bg-[#9ad4fbff] flex gap-5 items-center relative z-20 p-3">
        <button type="button" onClick={toggleMenu} className="space-y-2">
          <Menu />
        </button>
        <h1 className="text-2xl font-bold italic ml-3">Shimoyama Shoki</h1>
        <nav className="hidden md:flex gap-4 ml-auto text-gray-800">
          <a href="#aboutme">About Me</a>
          <a href="#career">Career</a>
          <a href="#skills">Skills</a>
          <a href="#products">Products</a>
        </nav>
      </header>

      {openMenu && (
        <div className="fixed inset-0 bg-black/50 z-30 flex justify-end" onClick={toggleMenu}>
          <nav
            className="w-64 bg-white h-full p-6 flex flex-col gap-6"
            onClick={e => e.stopPropagation()}
          >
            <button onClick={toggleMenu} className="self-end">
              <X />
            </button>
            <a href="#aboutme" className="text-lg" onClick={toggleMenu}>
              About Me
            </a>
            <a href="#career" className="text-lg" onClick={toggleMenu}>
              Career
            </a>
            <a href="#skills" className="text-lg" onClick={toggleMenu}>
              Skills
            </a>
            <a href="#products" className="text-lg" onClick={toggleMenu}>
              Products
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
