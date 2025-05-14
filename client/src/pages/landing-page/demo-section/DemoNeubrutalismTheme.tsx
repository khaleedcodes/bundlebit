import defaultAvatar from "../../../assets/images/default-avatar.jpeg";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const demoBundle = {
  displayName: "Lena Ray",
  bundleName: "lenaray",
  profilePicture: defaultAvatar,
  bio: "Designer. Dreamer. Building beautiful things for the web.",
  bits: [
    {
      title: "Portfolio Website",
      url: "https://lena.design",
      icon: "💼",
      order: 1,
      isPinned: true,
    },
    {
      title: "Dribbble Shots",
      url: "https://dribbble.com/lenaray",
      icon: "🎨",
      order: 2,
      isPinned: false,
    },
    {
      title: "LinkedIn Profile",
      url: "https://linkedin.com/in/lenaray",
      icon: "🔗",
      order: 3,
      isPinned: false,
    },
    {
      title: "Instagram",
      url: "https://instagram.com/lenaray",
      icon: "📸",
      order: 4,
      isPinned: false,
    },
  ],
};

function DemoNeubrutalismTheme() {
  const sortedBits = [...demoBundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  // Generate random pastel background colors for link buttons
  const pastelColors = [
    "bg-yellow-300",
    "bg-green-300",
    "bg-blue-300",
    "bg-purple-300",
    "bg-pink-300",
    "bg-orange-300",
    "bg-teal-300",
    "bg-indigo-300",
  ];

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
  const maxTilt = 8; // Slightly more tilt for neubrutalism style
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
        idleY.set(Math.sin(Date.now() / 1000) * 3.5); // More bounce for neubrutalism style

        // Very subtle rotation
        idleRotate.set(Math.sin(Date.now() / 1500) * 0.8); // More rotation for neubrutalism style

        // Subtle scale pulsing
        idleScale.set(1 + Math.sin(Date.now() / 2000) * 0.008); // More scaling for neubrutalism style
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

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-[#f0f0e4] text-gray-900 font-['Plus_Jakarta_Sans',sans-serif] relative">
      {/* Large abstract shape decorations */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-blue-300 rounded-full opacity-50"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-300 rounded-full opacity-50"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      ></motion.div>
      <motion.div
        className="absolute top-40 right-40 w-20 h-20 bg-pink-300 rounded-full opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      ></motion.div>

      <div
        ref={containerRef}
        className="w-full max-w-md mx-auto z-10"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          style={{ transform: combinedTransform }}
          className="will-change-transform"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="bg-white px-10 py-12 rounded-xl border-4 border-gray-900 shadow-[8px_8px_0px_#000000]">
            <div className="flex flex-col items-center text-center">
              <motion.div
                className="mb-8 relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <motion.div
                  className="absolute -inset-2 bg-pink-300 rounded-full -rotate-6 shadow-[4px_4px_0px_#000000]"
                  animate={{
                    rotate: [-6, 0, -6],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.div>
                <motion.img
                  src={demoBundle.profilePicture || defaultAvatar}
                  alt={demoBundle.displayName}
                  className="relative w-28 h-28 rounded-full object-cover border-4 border-gray-900 z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </motion.div>

              <motion.h1
                className="text-3xl font-bold text-gray-900 tracking-tight mt-2"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {demoBundle.displayName}
              </motion.h1>

              <motion.p
                className="text-blue-600 text-sm font-semibold mt-1"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                @{demoBundle.bundleName}
              </motion.p>

              {demoBundle.bio && (
                <motion.div
                  className="mt-4 inline-block bg-yellow-300 px-6 py-3 rounded-lg border-4 border-gray-900 shadow-[4px_4px_0px_#000000] transform rotate-1"
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ rotate: 0, y: -5 }}
                >
                  <p className="text-gray-900 text-sm max-w-xs font-medium">
                    {demoBundle.bio}
                  </p>
                </motion.div>
              )}
            </div>

            <motion.div
              className="mt-8 space-y-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {sortedBits.map((bit, index) => {
                // Pick a color based on the index, cycling through the available pastel colors
                const colorClass = pastelColors[index % pastelColors.length];

                return (
                  <motion.a
                    key={index}
                    href={bit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 w-full px-6 py-4 rounded-xl ${colorClass} border-4 border-gray-900 hover:translate-y-[-4px] hover:translate-x-[-4px] hover:shadow-[8px_8px_0px_#000000] shadow-[4px_4px_0px_#000000] transition-all duration-200 text-gray-900 font-bold`}
                    style={{
                      transform: `rotate(${((index % 3) - 1) * 0.8}deg)`,
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index + 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {bit.icon && <span className="text-xl">{bit.icon}</span>}
                    <span>{bit.title}</span>

                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-auto text-gray-900"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div
              className="mt-12 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + sortedBits.length * 0.1 }}
            >
              <motion.div
                className="inline-block bg-white px-4 py-2 border-4 border-gray-900 shadow-[4px_4px_0px_#000000] transform -rotate-2"
                whileHover={{
                  rotate: 2,
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <span className="text-sm font-bold">Bundlebit × 2025</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default DemoNeubrutalismTheme;
