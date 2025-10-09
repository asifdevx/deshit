import { useMemo, useState, memo, useCallback } from "react";
import dynamic from "next/dynamic";

import { motion } from "framer-motion";

import { recentAppProjectData } from "@/config/RecentProjectList";
import SectionHeading from "../HelperCom/sectionHeading";





const containerVariants = {
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};
const ProjectCard = dynamic(
  () => import("../HelperCom/projectShowCase/projectCard").then(mod => mod.ProjectCard),
  { ssr: false }
);

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const activeApps = useMemo(() => {
    if (activeCategory === "All") {
      return recentAppProjectData.flatMap((cat) => cat.apps);
    }
    return (
      recentAppProjectData.find((cat) => cat.category === activeCategory)?.apps ||
      []
    );
  }, [activeCategory]);

 
  const handleCategoryClick = useCallback((category: string) => {
    setActiveCategory(category);
  }, []);

  const categories = useMemo(
    () => ["All", ...recentAppProjectData.map((c) => c.category)],
    []
  );

  return (
    <section
      id="projects"
      className="w-full max-screen mx-auto flex flex-col gap-12 mt-16 px-4"
    >
      <SectionHeading
        title="My Recent Projects"
        hasDes
        description="I want to become a skilled full stack developer, proficient in both frontend and backend technologies. My goal is to build visually appealing and high-performing web applications."
      />

      {/* Category Menu */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-5 py-2 rounded-full font-medium transition duration-300 ${
              activeCategory === category
                ? "bg-blue-500 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-indigo-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {activeApps.map((app) => (
          <ProjectCard key={app.title} app={app} />
        ))}
      </motion.div>
    </section>
  );
}
