import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimation,
  AnimatePresence,
  useMotionValue,
  // useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import {
  FaArrowRight,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaBars,
  FaCheck,
  FaLink,
  FaMagic,
  FaLayerGroup,
  // FaRocket,
  // FaCubes,
  // FaStream,
} from "react-icons/fa";

// Cartoon avatar icons for bundle cards instead of human images
const designerIcon = (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <circle cx="50" cy="50" r="45" fill="#646cff" />
    <circle cx="50" cy="50" r="35" fill="#202127" />
    <path
      d="M30 35 L70 65 M30 65 L70 35"
      stroke="#646cff"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <circle cx="50" cy="50" r="10" fill="#1E93FF" />
  </svg>
);

const artistIcon = (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <circle cx="50" cy="50" r="45" fill="#1E93FF" />
    <circle cx="50" cy="50" r="35" fill="#202127" />
    <path
      d="M30 50 A20 20 0 0 1 70 50 A20 20 0 0 1 30 50 Z"
      fill="none"
      stroke="#1E93FF"
      strokeWidth="6"
    />
    <circle cx="35" cy="40" r="5" fill="#C4E6FF" />
    <circle cx="65" cy="40" r="5" fill="#C4E6FF" />
  </svg>
);

const developerIcon = (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <circle cx="50" cy="50" r="45" fill="#C4E6FF" />
    <circle cx="50" cy="50" r="35" fill="#202127" />
    <path
      d="M35 40 L25 50 L35 60 M65 40 L75 50 L65 60"
      stroke="#C4E6FF"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M55 30 L45 70"
      stroke="#1E93FF"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);

// Bundle cards data
const bundleCardsData = [
  {
    bundleLink: "https://bundlebit.me/designer",
    bundleName: "/designer",
    userIcon: designerIcon,
    name: "Design Studio",
    username: "@designstudio",
    tags: ["Designer", "Creative Agency"],
    gradientFrom: "first-accent",
    gradientTo: "third-blue",
  },
  {
    bundleLink: "https://bundlebit.me/artist",
    bundleName: "/artist",
    userIcon: artistIcon,
    name: "Digital Arts",
    username: "@digitalarts",
    tags: ["Artist", "Illustrator"],
    gradientFrom: "third-blue",
    gradientTo: "second-accent",
  },
  {
    bundleLink: "#",
    bundleName: "/developer",
    userIcon: developerIcon,
    name: "Code Studio",
    username: "@codestudio",
    tags: ["Developer", "Tech Agency"],
    gradientFrom: "first-accent/70",
    gradientTo: "first-blue/70",
  },
];

// Features data
const featuresData = [
  {
    featureIcon: FaMagic,
    featureHeader: "Create your Bundle in seconds",
    featureDescription:
      "Instantly build a clean, personalized page to showcase all your important links in one place.",
    accentColor: "first-accent",
  },
  {
    featureIcon: FaLink,
    featureHeader: "Share one link to rule them all",
    featureDescription:
      "Simplify your online presence. Share a single link that gives your audience access to everything you want them to see.",
    accentColor: "third-blue",
  },
  {
    featureIcon: FaLayerGroup,
    featureHeader: "Organize and update your links with ease",
    featureDescription:
      "Add, remove, and reorder links effortlessly. Keep your Bundle up to date without any hassle.",
    accentColor: "first-blue",
  },
];

