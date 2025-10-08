import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { recentAppProjectData } from "@/config/RecentProjectList";
import { useState } from "react";
import SectionHeading from "../HelperCom/sectionHeading";

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const activeApps =
    activeCategory === "All"
      ? recentAppProjectData.flatMap((cat) => cat.apps)
      : recentAppProjectData.find((cat) => cat.category === activeCategory)
          ?.apps;

  return (
    <section className="max-screen w-full flex flex-col gap-12 mt-16">
      {/* Section heading */}
      <SectionHeading
        title="My Recent Projects"
        hasDes={true}
        description="I want to become a skilled full stack developer, proficient in both frontend and backend technologies. My goal is to build visually appealing and high-performing web applications."
      />

      {/* Category Menu */}
      <div className="flex flex-wrap justify-center gap-4 ">
        <button
          key="All"
          onClick={() => setActiveCategory("All")}
          className={`px-5 py-2 rounded-full font-medium transition 
            ${
              activeCategory === "All"
                ? "bg-blue-300 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-indigo-50"
            }`}
        >
          All
        </button>

        {recentAppProjectData.map((categoryItem, idx) => (
          <button
            key={idx / idx}
            onClick={() => setActiveCategory(categoryItem.category)}
            className={`px-5 py-2 rounded-full font-medium transition 
              ${
                activeCategory === categoryItem.category
                  ? "bg-blue-300 text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-indigo-50"
              }`}
          >
            {categoryItem.category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeApps && (
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {activeApps?.map((app, idx) => (
              <motion.div
              key={idx * idx * idx}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="rounded-2xl shadow-md overflow-hidden hover:shadow-xl bg-black text-white transition-all duration-300"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative w-full h-52 flex items-center justify-center bg-black">
                {/* White background layer */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[90%] h-[90%] rounded-xl bg-white" />
                </div>
            
                {/* Image */}
                {app.images && app.images.length > 0 && (
                  <Image
                    src={app.images[0]}
                    alt={app.title}
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
            
              {/* CONTENT */}
              <div className="p-5">
                <h4 className="text-lg font-semibold text-white mb-2">
                  {app.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  {app.description}
                </p>
            
                <div className="text-blue-400 font-medium flex items-center gap-1 cursor-pointer hover:gap-2 transition-all">
                  Click to Visit <span className="text-xl">&rarr;</span>
                </div>
            
                {/* Extra Images */}
                {app.images.length > 1 && (
                  <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                    {app.images.slice(1).map((img, i) => (
                      <Image
                        key={i}
                        src={img}
                        alt={`${app.title} screenshot ${i + 1}`}
                        width={90}
                        height={90}
                        className="rounded-md border border-gray-700 object-cover flex-shrink-0"
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
            
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
