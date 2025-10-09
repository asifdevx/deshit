import { useState, memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { recentAppProjectData } from "@/config/RecentProjectList";
import SectionHeading from "../HelperCom/sectionHeading";
import { InteractiveCard } from "../ui/interactive";
import AnimatedBorder from "../ui/moving-border";
import { Skeleton } from "../ui/skeleton";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

// Memoized Project Card
const ProjectCard = memo(
  ({ app }: { app: (typeof recentAppProjectData)[0]["apps"][0] }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
      <InteractiveCard
        rotationFactor={0.12}
        tailwindBgClass="bg-black/60 backdrop-blur-lg border border-transparent"
        className="project-card rounded-2xl overflow-hidden"
      >
        <motion.div
          className="card-inner"
          variants={cardVariants}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <div className="card-content">
            {/* IMAGE */}
            <div className="image-wrapper">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[90%] h-[90%] rounded-xl bg-white" />
              </div>
              {!isLoaded && <Skeleton className="absolute w-[90%] h-[90%]" />}
              {app.images && app.images.length > 0 && (
                <Image
                  src={app.images[0]}
                  alt={app.title}
                  width={600}
                  height={500}
                  className="card-image"
                  onLoad={() => setIsLoaded(true)}
                  priority
                />
              )}
            </div>

            {/* CONTENT */}
            <div className="card-text">
              <h4 className="text-lg font-semibold text-white mb-2">
                {app.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                {app.description}
              </p>

              <AnimatedBorder
                title="Click to visit"
                arrow="→"
                borderRadius="300px"
              />

              {app.images.length > 1 && (
                <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                  {app.images.slice(1).map((img, i) => (
                    <Image
                      key={`${app.title}-thumb-${i}`}
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
          </div>
        </motion.div>
      </InteractiveCard>
    );
  }
);

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const activeApps =
    activeCategory === "All"
      ? recentAppProjectData.flatMap((cat) => cat.apps)
      : recentAppProjectData.find((cat) => cat.category === activeCategory)
          ?.apps;

  return (
    <section
      id="projects"
      className="w-full max-screen flex flex-col gap-12 mt-16"
    >
      <SectionHeading
        title="My Recent Projects"
        hasDes
        description="I want to become a skilled full stack developer, proficient in both frontend and backend technologies. My goal is to build visually appealing and high-performing web applications."
      />

      {/* Category Menu */}
      <div className="flex flex-wrap justify-center gap-4">
        {["All", ...recentAppProjectData.map((c) => c.category)].map(
          (category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition
              ${
                activeCategory === category
                  ? "bg-blue-300 text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-indigo-50"
              }`}
            >
              {category}
            </button>
          )
        )}
      </div>

      <AnimatePresence mode="wait">
        {activeApps && (
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {activeApps.map((app) => (
              <ProjectCard key={app.title} app={app} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
