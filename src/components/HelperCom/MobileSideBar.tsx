import React from "react";
import Image from "next/image";
import { HeaderLists } from "@/config/HeaderLists";
import { useTheme } from "next-themes";
import { IoCloseOutline } from "react-icons/io5";

const MobileMenu = ({ isOpen, onClose, activeLink, setactiveLink }: any) => {


  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 opacity-50 bg-black z-20"
          onClick={onClose}
        />
      )}

      {/* Mobile menu panel */}
    <div
  className={`fixed top-0 left-0 h-full w-72 bg-black/90 text-white z-30 transform transition-all duration-500 ${
    isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
  }`}
>
        {/* Header */}
        <div className="flex items-center justify-between  px-4 pt-12">
          <Image src="/logo.png" alt="logo" width={50} height={40} />
          <button
            onClick={onClose}
            className="relative flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full overflow-hidden group"
          >
            {/* Animated background */}
            <span className="absolute inset-0 bg-blue-400 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out rounded-full origin-center" />

            {/* Icon */}
            <span className="relative z-10 text-xl text-blue-400 group-hover:text-black transition-colors duration-500">
              <IoCloseOutline size={25}/>
            </span>
          </button>
        </div>

        {/* Menu items */}
        <div className="mt-2 flex flex-col">
          {HeaderLists.map((item, idx) => (
            <div key={idx} className="w-full px-2 mt-3 uppercase ">
              <div className="w-full h-[1px] bg-gray-700/90" />
              <a
                href={item.route || "#"}
                onClick={() => {
                  setactiveLink(item.route);
                  onClose();
                }}
                className={`block px-4 py-2 w-full transition text-sm ${
                  activeLink === item.route && idx < 5
                    ? "text-red-300 "
                    : "text-white"
                }`}
              >
                {item.label}
              </a>
            
            </div>
          ))}
        </div>

     
      </div>
    </>
  );
};

export default MobileMenu;
