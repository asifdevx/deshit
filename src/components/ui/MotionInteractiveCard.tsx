import { motion } from "framer-motion";
import React from "react";
import { InteractiveCard } from "./interactive";

interface MotionInteractiveCardProps {
  children: React.ReactNode;
  className?: string;
}

export const MotionInteractiveCard: React.FC<MotionInteractiveCardProps> = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={{
        hidden:{},
        show:{
          transition:{staggerChildren: 0.2, delayChildren: 0.3}
        }
      }}
    >
      <InteractiveCard className={className}>{children}</InteractiveCard>
    </motion.div>
  );
};
