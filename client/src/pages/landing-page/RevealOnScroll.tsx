import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
interface RevealProps {
  children: React.ReactNode;
  width?: "full" | "auto";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const RevealOnScroll: React.FC<RevealProps> = ({
  children,
  width = "full",
  delay = 0,
  direction = "up",
}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Directional variants
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.21, 1.02, 0.47, 1], // Custom easing for more cartoony feel
        delay: delay,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={width === "full" ? "w-full" : ""}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
