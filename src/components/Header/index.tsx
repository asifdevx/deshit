import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { CiMenuFries } from "react-icons/ci";
import { HeaderLists } from "../../config/HeaderLists";
import MobileMenu from "../HelperCom/MobileSideBar";
import CustomBtn from "../ui/customBtn";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isScroll, setScroll] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setactiveLink] = useState<string>(HeaderLists[0].route);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleclick = (link: string, isIcon?: boolean) => {
    if (isIcon) {
      setTheme(theme === "dark" ? "light" : "dark");
    } else {
      setactiveLink(link);
    }
  };

  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div
      className={`w-full h-20 md:h-28 fixed top-0 left-0 z-50 text-white flex flex-col transition-all duration-500 ${
        isScroll
          ? "backdrop-blur-md bg-black/40 shadow-[0_4px_15px_rgba(0,0,0,0.5)]"
          : ""
      }`}
    >
      {/* Main Header */}
      <div className="max-screen w-full flex h-full justify-between items-center px-4">
        <a
          className="font-extrabold text-md md:text-[16px]/[22px] xl:text-xl text-white"
          href="#"
        >
          <span className="text-[#B94A5B]">ARAFAT</span> HOSSAIN SOBUJ
        </a>

        {/* Desktop Nav */}
        <div className="md:flex hidden items-center justify-between gap-4 lg:gap-5">
          {HeaderLists.map((items, idx) => (
            <a
              key={idx}
              onClick={() => handleclick(items.route)}
              href={items.route || "/"}
              className={`${
                activeLink === items.route &&
                "text-lg brightness-105 relative pb-[2px] before:absolute before:bottom-0 before:left-0 before:h-[4px] before:w-full before:bg-gradient-to-b before:from-[#F94A5B] before:to-[#6A4FFF] before:content-['']"
              } transition`}
            >
              {items.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <CustomBtn
            text={<CiMenuFries className="text-2xl" />}
            handleclick={toggleMobileMenu}
            othercss=""
          />
          <MobileMenu
            isOpen={isMenuOpen}
            onClose={toggleMobileMenu}
            activeLink={activeLink}
            isScroll={isScroll}
            setactiveLink={setactiveLink}
          />
        </div>
      </div>

      {/* Animated Line (visible only when not scrolled) */}
      <div
  className={`relative h-[1px] bg-lineColor w-full overflow-hidden transition-opacity duration-700 ${
    isScroll ? "opacity-0" : "opacity-100"
  }`}
>
  <div
    className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-[#fffffffd] to-transparent animate-movingLine rounded-sm shadow-[0_0_10px_rgba(249,74,91,0.6)]"
  />
</div>
    </div>
  );
};

export default Header;
