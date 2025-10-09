import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionHeading = ({
  title,
  hasDes,
  description,
}: {
  title: string;
  hasDes: boolean;
  description?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });

    tl.from(imgRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
    tl.from(titleRef.current, {
      y:100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
    },  "<" 
    );
    tl.from(descRef.current, {
      y: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
    }, "<0.2");
  });

  return (
    <div
      ref={containerRef}
      className="max-screen flex flex-col items-start gap-3 "
    >
      <div className="flex items-center gap-2">
        <Image
          ref={imgRef}
          src={"/logOut.png"}
          width={70}
          height={70}
          alt="section_icon"
          className="object-contain rounded-full"
        />
        <h1 ref={titleRef} className="font-SemiBold text-2xl md:text-5xl">
          {" "}
          {title}
        </h1>
      </div>
      {hasDes && (
        <p
          ref={descRef}
          className="text-[#DBB9B9BA] w-full md:w-5/6 break-words text-base"
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
