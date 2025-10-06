import { SocialIcon } from "@/config/HeaderLists";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useMediaQuery } from "usehooks-ts";

const index = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  return (
    <div className="mt-14 max-screen flex h-full flex-col md:flex-row gap-5 md:gap-0 justify-center items-center justtify_content_center md:justify-between text-white">
      {/* -------para---------- */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:items-start gap-8">
        <h4 className="">
          I AM <span className="text-[#B94A5B]">ARAFAT</span> HOSSAIN SOBUJ
        </h4>
        <div className="bg-[#2A2A3A94] text-lg rounded-lg p-4 font-bold text-justify md:text-normal-case break-words  ">
          Full-Stack Mobile App Developer | 9+ Years Experience Expert in
          Flutter & Node.js | 40+ Successful Projects Delivered
        </div>
        <h3 className="font-semibold text-3xl w-full md:w-3/4 tracking-[2px]">
          Maximize Your Business{" "}
          <span className="text-[#B94A5B]">Potential</span>{" "}
          with Custom Web Development{" "}
          <span className="text-[#6A4FFF]">Solutions!</span>
        </h3>
        <p className="text-[#DBB9B9] w-full md:w-[60%]">
          Take your business to the next level with custom web development
          solutions.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <button className="bg-btnBg px-3 py-2 flex items-center gap-1 rounded-[4px] shadow-lg">
            <p> Get In Touch</p>
            <FaArrowRight fontSize={24} />
          </button>
          <button className="bg-btnBg px-3 py-2 flex items-center gap-1 rounded-[4px] shadow-lg text-white">
            Download CV
          </button>
        </div>
      </div>
      {/* -------Image---------- */}
      <div className="md:w-1/2 w-[80%] flex flex-col items-center justify-center   ">
        <div className="w-full flex flex-col items-center justify-center relative">
          <div className="w-full absolute inset-0 flex items-center justify-center">
            <div className="absolute w-[15rem] h-[15rem] small:w-[16rem] small:h-[16rem] md:w-[21rem] md:h-[21rem] bg-profile_backCir_bg rounded-full z-0" />
            <div className="absolute w-60 h-60 md:w-80 md:h-80 bg-[#D9D9D921] rounded-full z-20  translate-x-7 " />
          </div>
          <div className="absolute inset-0 flex items-center justify-around md:justify-between px-8 sm:px-10 md:px-16 lg:px-4  lg:justify-around xl:justify-center  z-40">
            <Image
              src={"/frame1.svg"}
              alt={"profile"}
              width={130}
              height={130}
              className=" object-contain px-3 py-2 relative right-12 small:right-7 sm:right-1 md:right-16 lg:right-12  rounded-full "
            />
            <Image
              src={"/frame2.svg"}
              alt={"profile"}
              width={130}
              height={130}
              className=" object-contain px-3 py-2 relative left-14 small:left-9 sm:left-6 md:left-16  rounded-full"
            />
          </div>
          <Image
            src={"/profile.png"}
            alt={"profile"}
            width={desktop ? 320 : 250}
            height={200}
            className="rounded-full object-contain px-3 py-2 relative"
          />
        </div>
        <div className="flex items-center  justify-center gap-6 ">
          {SocialIcon.map((item, idx) => (
            <Image
              key={idx}
              src={`${item.name}.svg`}
              width={40}
              height={40}
              alt={`${item.name}.svg`}
              className={cn(
                "object-fit",
                (idx === 1 || idx === 2) && "translate-y-8",
                
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
