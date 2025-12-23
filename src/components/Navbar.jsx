// import FaBars from "react-icons/fa";
// import IoCloseSharp from "react-icons/io";

import menu from "../images/menu.svg";
import close from "../images/close.svg";

import { useState } from "react";

import { navLinks } from "../data";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-center items-center navbar z-10 mb-5 sm:mb-0 px-5 xl:px-10 2xl:px-20">
      <div className="w-full flex justify-between items-center max-w-[760px]">
        <a href="/">
          <p className="text-2xl text-gray-200 font-bold font-mono">Chinedum.</p>
        </a>

        <div className="">
          <ul className="list-none sm:flex hidden justify-center gap-2 items-center flex-1">
            {/* <li className="text-gray-300 text-[17px] font-[600] hover:font-[700] hover:text-[#1f75fe] leading-[22px] hover:cursor-pointer z-10 poppins mr-10">
              <a href="/blog"> Blog</a>
            </li> */}
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className={`text-gray-300 text-sm font-[600] font-mono hover:font-[700] hover:text-[#1f75fe] leading-[22px] hover:cursor-pointer z-10 poppins ${index === navLinks.length - 1 ? "mr-0" : "mr-3"
                  }`}
              >
                <a href={`${nav.url ? nav.url : `#${nav.id}`}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 justify-end items-center z-20">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-5 h-5 object-contain z-20"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${toggle ? "flex flex-col " : "hidden"
              } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1 ">
              <li className="text-gray-300 text-[17px] font-[600] hover:font-[700] hover:text-[#1f75fe] leading-[22px] hover:cursor-pointer z-10 poppins mb-4">
                <a href="/blog"> Blog</a>
              </li>
              {navLinks.map((nav, index) => (
                <li
                  key={index}
                  className={`font-mono font-normal cursor-pointer text-[16px] hover:font-[700] hover:text-[#1f75fe] z-10 ${index === navLinks.length - 1 ? "mb-0" : "mb-4"
                    } text-white`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
