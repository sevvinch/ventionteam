import React from 'react';
import { FaChevronDown } from "react-icons/fa";
import { LuGlobe } from "react-icons/lu";
import Logo from "./../public/assets/logo.svg";

const Navbar = () => {
  return (
    <header>
    <nav className="border mb-6 static">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center border-r pr-[300px]">
          <a href="/" className="">
            <img src={Logo} alt="" className='w-[100px] ml-[-15px]' />
          </a>
        </div>
        <div className="flex items-center space-x-20 pr-[20px]">
          <div className="relative group">
            <button className="inline-flex items-center hover:text-[#52002D]">
              What we do
              <FaChevronDown className="ml-1 mt-[4px] transform transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="absolute hidden group-hover:block bg-orange-400 shadow-lg mt-[17px] ml-[-37px] w-screen h-[100vh] left-0 top-full">
              <p className='bg-transparent p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, facere fugiat quasi tempora dolores ullam temporibus labore, est at eum dignissimos delectus quod rerum asperiores dicta veritatis tenetur enim provident.</p>
            </div>
          </div>
          <a href="/portfolio" className="hover:text-[#52002D]">Portfolio</a>
          <a href="/insights" className="hover:text-[#52002D]">Insights</a>
          <div className="relative group">
            <button className="inline-flex items-center hover:text-[#52002D]">
              About us
              <FaChevronDown className="ml-1 mt-[4px] transform transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-1 rounded">
              <a href="/team" className="block px-4 py-2 hover:bg-gray-200">Our Team</a>
              <a href="/mission" className="block px-4 py-2 hover:bg-gray-200">Our Mission</a>
            </div>
          </div>
          <a href="/contact" className="py-[17px] px-[23px] bg-[#FF6A47] hover:bg-[#52002D] hover:text-white">Contact us</a>
          <button className="focus:outline-none">
            <LuGlobe className='w-6 h-6 ml-[-15px]' />
          </button>
        </div>
      </div>
    </nav>
    </header>

  );
}

export default Navbar;
