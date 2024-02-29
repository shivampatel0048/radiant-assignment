import React, { useState } from 'react';
import { Search_Icon, menu_icon } from '../assets/Images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nav = [
    { name: 'Categories', href: '#' },
    { name: 'Website Builders', href: '#' },
    { name: 'Today\'s Deals', href: '#' },
  ];

  return (
    <nav className="h-16 w-full bg-[#212731] flex justify-center items-center px-6">
      <div className="flex items-center space-x-24">
        <div className="relative">
          <input type="text" className="h-9 px-10 w-full sm:w-52 text-black outline-none rounded-lg" />
          <img
            src={Search_Icon}
            alt="search icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2"
          />
        </div>
        {nav.map((item, index) => (
          <a key={index} href={item.href} className="text-white hidden md:block">
            {item.name}
          </a>
        ))}
        <img
          src={menu_icon}
          alt="menu icon"
          className="text-white md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        {isMenuOpen && (
          <div className="absolute top-16 right-0 w-1/2 text-center bg-[#212731] text-white shadow-lg rounded-lg mt-2 py-2 animate-slide-in-right">
            {nav.map((item, index) => (
              <a key={index} href={item.href} className="block px-4 py-2">
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