// Interfaces for animation components
interface RevealProps {
  children: React.ReactNode;
  width?: "full" | "auto";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

interface FloatingElementProps {
  children: React.ReactNode;
  amplitude?: number;
  duration?: number;
  delay?: number;
}

interface BounceProps {
  children: React.ReactNode;
  delay?: number;
}

// Floating animation component
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

// Bounce animation component
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

// Custom component for cartoony reveal on scroll
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

// Browser Window component for the hero section
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

// Main landing page component
const Page: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".mobile-menu") && !target.closest(".menu-button")) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-first-primary text-first-text-color font-inter min-h-screen">
      {/* Header Component */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-first-primary/80 backdrop-blur-md border-b border-first-section-divider">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Bounce>
              <div className="h-8 w-8 rounded-md bg-gradient-to-r from-first-accent to-third-blue flex items-center justify-center mr-2">
                <span className="text-first-text-color font-bold">B</span>
              </div>
            </Bounce>
            <motion.span
              className="font-poppins font-bold text-xl"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: "backOut",
              }}
            >
              bundlebit
            </motion.span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-first-text-color/80 hover:text-first-text-color transition-colors"
            >
              Features
            </a>
            <a
              href="#bundles"
              className="text-first-text-color/80 hover:text-first-text-color transition-colors"
            >
              Examples
            </a>
            <a
              href="#pricing"
              className="text-first-text-color/80 hover:text-first-text-color transition-colors"
            >
              Pricing
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="text-first-text-color/80 hover:text-first-text-color transition-colors"
            >
              Log in
            </a>
            <motion.a
              href="#"
              className="bg-first-accent hover:bg-first-accent/90 text-first-text-color font-medium rounded-lg px-5 py-2.5"
              whileHover={{
                y: -2,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
              transition={{ duration: 0.2 }}
            >
              Get Started
            </motion.a>
          </div>

          <button
            className="menu-button block md:hidden text-first-text-color"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <FaBars className="text-xl" />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mobile-menu md:hidden bg-first-card border-t border-first-section-divider absolute w-full"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col py-4 px-6 space-y-4">
                <a
                  href="#features"
                  className="text-first-text-color hover:text-first-accent py-2 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#bundles"
                  className="text-first-text-color hover:text-first-accent py-2 transition-colors"
                >
                  Examples
                </a>
                <a
                  href="#pricing"
                  className="text-first-text-color hover:text-first-accent py-2 transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-first-text-color hover:text-first-accent py-2 transition-colors"
                >
                  Log in
                </a>
                <a
                  href="#"
                  className="bg-first-accent text-first-text-color font-medium rounded-lg px-5 py-2.5 text-center"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

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

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
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
                Smart Bio Link Alternative
              </span>

              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                One Bundle <GradientText>Link</GradientText> to Share{" "}
                <br className="hidden md:block" />
                All Your Content
              </h1>

              <p className="text-grey text-lg md:text-xl mb-8 max-w-xl">
                Bundlebit is a clean, smart alternative to Linktree that helps
                you showcase all your important links in one beautiful,
                customizable page.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Bounce delay={0.3}>
                  <motion.a
                    href="#"
                    className="bg-gradient-to-r from-first-accent to-third-blue text-first-text-color font-medium rounded-lg px-8 py-3.5 text-center relative overflow-hidden group"
                    whileHover={{
                      y: -3,
                      boxShadow:
                        "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="relative z-10">Create Your Bundle</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-third-blue to-first-accent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.5 }}
                    />
                  </motion.a>
                </Bounce>

                <Bounce delay={0.5}>
                  <motion.a
                    href="#bundles"
                    className="border border-first-section-divider hover:border-grey text-first-text-color font-medium rounded-lg px-8 py-3.5 flex items-center justify-center gap-2 relative overflow-hidden group"
                    whileHover={{
                      y: -3,
                      boxShadow:
                        "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>See Examples</span>
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
                </Bounce>
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

      {/* Trusted By Section with Animations */}
      <section className="py-12 md:py-16 bg-first-primary relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

        {/* Animated floating shape */}
        <div className="absolute top-0 right-10 opacity-20 pointer-events-none">
          <motion.div
            className="w-60 h-60 rounded-full bg-gradient-to-tl from-first-accent/20 to-third-blue/20 blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-10">
              <p className="text-grey text-sm md:text-base font-medium uppercase tracking-wider relative inline-block">
                <motion.span
                  className="absolute -left-8 w-6 h-px bg-gradient-to-r from-transparent to-first-accent"
                  initial={{ width: 0 }}
                  animate={{ width: 24 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                ></motion.span>
                Trusted by content creators worldwide
                <motion.span
                  className="absolute -right-8 w-6 h-px bg-gradient-to-l from-transparent to-first-accent"
                  initial={{ width: 0 }}
                  animate={{ width: 24 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                ></motion.span>
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {/* YouTubers */}
            <RevealOnScroll delay={0.1}>
              <motion.div
                className="flex items-center justify-center p-4 rounded-lg border border-first-section-divider/5 bg-first-card/50 backdrop-blur-sm group"
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(36, 37, 46, 0.8)",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="h-10 w-10 rounded-full bg-gradient-to-tr from-first-card to-first-section-divider flex items-center justify-center mr-3 group-hover:scale-110"
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={{
                      y: [0, -2, 0, 2, 0],
                      rotate: [0, -5, 0, 5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaYoutube className="text-[#FF0000] text-lg" />
                  </motion.div>
                </motion.div>
                <span className="text-grey font-medium group-hover:text-first-text-color transition-colors">
                  YouTubers
                </span>
              </motion.div>
            </RevealOnScroll>

            {/* Influencers */}
            <RevealOnScroll delay={0.2}>
              <motion.div
                className="flex items-center justify-center p-4 rounded-lg border border-first-section-divider/5 bg-first-card/50 backdrop-blur-sm group"
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(36, 37, 46, 0.8)",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="h-10 w-10 rounded-full bg-gradient-to-tr from-first-card to-first-section-divider flex items-center justify-center mr-3 group-hover:scale-110"
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={{
                      y: [0, -2, 0, 2, 0],
                      rotate: [0, -5, 0, 5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaInstagram className="text-[#E1306C] text-lg" />
                  </motion.div>
                </motion.div>
                <span className="text-grey font-medium group-hover:text-first-text-color transition-colors">
                  Influencers
                </span>
              </motion.div>
            </RevealOnScroll>

            {/* Businesses */}
            <RevealOnScroll delay={0.3}>
              <motion.div
                className="flex items-center justify-center p-4 rounded-lg border border-first-section-divider/5 bg-first-card/50 backdrop-blur-sm group"
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(36, 37, 46, 0.8)",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="h-10 w-10 rounded-full bg-gradient-to-tr from-first-card to-first-section-divider flex items-center justify-center mr-3 group-hover:scale-110"
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={{
                      y: [0, -2, 0, 2, 0],
                      rotate: [0, -5, 0, 5, 0],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-first-blue"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </motion.div>
                </motion.div>
                <span className="text-grey font-medium group-hover:text-first-text-color transition-colors">
                  Businesses
                </span>
              </motion.div>
            </RevealOnScroll>

            {/* Developers */}
            <RevealOnScroll delay={0.4}>
              <motion.div
                className="flex items-center justify-center p-4 rounded-lg border border-first-section-divider/5 bg-first-card/50 backdrop-blur-sm group"
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(36, 37, 46, 0.8)",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="h-10 w-10 rounded-full bg-gradient-to-tr from-first-card to-first-section-divider flex items-center justify-center mr-3 group-hover:scale-110"
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={{
                      y: [0, -2, 0, 2, 0],
                      rotate: [0, -5, 0, 5, 0],
                    }}
                    transition={{
                      duration: 5.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-first-accent"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </motion.div>
                </motion.div>
                <span className="text-grey font-medium group-hover:text-first-text-color transition-colors">
                  Developers
                </span>
              </motion.div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Features Section with Cartoony Animations */}
      <section
        id="features"
        className="py-20 md:py-32 bg-first-primary relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

        {/* Animated blob 1 */}
        <div className="absolute -top-20 -left-20 opacity-20 pointer-events-none">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-96 h-96"
          >
            <motion.path
              fill="#646cff"
              d="M45.9,-77.2C59.6,-71.2,71.3,-60.3,79.5,-47C87.7,-33.7,92.5,-17.9,92.3,-2.2C92.1,13.5,87,26.9,79.5,38.8C72,50.8,62.1,61.2,49.6,69.9C37,78.5,21.8,85.4,5.2,86.3C-11.4,87.2,-23,82.1,-34.4,75.6C-45.8,69.1,-57,61.3,-65.5,50.7C-74,40.1,-80,26.8,-82.1,12.7C-84.2,-1.4,-82.5,-16.2,-77.5,-30.1C-72.5,-44,-64.4,-56.9,-52.7,-64.3C-41,-71.6,-25.8,-73.3,-10.5,-74.2C4.8,-75,19.6,-75,31.7,-76.1C43.9,-77.3,53.5,-81.7,45.9,-77.2Z"
              transform="translate(100 100)"
              animate={{
                d: [
                  "M45.9,-77.2C59.6,-71.2,71.3,-60.3,79.5,-47C87.7,-33.7,92.5,-17.9,92.3,-2.2C92.1,13.5,87,26.9,79.5,38.8C72,50.8,62.1,61.2,49.6,69.9C37,78.5,21.8,85.4,5.2,86.3C-11.4,87.2,-23,82.1,-34.4,75.6C-45.8,69.1,-57,61.3,-65.5,50.7C-74,40.1,-80,26.8,-82.1,12.7C-84.2,-1.4,-82.5,-16.2,-77.5,-30.1C-72.5,-44,-64.4,-56.9,-52.7,-64.3C-41,-71.6,-25.8,-73.3,-10.5,-74.2C4.8,-75,19.6,-75,31.7,-76.1C43.9,-77.3,53.5,-81.7,45.9,-77.2Z",
                  "M37.3,-63.1C48.9,-59.4,59.3,-50.4,66.7,-38.5C74.1,-26.7,78.4,-12.2,76.3,0.8C74.1,13.9,65.5,25.4,56.5,36.1C47.6,46.9,38.4,56.8,27.1,61.7C15.9,66.6,2.5,66.5,-10.9,65.2C-24.2,63.8,-37.4,61.2,-47.8,53.7C-58.2,46.2,-65.7,33.8,-70.6,19.9C-75.5,6,-77.8,-9.4,-73.3,-23C-68.8,-36.7,-57.5,-48.6,-44.4,-51.7C-31.4,-54.8,-16.6,-49.1,-2.1,-45.7C12.5,-42.3,25.6,-66.8,37.3,-63.1Z",
                  "M39.1,-66.7C51.8,-62.2,64.3,-54.1,71.8,-42C79.3,-29.9,81.6,-14.9,79.4,-1.3C77.2,12.4,70.3,24.8,62.2,35.8C54.2,46.8,44.9,56.4,33.5,62.2C22.1,67.9,8.6,69.7,-5.1,69.7C-18.8,69.6,-32.6,67.6,-44.9,61.1C-57.3,54.6,-68.1,43.6,-73.4,30.3C-78.6,17.1,-78.4,1.7,-75.3,-12.9C-72.2,-27.5,-66.2,-41.3,-56.1,-46.9C-46,-52.4,-31.9,-49.8,-20,-52.7C-8.1,-55.6,1.6,-64.1,13.6,-68.1C25.5,-72.1,39.8,-71.6,39.1,-66.7Z",
                  "M45.9,-77.2C59.6,-71.2,71.3,-60.3,79.5,-47C87.7,-33.7,92.5,-17.9,92.3,-2.2C92.1,13.5,87,26.9,79.5,38.8C72,50.8,62.1,61.2,49.6,69.9C37,78.5,21.8,85.4,5.2,86.3C-11.4,87.2,-23,82.1,-34.4,75.6C-45.8,69.1,-57,61.3,-65.5,50.7C-74,40.1,-80,26.8,-82.1,12.7C-84.2,-1.4,-82.5,-16.2,-77.5,-30.1C-72.5,-44,-64.4,-56.9,-52.7,-64.3C-41,-71.6,-25.8,-73.3,-10.5,-74.2C4.8,-75,19.6,-75,31.7,-76.1C43.9,-77.3,53.5,-81.7,45.9,-77.2Z",
                ],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          </svg>
        </div>

        {/* Animated blob 2 */}
        <div className="absolute -bottom-40 -right-20 opacity-20 pointer-events-none">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-96 h-96"
          >
            <motion.path
              fill="#1E93FF"
              d="M46.7,-78C57.5,-69.6,61.3,-51.5,65.6,-36C70,-20.4,74.9,-7.5,71.3,3.6C67.7,14.7,55.4,23.9,45.3,33C35.3,42.1,27.4,51,17.2,57.8C7,64.6,-5.6,69.3,-19.3,69.9C-33,70.5,-47.9,67,-57.6,57.2C-67.3,47.3,-71.8,31.1,-73.1,15.2C-74.3,-0.6,-72.2,-16.1,-66.1,-29.7C-60,-43.3,-49.9,-55,-37.6,-62.5C-25.3,-69.9,-10.6,-73.2,4.7,-75.4C20,-77.5,35.9,-86.4,46.7,-78Z"
              transform="translate(100 100)"
              animate={{
                d: [
                  "M46.7,-78C57.5,-69.6,61.3,-51.5,65.6,-36C70,-20.4,74.9,-7.5,71.3,3.6C67.7,14.7,55.4,23.9,45.3,33C35.3,42.1,27.4,51,17.2,57.8C7,64.6,-5.6,69.3,-19.3,69.9C-33,70.5,-47.9,67,-57.6,57.2C-67.3,47.3,-71.8,31.1,-73.1,15.2C-74.3,-0.6,-72.2,-16.1,-66.1,-29.7C-60,-43.3,-49.9,-55,-37.6,-62.5C-25.3,-69.9,-10.6,-73.2,4.7,-75.4C20,-77.5,35.9,-86.4,46.7,-78Z",
                  "M41.2,-69.1C53.3,-62.9,63.2,-51.9,70.5,-38.5C77.7,-25.2,82.4,-9.5,80.3,5.1C78.3,19.8,69.6,33.2,59.1,44.1C48.6,55,36.3,63.3,22.2,69.5C8.2,75.7,-7.6,79.7,-20.8,75.4C-34,71.1,-44.6,58.5,-56.4,45.7C-68.1,32.9,-81,19.9,-83.6,4.8C-86.2,-10.3,-78.6,-27.8,-67.2,-39.9C-55.9,-52,-41,-58.7,-26.9,-62.8C-12.8,-66.9,0.5,-68.5,14.2,-69.2C28,-69.9,42.2,-69.8,41.2,-69.1Z",
                  "M38.7,-64.8C49.6,-59.1,57.3,-47.1,65.3,-34.3C73.3,-21.5,81.7,-7.9,80.2,4.3C78.7,16.6,67.4,27.5,57.3,38.6C47.2,49.7,38.3,61,26.5,66.1C14.7,71.2,-0.1,70.1,-12.9,65.6C-25.7,61,-36.7,53,-47.2,43.1C-57.7,33.3,-67.7,21.6,-70.8,8C-73.8,-5.6,-70,-20.9,-62.1,-32.9C-54.2,-44.9,-42.1,-53.5,-29.8,-58.3C-17.5,-63.1,-4.9,-64.2,7.1,-65.4C19,-66.7,37.9,-68.3,38.7,-64.8Z",
                  "M46.7,-78C57.5,-69.6,61.3,-51.5,65.6,-36C70,-20.4,74.9,-7.5,71.3,3.6C67.7,14.7,55.4,23.9,45.3,33C35.3,42.1,27.4,51,17.2,57.8C7,64.6,-5.6,69.3,-19.3,69.9C-33,70.5,-47.9,67,-57.6,57.2C-67.3,47.3,-71.8,31.1,-73.1,15.2C-74.3,-0.6,-72.2,-16.1,-66.1,-29.7C-60,-43.3,-49.9,-55,-37.6,-62.5C-25.3,-69.9,-10.6,-73.2,4.7,-75.4C20,-77.5,35.9,-86.4,46.7,-78Z",
                ],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.span
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-first-accent/20 text-first-accent mb-6"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(100, 108, 255, 0.3)",
                }}
              >
                <motion.span
                  className="w-2 h-2 bg-third-blue rounded-full mr-2"
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.span>
                Smart Features
              </motion.span>

              <motion.h2
                className="font-poppins font-bold text-3xl md:text-4xl mb-6 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Everything you need to
                <span className="relative inline-block">
                  <span className="relative z-10">organize</span>
                  <motion.span
                    className="absolute bottom-2 left-0 right-0 h-3 bg-first-accent/20 -z-10"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                  ></motion.span>
                </span>{" "}
                and
                <span className="relative inline-block ml-2">
                  <span className="relative z-10">share</span>
                  <motion.span
                    className="absolute bottom-2 left-0 right-0 h-3 bg-third-blue/20 -z-10"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1.3 }}
                  ></motion.span>
                </span>{" "}
                your online presence
              </motion.h2>

              <motion.p
                className="text-grey text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                A smart, clean alternative to complicated bio link tools. Simple
                yet powerful.
              </motion.p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {featuresData.map((feature, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <motion.div
                  className={`bg-gradient-to-b from-first-card to-first-card/60 p-8 rounded-xl border border-first-section-divider/30 relative overflow-hidden group`}
                  whileHover={{
                    y: -8,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Accent corner */}
                  <motion.div
                    className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-${feature.accentColor}/40 to-transparent -mr-8 -mt-8 rounded-full blur-lg group-hover:from-${feature.accentColor}/60`}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Icon container with bounce animation */}
                  <motion.div
                    className={`relative mb-6 inline-flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-${feature.accentColor}/20 to-${feature.accentColor}/5 text-${feature.accentColor} text-2xl`}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 2 + index,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                      }}
                    >
                      <feature.featureIcon />
                    </motion.div>
                  </motion.div>

                  <h3
                    className={`font-poppins font-semibold text-xl mb-3 group-hover:text-${feature.accentColor} transition-colors`}
                  >
                    {feature.featureHeader}
                  </h3>

                  <p className="text-grey group-hover:text-grey/90 transition-colors">
                    {feature.featureDescription}
                  </p>

                  {/* Animated arrow on hover */}
                  <motion.div
                    className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className={`flex items-center justify-center h-8 w-8 rounded-full bg-${feature.accentColor}/10`}
                    >
                      <FaArrowRight
                        className={`text-${feature.accentColor} text-xs`}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={0.3}>
            <div className="mt-20 md:mt-32">
              <div className="bg-first-card rounded-2xl border border-first-section-divider overflow-hidden">
                <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-first-accent/20 text-first-accent mb-6">
                      <span className="w-2 h-2 bg-third-blue rounded-full mr-2"></span>
                      Analytics Dashboard
                    </span>
                    <h3 className="font-poppins font-semibold text-2xl mb-4">
                      Track your performance and understand your audience
                    </h3>
                    <p className="text-grey mb-6">
                      Get detailed insights on how visitors interact with your
                      Bundle. See which links perform best and optimize your
                      content.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <FaCheck className="text-expand-button mt-1 mr-3" />
                        <span className="text-grey">
                          Real-time click tracking
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-expand-button mt-1 mr-3" />
                        <span className="text-grey">Visitor demographics</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-expand-button mt-1 mr-3" />
                        <span className="text-grey">
                          Performance trends over time
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
                      alt="Analytics dashboard visualization"
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Bundle Cards Section */}
      <section
        id="bundles"
        className="py-20 md:py-32 bg-first-primary relative"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-first-section-divider"></div>

        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-first-accent/20 text-first-accent mb-6">
                <span className="w-2 h-2 bg-third-blue rounded-full mr-2"></span>
                Bundle Examples
              </span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
                See what others have created
              </h2>
              <p className="text-grey text-lg">
                Explore these Bundles to get inspired and see what's possible
                with Bundlebit.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bundleCardsData.map((bundle, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <motion.a
                  href={bundle.bundleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-first-card rounded-2xl border border-first-section-divider overflow-hidden block"
                  whileHover={{
                    y: -5,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`h-40 bg-gradient-to-r from-${bundle.gradientFrom} to-${bundle.gradientTo} relative overflow-hidden`}
                  >
                    {/* Cartoony pattern background */}
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <pattern
                          id={`gridPattern-${index}`}
                          width="10"
                          height="10"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 10 0 L 0 0 0 10"
                            fill="none"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="0.5"
                          />
                        </pattern>
                        <pattern
                          id={`dotsPattern-${index}`}
                          width="20"
                          height="20"
                          patternUnits="userSpaceOnUse"
                        >
                          <circle
                            cx="10"
                            cy="10"
                            r="1"
                            fill="rgba(255,255,255,0.2)"
                          />
                        </pattern>
                      </defs>
                      <rect
                        width="100%"
                        height="100%"
                        fill={`url(#gridPattern-${index})`}
                      />
                      <rect
                        width="100%"
                        height="100%"
                        fill={`url(#dotsPattern-${index})`}
                      />

                      {/* Random cartoon shapes */}
                      <circle
                        cx="85"
                        cy="20"
                        r="15"
                        fill="rgba(255,255,255,0.1)"
                      />
                      <circle
                        cx="15"
                        cy="80"
                        r="10"
                        fill="rgba(255,255,255,0.05)"
                      />
                      <path
                        d="M60,10 Q80,50 60,90"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M30,10 Q10,50 30,90"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>

                    <div className="absolute -bottom-10 left-6">
                      <div className="w-20 h-20 rounded-full border-4 border-first-card overflow-hidden bg-first-card">
                        {bundle.userIcon}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-14">
                    <h3 className="font-poppins font-semibold text-xl mb-1">
                      {bundle.name}
                    </h3>
                    <p className="text-grey text-sm mb-4">{bundle.username}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {bundle.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`${
                            tagIndex === 0
                              ? "bg-first-accent/10 text-first-accent"
                              : "bg-third-blue/10 text-third-blue"
                          } text-xs px-3 py-1 rounded-full`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-grey text-sm">
                      <FaLink className="mr-2" />
                      <span>{`bundlebit.me${bundle.bundleName}`}</span>
                    </div>
                  </div>
                </motion.a>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={0.4}>
            <div className="text-center mt-12">
              <motion.a
                href="#"
                className="inline-flex items-center text-first-text-color border border-first-section-divider hover:border-grey px-6 py-3 rounded-lg"
                whileHover={{
                  y: -2,
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
                transition={{ duration: 0.2 }}
              >
                <span>View more examples</span>
                <FaArrowRight className="ml-2" />
              </motion.a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-first-primary relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-first-section-divider"></div>

        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-first-accent/20 to-third-blue/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <img
                src="https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=800"
                alt="Abstract geometric pattern"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <RevealOnScroll>
                <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
                  Ready to create your own Bundle?
                </h2>
                <p className="text-grey text-lg mb-8">
                  Join thousands of creators and businesses who have simplified
                  their online presence with Bundlebit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="#"
                    className="bg-first-accent hover:bg-first-accent/90 text-first-text-color font-medium rounded-lg px-8 py-3.5 text-center"
                    whileHover={{
                      y: -2,
                      boxShadow:
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    Get Started for Free
                  </motion.a>
                  <motion.a
                    href="#"
                    className="bg-first-text-color/10 hover:bg-first-text-color/20 text-first-text-color font-medium rounded-lg px-8 py-3.5 flex items-center justify-center gap-2"
                    whileHover={{
                      y: -2,
                      boxShadow:
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>See Pricing</span>
                    <FaArrowRight className="text-xs" />
                  </motion.a>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                <img
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Abstract tech illustration"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-first-primary relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-first-section-divider"></div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="h-8 w-8 rounded-md bg-first-accent flex items-center justify-center mr-2">
                  <span className="text-first-text-color font-bold">B</span>
                </div>
                <span className="font-poppins font-bold text-xl">
                  bundlebit
                </span>
              </div>
              <p className="text-grey mb-6">
                The clean, smart link-in-bio alternative for creators and
                businesses.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-grey hover:text-first-text-color transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-grey hover:text-first-text-color transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-grey hover:text-first-text-color transition-colors"
                >
                  <FaYoutube />
                </a>
                <a
                  href="#"
                  className="text-grey hover:text-first-text-color transition-colors"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-first-text-color mb-4">
                Product
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-grey hover:text-first-text-color transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-grey hover:text-first-text-color transition-colors"
                  >
                    Templates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-grey hover:text-first-text-color transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-grey hover:text-first-text-color transition-colors"
                  >
                    Examples
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-first-text-color mb-4">
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-grey hover:text-first-text-color transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-grey hover:text-first-text-color transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-grey hover:text-first-text-color transition-colors"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-grey hover:text-first-text-color transition-colors"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-first-text-color mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-grey hover:text-first-text-color transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-grey hover:text-first-text-color transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-grey hover:text-first-text-color transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-grey hover:text-first-text-color transition-colors"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-first-section-divider pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-grey text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Bundlebit. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-grey hover:text-first-text-color text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-grey hover:text-first-text-color text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-grey hover:text-first-text-color text-sm transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
