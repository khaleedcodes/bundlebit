import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import RevealOnScroll from "./RevealOnScroll";
import DemoBundlePreview from "./demo-section/DemoBundlePreview";

interface FloatingElementProps {
  children: React.ReactNode;
  amplitude?: number;
  duration?: number;
  delay?: number;
}
const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  amplitude = 15,
  duration = 4,
  delay = 0,
}) => {
  const y = useMotionValue(0);
  const yFloat = useSpring(y, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      y.set(Math.random() * amplitude - amplitude / 2);
    }, duration * 500);

    return () => clearInterval(intervalId);
  }, [amplitude, duration, y]);

  return (
    <motion.div
      style={{ y: yFloat }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay },
      }}
    >
      {children}
    </motion.div>
  );
};

// Gradient Text component
const GradientText: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <span className="bg-gradient-to-r from-first-accent to-second-accent inline-block text-transparent bg-clip-text">
      {children}
    </span>
  );
};

function HeroSection() {
  const [username, setUsername] = useState("");
  return (
    <>
      {/* Hero Section with Animation */}
      <section className="pt-20 pb-20 md:pb-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-[#1E1E3F]/30 to-transparent pointer-events-none"></div>

        {/* Animated floating orbs */}
        <FloatingElement amplitude={20} duration={5} delay={0.3}>
          <div className="absolute top-20 right-10 w-20 h-20 rounded-full bg-first-accent/10 blur-xl"></div>
        </FloatingElement>
        <FloatingElement amplitude={30} duration={6} delay={0.5}>
          <div className="absolute bottom-40 left-10 w-16 h-16 rounded-full bg-third-blue/10 blur-xl"></div>
        </FloatingElement>
        <FloatingElement amplitude={20} duration={7} delay={0.1}>
          <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-first-blue/10 blur-xl"></div>
        </FloatingElement>

        {/* Grid pattern in background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 min-h-[75vh]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center justify-center min-h-[75vh]">
            <RevealOnScroll direction="left">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-first-accent/20 text-first-accent mb-6">
                <motion.span
                  className="w-2 h-2 bg-third-blue rounded-full mr-2"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.span>
                Everything in one bundle
              </span>

              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                One <GradientText>bundle </GradientText>
                <span className="text-third-blue">.</span> Every{" "}
                <GradientText>bit </GradientText> of you
                <span className="text-third-blue">.</span>
                {/* <br className="hidden md:block" /> */}
              </h1>

              <p className="text-grey text-base md:text-lg mb-8 max-w-xl">
                Bundlebit helps you organize and share what makes you you - your
                personal links to social media, content, and more, which we call{" "}
                <GradientText>bits </GradientText> - all in one elegant,
                customizable page called a <GradientText>bundle </GradientText>.
                It’s your digital hub, built for creators, freelancers, and
                anyone with a story to share.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex bg-white rounded-lg pl-2 items-center group focus-within:ring-2 focus-within:ring-third-blue">
                  <span className="text-grey text-sm font-medium">
                    bundlebit.me/
                  </span>
                  <motion.input
                    placeholder="yourusername"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    className="font-medium rounded-lg relative overflow-hidden py-2 bg-white border-none outline-none text-grey text-sm"
                  />
                </div>
                <motion.a
                  href={`/b/signup?username=${username}`}
                  className="bg-new-main-2 text-first-text-color rounded-3xl flex items-center justify-center gap-2 relative overflow-hidden group px-6 py-3"
                  whileHover={{
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-medium ">Create your Bundle</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <FaArrowRight className="text-xs" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-first-accent/5 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.5 }}
                  />
                </motion.a>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={0.2}>
              <DemoBundlePreview />
            </RevealOnScroll>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-first-section-divider"></div>
      </section>
    </>
  );
}

export default HeroSection;
