import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import RevealOnScroll from "./RevealOnScroll";
// import Bounce from "./Bounce";

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

const BrowserWindow: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-2xl border border-first-section-divider">
      <div className="bg-first-card p-3 flex items-center">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-close-button"></div>
          <div className="w-3 h-3 rounded-full bg-minimize-button"></div>
          <div className="w-3 h-3 rounded-full bg-expand-button"></div>
        </div>
        <div className="w-full mx-4">
          <div className="bg-first-icon rounded-md h-6 flex items-center px-3">
            <span className="text-xs text-grey">bundlebit.me/username</span>
          </div>
        </div>
      </div>
      {children}
    </div>
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
  const [username, setUSername] = useState("");
  return (
    <>
      {/* Hero Section with Animation */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
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
                One <GradientText>Bundle </GradientText>
                <span className="text-third-blue">.</span> Every{" "}
                <GradientText>bit </GradientText> of you
                <span className="text-third-blue">.</span>
                {/* <br className="hidden md:block" /> */}
              </h1>

              <p className="text-grey text-lg md:text-xl mb-8 max-w-xl">
                Bundlebit helps you organize and share what makes you you - your
                personal links to social media, content, and more, which we call{" "}
                <GradientText>Bits </GradientText> - all in one elegant,
                customizable page called a <GradientText>Bundle </GradientText>.
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
                      setUSername(e.target.value);
                    }}
                    className="font-medium rounded-lg relative overflow-hidden py-2 bg-white border-none outline-none text-grey text-sm"
                  />
                </div>
                {/* <Bounce delay={0.3}> */}
                {/* </Bounce> */}

                {/* <Bounce delay={0.5}> */}
                <motion.a
                  href={`/b/signup?username=${username}`}
                  className="bg-third-blue text-first-text-color rounded-3xl flex items-center justify-center gap-2 relative overflow-hidden group px-3 py-3"
                  whileHover={{
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <span>Create your Bundle</span>
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
                {/* </Bounce> */}
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={0.2}>
              <BrowserWindow>
                <div className="relative overflow-hidden">
                  {/* Cartoon style illustration */}
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 800 600"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="800" height="600" fill="#202127" />

                    {/* Background grid pattern */}
                    <motion.path
                      d="M0 100 H800 M0 200 H800 M0 300 H800 M0 400 H800 M0 500 H800 M100 0 V600 M200 0 V600 M300 0 V600 M400 0 V600 M500 0 V600 M600 0 V600 M700 0 V600"
                      stroke="#2b2f36"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                      initial={{ opacity: 0.3 }}
                      animate={{
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Profile section */}
                    <motion.rect
                      x="200"
                      y="120"
                      width="400"
                      height="100"
                      rx="8"
                      fill="#1b1b1f"
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    />
                    <motion.circle
                      cx="250"
                      cy="170"
                      r="35"
                      fill="#646cff"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.5,
                      }}
                    />
                    <motion.rect
                      x="300"
                      y="155"
                      width="150"
                      height="10"
                      rx="5"
                      fill="#ffffff"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 150, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    />
                    <motion.rect
                      x="300"
                      y="175"
                      width="100"
                      height="10"
                      rx="5"
                      fill="#71767b"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 100, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.9 }}
                    />

                    {/* Links section */}
                    <motion.rect
                      x="200"
                      y="250"
                      width="400"
                      height="60"
                      rx="8"
                      fill="#1E93FF"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                    />
                    <motion.rect
                      x="200"
                      y="330"
                      width="400"
                      height="60"
                      rx="8"
                      fill="#646cff"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.3 }}
                    />
                    <motion.rect
                      x="200"
                      y="410"
                      width="400"
                      height="60"
                      rx="8"
                      fill="#C4E6FF"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.5 }}
                    />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-t from-first-primary to-transparent opacity-30"></div>
                </div>
              </BrowserWindow>
            </RevealOnScroll>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-first-section-divider"></div>
      </section>
    </>
  );
}

export default HeroSection;
