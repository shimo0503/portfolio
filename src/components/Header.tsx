import { useState } from 'react';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div>
      <header>
        <div className="">hello</div>
        <button type="button" onClick={handleOpenMenu} className="bg-sky-100"></button>
      </header>
    </div>
  );
};

export default Header;
