import React from "react";
import { motion } from "framer-motion";

interface BounceProps {
  children: React.ReactNode;
  delay?: number;
}
const Bounce: React.FC<BounceProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: delay,
        },
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default Bounce;
