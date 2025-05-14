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

function DemoPastelPopTheme() {
  const sortedBits = [...demoBundle.bits]
    .sort((a, b) => a.order - b.order)
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  // Fun pastel colors for the links
  const pastelColors = [
    "bg-pink-200 hover:bg-pink-300 border-pink-300 shadow-pink-300/40",
    "bg-blue-200 hover:bg-blue-300 border-blue-300 shadow-blue-300/40",
    "bg-green-200 hover:bg-green-300 border-green-300 shadow-green-300/40",
    "bg-purple-200 hover:bg-purple-300 border-purple-300 shadow-purple-300/40",
    "bg-yellow-200 hover:bg-yellow-300 border-yellow-300 shadow-yellow-300/40",
    "bg-cyan-200 hover:bg-cyan-300 border-cyan-300 shadow-cyan-300/40",
    "bg-orange-200 hover:bg-orange-300 border-orange-300 shadow-orange-300/40",
    "bg-emerald-200 hover:bg-emerald-300 border-emerald-300 shadow-emerald-300/40",
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
  const maxTilt = 7; // Slightly more tilt for pastel pop style
  const scale = 1.03;

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
        idleY.set(Math.sin(Date.now() / 1000) * 4); // More bounce for pastel pop style

        // Very subtle rotation
        idleRotate.set(Math.sin(Date.now() / 1500) * 1); // More rotation for pastel pop style

        // Subtle scale pulsing
        idleScale.set(1 + Math.sin(Date.now() / 2000) * 0.01); // More scaling for pastel pop style
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
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gradient-to-b from-pink-50 to-purple-100 text-gray-700 font-['Quicksand',sans-serif]">
      {/* Fun background decorations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-pink-200 opacity-50"
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-blue-200 opacity-30"
          animate={{
            x: [0, 10, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        ></motion.div>
        <motion.div
          className="absolute -bottom-10 right-1/4 w-40 h-40 rounded-full bg-purple-200 opacity-40"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        ></motion.div>
        <motion.div
          className="absolute top-1/3 right-1/3 w-20 h-20 rounded-full bg-yellow-200 opacity-30"
          animate={{
            x: [0, -10, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-30 h-30 rounded-full bg-green-200 opacity-20"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        ></motion.div>
      </div>

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
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-200">
            <div className="flex flex-col items-center text-center">
              <motion.div
                className="mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="p-2 bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 rounded-full"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <img
                    src={demoBundle.profilePicture || defaultAvatar}
                    alt={demoBundle.displayName}
                    className="w-28 h-28 rounded-full object-cover border-4 border-white"
                  />
                </motion.div>
              </motion.div>

              <motion.h1
                className="text-3xl font-bold text-gray-800"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {demoBundle.displayName}
              </motion.h1>

              <motion.p
                className="text-pink-500 text-sm font-medium mt-1"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                @{demoBundle.bundleName}
              </motion.p>

              {demoBundle.bio && (
                <motion.p
                  className="mt-3 text-gray-600 text-sm max-w-xs"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {demoBundle.bio}
                </motion.p>
              )}
            </div>

            <motion.div
              className="mt-8 space-y-4"
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
                    className={`group flex items-center gap-3 w-full px-6 py-4 rounded-full ${colorClass} transition-all duration-300 text-gray-700 font-medium border-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                    initial={{ opacity: 0, y: 20, x: -10 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ delay: 0.1 * index + 0.6 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {bit.icon && (
                      <motion.span
                        className="text-xl"
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                      >
                        {bit.icon}
                      </motion.span>
                    )}
                    <span className="font-bold">{bit.title}</span>

                    <motion.div
                      className="ml-auto bg-white w-6 h-6 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-500 group-hover:text-gray-700 transition-colors"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        initial={{ x: 0 }}
                        whileHover={{ x: 2 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </motion.svg>
                    </motion.div>
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div
              className="mt-10 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + sortedBits.length * 0.1 }}
            >
              <motion.div
                className="px-5 py-2 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full"
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <span className="text-sm font-medium text-gray-700">
                  Made with 💖 by Bundlebit
                </span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default DemoPastelPopTheme;
