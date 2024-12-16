import Image from "next/image";
import React from "react";
import logo from "@/../public/logo.9ff76f62.png";
import { Menu } from "lucide-react";
const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-4">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center relative">
        <Image
          src={logo}
          alt="Logo"
          width={50}
          height={22}
          className="absolute top-4  z-50"
        />

        <div className="text-2xl font-extrabold ml-28 text-[#b9d8f3 hidden lg:block ">
          Tuition Free Education Program on Latest Technologies
        </div>
        <div className="text-[16px] font-extrabold ml-14 mr-2 text-[#b9d8f3] lg:hidden">
          Tuition Free Program
        </div>
        <nav className="hidden sm:block">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Apply
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Result
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Courses
              </a>
            </li>
          </ul>
        </nav>
        <div className="sm:hidden">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
