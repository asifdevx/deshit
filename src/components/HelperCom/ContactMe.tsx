import React, { useEffect } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { gsap } from "gsap";

const ContactMe = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".hover-item");

    items.forEach((item) => {
      const text = item.querySelector(".hover-text") as HTMLElement;
      const underline = item.querySelector(".hover-underline") as HTMLElement;

      item.addEventListener("mouseenter", () => {
        gsap.to(text, { color: "rgb(19 215 253)", duration: 0.3 });
        gsap.to(underline, { scaleX: 1, transformOrigin: "left", duration: 0.5 });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(text, { color: "white", duration: 0.3 });
        gsap.to(underline, { scaleX: 0, transformOrigin: "right", duration: 0.5 });
      });
    });

    // Cleanup
    return () => {
      items.forEach((item) => {
        const newItem = item.cloneNode(true);
        item.replaceWith(newItem);
      });
    };
  }, []);

  return (
    <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-5">
      <div className="w-full flex flex-col items-center justify-center ">
        <h4>Contact us</h4>
        <div className="w-[260px] h-[1px] bg-[#D9D9D9B2]" />
      </div>

      <p className="text-[#8F8D8D] break-words tracking-wide">
        Are you looking for a dedicated Full Stack Developer to bring your
        vision to life? I specialize in delivering end-to-end solutions, from
        robust back-end architecture to engaging user interfaces. Let's discuss
        how I can leverage my expertise to help you build your next great
        application.
      </p>

      {/* Email */}
      <div className="flex items-center gap-2 hover-item relative">
        <MdOutlineEmail className="text-yellow" />
        <p className="hover-text font-bold text-lg cursor-pointer inline-block relative">
          CONTACT@COMPANY.COM
          <span className="hover-underline absolute left-0 -bottom-1 w-full h-[2px] bg-[rgb(19 215 253)] scale-x-0 origin-left"></span>
        </p>
      </div>

      <div className="w-[259px] h-1 bg-white/30 shadow-[0_0_10px_white]" />

      {/* Phone */}
      <div className="flex items-center gap-2 hover-item relative">
        <MdOutlineEmail className="text-yellow" />
        <p className="hover-text text-[#ADA9A6] relative cursor-pointer">
          (123)456-789
          <span className="hover-underline absolute left-0 -bottom-1 w-full h-[2px] bg-[#13fdfd] scale-x-0 origin-left"></span>
        </p>
      </div>

      <div className="w-[259px] h-1 bg-white/30 shadow-[0_0_10px_white]" />

      {/* Address */}
      <div className="flex items-center gap-2 hover-item relative">
        <MdOutlineEmail className="text-yellow" />
        <p className="hover-text relative cursor-pointer">
          794 MCALLISTER ST, ROAD-1256, <br />
          SAN FRANCISCO, 84102
          <span className="hover-underline absolute left-0 -bottom-1 w-full h-[2px] bg-blue-500 scale-x-0 origin-left"></span>
        </p>
      </div>
    </div>
  );
};

export default ContactMe;
