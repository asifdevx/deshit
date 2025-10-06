import React from "react";
import Image from "next/image";
import { HeaderLists } from "@/config/HeaderLists";
import { useTheme } from "next-themes";
import { AiFillSun } from "react-icons/ai";
import { RxMoon } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const MobileMenu = ({ isOpen, onClose, activeLink, setactiveLink }: any) => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

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
        className={`fixed top-0 left-0  h-full w-64 bg-black text-white z-30 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between  px-4 py-12">
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
              {/* Divider line below each item */}
            </div>
          ))}
        </div>

        {/* Theme toggle button (optional) */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
          >
            {theme === "dark" ? (
              <>
                <AiFillSun className="text-yellow-400" /> Light Mode
              </>
            ) : (
              <>
                <RxMoon className="text-blue-400" /> Dark Mode
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
