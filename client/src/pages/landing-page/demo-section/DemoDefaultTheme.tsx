import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import defaultAvatar from "../../../assets/images/bundlebit-logo/bundlebit-rounded-square-white (7).png";

// All data in a single file as requested
const demoBundle = {
  displayName: "Bundlebit",
  bundleName: "Bundlebit",
  profilePicture: defaultAvatar,
  bio: "Simplify your link management",
  bits: [
    { title: "Features", url: "#features" },
    { title: "Create your Bundle", url: "/b/signup" },
    { title: "Featured Bundles", url: "#bundles" },
    { title: "FAQs", url: "#faq" },
  ],
};

function DemoDefaultTheme() {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values for x and y rotation
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Motion values for idle animation
  const idleY = useMotionValue(0);
  const idleRotate = useMotionValue(0);
  const idleScale = useMotionValue(1);

  // Apply spring physics for smooth animation
  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  const springIdleY = useSpring(idleY, { damping: 15, stiffness: 100 });
  const springIdleRotate = useSpring(idleRotate, {
    damping: 15,
    stiffness: 100,
  });
  const springIdleScale = useSpring(idleScale, { damping: 15, stiffness: 100 });

  // Parameters for the 3D effect
  const perspective = 1000;
  const maxTilt = 15;
  const scale = 1.02;

  // Transform values for the card when hovering
  const hoverTransform = useTransform(
    [springRotateX, springRotateY],
    ([latestRotateX, latestRotateY]) =>
      `perspective(${perspective}px) rotateX(${latestRotateX}deg) rotateY(${latestRotateY}deg) scale(${
        isHovering ? scale : 1
      })`
  );

  // Transform values for idle animation when not hovering
  const idleTransform = useTransform(
    [springIdleY, springIdleRotate, springIdleScale],
    ([y, rotate, scale]) =>
      `perspective(${perspective}px) translateY(${y}px) rotate(${rotate}deg) scale(${scale})`
  );

  // Combined transform - use hover transform when hovering, otherwise use idle animation
  const combinedTransform = useTransform(() =>
    isHovering ? hoverTransform.get() : idleTransform.get()
  );

  // Idle animation
  useEffect(() => {
    if (!isHovering) {
      // Start looping idle animations
      const idleAnimationInterval = setInterval(() => {
        // Subtle vertical bobbing
        idleY.set(Math.sin(Date.now() / 1000) * 5);

        // Very subtle rotation
        idleRotate.set(Math.sin(Date.now() / 1500) * 1);

        // Subtle scale pulsing
        idleScale.set(1 + Math.sin(Date.now() / 2000) * 0.01);
      }, 50);

      return () => clearInterval(idleAnimationInterval);
    }
  }, [isHovering]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !isHovering) return;

    const bounds = containerRef.current.getBoundingClientRect();

    // Calculate mouse position relative to card center
    const mouseX = e.clientX - bounds.left - bounds.width / 2;
    const mouseY = e.clientY - bounds.top - bounds.height / 2;

    // Calculate rotation values based on mouse position
    const rotateYValue = (mouseX / bounds.width) * maxTilt * 2;
    const rotateXValue = -((mouseY / bounds.height) * maxTilt * 2);

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  // Fix: Handle click events on link elements
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string
  ) => {
    e.preventDefault();
    console.log(`Link clicked: ${url}`);
    window.location.href = url;
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center text-white font-['Inter',system-ui,sans-serif]">
      <div
        ref={containerRef}
        className="w-full max-w-[370px] mx-auto"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          style={{
            transform: combinedTransform,
            pointerEvents: "auto", // Fix: Ensure pointer events are enabled
            position: "relative", // Fix: Set position to create a new stacking context
            zIndex: 30, // Fix: Make sure it's above other elements
          }}
          className="will-change-transform"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="bg-gradient-to-b from-[#1a1a1d]/80 to-[#1a1a1d] backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-800/80 relative overflow-hidden">
            {/* Animated background blobs */}
            <motion.div
              className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl"
              animate={{
                opacity: [0.2, 0.3, 0.2],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl"
              animate={{
                opacity: [0.2, 0.3, 0.2],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            ></motion.div>

            <div className="relative flex flex-col items-center text-center z-10">
              {/* Profile image with animated gradient border */}
              <motion.div
                className="group relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src={demoBundle.profilePicture}
                  alt={demoBundle.displayName}
                  className="w-28 h-28 rounded-full object-cover shadow-lg border-2 border-indigo-500/70 p-[2px] bg-[#0f0f11] z-10 relative"
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 via-indigo-500 to-purple-600 blur-[2px] opacity-70 group-hover:opacity-100"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                ></motion.div>
              </motion.div>

              {/* Name and bio with staggered fade-in */}
              <motion.h1
                className="mt-5 text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {demoBundle.displayName}
              </motion.h1>
              <motion.p
                className="text-indigo-400 text-sm font-medium"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                @{demoBundle.bundleName}
              </motion.p>
              {demoBundle.bio && (
                <motion.p
                  className="mt-3 text-gray-400 text-sm max-w-xs"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {demoBundle.bio}
                </motion.p>
              )}
            </div>

            {/* Links with staggered animation */}
            <motion.div
              className="mt-8 space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {demoBundle.bits.map((bit, index) => (
                <motion.a
                  key={index}
                  href={bit.url}
                  target="_self"
                  onClick={(e) => handleLinkClick(e, bit.url)} // Fix: Added explicit click handler
                  className="group flex items-center gap-3 w-full px-6 py-4 rounded-xl bg-[#0f0f11]/80 border border-gray-800/50 hover:border-indigo-500/50 hover:bg-gradient-to-r hover:from-indigo-600/20 hover:to-purple-600/20 transition-all duration-300 text-white font-medium shadow-md hover:shadow-lg hover:shadow-indigo-500/10 transform hover:-translate-y-0.5 cursor-pointer"
                  // Fix: Added inline styles to ensure clickability
                  style={{
                    position: "relative",
                    zIndex: 50,
                    pointerEvents: "auto",
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.5 }}
                  whileHover={{ y: -2 }}
                >
                  <span className="group-hover:text-indigo-100 transition-colors">
                    {bit.title}
                  </span>

                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-auto text-gray-500 group-hover:text-indigo-400 transition-all"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </motion.svg>
                </motion.a>
              ))}
            </motion.div>

            {/* Footer */}
            <motion.div
              className="mt-10 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
                Created with{" "}
                <a
                  href="https://bundlebit.me/"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                  style={{
                    position: "relative",
                    zIndex: 50,
                    pointerEvents: "auto",
                  }}
                  onClick={(e) => handleLinkClick(e, "https://bundlebit.me/")}
                >
                  Bundlebit
                </a>
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default DemoDefaultTheme;
