import React from "react";
import Image from "next/image";
import { AboutList } from "@/config/AboutList";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  useGSAP(() => {
    const counters = gsap.utils.toArray<HTMLElement>(".counter");
    counters.forEach((item) => {
        const target = Number(item.dataset.target) || 0;
        const obj = { value: 0 };
  
        gsap.to(obj, {
          value: target,
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
          onUpdate: () => {
            item.innerText = Math.floor(obj.value).toString() + "+";
          },
        });
      });
    });
  
  return (
    <section className="max-screen w-full mt-12" id="about">
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center bg-cardBg rounded-[30px] px-6 md:px-14 py-10">
        {AboutList.map(({ img, count, title }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-center gap-2"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full ">
              <Image
                src={`${img}.svg`}
                alt={title}
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-white counter" data-target={count}>
              0+
            </h3>
            <p className="text-sm text-gray-300">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
