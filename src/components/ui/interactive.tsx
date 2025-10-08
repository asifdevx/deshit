import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/utils/cn";

export const InteractiveCard = ({
  children,
  className,
  borderRadius = "16px",
  rotationFactor = 0.15, // small rotation
  tailwindBgClass = "bg-white/20 backdrop-blur-md",
}: {
  children: React.ReactNode;
  className?: string;
  borderRadius?: string;
  rotationFactor?: number; // smaller rotation factor
  tailwindBgClass?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [0, 1], [rotationFactor * 10, -rotationFactor * 10]);
  const rotateY = useTransform(x, [0, 1], [-rotationFactor * 10, rotationFactor * 10]);

  const handlePointerMove = (e: React.PointerEvent) => {
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const px = (e.clientX - bounds.left) / bounds.width;
    const py = (e.clientY - bounds.top) / bounds.height;

    x.set(px);
    y.set(py);
  };

  const handlePointerLeave = () => {
    x.set(0.5); // reset to center
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ perspective: 600, borderRadius }}
      className="relative w-fit aspect-fit isolate cursor-pointer"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "w-full h-full rounded-xl overflow-hidden border shadow-md",
          tailwindBgClass,
          className
        )}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
