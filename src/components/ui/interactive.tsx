import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { cn } from "@/utils/cn";

export const InteractiveCard = ({
  children,
  className,

  borderRadius = "48px",
  rotationFactor = 0.4,
  transitionDuration = 0.3,
  transitionEasing = "easeInOut",

  tailwindBgClass = "bg-transparent backdrop-blur-md",
}: {
  children: React.ReactNode;
  className?: string;

  borderRadius?: string;
  rotationFactor?: number;
  transitionDuration?: number;
  transitionEasing?: string;
  tailwindBgClass?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateXTrans = useTransform(
    y,
    [0, 1],
    [rotationFactor * 15, -rotationFactor * 15]
  );
  const rotateYTrans = useTransform(
    x,
    [0, 1],
    [-rotationFactor * 15, rotationFactor * 15]
  );

  const handlePointerMove = (e: React.PointerEvent) => {
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const px = (e.clientX - bounds.left) / bounds.width;
    const py = (e.clientY - bounds.top) / bounds.height;

    x.set(px);
    y.set(py);
  };
  const handlePointerLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };
  return (
    <motion.div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => {
        setIsHovered(false);
        handlePointerLeave();
      }}
      style={{
        perspective: 1000,
        borderRadius,
      }}
      className="relative w-fit h-fit"
    >
      <motion.div
        style={{
          rotateX: rotateXTrans,
          rotateY: rotateYTrans,
          transformStyle: "preserve-3d",
          transition: `transform ${transitionDuration}s ${transitionEasing}`,
        }}
        className={cn(
          "w-full h-full overflow-hidden shadow-lg",
          tailwindBgClass,
          className
        )}
      >
        <motion.div
          className="absolute inset-0 rounded-xl z-0"
          style={{
            transition: `opacity ${transitionDuration}s ${transitionEasing}`,
            opacity: isHovered ? 0.6 : 0,
            pointerEvents: "none",
          }}
        />

        <div
          className="relative z-10 w-full h-full text-foreground"
          style={{ borderRadius }}
        >
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};
