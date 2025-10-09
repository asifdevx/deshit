import { SocialIcon } from "@/config/HeaderLists";
import { cn } from "@/utils/cn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "usehooks-ts";
import AnimatedBorder from "../ui/moving-border";

const index = () => {
  const desktop = useMediaQuery("(min-width: 768px)");

  const frame1Ref = useRef(null);
  const frame2Ref = useRef(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(iconsRef.current, {
      y: -100,
      opacity: 0,
      delay:0.5,
      duration: 1,
      ease: "bounce.out",
    });
  });
  useEffect(() => {
    gsap.to(frame1Ref.current, {
      y: -20,
      x: 10,
      rotation: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(frame2Ref.current, {
      y: 15,
      x: -15,
      rotation: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);
  return (
    <section
      id="home"
      className="mt-14 max-screen flex h-full flex-col md:flex-row gap-5 md:gap-0 justify-center items-center justtify_content_center md:justify-between text-white"
    >
      {/* -------para---------- */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:items-start gap-8">
        <h4 className="text-[22px] md:text-[1.9rem] ">
          I AM <span className="text-[#B94A5B]">ARAFAT</span> HOSSAIN SOBUJ
        </h4>
        <div className="bg-[#2A2A3A94] text-lg rounded-lg p-4 font-bold text-center md:text-start md:text-normal-case break-words  ">
          Full-Stack Mobile App Developer | 9+ Years Experience Expert in
          Flutter & Node.js | 40+ Successful Projects Delivered
        </div>
        <h3 className="font-semibold text-3xl w-full md:w-3/4 tracking-[2px]">
          Maximize Your Business{" "}
          <span className="text-[#B94A5B]">Potential</span> with Custom Web
          Development <span className="text-[#6A4FFF]">Solutions!</span>
        </h3>
        <p className="text-[#DBB9B9] w-full md:w-[60%]">
          Take your business to the next level with custom web development
          solutions.
        </p>
        <div className="w-full flex flex-col md:flex-row md:items-center items-start gap-3 md:gap-10">
          <AnimatedBorder
            title="Get In Touch"
            arrow="&rarr;"
            borderRadius="2.5px"
          />
          <AnimatedBorder title="Download CV" borderRadius="2.5px" />
        </div>
      </div>
      {/* -------Image---------- */}
      <div className="md:w-1/2 w-[80%] flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center relative">
          <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full p-[8px] bg-profile_backCir_bg">
            <div className="absolute w-full h-full bg-[#D9D9D921] rounded-full z-10 top-[2px] left-[20px]" />
            <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
              <Image
                src="/profile.png"
                alt="profile"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -left-8 md:-left-14 top-1/2 -translate-y-1/2 z-20">
              <Image
                src={"/frame1.svg"}
                ref={frame1Ref}
                alt={"profile"}
                width={desktop ? 130 : 90}
                height={desktop ? 130 : 90}
                className=" object-contain pointer-events-none"
              />
            </div>
            <div className="absolute -right-9 md:-right-[3.5rem] top-1/2 -translate-y-1/2 z-20">
              <Image
                src={"/frame2.svg"}
                alt={"profile"}
                ref={frame2Ref}
                width={desktop ? 130 : 90}
                height={desktop ? 130 : 90}
                className=" object-contain pointer-events-none"
              />
            </div>
          </div>
        </div>
        <div
          ref={iconsRef}
          className="flex items-center mb-3 justify-center gap-6 "
        >
          {SocialIcon.map((item, idx) => (
            <Image
              key={idx}
              src={`${item}.svg`}
              width={40}
              height={40}
              alt={`${item}.svg`}
              className={cn(
                "border-2 border-white rounded-full  ",
                (idx === 1 || idx === 2) && "translate-y-8"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
