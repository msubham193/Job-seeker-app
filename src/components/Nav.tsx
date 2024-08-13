import React, { useState } from "react";
import { Menu } from "lucide-react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between p-4 border-b w-full bg-white px-10 fixed z-50">
      <div className="flex items-center space-x-2">
        <img
          src="/job.png"
          alt="Jobstera Logo"
          className="w-10 h-10"
          width="40"
          height="40"
          style={{ aspectRatio: "40/40", objectFit: "cover" }}
        />
        <div>
          <h1 className="text-lg font-bold">Jobstera</h1>
          <p className="text-sm text-gray-500">The Ultimate for Job Seekers</p>
        </div>
      </div>
      <nav className="hidden md:flex items-center space-x-4">
        <a href="#" className="text-gray-700">
          Find jobs
        </a>
        <a href="#" className="text-gray-700">
          For recruiters
        </a>
        <a href="#" className="text-gray-700">
          Blog
        </a>
        <a href="#" className="text-gray-700">
          Career tips
        </a>
      </nav>
      <div className="hidden md:flex items-center space-x-4">
        <a href="#" className="text-gray-700">
          Login
        </a>
        <button className="px-4 py-1 text-blue-500 border-2 border-blue-500 rounded-full">
          Register Now
        </button>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-700">
          <Menu />
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center z-40">
          <nav className="flex flex-col items-center space-y-4">
            <a href="#" className="text-gray-700">
              Find jobs
            </a>
            <a href="#" className="text-gray-700">
              For recruiters
            </a>
            <a href="#" className="text-gray-700">
              Blog
            </a>
            <a href="#" className="text-gray-700">
              Career tips
            </a>
          </nav>
          <div className="flex flex-col items-center space-y-4 mt-4">
            <a href="#" className="text-gray-700">
              Login
            </a>
            <button className="px-4 py-1 text-blue-500 border-2 border-blue-500 rounded-full">
              Register Now
            </button>
          </div>
          <button
            onClick={toggleMenu}
            className="mt-8 text-gray-700 border-2 border-gray-700 px-4 py-1 rounded-full"
          >
            Close
          </button>
        </div>
      )}
    </header>
  );
};

export default Nav;
