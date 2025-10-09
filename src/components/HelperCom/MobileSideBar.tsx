
import React, { useEffect } from "react";
import Image from "next/image";
import { HeaderLists } from "@/config/HeaderLists";
import { IoCloseOutline } from "react-icons/io5";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeLink: string;
  setactiveLink: (link: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeLink,
  setactiveLink,
}) => {
  // ✅ Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle menu item click
  const handleItemClick = (route: string) => {
    setactiveLink(route);
    onClose();

    // Smooth scroll to section
    const section = document.querySelector(route);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Mobile sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-black/90 text-white z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-12">
          <Image src="/logo.png" alt="logo" width={50} height={40} />
          <button
            onClick={onClose}
            className="relative flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full overflow-hidden group"
          >
            {/* Animated background */}
            <span className="absolute inset-0 bg-blue-400 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out rounded-full origin-center" />
            {/* Close Icon */}
            <span className="relative z-10 text-xl text-blue-400 group-hover:text-black transition-colors duration-500">
              <IoCloseOutline size={25} />
            </span>
          </button>
        </div>

        {/* Menu items */}
        <div className="mt-6 flex flex-col">
          {HeaderLists.map((item, idx) => (
            <div key={idx} className="w-full px-2 mt-3 uppercase">
              <div className="w-full h-[1px] bg-gray-700/90" />
              <button
                onClick={() => handleItemClick(item.route)}
                className={`block px-4 py-2 w-full text-left text-sm transition ${
                  activeLink === item.route
                    ? "text-red-300 font-semibold"
                    : "text-white"
                }`}
              >
                {item.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;