import React, { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import SectionHeading from "../HelperCom/sectionHeading";
import { ServiceList } from "@/config/ServiceList";
import { FaArrowRight } from "react-icons/fa";
import AnimatedBorder from "../ui/moving-border";
import { InteractiveCard } from "../ui/interactive";
import { MotionInteractiveCard } from "../ui/MotionInteractiveCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Service = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".contact-card", {
        x: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".contact-text > *",
          {
            y: 30,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }, section);

    return () => ctx.revert();
  }, []);
  return (
    <section
      className="max-screen w-full flex flex-col mt-10 gap-7"
      id="service"
    >
      <SectionHeading
        title="My Services"
        description="I am a highly experienced Full-Stack Mobile App Developer with over seven years in the industry. I specialize in Flutter for mobile
          development and Node.js for backend solutions. With a deep
          understanding of scalable architectures, I have successfully delivered
          40+ high-performance applications across various industries, ensuring
          seamless user experiences and efficient backend systems."
        hasDes={true}
      />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-xl">
        {ServiceList.map(({ title, des, img }, idx) => (
          <MotionInteractiveCard
            key={idx}
            className="flex interactive-card hover:border-[#60a5fa] flex-col items-center md:items-start justify-between border border-gray-800 rounded-2xl p-6 transition-all duration-500  animated-gradient-border"
          >
            {/* Image */}
            <div className="relative w-24 h-24 mb-4 flex items-center justify-center rounded-xl bg-cardBg">
              <div className="w-[4.5rem] h-[4.5rem] relative">
                <Image src={img} alt={title} fill className="object-contain" />
              </div>
            </div>

            {/* Title */}
            <h4 className="text-lg font-semibold text-white mb-2 transition-colors">
              {title}
            </h4>

            {/* Description */}
            <p className="description text-gray-400 text-sm leading-relaxed mb-4  relative z-10">
              {des}
            </p>

            {/* Link */}
            <AnimatedBorder
              title="Learn more"
              arrow="&rarr;"
              borderRadius="300px"
            />
          </MotionInteractiveCard>
        ))}
      </div>
      {/* -------------Contract me ------  */}
      <div ref={sectionRef} className="flex flex-col md:flex-row items-center justify-center gap-8 mt-6">
        <div className="flex items-center justify-center">
          <InteractiveCard className="w-80 h-64 relative ">
            <Image
              src={"/service_contact.svg"}
              fill
              alt="service"
              className="object-contain pointer-events-none "
            />
          </InteractiveCard>
        </div>
        <div className="flex flex-col items-start gap-3 contact-text">
          <div className="flex gap-2 items-center justify-center">
            <Image
              src={"/profile_icon.svg"}
              width={20}
              height={20}
              alt="profile"
            />
            <p className="text-[22px] md:text-[1.9rem] ">
              I AM <span className="text-[#B94A5B]">ARAFAT</span> HOSSAIN SOBUJ
            </p>
          </div>
          <h5>A Full Stack Web Developer</h5>
          <p className="text-[#DBB9B9BA] leading-relaxed">
            As a Full Stack Web Developer, I am responsible for designing and
            building complete web applications from start to finish. This
            includes creating user interfaces, writing server-side code, and
            managing databases. With my comprehensive knowledge of the entire
            web development process, I can efficiently turn ideas into fully
            functional websites or applications.
          </p>
          <AnimatedBorder
            title="Contact Me"
            arrow="&rarr;"
            borderRadius="2.5px"
          />
        </div>
      </div>
    </section>
  );
};

export default Service;
