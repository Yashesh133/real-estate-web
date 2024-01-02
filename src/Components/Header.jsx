import React, { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='flex justify-center p-4'>
      <div className='container flex justify-between text-white items-center relative'>
        <div className=''>
          <img width={'100px'} src='./logo.png' alt='logo' />
        </div>
        <div className='hidden md:flex gap-4'>
          <span className='p-4 text-gray-400 cursor-pointer'>Residencies</span>
          <span className='p-4 text-gray-400 cursor-pointer'>Our Value</span>
          <span className='p-4 text-gray-400 cursor-pointer'>Contact Us</span>
          <span className='p-4 text-gray-400 cursor-pointer'>Get Started</span>
          <button className='py-2 px-5 bg-blue-600 rounded transition-all ease-in-out duration-200 hover:scale-105'>
            Contact
          </button>
        </div>
        <div className='md:hidden' onClick={handleOpenMenu}>
          <BiMenuAltRight className='h-8 w-8 cursor-pointer' />
        </div>
      </div>
      <OutsideClickHandler onOutsideClick={() => setMenuOpen(false)}>
        {menuOpen && (
          <div className='bg-white text-black border rounded-xl flex flex-col absolute top-[8%] right-[5%] md:hidden p-3 z-10'>
            <span className='p-4 text-gray-400 cursor-pointer'>Residencies</span>
            <span className='p-4 text-gray-400 cursor-pointer'>Our Value</span>
            <span className='p-4 text-gray-400 cursor-pointer'>Contact Us</span>
            <span className='p-4 text-gray-400 cursor-pointer'>Get Started</span>
            <button className='py-2 px-5 bg-blue-600 rounded transition-all ease-in-out duration-200 text-white hover:scale-105'>
              Contact
            </button>
          </div>
        )}
      </OutsideClickHandler>
    </div>
  );
};

export default Header;
