import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";

const Navbar3 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="relative w-full h-20 bg-white flex justify-between items-center px-4">
      
      {/* Menu Icon */}
      <IoMenu
        className="z-20 text-black cursor-pointer"
        size={25}
        onClick={toggleMenu}
      />
      {/* Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-black bg-opacity-50 z-10 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          width: "100%", // You can adjust the menu width
        }}
      >
        <ul className="text-gray-300 px-4 py-7 space-y-4">
          <li className="cursor-pointer hover:text-white">Home</li>
          <li className="cursor-pointer hover:text-white">Destinations</li>
          <li className="cursor-pointer hover:text-white">Reservations</li>
          <li className="cursor-pointer hover:text-white">ChatBot</li>
          <li className="cursor-pointer hover:text-white">About</li>
          <li className="cursor-pointer hover:text-white">Rooms</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar3;


