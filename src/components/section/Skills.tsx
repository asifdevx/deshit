import { SkillList } from "@/config/skillList";
import Image from "next/image";
import React from "react";
import SectionHeading from "../HelperCom/sectionHeading";

const Skills = () => {
  return (
    <>
      {/* Section Heading */}
      <div className="max-screen w-full mt-14">
        <SectionHeading title="My Skills" hasDes={false} />
      </div>

      {/* Skills Container */}
      <section id="skills" className="bg-[#6E6E6E30] w-full backdrop-blur-md py-10 ">
        <div className="px-3 md:px-14 flex flex-col md:flex-row items-start justify-center gap-5">

          {/* Left Side – Skill Icons */}
          <div className="bg-[#303030] w-full md:w-1/2 grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2 md:p-4 rounded-2xl border border-white/40">
            {Array.from({ length: 10 }, (_, idx) => (
              <div
                key={idx+542}
                className="flex items-center justify-center  rounded-xl p-6 hover:scale-105 transition-transform"
              >
                <Image
                  src={`/skill_${idx + 1}.svg`}
                  alt={`Skill ${idx + 1}`}
                  width={idx == 0 ?90: 60 }
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Right Side – Skill Details */}
          <div className="bg-[#303030] w-full md:w-1/2 grid grid-cols-1 gap-6 py-6 px-2 rounded-2xl text-white border border-[#FFFFFF1A]">
            {SkillList.map((group, groupIdx) => (
              <ul key={groupIdx} className="list-disc list-inside border-2 border-white p-2 gap-3 " >
                {group.details.map((item, itemIdx) => (
                  <li key={itemIdx+2} className=''>
                    <span className="text-lg md:text-sm lg:text-md text-md font-semibold tracking-wide  md:tracking-normal lg:tracking-wide">
                      {item.key} 
                    </span>
                    <span className="text-[#DBB9B9BA] font-bold md:text-semibold lg:font-bold text-sm">{" : "}{item.value}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Skills;
