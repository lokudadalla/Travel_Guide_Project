import React from 'react';
import Navbar2 from './Navbar2.jsx';
import img1 from "../assets/images/img1.jpg";
import NavigationButton2 from './NavButton2.jsx';

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <img
        src={img1}
        alt="Full screen"
        className="top-0 left-0 w-full h-screen object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50"></div>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-center z-10">
        <h2 className="text-6xl font-bold text-white px-6 py-2">Welcome to Sri Lanka</h2>
        <p className="text-2xl text-white mb-4">This is your Dream Destination</p>
        {/* <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
          Explore
        </button> */}
        <NavigationButton2 />
      </div>
    </div>
  );
};

export default Hero;
