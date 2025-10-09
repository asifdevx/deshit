import { InteractiveCard } from "@/components/ui/interactive";
import AnimatedBorder from "@/components/ui/moving-border";
import { Skeleton } from "@/components/ui/skeleton";
import { recentAppProjectData } from "@/config/RecentProjectList";
import { motion } from "framer-motion";
import Image from "next/image";
import { memo, useState } from "react";
import { ThumbnailList } from "./Thumbnail";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const ProjectCard = memo(
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
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="card-content">
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
                  loading="lazy"
                />
              )}
            </div>

            {/* CONTENT */}
            <div className="card-text px-3 pb-4">
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
                <ThumbnailList images={app.images.slice(1)} />
              )}
            </div>
          </div>
        </motion.div>
      </InteractiveCard>
    );
  }
);

ProjectCard.displayName = "ProjectCard";
